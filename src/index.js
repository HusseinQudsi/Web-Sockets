import { bootstrap, setUpSocket, startServer } from './server/server'

const applicationConfig = bootstrap()
setUpSocket(applicationConfig)
startServer(applicationConfig)
