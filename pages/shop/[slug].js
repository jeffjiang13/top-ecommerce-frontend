import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardSkeleton from "../../components/cardskeleton";
import Layout from "../../components/layout";
import ProductCard from "../../components/productcard";
import { recentCategory } from "../../slices/categorySlice";
import Head from "next/head";

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories");
  const data = await res.json();
  const resTypes = await fetch(process.env.NEXT_PUBLIC_APIURL + "/types");
  const dataTypes = await resTypes.json();
  const resItems = await fetch(
    process.env.NEXT_PUBLIC_APIURL +
      `/items?category.slug=${slug}&_sort=published_at:DESC`
  );
  const dataItems = await resItems.json();

  return {
    props: {
      data,
      dataItems,
      dataTypes,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_APIURL + "/categories");
  const data = await res.json();

  // Add this check to ensure the data is an array
  if (!Array.isArray(data)) {
    console.error('Data from API is not an array:', data);
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = data.map((cat) => ({
    params: { slug: cat.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

function Category({ data, dataItems, dataTypes }) {
  const [sort, setSort] = useState(0);
  const recent_category = useSelector(recentCategory);
  const data_items = dataItems
    .filter((item) => {
      if (recent_category.length > 0) {
        return item.type.name == recent_category;
      } else {
        return true;
      }
    })
    .sort((a, b) => {
      if (sort === 1) {
        return a.price - b.price;
      }
      if (sort === 2) {
        return b.price - a.price;
      }
      return true;
    });

  return (
    <>
      <Head>
        <title>ChiqueChick | Shop</title>
      </Head>
      <Layout categories={data} setSort={setSort} types={dataTypes}>
        {data_items.length > 0 ? (
          data_items.map((item) => <ProductCard key={item.slug} item={item} />)
        ) : (
          <p className="col-span-full mx-auto my-10 text-sm text-gray-400">
            No item found
          </p>
        )}
      </Layout>
    </>
  );
}

export default Category;
