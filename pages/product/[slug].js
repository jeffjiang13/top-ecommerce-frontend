import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import NumberFormat from "react-number-format";
import Link from "next/link";
import { motion } from "framer-motion";
import { addToBasket } from "../../slices/basketSlice";
import NotFound from "../404";
import ProductCard from "../../components/productcard";
import Head from "next/head";
import {
  addToWishlist,
  removeFromWishlist,
  selectWishItems,
} from "../../slices/wishlistSlice";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";

function Product({ dataItem, dataAlso }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedSize, setSelectedSize] = useState(0);
  const dispatch = useDispatch();
  const [imgSelected, setImgSelected] = useState(0);
  const [liked, setLiked] = useState(false);
  const wishlistItems = useSelector(selectWishItems);
  const isInWishlist = (product) => {
    if (!product || !product.id) return false;

    return wishlistItems.some((wishlistItem) => wishlistItem.id === product.id);
  };

  const handleLikeClick = () => {
    if (isInWishlist(dataItem)) {
      dispatch(removeFromWishlist(dataItem));
    } else {
      dispatch(addToWishlist(dataItem));
    }
    setLiked(!liked);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!dataItem || !dataAlso) return <NotFound />;
  useEffect(() => {
    setLiked(isInWishlist(dataItem));
  }, [wishlistItems, dataItem]);

  return (
    <>
      <Head>
        <title>{dataItem.name}</title>
      </Head>
      <div className="bg-gray min-h-screen pb-10 bg-gray-200">
        <Header />
        <div className="max-w-4xl mx-auto min-h-screen pt-16">
          <div className="flex justify-between place-items-center py-4 px-1 mb-4">
            <Link href="/shop">
              <div className="w-9 h-9 shadow-lg bg-white text-black hover:bg-black hover:text-white duration-200 cursor-pointer rounded-full flex justify-center place-items-center">
                <svg
                  className="w-4 h-4 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </Link>
            <h4 className="text-black text-md font-bold">Product Details</h4>
            <div className="w-8"></div>
          </div>

          <div className="w-full bg-white md:rounded-2xl shadow-lg md:py-8 md:px-10 md:flex overflow-hidden">
            <div className="photo md:w-1/3">
              <img
                className="h-30 object-cover w-30 md:rounded-2xl"
                src={dataItem.image[imgSelected].name}
                alt=""
                onClick={openModal}
              />
              <div>
                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  contentLabel="Product Image Modal"
                  className="modal"
                  overlayClassName="modal-overlay"
                >
                  <img
                    className="h-full object-cover w-full md:rounded-2xl"
                    src={dataItem.image[imgSelected].name}
                    alt=""
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-0 right-0 bg-white text-black p-2 rounded-full"
                  >
                    &times;
                  </button>
                </Modal>
              </div>
              <div className="px-2 md:px-0 flex mt-4">
                {dataItem.image.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.name}
                    onClick={() => setImgSelected(idx)}
                    className={`${
                      imgSelected == idx
                        ? `border-2 border-black filter brightness-90 `
                        : ``
                    } md:w-14 md:h-14 h-16 w-16 rounded-xl object-cover mr-3 cursor-pointer duration-100 `}
                    alt=""
                  />
                ))}
              </div>
            </div>
            <div className="detail px-2 md:px-0 mt-3 md:mt-0 md:ml-6 py-2 md:w-2/3">
              <p className="flex place-items-center text-sm text-gray-400">
                {dataItem.type.name}
                <span className="mx-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {dataItem.category.name}
              </p>
              <h1 className="text-3xl text-black font-medium my-3">
                {dataItem.name}
              </h1>
              <p className="text-sm text-gray-400">{dataItem.color}</p>
              <NumberFormat
                value={dataItem.price}
                className="my-3 font-semibold text-lg text-black"
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value, props) => (
                  <p className="text-sm font-semibold" {...props}>
                    {value}
                  </p>
                )}
              />
              <div className="sizes text-sm text-gray-400">
                <p className="mb-2">Select size</p>
                <div className="flex">
                  {dataItem.size.data.map((size, idx) => (
                    <button
                      onClick={() => setSelectedSize(idx)}
                      key={idx}
                      className={`${
                        selectedSize === idx
                          ? `bg-black text-white`
                          : `text-black border border-black`
                      } text-black mr-2 duration-200 flex place-items-center justify-center rounded-full w-12 h-12 cursor-pointer hover:bg-black hover:text-white`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>
              <div className="buttoncart flex mt-5 w-full">
                <button
                  onClick={() => {
                    dispatch(
                      addToBasket({
                        ...dataItem,
                        selectedSizeProp: dataItem.size[selectedSize],
                      })
                    );
                  }}
                  className="w-4/5 md:w-3/5 bg-black overflow-hidden py-4 text-white rounded-lg text-sm active:bg-gray-800 duration-100"
                >
                  <motion.span
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="flex justify-center place-items-center overflow-hidden"
                  >
                    Add to basket
                    <span>
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </span>
                  </motion.span>
                </button>
                <button
                  onClick={handleLikeClick}
                  className="w-1/5 ml-2 bg-white border border-black py-4 text-black rounded-lg text-sm"
                >
                  <svg
                    className="w-5 h-5 m-auto"
                    fill={liked ? "red" : "none"}
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

          <div className="text-black p-2 md:px-10 md:py-6 mt-14 bg-white md:rounded-2xl shadow-lg">
            <p className="mb-4 font-medium text-lg">You may also like:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-6">
              {dataAlso
                .filter((it, idx) => it.name != dataItem.name)
                .map((data, idx) => {
                  if (idx < 4)
                    return <ProductCard key={data.slug} item={data} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/items");
  const data = await res.json();

  // Add this check to ensure the data is an array
  if (!Array.isArray(data)) {
    console.error('Data from API is not an array:', data);
    return {
      paths: [],
      fallback: true,
    };
  }

  const paths = data.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}


export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(
    process.env.NEXT_PUBLIC_APIURL + `/items?slug=${slug}`
  );
  const data = await res.json();
  const dataItem = data[0];
  const resAlso = await fetch(
    process.env.NEXT_PUBLIC_APIURL +
      `/items?category.slug=${dataItem?.category.slug}`
  );
  const dataAlso = await resAlso.json();

  if (!data.length) {
    return {
      redirect: {
        destination: "/shop",
        permanent: false,
      },
    };
  }

  return {
    props: {
      dataItem,
      dataAlso,
    },
    revalidate: 5,
  };
}

export default Product;
