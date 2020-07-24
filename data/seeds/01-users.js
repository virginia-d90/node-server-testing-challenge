
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Virginia", password: "apple"},
        {username: "Ashley", password: "banana"},
        {username: "Joe", password: "orange"}
      ]);
    });
};
