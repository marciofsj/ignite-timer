/* eslint-disable react/react-in-jsx-scope */
import { Outlet } from 'react-router-dom'
import { Header } from '../../components/header'
import { LayoutContainer } from './styles'

export function DefalutLayout () {
  return (
    <LayoutContainer>
        <Header/>
        <Outlet/>
    </LayoutContainer>
  )
}
