import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '@material-ui/core/Snackbar';
import testData from "../../utils/testData";

const styles = theme => ({
    card: {
        maxWidth: 250,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    snackbartext: {
        color: 'white',
        size: '20px'
    }
});

const Tests = (props) => {
    const { classes } = props;
    const [open, setOpen] = useState(false);
    const [showComp, setShowComp] = useState(false);

    const handleClickOpen = () => {
        setShowComp(false);
        setOpen(true);
    };

    const handleClose = () => {
        setShowComp(false);
        setOpen(false);
    };

    const onClick = (event) => {
        setShowComp(true);
    };

    const onHide = (event) => {
        setShowComp(false);
        setOpen(false);
    }

    const handleCloseforSnackbar = (event, reason) => {
        setOpen(false);
    }

    const editTestButton = <Link to="/addQuestions" style={{ textDecoration: 'none' }}><Button variant="outlined" color="primary"> Edit </Button></Link>;
    const registerTestButton = <Button variant="contained" color="primary"> Register </Button>

    let tests = [];
    testData.forEach((element) => {
        let data = (
            <React.Fragment key={element.testName} >
                <Grid item sm={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {element.testName}
                            </Typography>
                            {element.testDate} , {element.testTime}
                            {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                                Test Description
                            </Button> */}
                            <br />
                            <br />
                            <Grid container justify="space-between">
                                {registerTestButton} {editTestButton}
                            </Grid>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title" >{"Test Description"}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        {element.testDescription}
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="outlined" onClick={onClick} color="primary" autoFocus>
                                        Register
                                     </Button>
                                    {showComp ?
                                        <Snackbar
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'center',
                                            }}
                                            open={open}
                                            autoHideDuration={3000}
                                            onClose={handleCloseforSnackbar}
                                            ContentProps={{
                                                'aria-describedby': 'message-id',
                                            }}
                                            message={<span id="message-id"><Typography className={classes.snackbartext} >Your are registered</Typography></span>}
                                        /> :
                                        null
                                    }

                                    <Button variant="outlined" onClick={onHide} color="primary" >Cancel </Button>
                                </DialogActions>
                            </Dialog>
                        </CardContent>
                    </Card>
                </Grid>
            </React.Fragment>
        )
        tests.push(data);
    })

    return (
        <div style={{ padding: '20px' }}>
            <br />
            <Grid container spacing={10} alignItems="flex-start" justify="flex-start" direction="row">
                {tests}
            </Grid>
        </div>
    )
}

Tests.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Tests);
