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

//show Error
function showError(input, message) {
  //input mewakili username atau element lain yg passing padanya
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  //ingat small adalah element bukan class atau id tapi element
  //utk itu mangil domnya pake queryselector
  const small = formControl.querySelector('small');
  small.visible = true;
  small.innerText = message;
}
//show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email validation
function isValidateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
/*
ket re diaas adalah regex yg mana akan test email yg pasing di parameter email
dan dibuat tulisannya lowercase dan dikmbalikan apakan bernila true or false

  */

/*
kita refactor jadi yg banyak ini dibawah adEventlistener gak perlu di tulis lagi
ulang


*/
//check required every single Fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    //ini tiap array inputarr
    //diperiksa apa ada yg kosong jika ada maka akan ditampilkan
    //errornya,ini function dalam function kita sbut highOrder function
    if (input.value.trim() === '') {
      //show sprti apa itu input.id  //ini sbnarnya nunjuk element
      //id pada tag input
      console.log(input.id);
      showError(input, `${getFieldName(input)} is required`);
    }
  });
}

//Get Fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkRequired([username, email, password]);

  // //jika kosong
  // if (username.value === '') {
  //   showError(username, 'username required');
  // } else {
  //   showSuccess(username);
  // }

  // if (email.value === '') {
  //   showError(email, 'email required');
  // } else if (!isValidateEmail(email.value)) {
  //   showError(email, 'email is not valid');
  // } else {
  //   showSuccess(email);
  // }

  // if (password.value === '') {
  //   showError(password, 'password required');
  // } else {
  //   showSuccess(password);
  // }
  // if (password2.value === '') {
  //   showError(password2, 'password2 required');
  // } else {
  //   showSuccess(password2);
  // }
  //nah jadi gini parent dari input adalah form
  //nah utk tambah classnamenya supaya ada tanda error kita
  //memang inisial di parentnya  sprti yg kita taruh dicss
  //showError adalah function yg passing
  /*
jadi sklai lalgi jika mau buat tambahan di form control 
harus mengkaitkan dari input.parentElement
 
*/
});
