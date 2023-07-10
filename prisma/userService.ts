import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export type createUserParams = {
  username: string | null;
  password: string | null; 
  email: string; 
}

export type getUserByCredentialsParams = {
  username: string | null;
  email: string | null; 
}

export interface UserModel extends User{}

// Create a new user
export async function createUser(userData: createUserParams): Promise<UserModel> {
  const user: User = await prisma.user.create({data: {
    "username": userData.username,
    "password": userData.password,
    "email": userData.email,
  }});
  return user;
}

// Retrieve a user by ID
export async function getUserByUsernameOrEmail(userData: getUserByCredentialsParams): Promise<UserModel | null> {
  const { username, email } = userData;

  let user: User | null = null;

  if(username) {
    user = await prisma.user.findUnique({
      where: {
        username
      } 
    });
  }

  if(email) {
    user = await prisma.user.findUnique({
      where: {
        email
      } 
    });
  }

  if(user) {
    return user as UserModel;
  }
  return null;
}

// Update a user by ID
export async function updateUser(userId: number, userData: Partial<User>): Promise<User | null> {
  const user = await prisma.user.update({ where: { id: userId }, data: userData });
  return user;
}

// Delete a user by ID
export async function deleteUser(userId: number): Promise<User | null> {
  const user = await prisma.user.delete({ where: { id: userId } });
  return user;
}

