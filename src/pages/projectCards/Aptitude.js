import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organizations from "../../containers/organizations/Organizations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import "./General.css";
import itemGraph from "../../assests/images/added_feature_item.png";
import userGraph from "../../assests/images/added_feature_user.png";
import irtLatex from "../../assests/images/irt_lat.png";
import valItem from "../../assests/images/1a_val_item.png";
import valUser from "../../assests/images/1a_val_user.png";
import trainCost from "../../assests/images/train_cost.png";
import validAcc from "../../assests/images/valid_acc.png";
import irtLLK from "../../assests/images/irt_llk.png";
import irtBetaq from "../../assests/images/irt_betaq.png";

class Aptitude extends Component {
  render() {
    return (
      <div className="opensource-main">
        <Header theme={this.props.theme} />
        <div className="content-container">
          <div className="card-header">Academic Aptitude Evaluator</div>
          <p className="card-subheader subTitle">
            ML classifier for a personalized education platform.
          </p>
          <div className="card-text">
            {" "}
            <span style={{ fontWeight: "bold" }}>Problem: </span>Online
            education services, such as Khan Academy and Eedi, provide a broader
            audience with access to high-quality education. On these platforms,
            students can learn new materials by watching a lecture, reading
            course material, and talking to instructors in a forum. However, one
            disadvantage of the online platform is that it is challenging to
            measure students’ understanding of the course material. To deal with
            this issue, many online education platforms include an assessment
            component to ensure that students understand the core topics. The
            assessment component is often composed of diagnostic questions, each
            a multiple choice question with one correct answer. The diagnostic
            question is designed so that each of the incorrect answers
            highlights a common misconception.
          </div>
          <div className="card-text">
            This project uses a dataset provided by Eedi , an online education
            platform that is currently being used in many schools. Using this
            data we can predict whether a student can correctly answer a
            specific diagnostic question based on the student’s previous answers
            to other questions and other students’ responses. Predicting the
            correctness of students’ answers to as yet unseen diagnostic
            questions helps estimate the student’s ability level in a
            personalized education platform. Moreover, these predictions form
            the groundwork for many advanced customized tasks. For instance,
            using the predicted correctness, the we can automatically recommend
            a set of diagnostic questions of appropriate difficulty that fit the
            student’s background and learning status. Source code can be
            accessed{" "}
            <a href="https://github.com/JoshPugli/academic-aptitude-evaluator">
              here
            </a>
            .
          </div>
          <div className="card-text">
            Used kNN, Item Response Theory, and Neural Networks to and Random
            Forest classifiers to predict the correctness of students’ answers
            to diagnostic questions. I also used the classifiers to predict the
            difficulty of diagnostic questions, and evauated the performance of
            the classifiers using the accuracy evaluation metric.
          </div>
          <p className="card-subheader subTitle">
            <a href="https://www.ibm.com/topics/knn#:~:text=The%20k%2Dnearest%20neighbors%20algorithm%2C%20also%20known%20as%20KNN%20or,of%20an%20individual%20data%20point.">
              k Nearest Neighbors (kNN)
            </a>
          </p>
          <div className="card-text">
            Used the kNN classifier from the scikit-learn library. I implemented
            user-based collaborative filtering: given a user, kNN finds the
            closest user that similarly answered other questions and predicts
            the correctness based on the closest student’s correctness, and
            item-based collaborative filtering: given a question, kNN finds the
            closest question that was similarly answered by other students and
            predicts the correctness based on the closest question’s
            correctness.
            <div className="image-container">
              <img src={userGraph} alt="My Image" />
              <img src={itemGraph} alt="My Image" />
            </div>
          </div>
          <p className="card-subheader subTitle">
            <a href="https://dl.acm.org/doi/pdf/10.3233/978-1-61499-672-9-1140">
              Item Response Theory (IRT)
            </a>
          </p>
          <div className="card-text">
            Used the 1-parameter logistic model (1PLM) to predict the
            probability of a question i being answered correctly by a student j
            by deriving the log likelihood and deriving the likelihood in terms
            of both variables as follows: (&#946;<sub>j</sub> is the difficulty
            of the question j, &#952;<sub>i</sub> is the i-th students ability)
            <div className="image-container">
              <img
                src={irtLatex}
                style={{ width: "40%", height: "auto" }}
                alt="My Image"
              />
            </div>
            Then, performed alternating gradient descent in terms of &#946; and
            &#952; to find the maximum likelihood estimates of the parameters.
            Below are the training and validation log likelihoods for the 1PLM,
            and the probability of a correct response as a function of the
            students ability, respectively.
            <div className="image-container">
              <img src={irtLLK} alt="My Image" />
              <img src={irtBetaq} alt="My Image" />
            </div>
            <div style={{ textAlign: "center" }}>
              NOTE: Also implemented a 3-parameter logistic model (3PLM), but it
              overfit to the data, reducing accuracy.
            </div>
          </div>
          <p className="card-subheader subTitle">
            <a href="https://aws.amazon.com/what-is/neural-network/#:~:text=A%20neural%20network%20is%20a,that%20resembles%20the%20human%20brain.">
              Neural Networks (NN)
            </a>
          </p>
          <div className="card-text">
            Created an neural network autoencoder model with L<sub>2</sub>{" "}
            regularization to predict the probability of a question i being
            answered correctly by a student j. The validation accuracies and
            training costs are shown below as a functon of the epoch. This uses
            a sigmoid activation function.
            <div className="image-container">
              <img src={trainCost} alt="My Image" />
              <img src={validAcc} alt="My Image" />
            </div>
          </div>
          <p className="card-subheader subTitle">
            <a href="https://www.analyticsvidhya.com/blog/2021/06/understanding-random-forest/#:~:text=Random%20forest%20algorithm%20is%20an,both%20classification%20and%20regression%20problems.">
              Random Forest (RF)
            </a>
          </p>
          <div className="card-text">
            Implemented a function that randomly samples a portion of stu-
            dent/question combination entries from the sparse matrix (with
            replacement) and creating a new dataset in the form of a 2D matrix,
            generating 3 datasets. Trained 2 kNN classifiers and 1 IRT
            classifier on the new datasets, and ensembled the 3 classifiers
            using a random forest classifier. <br /> This resulted in a ~0.70
            accuracy score, which is similar to IRT results but with less
            variance.
          </div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Aptitude;
