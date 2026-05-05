/* Overlay Controls */
const loginOverlay = document.getElementById("login-signIn");
const OpenButton = document.getElementById("Openbtn");

OpenButton.addEventListener('click',() => {
  loginOverlay.style.display = 'flex';
  showLogin(); // Default to login view
});

function closeLogIn() {
  loginOverlay.style.display = 'none';
}

/* Game List Controls */
function openGames() {
  document.getElementById("gamelist").style.display = 'flex';
}

function closeGames() {
  document.getElementById("gamelist").style.display = 'none';
}

/* Password Eye Toggle Logic */
const eyeOpen = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;
const eyeSlash = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

document.querySelectorAll('.toggle-eye').forEach(toggle => {
  
    toggle.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId);
        
        if (input.type === "password") {
            input.type = "text";
            this.innerHTML = eyeSlash;
        } else {
            input.type = "password";
            this.innerHTML = eyeOpen;
        }
    });
});

/* Tab Switching Logic */
function showLogin() {
  document.getElementById('login-div').style.display = 'block';
  document.getElementById('SignUp-div').style.display = 'none';
  
  document.getElementById('login-btn').classList.add('active-tab');
  document.getElementById('CreateAcc-btn').classList.remove('active-tab');
}

function showSignup() {
  document.getElementById('login-div').style.display = 'none';
  document.getElementById('SignUp-div').style.display = 'block';

  document.getElementById('CreateAcc-btn').classList.add('active-tab');
  document.getElementById('login-btn').classList.remove('active-tab');
}

