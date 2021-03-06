import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../lib/fetcher";
import styles from "../styles/Home.module.css";
import { Product } from "../types/product";

const Products: NextPage = () => {
  // About SWR https://swr.vercel.app/docs/getting-started
  const { data, error } = useSWR<Product[], Error>("/api/products", fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Products Page</h1>

        <p className={styles.description}>Click on a product to get started</p>

        {error && <p>Error: {error.message}</p>}

        <div className={styles.grid}>
          {data?.map((product) => (
            <a
              href={`/${product.product_id}`}
              key={product.product_id}
              className={styles.card}
            >
              <h1>{product.title}</h1>
              <img src={product.image} alt={product.title} />
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.adeptmind.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="https://www.adeptmind.ai/images/logo.png"
              alt="Adeptmind Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Products;
