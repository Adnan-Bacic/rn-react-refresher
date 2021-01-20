import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList'
import NewGoal from './components/NewGoal/NewGoal'

import './App.css'

const App = () => {

  /*
  const courseGoals = [
    {
      id: 1,
      text: 'finish course'
    },
    {
      id: 2,
      text: 'learn all the course main topics'
    },
    {
      id: 3,
      text: 'help other students in the course QA'
    }
  ]
  */
 const [courseGoals, setCourseGoals] = useState([
  {
    id: 1,
    text: 'finish course'
  },
  {
    id: 2,
    text: 'learn all the course main topics'
  },
  {
    id: 3,
    text: 'help other students in the course QA'
  }
 ])

  //prop from child to parent. function created in parent
  const addNewGoalHandler = (newGoal) => {
    //push new goal into array
    /*
    courseGoals.push(newGoal)
    console.log(courseGoals)
    */

    //setCourseGoals(courseGoals.concat(newGoal))
    //better way
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    })
  }

  return (
    <div className="course-goals">
      <h1>Course goals</h1>
      <NewGoal onAddGoal={addNewGoalHandler}></NewGoal>
      <GoalList goalsProp={courseGoals}></GoalList>
    </div>
  );
}

export default App;
