import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import RegisterUser from "./RegisterUser";
import Banner from "../Others/Banner";
import Categories from "./Categories";
const HomeScreen = () => {

  return (
    <>
      <TopNavbar />
        <Banner/>
        <Categories/>
    </>
  );
};

export default HomeScreen;
