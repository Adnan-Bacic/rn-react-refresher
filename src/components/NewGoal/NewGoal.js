import React, { useState } from 'react'

const NewGoal = (props) => {

    //save input value in state variable
    const [enteredText, setEnteredText] = useState('')

    const addGoalHandler = (e) => {
        e.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        }
        console.log(newGoal)

        //set input to be empty after submit
        setEnteredText('')

        //execute prop from app.js
        props.onAddGoal(newGoal);
    }

    const textChangeHandler = (e) => {
        //value changes on every keypress
        setEnteredText(e.target.value)
    }

    return(
        <form onSubmit={addGoalHandler} className="new-goal">
            <label htmlFor="goal">Goal</label>
            <input onChange={textChangeHandler} value={enteredText} type="text" name="goal"></input>
            <button type="submit">Submit</button>
        </form>
    )
}

export default NewGoal