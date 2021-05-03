import express, { Router } from 'express';
import executeRoutes from './routes' 

class Application {
  constructor(){
    this.server = express()
    this.router = Router()
    
    this.applyRouter();

  }

  applyRouter(){
    const generationRoutes = executeRoutes(this.router);
            
    this.server.use(generationRoutes)
    
  }

  middlewares(){
    this.server.use(express.json)
  }

}

export default Application;