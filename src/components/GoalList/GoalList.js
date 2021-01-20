import React from 'react'

const GoalList = (props) => {

    console.log(props.goalsProp)

    return(
      <ul className="goal-list">
        {
            //map through the data
            props.goalsProp.map((item) => {
                //return content
                return (
                <li key={item.id}>{item.text}</li>
                )
            })
        }
      </ul>
    )
}

export default GoalList