
export function hasAccess(auth, hasAnyRole){
  if (hasAnyRole && hasAnyRole==="*"){
    return true
  }

  if (hasAnyRole) {
    if (hasAnyRole.includes("*")){
      return true
    }
    const myRoles = auth.grantedAuthorities
    if (myRoles){
      if (Array.isArray(hasAnyRole)){
        const match = hasAnyRole.filter(r=>myRoles.includes(r))
        if (match.length > 0){
          return true
        }
      }
    }
  }

  return false
}
