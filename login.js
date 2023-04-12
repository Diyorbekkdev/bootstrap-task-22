const loginForm = document.getElementById('login-form');
  
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting
  
  // get form data
  const email = document.getElementById('form3Example3').value;
  const password = document.getElementById('form3Example4').value;
  
  // validate form data (you should add your own validation logic here)
  if (!email || !password) {
    alert('Qayoqqa ketmoqchisiz shoshilib 🤨 ? Oldin Email va Password kiriting ');
    return;
  }
  
  // save user data to local storage
  localStorage.setItem('user', JSON.stringify({ email, password }));
  
  // redirect user to main page
  window.location.href = '/main.html'; // replace with your own main page URL
});