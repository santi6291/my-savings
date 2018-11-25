'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PercentagesSchema extends Schema {
  up () {
    this.create('percentages', (table) => {
      table.increments();
      table.timestamps();
    })
  }

  down () {
    this.drop('percentages')
  }
}

module.exports = PercentagesSchema
