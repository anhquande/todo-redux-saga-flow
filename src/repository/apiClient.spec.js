// @flow
import { apiClient } from './apiClient'
import { TagRepository } from './tag/repository'

describe('test API Call', () => {

  beforeEach(() => {
  })

  test('should request tags', async () => {
    const result = await apiClient(TagRepository.TAG.FIND_ALL.trigger())

    console.log(result)
  })

})
