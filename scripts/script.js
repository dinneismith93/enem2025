// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const heroSignup = document.getElementById('heroSignup');
const pricingBtn = document.getElementById('pricingBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const closeSignupModal = document.getElementById('closeSignupModal');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');

// Open modals
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

heroSignup.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

pricingBtn.addEventListener('click', () => {
    signupModal.style.display = 'flex';
});

// Close modals
closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

closeSignupModal.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Switch between modals
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'flex';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
});

// Form submission - ATUALIZADO COM REDIRECIONAMENTO
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Check if it's the admin account
    if (email === 'dinneismith93@gmail.com' && password === 'Aa@12011993') {
        alert('Login realizado com sucesso! Acesso vitalício concedido.');
        loginModal.style.display = 'none';
        // ✅ REDIRECIONA PARA ÁREA DO ALUNO
        window.location.href = 'area-aluno.html';
    } else {
        alert('E-mail ou senha incorretos. Tente novamente.');
    }
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }
    
    alert(`Cadastro realizado com sucesso, ${name}! Redirecionando para pagamento...`);
    signupModal.style.display = 'none';
    
    // ✅ REDIRECIONAMENTO PARA MERCADO PAGO
    setTimeout(() => {
        window.location.href = 'https://mpago.la/2yXV9Nk';
    }, 1500);
});

// Music toggle
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    musicToggle.textContent = isPlaying ? '🔇' : '🎵';
    // Em um site real, aqui você iniciaria/pararia o áudio
    if (isPlaying) {
        // audioPlayer.play();
        console.log('Música iniciada');
    } else {
        // audioPlayer.pause();
        console.log('Música pausada');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Sistema de usuários (simulação)
function inicializarUsuarios() {
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify([]));
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    inicializarUsuarios();
    console.log('Site ENEM 2025 carregado com sucesso!');
    
    // Verificar se veio da área do aluno (logout)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('logout') === 'true') {
        alert('Logout realizado com sucesso!');
    }
});
