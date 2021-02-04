// Skills Icons
import nodeIcon from "./images/node-brands.svg"
import rubyIcon from "./images/rails.svg"
import reactIcon from "./images/react-brands.svg"
import jsIcon from "./images/node-js-brands.svg"
import sqlIcon from "./images/sql.svg"
import testIcon from "./images/test.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import twitterIcon from "./images/twitter.svg"
import linkedinIcon from "./images/linkedin.svg"
import spotifyIcon from "./images/spotify.svg"

export default {

  //   Header Details ---------------------
  name: "Kagiso",
  fullName: "Kagiso Mashigo",
  headerTagline: [
    //Line 1 For Header
    "Human,",
    //Line 2 For Header
    "Full-Stack Web Dev,",
    //Line 3 For Header
    "and Playlist Maker",
  ],
  //   Header Paragraph
  headerParagraph:
    `Welcome to my portfolio! 
    I've spent hours on hours making these projects, so please take your time looking. I am both proficient in frontend and backend 
    work and would love to chat to you should you have any questions!`,

  //Contact Email
  contactEmail: "kagiso.k.mashigo@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Layers", //Project Title - Add Your Project Title Here
      para:
        "Layers a music application that allows a user to isolate stems of a song for teaching or recreational purposes. It is a sleek and responsive app that uses a React JS frontend with an Express JS and Node JS backend.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://raw.githubusercontent.com/rothavanathan/LHL-final-project/master/client/public/logo512.png",
      //Project URL - Add Your Project Url Here
      url: "https://layers-irl.netlify.app/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Scheduler", //Project Title - Add Your Project Title Here
      para:
        "The Scheduler is a simple interview appointment creating tool. It is a sleek and responsive SPA using React technology.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/KagisoMashigo/scheduler/raw/master/docs/Screenshot%20from%202020-12-16%2019-00-18.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://scheduler-kagisomash.netlify.app/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Tweeter", //Project Title - Add Your Project Title Here
      para:
        "Tweeter is a sleek, simple, single-page Twitter clone. The technologies used include HTML, CSS, JS, jQuery and AJAX along with Node, Express and MongoDB.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/KagisoMashigo/tweeter/raw/master/public/images/screenshots/desktop-form-toggle-down.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://tweeter-kagisomash.herokuapp.com/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "TinyApp", //Project Title - Add Your Project Title Here
      para:
        "TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/KagisoMashigo/tinyapp/raw/master/docs/my-urls-page.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/KagisoMashigo/tinyapp",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Jungle", //Project Title - Add Your Project Title Here
      para:
        "A mini e-commerce application built with Rails 4.2. It is a responsive MPA using a Rails backend with Active Record.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://github.com/KagisoMashigo/Jungle/raw/master/app/assets/images/Screenshot%20from%202021-01-13%2014-23-02.png?raw=true",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/KagisoMashigo/Jungle",
    },
 

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "So who is this human in front of you? Johannesburg born, Cape Town raised and living in Montreal it's safe to say I may have an interesting take on life.",
  aboutParaTwo:
    "In my personal life, I love finding new projects to build, geared towards things that make a user's life easier. I'm a huge fan of making playlists as you'll see below and am an avid craft beer drinker. I really enjoy being a part of a team and learning from others.",
  aboutParaThree:
    "As a developer, I have an attention to detail and a penchant for squashing bugs. I care about things and I care about getting things done, I believe finding a good balance between the two is what allows one to simultaneously be a consummate professional and a human being.",
  aboutImage:
    "https://images.unsplash.com/photo-1519713958759-6254243c4a53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: nodeIcon,
      para:
        "I am very comfortable working with Node.js and npm in the CLI",
    },
    {
      id: 2,
      img: rubyIcon,
      para:
      "Ruby is a language I am comfortable with. I still have a bit to learn here but I am fully capable of building a full-stack application using Ruby and Ruby on Rails",
    },
    {
      id: 3,
      img: jsIcon,
      para:
      "JavaScript is my strongest language and not only am I very comfortable but also look forward to working in the language",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "React is my frontend development framework of choice and I am always eager to learn more and improve my ever-growing skills here",
    },
    {
      id: 5,
      img: sqlIcon,
      para:
        "I have detailed knowledge of Data Structures and hands-on experience creating and managing databases using PostgreSQL and SQLite ",
    },
    {
      id: 6,
      img: testIcon,
      para:
        "I have experience working across multiple testing suites such as Mocha, Chai, Cypress, Jest, and Storybook. I have also implemented automated tests.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Playlists",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "If you're looking for a fresh new dev to join your team, let's talk!",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/KagisoMashigo" },
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

  // End Contact Section ---------------

  playlists: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Quality Street", //Project Title - Add Your Project Title Here
      para:
        "Genre-fluid. You never know what you're going to get, apart from quality of course.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1531268175162-63b1a224955c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://open.spotify.com/playlist/1DS9TjwhOKLUfMSCREwzHk",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Dream Pop", //Project Title - Add Your Project Title Here
      para:
        "Hazy Indie Pop reminiscent of a day dream.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2271&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://open.spotify.com/playlist/1of76lqv8LiKYdIuDUTLAE",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Deep House Platter", //Project Title - Add Your Project Title Here
      para:
        "Starting out groovy and blended with vocals and then transitioning into bigger beats with just the right amount of synth.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1557787824-93666b9f6093?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcCUyMGhvdXNlJTIwbXVzaWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://open.spotify.com/playlist/39cw4ZjQ8wYB9WTJqpwMjC",
    },

  ],
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
