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
* workers - The list of workers that the user has. Each worker is also a JSON object and gets recreated dynamically on each load

## Worker Data

The worker data is the data for each individual worker. The following fields are stored:

* name - The name of the worker. This was randomly generated on creation
* team - The team that the worker belongs to.

## The Ticks

Ticks are times in which the game data is updated. Ticks occur on animation frames, so they don't happen in consistent time intervals.

During each tick, the game gets the amount of views to add to the view counter, and queues them. The floor of the queuedViews are then added to the counter, while the remainder is kept for the next tick.

The game is saved during each tick.
