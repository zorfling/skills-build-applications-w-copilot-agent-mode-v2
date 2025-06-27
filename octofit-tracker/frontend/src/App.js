import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img
                src="/octofitapp-small.png"
                alt="OctoFit Logo"
                className="octofit-logo"
              />
              OctoFit Tracker
            </Link>
            <div className="navbar-nav">
              <Link className="nav-link" to="/activities">
                Activities
              </Link>
              <Link className="nav-link" to="/leaderboard">
                Leaderboard
              </Link>
              <Link className="nav-link" to="/teams">
                Teams
              </Link>
              <Link className="nav-link" to="/users">
                Users
              </Link>
              <Link className="nav-link" to="/workouts">
                Workouts
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center">
                  <div className="hero-section bg-primary text-white py-5 mb-4 rounded">
                    <h1 className="display-4 mb-3">
                      🐙 Welcome to OctoFit Tracker
                    </h1>
                    <p className="lead">
                      Track your fitness journey at Mergington High School
                    </p>
                    <button className="btn btn-light btn-lg me-3">
                      Get Started
                    </button>
                    <button className="btn btn-outline-light btn-lg">
                      Learn More
                    </button>
                  </div>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <h5 className="card-title">🏃‍♀️ Track Activities</h5>
                          <p className="card-text">
                            Log your daily fitness activities and monitor your
                            progress.
                          </p>
                          <a href="/activities" className="btn btn-primary">
                            View Activities
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <h5 className="card-title">🏆 Leaderboard</h5>
                          <p className="card-text">
                            See how you rank against other students in fitness
                            challenges.
                          </p>
                          <a href="/leaderboard" className="btn btn-success">
                            View Rankings
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="card h-100">
                        <div className="card-body text-center">
                          <h5 className="card-title">⚡ Join Teams</h5>
                          <p className="card-text">
                            Team up with friends and compete in group
                            challenges.
                          </p>
                          <a href="/teams" className="btn btn-warning">
                            Join Team
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
