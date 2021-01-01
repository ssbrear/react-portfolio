import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";

const ProjectData = [
  {
    Title: "Super Similar",
    Image: "https://i.ibb.co/mBy44z5/similar.jpg",
    Description:
      "As part of a group project for my bootcamp, my group created a website using two movie-related APIs that presents the user with movies or shows similar to their input. My part of this project was primarily focused on learning and implementing the Foundation CSS framework. This includes both the structure of the HTML and the responsiveness of the page.",
    Link: "https://ssbrear.github.io/group-project/",
  },
  {
    Title: "SupportX",
    Image: "https://i.ibb.co/52nPw4v/discordclone.jpg",
    Description:
      "This was the final project of the bootcamp I participated in, and where I learned everything I know about React. I was personally responsible for all of the front-end for this project, and so I decided on leaning in on my CSS skills to try and replicate a well-known interface, Discord. I am very pleased with how it turned out, and I'm excited to try and replicate another UI in the future, as it was very educational.",
    Link: "http://jbaxter-supportx.herokuapp.com/dashboard",
  },
  {
    Title: "My List",
    Image: "https://i.ibb.co/F323y3t/list.jpg",
    Description:
      "This is a side project I started working on after learning how to use Local Storage to store data in the browser such that different users could keep track of and check off items in a list. Later on after learning how to create and implement a database, this project was completely redone with MySQL and Passport.",
    Link: "https://my-list-db.herokuapp.com/list",
  },
  {
    Title: "Quicktrends",
    Image: "https://i.ibb.co/WBwDRTN/quicktrends.jpg",
    Description:
      "As part of a group project for my bootcamp, my group created a website that displays a graph of stock prices over time, and relevant news articles for the searched-for company. This website also features accounts that users can create to store their recent searches.",
    Link: "https://quicktrends.herokuapp.com/",
  },
  {
    Title: "Weather Dashboard",
    Image: "https://i.ibb.co/vJqWRhc/Capture.jpg",
    Description: "This dashboard was assigned to me to create from scratch early on in the bootcamp. As such, it runs almost entirely on jQuery. This is the project I am the most interested in remaking in the future as I would like to get even more comfortable and skilled with React, and this would be a good contender for that.",
    Link: "https://ssbrear.github.io/bootcamp-hw/6/index-6.html",
  },
  {
    Title: "Tic-Tac-Toe",
    Image: "https://i.ibb.co/kx1FDGz/tictactoe.jpg",
    Description:
      "This is the first page I made using jQuery, and it was nice to not have to write as much code for the same functionality. The most frustrating part of this assignment is that I could not figure out how to make text sizes responsive without resorting to either media queries in CSS or an event listener in JS (I picked the media queries).",
    Link: "https://ssbrear.github.io/tic-tac-toe/",
  },
];

function Portfolio(props) {
  return (
    <div id="portfolio-css">
      <Header />
      <div id="project-container">
        {ProjectData.map((project, i) => (
          <Project key={i} data={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Portfolio;
