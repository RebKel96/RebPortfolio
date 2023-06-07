
import React from "react";
import FunApp from "./FunApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faArtstation } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import sketchfab from "./sketchfab.svg";


    

const Code = () => {
    return (<div className="rightPg">
        <div className = "codePg">
        <p> I code so that my designs can truly shine in an interactive environment. I've dabbled in a few different languages through the
            years, such as Java, Python, and C#, but I'm most comfortable with code complimenting front-end website development.
            HTML, CSS, and Javascript have been my main tools on my journey to solidify a career. When creating website applications,
            I have learned to use React, which is the most popular Javascript framework being used currently. I coded this full
            portfolio in React, and I've had a blast doing so!
        </p>
        
        <p>In the past few months, one thing that has helped me a lot with coding is the AI language model, ChatGPT. I truly
        believe AI such as this will be a huge asset to those in tech going forward. GPT as it is right now isn't perfect-
        it can make mistakes and do things suboptimally -  but it is an extremely useful tool for when I hit a roadblock. My
        way of self-studying new coding knowledge now is to first look up Youtube tutorials, and ask ChatGPT for help with
        things I'm not quite getting. If I still can't figure something out with GPT's help, that's when I'll go to a learner
        community such as Codecademy's discord to get advice from humans.<br/>
         Bugs that used to take me hours and many headaches to find can now sometimes be instantly
        identified with GPT. It has helped me learn coding many times quicker than I could ever dream of doing before.
        Humans still have the upper hand in creating longer and more complicated code, but to get to the point of being
        able to write such code, GPT is a fantastic copilot!
        </p>
        <p>Coding know-how is a little more difficult to showcase than general digital media, but this portfolio is a decent example
        of what I've been able to accomplish with React at this point. I'll showcase a couple other applications I've made below.
        if you'd like to see the code, I'll link the Github repo as well.
        </p> 
        <div className = 'codeProjects'>
        <div className="my-code-project">
            <h2>Picture Cross Game</h2>
            <p>I created this in Microsoft Visual Studio as a final project for one of the web dev courses I took in college. I created it
                completely from the ground up using the C# skills I learned in the class, and it was a lot of fun. Because
                it was my first C# project on my own, it's not perfect, but it's a project I look back on with pride.
            </p>
            <iframe  src="https://www.youtube.com/embed/tkbCStQZyJM"
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <h3>Made using C# in with the aspx.net framework</h3>
        </div>
        <div className="my-code-project">
            <h2>Little Drawing Canvas</h2>
            <p>This thing came into existence while I was messing around with ChatGPT. I wanted to learn how to make
                apps I could embed directly into my website for the sake of this portfolio, so I prompted GPT to
                make me something with HTML5 Canvas. The app GPT wrote for me was a simple white box that draws lines
                when you hold the mouse button down. I wanted to learn more about canvas so I could add on to this and
                then eventually make my own canvas webapp once I'd learned enough. I looked up video tutorials on canvas
                and added functions like changing color and undo/redo.
            </p>
        
            <FunApp/>
            <h3>Made with Javascript jumpstarted by ChatGPT</h3>
            </div>
        <div className="my-code-project"></div>
        <div className="my-code-project"></div>
        
        
        </div>
        
        <div className="mobile-message">
        <h3>If you would like to experience my coding projects, I suggest you switch to your computer. It's difficult to show much of
            my work on a small screen! </h3>
            <p>I will still post links to videos or github repositorys of my project below:</p>
        </div>

        </div>
        <div className = "footer">
        <footer>
          <nav>
        <ul className="nav-list">
            <li> <a href="#"><FontAwesomeIcon icon={faEnvelope} className="footer-icon"/> rkbk96@gmail.com</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faLinkedin} className="footer-icon"/> LinkedIn</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faArtstation} className="footer-icon"/> Artstation</a></li>
            <li><a href="#"><img src = {sketchfab} className="footer-icon"/> Sketchfab</a></li>
            <li><a href="#"><FontAwesomeIcon icon={faInstagram} className="footer-icon"/> Instagram</a></li>
        </ul>
          </nav>
        </footer>
        </div>
    </div>
    );
}
 
export default Code;