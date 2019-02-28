import React, { useEffect, useState } from 'react'
import { useDispatch } from 'redux-react-hook'
import Typography from '@material-ui/core/Typography'
import { UITagList } from '../../components/tags/UITagList'
import { TagForm } from '../../components/tags/TagForm'
import { createTag } from '../../actions/tags'
import { useTags } from '../../hooks/useReducer'
import { TagsFilter } from './TagsFilter'
import { setPageHeader } from '../../actions/page'
import type { TagsState } from '../../types/tags'
import { visibleTagsSelector } from '../../selectors/selectTags'

export function Tags() {
  const tagsState: TagsState = useTags()

  const dispatch = useDispatch()

  const visibleTags = visibleTagsSelector(tagsState)

  useEffect(() => {
    const { tags } = tagsState
    const countNewTags = tags.filter(t => t.status === 'new').length
    const countTotal = tags.length
    dispatch(setPageHeader("Tags", `Tags (${countNewTags}/${countTotal})`))
  })

  function handleSubmit(name) {
    dispatch(createTag(name))
  }

  return (
    <>
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          Tags
        </Typography>
        <TagForm handleSubmit={handleSubmit}/>

        <UITagList items={visibleTags}/>
      </div>

      <div>
        <TagsFilter/>
      </div>

    </>
  )
}
