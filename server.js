const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/any",
      name: "안현상2",
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
    },
    {
      id: 4,
      image: "https://placeimg.com/64/64/any/4",
      name: "손용일",
      brithday: 920156,
      sex: "남성",
      job: "백수"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
