import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import { AutoWire } from '../libout/main.esm'
import styles from '../styles/Home.module.css'

function Clicker ({ output }) {
	return <div onClick={() => {
		output.emit('rand', { rand: (Math.random() * 100).toFixed(0) })
	}}>
		Click
	</div>
}

function Display ({ input }) {
	const [rand, setRand] = useState(false)
	useEffect(() => {
		return input.on('rand', ({ rand }) => { setRand(rand) })
	}, [])

	return <div>
		{rand}
	</div>
}

function Demo () {
	const wires = useMemo(() => {
		return new AutoWire()
	}, [])

	return <div className="w-full">
		<Clicker output={wires.lok}></Clicker>
		<Display input={wires.lok}></Display>
		<Display input={wires.lok}></Display>
		<Display input={wires.lok}></Display>
		<Display input={wires.lok}></Display>
		<Display input={wires.lok}></Display>
		<Display input={wires.lok}></Display>
	</div>
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
			<div>
				<Demo></Demo>
			</div>
    </div>
  )
}
