import { Outlet, useNavigate } from 'react-router-dom'
import MenuTree from './menu'
import { tokenState } from '../Login/slice'
import { useAppSelector } from '@/hooks/store'
import { useEffect } from 'react'

export default function Layout() {
	const navigate = useNavigate()
	const cacheToken = useAppSelector(tokenState)

	useEffect(() => {
		if (!cacheToken) {
			navigate('/login')
		}
	}, [cacheToken, navigate])
	return (
		<div className='layout'>
			<div className='header'>
				<div className='logo'>React</div>
				<div className='userinfo'>admin</div>
			</div>
			<div className='content'>
				<div className='menu'>
					<MenuTree />
				</div>
				<div className='body'>
					<Outlet />
				</div>
			</div>
		</div>
	)
}
