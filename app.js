const puppeteer = require('puppeteer');
const { program } = require('commander');

program
	.option("-i, --input", "Input file, html", "./index.html")
	.option("-w, --width", "Width of the browser", "800")
	.option("-h, --height", "Height of the browser", "600")
	.option("-f, --framerate", "Frame rate of the ")
	.option("-d, --duration", "Animation duration", "3")
	.option("-s, --start", "Start frame", "0")
	.option("-e, --end", "End frame", "60")
	.option("-o, --output", "Output folder", "./output")
	.option("-n, --naming", "Output naming", "%05d.png")

(async () => {
	const browser = await puppeteer.launch({
		defaultViewport: {
			width: width,
			height: height
		}
	});
	const page = await browser.newPage();
	let frame = start_frame;
	await page.exposeFunction('takeFrame', async () => {
		let path = `part0/${String(frame).padStart(5,'0')}.png`;
		await page.screenshot({path:path});
		console.log(path,frame);
		frame++;
	});
	await page.exposeFunction('stopAnimation', async () => process.exit(0));
	// open input_file URL
	await page.goto(input_file);
	//await browser.close();
})();

