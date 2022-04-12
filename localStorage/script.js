console.log("hello");
localStorage.setItem("name", "Bob");
console.log(localStorage.getItem("name"));
// localStorage.removeItem('name')

sessionStorage.setItem("name", "amir");
sessionStorage.removeItem("name");
const time = new Date(2020, 0, 1).toUTCString();
console.log(time);
document.cookie = "name=amirA; expires=" + new Date(2023, 0, 1).toUTCString();
document.cookie = "name2=amir2; expires=" + new Date(9999, 0, 1).toUTCString();
document.cookie = "lastName=A_sara";

console.log(document.cookie );