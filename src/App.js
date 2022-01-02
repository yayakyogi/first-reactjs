import "./App.css";

function App() {
  return (
    <div className="parent-box">
      <Foto />
      <Description
        category="SNEAKER"
        name="Sepatu Gaul"
        price="150.000"
        isDiskon={false}
      />
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
