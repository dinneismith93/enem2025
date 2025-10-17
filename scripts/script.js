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
    window.location.href = 'https://mpago.la/2yXV9Nk';
});

pricingBtn.addEventListener('click', () => {
    window.location.href = 'https://mpago.la/2yXV9Nk';
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

// ✅ FORM SUBMIT CORRIGIDO - LOGIN FUNCIONAL
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log('Login attempt:', email, password);
    
    if (email === 'dinneismith93@gmail.com' && password === 'Aa@12011993') {
        alert('✅ Login realizado com sucesso! Redirecionando...');
        loginModal.style.display = 'none';
        
        // Redirecionamento garantido
        setTimeout(function() {
            window.location.href = 'area-aluno.html';
        }, 1500);
    } else {
        alert('❌ E-mail ou senha incorretos. Tente novamente.');
    }
});

// Signup form
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem. Tente novamente.');
        return;
    }
    
    alert(`Cadastro realizado, ${name}! Redirecionando para pagamento...`);
    signupModal.style.display = 'none';
    
    setTimeout(function() {
        window.location.href = 'https://mpago.la/2yXV9Nk';
    }, 1500);
});

// Music toggle
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

musicToggle.addEventListener('click', function() {
    isPlaying = !isPlaying;
    musicToggle.textContent = isPlaying ? '🔇' : '🎵';
    console.log('Música:', isPlaying ? 'Ligada' : 'Desligada');
    
    // Simular música ambiente
    if (isPlaying) {
        document.body.style.background = "linear-gradient(45deg, #f5f7fa, #e3f2fd)";
    } else {
        document.body.style.background = "#f5f7fa";
    }
});

// Smooth scrolling
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

// Sistema de progresso
function atualizarProgresso() {
    const progresso = localStorage.getItem('progressoENEM') || '0';
    const progressoNum = parseInt(progresso);
    
    if (progressoNum < 100) {
        const novoProgresso = progressoNum + 5;
        localStorage.setItem('progressoENEM', novoProgresso.toString());
        
        // Atualizar barra de progresso se existir
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = novoProgresso + '%';
            document.querySelector('.progress-section strong').textContent = novoProgresso + '% completo';
        }
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Site ENEM 2025 carregado!');
    
    // Verificar progresso salvo
    const progresso = localStorage.getItem('progressoENEM') || '35';
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = progresso + '%';
        document.querySelector('.progress-section strong').textContent = progresso + '% completo';
    }
    
    // Adicionar evento de clique em questões para atualizar progresso
    document.querySelectorAll('.btn-module, .alternativa').forEach(element => {
        element.addEventListener('click', function() {
            setTimeout(atualizarProgresso, 1000);
        });
    });
});

// Funções globais para as páginas de conteúdo
function verificarResposta(questao, respostaCorreta) {
    const selecionada = document.querySelector(`input[name="${questao}"]:checked`);
    if (selecionada) {
        if (selecionada.value === respostaCorreta) {
            alert('✅ Resposta Correta! Parabéns!\n\nContinue assim!');
            atualizarProgresso();
        } else {
            alert('❌ Resposta Incorreta. A resposta correta é: ' + respostaCorreta + '\n\nEstude mais esta matéria!');
        }
    } else {
        alert('⚠️ Selecione uma alternativa!');
    }
}

function iniciarRedacao(tema) {
    const editorUrl = `https://docs.google.com/document/create?title=Redação ENEM - ${tema}`;
    alert(`📝 Iniciando redação sobre: "${tema}"\n\nAbrindo editor...`);
    window.open(editorUrl, '_blank');
    atualizarProgresso();
}
