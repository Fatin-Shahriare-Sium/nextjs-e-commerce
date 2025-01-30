import React, { useEffect } from "react";
import BottomNav from "../component/bottom-nav";
import Login from "../component/login";
import { useData } from "../store";
import { useRouter } from "next/router";
const Loginx = () => {
  let router = useRouter();
  let { auth } = useData();

  return (
    <div>
      <Login />
    </div>
  );
};

export default Loginx;
