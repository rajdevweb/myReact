import React, { useContext } from "react";
import { DataContext } from "../context/Usercontext";

const Footer = () => {
  let footer = useContext(DataContext)
  
  return (
    <>
      {/* <h1>Hello i am Footer {footer}</h1> */}
    </>
  );
};

export default Footer;
