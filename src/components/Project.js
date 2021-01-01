import React from "react";

function Project(props) {
  return (
    <div className="project-css">
      <a href={props.data.Link} className="project-title">{props.data.Title}</a>
      <img
        className="project-picture"
        alt="screenshot of project"
        src={props.data.Image}
      ></img>
      <summary className="project-description">
        {props.data.Description}
      </summary>
    </div>
  );
}

export default Project;
