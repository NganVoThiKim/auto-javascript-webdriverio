let userAccount = {
    username: "user1",
    password: "pass123",
    role: "User"
};
console.log(`Username: ${userAccount.username}, \nRole: ${userAccount.role}`);
userAccount.role = "Manager";
console.log(`Username: ${userAccount.username}, Role: ${userAccount.role}`);    
