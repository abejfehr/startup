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
| html2        | Borrow a used copy of HTML for Dummies | ...   | 5       | ...             | html1         | If you're gonna start adding content to your website you'd better know how to mark it up. This book is an excellent resource and teaches you the state-of-the-art HTML 4.0.                                | Header, footer, skills bar, construction gif.
| css1         | Learn CSS                              | 8     | 6       | ...             | html2         | You wondered why everyone else's website looks so much better than yours. You read about CSS and decided to give it a shot.                                                                                | Font arial, center header+footer.
| favicon      | Add a favicon                          | 5     | 6       | ...             | html2         | A buddy was adding your website to favourites when he realized your page didn't have an actual icon. He tells you what a favicon is and how to set it up but you just keep it simple for now.              | Favicon to blank page.
| about        | Create an About Page                   | 5     | 0       | ...             | css1, favicon | You're not sure what to put on your website yet. After looking up pictures of animals in cute outfits for inspiration, you decide to write a bit about yourself.                                           | About page is added.
| startup      | Become a "startup"                     | 10    | 0       | ...             | about         | You become so excited with your website you decide to take the plunge and quit your day job. You rent some vacant office space across the street from your old workplace.                                  | Workers table, logo to Startup, reset button.

**Team Skills**

No team skills for this milestone.

#### Startup
***
**Global Skills**
| id           | name                                               | cost  | trigger | multiplier      | prerequisites | description                                                                                                                                  | effects                                                                         |                                    
| ------------ | -------------------------------------------------- | ----- | ------- | --------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| paint        | Paint the office                                   | 20   | 30     | `G` 0.1         | ...           | The concrete and white dry walls are starting to hurt morale. Maybe a nice pastel green would spruce up the place.                                   | Changes background.
| pitch        | Pitch to investors                                 | 50   | 80     | `G` 0.1         | ...           | Your initial capital is drying up but there's no way an investor wouldn't see the value in your startup, whatever it is.                     | ...
| kickstarter  | Create a kickstarter campaign                      | 100   | 100     | `G` 0.1         | pitch         | The pitch didn't go as planned. Time to grovel.                                                                                              | ...
| coffee       | Buy a coffee machine                               | 2500   | 5000     | `G` 0.1         | ...           | Your employees are getting thirsty, you'd better get them a coffee machine to keep them happy and increase productivity.                     | ...
| monetize     | Monetize with ads                                  | 300    | 600      | `G` 0.05        | ...           | You're getting views but your wallet is getting emptier because of server costs...running a startup is harder than your thought.             | Advertisements.
| janitor      | Hire a janitor                                     | 250   | 250     | `G` 0.1         | ...           | It'll be nice to be able to leave your office without having to hold your breath till your reach your car now.                               | ...
| plants       | Buy some plants                                    | 250   | 250     | `G` 0.1         | janitor       | You can now brand yourself as environmentally conscious.                                                                                     | ...
| pets         | Bring your pet to work day                         | 250   | 250     | `G` 0.1         | janitor       | All creatures welcome. Even cockatoos.                                                                                                       | ...
| exercise     | Replace all chairs with exercise balls             | 250   | 250     | `G` 0.1         | ...           | You'll keep your chair of course; it's ergonomic.                                                                                            | ...
| desks        | Replace all desks with standing desks              | 250   | 250     | `G` 0.1         | exercise      | The exercise balls were a mistake but standing desks are the future.                                                                         | ...
| rec          | Waste money on a rec room                          | 250   | 250     | `G` 0.1         | ...           | Your accountant is puzzled why you need so many ping pong tables but he just doesn't understand startup culture.                             | ...
| computers    | Buy computers for all employees                    | 250   | 250     | `G` 0.1         | ...           | You create an order for everyone to have a new Macbook, but after seeing the total price you decide to go with ThinkPads instead.            | ...
| gym          | Negotiate discount with a gym                      | 250   | 250     | `G` 0.1         | desks         | Your employees are complaining about all the standing. You get a discount with a local gym so they're able to bulk up a bit.                 | ...
| upgrade      | Build yourself a bigger office                     | 250   | 250     | `G` 0.1         | ...           | The open concept office is nice, but peace and quiet is even nicer.                                                                          | ...
| remote       | Allow employees to work remotely                   | 250   | 250     | `G` 0.1         | ...           | Someone asked if they can work remotely. You say yes despite not being sure what that means.                                                 | ...
| pair         | Enforce pair programming                           | 250   | 250     | `G` 0.1         | ...           | Half the productivity, twice the tension.                                                                                                    | ...
| beer         | Start "Beer Fridays"                               | 250   | 250     | `G` 0.1         | pair          | Maybe everyone will finally be able to tolerate each other.                                                                                  | ...
| casual       | Mandate all employees dress casually               | 250   | 250     | `G` 0.1         | ...           | This is a startup -- not IBN.                                                                                                                | ...
| friend       | Hire underachieving best friend                    | 250   | 250     | `G` 0.1         | ...           | They might be underqualified but                                                                                                             | ...
| promote      | Promote underachieving best friend                 | 250   | 250     | `G` 0.1         | friend        | People are complaing about how they're slowing down productivity. Promoting them should fix this.                                            | ...
| invite       | Invite old boss to a tour of the office            | 250   | 250     | `G` 0.1         | upgrade       | Time to rub your moderate success in their face.                                                                                             | ...
| party        | Throw a joint office party with your old coworkers | 250   | 250     | `G` 0.1         | invite        | You never really got along with any of them but how could they say no to free booze?                                                         | ...

**Team Skills**
| id            | name                                              | cost  | trigger | multiplier      | prerequisites | description                                                                                                                                                                         | effects                                                                         |                                    
| ------------- | ------------------------------------------------- | ----- | ------- | --------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| fireworks     | Learn Macromedia Fireworks                        | 300    | 400      | `T:GD` 0.03     | ...           | Your Graphic Design team needs some software to design your site. You obtain a copy of Macromedia Fireworks for them to do the mockups in and they take the site to the next level. | ...
| javascript    | Learn JavaScript                                  | 200    | 800      | `T:FED` 0.01    | ...           | You recently heard about DHTML and decided that you should step up your game and pay for the front end developers to learn some JavaScript so they can make collapsable menus.      | Tooltip for skillsbar and workers table.
| jquery        | Learn jQuery                                      | 1000   | 2000      | `T:FED` 0.01    | ...           | Your buddy told you jQuery was all the rage so you decided to get your development team using jQuery to make the page more impressive.                                              | ...
| brand1        | Create a brand image                              | 2000   | 2500      | `T:GD` 0.03     | ...           | Many of your visitors are starting to be recurring so maybe it's important to give the users something to remember. A brand image is powerful and means a website overhaul.         | ...
| php1          | Learn PHP                                         | 2000   | 4000      | `T:BED` 0.05    | ...           | You've hired back end developers but without any knowledge they're just staring at the wall. You'd better teach them some PHP.                                                      | ...
| nodejs1       | Get a NodeJS server                               | 1000   | 5000      | `T:BED` 0.02    | ...           | ...                                                                                                                                                                                 | ...
| typography    | Change your font type                             | 100   | 50      | `T:GD` 0.02     | ...           | Arial just isn't cutting it anymore.                                                                                                                                                | Change font.
| photoshop     | Buy a copy of Photoshop                           | 100   | 50      | `T:GD` 0.02     | brand1        | Yes...buy...                                                                                                                                                                        | Change logo.
| stackoverflow | Unblock StackOverflow                             | 100   | 50      | `T:FED` 0.02    | ...           | Suddenly your front end developers are getting things done.                                                                                                                         | ...
| uxcourse      | Register your F.E.D.s to a user experience course | 100   | 50      | `T:FED` 0.02    | ...           | Our UI is terrible frankly.                                                                                                                                                         | Add unit rate vps, total views accumulated, and total vps for team to worker tooltip.
| comments      | Add a comments section                            | 100   | 50      | `T:FED` 0.02    | ...           | Welcome to web2.0.                                                                                                                                                                  | Add a comment section.

> Note: as of writing this, many of the skills in the Startup milestone do not have effects. This will change with the inclusion of a comment section.

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
| motto        | Get a corporate motto                  | 2000   | 3000      | `G` 0.01        | ...           | You've decided to go with "Don't be greedy"                                                                                                                                                                | ...

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
