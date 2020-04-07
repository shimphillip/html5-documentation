import Head from 'next/head';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Introduction</title>
      </Head>
      <h2>Introduction</h2>
      <h3>What are Semantic Elements?</h3>
      <p>
        A semantic element clearly describes its meanings to both the browser
        and the developer.
      </p>
      <p>
        Examples of <strong>non-semantic elements:</strong>{' '}
        <span className="primary-color">{'<div>'}</span> and{' '}
        <span className="primary-color">{'<span>'}</span> - Tells nothing about
        its content.
      </p>
      <p>
        Examples of <strong>semantic</strong> elements:{' '}
        <span className="primary-color">{'<form>'}</span>,{' '}
        <span className="primary-color">{'<table>'}</span> and{' '}
        <span className="primary-color">{'<article>'}</span> - Clearly defines
        its context.
      </p>
      <h3>Why Semantic Elements?</h3>
      <p>
        According to the W3C, a Semantic Web: "Allows data to be shared and
        reused across applications, enterprises, and communities."
      </p>
      <p>
        With HTML4, developers used their own id/class names to style elements:
        header, top, bottom, footer, menu, navigation, main, container,content,
        article, sidebar, topnav, etc. This made it impossible for search
        engines to identify the correct web page content.
      </p>
      <h3>Browser Support</h3>
      <p>HTML5 semantic elements are supported in all modern browsers.</p>
    </>
  );
};

export default Home;
