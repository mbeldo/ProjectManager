import React, { Component } from "react";
import uuid from "uuid";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newProject: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static defaultProps = {
    categories: ["Web Design", "Web Development", "Mobile Development"]
  };

  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("title is required!");
    } else {
      e.preventDefault();
      this.setState(
        {
          newProject: {
            title: this.refs.title.value,
            category: this.refs.category.value,
            id: uuid.v4()
          }
        },
        function() {
          this.props.AddProject(this.state.newProject);
        }
      );
    }
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3>Add Project </h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label> <br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="Submit" />
        </form>
        <br />
      </div>
    );
  }
}

export default AddProject;
