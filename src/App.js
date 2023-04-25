import './App.css';
import './Design.css';
import './Coding.css';
import './ImageCarousel.css';
import React, {useState} from 'react';
import myLogo from './mylogocropped2.png';
import Design from './Design';
import Code from './Code';
import Arrow from './Arrow';




    

const App = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [yesClicked, setYesClicked] = useState(false);
    const [aboutClicked, setAboutClicked] = useState(false);
  
    const handleClick = () => {
      if(!isClicked)
      setIsClicked(!isClicked);
    };

    const handleClickYes = () => {
      if(!yesClicked)
      setYesClicked(!yesClicked);
    };

    const handleClickAbout = () => {
      setAboutClicked(!aboutClicked);
    };

  return (
    <div className="App">
      <div className="mainHeader"> 
        <h1>Reb Kelecy</h1>
        <h2>Website Development</h2>
      </div>

      <div className="mainBody">
      <div className={`about-me ${aboutClicked ? 'about-me-clicked' : ''}`} onClick={handleClickAbout}>
        <img src = {myLogo} />    
        </div>

      {!yesClicked && <div className={`design ${isClicked ? 'design--clicked' : ''}`} onClick={handleClick}>
        <h1>Design</h1>
        {isClicked? <Design /> : null}
        {isClicked? <Arrow isClicked={[isClicked, setIsClicked]} yesClicked={[yesClicked, setYesClicked]}/> : null}

      </div> }

      {!isClicked && <div className={`code ${yesClicked ? 'code--clicked' : ''}`} onClick={handleClickYes}>
        <h1>Code</h1>
        {yesClicked? <Code /> : null}
        {yesClicked?  <Arrow isClicked={[isClicked, setIsClicked]} yesClicked={[yesClicked, setYesClicked]}/>: null}

      </div> }
      </div>
    </div>
  );
}

export default App;
