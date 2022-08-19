import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateWork, deleteWork } from "../store";
import { Button, Box, FormLabel, Avatar } from "@mui/material";

class UpdateWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
			id: this.props.work.id ? this.props.work.id: "",
      name: this.props.work.name ? this.props.work.name : "",
      location: this.props.work.location ? this.props.work.location : "",
			title: this.props.work.title ? this.props.work.title : "",
			startDate: this.props.work.startDate ? this.props.work.startDate.slice(0,10) : "",
			endDate: this.props.work.endDate ? this.props.work.endDate.slice(0,10) : "",
			img: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

	componentDidMount() {
		this.el.addEventListener('change', (ev)=> {
			const file = ev.target.files[0]
			const reader = new FileReader()
			reader.addEventListener('load', () => {
				this.setState({img:reader.result})
			})
			reader.readAsDataURL(file)
		})
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
		this.setState({img: ' '})
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
					<Box maxWidth="lg" sx={{justifyContent: 'center', my: 10, mx: 'auto'}}>
							<form onSubmit={handleSubmit}>
							{img ? <Avatar sx={{ width: 50, height: 50}} alt={name} src={img}></Avatar> : null}
							<FormLabel>Image</FormLabel>
								<input 	
									type="file"
									onChange={handleChange}
									ref={el => this.el = el}
									/>
							<FormLabel>Name</FormLabel>
								<input
									name="name"
									value={name ?? ""}
									onChange={handleChange}
									color="inherit"
									autoFocus={true}
									autoComplete="on"
									type="text"
								/>
							<FormLabel>Title</FormLabel>
								<input
									onChange={handleChange}
									value={title ?? ""}
									label="Title"
									name="title"
									color="inherit"
								/>
							<FormLabel>Location</FormLabel>
								<input
									onChange={handleChange}
									value={location ?? ""}
									label="Location"
									name="location"
									
								/>
							<FormLabel>Start Date</FormLabel>
								<input
									onChange={handleChange}
									type='text'
									value={startDate ?? ""}
									label="StartDate"
									name="startDate"
									
								/>
							<FormLabel>End Date</FormLabel>
								<input
									onChange={handleChange}
									type='text'
									value={endDate ?? ""}
									label="EndDate"
									name="endDate"
								
								/>
								<Button type="submit" color="inherit" disabled={!name || !title || !endDate}>
									Save
								</Button>
								<Button
									onClick={() => this.props.deleteWork(this.props.work)}
									style={{ color: "red" }}
								>
									Delete
								</Button>
								<Button>
									<Link to="/works">Cancel</Link>
								</Button>
							</form>
					</Box>
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
    updateWork: (work, img) => {
      dispatch(updateWork(work, img, history));
    },
		deleteWork: (work) => {
			dispatch(deleteWork(work, history))
		}
  };
};

export default connect(mapState, mapDispatch)(UpdateWork);
