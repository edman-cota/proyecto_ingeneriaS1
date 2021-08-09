import React, { useState } from "react";
import { useHistory } from "react-router";
import ProgressBar from "../../TopNavigation/ProgressBar";
import SuccessBanner from "../../TopNavigation/SuccessBanner";
import CloseExercise from "../../TopNavigation/CloseExercise";
import ProfileAvatar from "../../TopNavigation/ProfileAvatar";
import "./exercise-10012.scss";
import Shuttle from "../../../../assets/shuttle.png";
import AnguloRecto from "../../../../assets/AnguloRecto.svg";
import AnguloAgudo from "../../../../assets/AnguloAgudo.svg";
import AnguloObtuso from "../../../../assets/AnguloObtuso.svg";
import { UisStar } from "@iconscout/react-unicons-solid";
import Confetti from "../../TopNavigation/Confettii";

const Exercise10000 = (props) => {
  const history = useHistory();
  const [correct, setCorrect] = useState(false);

  const [seleced, setSelected] = useState(0);

  const buttonHelp = `${"buttonHelp"} ${correct ? "buttonHelpHidden" : ""}`;
  const rewardsInside = `${"rewardsInside"} ${
    correct ? "rewardsInsideShow" : ""
  }`;
  const buttonAnswer = `${correct ? "buttonAnswerHidden" : "buttonAnswer"}`;
  const buttonContinue = `${
    correct ? "buttonContinue" : "buttonContinueHidden"
  }`;

  const onChangeValue = (event) => {
    if (event.target.value === "1") {
      setSelected(1);
    }
    if (event.target.value === "2") {
      setSelected(2);
    }
    if (event.target.value === "3") {
      setSelected(3);
    }
    if (event.target.value === "4") {
      setSelected(4);
    }
  };

  const verifyAnswer = (i) => {
    if (i === 1) {
      setCorrect(true);
    }
  };

  const nextExercise = () => {
    history.push(`/ejercicio/10013`);
  };

  return (
    <div className="exerciceWrapper">
      {correct ? <Confetti /> : ""}
      <div className="panel">
        <CloseExercise tema={"matematicas"} />
        {correct ? <SuccessBanner /> : <ProgressBar steps={8} index={2} />}
        <ProfileAvatar />
      </div>
      <div className="problemBody">
        <div className="problemContentWrapper">
          <div className="problemContent">
            <div className="problemContentTextBlock">
              <div className="problemContentEmoji"></div>
              <div className="problemContentText">
                Seleccione el ángulo agudo
                <br />
                <br />
                {/* <img src={Ruler2} width="850" alt="Ruler" /> */}
                <br />
                <br />
                <br />
                <div onChange={onChangeValue} className="inputAnswersPanel">
                  <input
                    className="radio_input"
                    type="radio"
                    value="1"
                    name="myRadio"
                    id="myRadio1"
                  />
                  <label className="radio_label" for="myRadio1">
                    <img
                      src={AnguloAgudo}
                      alt="Angulo recto"
                      width="200"
                      height="200"
                    />
                  </label>
                  <input
                    className="radio_input"
                    type="radio"
                    value="2"
                    name="myRadio"
                    id="myRadio2"
                  />
                  <label className="radio_label" for="myRadio2">
                    <img
                      src={AnguloRecto}
                      width="200"
                      height="200"
                      alt="Angulo agudo"
                    />
                  </label>
                  <input
                    className="radio_input"
                    type="radio"
                    value="3"
                    name="myRadio"
                    id="myRadio3"
                  />
                  <label className="radio_label" for="myRadio3">
                    <img
                      src={AnguloObtuso}
                      alt="Angulo recto"
                      width="200"
                      height="200"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="problemVariants"></div>
          </div>
        </div>
      </div>
      <div className="layoutPageFooter">
        <div className="footer">
          <div className="grid">
            <div className="col-3">
              <button className={buttonHelp}>
                <div className="buttonContent">
                  <div className="helpButtonIcon">
                    <img
                      src={Shuttle}
                      width="30"
                      height="48"
                      alt="Hints avatar"
                    />
                  </div>
                  <div className="helpButtonContent">Pista</div>
                </div>
              </button>
            </div>
            <div className="col-6">
              <button
                className={buttonAnswer}
                onClick={() => verifyAnswer(seleced)}
              >
                <div>Responder</div>
              </button>
              <button className={buttonContinue} onClick={() => nextExercise()}>
                <div>Continuar</div>
              </button>
            </div>
            <div className="col-3 rewardsPanel">
              <button className="rewardsButton">
                <div className={rewardsInside}>
                  Puntos
                  <UisStar className="uilStar" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise10000;