import React, { useState, useEffect } from 'react';

export default function ExerciseSuggester() {
  const [selectedEquipment, setSelectedEquipment] = useState({});
  const [uniqueEquipment, setUniqueEquipment] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [displayedExercises, setDisplayedExercises] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(10); // Number of exercises to load each time
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [exerciseDetails, setExerciseDetails] = useState(null);
  
  useEffect(() => {
    // Fetch the unique equipment data
    fetch('/exercisedata/unique_equipment.json')
      .then(response => response.json())
      .then(data => {
        setUniqueEquipment(data); 
      })
      .catch(error => console.error('Error fetching equipment data:', error));
  
    // Fetch the exercises data
    fetch('/exercisedata/exercises.json') 
      .then(response => response.json())
      .then(data => {
        setExercises(data); 
      })
      .catch(error => console.error('Error fetching exercises data:', error));
  }, []);
  
  useEffect(() => {
    // Only filter and slice the exercises if there is at least one piece of equipment selected
    if (Object.values(selectedEquipment).some(isSelected => isSelected)) {
      const filteredExercises = exercises.filter(exercise => selectedEquipment[exercise.equipment]);
      setDisplayedExercises(filteredExercises.slice(0, loadMoreCount));
    } else {
      setDisplayedExercises([]);
    }
  }, [selectedEquipment, exercises, loadMoreCount]);

  const handleLoadMore = () => {
    setLoadMoreCount(prev => Math.min(prev + 10, exercises.length));
  };
  
  const handleLoadLess = () => {
    setLoadMoreCount(prev => Math.max(prev - 10, 10));
  };

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setSelectedEquipment(prev => ({
      ...prev,
      [id]: checked,
    }));
  };

  const loadExerciseDetails = async (exercise) => {
    try {
      const response = await fetch(`/exercises/${exercise.name}/exercise.json`);
      const data = await response.json();
      setExerciseDetails({
        ...data,
        imagePaths: [
          `/exercises/${exercise.name}/0.jpg`,
          `/exercises/${exercise.name}/1.jpg`
        ]
      });
    } catch (error) {
      console.error('Error fetching exercise details:', error);
    }
  };
   // Event handler for clicking an exercise to see details
  const handleClickExercise = async (exercise) => {
    // Fetch and set exercise details upon clicking
    try {
      const response = await fetch(`/exercises/${exercise.name}/exercise.json`);
      const data = await response.json();
      setExerciseDetails({
        ...data,
        imagePaths: [
          `/exercises/${exercise.name}/0.jpg`,
          `/exercises/${exercise.name}/1.jpg`
        ]
      });
    } catch (error) {
      console.error('Error fetching exercise details:', error);
    }
  };


  return (
  <div style={{ display: 'flex' }}>
    <div>
      <h2>Select the equipment you have:</h2>
      {uniqueEquipment.map(equipment => (
        <div key={equipment.id}>
          <label>
            <input
              type="checkbox"
              id={equipment.id}
              checked={!!selectedEquipment[equipment.id]}
              onChange={handleCheckboxChange}
            />
            {equipment.label}
          </label>
        </div>
      ))}

      <h2>Exercises you can do:</h2>
      <ul>
        {displayedExercises.map((exercise) => (
           <li key={exercise.id} style={{ cursor: 'pointer' }}>
           <span
             onClick={() => handleClickExercise(exercise)}
             onMouseOver={() => setSelectedExercise(exercise)}
             onMouseOut={() => setSelectedExercise(null)}
           >
             {exercise.name}
           </span>
           {selectedExercise === exercise && <span style={{ marginLeft: '10px', fontSize: 'smaller', display: 'inline' }}>
             Click to see images and instructions
           </span>}
         </li>
        ))}
      </ul>
      {displayedExercises.length > 0 && (
        <>
          <div>
            {loadMoreCount > 10 && (
              <button onClick={handleLoadLess}>Load Less</button>
            )}
            {loadMoreCount < exercises.length && (
              <button onClick={handleLoadMore}>Load More</button>
            )}
          </div>
        </>
      )}
    </div> {/* This closing div tag encloses the list and buttons */}

    {exerciseDetails && (
      <div style={{ marginLeft: '20px' }}>
        <h3>Instructions:</h3>
        <p>{exerciseDetails.instructions}</p>
        <div>
          {exerciseDetails.imagePaths.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Exercise step ${index}`}
              style={{ maxWidth: '200px', maxHeight: '200px', margin: '10px' }}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);
}