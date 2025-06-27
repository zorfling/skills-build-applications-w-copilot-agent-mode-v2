import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch(
      'https://laughing-zebra-5gpqq4w74fvj5g-8000.app.github.dev/api/activities/'
    )
      .then((response) => response.json())
      .then((data) => setActivities(data))
      .catch((error) => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">🏃‍♀️ Activities</h1>
      {activities.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Activity Name</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={activity.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <strong>{activity.name}</strong>
                  </td>
                  <td>{activity.description}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2">
                      View Details
                    </button>
                    <button className="btn btn-success btn-sm">
                      Log Activity
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          <h4 className="alert-heading">No activities found!</h4>
          <p>Make sure the backend API is running.</p>
        </div>
      )}
    </div>
  );
};

export default Activities;
