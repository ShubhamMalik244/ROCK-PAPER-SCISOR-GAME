import PlayBtn from './Components/PlayBtn';

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

         <section className="gamePage ">

               <div className="leadBoard">
                <img src="images/logo-bonus.svg" alt="logo"></img>
                <div className="scoreContainer">
                  <h2>SCORE</h2>
                  <h1>12</h1>
                </div>
               </div>

               <div className="gameBtnContainer">
                 <PlayBtn btnType='rock'/>
                 <PlayBtn btnType='paper'/>
                 <PlayBtn btnType='scissors'/>
                 <PlayBtn btnType='lizard'/>
                 <PlayBtn btnType='spock'/>
               </div>
         </section>
    </main>
  );
}

