import React, { useEffect, useState } from 'react';
import { WindowHeader, Window, Toolbar, WindowContent, Button, Panel } from 'react95';

export function AppWindow () {
  const useDrag = require('react-use-gesture').useDrag
	const { useSpring, animated } = require('react-spring')
	const [{x, y}, set] = useState({ x: 0, y: 0 })
  // const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement: [mx, my] }) => {
		set({ x: mx, y: my })
  })

	return <animated.div style={{ position: 'absolute', left: x, top: y, touchAction: 'none' }} ><Window resizable className='window'>
			<WindowHeader {...bind()} className='window-header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<div style={{ marginLeft: '3px' }}>react95.exe</div>
				<Button>
					X
				</Button>
			</WindowHeader>
			<Toolbar>
				<Button variant='menu' size='sm'>
					File
				</Button>
				<Button variant='menu' size='sm'>
					Edit
				</Button>
				<Button variant='menu' size='sm' disabled>
					Save
				</Button>
			</Toolbar>
			<WindowContent>
				<p>
					When you set &quot;resizable&quot; prop, there will be drag handle in
					the bottom right corner (but resizing itself must be handled by you
					tho!)
				</p>
			</WindowContent>
			<Panel variant='well' className='footer'>
				Put some useful informations here
			</Panel>
		</Window>
	</animated.div>
}
