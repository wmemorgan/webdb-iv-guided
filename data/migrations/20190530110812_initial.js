
exports.up = async function(knex) {
  await knex.schema.createTable('tracks', tbl => {
    tbl.increments('id')
    tbl.string('name').unique().notNullable()
  })

  await knex.schema.createTable('cohorts', tbl => {
    tbl.increments('id')
    tbl.string('name').unique().notNullable()
    tbl
      .integer('track_id')
      .references('id')
      .inTable('tracks')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
  })

  await knex.schema.createTable('students', tbl => {
    tbl.increments('id')
    tbl.string('name').unique().notNullable()
  })

  await knex.schema.createTable('cohorts_students', tbl => {
    tbl.increments('id')
    tbl
      .integer('cohort_id')
      .references('id')
      .inTable('cohorts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
    tbl
      .integer('student_id')
      .references('id')
      .inTable('students')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cohorts_students')
  await knex.schema.dropTableIfExists('students')
  await knex.schema.dropTableIfExists('cohorts')
  await knex.schema.dropTableIfExists('tracks')
}
