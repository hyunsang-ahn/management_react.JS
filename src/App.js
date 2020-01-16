import React, { Component } from "react";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "안현상",
    brithday: 930211,
    sex: "남성",
    job: "developer"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any/2",
    name: "홍길동",
    brithday: 930211,
    sex: "남성",
    job: "developer"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any/3",
    name: "안현상",
    brithday: 930211,
    sex: "남성",
    job: "developer"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              brithday={c.brithday}
              sex={c.sex}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
