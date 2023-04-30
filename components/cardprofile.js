import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import axios from "axios";
import { useSelector } from "react-redux";

function CardProfile({ session: initialSession, orders }) {
  const [session, setSession] = useState(initialSession);
  const [imageUrl, setImageUrl] = useState(
    initialSession.profileImage
      ? initialSession.profileImage.provider === 'cloudinary'
        ? initialSession.profileImage.url
        : `${process.env.NEXT_PUBLIC_APIURL}${initialSession.profileImage.url}`
      : ""
  );
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector((state) => state.token.value);

  useEffect(() => {
    console.log("Token:", token);

    const fetchUserData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_APIURL}/users/${initialSession.id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched user data:", response);
        setSession(response.data);
        if (response.data.profileImage) {
          setImageUrl(
            response.data.profileImage.provider === 'cloudinary'
              ? response.data.profileImage.url
              : `${process.env.NEXT_PUBLIC_APIURL}${response.data.profileImage.url}`
          );
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [token, initialSession.id]);

  const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append("files", imageFile);

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APIURL}/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const userUpdateResponse = await axios.put(
        `${process.env.NEXT_PUBLIC_APIURL}/users/${session.id}`,
        { profileImage: res.data[0].id },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSession({
        ...session,
        profileImage: res.data[0],
      });
      setImageUrl(
        res.data[0].provider === 'cloudinary'
          ? res.data[0].url
          : `${process.env.NEXT_PUBLIC_APIURL}${res.data[0].url}`
      );
    } catch (err) {
      console.log("Image upload error:", err);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const selectedImage = event.target.files[0];
      uploadImage(selectedImage);
    }
  };

  return (
    <div className="rounded-2xl p-5 bg-white shadow-lg">
      <div className="flex flex-col place-items-center pb-3 border-b border-gray-300">
        <label htmlFor="upload-image" className="cursor-pointer">
          {isLoading ? (
            <div className="w-24 h-24 rounded-full bg-gray-200 animate-spin mb-2"></div>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              className="w-24 h-24 rounded-full mb-2"
              alt="Profile"
              onLoad={() => setIsLoading(false)}
            />
            ) : (
              <div className="w-24 h-24 rounded-full bg-black mb-2"></div>
            )}
            <input
              type="file"
              id="upload-image"
              className="hidden"
              accept="image/*"
              onChange={onImageChange}
            />
          </label>
          <div className="text-center">
            <p className="mb-1">{session.username}</p>
            <p className="text-xs text-gray-400 mb-1">Verified Account</p>
            <p className="text-xs text-gray-400">{session.email}</p>
          </div>
        </div>
        <div className="py-3 flex flex-col place-items-center">
          <div className="flex place-items-center mb-2 font-semibold">
            <svg
              className="w-4 h-4 text-black mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              />
            </svg>
            <p className="text-xs text-black">Member+</p>
          </div>
          <div className="text-center text-xs mb-2">
            <p className="text-black mb-1">Payment succeeded :</p>
            <p className="text-gray-400">{orders.length} times</p>
          </div>
          <div className="text-center text-xs">
            <p className="text-black mb-1">Money Spent :</p>
            <NumberFormat
              value={orders.reduce(
                (val, order) =>
                  val +
                  order.items.reduce((v, i) => v + i.amount_subtotal / 100, 0),
                0
              )}
              className="text-gray-400 text-xs"
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value, props) => (
                <p className="text-gray-400 text-xs" {...props}>
                  {value}
                </p>
              )}
            />
          </div>
        </div>
        <p className="text-gray-400 text-xs">
          Shop now and earn a new pair of shoes with every $1000 spent - loyalty
          has never looked so stylish!
        </p>
      </div>
    );
  }

  export default CardProfile;
