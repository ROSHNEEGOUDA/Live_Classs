import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../logo.png";

const HomePage = () => {
  const [classCode, setClassCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    navigate(`/classroom/${classCode}`);
  };

  return (
    <div className="container">
      
      <div className="home-page">
      <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label className="text-h1">Enter the class code</label>
            <input
              className="input"
              value={classCode}
              onChange={(e) => setClassCode(e.target.value)}
              type="text"
              required
              placeholder="Enter the class code"
            />
          </div>
          <button className="btn" type="submit">
            Enter Room
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
