const config = require('../')

it('Test for basic config properties', () => {
  expect(typeof config).toBe('object')
  expect(config.extends).toEqual(['plugin:vue/vue3-recommended', 'standard-with-typescript'])
  expect(typeof config.rules).toBe('object')
})
