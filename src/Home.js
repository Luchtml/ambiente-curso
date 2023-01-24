import React from 'react';
import Head from './Head';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      {/* <Head title="Home" description="Essa é a descrição da Home"/> */}
      <Helmet>
        <title>Titulo Site | Home</title>
        <meta name="description" content="Essa é a descrição da Home" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </div>
  );
};

export default Home;
