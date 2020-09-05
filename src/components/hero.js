import React from "react";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={require('./logo.png')} alt="Health Commonhealth logo" />
    <h1 className="mb-4">View History</h1>

    <p className="lead">
      This portal will allow you to access your past and upcoming surgeries/procedures.
    </p>
  </div>
);

export default Hero;
