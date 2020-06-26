import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../components.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import HealingIcon from "@material-ui/icons/Healing";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

import PageGoalCategories from "../pages/PageGoalCategoryMenu";
import PageHomePage from "../pages/PageHomePage";

function Goal({ goal, index, completeGoal, removeGoal }) {
  return (
    <ListItem
      className="list-item"
      style={{
        textDecoration: goal.isCompleted ? "line-through" : "",
        backgroundColor: goal.isCompleted ? "lightgreen" : "",
        width: "80%",
      }}
    >
      <IconButton
        variant="outlined"
        color="secondary"
        onClick={() => removeGoal(index)}
        aria-label="delete"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
      <ListItemAvatar>
        <HealingIcon />
      </ListItemAvatar>
      {goal.text}
      <div>
        <Button variant="" color="" onClick={() => completeGoal(index)}>
          Complete?
        </Button>
      </div>
    </ListItem>
  );
}

function GoalForm({ addGoal }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addGoal(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Goals() {
  const [goals, setGoals] = useState([
    {
      text:
        "I am a very very very very very very very very very very very very very very very very very very long default",
      isCompleted: false,
    },
    {
      text: "",
      isCompleted: false,
    },
    {
      text: "Default 3",
      isCompleted: false,
    },
  ]);

  const addGoal = (text) => {
    const newGoals = [...goals, { text }];
    setGoals(newGoals);
  };

  const completeGoal = (index) => {
    const newGoals = [...goals];
    newGoals[index].isCompleted = true;
    setGoals(newGoals);
  };

  const removeGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };

  return (
    <div className="app">
      <div className="goal-list">
        <div className="add-goal">
          <p>Goals:</p>
          <div className="add-button">
            <Button
              style={{
                fontSize: "15px",
                display: "flex",
              }}
              component={Link}
              to="/goals"
              size="large"
              variant="text"
              color="default"
              startIcon={<AddIcon />}
            >
              {"AddGoal"}
            </Button>
          </div>
          <GoalForm addGoal={addGoal} />
        </div>

        {goals.map((goal, index) => (
          <Goal
            key={index}
            index={index}
            goal={goal}
            completeGoal={completeGoal}
            removeGoal={removeGoal}
          />
        ))}
      </div>
    </div>
  );
}

export default Goals;
