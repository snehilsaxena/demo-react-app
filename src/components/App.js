import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import CreateTest from './CreateTest/CreateTest';
import AddQuestions from './CreateTest/AddQuestions';
import Tests from './Tests/Tests';
import PageNotFound from "./PageNotFound/PageNotFound";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const styles = theme => ({
  link: {
    margin: theme.spacing(1),
    color: 'white',
  },
  active: {
    color: 'white',
    '&:hover': {
      color: 'white',
    },
  }
});
class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    const { classes } = this.props
    const createTest = "/createTest"
    const addQuestions = "/addQuestions"
    const tests = "/tests"
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <AppBar position="static">
              <Toolbar>
                <Grid justify="space-between" container spacing={10}>
                  <Grid item>
                    <Typography variant="h6" gutterBottom  >
                      <Link href={tests} className={classes.active} >
                        Tests
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" gutterBottom  >
                      <Link href={createTest} className={classes.active} >
                        Create Test !
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" gutterBottom  >
                      <Link href={addQuestions} className={classes.active} >
                        Add Questions !
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/tests" />)} />
              <Route exact path="/tests" component={Tests} />
              <Route exact path="/createTest" component={CreateTest} />
              <Route exact path="/addQuestions" component={AddQuestions} />
              <Route component={PageNotFound} />
            </Switch>
          </React.Fragment>
        </Router>
      </React.Fragment>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
// export default App;
