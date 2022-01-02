import "./App.css";
import Photo from "./Components/FirstReactBWA/Photo";
import Description from "./Components/FirstReactBWA/Description";
import Reviews from "./Components/FirstReactBWA/Reviews";

function App() {
  return (
    <div className="parent-box">
      <div className="content-detail">
        <Photo />
        <Description
          category="SNEAKER"
          name="Vans KW Super"
          price={150000}
          isDiskon={false}
        />
      </div>
      <Reviews />
    </div>
  );
}

export default App;
