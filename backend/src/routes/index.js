import userRoutes from './user.router'

const collectionRouter = [{
  key: "/user",
  router: userRoutes
}]

export default router => {
  
  collectionRouter.forEach((routerItem) => {
    router.use(routerItem.key, routerItem.router(router))
  })

    
  return router;
}