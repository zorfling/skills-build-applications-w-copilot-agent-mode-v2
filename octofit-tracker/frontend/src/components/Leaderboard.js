import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch(
      'https://laughing-zebra-5gpqq4w74fvj5g-8000.app.github.dev/api/leaderboard/'
    )
      .then((response) => response.json())
      .then((data) => setLeaderboard(data))
      .catch((error) => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">🏆 Leaderboard</h1>
      {leaderboard.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>Rank & Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr key={entry.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <span className="badge bg-primary me-2">
                        #{index + 1}
                      </span>
                      <strong>{entry.user.username}</strong>
                    </div>
                  </td>
                  <td>
                    <span className="badge bg-success fs-6">
                      {entry.score.toLocaleString()} points
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          No leaderboard data found. Make sure the backend API is running.
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
