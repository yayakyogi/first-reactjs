import React from "react";
import PropTypes from "prop-types";

export default function Description(props) {
  const { category, name, price, isDiskon, total_diskon } = props;
  const benefits = [
    "Produk tahan lama",
    "Cocok dipakai dimanapun",
    "Nyaman dipakai",
  ];
  const listBenefits = benefits.map((items, key) => {
    return <li key={key}>{items}</li>;
  });

  return (
    <div className="description">
      <p className="cate">{category}</p>
      <h1 className="title">{name}</h1>
      <p className="price">IDR {price}</p>
      <p>{isDiskon ? `Diskon ${total_diskon} %` : null}</p>
      <p className="info">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has
      </p>
      <ul>{listBenefits}</ul>
      <a onClick={(e) => Buy(name, e)} href="##">
        Add to chart
      </a>
    </div>
  );
}

function Buy(e) {
  return console.log(`Beli item ${e}`);
}

Description.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  isDiskon: PropTypes.bool,
  total_diskon: PropTypes.number,
};
