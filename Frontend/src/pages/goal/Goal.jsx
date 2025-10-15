import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./goal.scss";
const Goal = () => {
  const [goals, setgoals] = useState([
    
  ]);

  // new goals ke liye state
  const [newgoal, setNewgoal] = useState("");

  // add goal function
  const addGoal = () => {
    if (newgoal.trim() !== "") {
      const goal = {
        id: nanoid(),
        title: newgoal,
        completed: false,
      };
      setgoals([...goals, goal]);
      setNewgoal("");
    }
  };

  // Delete Goal function
  const deleteGoal = (goalId) => {
    const filteredGoals = goals.filter((goal) => goal.id != goalId);
    setgoals(filteredGoals);
  };

  // Toggle complete function
  const toggleComplete = (goalId) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
    );
    setgoals(updatedGoals);
  };

  return (
    <div className="goals-page">
      <header className="dashboard-header">
        <h1>My Goals</h1>
      </header>

      {/* A two column layout for the page */}
      <div className="goals-layout-grid">
        {/* main content area for the form and list */}
        <div className="goals-main-content">
          {/* Add Goal Form */}
          <div className="add-goal-card">
            <h2>Add New Goal</h2>
            <div className="add-goal-form">
              <input
                className="form-group__input"
                type="text"
                value={newgoal}
                onChange={(e) => setNewgoal(e.target.value)}
                placeholder="Enter Your Goal..."
                onKeyDown={(e) => e.key === "Enter" && addGoal()}
              />
              <button onClick={addGoal} className="btn btn--primary">
                Add Goal
              </button>
            </div>
          </div>

          {/* Goal List */}
          <div className="goal-list">
            {goals.length === 0 ? (
              <p className="goal-list__empty-message">
                No goals yet! Add your first goal above.
              </p>
            ) : (
              goals.map((goal) => (
                <div
                  key={goal.id}
                  className={`goal.item ${
                    goal.completed ? "goal-item--completed" : ""
                  }`}
                >
                  <div className="goal-item__content">
                    <input
                      id={`goal-${goal.id}`}
                      className="goal-item__checkbox"
                      type="checkbox"
                      checked={goal.completed}
                      onChange={() => toggleComplete(goal.id)}
                    />
                    <label
                      htmlFor={`goal-${goal.id}`}
                      className="goal-item__title"
                    >
                      {goal.title}
                    </label>
                    <button
                      onClick={() => deleteGoal(goal.id)}
                      className="btn-icon btn-icon--delete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Aside for the summary card */}
        <aside className="goals-aside">
          {/* Goal Summary */}
          <div className="goal-summary-card">
            <h3>Summary</h3>
            <p>
              <span>Total Goals :</span> <span>{goals.length}</span>
            </p>
            <p>
              <span>Completed :</span>{" "}
              <span>{goals.filter((g) => g.completed).length}</span>
            </p>
            <p>
              <span>Remaining :</span>{" "}
              <span>{goals.filter((g) => !g.completed).length}</span>
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Goal;
