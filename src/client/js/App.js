import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Navbar from './components/Nav';
import Error from './shared/Error';
import Grid from './shared/grid/Grid';
import Area from './shared/grid/Area';
import LoginForm from './login/LoginForm';
import StudentList from './routes/students/StudentList';
import StudentNew from './routes/students/StudentNew';
import StudentDetail from './routes/students/StudentDetail';
import WeekDetail from './routes/weeks/WeekDetail';
import request from 'superagent';
import PrivateRoute from './hocs/PrivateRoute';
import 'normalize.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticated: false,
      asuetos: ''
    };
  }

  handleLogout = () => {
    request.get('/auth/current').then(currentUser => {
      // console.log(currentUser);
      this.setState({
        isAuthenticated: currentUser.body.id ? true : false
      });
    });
  };

  updateNoAuthorization() {
    this.setState({
      isAuthenticated: false
    });
  }

  componentWillMount() {
    this.handleLogout();
  }

  handleAuthentication = credentials => {
    request
      .post('/auth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send({
        email: credentials.email,
        password: credentials.password
      })
      .then(userLogged => {
        localStorage.setItem('email', credentials.email);
        this.setState({
          isAuthenticated: userLogged.body.id ? true : false
        });
      });
  };

  render() {
    return (
      <div style={{ fontFamily: 'Helvetica' }}>
        <Error>
          <Router>
            <Switch>
              <Route exact path="/" component={LoginForm} />
              <Route
                path="/students/:studentId/weeks/:id"
                component={WeekDetail}
              />
              <Route path="/students/new" component={StudentNew} />
              <PrivateRoute path="/students/:id" component={StudentDetail} />
              <PrivateRoute path="/students" component={StudentList} />
            </Switch>
          </Router>
        </Error>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app-container')
);
