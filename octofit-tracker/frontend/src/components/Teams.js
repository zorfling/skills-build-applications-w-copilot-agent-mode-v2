import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(
      'https://laughing-zebra-5gpqq4w74fvj5g-8000.app.github.dev/api/teams/'
    )
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">⚡ Teams</h1>
      <div className="mb-3">
        <button className="btn btn-primary">
          <i className="bi bi-plus-circle"></i> Create New Team
        </button>
      </div>
      {teams.length > 0 ? (
        <div className="row">
          {teams.map((team, index) => (
            <div key={team.id} className="col-md-6 col-lg-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="card-title mb-0">
                    <span className="badge bg-light text-primary me-2">
                      #{index + 1}
                    </span>
                    {team.name}
                  </h5>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    {team.description ||
                      'A competitive team ready for fitness challenges!'}
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-success btn-sm me-2">
                    Join Team
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
          <h4 className="alert-heading">No teams found!</h4>
          <p>Make sure the backend API is running.</p>
        </div>
      )}
    </div>
  );
};

export default Teams;
