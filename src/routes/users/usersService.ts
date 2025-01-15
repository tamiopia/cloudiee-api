// import { User } from '../../entities/user.entitiy';

// export class UserService {
//     static async getAllUsers() {
//         try {
//             return await User.find();
//         } catch (error) {
//             throw new Error('Error retrieving users');
//         }
//     }

//     static async getUserById(id: number) {
//         try {
//             const user = await User.findOne({ where: { id } });
//             if (!user) throw new Error('User not found');
//             return user;
//         } catch (error) {
//             throw new Error(error.message);
//         }
//     }

//     static async createUser(data: Partial<User>) {
//         try {
//             const user = User.create(data);
//             await user.save();
//             return user;
//         } catch (error) {
//             throw new Error('Error creating user');
//         }
//     }

//     static async updateUser(id: number, data: Partial<User>) {
//         try {
//             const user = await User.findOne({ where: { id } });
//             if (!user) throw new Error('User not found');

//             Object.assign(user, data);
//             await user.save();
//             return user;
//         } catch (error) {
//             throw new Error(error.message);
//         }
//     }

//     static async deleteUser(id: number) {
//         try {
//             const user = await User.findOne({ where: { id } });
//             if (!user) throw new Error('User not found');

//             await user.remove();
//             return { message: 'User deleted successfully' };
//         } catch (error) {
//             throw new Error(error.message);
//         }
//     }
// }
