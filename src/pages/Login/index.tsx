import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/store'
import { loginAsync, tokenState } from './slice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const tokenStr = useAppSelector(tokenState)

	useEffect(() => {
		dispatch(loginAsync())
	})
	useEffect(() => {
		if (tokenStr) {
			navigate('/')
		}
	}, [tokenStr, navigate])
	return <div>login...</div>
}
