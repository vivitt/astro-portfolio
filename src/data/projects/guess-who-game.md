---
description: 'This project features a gender-inclusive, illustrated version of the classic Guess Who game and was my final project for the AllWomen Web Dev Bootcamp.'
images: 
  thumb: '../../images/projects/guess-who/prev.png'
  cover: '../../images/projects/guess-who/prev.png'

link: 'https://guess-who-game.vercel.app/'
repo: 'https://github.com/vivitt/Guess_Who_GAME'
technologies: ['React', 'MaterialUI']
title: 'Guess Who Game'

---

## Tech Stack
This project was created with React. It started as a frontend project, with the main focus on implementing a UI that is intuitive and easy to use. That’s why I chose to use Material UI components and customize them to fit the project design.

## Details and Main Features
This game involves guessing a random character by asking questions about their visible features. To add more fun and improve the overall experience, players can also:

- Choose an avatar

- Select easy or hard mode, with a maximum number of questions and attempts allowed

- Turn sound effects on or off

- Compose any question by combining one or two inputs

- Discard cards by simply clicking on them

- Get a detailed view of a character

- See how long it took them to guess correctly

## Motivation
I decided to work on this game after realizing that the classic version was quite biased, with only 5 women out of 20 characters and almost identical skin tones across all of them.

It started as a personal illustration project, where I created drawings for all the characters. When I graduated from bootcamp, I saw the perfect opportunity to put my illustrations to use.

Beyond being a fun game, the project turned out to be a great learning tool for kids and foreign language learners. I truly believe play is an important part of education, and I wanted players to have access to more diverse (and real) representations.

## Development & Challenges
During development, I first focused on implementing the game logic. I wanted users to be able to formulate any question they wanted, so I couldn’t rely on pre-made questions.

To achieve this, I implemented a solution that combines two select inputs, one of them mandatory and the other optional. So users have the flexibility to create questions that match what they want to ask.

Another important feature was ensuring that users could manually turn down cards instead of the game doing it for them. This added an extra layer of difficulty to the game. To achieve this, I needed to track the current state of the cards throughout a play session, which pushed me to learn more about React state management.

In this project, I was involved not only in coding but also in designing the entire interface. So, once the logic was implemented, the next step was to determine how to display the information on the screen.

The first step was to choose a color palette that complemented the tones of the illustrations:

![](../../images/projects/guess-who/colors.png)

One of the most significant challenges was displaying many picture cards on the screen while ensuring all characters were visible. I learned about CSS Flexbox and used it to make the cards adapt to different screen sizes.

![](../../images/projects/guess-who/chars.png)

To make the most of the available space, I used toggleable panels and modular components that users can show or hide as needed. I also customized Material UI components to better fit the project’s design and ensure they complemented the color palette and illustrations.

![](../../images/projects/guess-who/panel.png)

## Highlighted learnings
As my first self-guided project, this experience came with both challenges and valuable learning opportunities.

I expanded my understanding of React functional components and hooks, becoming more comfortable installing and working with various packages and libraries. I also learned the importance of maintaining a well-structured project and being mindful of each line of code, refactoring when needed to keep things clean and maintainable.


