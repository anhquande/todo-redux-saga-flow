import { apiClient } from './apiClient'
import * as TagRoutines from './baseRepository'

describe('test API Call', () => {

  beforeEach(() => {
  })

  test('should request tags', async () => {
    const result = await apiClient(TagRoutines.FIND_ALL.trigger())
    console.log(result)
  })

})
