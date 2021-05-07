const { Router } = require("express");

const userRouter = Router();

userRouter.get("/", (request, response) => {
  response.json({ message: "Teste de aplicação serveless" });
});

module.exports = userRouter;
