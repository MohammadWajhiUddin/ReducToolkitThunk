import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import RegisterUser from "./RegisterUser";
import Banner from "../Others/Banner";
import AllProducts from "./AllProducts";
const HomeScreen = () => {

  return (
    <>
      <TopNavbar />
        <Banner/>
        <AllProducts/>
    </>
  );
};

export default HomeScreen;
