import React, { useEffect, useState } from 'react'
import { useDispatch } from 'redux-react-hook'
import Typography from '@material-ui/core/Typography'
import { UITagList } from '../../components/tags/UITagList'
import { TagForm } from '../../components/tags/TagForm'
import { createTag } from '../../actions/tags'
import { useTags } from '../../hooks/useReducer'
import { TagsFilter } from './TagsFilter'
import { setPageHeader } from '../../actions/page'
import type { TagsState } from '../../repository/tag/types'
import { getTagIds, getVisibleTags } from '../../repository/tag/selectors'
import { TagRepository } from '../../repository/tag/repository'

export function Tags() {
  const tagsState: TagsState = useTags()

  const dispatch = useDispatch()

  const allTagIds = getTagIds(tagsState)
  const visibleTags = getVisibleTags(tagsState)
  const [header, setHeader] = useState("")

  const {loading} = tagsState

  useEffect(() => {
    const countNewTags = visibleTags && visibleTags.length
    const countTotal = allTagIds && allTagIds.length
    setHeader(`Tags (${countNewTags}/${countTotal})`)
    dispatch(setPageHeader(header, header))
  }, [allTagIds,visibleTags])

  useEffect( ()=>{
    dispatch(TagRepository.TAG.FIND_ALL.trigger())
  }, [])

  function handleSubmit(name) {
    // TODO: dispatch(createTag(name))
  }

  return (
    <>
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          {header}
        </Typography>
        <TagForm handleSubmit={handleSubmit}/>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <UITagList items={visibleTags}/>
        )}

      </div>

      <div>
        <TagsFilter/>
      </div>

    </>
  )
}
