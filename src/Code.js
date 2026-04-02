
import React from "react";
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import sketchfab from "./sketchfab.svg";


    

const Code = () => {
    const [selected, setSelected] = useState(false);


    const toggle = () => {
      setSelected(!selected);
    }


    return (<div className="rightPg">
        <div className = "codePg">
        <div className ="codeDesktop">
            <p> I code so that my designs can truly shine in an interactive environment. I've dabbled in a few different languages through the
                years, such as Java, Python, and C#, but I'm most comfortable with code complimenting front-end website development.
                HTML, CSS, and Javascript have been my main tools on my journey to solidify a career. When creating website applications,
                I have learned to use React, which is the most popular Javascript framework being used currently. I coded this full
                portfolio in React, and I've had a blast doing so!
                <br/>
            </p>
            
            <p>Coding know-how is a little more difficult to showcase than general digital media, but this portfolio is a decent example
            of what I've been able to accomplish with React at this point. 
            if you'd like to see the code, I'll link the Github repo as well.
            </p>
        </div>
        <div className ="codeMobile">
            <p> I code so that my designs can truly shine in an interactive environment. I've dabbled in a few different languages through the
                years, such as Java, Python, and C#, but I'm most comfortable with code complimenting front-end website development, such as
                HTML, CSS, and Javascript.</p> 
                
                <div className="expandParagraphsC" style={{backgroundColor: selected ? '#ffffff11' : '#35024930'}}>
                <h2 onClick={toggle}>▼Tap here to learn about my history▼</h2>

                    {selected && <div>
                        <p>When creating website applications,
                        I have learned to use React, which is the most popular Javascript framework being used currently. I coded this full
                        portfolio in React, and I've had a blast doing so!
                        <br/>
                                    </p>
                        
                                    <p>Coding know-how is a little more difficult to showcase than general digital media, but this portfolio is a decent example
                                    of what I've been able to accomplish with React at this point.
                                    </p>
                                    <h2 onClick={toggle}>▲Collapse▲</h2>
                    </div>}
                </div>
        </div>
        <div className = 'codeProjects'>
        <div className="my-code-project">
            <h2>Picture Cross Game</h2>
            <span><a href="https://github.com/RebKel96/PicrossCode" target="_blank">Github Respository</a></span>
            <p>I created this in Microsoft Visual Studio as a final project for one of the web dev courses I took in college. I created it
                completely from the ground up using the C# skills I learned in the class, and it was a lot of fun. Because
                it was my first C# project on my own, it's not perfect, but it's a project I look back on with pride.
            </p>
            <iframe  src="https://www.youtube.com/embed/tkbCStQZyJM"
            title="YouTube video player" frameborder="0"></iframe>
            <h3>Made using C# in with the aspx.net framework</h3>
        </div>

        
        
        </div>
        
        <div className="mobile-message">
        <h3>If you would like to experience my coding projects, I suggest you switch to your computer. It's difficult to show much of
            my work on a small screen! </h3>
            <p>I will still post links to videos or github repositorys of my project below:</p>
            <ul>
                <li><a href="https://github.com/RebKel96/RebPortfolio" target="_blank">This portfolio</a></li>
                <li><a href="https://github.com/RebKel96/PicrossCode" target="_blank">Picross game I made for college</a></li>
            </ul>
        </div>

        </div>
        <div className = "footer">
        <footer>
          <nav>
        <ul className="nav-list">
            <li> <a href="mailto:rkbk96@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="footer-icon"/> rkbk96@gmail.com</a></li>
            <li><a href="https://www.linkedin.com/in/reb-kelecy-499453220/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="footer-icon"/> LinkedIn</a></li>
            <li><a href="https://www.artstation.com/rebk96" target="_blank"><FontAwesomeIcon icon={faArtstation} className="footer-icon"/> Artstation</a></li>
            <li><a href="https://sketchfab.com/rebk96" target="_blank"><img src = {sketchfab} className="footer-icon"/> Sketchfab</a></li>
            <li><a href="https://www.instagram.com/rebk_cgt/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="footer-icon"/> Instagram</a></li>
        </ul>
          </nav>
        </footer>
        </div>
    </div>
    );
}
 
export default Code;