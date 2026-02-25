function loginUser(username: string, password: string): boolean {
  return username === "admin" && password === "1234";
}

console.log(loginUser("admin", "1234"));
console.log(loginUser("aDmin", "1234"));
console.log(loginUser("admin", "1034"));
console.log(loginUser("admin", "12345"));
