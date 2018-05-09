// import React, { Component } from 'react';
// import { Link, Redirect } from 'react-router-dom'
// import { addPersonality } from '../store/personality'
// import axios from 'axios';

// export default class PersonalityQuiz extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             q1: '',
//             q2: '',
//             q3: '',
//             q4: '',
//             q5: '',
//             q6: '',
//             q7: '',
//             q8: '',
//             q9: '',
//             q10: '',
//             q11: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         const personality = {
//             q1: this.state.q1,
//             q2: this.state.q2,
//             q3: this.state.q3,
//             q4: this.state.q4,
//             q5: this.state.q5,
//             q6: this.state.q6,
//             q7: this.state.q7,
//             q8: this.state.q8,
//             q9: this.state.q9,
//             q10: this.state.q10,
//             q11: this.state.q11
//         }


//         axios.post('/api/:userId/personality', personality)
//             .then(res => {
//                 let resultRes = res.data;
//                 store.dispatch(addPersonality(resultRes))
//             })
//             .then(() => {
//                 this.props.history.push('/home')
//             })
//             .catch(err => console.error(err))
//     }

//     handleChange(event) {
//         this.setState({ [event.target.name]: event.target.value })
//     }
//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit} className='form'>
//                     <fieldset>
//                         <input type="radio" name="gender" value="male" checked className="quiz" /> test<br />
//                         <input type="radio" name="gender" value="fetest" /> Fetest<br />
//                         <input type="radio" name="gender" value="other" /> Other
//                     <input type="radio" name="gender" value="test" checked /> test<br />
//                         <input type="radio" name="gender" value="fetest" /> Fetest<br />
//                         <input type="radio" name="gender" value="other" /> Other
//                     <input type="radio" name="gender" value="test" checked /> test<br />
//                         <input type="radio" name="gender" value="fetest" /> Fetest<br />
//                         <input type="radio" name="gender" value="other" /> Other

//                         <h3>I rather: </h3>
//                         <input type="radio" name="q1" value="q1" />Do yoga
//                         <input type="radio" name="q1" value="q1" /> Run
//                         <input type="radio" name="q1" value="q1" /> Lift Weights
//                         <input type="radio" name="q1" value="q1" /> Do something new every day
//                         <br />
//                         <h3>When I skip a workout is usually because:  </h3>
//                         <input type="radio" name="q2" value="q2" />I’m too exhausted
//                         <input type="radio" name="q2" value="q2" /> I’m feeling under the weather
//                         <input type="radio" name="q2" value="q2" /> I never penciled it in, so it’s not just a priority
//                         <input type="radio" name="q2" value="q2" /> It feels pointless when I’m not seeing results
//                         <input type="radio" name="q2" value="q2" /> Something else popped up
//                         <br />
//                         <h3> I feel relaxed when: </h3>
//                         <input type="radio" name="q2" value="q2" />Have a dance party with my kids
//                         <input type="radio" name="q2" value="q2" /> Get into a project, like baking a gorgeous cake
//                         <input type="radio" name="q2" value="q2" /> Take a long walk
//                         <input type="radio" name="q2" value="q2" /> Read a book
//                         <input type="radio" name="q2" value="q2" />Vent to my partner
//                         <br />
//                         <h3> During the weekend I look forward to: </h3>

//                         <input type="radio" name="q2" value="q2" className="container" />Finally getting to sleep in and not follow a strict schedule
//                         <input type="radio" name="q2" value="q2" /> Go to a trendy new restaurant
//                         <input type="radio" name="q2" value="q2" /> Making waffles for brunch with the family
//                         <input type="radio" name="q2" value="q2" /> Finishing a home improvement project
//                         <input type="radio" name="q2" value="q2" />Being able to spend my daylight outside instead of in the office
//                         <br />
//                         <h3>  </h3>
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <br />
//                         <h3>  </h3>
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <br />
//                         <h3>  </h3>
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <br />
//                         <h3>  </h3>
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <br />
//                         <h3>  </h3>
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <br />
//                         <h3>  </h3>
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <br />
//                         <h3>  </h3>
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <input type="radio" name="q2" value="q2" />
//                         <br />

//                     </fieldset>
//                 </form>
//             </div>
//         )
//     }
// }

// {/* <h3>I rather: </h3>
// <input type="radio" name="q1" value="q1">Do yoga </input>
// <input type="radio" name="q1" value="q1" > Run</input>
// <input type="radio" name="q1" value="q1"> Lift Weights</input>
// <input type="radio" name="q1" value="q1"> Do something new every day</input>
// <br />
// <h3>When I skip a workout is usually because:  </h3>
// <input type="radio" name="q1" value="q1">I’m too exhausted </input>
// <input type="radio" name="q1" value="q1" > I’m feeling under the weather</input>
// <input type="radio" name="q1" value="q1"> I never penciled it in, so it’s not just a priority</input>
// <input type="radio" name="q1" value="q1"> It feels pointless when I’m not seeing results</input>
// <input type="radio" name="q1" value="q1"> Something else popped up </input>
// <br /> */}



import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import { orange500 } from 'material-ui/styles/colors';
import muiThemeable from 'material-ui/styles/muiThemeable';

import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import AutoComplete from 'material-ui/AutoComplete';






//style for Paper
const style = {
    height: 400,
    width: 400,
    margin: 50,
    padding: 60,
    textAlign: 'center',
    display: 'inline-block',
};


class PersonalityQuiz extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    }

    handleTouchTap = () => {
        this.setState({
            open: true,
        });
    }

    render() {
        const standardActions = (
            <FlatButton label="Ok" primary={true} onTouchTap={this.handleRequestClose} />
        );

        return (

            <MuiThemeProvider >
                <div className="container">
                    <AppBar title="Material-UI" />
                    <Dialog open={this.state.open} title="This is my secret" actions={standardActions} onRequestClose={this.handleRequestClose}>
                        I didn't get much sleep last night
            </Dialog>
                    <Paper style={style} zDepth={3} circle={true}>
                        <h1>Example Project</h1>
                        <RaisedButton label="This is my secret" secondary={true} onTouchTap={this.handleTouchTap} />
                    </Paper>
                    <br />
                    {/* this is my custom component */}

                    <br />
                    <CircularProgress />
                    <br />
                    <AutoComplete
                        floatingLabelText="Type 'r', case insensitive"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={fruit}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}
// this data is used by the AutoComplete component
const fruit = [
    'Apple', 'Apricot', 'Avocado',
    'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
    'Boysenberry', 'Blood Orange',
    'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
    'Coconut', 'Cranberry', 'Clementine',
    'Damson', 'Date', 'Dragonfruit', 'Durian',
    'Elderberry',
    'Feijoa', 'Fig',
    'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
    'Honeydew', 'Huckleberry',
    'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
    'Kiwi fruit', 'Kumquat',
    'Lemon', 'Lime', 'Loquat', 'Lychee',
    'Nectarine',
    'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
    'Olive', 'Orange',
    'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
    'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
    'Quince',
    'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
    'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
    'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
    'Ugli fruit',
    'Watermelon',
];


export default PersonalityQuiz;
