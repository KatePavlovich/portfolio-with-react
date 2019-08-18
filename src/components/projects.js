import React, { PureComponent } from "react"
import Project from "./project/project"
import projects from "../projectsBase"
import withLayout from "./Layout"

class Projects extends PureComponent {
  render() {
    const projectsList = projects.map(project => (
      <li key={project.id} className="project-tile">
        <Project
          href={project.link}
          src={project.src}
          width={project.width}
          height={project.height}
          name={project.name}
          technologies={project.technologies}
        />
      </li>
    ))
    return (
      <div>
        <section className="content" id="projects">
          <h2 className="projects-section-title">
            Here are some of my projects...
          </h2>
          <ul className="grid">{projectsList}</ul>
          <p className="links-align">
            More projects on
            <a
              className="profile-link"
              href="https://github.com/KatePavlovich"
              target="blank"
            >
              github.com
            </a>
            and
            <a
              className="profile-link"
              href="https://codepen.io/asylumhere/"
              target="blank"
            >
              codepen.io
            </a>
          </p>
        </section>
      </div>
    )
  }
}

export default withLayout(Projects)
