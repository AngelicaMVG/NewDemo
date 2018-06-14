const Router = require('express').Router;
const Student = require('../models/Student.js');

const studentsRouter = Router();

function studentsIndex(req, res) {
  Student.query()
    .eager('[weeks, weeks.days]')
    .then(data => {
      return res.json(data);
    });
}

function createStudent(req, res) {
  Student.query()
    .insert(req.body)
    .then(newRecord => {
      return res.json(newRecord).status(200);
    })
    .catch(err => res.send(err).status(500));
}

function singleStudent(req, res) {
  Student.query()
    .findById(req.params.id)
    .eager('[weeks, weeks.days]')
    .then(data => {
      return res.json(data).status(200);
    })
    .catch(e => {
      res.send('Error: ', e).status(500);
    });
}

function updateStudent(req, res) {
  Student.query()
    .updateAndFetchById(req.params.id, req.body)
    .then(updated => {
      return res.json(updated).status(200);
    })
    .catch(err => {
      res.send(err).status(500);
    });
}

function studentsDelete(req, res) {
  Student.query()
    .where('id', req.params.id)
    .first()
    .returning('*')
    .then(recordToDelete => {
      return recordToDelete
        .$relatedQuery('weeks')
        .delete()
        .where('studentId', recordToDelete.id)
        .returning('*')
        .then(data => {
          console.log('deleting records:', data);
          return recordToDelete;
        })
        .catch(err => {
          // console.log(err)
          return res.send(err).status(500);
        });
    })
    .then(d => {
      return Student.query()
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

function loggedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    console.log('No Authorization');
    res.json({
      error: 'private route'
    });
  }
}

// proteger rutas desde servidor

studentsRouter
  .get('/', loggedIn, studentsIndex)
  .get('/:id/', singleStudent)

  .post('/new', createStudent)
  .put('/:id/edit', updateStudent)
  .delete('/:id', studentsDelete);

module.exports = studentsRouter;
