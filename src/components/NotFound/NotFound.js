import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="text-center">
        <h1 className="text-danger">Opps!!</h1>
        <p>Page not Found</p>
      </div>
    </div>
  );
};

export default NotFound;
