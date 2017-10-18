const express = require('express')

const port = process.env.PORT || 8080
const basedir = __dirname + '/public'

const app = express()
const isProd = process.env.NODE_ENV === 'production'

// HTML5 pushState: serve static files or index.html for everything else
app.use(express.static(basedir))
if(!isProd) { // Add vuetify for debug with source map
    app.use(express.static(__dirname+'/node_modules/vuetify'))
}

app.get('*', (req, res) => res.sendFile('index.html', { root: basedir }))

// Start listening
app.listen(port)
console.log(`Server started at port http://localhost:${port}/`)