export const config = {
  basePath: '/api',
  versioning: '/v1',
  port: 3000,
  dbUrl: 'mongodb://localhost:27017/api-design',
  log: {
    logs: true,
    error: true
  },
  secrets: {
    jwt: 'super',
    jwtExp: '100d'
  }
}
