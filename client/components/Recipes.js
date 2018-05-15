import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipesList } from '../store/recipes'
import { Link } from 'react-router-dom';



/* -----------------    COMPONENT    ------------------ */

class Recipes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tags: ["chicken"],
            preferences: []
        }
    }
    componentDidMount() {
        const tags = this.state.tags
        const preferences = this.state.preferences
        this.props.getNewRecipe(tags, preferences)
    }
    // handleSubmit() {
    //     const tags = this.state.tags
    //     const preferences = this.state.preferences
    //     this.props.getNewRecipe(tags, preferences)
    // }
    render() {
        let { recipes, saved, saveRecipe } = this.props
        let { recipeList } = recipes
        console.log("props in RECIPES ", this.props)
        console.log("STATe in recipe ", this.state)
        // console.log("visitRecipe ULR ", url)





        return (
            <div>
                <span>
                    <h3>Get inspired:  </h3>
                    {/* <div className="input-field-habit"> */}
                    <form onSubmit={this.handleSubmit}>
                        <input
                            name="tags"
                            type="text"
                            onChange={this.handleChange}
                            value={this.tags}
                            className="habit-input"
                        />
                        <button type="submit">Search</button>
                    </form>
                    {/* </div> */}
                </span>
                {recipeList.map((recipe, idx) => {
                    return (
                        <span key={idx}>
                            <h2>{recipe.label}</h2>
                            <Link to={`${recipe.shareAs}`}>
                                <img key={idx} src={recipe.image} />
                            </Link>
                        </span>
                    )
                })
                }
            </div>
        )
    }
}
/* -----------------   REACT-REDUX   ------------------ */
const mapState = ({ recipes }) => ({ recipes })
const mapDispatch = dispatch => ({
    saveRecipe: (recipe) => {
        dispatch(saveNewRecipe(recipe))
    },
    getNewRecipe: (tag, preferences) => {
        dispatch(getRecipesList(tag, preferences))
    }
})
export default connect(mapState, mapDispatch)(Recipes)
