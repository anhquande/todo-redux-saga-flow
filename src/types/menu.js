// @flow

export type MenuItemModel = {
  +id:string,
  +title: string,
  subTitle: string,
  tooltip: string,
  icon: string,
  active: boolean,
  badge:number,
  badgeVisible:boolean,
  to:string,
  visible:boolean,
  visibleOnDesktop:boolean,
  visibleOnMobile:boolean,
  event:Event
}

export type MenuModel = Array<MenuItemModel>

export function createTextMenuItem(id,title, icon, to):MenuItemModel {
  return {
    id,
    title,
    subTitle: '',
    tooltip: title,
    icon,
    active:false,
    badge:0,
    badgeVisible:false,
    to,
    visible:true,
    visibleOnDesktop:true,
    visibleOnMobile:true,
    event:null,
  }
}

export function createIconOnlyMenuItem(id,tooltip, icon, to, {...params}):MenuItemModel {
  return {
    id,
    title:'',
    subTitle: '',
    tooltip,
    icon,
    active:false,
    badge:0,
    badgeVisible:false,
    to,
    visible:true,
    visibleOnDesktop:true,
    visibleOnMobile:true,
    event:null,
    ...params
  }
}
