import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(
      'https://laughing-zebra-5gpqq4w74fvj5g-8000.app.github.dev/api/users/'
    )
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1 className="mb-4">👥 Users</h1>
      <div className="mb-3">
        <button className="btn btn-primary me-2">
          <i className="bi bi-person-plus"></i> Add New User
        </button>
        <button className="btn btn-outline-secondary">
          <i className="bi bi-download"></i> Export Users
        </button>
      </div>
      {users.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <strong>{user.username}</strong>
                  </td>
                  <td>
                    <a href={`mailto:${user.email}`} className="link-primary">
                      {user.email}
                    </a>
                  </td>
                  <td>
                    <span className="badge bg-success">Active</span>
                  </td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm me-1">
                      View Profile
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="alert alert-info">
          <h4 className="alert-heading">No users found!</h4>
          <p>Make sure the backend API is running.</p>
        </div>
      )}
    </div>
  );
};

export default Users;
