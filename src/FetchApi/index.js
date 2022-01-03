import React, { Component, useState, useEffect } from "react";

// * CLASS COMPPONENT
class FetchApiClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return (
        <div>
          <h1>Error: {error.message}</h1>
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="fetch-api">
          <ul className="wrap">
            {items.map((result) => {
              return (
                <li key={result.id} className="card">
                  <div className="profile">
                    <h5>Profil</h5>
                    <p>Nama: {result.name}</p>
                    <p>Email: {result.email}</p>
                    <p>Webise: {result.website}</p>
                  </div>
                  <div className="address">
                    <h5>Alamat</h5>
                    <p>Kota: {result.address.city}</p>
                    <p>Jalan: {result.address.street}</p>
                    <p>No rumah: {result.address.suite}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }
}

// * HOOKS
export default function FetchApiHooks() {
  const [error, setError] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <div className="fetch-api">
        <ul className="wrap">
          {items.map((result) => {
            return (
              <li key={result.id} className="card">
                <div className="profile">
                  <h5>Profil</h5>
                  <p>Nama: {result.name}</p>
                  <p>Email: {result.email}</p>
                  <p>Webise: {result.website}</p>
                </div>
                <div className="address">
                  <h5>Alamat</h5>
                  <p>Kota: {result.address.city}</p>
                  <p>Jalan: {result.address.street}</p>
                  <p>No rumah: {result.address.suite}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
