// import { Request, Response } from 'express';
// import { UserService } from './usersService';

// export class UserController {
//     static async getAllUsers(req: Request, res: Response) {
//         try {
//             const users = await UserService.getAllUsers();
//             res.json(users);
//         } catch (error) {
//             const err = error as Error;
//             res.status(500).json({ message: err.message });
//         }
//     }

//     static async getUserById(req: Request, res: Response) {
//         try {
//             const user = await UserService.getUserById(parseInt(req.params.id));
//             res.json(user);
//         } catch (error) {
//             const err = error as Error;
//             res.status(404).json({ message: err.message });
//         }
//     }

//     static async createUser(req: Request, res: Response) {
//         try {
//             const user = await UserService.createUser(req.body);
//             res.status(201).json(user);
//         } catch (error) {
//             const err = error as Error;
//             res.status(500).json({ message: err.message });
//         }
//     }

//     static async updateUser(req: Request, res: Response) {
//         try {
//             const user = await UserService.updateUser(parseInt(req.params.id), req.body);
//             res.json(user);
//         } catch (error) {
//             const err = error as Error;
//             res.status(404).json({ message: err.message });
//         }
//     }

//     static async deleteUser(req: Request, res: Response) {
//         try {
//             const message = await UserService.deleteUser(parseInt(req.params.id));
//             res.json(message);
//         } catch (error) {
//             const err = error as Error;
//             res.status(404).json({ message: err.message });
//         }
//     }
// }
