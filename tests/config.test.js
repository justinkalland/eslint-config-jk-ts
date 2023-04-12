const config = require('../')

it('Test for basic config properties', () => {
  expect(typeof config).toBe('object')
  expect(config.extends).toEqual(['standard-with-typescript', 'plugin:vue/vue3-recommended'])
  expect(typeof config.rules).toBe('object')
})
