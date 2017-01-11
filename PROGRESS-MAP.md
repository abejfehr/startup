# [Skill Progress Map]()

### Main Goals
* **Ideas Should Be Fun** - If an idea isn't fun, it's probably not the best idea.
* **Maintain Focus** - All skills and their effects should fall under the main concept of Startup.
* **Single Visual Changes** - Most skills should only change one aspect of the view except in special cases. There is more power behind a number of small changes creating something big then one big change.

### Skill Progress (Broad)
> Note: this will be calculated more accurately once we have difficulty curves.

| Milestone              | Time Spent On   | Accumulated Views          | Averaged Views/Per Second  |
| -----------------------| --------------- | -------------------------- | -------------------------- |
| "Basic"                | 5 minutes       | 20                         | 0                          |
| "Startup"              | 1 hour          | 100, 000                   | 28                         |
| "Path Focus"           | 10 hours        | 100, 000, 000, 000         | 2, 777, 778                |
| "Public"               | 20 hours        | 5, 000, 000, 000, 000      | 69, 444, 444               |
| "Acquisition Decision" | 40 hours        | 8, 500, 000, 000, 000, 000 | 55, 194, 805, 194          |

### Skill Progress (Granular)

**Glossary**

| attribute     | definition                                                                  |
| ------------- | --------------------------------------------------------------------------- |
| id            | Unique identifier.                                                          |
| name          | The name the user sees on the UI.                                           |
| cost          | The cost, in views, of the skill.                                           |
| trigger       | The total accumulated views required to unlock, but not purchase the skill. |
| multiplier    | The "reward" from the skill. Denoted as either (G)lobal or (T)eam specific. |
| prerequisites | IDs of the skills required to unlock, but not purchase, the skill.          |
| description   | The description of the skill the users sees on the UI.                      |
| effects       | The changes that occur on the UI.                                           |

> Note: "T:GD 0.05" is read as "team specific multiplier for graphic design at 0.05%"

**Team Types**
| Team Name                | Short Hand |
| ------------------------ | ---------- |
| Graphic Design           | GD         |
| Front End Developers     | FED        |
| Marketing                | M          |
| Interns                  | I          |
| Back End Developers      | BED        |
| Tools Developers         | TD         |
| Research and Development | RD         |

> Note: Global skills are skills that do not require any particular team

#### Basic
***
**Global Skills**
| id           | name                                   | cost  | trigger | multiplier      | prerequisites | description                                                                                                                                                                                                | effects                                                                         |                                    
| ------------ | -------------------------------------- | ----- | ------- | --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| html1        | Have a buddy "code" HTML for you       | ...   | 5       | ...             | ...           | He used to make websites back in the dot com boom of the 90's and probably still knows what he's doing. He can add a background to your website and make it a bit snazzier.                                | Background changes.
| html2        | Borrow a used copy of HTML for Dummies | ...   | 5       | ...             | html1         | If you're gonna start adding content to your website you'd better know how to mark it up. This book is an excellent resource and teaches you the state-of-the-art HTML 4.0.                                | Header, footer, skills bar, construction gif, reset button.
| startup      | Become a "startup"                     | 15    | 5       | ...             | html2         | You decide that this web thing isn't so bad and that you wanna start a startup. You don't know what your business model will be yet but now that you know a bit of code it'll be easier to get started.    | Workers table, logo to Startup

**Team Skills**

No team skills for this milestone.

#### Startup
***
**Global Skills**
| id           | name                                   | cost  | trigger | multiplier      | prerequisites | description                                                                                                                                                                                                | effects                                                                         |                                    
| ------------ | -------------------------------------- | ----- | ------- | --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| coffee       | Buy a coffee machine                   | 250   | 250     | `G:I` 0.1       | ...           | Your employees are getting thirsty and now that you have interns that could fetch coffee we need a coffee machine for them to fetch it from.                                                               | ...
| nodejs1      | Get a NodeJS server                    | 100   | 50      | `T:BED` 0.02    | ...           | ...                                                                                                                                                                                                        | ...

**Team Skills**
| id           | name                                   | cost  | trigger | multiplier      | prerequisites | description                                                                                                                                                                                                | effects                                                                         |                                    
| ------------ | -------------------------------------- | ----- | ------- | --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| css1         | Learn CSS                              | 25    | 10      | `T:GD` 0.1      | ...           | Your new Graphic Design team needs to know some CSS in order to make the website look a little better.                                                                                                     | Font arial, beautifies skills bar + worker table.
| favicon      | What's a favicon?                      | 25    | 10      | `T:GD` 0.1      | ...           | A buddy was adding your website to favourites when he realized your page didn't have an actual icon. He tells you what a favicon is and how to set it up but you just keep it simple for now.              | Favicon to blank page.
| fireworks    | Learn Macromedia Fireworks             | 35    | 30      | `T:GD` 0.03     | ...           | Your Graphic Design team needs some software to design your site. You obtain a copy of Macromedia Fireworks for them to do the mockups in and they take the site to the next level.                        | ...
| monetize     | Monetize with ads                      | 55    | 45      | `T:GD` 0.05     | ...           | You're getting views but your wallet is getting emptier because of server costs...running a startup is harder than your thought.                                                                           | Advertisements.
| javascript   | Learn JavaScript                       | 55    | 50      | `T:FED` 0.01    | ...           | You recently heard about DHTML and decided that you should step up your game and pay for the front end developers to learn some JavaScript so they can make collapsable menus.                             | Tooltip for skillsbar and workers table.
| jquery       | Learn jQuery                           | 100   | 50      | `T:FED` 0.01    | ...           | Your buddy told you jQuery was all the rage so you decided to get your development team using jQuery to make the page more impressive.                                                                     | ...
| brand1       | Create a brand image                   | 100   | 50      | `T:GD` 0.03     | ...           | Many of your visitors are starting to be recurring so maybe it's important to give the users something to remember. A brand image is powerful and means a website overhaul.                                | ...
| php1         | Learn PHP                              | 150   | 50      | `T:BED` 0.05    | ...           | You've hired back end developers but without any knowledge they're just staring at the wall. You'd better teach them some PHP.                                                                             | ...

#### Path Focus
***
**Global Skills**
| id           | name                                   | cost  | trigger | multiplier      | prerequisites | description                                                                                                                                                                                                | effects                                                                         |                                    
| ------------ | -------------------------------------- | ----- | ------- | --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| algorithm    | New search algorithm                   | 5000  | 5000    | ...             | search        | Design a new algorithm that improves the relevance of startup-related search results by 53%.                                                                                                               | Search results are changed.
| tim          | Make everyone Tim's friend             | 5000  | 5000    | ...             | social        | Everyone is now Tim's friend on your social network. As a result people are happier and your members have increased.                                                                                       | ...
| subscription | Start selling software subscriptions   | 3000  | 3000    | `G` 0.05        | ...           | In order to increase revenue you need to start selling software using a subscription pricing model                                                                                                         | ...
| cto          | Hire a CTO                             | 5000  | 3000    | `G` 0.05        | ...           | There are just too many technologies for you to keep track of! You need a CTO so you can focus on the business aspect of your startup.                                                                     | ...
| cfo          | Hire a CFO                             | 5000  | 3000    | `G` 0.3         | ...           | You're making money (and spending it) faster that you can think. You need to hire a CFO to keep your finances under control.                                                                               | Make all employees 2% cheaper.
| directors    | Hire a board of directors              | 10000 | 7500    | ...             | ...           | ...                                                                                                                                                                                                        | ...
| ipo          | Go Public                              | 5000  | 3000    | `G` 0.2         | ...           | Congratulations! You now have the opportunity to go public on the stock market. Your IPO is supposedly one of the biggest in 2017.                                                                         | ...
| motto        | Get a corporate motto                  | 100   | 50      | `G` 0.01        | ...           | You've decided to go with "Don't be greedy"                                                                                                                                                                | ...

**Team Skills**

No team skills for this milestone.

#### Public
***
**Global Skills**
| id           | name                                   | cost  | trigger | multiplier      | prerequisites | description                                                                                                                                                                                                | effects                                                                         |                                    
| ------------ | -------------------------------------- | ----- | ------- | --------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| book         | Write a book                           | 8000  | 5000    | `G` 0.1         | ...           | You've created an empire and people want to hear your story. You write a book to tell it and promote Startup while you're at it.                                                                           | Book related path focus items.

**Team Skills**

No team skills for this milestone.

#### Acquisition Decision
***
**Global Skills**

No global skills for this milestone.

**Team Skills**

No team skills for this milestone.
