import Head from "next/head";
import HomePage from "../components/Homepage.jsx";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Anish Shrestha</title>
        <meta name="description" content="Anish Shrestha web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
