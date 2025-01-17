/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/

// ? would this not work? is there a way to make this work?
// function findUserByUsername(usersArray, username) {
//   return usersArray.find(function (val, key) {
//     return val[key] === username;
//   });
// }

function findUserByUsername(usersArray, username) {
  return usersArray.find(function (user) {
    return user.username === username;
  });
}

/*
Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

removeUser(users, 'akagen') // {username: 'akagen'}
removeUser(users, 'akagen') // undefined
*/

const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

function removeUser(usersArray, username) {
  // find index of username
  const rmIdx = usersArray.findIndex(function (user) {
    return user.username === username;
  });

  // if username does not exist return undefined
  if (rmIdx === -1) return;

  //remove username from the users array
  // return username removed
  return usersArray.splice(rmIdx, 1)[0];
}
