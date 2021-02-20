# Overview

In this project, you will bring together what you have learned in the previous lessons and build a project off of Codecademy. You will need to create your own files, write your own code, and publish the final product. We'll provide you with high-level tasks to guide your project to completion, but you will be responsible for deciding how to implement them in your code. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Project Title

Journal

## Hours to Complete

10

## Short Overview

Working with multiple APIs to build multiple features is a common problem to solve with React and Redux. How you display data is as important as how you fetch it. This project will give you an overview of how to build a React and Redux application that works with different APIs.

## Long Overview

For this project, you will build journaling application. This application will interact with different APIs to provide users with a space to write down their thoughts. You can think of this app as a fancy todo list with features such as: showing inspirational images, quotes, and their weather.

## Project Requirements

- Build the application using React and Redux Toolkit
- Version control your application with Git and host the repository on GitHub
- Write a README (using Markdown) that documents your project including:
  - The purpose of your project
  - Technologies used
  - Features
  - Future work
- Your application is deployed and accessible by users

### Features

- Users can check what the weather is
- Users are shown an inspirational image
- Users are shown an inspirational quote
- Users can write down their thoughts
- Users can delete thoughts
- Users can mark thoughts as complete

## Prerequisites

- HTML
- CSS
- JavaScript
- React
- Redux Toolkit
- Git and GitHub

## Setup

### Going Off Platform

You will be doing this project outside of the Codecademy platform, on your own computer.

For this particular project, you will be using your own text editor (we suggest [VS Code](https://code.visualstudio.com/download)) and Git version control. If you need help setting up your text editor, read our [article about setting up a text editor for web development](https://www.codecademy.com/articles/visual-studio-code). If you need a refresher on how to work with Git for version control, [review the Git lesson](https://www.codecademy.com/learn/learn-git) or look at this [cheat sheet](https://education.github.com/git-cheat-sheet-education.pdf).

### APIs

For this project, you are welcome to use any APIs you want. You are encouraged to find new APIs to build new features for your application. Below we provide some recommendations.

#### Weather

You can use the [OpenWeather API](https://openweathermap.org). Here's how to get started:

1. [Create an account](https://home.openweathermap.org/users/sign_up)
2. Go to the [API keys page](https://home.openweathermap.org/api_keys) and copy the `Key` value
3. Read their [API documentation](https://openweathermap.org/api) to see which API gives you the data you need

##### Example

We will use the [Current Weather API](https://openweathermap.org/current) as an example. Inside of our code, we can get the current weather data like this:

```js
// This is the key you copied from step 2.
const API_KEY = "A_RANDOM_API_KEY";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const getWeather = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();

  return json;
};
```

#### Quote

#### Image

## Tasks

## Resources

## Example Code

Want to see an example of how someone else has completed this project? Click this [link](TODO:REPLACE_ME) to download a zip file containing one example solution to this project. Remember: your project doesn't have to look anything like this! It should be unique to your vision.

## Sharing

Great work! Visit [our forums](TODO:REPLACE_ME) to compare your project to our sample solution code. After you host your own solution on GitHub, be sure to share it with other learners and see how other learners have built their own projects!

Your solution might look different from ours, and that’s okay! There are multiple ways to solve these projects, and you’ll learn more by seeing others’ code.
