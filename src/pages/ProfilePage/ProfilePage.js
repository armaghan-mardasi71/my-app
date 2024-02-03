import "./ProfilePage.css";
import React from "react";
import UserProfile from "../../components/UserProfile/UserProfile";
import Footer from "../../components/Footer/Footer";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import { Outlet,useLocation } from "react-router-dom";

export default function ProfilePage() {
  const loc = useLocation();
  console.log(loc);
  return (
    <>
      <HeaderNav />
      <div className="content">
        <UserProfile />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
