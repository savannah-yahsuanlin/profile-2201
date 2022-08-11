import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../store";
import { Button, Grid, Box, Avatar, FormLabel } from "@mui/material";


class UpdateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id ? this.props.user.id : "",
      name: this.props.user.name ? this.props.user.name : "",
      bio: this.props.user.bio ? this.props.user.bio : "",
      img: this.props.user.img ? this.props.user.img : "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //componentDidMount() {
	//	this.el.addEventListener('change', (ev)=> {
	//		const file = ev.target.files[0]
	//		const reader = new FileReader()
	//		reader.addEventListener('load', () => {
	//			this.setState({img:reader.result})
	//		})
	//		reader.readAsDataURL(file)
	//	})
	//}

  componentDidUpdate(prevProps) {
    if (!prevProps.user.id && this.props.user.id) {
      this.setState({
        name: this.props.user.name,
        bio: this.props.user.bio,
        img: this.props.user.img,
      });
    }
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.updateUser(this.state);
  }

  handleChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  render() {
    const { id, name, bio, img } = this.state;
    const { handleChange, handleSubmit } = this;

    if (!id) return null;

    return (
      <div>
          <Box maxWidth="lg" sx={{justifyContent: 'center', my: 10, mx: 'auto'}}>
            <form onSubmit={handleSubmit}>
              <FormLabel>Image</FormLabel>
              <input 
                type='file'
                onChange={handleChange}
                name="img"
                ref={el => this.el = el}
                required
              />
              <FormLabel>Name</FormLabel>
              <input
                name="name"
                value={name ?? ""}
                onChange={handleChange}
                color="inherit"
                autoFocus={true}
                required
                type="text"
              />
              <FormLabel>Description</FormLabel>
              <textarea
                onChange={handleChange}
                value={bio ?? ""}
                label="Bio"
                name="bio"
                color="inherit"
                rows="10"
                required
              />
              <Button type="submit" color="inherit">
                Save
              </Button>
              <Button>
                <Link to="/">Cancel</Link>
              </Button>
            </form>
          </Box>
      </div>
    );
  }
}

const mapState = (state, { match }) => {
  let user = state.users.find((user) => user.id === match.params.id * 1);
  return {
    user,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    updateUser: (user) => {
      dispatch(updateUser(user, history));
    },
  };
};

export default connect(mapState, mapDispatch)(UpdateProfile);
