import server from 'express';

const app = server()
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/get-user', (req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'vary,content-encoding,date,server,content-length,x-custom-header'
    });

    res.json({
        firstName: 'Aleksey',
        lastName: 'Ivasyuta'
    })
})

app.options('/get-user',(req, res) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'vary,content-encoding,date,server,content-length,x-custom-header'
    });

    res.send('OK')
})

app.listen(port, function () {
    console.log('Example app listening on port ' + port + '!');
});
