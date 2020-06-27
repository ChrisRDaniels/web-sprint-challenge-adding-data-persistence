exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('task')
    .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          project_id: 1,
          description: 'Task1 for project1',
          notes: 'Generic notes',
          completed: false,
        },
        {
          project_id: 1,
          description: 'Task2 for project1',
          notes: 'Generic notes',
          completed: false,
        },
        {
          project_id: 2,
          description: 'Task1 for project2',
          notes: 'Generic notes',
          completed: true,
        },
        {
          project_id: 3,
          description: 'Task1 for project1',
          notes: 'Generic notes',
          completed: false,
        },
        {
          project_id: 3,
          description: 'Task2 for project1',
          notes: 'Generic notes',
          completed: true,
        },
        {
          project_id: 3,
          description: 'Task3 for project1',
          notes: 'Generic notes',
          completed: true,
        },
      ]);
    });
};
