import PlayBtn from "./Components/PlayBtn";
import { useState } from "react";
import { useImmer } from "use-immer";

function whoWin(user, com) {
  if (
    (user === "scissors" && com === "paper") ||
    (user === "paper" && com === "scissors")
  ) {
    return "scissors";
  }

  if (
    (user === "scissors" && com === "rock") ||
    (user === "rock" && com === "scissors")
  ) {
    return "rock";
  }

  if (
    (user === "scissors" && com === "lizard") ||
    (user === "lizard" && com === "scissors")
  ) {
    return "scissors";
  }

  if (
    (user === "scissors" && com === "spock") ||
    (user === "spock" && com === "scissors")
  ) {
    return "spock";
  }

  if (
    (user === "paper" && com === "rock") ||
    (user === "rock" && com === "paper")
  ) {
    return "paper";
  }

  if (
    (user === "paper" && com === "lizard") ||
    (user === "lizard" && com === "paper")
  ) {
    return "lizard";
  }

  if (
    (user === "paper" && com === "spock") ||
    (user === "spock" && com === "paper")
  ) {
    return "paper";
  }

  if (
    (user === "rock" && com === "lizard") ||
    (user === "lizard" && com === "rock")
  ) {
    return "rock";
  }

  if (
    (user === "rock" && com === "spock") ||
    (user === "spock" && com === "rock")
  ) {
    return "spock";
  }

  if (
    (user === "lizard" && com === "spock") ||
    (user === "spock" && com === "lizard")
  ) {
    return "lizard";
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function App() {
  const [overlay, setOverlay] = useState(false);

  const [varObj, updateVarObj] = useImmer({
    shResultCont: false,
    userPick: "emptyBtn",
    compPick: "emptyBtn",
    Reset: false,
    result: "",
    animation: [],
    score: 0,
  });

  function playBtnClick(btnType) {
    let btnArr = ["rock", "paper", "scissors", "lizard", "spock"];
    btnArr = btnArr.filter((e) => e !== btnType);

    //GETTING COMPS RANDOM PICK
    let randNum = getRandomInt(4);
    let comp = btnArr[randNum];

    // COMPUTING WHO WIN
    let isuserWin = btnType === whoWin(btnType, comp)

    //SWITCHING DISPLAY
    updateVarObj(draft => {
      draft.shResultCont = true;
      draft.userPick = btnType;
    });

    //OUTPUT DISPLAY
     setTimeout(() => {
      updateVarObj(draft => {
        draft.compPick = comp + " comp";
      });

      setTimeout((isWin) => {
        updateVarObj(draft => {
          draft.compPick = comp + " comp";
          draft.Reset = true;
        });

      if(isWin){
        updateVarObj(draft => {
          draft.result = "WIN";
          draft.animation = ['winner', ''];
          draft.score = draft.score + 1;
        });
      }
      else if(!isWin){
        updateVarObj(draft => {
          draft.result = "LOSE";
          draft.animation = ['', 'winner'];
          draft.score = draft.score - 1;
        });
      }

      }, 600, isuserWin)
    }, 300, );
  }

  function resetBtnClick() {
    updateVarObj(draft => {
      draft.shResultCont = false;
      draft.compPick = 'emptyBtn';
      draft.Reset = false;
      draft.animation = [];
    });
  }

  return (
    <main className="appContainer">
      {overlay && (
        <section className="overlayPage">
          <div className="box">
            <nav>
              <h1>RULES</h1>
              <button onClick={() => setOverlay(false)}></button>
            </nav>
            <img src="images/image-rules-bonus.svg" alt="rules"></img>
          </div>
        </section>
      )}

      <section className="gamePage">
        <div className="leadBoard">
          <img src="images/logo-bonus.svg" alt="logo"></img>
          <div className="scoreContainer">
            <h2>SCORE</h2>
            <h1>{varObj.score}</h1>
          </div>
        </div>

        {!varObj.shResultCont ? (
          <div className="gameBtnContainer">
            <PlayBtn
              playBtnClick={() => playBtnClick("paper")}
              btnType="paper paper-P smallBtn"
            />
            <PlayBtn
              playBtnClick={() => playBtnClick("rock")}
              btnType="rock rock-P smallBtn"
            />
            <PlayBtn
              playBtnClick={() => playBtnClick("scissors")}
              btnType="scissors scissors-P smallBtn"
            />
            <PlayBtn
              playBtnClick={() => playBtnClick("lizard")}
              btnType="lizard lizard-P smallBtn"
            />
            <PlayBtn
              playBtnClick={() => playBtnClick("spock")}
              btnType="spock spock-P smallBtn"
            />
          </div>
        ) : (
          <div className="resultContainer">
            <PlayBtn
              btnType={
                varObj.animation[0] + " " + varObj.userPick + " bigBtn user"
              }
            />

            {varObj.Reset && (
              <div className="reset">
                <h1>YOU {varObj.result}</h1>
                <button onClick={resetBtnClick}>PLAY AGAIN</button>
              </div>
            )}

            <PlayBtn
              btnType={varObj.animation[1] + " " + varObj.compPick + " bigBtn"}
            />
          </div>
        )}

        <div className="ruleBtnContainer">
          <button onClick={() => setOverlay(true)} className="ruleBtn">
            RULES
          </button>
        </div>
      </section>
    </main>
  );
}
