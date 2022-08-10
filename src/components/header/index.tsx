/* eslint-disable react/react-in-jsx-scope */
import { HeaderContainer } from './styles'

import igniteLogo from '../../assets/ignite-logo.svg'
import scroll from '../../assets/scroll-bold.svg'
import timer from '../../assets/timer-bold.svg'
import { NavLink } from 'react-router-dom'

export function Header () {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />
      <nav>
        <NavLink to="/">
          <img src={timer} title="Timer" />
        </NavLink>
        <NavLink to="/history">
          <img src={scroll} title="Histórico" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
