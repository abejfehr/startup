# [Startup](https://www.abefehr.com/startup/)

## Basic Idea

The game begins by showing only one line of text on the screen.

> This page has been viewed 1 time.

Out of curiousity, and to see if the view counter is correct, the user then refreshes the page and, to their surprise, the view count should go up by 1 each time. They'll do that for 5 views or so and then a table will appear showing them the workers they have.

## Save Data

The game's data is all saved in localStorage, in the browser. This means that sessions aren't transferrable from machine to machine, and there's nothing saved online.

The sava data is a base64 encoded JSON object, with the following attributes:

* views - The number of views that are currently being displayed on the screen
* queuedViews - The fractional number of views that will be added to the screen on the next tick
* totalViews - The total number of views that have ever been earned
* workers - The list of workers that the user has. Each worker is also a JSON object and gets recreated dynamically on each load

## Worker Data

The worker data is the data for each individual worker. The following fields are stored:

* name - The name of the worker. This was randomly generated on creation
* team - The team that the worker belongs to.

## The Ticks

Ticks are times in which the game data is updated. Ticks occur on animation frames, so they don't happen in consistent time intervals.

During each tick, the game gets the amount of views to add to the view counter, and queues them. The floor of the queuedViews are then added to the counter, while the remainder is kept for the next tick.

The game is saved during each tick.

## Skills

Skills are purchased with views and increase the competency of your employees, thereby increasing their throughput.

### Have a buddy "code" HTML for you

He used to make websites back in the dot com boom of the 90's, and probably still knows what he's doing. He can add a background to your website and make it a bit snazzier.

Team: None
Cost: 5 views
Results:
* The background changes to an ugly tiled image

### Loan a used copy of HTML for Dummies

If you're gonna start adding content to your website, you'd better know how to mark it up. This book is an excellent resource and teaches you the state-of-the-art HTML 4.0.

Team: None
Cost: 15 views
Results:
* A header and footer is added to the page, these say  "My Website"

### Become a "startup"

You decide that this web thing isn't so bad, and that you wanna start a startup. You don't know what your business model will be yet, but now that you know a bit of code, it'll be easier to get started.

Team: None
Cost: 50 views
Results:
* The header and footer will now say "My Startup"
* There's an under construction GIF on the page now

> at this point, the manage employees menu becomes visible and the user is given the option of hiring a graphic designer

### Learn CSS

Your new Graphic Design team needs to know some CSS in order to make the website look a little better.

Team: Graphic Design
Cost: 100 views
Results:
* +1% views per second
* The font face changes to something sans serif

### Learn what a favicon is

A buddy was adding your website to favourites when he realized your page didn't have an actual icon. He tells you what a favicon is and how to set it up, but you just keep it simple for now.

Team: None
Cost: 35 views
Results:
* +1% views per second
* The favicon is now a blank page

### Learn Macromedia Fireworks

Your Graphic Design team needs some software to design your site. You obtain a copy of Macromedia Fireworks for them to do the mockups in and they take the site to the next level.

Team: Graphic Design
Cost: 150 views
Results:
* +1% views per second
* The header is now a piece of clip art

### Monetize your site

You're getting views, but your wallet is getting emptier because of server costs...running a startup is harder than your thought.

Team: none
Cost: 200 views
Results:
* +1% views per second
* Ad should display, or placeholder if AdBlock is enabled

> at this point, a front end developer might be handy

### Learn Javascript

You recently heard about DHTML, and decided that you should step up your game and pay for the front end developers to learn some JavaScript so they can make collapsable menus.

Team: Front End Developers
Cost: 200 views
Results:
* +1% views per second

### Learn jQuery

> at this point, the user should be able to choose what type of website they're creating. Options could include a video sharing site, social media site, blogging platform, a news site, etc.

### Create a brand

Your Startup is flourishing somehow, but you need a brand that people can relate to. Good thing you have a talented team of Graphic Designers that can whip up a beautiful new Brand Identity for your successful new enterprise.

Prerequisite: Path has been chosen
Team: Graphic Design
Cost: ?
Results:
* +1% views per second
* A new logo should be used and the favicon should update

> hire interns

### Learn how to Google things effectively

Now that you've hired a few interns, they need to learn how to effectively gather content. You attend a seminar on "Effective Googling".

Team: Interns
Cost: ?
Results:
* +1% views per second
* There should be some content on the page

> hire a back end developer

### Get a corporate motto

You've decdied on "Don't be greedy"

Team: None
Cost: ?

### Learn PHP

### Get a NodeJS server

### Hire a CTO

### Learn about Encapsulation

It's important to encapsulate your code

### Read Gamma's Book

Your code is a mess! It's 100k lines of code and it's all in one class. Better

### Test Driven Development

> hire a tools developer

### Docker

### Create custom build software

### Hire a CFO

### Sell subscriptions

Prerequisite: CFO hired
Cost: ?
Results:
* +1% views per second

> at this point, the user should have the option of selling their company to Google or not

### Be acquired by Google (optional)

You've done it, you've lived the new American dream. Your website is somehow so popular and innovative that Google thought it would make an excellent addition to their portfolio of crazy projects.

Team: None
Cost: ?
Results:
* Eternal Fame
* Achievement Unlocked

### Go Public

Congratulations! You now have the opportunity to go public on the stock market. Your IPO is supposedly one of the biggest in 2017.

Prerequisite: Didn't get acquired by Google

### Start a research lab

### Learn LaTeX

### Write a book

You've created an empire, and people want to hear your story. You write a book to tell it, and promote Startup while you're at it.

Team: None
Cost: ?
Results:
* +1% views per second

### Use your data for Deep Learning

Team: R&D
Cost: ?
Results:

### Build your own self-driving car

Team: R&D
Cost: ?
Results:

It's all the rage these days for companies to invest in the autonomous vehicle industry that will become the future, and you're one step ahead of the game.

### Host internal research conferences

There's so much research being done at your company that you can't even organize it.
