import TeamTypes from './teamtype';

var skills = [
  {
    id: "html1",
    name: `Have a buddy "code" HTML for you`,
    description: "He used to make websites back in the dot com boom of the 90's, and probably still knows what he's doing. He can add a background to your website and make it a bit snazzier.",
    cost: 0,
    trigger: 5,
  },
  {
    id: "html2",
    name: "Borrow a used copy of HTML for Dummies",
    description: "If you're gonna start adding content to your website, you'd better know how to mark it up. This book is an excellent resource and teaches you the state-of-the-art HTML 4.0.",
    cost: 0,
    trigger: 5,
    prerequisites: [ 'html1' ],
  },
  {
    id: "css1",
    name: "Learn CSS",
    description: "You wondered why everyone else's website looks so much better than yours. You read about CSS and decided to give it a shot.",
    cost: 5,
    trigger: 10,
    prerequisites: [ 'html2' ],
  },
  {
    id: "favicon",
    name: "What's a favicon?",
    description: "A buddy was adding your website to favourites when he realized your page didn't have an actual icon. He tells you what a favicon is and how to set it up, but you just keep it simple for now.",
    team: TeamTypes.GRAPHIC_DESIGN,
    cost: 3,
    trigger: 10,
    prerequisites: [ 'html2' ],
  },
  {
    id: "startup",
    name: `Become a "startup"`,
    description: "You decide that this web thing isn't so bad, and that you wanna start a startup. You don't know what your business model will be yet, but now that you know a bit of code, it'll be easier to get started.",
    cost: 10,
    trigger: 10,
    prerequisites: [ 'css1', 'favicon' ],
  },
  {
    id: "fireworks",
    name: "Learn Macromedia Fireworks",
    description: "Your Graphic Design team needs some software to design your site. You obtain a copy of Macromedia Fireworks for them to do the mockups in and they take the site to the next level.",
    team: TeamTypes.GRAPHIC_DESIGN,
    cost: 35,
    trigger: 30,
    multiplier: {team: TeamTypes.GRAPHIC_DESIGN, multiplier: 0.03}
  },
  {
    id: "monetize",
    name: "Monetize with ads",
    description: "You're getting views, but your wallet is getting emptier because of server costs...running a startup is harder than your thought.",
    team: TeamTypes.GRAPHIC_DESIGN,
    cost: 55,
    trigger: 45,
    multiplier: {team: TeamTypes.GRAPHIC_DESIGN, multiplier: 0.05},
  },
  {
    id: "javascript",
    name: "Learn JavaScript",
    description: "You recently heard about DHTML, and decided that you should step up your game and pay for the front end developers to learn some JavaScript so they can make collapsable menus.",
    team: TeamTypes.FRONT_END_DEVELOPERS,
    cost: 55,
    trigger: 50,
    multiplier: {team: TeamTypes.FRONT_END_DEVELOPERS, multiplier: 0.01},
  },
  {
    id: "jquery",
    name: "Learn jQuery",
    description: "Your buddy told you jQuery was all the rage, so you decided to get your development team using jQuery to make the page more impressive.",
    team: TeamTypes.FRONT_END_DEVELOPERS,
    cost: 100,
    trigger: 50,
    multiplier: {team: TeamTypes.FRONT_END_DEVELOPERS, multiplier: 0.01},
  },
  {
    id: "brand1",
    name: "Create a brand image",
    description: "Many of your visitors are starting to be recurring, so maybe it's important to give the users something to remember. A brand image is powerful, and means a website overhaul.",
    team: TeamTypes.GRAPHIC_DESIGN,
    cost: 100,
    trigger: 50,
    multiplier: {team: TeamTypes.GRAPHIC_DESIGN, multiplier: 0.03},
  },
  {
    id: "motto",
    name: "Get a corporate motto",
    description: `You've decided to go with "Don't be greedy"`,
    cost: 100,
    trigger: 50,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.01},
  },
  {
    id: "php1",
    name: "Learn PHP",
    description: "You've hired back end developers, but without any knowledge they're just staring at the wall. You'd better teach them some PHP.",
    team: TeamTypes.BACK_END_DEVELOPERS,
    cost: 150,
    trigger: 50,
    multiplier: {team: TeamTypes.BACK_END_DEVELOPERS, multiplier: 0.05},
  },
  {
    id: "coffee",
    name: "Buy a coffee machine",
    description: "Your employees are getting thirsty, and now that you have interns that could fetch coffee, we need a coffee machine for them to fetch it from.",
    team: TeamTypes.INTERNS,
    cost: 250,
    trigger: 250,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.10},
  },
  {
    id: "nodejs1",
    name: "Get a NodeJS server",
    description: "",
    cost: 100,
    trigger: 50,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.02},
  },
  {
    id: "algorithm",
    name: "New search algorithm",
    description: "Design a new algorithm that improves the relevance of startup-related search results by 53%.",
    cost: 5000,
    trigger: 5000,
    prerequisites: [ 'search' ],
  },
  {
    id: "tim",
    name: "Make everyone Tim's friend",
    description: "Everyone is now Tim's friend on your social network. As a result, people are happier and your members have increased.",
    cost: 5000,
    trigger: 5000,
    prerequisites: [ 'social' ],
  },
  {
    id: "subscription",
    name: "Start selling software subscriptions",
    description: "In order to increase revenue, you need to start selling software using a subscription pricing model",
    cost: 3000,
    trigger: 3000,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.05},
  },
  {
    id: "cto",
    name: "Hire a CTO",
    description: "There are just too many technologies for you to keep track of! You need a CTO so you can focus on the business aspect of your startup.",
    cost: 5000,
    trigger: 3000,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.05},
  },
  {
    id: "cfo",
    name: "Hire a CFO",
    description: "You're making money (and spending it) faster that you can think. You need to hire a CFO to keep your finances under control.",
    cost: 5000,
    trigger: 3000,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.3},
  },
  {
    id: "directors",
    name: "Hire a board of directors",
    description: "",
    cost: 10000,
    trigger: 7500,
  },
  {
    id: "ipo",
    name: "Go Public",
    description: `Congratulations! You now have the opportunity to go public on the stock market. Your IPO is supposedly one of the biggest in ${(new Date()).getFullYear()}.`,
    cost: 5000,
    trigger: 3000,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.2},
  },
  {
    id: "book",
    name: "Write a book",
    description: "You've created an empire, and people want to hear your story. You write a book to tell it, and promote Startup while you're at it.",
    cost: 8000,
    trigger: 5000,
    multiplier: {team: TeamTypes.NONE, multiplier: 0.1},
  },
];

export default skills;
