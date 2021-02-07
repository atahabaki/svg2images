const puppeteer = require('puppeteer');

function exportToFrames(input_file,output_directory,start_frame=0,width=1080,height=1920) {
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
}
