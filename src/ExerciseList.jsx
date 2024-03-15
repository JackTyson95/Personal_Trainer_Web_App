import React from 'react';
const exerciseContext = require.context('./exercises', true, /\.\/.*\/data\.json$/);

function ExerciseList() {
  const exercisesData = exerciseContext.keys().map(key => {
    const exerciseName = key.replace('./', '').replace('/data.json', '');
    return {
      name: exerciseName,
      ...exerciseContext(key),
    };
  }).sort((a, b) => a.equipment.localeCompare(b.equipment)); // Sort the data by equipment field

  return (
    <div>
      <h2>Exercise List</h2>
      <ul>
        {exercisesData.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExerciseList;
