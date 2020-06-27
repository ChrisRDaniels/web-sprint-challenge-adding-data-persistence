exports.up = function (knex) {
  return knex.schema
    .createTable('project', (table) => {
      table.increments();

      table.string('name', 255).notNull();
      table.string('description', 255);
      table.boolean('completed').notNull().defaultTo(false);
    })
    .createTable('task', (table) => {
      table.increments();

      table
        .integer('project_id')
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table.string('description', 255).notNull();
      table.string('notes', 255);
      table.boolean('completed').defaultTo(false);
    })
    .createTable('resource', (table) => {
      table.increments();

      table.string('name', 255).notNull().unique();
      table.string('description', 255);
    })
    .createTable('project_resource', (table) => {
      table.increments();

      table
        .integer('project_id')
        .references('id')
        .inTable('project')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      table
        .integer('resource_id')
        .references('id')
        .inTable('resource')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('project_resource')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project');
};
