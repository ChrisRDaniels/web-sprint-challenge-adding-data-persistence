const router = require('express').Router();
const db = require('../knexfunctions');

router.get('/', (req, res) => {
  db.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ Error: 'There was an error getting a resource list.' });
    });
});

router.post('/', (req, res) => {
  db.addResource(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ Error: 'There was an error adding the resource' });
    });
});

module.exports = router;
