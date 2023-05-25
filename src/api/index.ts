interface Res<T> {
	code: number
	content: T
}

export interface UserInfo {
	token: string
}
export interface LeftMenuItem {
	id: number
	label: string
	key: string
	permission: string
	children?: LeftMenuItem[]
}

export const login = (): Promise<Res<UserInfo>> => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve({
				code: 200,
				content: { token: 'xxxxxxxxx' }
			})
		}, 500)
	})
}

export const getMenuTree = (): Promise<Res<LeftMenuItem[]>> =>
	Promise.resolve({
		code: 200,
		content: [
			{
				id: 1,
				label: '菜单1',
				key: '/menu1',
				permission: 'menu1',
				children: [
					{
						id: 2,
						label: '菜单1-1',
						key: '/menu1/child1',
						permission: 'menu1/child1'
					},
					{
						id: 3,
						label: '菜单1-2',
						key: '/menu1/child2',
						permission: 'menu1/child2'
					}
				]
			},
			{
				id: 4,
				label: '菜单2',
				key: '/menu2',
				permission: 'menu2',
				children: [
					{
						id: 5,
						label: '菜单2-1',
						key: '/menu2/child1',
						permission: 'menu2/child1'
					},
					{
						id: 6,
						label: '菜单2-2',
						key: '/menu2/child2',
						permission: 'menu2/child2'
					}
				]
			}
		]
	})
