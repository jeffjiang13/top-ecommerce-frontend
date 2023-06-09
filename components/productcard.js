import React from "react";
import Image from "next/image";
import NumberFormat from "react-number-format";
import { motion } from "framer-motion";
import Router from "next/router";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../slices/wishlistSlice";
import Link from "next/link";

function ProductCard({ item }) {
  const { size } = item.size;
  const { image } = item.image;
  const dispatch = useDispatch();

  return (
    <div className="rounded-xl cursor-pointer">
      <div className="overflow-hidden cursor-default rounded-xl relative group">
        <motion.div
          initial={{ scale: 1.3, x: 50, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link href={"/product/" + item.slug}>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <Image
                loading="lazy"
                src={item.image[0].name}
                alt={item.name}
                className="rounded-xl w-60 h-60"
                width={500}
                height={500}
                style={{
                  objectFit: "cover",
                  aspectRatio: "1/1",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transition: "opacity 0.5s ease-in-out",
                }}
              />
            </div>
          </Link>
        </motion.div>
        <div className="hidden absolute rounded-xl h-full w-full bg-gray-500 backdrop-filter backdrop-blur-sm bg-opacity-30 top-0 group group-hover:flex justify-center place-items-center z-10">
          <div className="flex overflow-hidden cursor-pointer">
            <button
              onClick={() => dispatch(addToWishlist(item))}
              className="p-2 bg-white hover:bg-gray-100 active:bg-gray-200 rounded-lg"
            >
              <svg
                className="w-6 m-auto h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={() => Router.push("/product/" + item.slug)}
        className="px-2 py-2"
      >
        <p className="text-sm line-clamp-1">{item.name}</p>
        <p className="text-xs my-2 text-gray-400">{item.color}</p>
        <NumberFormat
          value={item.price}
          className="text-sm font-semibold text-black"
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          renderText={(value, props) => (
            <p className="text-sm font-semibold" {...props}>
              {" "}
              {value}{" "}
            </p>
          )}
        />{" "}
      </div>{" "}
    </div>
  );
}

export default ProductCard;
