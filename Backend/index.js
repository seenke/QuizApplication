var express = require ('express');
var history = require('connect-history-api-fallback');
const PORT = process.env.PORT || 3000;

var app = express ();
const static = express.static('../Frontend/dist');

app.use (static);

app.use(history({
    index: '../Frontend/dist/index.html'
}));

app.use(static);


app.listen(PORT , () => {
    console.log ("Server up and running on port " + PORT);
})

