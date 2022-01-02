import React from "react";

export default function Reviews() {
  const review = [
    {
      id: 1,
      name: "Yayak",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      img: "https://images.pexels.com/photos/2216542/pexels-photo-2216542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 2,
      name: "Taka",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      img: "https://images.pexels.com/photos/899954/pexels-photo-899954.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
    {
      id: 3,
      name: "Ginantaka",
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
      img: "https://images.pexels.com/photos/654690/pexels-photo-654690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    },
  ];

  const listReview = review.map((list) => {
    return (
      <div key={list.id} className="content-review">
        <img src={list.img} alt="img-dummy" />
        <div className="review-information">
          <h6>{list.name}</h6>
          <p>{list.comment}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="review">
      <h5>Review</h5>
      {listReview}
      <div style={{ height: 100 }}></div>
    </div>
  );
}
