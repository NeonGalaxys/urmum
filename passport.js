const passport = require('passport')
const { Strategy } = require('passport-discord')

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((
    done(null, obj)
))

passport.use(new Strategy({
    clientID: "1111710966569254983",
    clientSecret: "pLlTC53MlGcZDqtmHrUvffntFBTN4JZr",
    callbackURL: "http://localhost:3000/login",
    scope: [identify]
}, (accestoken, refreshtoken, profile, cb) => {
    process.nextTick(() => {
        return cb(null, profile)
    })
}))

module.exports = passport