import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="py-12 bg-primary ">
      <p className="text-center text-gray-50">Copyright © {year} BPI</p>
    </div>
  );
};

export default Footer;
