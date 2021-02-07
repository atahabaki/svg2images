const processAnimation = (element, framerate, duration) => {
	element.pauseAnimations();
	element.setCurrentTime(0);

	let frame = 0;
	setInterval(() => {
		const time = frame/framerate;
		if (time > duration) {
			'stopAnimation' in window && stopAnimation();
			return;
		}
		element.setCurrentTime(time);
		'takeFrame' in window && takeFrame();
		frame++;
	},1000)
}
