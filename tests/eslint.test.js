const eslint = require('eslint')

const cli = new eslint.CLIEngine({
  useEslintrc: true
})

it('works with const', () => {
  const errorCount = cli.executeOnText('const foo = 1\nconst bar = function () {}\nbar(foo)\n').errorCount

  expect(errorCount).toBe(0)
})

it('fails with var', () => {
  const errorCount = cli.executeOnText('var foo = 1\nconst bar = function () {}\nbar(foo)\n').errorCount

  expect(errorCount).toBe(1)
})
