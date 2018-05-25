import React from 'react';
import glamorous from 'glamorous';

const StudentListItemWrapper = glamorous.div({
  backgroundColor: 'white',
  padding: 20,
  marginBottom: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  height: 90
});

const Avatar = glamorous.img({
  borderRadius: 100,
  height: 30,
  width: 30,
  marginRight: 20
});

class StudentListItem extends React.Component {
  render() {
    const student = this.props.student;
    return (
      <StudentListItemWrapper>
        <Avatar src={student.avatar} alt="alt" />
        <div>
          {student.name} {student.lastName}
        </div>
      </StudentListItemWrapper>
    );
  }
}

export default StudentListItem;
