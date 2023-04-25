import carrotL from "./caret-left-solid.svg";
import carrotR from "./caret-right-solid.svg";
import x from "./xmark-solid.svg";
import { useState } from "react";



const Carousel = ({subject}) => {
    
    const [curImg, setCurImg] = useState(0);

    const [expanded, setExpanded] = useState(false);
    
    const clickFwd = () => {
        if (curImg < subject.length-1) {
            setCurImg(curImg+1);
        }else{
            setCurImg(0);
        }
    }

    const clickBwd = () => {
        if (curImg !== 0) {
            setCurImg(curImg-1);
        }else{
            setCurImg(subject.length-1);
        }
    }

    const clickThumb = (idNo) => {
        setCurImg(idNo);
    }


    const clickCenter = () => {
        if(!expanded){
            setExpanded(true);
        }
    }

    const clickX = () => {
        setExpanded(false);
    }


    return (
        <>
                    <div className="upper">         
               <h2>{subject[curImg].name}</h2>
             <h3>{subject[curImg].date}</h3></div>
        <div className = "carousel">
            <div className="innerCarousel">
                <div className ="left" onClick={clickBwd}><img src={carrotL} alt="left" /></div>
                <div className ="center" onClick ={clickCenter} style={{backgroundImage: `url(${subject[curImg].img})`,}}>
                </div>
                <div className ="right" onClick={clickFwd}><img src={carrotR} alt="right"/></div>
            </div> 
                <div className="lower">
                {subject.map((thumbnail) => (
                  <div className="thumbnails" key={subject.id}>
                    <img src = {thumbnail.img} onClick={() => {clickThumb(thumbnail.id)}} alt="thumbnail"/>
                  </div>))}
                </div>
        </div>

        {expanded && <div className="imageScreen">
        <div className = 'bigImage'><img src={subject[curImg].img} alt="expanded image" onClick={clickX} /> 
        <img className = 'x' src={x} onClick={clickX}/>
        </div>
        </div>}

        </>

        
      );
}
 
export default Carousel;