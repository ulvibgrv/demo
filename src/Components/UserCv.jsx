import "./UserCv.css";
import React from "react";
import Contacts from "./Contacts";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
const UserCv = () => {
  return (
    <div className="Cv">
      <div className="info">
        <PersonalInfo />
      </div>
      <div className="details">
        <Experience />
        <Contacts />
      </div>
    </div>
  );
};

export default UserCv;
