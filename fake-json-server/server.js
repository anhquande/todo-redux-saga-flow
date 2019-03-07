const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const server = jsonServer.create()
const router = jsonServer.router('./database.json')
const userdb = JSON.parse(fs.readFileSync('./auth/users.json', 'UTF-8'))

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use(jsonServer.defaults())
server.use('/auth/api', router)

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({username, password}){
  return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
}

function findUserByUsername(username){
  return userdb.users.find(user => (user.username === username))
}

server.post('/auth/login', (req, res) => {

  const {username, password} = req.body
  console.log(`Authenticate ${username}, ${password}`)
  if (isAuthenticated({username, password}) === false) {
    const status = 401
    const message = 'Incorrect email or password'
    res.status(status).json({status, message})
    return
  }
  const token = createToken({username, password})
  const user = findUserByUsername(username)
  res.status(200).json({token, user})
})

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  next()
  /*
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({status, message})
    return
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1])
    next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({status, message})
  } */
})

const port  = 8080
server.listen(port, () => {
  console.log(`Run Auth API Server on port ${port}`)
})
