import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export function valueSetter(fname, lname, email, age, about, accept) {
  //alert(fname + lname + email)
  document.getElementById('firstname').value = fname;
  document.getElementById('lastname').value = lname;
  document.getElementById('email').value = email;
  document.getElementById('age').value = age;
  document.getElementById('about').value = about;
  document.getElementById('accept').checked = accept;

}
const classes = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

class SignUp extends Component  {

  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = this.getFirstName.value;
    const lastName =  this.getLastName.value;
    const password = this.getPassword.value;
    const age = this.getAge.value;
    const about = this.getAbout.value;
    const accepted = this.getAccept.value;

    const data = {
      id: new Date(),
      firstName,
      lastName,
      password,
      age,
      about,
      accepted,
      editing:false
    }
    this.props.dispatch({
      type:'ADD_USER',
      data});
    this.getFirstName.value = '';
    this.getLastName.value = '';
    this.getPassword.value = '';   
    this.getAge.value = '';
    this.getAbout.value = '';
    this.getAccept = '';
  }
render() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="First name"
                name="username"
                id="firstname"
                required
                fullWidth
                autoFocus
                value={this.getFirstName}
                inputRef={(input)=>this.getFirstName = input} 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputRef={(input)=>this.getLastName = input} 
              />
          </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="email"
                type="email"
                id="email"
                inputRef={(input)=>this.getPassword = input} 
              />
            </Grid>


            <Grid item xs={12}>
            <TextField 
              type="number"
              variant="outlined"
              required
              fullWidth
              name="age"
              id="age"
              inputRef={(input)=> this.getAge = input}
              InputProps={{
                  inputProps: { 
                      max: 100, min: 10 
                  }
              }}
              label="Age"
              />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="about"
              label="About you"
              multiline
              rows={10}
              variant="outlined"
              inputRef={(input)=> this.getAbout = input}
            />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox 
                value="allowExtraEmails" 
                color="primary"
                id="accept"
                inputRef={(input)=> this.getAccept = input}
                 />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
}
export default connect()(SignUp);