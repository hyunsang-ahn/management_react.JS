import React, { Component } from "react";
import Customer from "./components/Customer";

const customer = {
  name: "안현상",
  brithday: 930211,
  sex: "남성",
  job: "developer"
};

class App extends Component {
  render() {
    return (
      <Customer
        name={customer.name}
        brithday={customer.brithday}
        sex={customer.sex}
        job={customer.job}
      />
    );
  }
}

export default App;
