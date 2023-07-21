import {
  PrismaClient,
  User,
  MainLink,
  CustomLink,
  Category
} from '@prisma/client';

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

export interface MainLinkModel extends MainLink{}
export interface CustomLinkModel extends CustomLink{}
export interface CategoryModel extends Category{}

export interface UserModel extends User{}
export interface ProfileModel extends User{
  customLinks: CustomLinkModel[];
  mainLinks: MainLinkModel[];
  categories: CategoryModel[]
}

export interface CategoriesProps {
  categories: CategoryModel[]
}

export interface CustomLinksProps {
  customLinks: CustomLinkModel[];
}

export interface MainLinksProps {
  mainLinks: MainLinkModel[];
}

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

export async function getUserByUsername(username: string): Promise<ProfileModel | null> {

  let user: User | null = null;

  user = await prisma.user.findUnique({
    include: {
      mainLinks: true,
      customLinks: true,
      categories: true,
    },
    where: {
      username
    } 
  });

  if(user) {
    return user as ProfileModel;
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

