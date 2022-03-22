// Skills Icons
import nodeIcon from "./images/node-brands.svg"
import rubyIcon from "./images/rails.svg"
import reactIcon from "./images/react-brands.svg"
import jsIcon from "./images/node-js-brands.svg"
import sqlIcon from "./images/sql.svg"
import testIcon from "./images/test.svg"
import flutterIcon from "./images/flutter.svg"
import dartlangIcon from "./images/dartlang.svg"
import firebaseIcon from "./images/firebase.svg"



// Social Icon
import githubIcon from "./images/github.svg"
import twitterIcon from "./images/twitter.svg"
import linkedinIcon from "./images/linkedin.svg"
import spotifyIcon from "./images/spotify.svg"

 const data = {

  // Header Details
  name: "Kagiso",
  fullName: "Kagiso Mashigo",
  headerTagline: [
    // Line 1 For Header
    "Flutter Developer,",
    // Line 2 For Header
    "Web Developer,",
    // Line 3 For Header
    "and Playlist Maker",
  ],
  // Header Paragraph
  headerParagraph:
    `This is my portfolio and as you can see I am Kagiso. I am a Full-Stack developer specialising in Flutter and Web development.
    I have similar experience in both and am looking to deep dive and become an expert in one of them depending on whichever opportunity may come my way.`,

  // Contact Email
  contactEmail: "kagiso.k.mashigo@gmail.com",

  // Work Section
  webProjects: [
    {
      id: 1, 
      title: "Layers", 
      para:
        "With Layers once can isolate stems of a song to then practice your favourite parts. It's a sleek, responsive web app built with React, Express and, Node.", 
      
      imageSrc:
        "https://raw.githubusercontent.com/rothavanathan/LHL-final-project/master/client/public/logo512.png",
      
      url: "https://layers-irl.netlify.app/",
      stack: reactIcon
    },
    {
      id: 2, 
      title: "Scheduler", 
      para:
        "The Scheduler is a simple interview appointment scheduling tool. It is a fun and responsive SPA built using React and tested with Jest and Storybook.", 
      
      imageSrc:
        "https://github.com/KagisoMashigo/scheduler/raw/master/docs/Screenshot%20from%202020-12-16%2019-00-18.png?raw=true",
      
      url: "https://scheduler-kagisomash.netlify.app/",
      stack: reactIcon

    },
    {
      id: 3, 
      title: "Tweeter", 
      para:
        "Tweeter is a quirky interactive Twitter clone designed as a SPA. The technologies used to build it are CSS, JS, jQuery, AJAX, Node, Express and, MongoDB.", 
      
      imageSrc:
        "https://github.com/KagisoMashigo/tweeter/raw/master/public/images/screenshots/desktop-form-toggle-down.png?raw=true",
      
      url: "https://tweeter-kagisomash.herokuapp.com/",
      stack: jsIcon

    },
    {
      id: 4, 
      title: "TinyApp", 
      para:
        "TinyApp is a full-stack web app built with Node and Express. Users can shorten URLs and save them in their created account.", 
      
      imageSrc:
        "https://github.com/KagisoMashigo/tinyapp/raw/master/docs/my-urls-page.png?raw=true",
      
      url: "https://github.com/KagisoMashigo/tinyapp",
      stack: jsIcon

    },
    {
      id: 5, 
      title: "Jungle", 
      para:
        "A mini e-commerce application built with Ruby on Rails. It is a responsive MPA using a Rails backend with Active Record and follows the MVC design pattern.", 
      
      imageSrc:
        "https://github.com/KagisoMashigo/Jungle/raw/master/app/assets/images/Screenshot%20from%202021-01-13%2014-23-02.png?raw=true",
      
      url: "https://github.com/KagisoMashigo/Jungle",
      stack: rubyIcon

    },
    {
      id: 6, 
      title: "Coronavirus Tracker", 
      para:
        "A corona virus cases tracking app built for Android and iOS with Flutter and Dart.", 
      
      imageSrc:
        "https://github.com/KagisoMashigo/corona_virus_rest_api_flutter_course/blob/main/assets/docs/Screen%20Shot%202021-08-04%20at%2011.38.55.png?raw=true",
      
      url: "https://github.com/KagisoMashigo/corona_virus_rest_api_flutter_course",
      stack: flutterIcon
    },
    {
      id: 7, 
      title: "Time Tracker", 
      para:
        "A time tracking app that allows you to record various jobs as well as entries of those jobs. User management, Facebook and Google sign-in are available. Built for Android and iOS with Flutter and Dart.", 
      
      imageSrc:
        "https://github.com/KagisoMashigo/time_tracker/raw/main/images/docs/login.png?raw=true",
      
      url: "https://github.com/KagisoMashigo/time_tracker",
      stack: flutterIcon

    }
  ],

  flutterProjects: [
    
],

  // About Secton
  aboutParaOne:
    "So who is this human in front of you? I'm a Full Stack developer with experience across multiple projects on a professional level and am based in Montreal, Canada.",
  aboutParaTwo:
    "Whilst I am a Full Stack dev I do lean more towards the Frontend. Frameworks I am particularly skilled with are React and Flutter. I have primarily worked at startups including a Series A startup. Thus I am highly adaptable, flexible, and used to Agile environments. I am very comfortable taking ownership of new features and writing tests for them.",
  aboutParaThree:
    "As a developer, I have attention to detail and a penchant for squashing bugs. I care about things and I care about getting things done, I believe finding a good balance between the two is what allows one to simultaneously be a consummate professional and a human being.",
  aboutParaFour:
    "I am also a confident speaker and have given a conference on Flutter Development.",

  // Skills Section

  skills: [
    {
      id: 1,
      img: flutterIcon,
      title: "Flutter",
      skill: "progress-line flutter",
      para:
        "I have experience working across multiple testing suites such as Mocha, Chai, Cypress, Jest, and Storybook. I have also implemented automated tests.",
    },
    {
      id: 2,
      img: dartlangIcon,
      title: "Dart",
      skill: "progress-line dart",
      para:
        "I have detailed knowledge of Data Structures and hands-on experience creating and managing databases using PostgreSQL and SQLite ",
    },
    {
      id: 3,
      img: reactIcon,
      title: "React",
      skill: "progress-line react",
      para:
        "React is my frontend development framework of choice and I am always eager to learn more and improve my ever-growing skills here",
    },
    {
      id: 4,
      img: jsIcon,
      title: "JavaScript",
      skill: "progress-line js",
      para:
      "JavaScript is my strongest language and not only am I very comfortable but also look forward to working in the language",
    },
    {
      id: 5,
      img: firebaseIcon,
      title: "Firebase",
      skill: "progress-line firebase",
      para:
        "I am very comfortable working with Node.js and npm in the CLI",
    },
    {
      id: 6,
      img: rubyIcon,
      title: "Ruby",
      skill: "progress-line ruby",
      para:
      "Ruby is a language I am comfortable with. I still have a bit to learn here but I am fully capable of building a full-stack application using Ruby and Ruby on Rails",
    }
  ],

  // Promotion Section 

  promotionHeading: "Playlists",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",


  // Contact Section 

  contactSubHeading: "If something here piques your interest, don't hesitate to get in touch.",

  social: [
    { img: githubIcon, 
      url: "https://github.com/KagisoMashigo"
    },
    {
      img: twitterIcon,
      url: "https://twitter.com/master_kakes",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/kagiso-mashigo-3166a1b1",
    },
    {
      img: spotifyIcon,
      url: "https://open.spotify.com/user/21cbjcpralpwr3r3xp5nfwa7y",
    },
  ],

  playlists: [
    {
      id: 1, 
      title: "Quality Street", 
      para:
        "Genre-fluid. You never know what you're going to get, apart from quality of course.", 
      
      imageSrc:
        "https://images.unsplash.com/photo-1531268175162-63b1a224955c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      
      url: "https://open.spotify.com/playlist/1DS9TjwhOKLUfMSCREwzHk",
      embededUrl: "https://open.spotify.com/embed/playlist/1DS9TjwhOKLUfMSCREwzHk"
    },
    {
      id: 2, 
      title: "Dream Pop", 
      para:
        "Hazy Indie Pop reminiscent of a day dream.", 
      
      imageSrc:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2271&q=80",
      
      url: "https://open.spotify.com/playlist/1of76lqv8LiKYdIuDUTLAE",
      embededUrl: "https://open.spotify.com/embed/playlist/1of76lqv8LiKYdIuDUTLAE"

    },
    {
      id: 3, 
      title: "Rooftop Groove", 
      para:
        "House that sounds as groovy as you look.", 
      
      imageSrc:
        "https://images.unsplash.com/photo-1582103121609-6467f9db55ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      
      url: "https://open.spotify.com/playlist/2X2Xn4Q3t42rBSEc3p4Bp5",
      embededUrl: "https://open.spotify.com/embed/playlist/2X2Xn4Q3t42rBSEc3p4Bp5"

    },

  ],
}

export default data