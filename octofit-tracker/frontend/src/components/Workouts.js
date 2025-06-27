import React, { useEffect, useState } from 'react';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(
      'https://laughing-zebra-5gpqq4w74fvj5g-8000.app.github.dev/api/workouts/'
    )
      .then((response) => response.json())
      .then((data) => setWorkouts(data))
      .catch((error) => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">💪 Workouts</h1>
      <div className="mb-3">
        <button className="btn btn-primary me-2">Create Workout</button>
        <button className="btn btn-outline-success">Quick Start</button>
      </div>
      {workouts.length > 0 ? (
        <div className="row">
          {workouts.map((workout) => (
            <div key={workout.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{workout.name}</h5>
                  <p className="card-text">
                    <span className="badge bg-info text-dark me-2">
                      {workout.duration} minutes
                    </span>
                    <br />
                    <small className="text-muted">
                      Perfect for building strength and endurance
                    </small>
                  </p>
                </div>
                <div className="card-footer bg-transparent">
                  <button className="btn btn-success btn-sm me-2">
                    Start Workout
                  </button>
                  <button className="btn btn-outline-primary btn-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info">
          <h4 className="alert-heading">No workouts found!</h4>
          <p>Make sure the backend API is running.</p>
        </div>
      )}
    </div>
  );
};

export default Workouts;
