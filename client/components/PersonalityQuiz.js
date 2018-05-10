import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    customWidth: {
        width: 10000,
    },
    margin: 12,
};

/**
 * `SelectField` is implemented as a controlled component,
 * with the current selection set through the `value` property.
 * The `SelectField` can be disabled with the `disabled` property.
 */
export default class PersonalityQuiz extends Component {
    state = {
        value1: null,
        value2: null,
        value3: null
    };

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div>
                <h3>I rather: </h3>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">

                    <RadioButton
                        value="q1r1"
                        label="Do Yoga"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q1r2"
                        label="Run"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q1r3"
                        label="Lift Weights"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q1r4"
                        label="Do something new every day"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>

                <h3>When I skip a workout is usually because: </h3>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">

                    <RadioButton
                        value="q2r1"
                        label="I’m too exhausted"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q2r2"
                        label="I’m feeling under the weather"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q2r3"
                        label="I never penciled it in, so it’s not just a priority"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q2r4"
                        label="It feels pointless when I’m not seeing results"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q2r5"
                        label="Something else popped up"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>I feel relaxed when: </h3>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">

                    <RadioButton
                        value="q3r1"
                        label="Vent to my partner"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q3r2"
                        label="Have a dance party with my kids"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q3r3"
                        label="Get into a project, like baking a gorgeous cake"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q3r4"
                        label="Take a long walk"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q3r5"
                        label="Read a book"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>During the weekend I look forward to:</h3>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">

                    <RadioButton
                        value="q4r1"
                        label="Finally getting to sleep in and not follow a strict schedule"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q4r1"
                        label="Go to a trendy new restaurant"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q4r1"
                        label="Making waffles for brunch with the family"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q4r4"
                        label="Finishing a home improvement project "
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q4r5"
                        label="Being able to spend my daylight outside instead of in the office "
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>Best part of my workout is:</h3>
                <RadioButtonGroup name="shipSpeeds" defaultSelected="not_light">

                    <RadioButton
                        value="q5r1"
                        label="Letting out some pent-up energy"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q5r2"
                        label="Breaking the cycle of sitting all day"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q5r3"
                        label="Busting some stress"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q5r4"
                        label="Seeing my body change"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q5r5"
                        label="Escaping the world for a little bit"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>I stay motivated during a project by:</h3>
                <RadioButtonGroup name="shipSpeeds" defaultSelected="not_light">
                    <RadioButton
                        value="q6r1"
                        label="The thought of how great it will feel when I’m done"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q6r2"
                        label="Encouraging words from those around me"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q6r3"
                        label="Seeing my little successes along the way"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q6r4"
                        label="The fear of failing"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q6r5"
                        label="Remembering how each task fits into the big picture"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>The best part about eating out is:</h3>
                <RadioButtonGroup name="shipSpeeds" defaultSelected="not_light">
                    <RadioButton
                        value="q7r1"
                        label="Inviting friends along to make an event of it"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q7r2"
                        label="Filling my cravings for my go-to dish"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q7r3"
                        label="Tasting dishes, I could never make for myself"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q7r4"
                        label="Knowing I’ve reached the end of a productive week"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q7r5"
                        label="Relaxing instead of stressing about the cooking"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>My mornings look like:</h3>
                <RadioButtonGroup name="shipSpeeds" defaultSelected="not_light">
                    <RadioButton
                        value="q8r1"
                        label="Setting my alarm early so I can feel awake by the tie I actually have to be productive"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q8r2"
                        label="Following the routine that I’ve planned down to the minute"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q8r3"
                        label="Waking up a bit before my alarm, then taking my time to get ready"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q8r4"
                        label="Spending too much time searching for my keays of phone"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q8r5"
                        label="Hitting snooze three times, then making a mad dash to get out the door "
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>Parties are:</h3>
                <RadioButtonGroup name="shipSpeeds" defaultSelected="not_light">
                    <RadioButton
                        value="q9r1"
                        label="An opportunity to catch up with friends I don’t see often"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q9r2"
                        label="They’re a nice way to get out of the house, even if I don’t know anyone there"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q9r3"
                        label="They’re a fun way to meet interesting people"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q9r4"
                        label="They’re not awful, but I’d rather hangout at home"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q9r5"
                        label="They’re just another social obligation"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>My biggest strength in a job interview is being :</h3>
                <RadioButtonGroup name="shipSpeeds" defaultSelected="not_light">
                    <RadioButton
                        value="q10r1"
                        label="Persistent"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q10r2"
                        label="Passionate"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q10r3"
                        label="Dedicated"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q10r4"
                        label="Disciplined"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q10r5"
                        label="Team Player"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <h3>If someone offered me last minute tickets to a play:</h3>
                <RadioButtonGroup name="shipSpeeds" defaultSelected="not_light">
                    <RadioButton
                        value="q11r1"
                        label="I would be in in a heartbeat"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q11r2"
                        label="I would have to see if I can get a babysitter"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q11r3"
                        label="I would go if the plot sounds interesting"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q11r4"
                        label="I would go after I check the reviews"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="q11r5"
                        label="I would not go , I want to stay in"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>

                <div>
                    <RaisedButton label="Submit" primary={true} style={styles} />
                </div>

            </div >
        );
    }
}