import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Doc1 from "../../assests/images/doc1.pdf";
import Doc2 from "../../assests/images/doc2.pdf";
import Doc3 from "../../assests/images/doc3.pdf";
import "./General.css";

class IncOne extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <div className="content-container">
          <div className="card-header" style={{ marginBottom: "60px" }}>
            Team Benchmark Application
          </div>
          <div className="card-text">
            As a member of a small team, I had the opportunity to work on a
            project for Bobby Umar and his team at the Thought Leadership
            Branding Club. The goal of the project was to create an MVP that
            would allow users to easily access and evaluate audio events from
            various social audio platforms. In order to achieve this, we
            utilized React, MongoDB, and Django to develop a system that would
            aggregate all audio events in one place. By utilizing filtering, we
            ensured that customers would be able to find any event they were
            interested in, and would not be overwhelmed by the sheer number of
            events. I primarily worked on the backend, which involved creating
            APIs, data filtering and aggregation, and test suite creation.
          </div>
          <div className="card-text">
            I cannot distribute source code, but I am allowed to include the
            documentation for the project, which includes the technical
            documentation, user documentation, and application images created
            for the maintenance and off-boarding of the project. These items can
            be found below.
          </div>
          <p className="card-subheader subTitle">Documentation</p>
          <div className="image-container">
            <embed src={Doc1} type="application/pdf" width="33%" height="600" />
            <embed src={Doc2} type="application/pdf" width="33%" height="600" />
            <embed src={Doc3} type="application/pdf" width="33%" height="600" />
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default IncOne;
