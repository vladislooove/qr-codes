const express = require('express');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');

const app = express();
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('You can read or write qr codes')
});

app.post('/create', (req, res) => {

    QRCode.toDataURL(req.body.data, { errorCorrectionLevel: 'L', version: 10 })
    .then(url => {
        res.send(url)
    })
    .catch(err => {
        res.send(err)
    })
});

app.listen(8080, () => {
    console.log('server is running on 8080 port')
})