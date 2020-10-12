const processVars = process.env
const jwt = processVars.JWT_SECRET
const mongoLabDB = processVars.MONGODB_URI

export const config = {
  basePath: '/api',
  versioning: '/v1',
  dbUrl: mongoLabDB,
  log: {
    logs: false,
    error: true
  },
  secrets: {
    jwt,
    jwtExp: '100d'
  }
}
