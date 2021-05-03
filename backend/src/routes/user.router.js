// class UserRoutes {
//   constructor({ userRouter }) {
//     this.userRouter = userRouter
            
//   }
  
//   regiterRoutes(){

//     const userRouter = this.userRouter
  
//     this.userRouter.get("/", (request, response) => {
//       console.log("AAAAA")
//       response.send("ACABAMOS DE CRER QUE TUDO É POSSÍVEL COM VONTADE E QUERER" )
//     })

//     return userRouter;
//   }
  
// }

// export default UserRoutes;

export default userRouter => {

  userRouter.get("/", (request, response) => {
    return response.json({message: "ACABAMOS DE CRER QUE TUDO É POSSÍVEL COM VONTADE E QUERER" })
  })

  return userRouter;
}