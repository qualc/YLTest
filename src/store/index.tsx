import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

// import counterReducer from './features/counter/counterSlice'

import LoginReducer from '@/pages/Login/slice'

export function makeStore() {
	return configureStore({
		reducer: {
			login: LoginReducer
		}
	})
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store
