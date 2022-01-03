import React, { Component } from "react";

export default class FetchApi extends Component {
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
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result,
        });
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    const listUser = items.map((result) => {
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
    });
    if (!isLoaded) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div className="fetch-api">
          <ul className="wrap">{listUser}</ul>
        </div>
      );
    }
  }
}
