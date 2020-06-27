const express = require('express');
const server = express();

const helmet = require('helmet');
const morgan = require('morgan');

server.use(helmet());
server.use(morgan('short'));
server.use(express.json());

const projectRouter = require('./routers/projectRouter');
server.use('/api/projects', projectRouter);

const taskRouter = require('./routers/taskRouter');
server.use('/api/tasks', taskRouter);

const resourceRouter = require('./routers/resourceRouter');
server.use('/api/resources', resourceRouter);

module.exports = server;
