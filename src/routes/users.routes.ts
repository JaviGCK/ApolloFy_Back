import { Router } from 'express'

const usersRouter: Router = Router();

usersRouter
    .post("/", createUser)
    .get("/", getAllUsers)
    .get("/:userEmail", getUserByEmail)
    .put("/:userEmail", updateUser)
    .delete("/:userEmail", deleteUser)

export default usersRouter