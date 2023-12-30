import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsLeft, skillsRight } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <div className="skills-main-div">
          <Fade duration={2000}>
            <div className="skills-image-div">
              <Fade bottom duration={1000} distance="40px">
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  AI & Data Science
                </h1>
              </Fade>
              <Fade bottom duration={1500}>
                <SoftwareSkill logos={skillsLeft.data[0].softwareSkills} />
              </Fade>
              <Fade bottom duration={2000}>
                <div>
                  {skillsLeft.data[0].skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
              <Fade bottom duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  Full Stack Development
                </h1>
              </Fade>
              <Fade bottom duration={1500}>
                <SoftwareSkill logos={skillsLeft.data[1].softwareSkills} />
              </Fade>
              <Fade bottom duration={2000}>
                <div>
                  {skillsLeft.data[1].skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
              {/* <Fade bottom duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  Cloud Infra-Architecture
                </h1>
              </Fade>
              <Fade bottom duration={1500}>
                <SoftwareSkill logos={skillsLeft.data[2].softwareSkills} />
              </Fade>
              <Fade bottom duration={2000}>
                <div>
                  {skillsLeft.data[2].skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade> */}
            </div>
          </Fade>

          <div className="skills-text-div">
            <Fade bottom duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                Cloud Infra-Architecture
              </h1>
            </Fade>
            <Fade bottom duration={1500}>
              <SoftwareSkill logos={skillsLeft.data[2].softwareSkills} />
            </Fade>
            <Fade bottom duration={2000}>
              <div>
                {skillsLeft.data[2].skills.map((skillSentence) => {
                  return (
                    <p
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  );
                })}
              </div>
            </Fade>
            <Fade bottom duration={1000}>
              <h1 className="skills-heading" style={{ color: theme.text }}>
                OS, Systems Programming & Software Tools
              </h1>
            </Fade>
            <Fade bottom duration={1500}>
              <SoftwareSkill logos={skillsLeft.data[3].softwareSkills} />
            </Fade>
            <Fade bottom duration={2000}>
              <div>
                {skillsLeft.data[3].skills.map((skillSentence) => {
                  return (
                    <p
                      className="subTitle skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {skillSentence}
                    </p>
                  );
                })}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillSection;
