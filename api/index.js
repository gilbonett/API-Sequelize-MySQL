const express = require('express')
const routes = require ('./routes')

const app = express()
const port = process.env.PORT || 8080;
routes(app)

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

module.exports = app