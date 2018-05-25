import React, { Component, Fragment } from 'react';
import { Div } from 'glamorous';
import { Redirect } from 'react-router-dom';
import WeekList from '../weeks/WeekList';
import req from 'superagent';
import glamorous from 'glamorous';
import Area from '../../shared/grid/Area';
import Grid from '../../shared/grid/Grid';
import Navbar from '../../components/Nav';

const CardDetail = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 50,
    borderRadius: 4,
    height: '200px',
    padding: 20,
    textAlign: 'center',
    alignItems: 'center'
  },
  ({ color }) => ({
    backgroundColor: '#ccc'
  })
);

class StudentDetail extends Component {
  state = {
    student: {},
    weeks: [],
    homework: [],
    attendance: []
  };

  componentDidMount() {
    req.get(`/api/students/${this.props.match.params.id}`).then(res => {
      this.setState({
        student: res.body,
        weeks: res.body.weeks,
        homework: res.body.weeks.map(week =>
          week.days.map(day => day.homework)
        ),
        attendance: res.body.weeks.map(week =>
          week.days.map(day => day.attendance)
        )
      });
    });
  }

  getHomeworkPercentage = () => {
    if (this.state.homework.length) {
      return (
        (
          this.state.homework
            .reduce((a, b) => a.concat(b))
            .reduce((a, b) => a + b) *
          100 /
          75
        ).toFixed(2) + '%'
      );
    }
  };

  changeColor = () => {
    if (this.getAttendancePercentage() <= '80%') {
      document.querySelector('.attendance').style.color = 'red';
    }
    if (
      this.getAttendancePercentage() > '80%' &&
      this.getAttendancePercentage() <= '85%'
    ) {
      document.querySelector('.attendance').style.color = 'yellow';
    }
    if (this.getHomeworkPercentage() <= '80%') {
      document.querySelector('.homework').style.color = 'red';
    }
    if (
      this.getHomeworkPercentage() > '80%' &&
      this.getHomeworkPercentage() <= '85%'
    ) {
      document.querySelector('.homework').style.color = 'yellow';
    }
  };

  getAttendancePercentage = () => {
    if (this.state.attendance.length) {
      return (
        (
          this.state.attendance
            .reduce((a, b) => a.concat(b))
            .reduce((a, b) => a + b) *
          100 /
          75
        ).toFixed(2) + '%'
      );
    }
  };

  render() {
    const { student } = this.state;

    this.changeColor();

    return (
      <Grid
        height="100%"
        width="100%"
        gap="20px"
        template={`" top top top top" 50px ".  content content ." auto`}
      >
        <Area area="top">
          <Navbar
            isAuthenticated={this.state.isAuthenticated}
            updateNoAuthorization={this.updateNoAuthorization}
          />
        </Area>
        <Area area="content">
          <Div marginBottom={50}>
            <CardDetail>
              <img alt="student" src={student.avatar} width={70} height={70} />

              <h2>
                {student.name} {student.lastName}
              </h2>
              <div>
                <h3 className="homework" style={{ color: 'green' }}>
                  {this.getHomeworkPercentage()}
                </h3>{' '}
                <span>Tareas</span>
              </div>
              <div>
                <h3 className="attendance" style={{ color: 'green' }}>
                  {this.getAttendancePercentage()}
                </h3>
                <span>Asistencias</span>
              </div>
            </CardDetail>
          </Div>
          <WeekList weeks={student.weeks} />
        </Area>
      </Grid>
    );
  }
}

export default StudentDetail;
