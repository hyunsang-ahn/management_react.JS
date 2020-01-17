import React, { Component } from "react";
import Customer from "./components/Customer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1000
  }
});

const customers = [
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
    job: "백수ㅡ"

  }
];

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>순번</TableCell>
              <TableCell>프로필사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
