import React from 'react';
import glamorous from 'glamorous';
// import { Link } from 'react-router-dom';
import MdCheck from 'react-icons/lib/md/check';
import MdClear from 'react-icons/lib/md/clear';
import MyLink from '../../shared/link/MyLink';

const WeekListWrapper = glamorous.div({
  backgroundColor: 'white',
  padding: 20,
  marginBottom: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'space-around',
  justifyContent: 'space-around',
  height: 150
});

export default ({ weeks }) => {
  return (
    <div>
      {weeks &&
        weeks.map(week => (
          <MyLink
            to={`/students/${week.studentId}/weeks/${week.id}`}
            key={week.id}
          >
            <WeekListWrapper key={week.id}>
              <div>
                {`Semana ${week.week}`}
                <div style={{ marginTop: 25 }}>Tarea</div>
                <div style={{ marginTop: 25 }}>Asistencia</div>
              </div>

              {week.days &&
                week.days.map(day => (
                  <div key={day.id}>
                    <div>{day.dayName}</div>
                    <div>
                      {day.homework ? (
                        <MdCheck
                          style={{
                            color: 'green',
                            fontSize: '25px',
                            marginTop: 20,
                            marginLeft: 5
                          }}
                        />
                      ) : (
                        <MdClear
                          style={{
                            color: 'red',
                            fontSize: '25px',
                            marginTop: 20,
                            marginLeft: 5
                          }}
                        />
                      )}
                    </div>
                    <div>
                      {day.attendance ? (
                        <MdCheck
                          style={{
                            color: 'green',
                            fontSize: '25px',
                            marginTop: 20,
                            marginLeft: 5
                          }}
                        />
                      ) : (
                        <MdClear
                          style={{
                            color: 'red',
                            fontSize: '25px',
                            marginTop: 20,
                            marginLeft: 5
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
            </WeekListWrapper>
          </MyLink>
        ))}
    </div>
  );
};
