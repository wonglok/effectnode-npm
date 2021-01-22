import React, { useEffect, useState } from 'react';
import { List, ListItem, TextField, Button, Divider, Toolbar, AppBar, Select } from 'react95';
// import { useTheme } from 'styled-components';
import { ThemeList } from './Themes';
export function AppStarer ({ onProvdeThemeKey }) {
	const logoIMG = '/effectnode.svg'
	const [open, setOpen] = React.useState(false);
	const [init, setInit] = useState()
	const onChangeTheme = (v) => {
		localStorage.setItem('theme-value-effectnode', v.target.value)
		onProvdeThemeKey(v.target.value)
		setInit(v.target.value)
	}

	useEffect(() => {
		const item = localStorage.getItem('theme-value-effectnode')
		if (item) {
			onProvdeThemeKey(item)
			setInit(item)
		} else {
			localStorage.setItem('theme-value-effectnode', 'original')
			onProvdeThemeKey('original')
			setInit('original')
		}
	}, [])
	// onProvdeThemeKey('')

	return <AppBar>
		<Toolbar style={{ justifyContent: 'space-between' }}>
		<div style={{ position: 'relative', display: 'inline-flex' }}>
				<Button
					onClick={() => setOpen(!open)}
					active={open}
					style={{ fontWeight: 'bold' }}
				>
					<img
						src={logoIMG}
						alt='effect node logo'
						style={{ height: '20px', marginRight: 4 }}
					/>
					Start
				</Button>
				{open && (
					<List
						style={{
							position: 'absolute',
							left: '0',
							top: '100%'
						}}
						onClick={() => setOpen(false)}
					>
						<ListItem>
							<span role='img' aria-label='👨‍💻'>
								👨‍💻
							</span>
							Profile
						</ListItem>
						<ListItem>
							<span role='img' aria-label='📁'>
								📁
							</span>
							My account
						</ListItem>
						<Divider />
						<ListItem disabled>
							<span role='img' aria-label='🔙'>
								🔙
							</span>
							Logout
						</ListItem>
					</List>
				)}

				{/**/}
				<Button style={{ marginLeft: '4px' }}>
					✨ Verse
				</Button>
			</div>

			<div style={{ position: 'relative', display: 'inline-block' }}>
				{init && <Select
					options={ThemeList}
					menuMaxHeight={360}
					width={160}
					value={init}
					onChange={onChangeTheme}
					onOpen={e => console.log('open', e)}
					onClose={e => console.log('close', e)}
					onBlur={e => console.log('blur', e)}
					onFocus={e => console.log('focus', e)}
				/>}
			</div>

		</Toolbar>
	</AppBar>
}
