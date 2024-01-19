import PlayBtn from "./Components/PlayBtn";

export default function App() {
  return (
    <main className="appContainer">
      <section className="overlayPage hide">
        <div className="box">
          <nav>
            <h1>RULES</h1>
            <button></button>
          </nav>
          <img src="images/image-rules-bonus.svg" alt="rules"></img>
        </div>
      </section>

      <section className="gamePage">
        <div className="leadBoard">
          <img src="images/logo-bonus.svg" alt="logo"></img>
          <div className="scoreContainer">
            <h2>SCORE</h2>
            <h1>12</h1>
          </div>
        </div>

        <div className="gameBtnContainer hide">
          <PlayBtn btnType="rock rock-P smallBtn" />
          <PlayBtn btnType="paper paper-P smallBtn" />
          <PlayBtn btnType="scissors scissors-P smallBtn" />
          <PlayBtn btnType="lizard lizard-P smallBtn" />
          <PlayBtn btnType="spock spock-P smallBtn" />
        </div>

        <div className="resultContainer ">
          <PlayBtn btnType="scissors bigBtn user" />

          <div className="reset hide">
            <h1>YOU LOSE</h1>
            <button>PLAY AGAIN</button>
          </div>

          <PlayBtn btnType="emptyBtn bigBtn" />
          <PlayBtn btnType="paper bigBtn comp hide" />
        </div>

        <div className="ruleBtnContainer">
          <button className="ruleBtn">RULES</button>
        </div>
      </section>
    </main>
  );
}
