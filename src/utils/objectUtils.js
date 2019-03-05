// @flow
export const EMPTY = undefined

export function getIn(entity: any, arr: Array<string>) {
  if (!entity) return EMPTY

  let node = entity
  arr.filter(col => col !== null)
  .forEach(key => {
      if (typeof key === 'number'){
        if (!Array.isArray(node) || !node.length){
          // not an array
          return EMPTY
        }
        node = node[key]
      }
      else{
        node = node[key]
      }

      if (!node) return EMPTY
      return true
    }
  )


  return node
}
