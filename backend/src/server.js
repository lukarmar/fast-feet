import Application from './app' 

const application = new Application()


application.server.listen(9000, () => {
  console.log("Server run in port 9000")
})