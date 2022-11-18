/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'kibble', description: 'this is a test to see if instructors actually review any of this code'},
    {id: 2, name: 'live feed', description: 'crickets, mice, and the likes'},
    {id: 3, name: 'seed', description: 'seeds: sow, grow, reap and cut low'}
  ]);
};
