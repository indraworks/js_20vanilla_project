/*
sudah di buat di html dan di css smua componentnya berikut tanda errronya 
nah kita buat SOMnya skarg info2 apa saja yg diuarkan 
kita gunakan DOM sbb
*/
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//nah stlah trisi kita liat jalankan aksinya lewat even yaitu dari submit
/*
kita cek dan validasi apakah ada yg udah keisi stlah submit ditekan di
tiap2 inputan

*/

const showError = (input, message) => {
  //input mewakili username atau element lain yg passing padanya
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  //ingat small adalah element bukan class atau id tapi element
  //utk itu mangil domnya pake queryselector
  const small = formControl.querySelector('small');
  small.visible = true;
  small.innerText = message;
};

const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};
form.addEventListener('submit', (e) => {
  e.preventDefault();

  //jika kosong
  if (username.value === '') {
    showError(inputname, 'username required');
  } else {
    showSuccess(username);
  }

  if (email.value === '') {
    showError(inputname, 'email required');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(inputname, 'password required');
  } else {
    showSuccess(password);
  }
  if (username2.value === '') {
    showError(inputname, 'username2 required');
  } else {
    showSuccess(username2);
  }
  //nah jadi gini parent dari input adalah form
  //nah utk tambah classnamenya supaya ada tanda error kita
  //memang inisial di parentnya  sprti yg kita taruh dicss
  //showError adalah function yg passing
  /*
jadi sklai lalgi jika mau buat tambahan di form control 
harus mengkaitkan dari input.parentElement
 
*/
});
