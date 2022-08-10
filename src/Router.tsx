/* eslint-disable react/react-in-jsx-scope */
import { Route, Routes } from 'react-router-dom'
import { DefalutLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'

export function Router () {
  return (
    <Routes>
        <Route path='/' element={<DefalutLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/history' element={<History/>}/>
        </Route>
    </Routes>
  )
}
