// @flow

import cuid from 'cuid'
import type { ID, Tag, Tags, TagsAction, TagsState } from '../types/tags'

const createTag = (state: TagsState, id: ID, name: string): Tag => {

  const newTag: Tag = {
    id:cuid(),
    name,
    usages: 0,
  }

  const {tags} = state

  const newTags = [...tags,newTag]

  const newState = Object.assign({}, state, {tags: newTags})

  return newState
}

const updateTag = (tags: Tags, id: ID, name: string): Tags =>{
  return tags.map(t => (t.id !== id ? t : { ...t, name }))
}

const removeTagById = (tags: Tags, id: ID): Tags => tags.filter(t => t.id !== id)

const initList:TagsState = {
  tags: [],
  pagination: {start:0},
  filter: 'SHOW_ALL'
}

const tagsState = (state: Tags = initList, action: TagsAction): TagsState => {
  switch (action.type) {
    case 'TAG_CREATE':
      return createTag(state, action.id, action.name)

    case 'TAG_UPDATE':
      return updateTag(state, action.id, action.name)

    case 'TODO_DELETE':
      return removeTagById(state, action.id)

    case 'TAG_FILTER':
      return {...state, filter: action.filter}

    default:
      return state
  }
}

export default tagsState
