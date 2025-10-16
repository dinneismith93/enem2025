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

// Form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Check if it's the admin account
    if (email === 'dinneismith93@gmail.com' && password === 'Aa@12011993') {
        alert('Login realizado com sucesso! Acesso vitalício concedido.');
        loginModal.style.display = 'none';
        // Redirecionar para área do aluno
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
    
    alert(`Cadastro realizado com sucesso, ${name}! Agora você pode fazer o pagamento de R$29,99 para liberar o acesso completo por 60 dias.`);
    signupModal.style.display = 'none';
});

// Music toggle
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    isPlaying = !isPlaying;
    musicToggle.textContent = isPlaying ? '🔇' : '🎵';
    // Em uma implementação real, você iniciaria/pararia o áudio aqui
    if (isPlaying) {
        // audioPlayer.play();
    } else {
        // audioPlayer.pause();
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

// Sistema de usuários
function salvarUsuario(nome, email, senha) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const dataExpiracao = new Date();
    dataExpiracao.setDate(dataExpiracao.getDate() + 60); // 60 dias de acesso
    
    const novoUsuario = {
        nome,
        email,
        senha,
        dataCadastro: new Date(),
        dataExpiracao: dataExpiracao,
        pagamentoEfetuado: false
    };
    
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Verificar se usuário está logado ao carregar a página
window.addEventListener('load', () => {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    if (usuarioLogado) {
        // Usuário já está logado, pode redirecionar para área do aluno
        console.log('Usuário logado:', usuarioLogado);
    }
});
