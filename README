# EffectNode

```jsx
import { AutoWire } from 'effectnode'
export function Demo () {
	const wires = useMemo(() => {
		return new AutoWire()
	}, [])

	return <div className="flex w-full">
		<div>
			<Clicker output={wires.lok}></Clicker>
			<Display input={wires.lok}></Display>
			<Display input={wires.lok}></Display>
			<Display input={wires.lok}></Display>
			<Display input={wires.lok}></Display>
		</div>
		<div>
			<Clicker output={wires.lok2}></Clicker>
			<Display input={wires.lok2}></Display>
			<Display input={wires.lok2}></Display>
			<Display input={wires.lok2}></Display>
			<Display input={wires.lok2}></Display>
		</div>
	</div>
}

function Clicker ({ output }) {
	return <div className=" p-3" onClick={() => {
		output.emit('rand', { rand: (Math.random() * 100).toFixed(0) })
	}}>
		Click me
	</div>
}

function Display ({ input }) {
	const [rand, setRand] = useState(false)
	useEffect(() => {
		return input.on('rand', ({ rand }) => {
			setRand(rand)
		})
	}, [])

	return <div className={' p-2'}>
		{rand}
	</div>
}
```
