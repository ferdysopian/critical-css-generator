const penthouse = require('penthouse')
const fs = require('fs')

const url = 'https://google.com/' // Replace with the URL of your webpage
const cssInput = 'style.css' // Replace with the path to your CSS file
const isFile = cssInput.endsWith('.css') // Check if it's a file path

const viewports = [
    { width: 414, height: 896, output: 'output-critical-mobile.css' }, // Mobile viewport
    { width: 1920, height: 1080, output: 'output-critical-desktop.css' }, // Desktop viewport
]

const penthousePromises = viewports.map((viewport) => {
    const penthouseOptions = {
        url,
        [isFile ? 'css' : 'cssString']: cssInput,
        width: viewport.width,
        height: viewport.height,
        keepLargerMediaQueries: true,
        timeout: 60000,
        blockJSRequests: false,
        renderWaitTime: 5000,
    }

    return penthouse(penthouseOptions)
        .then((criticalCss) => {
            fs.writeFileSync(viewport.output, criticalCss)
            console.log(`Critical CSS for ${viewport.width}x${viewport.height} generated and saved to ${viewport.output}`)
        })
        .catch((err) => {
            console.error(`Error generating critical CSS for ${viewport.width}x${viewport.height}:`, err)
        })
})

Promise.all(penthousePromises)
    .then(() => {
        console.log('Critical CSS generation completed.')
    })
    .catch((err) => {
        console.error('Error generating critical CSS:', err)
    })
