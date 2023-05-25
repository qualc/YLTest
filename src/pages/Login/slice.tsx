import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { message } from 'antd'
import { AppState } from '@/store'
import { getMenuTree, login, LeftMenuItem } from '@/api'

export interface LoginState {
	menu: LeftMenuItem[]
	token: string
	currentMenu: LeftMenuItem | undefined
}

const initialState: LoginState = {
	menu: [],
	token: '',
	currentMenu: undefined
}

export const loginAsync = createAsyncThunk('login', async () => {
	const userRes = await login()
	const menuRes = await getMenuTree()
	return { menu: menuRes.content, token: userRes.content.token }
})

export const counterSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setLeftMenuItem(state, action: PayloadAction<LeftMenuItem>) {
			state.currentMenu = { ...action.payload }
		},
		updateLeftMenuItem(state, action: PayloadAction<LeftMenuItem>) {
			const menu = [...state.menu]
			state.menu = menu.map((item) => {
				item.children = item.children?.map((citem) =>
					citem.key === action.payload.key ? Object.assign({}, citem, action.payload) : citem
				)
				return item
			})
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginAsync.pending, (state) => {
				message.loading({
					content: '登陆中',
					key: 'login'
				})
			})
			.addCase(loginAsync.fulfilled, (state, action) => {
				const paylod = action.payload as {
					token: string
					menu: any[]
				}
				state.menu = paylod.menu
				state.token = paylod.token
				message.destroy('login')
			})
			.addCase(loginAsync.rejected, () => {
				message.destroy('login')
			})
	}
})

// 导出states
export const menuState = (state: AppState) => state.login.menu
export const tokenState = (state: AppState) => state.login.token
export const currentMenuState = (state: AppState) => state.login.currentMenu

export const { setLeftMenuItem, updateLeftMenuItem } = counterSlice.actions

export default counterSlice.reducer
