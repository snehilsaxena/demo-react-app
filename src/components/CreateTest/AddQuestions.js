import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(6))]: {
            width: '60%',
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
let questionsList = [];
function AddQuestions(props) {
    const { classes } = props;
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    const [questionsView, setQuestionsView] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        questionsList.push({
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4
        });
        setQuestionsView(questionsList.map((element, index) => {
            return (
                <React.Fragment key={index} >
                    <Grid item sm={4}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {element.question}
                                </Typography>
                                {element.question}
                                <br />
                                <br />
                            </CardContent>
                        </Card>
                    </Grid>
                </React.Fragment>
            )
        }));
    }

    return (
        <React.Fragment>
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Add Question
                </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item sm={12}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="question" >Question</InputLabel>
                                    <Input id="question" name="question" value={question} onChange={(event) => { setQuestion(event.target.value) }}
                                        autoFocus
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item sm={6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="option1" >Option 1</InputLabel>
                                    <Input id="option1" name="option1" value={option1} onChange={(event) => { setOption1(event.target.value) }} />
                                </FormControl>
                            </Grid>
                            <Grid item sm={6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="option2" >Option 2</InputLabel>
                                    <Input id="option2" name="option2" value={option2} onChange={(event) => { setOption2(event.target.value) }} />
                                </FormControl>
                            </Grid>

                            <Grid item sm={6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="option3" >Option 3</InputLabel>
                                    <Input id="option3" name="option3" value={option3} onChange={(event) => { setOption3(event.target.value) }} />
                                </FormControl>
                            </Grid>

                            <Grid item sm={6}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="option4" >Option 4</InputLabel>
                                    <Input id="option4" name="option4" value={option4} onChange={(event) => { setOption4(event.target.value) }} />
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add
                    </Button>
                    </form>
                </Paper>
            </main>
            <div style={{padding:'20px'}}>
                <Grid container spacing={10} alignItems="flex-start" justify="flex-start" direction="row">
                    {questionsView}
                </Grid>
            </div>
        </React.Fragment>
    )
}

AddQuestions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddQuestions);
// export default AddQuestions;
