import Carousel from './Carousel';
import { useState } from 'react';
import illustration from './il2.jpg';
import logo from './mylogocroppeda.png';
import photography from './Picture4.jpg';
import {illustrations} from "./CarouselData.js";
import {logos} from "./CarouselData.js";
import {photos} from "./CarouselData.js";
import {uis} from "./CarouselData.js";

const Design = () => {

  const [selected, setSelected] = useState(false);


  const toggle = () => {
    setSelected(!selected);
  }


    return (      
    <div className = "designPg">

<div className='aboutMeDesktop'><p> My computer grapics-related skills include, though are not necessarily limited to:
<ul>
<li>Digital Illustration</li>
<li>Vector logo design</li>
<li>Website UI/UX design</li>
<li>3d Modeling</li>
<li>Digital Video Production</li>
<li>Digital Photography</li>
</ul>
</p><p>I have a long history of different software I've used for digital media production.
    I've been doing things such as digital illustration and video editing since I was a kid, messing
    around with freeware such as MSPaint and Windows Movie Maker as an excited 10 year old. These days,
    I've gotten used to using more robust software. For digital illustration I've moved to PaintTool Sai,
    and nowadays I use Clipstudio Paint.</p>
    
    <p>With digital video editing, as a teenager I started with Pinnacle
    Studio before eventually moving to Adobe Premiere Pro(thanks to school licenses!). Through college,
    I've grown comfortable with the rest of the Adobe Suite as well because I could finally use it without paying my
    life's savings away. Photoshop is far-and-away the photo manipulation software I have the easiest time using,
    and I've used it for pretty much everything related to digital images. Having taken a number of graphic design courses,
    I'm also very at home using Adobe Illustrator.</p>
    
    <p>These days, since I'm in the buffer period where I'm out of college
    but don't have a job yet, I'm back to using non-Adobe software that I can afford. From what I've found, Affinity
    Photo and Affinity Designer are the easiest to use alternatives to Photoshop and Illustrator that don't require a
    subscription. For other types of software, I generally try to find stuff that's open-source because it's always
     affordable or free, and much higher quality than other freeware. Blender 3D is one such program, and I can't sing
     its praises highly enough. It has everything the average learner needs to access the world of CGI graphics, and its
      quality has very quickly been catching up to commercial products such as Maya. </p>
    <p>Knowing how much I love open-source
      software, it would also come as no surprise to learn that I swear by the Mozilla FireFox web browser. It has always
      felt much more customizable and secure than any of the other browsers out there. Being a front-end dev, of course,
      I have other browser types downloaded to check that my websites are working properly on them! </p></div>


<div className='skillListMobile'><p> My computer grapics-related skills include, though are not necessarily limited to:
<ul>
<li>Digital Illustration</li>
<li>Vector logo design</li>
<li>Website UI/UX design</li>
<li>3d Modeling</li>
<li>Digital Video Production</li>
<li>Digital Photography</li>
</ul>
</p></div>

<div className='expandParagraphs' style={{backgroundColor: selected ? '#ffffff11' : '#35024930'}} >
  <h2 onClick={toggle}>▼Tap here to learn about my history▼</h2>
  {selected &&<div>
    <p>I have a long history of different software I've used for digital media production.
    I've been doing things such as digital illustration and video editing since I was a kid, messing
    around with freeware such as MSPaint and Windows Movie Maker as an excited 10 year old. These days,
    I've gotten used to using more robust software. For digital illustration I've moved to PaintTool Sai,
    and nowadays I use Clipstudio Paint.</p>
    
    <p>With digital video editing, as a teenager I started with Pinnacle
    Studio before eventually moving to Adobe Premiere Pro(thanks to school licenses!). Through college,
    I've grown comfortable with the rest of the Adobe Suite as well because I could finally use it without paying my
    life's savings away. Photoshop is far-and-away the photo manipulation software I have the easiest time using,
    and I've used it for pretty much everything related to digital images. Having taken a number of graphic design courses,
    I'm also very at home using Adobe Illustrator.</p>
    
    <p>These days, since I'm in the buffer period where I'm out of college
    but don't have a job yet, I'm back to using non-Adobe software that I can afford. From what I've found, Affinity
    Photo and Affinity Designer are the easiest to use alternatives to Photoshop and Illustrator that don't require a
    subscription. For other types of software, I generally try to find stuff that's open-source because it's always
     affordable or free, and much higher quality than other freeware. Blender 3D is one such program, and I can't sing
     its praises highly enough. It has everything the average learner needs to access the world of CGI graphics, and its
      quality has very quickly been catching up to commercial products such as Maya. </p>
    <p>Knowing how much I love open-source
      software, it would also come as no surprise to learn that I swear by the Mozilla FireFox web browser. It has always
      felt much more customizable and secure than any of the other browsers out there. Being a front-end dev, of course,
      I have other browser types downloaded to check that my websites are working properly on them! </p>
      <h2 onClick={toggle}>▲Collapse▲</h2>
  </div>}
  </div>

    <div className = "designLinks">
    <article className = "dLink">
        <h1>Website UI</h1>
        <p>This is what you probably came here for. Given that I am a front-end website developer, that makes perfect sense. At the moment,
          I am fresh out of college, and since I never had to opportunity to do an internship, I have a select few projects to show.
          My main showcase of what I can do in web dev is this very portfolio. This website is the culmination of all of my website
          development skills thus far. This website was hard-coded in React with VSCode, tailor made to be a fun and interesting way
          to learn about me and my career.<br/>
          I have developed a number of school projects during my college years, including my Purdue senior Capstone project. I designed my
          capstone project in Wordpress in a team with one other student. It was created for a local non-profit music organization. You
          can see the live website here. I will showcase more of that and other things I've done below, and will link the github repos of
          what the code looks like if I didn't create it via Wordpress.
        </p>
        <a href='https://communitymusicalliance.com/' target='blank'><h3>Senior Capstone project, made with Wordpress Spring 2022</h3></a>
        <a href='https://www.youtube.com/watch?v=eetii6bntbQ' target='blank'><h3>Website made from Wordpress as a portfolio project, Fall 2021</h3></a>
        <a href='https://www.youtube.com/watch?v=3Eup6IIUNqM' target='blank'><h3>Website made from scratch for CGT141, Spring 2019</h3></a>
        <a href='https://www.youtube.com/watch?v=o8jMcvT5-oU' target='blank'><h3>Website made via Adobe Dreamweaver back in highschool, 2014</h3></a>
        <Carousel subject = {uis}/>

      </article>
      <article className = "dLink">       
        <h1>Digital Illustration</h1>
        <a href="https://rebk96.artstation.com/" target='blank' alt="digital illustration link">
          <h3>View more of my art here</h3>
        </a>
        <p>I've enjoyed digital illustration for over 15 years at this point, and
          am eager to continue improving. Most of my pieces revolve around my hobbies,
          games and anime, though I have a few experimental pieces here and there as well.
        </p>
        <Carousel subject={illustrations}/>
        <img className='mobileImage' src={illustration} alt="Illustration"/>

      </article>
      <article className = "dLink">
        <h1>Graphic Design</h1>
        <p> Most of my graphic design work at this point has been made through projects for school or clubs I've been involved in.
          I've had experience in vector graphics since I first learned Adobe Illustrator back in my tech center classes around 2014.
          Through classes from then until now, I've learned many important design-related concepts, such as the significance of color choice
          and shape. Given its similarities to digital illustration, I am quite comfortable doing this sort of work.
        </p>
        <Carousel subject={logos}/>
        <img className='mobileImage' src={logo} alt="My Logo"/>

      </article>
      <article className = "dLink">
       <h1>Photography</h1>
       <a href="https://www.instagram.com/rebk_cgt/" target='blank' alt='instagram'>
         <h3>See more of my photography on my Instagram</h3>
       </a>
       <p>I've had an interest in photography for as long as I can remember. One of my earliest memories as a toddler is lining up my 
          stuffed animals on the staircase to take their picture with my Elmo camera. These days, I am most interested in nature and
          pet photography, although I have fun with pretty much any type of picture-taking. I've used school DSLR cameras for a couple of
          different classes and have a reasonable understanding of the settings on those cameras. I hope to be able to afford my own
          DSLR when I have the money to make that purchase, but in the meantime, I do what I can to make my phone camera shine.
        </p>
        <Carousel subject={photos}/>
        <img className='mobileImage' src={photography} alt="Photograph"/>

      </article>
      <article className = "dLink">
        <h1>Videography</h1>
 
        <p>Digital video is another subject in which I have a pretty long history with. As a child, nothing was more fun to me than
          finding all of the different features on Windows Movie Maker and gathering materials to make something interesting with it.
          One of my proudest moments as a 10 year old was when I made a video titled "Caught on Camera", where I hid a video camera
          to catch our family dog, Cassie, sneaking a snack from the kitchen countertop. I still have that video <a href="https://www.youtube.com/watch?v=sWUwcp9X5K4" target='blank' alt="video link">here</a> if you're curious! 
          These days I can use more sophisticated editing software to make videos with more pre-planning.
          To protect my privacy, my video projects are unlisted on Youtube. I will post links of some of my projects below.
        </p>
        <a href="https://youtu.be/lirDLNQp4fg" target='blank' ><h3>Birding Montage</h3></a>
        <a href="https://youtu.be/4sdkPJR7HpM" target='blank' ><h3>College PSA Project</h3></a>
        <a href="https://youtu.be/QXYgUzzj9Ss" target='blank'><h3>College Commercial Project</h3></a>
        <a href="https://youtu.be/9cNNN4RSxVU" target='blank'><h3>College Speech Class Project, Baking Instructional</h3></a>
        <a href="https://youtu.be/hwgFFSG3J0M" target='blank'><h3>High School Tech Center 2015 Documentary Project</h3></a>
        <a href="https://youtu.be/wkwK4ZpPITU" target='blank'><h3>High School 2015 for Fun Montage</h3></a>
        <iframe  src="https://www.youtube-nocookie.com/embed/-X_vYfD_lEM" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </article>
      <article className = "dLink">
        <h1>3D Modeling</h1>
        <a href="https://sketchfab.com/rebk96" target='blank' alt="sketchfab">
          <h3>See more of my 3D Modeling on my Sketchfab</h3>
        </a>
        <p>Of all of the subjects here, I am newest to 3D Modeling. I was first introduced to it through Purdue's CGT116 class sometime around
          2020. We learned to model in Maya through that class, and I was so hooked that I even considered changing my career to it. I 
          decided against it assuming front-end website development would have more career opportunities, but since that class I started
          to learn how to model in Blender. Blender is much more accessible than Maya for someone like me, and I have a lot of fun learning
          more about it through the countless tutorials found on Youtube.
        </p>
        <div class="sketchfab-embed-wrapper"> <iframe title="Animal Crossing Cat Design" 
        allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; 
        xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered 
        web-share src="https://sketchfab.com/models/bfa3075d6d4243bfa774255e20a7f53a/embed"> </iframe> 
    </div>

      </article>


    </div>
    </div>  );
}
 
export default Design;