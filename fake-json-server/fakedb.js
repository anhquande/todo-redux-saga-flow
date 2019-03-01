const Chance = require('chance')
const faker = require('faker')
const fs = require('fs')
const jsf = require('json-schema-faker')

jsf.extend('faker', () => faker)
jsf.extend('chance', () => new Chance())

function generateFromSchema(schema) {
  const dataSchema = JSON.parse(fs.readFileSync(schema, 'UTF-8'))
  return jsf(dataSchema)
}

function readData(path) {
  const dataSchema = JSON.parse(fs.readFileSync(path, 'UTF-8'))
  return dataSchema
}

const generateAccounts = (counter) => (Array.from(Array(counter).keys())
  .reduce((acc, id) => (
    [...acc, {
      "id": id + 1,
      ...faker.helpers.userCard()
    }]), []))

const generateFakeDB = () => {
  const fakeDb = {
    "accounts" : generateAccounts(10),
    "tags": generateFromSchema('./schemas/tags.json'),
    "todos": generateFromSchema('./schemas/todos.json'),
    "products": readData('./data/database.json')}

  return fakeDb
}

module.exports = generateFakeDB

