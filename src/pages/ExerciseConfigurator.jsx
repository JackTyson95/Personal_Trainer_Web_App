// import React, { useState } from "react";

// export default function ExerciseConfigurator() {
//   const [exercisePlan, setExercisePlan] = useState({
//     exercise: "",
//     sets: 0,
//     reps: 0,
//   });


//   const handleInputChange = (event) => {
//     setExercisePlan({
//       ...exercisePlan,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
 

//     console.log(exercisePlan);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Exercise:
//           <input
//             type="text"
//             name="exercise"
//             onChange={handleInputChange}
//             value={exercisePlan.exercise}
//           />
//         </label>
//         <label>
//           Reps:
//           <input
//             type="number"
//             name="reps"
//             onChange={handleInputChange}
//             value={exercisePlan.reps}
//           />
//         </label>
//         <label>
//           Sets:
//           <input
//             type="number"
//             name="sets"
//             onChange={handleInputChange}
//             value={exercisePlan.sets}
//           />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>

      
//       <div>
//         <h2>Entered Information:</h2>
//         <p>Exercise: {exercisePlan.exercise}</p>
//         <p>Sets: {exercisePlan.sets}</p>
//         <p>Reps: {exercisePlan.reps}</p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function ExerciseConfigurator() {
  const [exercisePlan, setExercisePlan] = useState({
    exercise: "",
    sets: "",
    reps: "",
  });
  const [submittedExercises, setSubmittedExercises] = useState([]);

  const handleInputChange = (event) => {
    setExercisePlan({
      ...exercisePlan,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the current exercise plan to the list of submitted exercises
    setSubmittedExercises([exercisePlan, ...submittedExercises]);
    // Clear the input fields by resetting the exercisePlan state
    setExercisePlan({
      exercise: "",
      sets: "",
      reps: "",
    });
    console.log(exercisePlan);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Exercise:
          <input
            type="text"
            name="exercise"
            onChange={handleInputChange}
            value={exercisePlan.exercise}
          />
        </label>
        <label>
          Reps:
          <input
            type="number"
            name="reps"
            onChange={handleInputChange}
            value={exercisePlan.reps}
          />
        </label>
        <label>
          Sets:
          <input
            type="number"
            name="sets"
            onChange={handleInputChange}
            value={exercisePlan.sets}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>

      <div>
        <h2>Submitted Exercises:</h2>
        {submittedExercises.map((plan, index) => (
          <div key={index}>
            <p>Exercise: {plan.exercise}</p>
            <p>Sets: {plan.sets}</p>
            <p>Reps: {plan.reps}</p>
          </div>
        ))}
      </div>
    </div>
  );
}