
exports.up = async function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('document_number').unique().notNullable();
        table.boolean('is_active').notNullable().defaultTo(true);
        //table.integer('chefe_id').notNullable().references('id').onTable('professores')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('users');
}