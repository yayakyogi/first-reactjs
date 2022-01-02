import "./App.css";

function App() {
  return (
    <div className="parent-box">
      <div className="foto">
        <img
          src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80"
          alt="logo"
        />
      </div>
      <div className="description">
        <p className="cate">SNEAKER</p>
        <h1 className="title">Sneaker Gaul</h1>
        <p className="price">IDR 100.000,00</p>
        <p className="info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has
        </p>
      </div>
    </div>
  );
}

export default App;
