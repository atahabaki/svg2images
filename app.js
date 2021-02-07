const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch({
		defaultViewport: {
			width: 1080,
			height: 1920
		}
	});
	const page = await browser.newPage();
	let frame = 60;
	await page.exposeFunction('takeFrame', async () => {
		let path = `part0/${String(frame).padStart(5,'0')}.png`;
		await page.screenshot({path:path});
		console.log(path,frame);
		frame++;
	});
	await page.exposeFunction('stopAnimation', async () => process.exit(0));
	await page.goto(`file:///${__dirname}/examples/index.html`);
	//await browser.close();
})();
