const knex = require('./data/dbconfig');

const addProject = (data) => {
  return knex('project').insert(data);
};

const getProjects = () => {
  return knex.select('*').from('project');
};

const addResource = (data) => {
  return knex('resource').insert(data);
};

const getResources = () => {
  return knex.select('*').from('resource');
};

const addTask = (data) => {
  return knex('task').insert(data);
};

const getTasks = () => {
  return knex('task')
    .join('project', 'project.id', '=', 'task.project_id')
    .select('task.*', 'project.name', 'project.description as proj_desc');
};

module.exports = {
  addProject,
  getProjects,
  addResource,
  getResources,
  addTask,
  getTasks,
};
