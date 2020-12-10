import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(6))]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  group: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  left: {
    alignItems: 'left',
  }
});

function CreateTest(props) {
  const { classes } = props;
  const [testName,setTestName] = useState('');
  const [testDescription,setTestDescription] = useState('');
  const [testDate,setTestDate] = useState('');
  const [testTime,setTestTime] = useState('');

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Test
        </Typography>
        <form className={classes.form}>

          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="testName" >Test Name</InputLabel>
            <Input id="testName" name="testName" value={testName} onChange={(event)=>{setTestName(event.target.value)}}
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="testDescription" >Test Description</InputLabel>
            <Input id="testDescription" name="testDescription" value={testDescription} onChange={(event)=>{setTestDescription(event.target.value)}} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField id="testDate" label="Test Date*" type="date" value={testDate} onChange={(event)=>{setTestDate(event.target.value)}}
              InputLabelProps={{ shrink: true, }}
            ></TextField>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <TextField id="testTime" label="Test Time*" type="time" value={testTime} onChange={(event)=>{setTestTime(event.target.value)}}
              InputLabelProps={{ shrink: true, }}
            ></TextField>
          </FormControl>
          {/* <FormControl margin="normal" required fullWidth>
              <InputLabel>Gender</InputLabel><br></br><br></br>
              <RadioGroup
                aria-label="Gender"
                name="gender"
                value={this.state.form.gender}
                onChange={this.handleChange}
                className={classes.group}
              >
                <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
              </RadioGroup>
            </FormControl>
            
            <br></br> */}

          {/* <FormControl margin="normal" required fullWidth>
              <FormControlLabel
                control={
                  <Checkbox
                    name="checkbox" value="" onChange={this.onCheck} id="upcmgpckge"
                    checked={this.state.checkbox} color="primary" />
                }
                label="Keep me updated with the upcoming packages"
              />
            </FormControl> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create
          </Button>
        </form>
        {testName}
        {testDescription}
        {testDate}
        {testTime}
      </Paper>
    </main>
  )
}

CreateTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateTest);
// export default CreateTest;
