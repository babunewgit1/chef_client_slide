import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Spinner from "../Shared/Spiner/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" && <Spinner></Spinner>}
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
