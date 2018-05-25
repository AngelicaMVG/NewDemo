import React, { Component } from 'react';
import req from 'superagent';
import { withRouter, Redirect } from 'react-router-dom';
import Button from '../shared/button/Button';
import glamorous from 'glamorous';
import request from 'superagent';
import Area from '../shared/grid/Area';
import logo from './../logomuktek3.png';

const FieldWrapper = glamorous.input({
  boxSizing: 'border-box',
  width: '80%',
  display: 'block',
  height: 40,
  outline: 'none',
  border: `1px solid gray`,
  borderRadius: 4,
  margin: '20px auto',
  padding: '10px',
  ':focus': {
    border: `1px solid black`,
    boxShadow: `0px 0px 10px -2x§px black`
  }
});

const Card = glamorous.div(
  {
    width: '40%',
    margin: '0 auto',
    borderRadius: 4,
    padding: '30px 50px  50px 50px'
  },
  ({ color }) => ({
    backgroundColor: 'white'
  })
);

const Title = glamorous.h2({
  textAlign: 'center',
  paddingBottom: 20,
  fontFamily: 'Libre Franklin,Helvetica Neue,Helvetica,Calibri,sans-serif'
});

class LoginForm extends Component {
  state = { email: '', password: '', role: '' };

  handleSubmit = e => {
    e.preventDefault();

    request
      .post('/auth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({ email: this.state.email, password: this.state.password })
      .then(userLogged => {
        localStorage.setItem('email', this.state.email);
        this.setState({
          isAuthenticated: userLogged.body.id ? true : false
        });
        this.props.history.push('/students');
      });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <img
          style={{ width: '8%', margin: '5% 46% 2% 46%' }}
          src={logo}
          alt=""
        />
        <Card>
          <Title>Inicia Sesion</Title>
          <form onSubmit={this.handleSubmit}>
            <FieldWrapper
              type="email"
              placeholder="email"
              onChange={this.onChange}
              name="email"
              ref="email"
              value={this.state.email}
            />
            <FieldWrapper
              placeholder="Password"
              type="password"
              onChange={this.onChange}
              name="password"
              ref="password"
              value={this.state.password}
            />

            <Button
              style={{
                backgroundColor: '#564A9B',
                fontFamily: 'Libre Franklin, Helvetica Nue',
                width: '80%',
                marginLeft: '10%',
                fontSize: 18
              }}
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}

export default withRouter(LoginForm);
