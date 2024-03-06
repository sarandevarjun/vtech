import * as React from "react";

import Layout from "../components/Layout";
import Maincontent from "../components/Maincontent";
const Home = () => {
  return (
    <>
      <Layout>
        <Maincontent />
      </Layout>
    </>
  );
};

export default Home;

export const Head = () => <title>Home Page</title>;
