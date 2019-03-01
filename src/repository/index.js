import { TagRepository } from './tag/repository'

export const Repositories = {
  ...TagRepository
}

console.log("Repositories: ", Repositories)
