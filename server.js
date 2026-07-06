const express = require('express')
const morgan = require('morgan')

const app = express()

const inventory = [
            { name: 'Candle', qty: 4 },
            { name: 'Cheese', qty: 10 },
            { name: 'Phone', qty: 1 },
            { name: 'Tent', qty: 0 },
            { name: 'Torch', qty: 5 }
        ]

app.use(morgan('dev'))

app.get('/', function(req, res){
    res.render('home.ejs', {
        title: 'Home Page',
        user: 'Nabila',
        msg: 'Here is your inventory',
        player: {
            name: 'dude',
        },
        inventory: inventory,
    })
})

app.get('/:itemId', function(req, res){
    const index = req.params.itemId
    res.render('show.ejs', {
        inventoryItem: inventory[index],
        title: inventory[index].name
    })
})


app.listen(3000, function(){
    console.log('Listening on port 3000 😩')
})