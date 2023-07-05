import bcrypt from 'bcryptjs';

export async function hash(password: string) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}