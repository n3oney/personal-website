import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>neoney.me</title>
    </Head>
    <Navbar />
    <Component {...pageProps} />
  </>
}

export default MyApp;
