import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@examople.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@examople.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane",
    email: "jane@examople.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
