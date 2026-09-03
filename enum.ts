// enum

// type unionTYpe = "Admin" | "User" ;
enum Role {
  Admin = "ADMIN",
  User=1,
  Guest="GUEST",
}
let role = Role.User;
console.log(role);
