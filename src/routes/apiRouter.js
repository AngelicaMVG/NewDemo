const Router = require('express').Router;
const Week = require('../models/Week.js');
const Holidays = require('../models/Holidays.js');

const Days = require('../models/Days.js');

const apiRouter = Router();

function daysIndex(req, res) {
  // console.log('params', req.params);
  Days.query()
    .where('studentId', req.params.studentId)
    .andWhere('weekId', req.params.weekId)
    .then(data => {
      return res.json(data);
    })
    .catch(e => {
      res.send('Error: ', e).status(500);
    });
}

function singleDay(req, res) {
  // console.log('params', req.params);
  Days.query()
    .findById(req.params.id)
    .where('studentId', req.params.studentId)
    .andWhere('weekId', req.params.weekId)
    .then(data => {
      return res.json(data).status(200);
    })
    .catch(e => {
      res.send('Error: ', e).status(500);
    });
}

function createDay(req, res) {
  Days.query()
    .insert(req.body)
    .where('studentId', req.params.studentId)
    .andWhere('weekId', req.params.weekId)
    .then(newRecord => {
      return res.json(newRecord).status(200);
    })
    .catch(err => res.send(err).status(500));
}

function updateDay(req, res) {
  Days.query()
    .updateAndFetchById(req.params.id, req.body)
    .where('studentId', req.params.studentId)
    .andWhere('weekId', req.params.weekId)
    .then(updated => {
      return res.json(updated).status(200);
    })
    .catch(err => {
      res.send(err).status(500);
    });
}

function deleteDay(req, res) {
  Days.query()
    .deleteById(req.params.id)
    .then(data => {
      return res.json({ rowsDeleted: data }).status(200);
    })
    .catch(err => {
      res.send(err).status(500);
    });
}

function weekIndex(req, res) {
  Week.query()
    .where('studentId', req.params.studentId)
    .eager('[student,days]')

    .then(data => {
      return res.json(data);
    })
    .catch(e => {
      res.send('Error: ', e).status(500);
    });
}

function weekSingle(req, res) {
  Week.query()
    .findById(req.params.id)
    .where('studentId', req.params.studentId)
    .eager('[student,days]')
    .then(data => {
      return res.json(data).status(200);
    })
    .catch(e => {
      res.send('Error: ', e).status(500);
    });
}

function createWeek(req, res) {
  Week.query()
    .insert(req.body)
    .where('studentId', req.params.studentId)
    .then(newRecord => {
      return res.json(newRecord).status(200);
    })
    .catch(err => res.send(err).status(500));
}

function updateWeek(req, res) {
  Week.query()
    .updateAndFetchById(req.params.id, req.body)
    .where('studentId', req.params.studentId)
    .then(updated => {
      return res.json(updated).status(200);
    })
    .catch(err => {
      res.send(err).status(500);
    });
}

function deleteWeek(req, res) {
  Week.query()
    .where('id', req.params.id)
    .first()
    .returning('*')
    .then(recordToDelete => {
      return recordToDelete
        .$relatedQuery('days')
        .delete()
        .where('weekId', recordToDelete.id)
        .returning('*')
        .then(data => {
          return recordToDelete;
        })
        .catch(err => {
          // console.log(err)
          return res.send(err).status(500);
        });
    })
    .then(d => {
      return Week.query()
        .deleteById(d.id)
        .then(() => {
          return d;
        });
    })
    .then(d => res.json(d).status(200))
    .catch(err => {
      return res.send(err).status(500);
    });
}

function holidays(req, res) {
  Holidays.query().then(data => {
    return res.json(data);
  });
}

// function newHoliday(req, res) {
//   Holidays.query()
//     .insert(req.body)
//     .then(newRecord => {
//       return res.json(newRecord).status(200);
//     })
//     .catch(err => res.send(err).status(500));
// }

function updateHoliday(req, res) {
  const id = parseInt(req.params.id);
  const newData = req.body;

  Holidays.query()
    .updateAndFetchById(id, newData)
    .then(function(updated) {
      res.json(updated).status(200);
    })
    .catch(function(e) {
      res.json({ error: e }).status(500);
    });
}

function getOne(req, res) {
  Holidays.query()
    .findById(req.params.id)
    .then(data => {
      return res.json(data).status(200);
    })
    .catch(e => {
      res.send('Error: ', e).status(500);
    });
}

function deleteHoliday(req, res) {
  Holidays.query()
    .where('id', req.params.id)
    .first()
    .returning('*')
    .then(d => {
      return Holidays.query()
        .deleteById(d.id)
        .then(() => {
          return d;
        });
    })
    .then(d => res.json(d).status(200))
    .catch(err => {
      return res.send(err).status(500);
    });
}

// //cambiar rutas **
apiRouter
  .get('/students/:studentId/weeks/:weekId/days', daysIndex)
  .get('/students/:studentId/weeks/:weekId/days/:id', singleDay)
  .post('/students/:studentId/weeks/:weekId/days/new', createDay)
  .put('/students/:studentId/weeks/:weekId/days/:id/edit', updateDay)
  .delete('/students/:studentId/weeks/:weekId/days/:id', deleteDay);

apiRouter
  .get('/students/:studentId/weeks', weekIndex)
  .get('/students/:studentId/weeks/:id', weekSingle)
  .post('/students/:studentId/weeks/new', createWeek)
  .put('/students/:studentId/weeks/:id/edit', updateWeek)
  .delete('/students/:studentId/weeks/:id', deleteWeek);

apiRouter
  .get('/holidays', holidays)
  .get('/holidays/:id', getOne)
  // .post('/holidays/new', newHoliday)
  .put('/holidays/:id', updateHoliday)
  .delete('/holidays/:id', deleteHoliday);

module.exports = apiRouter;
