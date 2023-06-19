import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Education } from "../../pages/education/EducationComponent";
import { Experience } from "../../pages/experience/Experience";
import { Opensource } from "../../pages/opensource/Opensource";
import { Aptitude } from "../../pages/projectCards/Aptitude";
import { IncOne } from "../../pages/projectCards/IncOne";
import { Audio } from "../../pages/projectCards/Audio";
import { useHistory } from "react-router-dom";

export default function GithubRepoCard({ repo, theme }) {
  const history = useHistory();

  function nav() {
    if (repo.type === "education") {
      history.push("/education");
    } else if (repo.type === "experience") {
      history.push("/experience");
    } else if (repo.type === "academic") {
      history.push("/aptitude");
    } else if (repo.type === "incone") {
      history.push("/incone");
    } else if (repo.type === "audio") {
      history.push("/audio");
    }
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id} onClick={() => nav()}>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
            {repo.wip && (
              <span style={{ color: "darkgrey" }}>
                {" "}
                (Full card coming soon...)
              </span>
            )}
          </p>
          <div className="repo-details">
            <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              {repo.createdAt.split("T")[0]}
            </p>
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
