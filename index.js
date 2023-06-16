const express = require('express')
const app = express
const session = require('express-session')
const passport = require('passport')

// Settings
app.set('port', process.env.PORT || 3000) // fixing
// ^^^ that shit is broke af, it gives a "TypeError: app.set is not a function"
// Engine

// MiddLewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: "logindiscord",
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


// Static Files

// Routes
app.get('/', function (req, res) {
    res.send('Hello world')
})
app.use("/login", (req, res) => {
 res.json({datos: "hola"})
})
app.use("/perfil", (req, res) => {

})

app.listen(app.get('port'), () => {
    console.log('server in port', app.get('port'))
});

