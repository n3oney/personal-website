import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Navbar from "../components/Navbar";
import { FaGit } from 'react-icons/fa';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>neoney.me</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta property="og:title" content="neoney" />
      <meta property="og:description" content="neoney's website" />
      <meta property="og:image" content="https://www.neoney.me/embedimage.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#ff5adc" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp;
