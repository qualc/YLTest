import { useAppSelector } from '@/hooks/store'
import { currentMenuState, updateLeftMenuItem } from '../Login/slice'
import { useEffect, useState } from 'react'
import { Button, Input } from 'antd'
import styles from './index.module.scss'
import store from '@/store'
export default function Menu1Child1() {
	const currentMenu = useAppSelector(currentMenuState)
	const [value, setValue] = useState<string>('')

	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const onSubmit = () => {
		const menu = { ...currentMenu! }
		menu.label = value
		store.dispatch(updateLeftMenuItem(menu))
	}
	useEffect(() => {
		currentMenu && setValue(currentMenu?.label)
	}, [currentMenu])

	return (
		<div className={styles.root}>
			<Input value={value} onChange={onChangeInput} />
			<Button type='primary' onClick={onSubmit}>
				保存
			</Button>
		</div>
	)
}
