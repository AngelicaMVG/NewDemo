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
    backgroundColor: '#e9e8e6'
  })
);

class StudentDetail extends Component {
  state = {
    student: {},
    weeks: [],
    homework: [],
    attendance: [],
    totalDays: 75,
    today: 0
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
    req.get('/api/holidays/1').then(res => {
      this.setState({
        totalDays: res.body.totalDays - res.body.allHolidays,
        today: res.body.today - res.body.holidaysToday
      });
    });
  }

  getHomeworkPercentage = () => {
    if (this.state.homework.length) {
      return (
        (
          (this.state.homework
            .reduce((a, b) => a.concat(b))
            .reduce((a, b) => a + b) *
            100) /
          this.state.totalDays
        ).toFixed(2) + '%'
      );
    }
  };

  getHomeworkPartialPercentage = () => {
    if (this.state.homework.length) {
      return (
        (
          (this.state.homework
            .reduce((a, b) => a.concat(b))
            .reduce((a, b) => a + b) *
            100) /
          this.state.today
        ).toFixed(2) + '%'
      );
    }
  };

  changeColor = () => {
    if (
      this.getAttendancePartialPercentage() <= '80%' &&
      this.getHomeworkPartialPercentage() <= '80%'
    ) {
      document.querySelector('.partial').style.backgroundColor = 'red';
    }
    if (
      (this.getAttendancePartialPercentage() > '80%' &&
        this.getAttendancePartialPercentage() <= '85%') ||
      (this.getHomeworkPartialPercentage() > '80%' &&
        this.getHomeworkPartialPercentage() <= '85%')
    ) {
      document.querySelector('.partial').style.backgroundColor = 'yellow';
    }
  };

  getAttendancePercentage = () => {
    if (this.state.attendance.length) {
      return (
        (
          (this.state.attendance
            .reduce((a, b) => a.concat(b))
            .reduce((a, b) => a + b) *
            100) /
          this.state.totalDays
        ).toFixed(2) + '%'
      );
    }
  };
  getAttendancePartialPercentage = () => {
    if (this.state.attendance.length) {
      return (
        (
          (this.state.attendance
            .reduce((a, b) => a.concat(b))
            .reduce((a, b) => a + b) *
            100) /
          this.state.today
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
                <div
                  className="total"
                  style={{
                    width: '300px',
                    display: 'flex',
                    border: '2px solid black',
                    justifyContent: 'space-around'
                  }}
                >
                  <h2>Total</h2>
                  <div>
                    <h3>{this.getHomeworkPercentage()}</h3>
                    <span>Tareas</span>
                  </div>
                  <div>
                    <h3>{this.getAttendancePercentage()}</h3>
                    <span>Asistencias</span>
                  </div>
                </div>
                <div
                  className="partial"
                  style={{
                    background: 'green',
                    width: '300px',
                    display: 'flex',
                    border: '2px solid black',
                    justifyContent: 'space-around',
                    marginTop: '10px'
                  }}
                >
                  <h2>Parcial</h2>
                  <div>
                    <h3 className="homework">
                      {this.getHomeworkPartialPercentage()}
                    </h3>
                    <span>Tareas</span>
                  </div>
                  <div>
                    <h3 className="attendance">
                      {this.getAttendancePartialPercentage()}
                    </h3>
                    <span>Asistencias</span>
                  </div>
                </div>
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
