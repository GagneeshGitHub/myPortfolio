import React, { useState } from "react";
import "./cssfiles/homepagecss.css";
import sound from "./soundeffect/popsound.mp3";
import clicksound from "./soundeffect/clickeffect.mp3";

export default function HomePage() {
  // States for different thing
  const [closeBtn, setCloseBtn] = useState(
    require("./otherimages/notClickedClose.png")
  );

  const soundAndVisibility = (elId, el2Id) => {
    new Audio(sound).play();

    // Changing visibility and other things
    var elOne = document.getElementById(elId);
    var elTwo = document.getElementById(el2Id);
  
    elOne.style.visibility = "visible";
    elOne.style.scale = "1.4";
    elTwo.style.opacity = "0";
  
  };

  const onMouseLeave = (elId, el2Id) => {
    var elOne = document.getElementById(elId);
    var elTwo = document.getElementById(el2Id);
    elOne.style.visibility = "hidden";
    elOne.style.scale = "1";
    elTwo.style.opacity = "1";
  };

  const soundAndDetail = (detailId) => {
    new Audio(clicksound).play();
    var blackBackground = document.getElementById("blackBackground");
    var popupWindow = document.getElementById("popupWindow");

    blackBackground.style.visibility = "visible";
    blackBackground.style.opacity = "1";
    popupWindow.style.visibility = "visible";
    popupWindow.style.opacity = "1";

    // Displaying the respective details
    var detail = document.getElementById(detailId);
    detail.style.visibility = "visible";
  };

  // Changing image for close button
  const changeCloseImage = (value) => {
    var blackBackground = document.getElementById("blackBackground");
    var popupWindow = document.getElementById("popupWindow");
    var childPopDivVar = document.getElementsByClassName("childPopDiv");

    console.log("Iterating the js object");
    
    var keysOfObject = Object.keys(childPopDivVar);

    for (var i in keysOfObject){
      console.log("Get oject element is: ", childPopDivVar[i])
      if(childPopDivVar[i].style.visibility==="visible"){
        console.log("Yes one item is visible, we should take it down.")
        // Setting the visibility to hidden
        childPopDivVar[i].style.visibility = "hidden";
      }
    }

    if (value === false) {
      setCloseBtn(require("./otherimages/clickedClose.png"));
    } else if (value === true) {
      setCloseBtn(require("./otherimages/notClickedClose.png"));
      blackBackground.style.visibility = "hidden";
      blackBackground.style.opacity = "0";
      popupWindow.style.visibility = "hidden";
      popupWindow.style.opacity = "0";
    }
  };

  const changeSize = (idName) => {
    var element = document.getElementById(idName);
    element.style.scale = "1.3";
  };

  // Functions for transition of images
  const callTransition = (idName) => {
    var element = document.getElementById(idName);
    if (element.style.scale === "1") {
      element.style.scale = "1.3";
    } else if (element.style.scale === "1.3") {
      element.style.scale = "1";
    }
  };

  // Checking the visibility using useEffect

  return (
    <div className="outerMostDiv">
      <div className="mainDiv">

        {/* First pop image */}
        <div id="firstChild" className="innDiv">
          <img
            id="firstShadow"
            className="shadowImg subChild"
            src={require("./shadowimages/researchshadow.png")}
            alt="No image found"
          />
          <img
            id="firstLight"
            className="lightChild subChild"
            src={require("./shadowimages/researchlight.png")}
            alt="No Image Found"
          />
          <img
            className="childHover subChild"
            onMouseDown={() =>soundAndDetail("popInterestDiv")}
            onMouseOver={() => soundAndVisibility("firstLight", "firstShadow")}
            onMouseOut={() => onMouseLeave("firstLight", "firstShadow")}
            src={require("./media/interestResearch.png")}
            alt="No image found"
          />
          <img className="nameText subChild" src={require("./outlinednames/Learningandinterest.png")} alt="No image found" />
        </div>

        {/* Project Shop Popup Imge */}
        <div id="secondChild" className="innDiv">
          <img
            id="secondShadow"
            className="shadowImg subChild"
            src={require("./shadowimages/projectshopshadow.png")}
            alt="No image found"
          />
          <img
            id="secondLight"
            className="lightChild subChild"
            src={require("./shadowimages/projectshoplight.png")}
            alt="No Image Found"
          />
          <img
            className="childHover subChild"
            onMouseDown={()=>soundAndDetail("projectPopDiv")}
            onMouseOver={() =>
              soundAndVisibility("secondLight", "secondShadow")
            }
            onMouseOut={() => onMouseLeave("secondLight", "secondShadow")}
            src={require("./media/projectShop.png")}
            alt="No image found"
          />
          <img className="nameText subChild" src={require("./outlinednames/myprojecttxt.png")} alt="No image found" />
        </div>

        {/* Skill Shop Popup Image */}
        <div id="thirdChild" className="innDiv">
          <img
            id="thirdShadow"
            className="shadowImg subChild"
            src={require("./shadowimages/skillshopshadow.png")}
            alt="No image found"
          />
          <img
            id="thirdLight"
            className="lightChild subChild"
            src={require("./shadowimages/skillshoplight.png")}
            alt="No Image Found"
          />
          <img
            className="childHover subChild"
            onMouseDown={()=>soundAndDetail("skillPopDiv")}
            onMouseOver={() => soundAndVisibility("thirdLight", "thirdShadow")}
            onMouseOut={() => onMouseLeave("thirdLight", "thirdShadow")}
            src={require("./media/SkillShop.png")}
            alt="No image found"
          />
          <img className="nameText subChild" src={require("./outlinednames/myskillstxt.png")} alt="No image found" />
        </div>

        {/* Main profile popup image */}
        <div id="fourthChild" className="innDiv subChild">
          <img
            id="fourthShadow"
            className="shadowImg"
            src={require("./shadowimages/mainPortfolioShadow.png")}
            alt="No image found"
          />
          <img
            id="fourthLight"
            className="lightChild subChild"
            src={require("./shadowimages/mainportfoliolight.png")}
            alt="No Image Found"
          />
          <img
            className="childHover subChild"
            onMouseDown={()=>soundAndDetail("mainprofilePopDiv")}
            onMouseOver={() =>
              soundAndVisibility("fourthLight", "fourthShadow")
            }
            onMouseOut={() => onMouseLeave("fourthLight", "fourthShadow")}
            src={require("./media/mainPortfolio.png")}
            alt="No image found"
          />
          <img className="nameText subChild" src={require("./outlinednames/profiletxt.png")} alt="No image found" />
        </div>

        {/* Education popup image */}
        <div id="fifthChild" className="innDiv subChild">
          <img
            id="fifthShadow"
            className="shadowImg"
            src={require("./shadowimages/educationshadow.png")}
            alt="No image found"
          />
          <img
            id="fifthLight"
            className="lightChild subChild"
            src={require("./shadowimages/educationLight.png")}
            alt="No Image Found"
          />
          <img
            className="childHover subChild"
            onMouseDown={()=>soundAndDetail("educationPopDiv")}
            onMouseOver={() => soundAndVisibility("fifthLight", "fifthShadow")}
            onMouseOut={() => onMouseLeave("fifthLight", "fifthShadow")}
            src={require("./media/education.png")}
            alt="No image found"
          />
          <img className="nameText subChild" src={require("./outlinednames/educationtxt.png")} alt="No image found" />
        </div>

        {/* Other profiles popup image */}
        <div id="sixthChild" className="innDiv">
          <img
            id="sixthShadow"
            className="shadowImg subChild"
            src={require("./shadowimages/otherprofileshadow.png")}
            alt="No image found"
          />
          <img
            id="sixthLight"
            className="lightChild subChild"
            src={require("./shadowimages/otherprofilelight.png")}
            alt="No Image Found"
          />
          <img
            className="childHover subChild"
            onMouseDown={()=>soundAndDetail("otherprofilePopDiv")}
            onMouseOver={() => soundAndVisibility("sixthLight", "sixthShadow")}
            onMouseOut={() => onMouseLeave("sixthLight", "sixthShadow")}
            src={require("./media/OtherPortfolio.png")}
            alt="No image found"
          />
          <img className="nameText subChild" src={require("./outlinednames/socialmediaandaccount.png")} alt="No image found" />
        </div>

        {/* My Programming Journey Popup image */}
        <div id="seventhChild" className="innDiv">
          <img
            id="seventhShadow"
            className="shadowImg subChild"
            src={require("./shadowimages/myjourneyshadow.png")}
            alt="No image found"
          />
          <img
            id="seventhLight"
            className="lightChild subChild"
            src={require("./shadowimages/myjourneylight.png")}
            alt="No Image Found"
          />
          <img
            className="childHover subChild"
            onMouseDown={()=>soundAndDetail("mystoryPopDiv")}
            onMouseOver={() =>
              soundAndVisibility("seventhLight", "seventhShadow")
            }
            onMouseOut={() => onMouseLeave("seventhLight", "seventhShadow")}
            src={require("./media/programmingJourney.png")}
            alt="No image found"
          />
          <img className="nameText subChild" src={require("./outlinednames/programmingjourneytxt.png")} alt="No image found" />
        </div>
      </div>

      {/* Low opacity black background while we popup the details */}
      <div id="blackBackground" className="blackBackground"></div>

      {/* Details popup division */}
      <div id="popupWindow" className="popWindow">
        <img
          onMouseUp={() => {
            changeCloseImage(true);
            console.log("On Mouse Up Is Called");
          }}
          onMouseDown={() => changeCloseImage(false)}
          id="closeBtnPopWindow"
          src={closeBtn}
          alt="No image found"
        />
        <div className="insideGridOfPopUpWindow">
          {/* First Detail */}
          <div id="popInterestDiv" className="childPopDiv ppInnerDiv">
            <div className="childPop leftTop">
              <img
                id="popInterest"
                onLoad={() => changeSize("popInterest")}
                onTransitionEnd={() => callTransition("popInterest")}
                className="popImage"
                src={require("./media/interestResearch.png")}
                alt="No Image Found"
              />
              <span className="detailPara">"My Interests and New learnings."</span>
            </div>
            <div className="childPop leftBottom">
              <h1>Programming</h1>
              <p>The first and foremost thing I have great interest in is "PROGRAMMING", whether it is c++, c#, javascript or python. I just love the way programming is done. I like how we can achieve anything doing programming. Sometime I just wonder how it is actually done inside the computer, going deep into the working of the programming and learning new things about computer and programming.</p>
            </div>
            <div className="childPop rightTop">
              <h1>Web Development</h1>
              <p>One of the thing I love to program is websites, I like to make a website from scratch rather than making it in wordpress etc. I do use wordpress for making sites, but most of the time I prefer to make the website in js, html and css. List of frameworks I use for making website are: <br/><u>Backend frameworks:</u> <ul><li>Node Js</li><li>Express Js</li></ul><u>Frontend Frameworks:</u> <ul><li>React Js</li><li>Next Js</li><li>Angular Js</li></ul></p>
              <h2>PHP (New Learning)</h2>
              <p>Now I just started learning php. Php is a backend development language, and it very popular for backend development. I future I will be able to give backend development service in PHP language.</p>
              <h2>AI/ML</h2>
              <p>I do not know much about AI/ML. But I have created some devices and programmed it to a AI. 
                <br />
                In future I will try get a hand on experience with AI/ML. (I hope I will be able to make a AI like JARVIS)
              </p>
            </div>
            <div className="childPop rightBottom">
              <h1>Game Development</h1>
              <p>I am learning game development from when I was in last year of my engineering. I learned a lot from game development. The understanding of pramming language I gained from game development is a bit much than before. I just love making game, making characters, making music, finding solutions to perform a task etc.</p>
              <h2>MERN (New Learning)</h2>
              <p>MERN simply means Mongodb, Express Js, React Js and Node Js. I am good in all of the language, but now focusing myself on MERN stack, how to combine these languages with each other and also developing some Saas.</p>
              <h2>Mathematics (In Future)</h2>
              <p>I don't know why but I love to learn about Mathematics. I am preparing myself to learn and go deep into Mathematics, I don't know will I be able to do that, but will try my best to learn all about Mathematics. 
                <br />
                It not like that only few people are good in Mathematics because they have a intelligent brain. From my experience I can say that there are two things important to become good in Mathematics.
                <ul>
                  <li>First one is that, we should have a strong knowledge of basics.</li>
                  <li>Second one is that, we should know how to connect maths with surroundings (real world)</li>
                </ul>
                If a person focus on these two things and other things which he/she may find important. He/she can become a expert in Mathematics.
              </p>
            </div>
          </div>

          {/* Second Detail */}
          <div id="projectPopDiv" className="childPopDiv ppInnerDiv">
            <div className="childPop leftTop">
              <img
                id="projectPop"
                onLoad={() => changeSize("projectPop")}
                onTransitionEnd={() => callTransition("projectPop")}
                className="popImage"
                src={require("./media/projectShop.png")}
                alt="No Image Found"
              />
              <span className="detailPara">"Projects I have developed."</span>
            </div>
            <div className="childPop leftBottom">
              <h2>Clone of Hyer Website</h2>
              Link Of Original Site: <br /> <a className="accountLink" target="_blank" href="https://gohyer.com/">https://gohyer.com/</a>
              <br />
              This is the original website, from when I first created it's clone, it has added more features in it.
              <br />
              <br />
              I have created only the front end of the home page ot the website. Not all the pages.
              <br />
              <br />
              Link Of My Clone Hyer Website: <br /> <a className="accountLink" target="_blank" href="https://gagneeshgithub.github.io/hyermirror/">https://gagneeshgithub.github.io/hyermirror/</a> 
              <br />
              <br />
              You can see the source code of clone here: <br /> <a className="accountLink" target="_blank" href="https://github.com/GagneeshGitHub/hyermirror">https://github.com/GagneeshGitHub/hyermirror</a>
              <p></p>
            </div>
            <div className="childPop rightTop">
              <p>It was a fun to develop all these websties, and some of the websties and their internal code structure helped me learn more about programming, and algorithm</p>
              <h2>Shopping Site</h2>
              <p>It is just a simple example of how to connect the website with backend. This is a shopping website, which add products to carts and it has dummy backend, which I just found on the interne
                <br />
                <br />
                Link to the site is: <br /> <a href="https://gagneeshgithub.github.io/shoppingsite/" className="accountLink" target="_blank">https://gagneeshgithub.github.io/shoppingsite/</a>
                <br />
                <br />
                Source code of the site: <br /> <a className="accountLink" target="_blank" href="https://github.com/GagneeshGitHub/shoppingsite">https://github.com/GagneeshGitHub/shoppingsite</a>
              </p>
              <h2>Real Time Chat App</h2>
              <p>In my college time I had created a real time chat app with node, react and socket io. And I am sharing it's source code (only)
                <br />
                <br />
                I do not have any cloud platform yet, so unable to deploy and host this chat app. (But in future I will host the website)
                <br />
                <br />
                Source code: <br /> <a className="accountLink" target="_blank" href="https://github.com/GagneeshGitHub/chatapp">https://github.com/GagneeshGitHub/chatapp</a>
              </p>
            </div>
            <div className="childPop rightBottom">
              <h2>RP-Alloys</h2>
              <p>This website was a assignment I got, when I was applying for job. Here I am sharing this work with you
                (It was a figma file)
                <br />
                <br />
                Link of website: <br /> <a className="accountLink" target="_blank" href="https://gagneeshgithub.github.io/rpalloys/">https://gagneeshgithub.github.io/rpalloys/</a>
                <br />
                <br />
                Source code for the website: <br /> <a className="accountLink" target="_blank" href="https://github.com/GagneeshGitHub/rpalloys">https://github.com/GagneeshGitHub/rpalloys</a>
              </p>
            </div>
          </div>

          {/* Third Detail */}
          <div id="skillPopDiv" className="childPopDiv ppInnerDiv">
            <div className="childPop leftTop">
              <img
                id="skillPop"
                onLoad={() => changeSize("skillPop")}
                onTransitionEnd={() => callTransition("skillPop")}
                className="popImage"
                src={require("./media/SkillShop.png")}
                alt="No Image Found"
              />
              <span className="detailPara">"These are the skills I am good at."</span>
            </div>
            <div className="childPop leftBottom">
              <h2>HTML, CSS, JavaScript</h2>
              <p>I have developed many websites with html,css and javascript, it was fun to develop different kind of websites.I have developed many clone websites with only these three. Html, css and javascript was not the first language I learned (It was Java), but as a Web Developer, till now I have gained very much knowledge in it.</p>
              <h2>React Js</h2>
              <p>The first front end framework I learned was React Js, It was a little tough for me to understand the react js. But with practice and repeated use of react js I have gained very much knowledge and experience in it. I am more comfortable using react js than any other framework. <br/><br/><span className="evenThisP">"Even This Portfolio is Developed In React Js."</span></p>
            </div>
            <div className="childPop rightTop">
              <h2>Next Js</h2>
              <p>Next js is quite similar to react js, as it is developed on the top of react js, both are quite similar in working. But due to its advantages over the react js, I prefer to use next js for websites.</p>
              <h2>Node Js</h2>
              <p>Node Js is an open-source, cross platform server environment to develop backend. It makes possible to use javascript as a backend development language. Mainly I consider node js for backend develpment, and I have a good hand on experience with Node Js.</p>
              <h2>C#</h2>
              <p>C# is very popular game programming language. When I started learning game development I use to develop games in Godot, which uses its own programming language gdscript(quite similar to python). But when I swithed to the unity I found c# better fit for me, as I had good experience using c and c++. </p>
              <h2>C++/C</h2>
              <p>C and C++ languages are king of all the language, there is no comparison for these language. I still like to develop algorithm and small size software with these language. I am learning to develop complex software with C and C++.</p>
            </div>
            <div className="childPop rightBottom">
              <h2>Angular Js</h2>
              <p>After the react js, I learned the angular js framework, it was very different from react js, but still by practicing, over the time I have good hand on angular js. Also knowing about TypeScript is little benefit for me learning this framework.</p>
              <h2>Express Js</h2>
              <p>Just like Node Js, Express js is used to develop backend. It is a Node Js framework with easy to use syntax. It was developed to make the backend development easier for the developers. I most of the time use express for many backend program.</p>
              <h2>Blender</h2>
              <p>Blender a best open source and free software for many things. I am skill blender artist, in 3d modeling. Not good in making high graphics 3d models, but making good graphics for games.</p>
              <h2>2D Art and Photo Editing</h2>
              <p>Often when I used to get bored programming different thins, I find graphic designing and photo editing (also video editing) a fun thing to learn. But I didn't expected to become good in 2D art and photo editnig. I am comfortable using Inkscape as a software for photo editing and 2d art.</p>
              <h2>Mongodb</h2>
              <p>Mongodb a object based database, where we save data in form of object which is quite similar to json. I have a good experience using Mongodb.</p>
            </div>
          </div>

          {/* Fourth detail */}
          <div id="mainprofilePopDiv" className="childPopDiv ppInnerDiv">
            <div className="childPop leftTop">

              <div className="roundForProfile">
                <img src={require("./myimages/myProfile2.jpeg")} alt="No Image Found" />
              </div>
            </div>
            <div className="childPop leftBottom">
              <h2>GREETINGS!</h2>
              <p>Hello, my name is Gagneesh Vimal. I am a web developer and game developer, having great interest for programming, whehter it is software development, game, web or AI/ML. 
                <br />
                Everday is just another learning day for me. Learning new things about programming, graphics and electronics.
                This learning attitude is something I like in me.
                <br />
                <br />
                I am here to give my services to you. I developed this portfolio, so that people find it easy to know about my skill, education and services I am providing.
              </p>
            </div>
            <div className="childPop rightTop">
              <h2>My Services To Freelancing Customers</h2>
              <h4>Will I be able to do the work (Web Development)?</h4>
              <p>I will be able to do the work, I have good knowledge of html, js, css and React Js. Other skills are mentioned in skill shop.
                I have developed some clone website. (I do not own any rights to the website, or content. All the rights under the original website and the respective team.). I have developed to improve my web development skill.
                Now I am willing to make websites for peoples.
              </p>
              <h4>What if I do not get what I wanted?</h4>
              <p>You can ask me to improve the website again and again until you get what you want. I am just starting career as a freelancing, and hence providing free revisions for freelancing customers.</p>
              <h4>Will I be able to make complex website(s)?</h4>
              <p>Yes, definitely. I have developed some complex websites like chat app etc. I like challenges, I like to make websites that are new to me. 
                <br />
                <br />
                Time for completing the website may vary, but will not take too long to complete.
              </p>
            </div>
            <div className="childPop rightBottom">
              
            </div>
          </div>

          {/* Fifth detail */}
          <div id="educationPopDiv" className="childPopDiv ppInnerDiv">
            <div className="childPop leftTop">
              <img
                id="educationPop"
                onLoad={() => changeSize("educationPop")}
                onTransitionEnd={() => callTransition("educationPop")}
                className="popImage"
                src={require("./media/education.png")}
                alt="No Image Found"
              />
              <span className="detailPara">"My Education"</span>
            </div>
            <div className="childPop leftBottom">
              <h1>Engineering C.S.E</h1>
              <h2>Computer Science Engineering</h2>
              <p>I have done my engineering in computer science from the college SIRDA Group Of Institutions. It comes under the HPTU (Himachal Pradesh Techinal University).</p>
            </div>
            <div className="childPop rightTop">
              <h1>My Favourite Subjects</h1>
              <h2>Linux</h2>
              <p>I learned a lot about linux os, and now I most of the time use it for all my work.</p>
              <h2>Programming Algorithms</h2>
              <p>Learning about different Algorithms was quite a fun for me. I was able to understand all about algorithms, becuase till then I was very fluent in programming, structuring code etc.</p>
              <h2>C++</h2>
              <p>C++ is still one of my favourite language. No other language can beat it. I like its syntax and code structuring.</p>
              <h2>Mathematics</h2>
              <p>I am not good in history, sociology and all the other subjects. But other than programming and computer related subjects, Mathematics is one that I loved from my childhood. I wasn't even good in my native language subject, but I was excellent student in Mathematics.</p>
            </div>
            <div className="childPop rightBottom">
              
            </div>
          </div>
          {/* Sixth Detail */}
          <div id="otherprofilePopDiv" className="childPopDiv ppInnerDiv">
            <div className="childPop leftTop">
              <img
                id="otherprofilePop"
                onLoad={() => changeSize("otherprofilePop")}
                onTransitionEnd={() => callTransition("otherprofilePop")}
                className="popImage"
                src={require("./media/OtherPortfolio.png")}
                alt="No Image Found"
              />
              <span className="detailPara">"My accounts on different apps."</span>
            </div>
            <div className="childPop leftBottom">
              <h2>Github <img className="smLogos" src={require("./logos/github.png")} alt="No Image Found" /></h2>
              <p>Link: <a className="accountLink" target="_blank" href="https://github.com/GagneeshGitHub/">https://github.com/GagneeshGitHub/</a>
                <br />
                &emsp; I have uploaded some of the websites I have created to github. Open source and new websites will be added to the repositories in future.
              </p>
            </div>
            <div className="childPop rightTop">
              <h2>LinkedIn <img className="smLogos" src={require("./logos/linkedin.png")} alt="" /></h2>
              <p>Link: <a className="accountLink" target="_blank" href="https://www.linkedin.com/in/gagneeshvimal">www.linkedin.com/in/gagneeshvimal</a>
                <br />
                Currently not much active on LinkedIn.
              </p>
            </div>
            <div className="childPop rightBottom"></div>
          </div>
          {/* Seventh Detail */}
          <div id="mystoryPopDiv" className="childPopDiv ppInnerDiv">
            <div className="childPop leftTop">
              <img
                id="mystoryPop"
                onLoad={() => changeSize("mystoryPop")}
                onTransitionEnd={() => callTransition("mystoryPop")}
                className="popImage"
                src={require("./media/programmingJourney.png")}
                alt="No Image Found"
              />
              <span className="detailPara">"How I got started learning programming"</span>
           </div>
            <div className="childPop leftBottom">
              <h2>How I got interest in programming?</h2>
              <p>I was playing game in my computer when I was about 14 years old. The game was GTA San Andreas (I still play the game). Playing the game, I thought this and that thing should be in the game, at that time I was wondering how these games are made. And how these game are displyed and how all the things works.
                <br />
                <br />
                At that time I just opened browser and searched for it. At that time, in my area internet speed was too slow. I was not getting the required information. Somehow I got to learn about programming language, at first it was difficult for me to understand what is it? But searching more about programming lanuage I learned that it is way by which we can tell computer what to do.
              </p>
            </div>
            <div className="childPop rightTop">
              
            </div>
            <div className="childPop rightBottom"><br />
                <p> After that I was finding some materials to learn a programming language. My first programming language that I learned was Java, it was very fun for me learn this lanuage. But still that time I wasn't able to understand about classes, objects, inheritence etc. But as the time goes it was understading the advance topics very well.
                <br />
                <br />
                I developed some simple games, like questions and answers, remember the number etc. But due to lack of required resources I wasn't finding a way to learn about actual game development. So I just started learning some other languages like c, c++.
                This way I learned programming languages deeply.</p></div>
          </div>
          </div>
      </div>
    </div>
  );
}
