import { expect, test } from 'vitest'
import Hello from '..'

test('Should print Hello, World!', () => {
  expect(Hello()).toBe("Hello, World!")
})