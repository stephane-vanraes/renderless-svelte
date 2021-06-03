export default function(carousel, {
	direction = 'next',
	interval = 2000,
	playing = false
} = {}) {
	let timeout
	
	function loop() {
		setTimeout(() => {
			carousel.controls[direction]()
			playing && loop()
		}, interval)
	}
	
	playing && play()
	
	return {
		start: () => (playing = true, loop()),
		stop: () => (playing = false, clearTimeout(timeout)),
		setInterval: val => interval = val
	}
}