import React from "react";
import Head from "next/head";
function NotFound() {
  return (
    <>
      <Head>
        <title>ChiqueChick | 404</title>
      </Head>
      <div className="w-full min-h-screen bg-gray flex justify-center place-items-center">
        <div className="flex flex-col justify-center place-items-center">
          <h1 className="text-6xl text-black font-bold">404</h1>
          <h1 className="text-xl text-gray-400 font-bold">PAGE NOT FOUND</h1>
        </div>
      </div>
    </>
  );
}

export default NotFound;
