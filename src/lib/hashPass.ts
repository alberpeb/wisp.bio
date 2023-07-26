const bcrypt = require('bcryptjs');

export async function hash(password: string) {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}

export async function compare(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}
