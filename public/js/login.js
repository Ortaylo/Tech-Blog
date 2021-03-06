const login = async (event) => {
    event.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value.trim();
    if(email && password){
    const response = await fetch('/api/user/login',{
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: {'Content-Type': 'application/json'}
    });
        if(response.ok){
            document.location.replace('/')
        } else{
            alert(response.statusText)
        }
    }
}
const signup = async (event) => {
    event.preventDefault();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    if(username && email && password){
     const response =  await fetch('/api/user',{
          method: 'POST',
          body: JSON.stringify({username,email,password}),
          headers: {'Content-Type': 'application/json'}
      })
      if(response.ok){
        document.location.replace('/')
    } else{
        alert(response.statusText)
    }
  }
}
document
    .querySelector('.login-form')
    .addEventListener('submit', login)
document
        .querySelector('.signup-form')
        .addEventListener('submit', signup)
