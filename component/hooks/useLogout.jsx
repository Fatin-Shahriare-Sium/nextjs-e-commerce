import React from "react";
import { useRouter } from "next/router.js";
import Cookies from "js-cookie";
const UseLogout = () => {
  let router = useRouter();
  function handleLogout() {
    Cookies.remove("comm_token");
    localStorage.removeItem("userx");
    localStorage.removeItem("tokenx");
    router.push("/login");
  }
  return { handleLogout };
};

export default UseLogout;
