import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Walmart | Save Money. Live better",
  description:
    "Browse and buy the latest electronic gadgets and devices on our online store. Find great deals on smartphones, laptops, and more. Fast shipping and secure payments.",
  keywords:
    "electronics, gadgets, smartphones, laptops, online shopping, tech accessories",
};

export default Meta;
