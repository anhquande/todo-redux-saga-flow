import { useEffect } from 'react'
import { useDispatch } from 'redux-react-hook'
import { setDesktopView, setMobileView } from '../actions/layout'

const MOBILE_VIEW_THRESHOLD = 780

export function useResponsive() {
  const dispatch = useDispatch()
  const windowResizeHandler = (event) => {
    const width = document.body.clientWidth
    if (width<MOBILE_VIEW_THRESHOLD){
      dispatch(setMobileView())
    }
    else{
      dispatch(setDesktopView())
    }

  }



  useEffect( ()=> {
    window.addEventListener('resize', windowResizeHandler)

    return () => {
      window.removeEventListener('resize', windowResizeHandler)
    }
  })
}
