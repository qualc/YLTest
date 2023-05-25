import React, { lazy } from 'react'
import { Routes, HashRouter, Route } from 'react-router-dom'

import Layout from './pages/Layout'
import { Provider } from 'react-redux'
import store from './store'

const Login = lazy(() => import('@/pages/Login/index'))
const Demo = lazy(() => import('@/pages/Demo'))

export default function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<Routes>
					<Route path='/' element={<Layout />}>
						<Route index path='menu1/child1' element={<Demo />} />
						<Route path='menu1/child2' element={<Demo />} />
						<Route path='menu2/child1' element={<Demo />} />
						<Route path='menu2/child2' element={<Demo />} />
					</Route>
					<Route path='/login' element={<Login />} />
				</Routes>
			</HashRouter>
		</Provider>
	)
}
