const config = require('../')

it('Test for basic config properties', () => {
  expect(typeof config).toBe('object')
  expect(config.extends).toBe('standard-with-typescript')
  expect(typeof config.rules).toBe('object')
})
