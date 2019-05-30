
exports.seed = async function(knex) {
  // Inserts seed entries
  await knex('tracks').insert([
    { id: 1, name: 'CS' },
    { id: 2, name: 'FSW' },
    { id: 3, name: 'iOS' }
  ]);
};
