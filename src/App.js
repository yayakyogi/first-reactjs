import "./App.css";

function App() {
  return (
    <div className="parent-box">
      <div className="content-detail">
        <Foto />
        <Description
          category="SNEAKER"
          name="Sepatu Gaul"
          price="150.000"
          isDiskon={false}
        />
      </div>
      <Review />
    </div>
  );
}

function Review() {
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

function Foto() {
  return (
    <div className="foto">
      <img
        src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80"
        alt="logo"
      />
    </div>
  );
}

function Description(props) {
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
export default App;
