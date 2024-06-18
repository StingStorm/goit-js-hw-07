const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.target;
  const userEmail = form.elements.email.value.trim();
  const userPass = form.elements.password.value.trim();

  if (!userEmail || !userPass) {
    return alert('All form fields must be filled in');
  }

  //   const user = new Map([
  //     ['email', userEmail],
  //     ['pass', userPass],
  //   ]);

  const user = {};
  user.email = userEmail;
  user.pass = userPass;

  console.log(user);
  loginForm.reset();
});
