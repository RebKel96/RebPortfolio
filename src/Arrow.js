import arrows from './arrow.svg';
const Arrow = (props) => {

    const [isClicked, setIsClicked] = props.isClicked;
    const [yesClicked, setYesClicked] = props.yesClicked;

    const handleClickArrow = () => {
        setIsClicked(!isClicked);
      }
  
      const handleClickArrow2 = () => {
        setYesClicked(!yesClicked);
      }

      const arrow = <img className='arrow' src = {arrows} onClick={handleClickArrow}/>;  
      const arrow2 = <img className='arrow2' src = {arrows} onClick={handleClickArrow2}/>

    return (   
        <>  
        {isClicked ? arrow : null}
        {yesClicked ? arrow2 : null}
        </>

     );
}
 
export default Arrow;