exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resource')
    .del()
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        { name: 'resource1', description: 'resource1 description' },
        { name: 'resource2', description: 'resource2 description' },
        { name: 'resource3', description: 'resource3 description' },
      ]);
    });
};
