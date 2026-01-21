import assert from 'node:assert'

function add(a: number, b: number) {
  return a + b
}

assert.strictEqual(add(2, 2), 4)

console.log('tests passed')
