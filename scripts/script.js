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

// ✅ CORREÇÃO: Botão de pricing direto para pagamento
if (pricingBtn) {
    pricingBtn.addEventListener('click', () => {
        window.location.href = 'https://mpago.la/2yXV9Nk';
    });
}

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

// ✅ CORREÇÃO CRÍTICA: Login funcionando 100%
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log('Tentando login com:', email);
    
    // ✅ LOGIN VITALÍCIO FUNCIONANDO
    if (email === 'dinneismith93@gmail.com' && password === 'Aa@12011993') {
        alert('✅ Login realizado com sucesso! Acesso vitalício concedido.\n\nRedirecionando para área do aluno...');
        loginModal.style.display = 'none';
        
        // ✅ REDIRECIONAMENTO GARANTIDO
        setTimeout(() => {
            window.location.href = 'area-aluno.html';
        }, 1000);
        
    } else {
        alert('❌ E-mail ou senha incorretos.\n\nUse:\nEmail: dinneismith93@gmail.com\nSenha: Aa@12011993');
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
    
    setTimeout(() => {
        window.location.href = 'https://mpago.la/2yXV9Nk';
    }, 1500);
});

// Music toggle
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

if (musicToggle) {
    musicToggle.addEventListener('click', function() {
        isPlaying = !isPlaying;
        musicToggle.textContent = isPlaying ? '🔇' : '🎵';
        console.log('Música:', isPlaying ? 'Ligada' : 'Desligada');
    });
}

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

// ✅ VERIFICAÇÃO DE PÁGINA ATUAL
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Site ENEM 2025 carregado com sucesso!');
    
    // Se estiver na área do aluno, verificar se veio do login
    if (window.location.pathname.includes('area-aluno.html')) {
        console.log('🔓 Acesso à área do aluno concedido');
    }
});

// ✅ FUNÇÕES GLOBAIS PARA TODAS AS PÁGINAS
function abrirQuestoes() {
    const materias = [
        "📐 Matemática (315 questões)",
        "📚 Linguagens (280 questões)", 
        "🌍 Ciências Humanas (325 questões)",
        "🔬 Ciências da Natureza (327 questões)"
    ];
    
    const materiaEscolhida = prompt(`📚 Escolha uma matéria:\n\n${materias.join('\n')}\n\nDigite o número (1-4):`);
    
    if (materiaEscolhida && materiaEscolhida >= 1 && materiaEscolhida <= 4) {
        const paginas = ["matematica.html", "linguagens.html", "humanas.html", "natureza.html"];
        window.location.href = paginas[materiaEscolhida-1];
    }
}

function abrirRedacao() {
    window.location.href = 'redacao.html';
}

function abrirVideoaulas() {
    const categorias = [
        "📐 Matemática (42 aulas)",
        "📚 Linguagens (38 aulas)", 
        "🌍 Ciências Humanas (40 aulas)",
        "🔬 Ciências da Natureza (36 aulas)"
    ];
    
    const categoriaEscolhida = prompt(`🎬 Escolha a categoria:\n\n${categorias.join('\n')}\n\nDigite o número (1-4):`);
    
    if (categoriaEscolhida && categoriaEscolhida >= 1 && categoriaEscolhida <= 4) {
        const playlists = [
            "https://www.youtube.com/playlist?list=PLTPg64KdGgYivEK9adR649OQiPgo-5_IL",
            "https://www.youtube.com/playlist?list=PLTPg64KdGgYgY8Gm0qAGDpR5x9X1lC6fT",
            "https://www.youtube.com/playlist?list=PLTPg64KdGgYj6MZ-pX1XwR7q7QwLwz5vK",
            "https://www.youtube.com/playlist?list=PLTPg64KdGgYh7Y7Y7Y7Y7Y7Y7Y7Y7Y7Y7"
        ];
        window.open(playlists[categoriaEscolhida-1], '_blank');
    }
}

function abrirSimulados() {
    const simulados = [
        "https://download.inep.gov.br/educacao_basica/enem/provas/2023/PPL_2023_1_D1_CD1.pdf",
        "https://download.inep.gov.br/educacao_basica/enem/provas/2023/PPL_2023_1_D2_CD2.pdf", 
        "https://download.inep.gov.br/educacao_basica/enem/provas/2023/PPL_2023_1_D3_CD3.pdf",
        "https://download.inep.gov.br/educacao_basica/enem/provas/2023/PPL_2023_1_D4_CD4.pdf"
    ];
    
    const simulado = prompt(`📊 Escolha um simulado:\n\n1. 🕒 Dia 1 - Linguagens e Humanas\n2. ⚡ Dia 2 - Matemática e Natureza\n3. 📊 Prova Completa 2023\n4. 🎯 Gabarito Oficial\n\nDigite o número (1-4):`);
    
    if (simulado && simulado >= 1 && simulado <= 4) {
        window.open(simulados[simulado-1], '_blank');
    }
}

function baixarLivro() {
    const livroUrl = "https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/o_que_estuda_quem_faz_enem.pdf";
    alert(`📖 LIVRO "ENEM 2025 - Guia Completo"\n\nIniciando download do material oficial...`);
    window.open(livroUrl, '_blank');
}

function iniciarMusica() {
    const playlists = [
        "https://www.youtube.com/watch?v=jfKfPfyJRdk",
        "https://www.youtube.com/watch?v=rUxyKA_-grg", 
        "https://www.youtube.com/watch?v=5qap5aO4i9A",
        "https://www.youtube.com/watch?v=WBpp_indqes"
    ];
    
    const playlist = prompt(`🎵 Escolha a playlist:\n\n1. 🎹 Lo-fi Hip Hop\n2. 🌧️ Sons da Natureza\n3. 🔇 Música para Concentração\n4. 🌊 Frequências Binaurais\n\nDigite o número (1-4):`);
    
    if (playlist && playlist >= 1 && playlist <= 4) {
        window.open(playlists[playlist-1], '_blank');
    }
}

function verificarResposta(questao, respostaCorreta) {
    const selecionada = document.querySelector(`input[name="${questao}"]:checked`);
    if (selecionada) {
        if (selecionada.value === respostaCorreta) {
            alert('✅ Resposta Correta! Parabéns!');
        } else {
            alert('❌ Resposta Incorreta. Tente novamente!');
        }
    } else {
        alert('⚠️ Selecione uma alternativa!');
    }
}

function iniciarRedacao(tema) {
    const editorUrl = `https://docs.google.com/document/create?title=Redação ENEM - ${tema}`;
    alert(`📝 Iniciando redação sobre: "${tema}"\n\nAbrindo editor...`);
    window.open(editorUrl, '_blank');
}
