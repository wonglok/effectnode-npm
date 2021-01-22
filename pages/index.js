import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { AutoWire } from '../libout/main.esm'

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

function Demo ({ wires }) {
	return <div className="flex w-full">
		<div>
			<Clicker output={wires.lok1}></Clicker>
			<Display input={wires.lok1}></Display>
			<Display input={wires.lok1}></Display>
			<Display input={wires.lok1}></Display>
		</div>
		<div>
			<Clicker output={wires.lok2}></Clicker>
			<Display input={wires.lok2}></Display>
			<Display input={wires.lok2}></Display>
			<Display input={wires.lok2}></Display>
		</div>
	</div>
}

export default function Home () {
	const wires = useMemo(() => new AutoWire(), [])

  return (
    <div className={''}>
      <Head>
        <title>Effect Node</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<div>
				<Demo wires={wires}></Demo>
			</div>
    </div>
  )
}
