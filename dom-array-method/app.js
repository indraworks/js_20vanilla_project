const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionBtn = document.getElementById('show-millionares');
const sortBtn = document.getElementById('sort');
const calcWealthBtn = document.getElementById('calc-wealth');

//fecth data

getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  const user = data.results[0];
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
  };
  console.log(newUser);
}
