// a.create a mock database
const mockDatabase = [
  { id: 1, name: "sok" },
  { id: 2, name: "sao" },
  { id: 3, name: "pisey" },
];
//b. write a function that could get userinfo
function getUserInfo(userId, idSearch, callback) {
  if (userId[idSearch] === undefined) {
    console.log("error");
  }
  else{
    setTimeout(() => callback(userId[idSearch]), 2000);
  }
}
//c. write a function that could process the user data by capitalizing
function capitalizing(userId, idSearch, callback) {
  setTimeout(() => callback(userid[idSearch].name.tiUpperCase()), 1500);
}
//d.execute and process example b & c and console
const idSearch = 0;

getUserInfo(mockDatabase, idSearch, (message) => {
  console.log(message);
  capitalizing(mockDatabase, idSearch, (message) => {
    console.log(message);
  });
}); 

