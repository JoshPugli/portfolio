import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./General.css";
import i1 from "../../assests/images/incone1.jpg";
import i2 from "../../assests/images/incone2.jpg";
import i3 from "../../assests/images/incone3.png";
import i4 from "../../assests/images/incone4.jpg";
import i5 from "../../assests/images/incone5.jpg";
import i6 from "../../assests/images/incone6.jpg";
import i7 from "../../assests/images/incone7.jpg";

class IncOne extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <div className="content-container">
          <div className="card-header">Team Benchmark Application</div>
          <p className="card-subheader subTitle">
            Agile Tool for Team Benchmarking
          </p>
          <div className="card-text">
            {" "}
            <span style={{ fontWeight: "bold" }}>Problem: </span> During the
            COVID-19 pandemic, many businesses were forced to adapt to remote
            work in order to continue operations. This presented challenges for
            organizations that relied heavily on in-person interactions and
            face-to-face training sessions such as IncrementOne, a North
            American boutique consulting firm that specialized in Agile
            coaching. In order to continue delivering effective training to its
            clients, the company's Agile Coaches needed to find new ways to
            translate their in-person activities to a virtual setting.
          </div>
          <div className="card-text">
            I am currently the lead frontend and backend developer on a team
            with three other engineers to overhaul the Team Benchmarking
            Application, a tool designed to evaluate team maturity across
            parameters like formation, behavior, sprint activities, and delivery
            of product increments. Our build leverages the Django REST Framework
            and React, backed by a PostgreSQL database. Given its client-facing
            nature, the application prioritizes user-friendliness and robust
            security, evident in its comprehensive login system. Further
            emphasizing scalability, our design can comfortably accommodate an
            expansive user base, with projections exceeding 30,000 users.
          </div>
          <div className="card-text">
            This tool will help IncrementOne improve discovery and benchmarking
            by 40-100% for clients such as the Royal Bank of Canada, Telus,
            Kohler, and the Government of Canada, and have helped the company
            gain brand recognition and open up new opportunities in the
            competitive consulting and training market. It is expected that
            these tools will create a new annual revenue stream of $200,000.
          </div>
          <div className="image-container">
            <img
              style={{
                width: "30%",
                height: "auto",
                border: "1px solid black",
                margin: "20px",
              }}
              src={i1}
              alt="My Image"
            />
            <img
              style={{
                width: "30%",
                height: "auto",
                border: "1px solid black",
                marginBottom: 0,
              }}
              src={i2}
              alt="My Image"
            />
            <img
              style={{
                width: "30%",
                height: "auto",
                border: "1px solid black",
                margin: "20px",
              }}
              src={i3}
              alt="My Image"
            />
            <img
              style={{
                width: "30%",
                height: "auto",
                border: "1px solid black",
              }}
              src={i4}
              alt="My Image"
            />
            <img
              style={{
                width: "30%",
                height: "auto",
                border: "1px solid black",
                margin: "20px",
              }}
              src={i5}
              alt="My Image"
            />
            <img
              style={{
                width: "30%",
                height: "auto",
                border: "1px solid black",
              }}
              src={i6}
              alt="My Image"
            />
            <img
              style={{
                width: "30%",
                height: "auto",
                border: "1px solid black",
                margin: "20px",
              }}
              src={i7}
              alt="My Image"
            />
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default IncOne;
