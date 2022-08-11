import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateWork, deleteWork } from "../store";
import { Button } from "@mui/material";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "granville, serif",
  },
});

theme = responsiveFontSizes(theme);

class UpdateWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
			id: this.props.work.id ? this.props.work.id: "",
      name: this.props.work.name ? this.props.work.name : "",
      location: this.props.work.location ? this.props.work.location : "",
			title: this.props.work.title ? this.props.work.title : "",
      img: this.props.work.img ? this.props.work.img : "",
			startDate: this.props.work.startDate ? this.props.work.startDate : "",
			endDate: this.props.work.endDate ? this.props.work.endDate : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.work.id && this.props.work.id) {
      this.setState({
        name: this.props.work.name,
        location: this.props.work.location,
				title: this.props.work.title,
				img: this.props.work.img,
				startDate: this.props.work.startDate,
				endDate: this.props.work.endDate,
      });
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.updateWork(this.state);
  }

  handleChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  render() {
    const { id, name, img, location, title, startDate, endDate } = this.state;
    const { handleChange, handleSubmit } = this;

    if (!id) return null;

    return (
      <div>
        <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit}>
						<input 	
							type="file"
							onChange={handleChange}
							name="img"
							required
							/>
            <input
              name="name"
              value={name ?? ""}
              onChange={handleChange}
              color="inherit"
              autoFocus={true}
              required
              type="text"
            />
            <input
              onChange={handleChange}
              value={title ?? ""}
              label="Title"
              name="title"
              color="inherit"
              required
            />
            <input
              onChange={handleChange}
              value={location ?? ""}
              label="Location"
              name="location"
              required
            />
						<input
              onChange={handleChange}
							type='date'
              value={startDate ?? ""}
              label="StartDate"
              name="startDate"
              required
            />
						<input
              onChange={handleChange}
							type='date'
              value={endDate ?? ""}
              label="EndDate"
              name="endDate"
              required
            />
            <Button type="submit" color="inherit">
              Save
            </Button>
            <Button>
              <Link to="/">Cancel</Link>
            </Button>
						<Button
							onClick={() => this.props.deleteWork(this.props.work)}
							style={{ color: "red" }}
            >
            	X
            </Button>
          </form>
        </ThemeProvider>
      </div>
    );
  }
}

const mapState = (state, { match }) => {

  let work = state.works.find((work) => work.id === match.params.id * 1);
  return {
    work,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    updateWork: (work) => {
      dispatch(updateWork(work, history));
    },
		deleteWork: (work) => {
			dispatch(deleteWork(work))
		}
  };
};

export default connect(mapState, mapDispatch)(UpdateWork);
