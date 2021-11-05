const puppeteer = require('puppeteer')

;(async () => {
	const browser = await puppeteer.launch()
	const page = await browser.newPage()
	await page.goto('https://ajdinlojic.netlify.app/', {
		waitUntil: 'networkidle2',
	})
	await page.pdf({
		format: 'a3',
		path: './pdf_page.pdf',
		printBackground: true,
	})
	await browser.close()
})()
