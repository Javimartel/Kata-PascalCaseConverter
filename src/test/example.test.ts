import { returnOne } from '../core/example'

describe('example test', () => {
  it('should return 1', () => {
    const result = returnOne()

    expect(result).toBe(1)
  })
})
