import React from "react";
import Head from "next/head";
import Header from "../components/header";

const About = () => {
  return (
    <>
      <Head>
        <title>ChiqueChick | About</title>
      </Head>
      <div className="w-full min-h-screen bg-gray-200">
        <Header />
        <br />
        <br />
        <div className="max-w-5xl mx-auto pt-20 pb-10 md:px-0">
          <h1 className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            About Us
          </h1>
          <p className="text-md md:text-xl">
            Welcome to the Online Store! We are dedicated to providing our
            customers with high-quality at affordable prices. Our team works
            tirelessly to source the latest trends and ensure that you have the
            best possible shopping experience.
          </p>
          <br />
          <p className="text-md md:text-xl">
            Our mission is to create a one-stop shop for all your footwear
            needs, offering a wide range of styles for men, women, and children.
            We believe that everyone deserves to look and feel their best, and
            we're here to help make that happen.
          </p>
          <br />
          <p className="text-md md:text-xl">
            Thank you for choosing Online Store, and we hope you enjoy shopping
            with us!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
