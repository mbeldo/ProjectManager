import React, { Component } from "react";
import ProjectItem from "./ProjectItem.js";
import PropTypes from "prop-types";

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        //console.log(project);
        return (
          <ProjectItem
            onDelete={this.deleteProject.bind(this, project.id)}
            project={project}
            key={project.id}
          />
        );
      });
    }
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        <br />
        {projectItems}
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
};

export default Projects;
