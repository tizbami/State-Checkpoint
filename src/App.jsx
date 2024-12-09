import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  // State for the person and the toggle
  const [person, setPerson] = useState({
    fullName: "BAmi",
    bio: "A passionate developer with a love for creating impactful software solutions.",
    imgSrc:
      "https://res.cloudinary.com/dqzkirtbz/image/upload/w_auto/q_auto,f_auto,dpr_auto/v1698342290/Website/blog/female_portrait_postcrest.jpg",
    profession: "Full-Stack Developer",
  });
  const [shows, setShows] = useState(false);

  // State for tracking time since component was mounted
  const [timeSinceMounted, setTimeSinceMounted] = useState(0);

  // Effect to track time since mount
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceMounted((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bami's Profile</h1>

        {/* Toggle Button */}
        <button onClick={() => setShows(!shows)}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Display Person Profile */}
        {shows && (
          <div className="profile">
            <img
              src={person.imgSrc}
              alt={`${person.fullName}'s profile`}
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}

        {/* Time since mounted */}
        <p>Time since mounted: {timeSinceMounted} seconds</p>
      </header>
    </div>
  );
}

export default App;
