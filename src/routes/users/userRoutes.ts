// // import { Router } from "express";
// // import { UserController } from "./UserController";
// // import { authenticateJWT } from "../../middlewares/authenticateJWT";

// // const userRoutes = Router();



// // const userController = new UserController();

// // userRoutes.post("/",authenticateJWT,(req, res) => userController.createUser(req, res));
// // userRoutes.get("/", authenticateJWT,(req, res) => userController.getUsers(req, res));
// // userRoutes.get("/:id",authenticateJWT, (req, res) => userController.getUserById(req, res));
// // userRoutes.put("/:id", authenticateJWT,(req, res) => userController.updateUser(req, res));
// // userRoutes.delete("/:id", authenticateJWT,(req, res) => userController.deleteUser(req, res))

// // export default userRoutes;

// import { Router } from 'express';
// import { UserController } from './usersController';

// const userRoutes = Router();
// // const userController = new UserController();

// userRoutes.get('/', (req, res) => UserController.getAllUsers(req, res));
// userRoutes.get('/:id', (req, res) => UserController.getUserById(req, res));
// userRoutes.post('/', (req, res) => UserController.createUser(req, res));
// userRoutes.put('/:id', (req, res) => UserController.updateUser(req, res));
// userRoutes.delete('/:id', (req, res) => UserController.deleteUser(req, res));

// export default userRoutes;

