const express = require('express')
const app = express()

// Before the other routes
app.use(express.static("build"))

app.get("/", (req, res) => {
  res.send("<h1>hello aws</h1>")
})

// After all other routes
app.get('*', (req, res) => {
    res.sendFile('build/index.html');
  });

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))