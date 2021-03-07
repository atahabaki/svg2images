const puppeteer = require('puppeteer');
const { program } = require('commander');
const path = require("path");

program
	.option("-i, --input [string]", "Input file, html", "./examples/index.html")
	.option("-w, --width [int]", "Width of the browser", "1080")
	.option("-h, --height [int]", "Height of the browser", "1920")
	.option("-f, --framerate [int]", "Frame rate of the ")
	.option("-s, --start [int]", "Start frame", "60")
	.option("-e, --end [int]", "End frame", "60")
	.option("-o, --output [string]", "Output folder", "./output")
	.option("-n, --naming [string]", "Output naming", "output%05d.png");

program.parse(process.argv);

const options = program.opts();

console.log(options);

(async () => {
	const browser = await puppeteer.launch({
		defaultViewport: {
			width: parseInt(options.width),
			height: parseInt(options.height)
		}
	});
	const page = await browser.newPage();
	let frame = parseInt(options.start); //start_frame;

	await page.exposeFunction('takeFrame', async () => {
		if (frame === parseInt(options.end)) {
			process.exit(0)
		}
		let arr1 = options.naming.split('%');
		let constant = arr1[0]; //first part
		let arr2 = arr1[1].split(".");
		let replacement = arr2[0][0];
		let much = arr2[0][1];
		let extension = arr2[1];
		let file_path = `${options.output}/${constant}${String(frame).padStart(much,replacement)}.${extension}`;
		await page.screenshot({path:file_path});
		console.log(file_path,frame);
		frame++;
	});
	await page.exposeFunction('stopAnimation', async () => process.exit(0));
	// open input_file URL
	if (options.input.startsWith("./")) {
		let input = path.join(`/${__dirname}/`,options.input.substr(2));
		console.log(input,__dirname);
		await page.goto(`file://${input}`);
	}
	else 
		await page.goto(options.input);
	//await browser.close();
})();

