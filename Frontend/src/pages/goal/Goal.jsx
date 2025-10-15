import React, { useState } from "react";
import { nanoid } from "nanoid";

const Goal = () => {
  const [goals, setgoals] = useState([
    { id: 1, title: "React components", completed: false },
    { id: 2, title: "Tailwind CSS", completed: true },
    { id: 3, title: "MERN", completed: false },
  ]);

  // new goals ke liye state
  const [newgoal, setNewgoal] = useState('')

  // add goal function
  const addGoal = () => {
    if (newgoal.trim() !== "") {
      const goal = {
        id: nanoid(),
        title: newgoal,
        completed: false,
      };
      setgoals([...goals, goal]);
      setNewgoal('')
    }
  };

  // Delete Goal function
  const deleteGoal = (goalId) => {
    const filteredGoals = goals.filter(goal => goal.id != goalId);
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
    <div>
      <h1>My Goals</h1>

      {/* Add Goal Form  */}
      <div>
        <h2>Add New Goal</h2>
        <div>
          <input
            type="text"
            value={newgoal}
            onChange={(e) => setNewgoal(e.target.value)}
            placeholder="Enter Your Goal..."
            onKeyDown={(e) => e.key === "Enter" && addGoal()}
          />
          <button onClick={addGoal}>Add Goal</button>
        </div>
      </div>

      {/* Goal List */}
      <div>
        {goals.length === 0 ? (
          <p>No goals yet! Add your first goal above.</p>
        ) : (
          goals.map((goal) => (
            <div key={goal.id}>
              <div>
                <div>
                  <input type="checkbox" checked={goal.completed} onChange={() => toggleComplete(goal.id)} />
                  <span>{goal.title}</span>
                </div>
                <button onClick={() => deleteGoal(goal.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

       {/* Goal Summary */}
       <div>
        <h3>Summary</h3>
        <p>Total Goals : { goals.length}</p>
        <p>Completed : {goals.filter(g => g.completed).length }</p>
        <p>Remaining: { goals.filter(g => !g.completed).length}</p>
       </div>
    </div>
  );
};

export default Goal;
