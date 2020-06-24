const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }   

app.all('/', async (req, res) => {
    console.log(req)
    console.log("Waiting");

    await sleep(10000);

    console.log("Waiting done");
    res.status(200).send({status: "OK"})
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))