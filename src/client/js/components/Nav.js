import React, { Component } from 'react';
import glamorous from 'glamorous';
import { NavLink } from 'react-router-dom';
import req from 'superagent';
import logo from '../icono_azul.png';

const Nav = glamorous.nav({
  backgroundColor: '#fff',
  height: 80,
  padding: '5px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'blue',
  zIndex: 50,
  position: 'fixed',
  width: '100%'
});

export default class Navbar extends Component {
  getRoute = () => {
    if (localStorage.getItem('email')) {
      return [
        <NavLink
          key="1"
          to="/students"
          style={{ color: 'blue', textDecoration: 'none' }}
        >
          Dashboard
        </NavLink>,
        <a
          style={{
            textDecoration: 'none',
            color: 'blue',
            marginLeft: '25%'
          }}
          href="/"
          key="2"
          onClick={this.logout}
        >
          Logout
        </a>
      ];
    }
  };
  logout = () => {
    req.get('/auth/logout').then(() => {
      console.log('logout!!!');
      this.props.updateNoAuthorization;
      console.log(this.props.isAuthenticated);
      localStorage.removeItem('email');
    });
  };
  render() {
    return (
      <Nav>
        <img src={logo} alt="#" width={50} />

        <div
          style={{
            width: '15%',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>{this.getRoute()}</div>
        </div>
      </Nav>
    );
  }
}
