import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { valueSetter } from '../form/signup'
const classes = makeStyles({
  table: {
    float: 'right',
    minWidth: 650,
  },
});

class AllUsers extends Component {
  render() {
  return (
    
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">About</TableCell>
            <TableCell align="right">Accepted</TableCell>
            <TableCell align="right">EDIT</TableCell>
            <TableCell align="right">DELETE</TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.users.map((user) => (
            <TableRow key={user.firstName}>
              <TableCell component="th" scope="row">
                {user.firstName}
              </TableCell>
              <TableCell align="right">{user.lastName}</TableCell>
              <TableCell align="right">{user.password}</TableCell>
              <TableCell align="right">{user.age}</TableCell>
              <TableCell align="right">{user.about}</TableCell>
              <TableCell align="right">{user.accepted}</TableCell>

              <TableCell align="right">
                <button onClick={() => valueSetter(user.firstName, user.lastName, user.password, user.age, user.about, user.accepted)}>
                  Edit
                </button>
              </TableCell>

              <TableCell align="right">
              <button onClick={()=>this.props.dispatch({type:'DELETE_USER',id:user.id})}>
                  Delete
              </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
}

const mapStateToProps = (state) => {
  return {
      users: state
  }
}

export default connect(mapStateToProps)(AllUsers);