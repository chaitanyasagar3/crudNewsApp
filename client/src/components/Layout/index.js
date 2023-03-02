import { Outlet, Link } from "react-router-dom";
import Header from "./Header";

import styled from "styled-components";



const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
