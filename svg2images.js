const processAnimation = (element, framerate, totalDuration) => {
    element.pauseAnimations();
    element.setCurrentTime(0);

    const totalFrames = framerate * totalDuration;
    let frame = 0;
    setInterval(()=>{
        const time = frame / framerate;
        if (time>totalDuration) {
            'stopAnimation' in window && stopAnimation();
            return;
        }
        element.setCurrentTime(time);
        console.log(time,frame);
        'takeFrame' in window && takeFrame();
        frame++;
    },1000);
}