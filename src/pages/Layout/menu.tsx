import { LeftMenuItem } from '@/api'
import { useAppSelector } from '@/hooks/store'
import { menuState, setLeftMenuItem } from '@/pages/Login/slice'
import store from '@/store'
import { Menu, MenuProps } from 'antd'
import { useNavigate } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

const cacheMenu: { [key: string]: LeftMenuItem } = {}
function getItem(label: React.ReactNode, key: React.Key, children?: MenuItem[], type?: 'group'): MenuItem {
	return {
		key,
		icon: undefined,
		children,
		label,
		type
	} as MenuItem
}

export default function MenuTree() {
	const navigate = useNavigate()
	const menuList = useAppSelector(menuState)
	const onClick: MenuProps['onClick'] = (e) => {
		store.dispatch(setLeftMenuItem(cacheMenu[e.key]))
		navigate(e.key)
	}
	const items: MenuProps['items'] = menuList.map((item) => {
		const child = item.children?.length
			? item.children.map((citem: any) => {
					cacheMenu[citem.key] = citem
					return getItem(citem.label, citem.key)
			  })
			: undefined
		return getItem(item.label, item.key, child)
	})
	return (
		<Menu
			onClick={onClick}
			theme={'dark'}
			style={{ width: 206 }}
			defaultSelectedKeys={['1']}
			defaultOpenKeys={['sub1']}
			mode='inline'
			items={items}
		/>
	)
}
