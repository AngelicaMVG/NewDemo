import React, { Component } from 'react';
import Button from '../../shared/button/Button';
import Input from '../../shared/input/Input';
import { withRouter } from 'react-router-dom';
import req from 'superagent';

class StudentForm extends Component {
  state = {
    name: this.props.firstName || '',
    lastName: this.props.lastName || '',
    avatar: this.props.avatar || ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    req
      .post('/api/students/new')
      .send(this.state)
      .then(() => {
        this.props.history.goBack();
      });
  };

  render() {
    return (
      <form style={{ marginTop: '20%' }} action="">
        <Input
          onChange={this.handleChange}
          placeholder="name"
          type="text"
          name="name"
          value={this.state.name}
        />
        <Input
          onChange={this.handleChange}
          placeholder="lastname"
          type="text"
          name="lastName"
          value={this.state.lastName}
        />
        <Input
          onChange={this.handleChange}
          placeholder="avatar"
          type="text"
          name="avatar"
          value={this.state.avatar}
        />

        <Button bgColor="blue" onClick={this.handleSubmit}>
          send
        </Button>
      </form>
    );
  }
}

export default withRouter(StudentForm);
