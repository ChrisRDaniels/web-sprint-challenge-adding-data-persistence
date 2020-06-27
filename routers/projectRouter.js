const router = require('express').Router();
const db = require('../knexfunctions');

router.get('/', (req, res) => {
  db.getProjects()
    .then((projects) => {
      if (projects) {
        res.status(200).json(projects);
      } else {
        res.status(404).json({ Error: 'Nothing was able to be returned.' });
      }
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ Error: 'There was an error getting a projects list.' });
    });
});

router.post('/', (req, res) => {
  db.addProject(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ Error: 'There was a problem adding the project.' });
    });
});

module.exports = router;
