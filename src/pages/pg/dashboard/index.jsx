import React from "react";
import "./index.css";

const PGAdminDashboard = () => {
  return (
    <div className="pg-dashboard-container">
      <div className="actions">
        <button className="btn">Create</button>
      </div>

      <div className="pg-list">
        <div className="list-item">
          <p>PG 1</p>
          <button className="btn">EDIT</button>
          <button className="btn">DELETE</button>
        </div>

        <div className="list-item">
          <p>PG 2</p>
          <button className="btn">EDIT</button>
          <button className="btn">DELETE</button>
        </div>

        <div className="list-item">
          <p>PG 3</p>
          <button className="btn">EDIT</button>
          <button className="btn">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default PGAdminDashboard;
