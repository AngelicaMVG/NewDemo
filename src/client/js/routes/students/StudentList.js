import React, { Component, Fragment } from 'react';
import moduleName from '../../shared/grid/Section';
import req from 'superagent';
import Section from '../../shared/grid/Section';
import Box from '../../shared/box/Box';
import Button from '../../shared/button/Button';
import MyLink from '../../shared/link/MyLink';
import StudentListItem from './StudentListItem';
import Area from '../../shared/grid/Area';
import Grid from '../../shared/grid/Grid';
import Navbar from '../../components/Nav';

export default class StudentList extends Component {
  state = {
    students: []
  };

  componentDidMount() {
    this.getStudents();
  }

  getStudents = () => {
    req.get('/api/students').then(res => {
      this.setState({
        students: res.body
      });
    });
  };

  render() {
    return (
      <div style={{ fontFamily: 'Libre Franklin' }}>
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
          <Area area=" content">
            <Section style={{ margin: '10%' }}>
              <h2 style={{ color: '#fff' }}>Estudiantes CIMI</h2>
              {/* <Box justifyContent="flex-end">
            <Button
              style={{ marginBottom: '5%' }}
              bgColor="#2C308D"
              // onClick={() => this.props.history.push('/api/students/new')}
            >
              Crear Estudiante
            </Button>
          </Box> */}
            </Section>
            {this.state.students.length && (
              <div>
                {this.state.students.map(student => (
                  <MyLink to={`/students/${student.id}`} key={student.id}>
                    <StudentListItem key={student.id} student={student} />
                  </MyLink>
                ))}
              </div>
            )}
          </Area>
        </Grid>
      </div>
    );
  }
}
