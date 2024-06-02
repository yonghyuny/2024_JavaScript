const users = [
  { id: 1, name: `Alice`, age: 25 },
  { id: 2, name: `Bob`, age: 30 },
  { id: 3, name: `Charlie`, age: 35 },
];

// 1. renaming
const a = users.map(({ id: userId, name: userName, age: userAge }) => ({
  userId,
  userName,
  userAge: userAge + 1,
}));

console.log(a);
