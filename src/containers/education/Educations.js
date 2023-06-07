import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

class Educations extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="educations">
        <div className="educations-body-div">
          <DegreeCard
            degree={degrees.degrees[0]}
            theme={theme}
            color={"#25355A"}
          />
          ;
          <DegreeCard
            degree={degrees.degrees[1]}
            theme={theme}
            color={"#c5050c"}
          />
          ;
        </div>
      </div>
    );
  }
}

export default Educations;
