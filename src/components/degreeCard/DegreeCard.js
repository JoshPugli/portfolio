import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    const color = this.props.color;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Fade bottom duration={1000} distance="40px">
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={require(`../../assests/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Fade>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div className="body-header" style={{ backgroundColor: color }}>
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: "#fff" }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: "#fff" }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: "#fff" }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="visit-btn" style={{ backgroundColor: color }}>
                    <p className="btn" style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
