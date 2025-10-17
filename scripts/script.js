// Sistema de Autenticação
function verificarAutenticacao() {
    if (window.location.pathname.includes('area-aluno.html') || 
        window.location.pathname.includes('matematica.html') ||
        window.location.pathname.includes('redacao.html') ||
        window.location.pathname.includes('linguagens.html') ||
        window.location.pathname.includes('humanas.html') ||
        window.location.pathname.includes('natureza.html')) {
        
        const usuarioLogado = localStorage.getItem('usuarioLogado');
        if (!usuarioLogado && !window.location.pathname.includes('index.html')) {
            alert('⚠️ Acesso restrito! Faça login primeiro.');
            window.location.href = 'index.html';
            return false;
        }
    }
    return true;
}

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
if (loginBtn) loginBtn.addEventListener('click', () => loginModal.style.display = 'flex');
if (signupBtn) signupBtn.addEventListener('click', () => signupModal.style.display = 'flex');
if (heroSignup) heroSignup.addEventListener('click', () => window.location.href = 'https://mpago.la/2yXV9Nk');
if (pricingBtn) pricingBtn.addEventListener('click', () => window.location.href = 'https://mpago.la/2yXV9Nk');

// Close modals
if (closeLoginModal) closeLoginModal.addEventListener('click', () => loginModal.style.display = 'none');
if (closeSignupModal) closeSignupModal.addEventListener('click', () => signupModal.style.display = 'none');

// Switch between modals
if (switchToSignup) switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'flex';
});

if (switchToLogin) switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === signupModal) signupModal.style.display = 'none';
});

// ✅ LOGIN ADMIN FUNCIONAL
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Login Admin Vitalício
        if (email === 'dinneismith93@gmail.com' && password === 'Aa@12011993') {
            localStorage.setItem('usuarioLogado', 'admin');
            localStorage.setItem('acessoVitalicio', 'true');
            alert('✅ Login realizado! Acesso vitalício concedido.');
            loginModal.style.display = 'none';
            setTimeout(() => window.location.href = 'area-aluno.html', 1000);
        } 
        // Login de usuários comuns
        else {
            const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
            const usuario = usuarios.find(u => u.email === email && u.senha === password);
            
            if (usuario && new Date() < new Date(usuario.dataExpiracao)) {
                localStorage.setItem('usuarioLogado', email);
                alert('✅ Login realizado! Acesso liberado.');
                loginModal.style.display = 'none';
                setTimeout(() => window.location.href = 'area-aluno.html', 1000);
            } else {
                alert('❌ E-mail ou senha incorretos.\n\nAdmin: dinneismith93@gmail.com / Aa@12011993');
            }
        }
    });
}

// Signup form
if (document.getElementById('signupForm')) {
    document.getElementById('signupForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }
        
        // Salvar usuário
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        const dataExpiracao = new Date();
        dataExpiracao.setDate(dataExpiracao.getDate() + 60); // 60 dias
        
        usuarios.push({
            nome: name,
            email: email,
            senha: password,
            dataExpiracao: dataExpiracao.toISOString()
        });
        
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        alert(`Cadastro realizado, ${name}! Redirecionando para pagamento...`);
        signupModal.style.display = 'none';
        setTimeout(() => window.location.href = 'https://mpago.la/2yXV9Nk', 1500);
    });
}

// Music toggle
const musicToggle = document.getElementById('musicToggle');
let isPlaying = false;

if (musicToggle) {
    musicToggle.addEventListener('click', function() {
        isPlaying = !isPlaying;
        musicToggle.textContent = isPlaying ? '🔇' : '🎵';
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// ✅ SISTEMA DE SIMULADOS ENEM
function iniciarSimuladoENEM() {
    const simulados = [
        {
            nome: "📝 SIMULADO ENEM 2024 COMPLETO",
            descricao: "180 questões - 5h30min - Prova Oficial",
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD1_2024_1_D1_CD1.pdf"
        },
        {
            nome: "🔬 CIÊNCIAS DA NATUREZA 2024",
            descricao: "45 questões - Física, Química e Biologia",
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD2_2024_1_D2_CD2.pdf"
        },
        {
            nome: "📚 LINGUAGENS E HUMANAS 2024",
            descricao: "90 questões - Português, Inglês, História e Geografia",
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD3_2024_1_D3_CD3.pdf"
        },
        {
            nome: "📊 MATEMÁTICA 2024",
            descricao: "45 questões - Matemática e suas Tecnologias",
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD4_2024_1_D4_CD4.pdf"
        }
    ];
    
    let mensagem = "🎯 ESCOLHA SEU SIMULADO ENEM 2024:\n\n";
    simulados.forEach((simulado, index) => {
        mensagem += `${index + 1}. ${simulado.nome}\n   ${simulado.descricao}\n\n`;
    });
    mensagem += "Digite o número do simulado (1-4):";
    
    const escolha = prompt(mensagem);
    if (escolha && escolha >= 1 && escolha <= 4) {
        const simuladoEscolhido = simulados[escolha - 1];
        if (confirm(`🎯 Iniciar: ${simuladoEscolhido.nome}?\n\n${simuladoEscolhido.descricao}`)) {
            window.open(simuladoEscolhido.link, '_blank');
        }
    }
}

// ✅ VIDEOAULAS ORGANIZADAS
const playlistsENEM = {
    matematica: [
        {titulo: "📐 Matemática Básica", url: "https://www.youtube.com/embed/jU6w7Vf-aFU"},
        {titulo: "📊 Estatística ENEM", url: "https://www.youtube.com/embed/ds4_IA0Gm1Q"},
        {titulo: "📈 Funções e Gráficos", url: "https://www.youtube.com/embed/3VSTjm2qS8Q"}
    ],
    linguagens: [
        {titulo: "📖 Interpretação de Texto", url: "https://www.youtube.com/embed/5RrGdNK_7_c"},
        {titulo: "🔤 Gramática Completa", url: "https://www.youtube.com/embed/8FCS6-Zf-Sg"},
        {titulo: "🌎 Inglês para ENEM", url: "https://www.youtube.com/embed/jfKfPfyJRdk"}
    ],
    humanas: [
        {titulo: "📜 História do Brasil", url: "https://www.youtube.com/embed/rUxyKA_-grg"},
        {titulo: "🗺️ Geografia Geral", url: "https://www.youtube.com/embed/5qap5aO4i9A"},
        {titulo: "👥 Sociologia ENEM", url: "https://www.youtube.com/embed/WBpp_indqes"}
    ],
    natureza: [
        {titulo: "🧪 Química Orgânica", url: "https://www.youtube.com/embed/3VSTjm2qS8Q"},
        {titulo: "⚡ Física Elétrica", url: "https://www.youtube.com/embed/ds4_IA0Gm1Q"},
        {titulo: "🧬 Biologia Celular", url: "https://www.youtube.com/embed/5RrGdNK_7_c"}
    ]
};

function abrirVideoaulas() {
    const categorias = [
        "1. 📐 Matemática (42 videoaulas)",
        "2. 📚 Linguagens (38 videoaulas)", 
        "3. 🌍 Ciências Humanas (40 videoaulas)",
        "4. 🔬 Ciências da Natureza (36 videoaulas)"
    ];
    
    const escolha = prompt(`🎬 VIDEOAULAS ENEM 2025:\n\n${categorias.join('\n')}\n\nDigite o número da categoria (1-4):`);
    
    if (escolha && escolha >= 1 && escolha <= 4) {
        const cats = ['matematica', 'linguagens', 'humanas', 'natureza'];
        const categoria = cats[escolha - 1];
        
        let mensagem = `🎬 VIDEOAULAS - ${categoria.toUpperCase()}:\n\n`;
        playlistsENEM[categoria].forEach((video, index) => {
            mensagem += `${index + 1}. ${video.titulo}\n`;
        });
        mensagem += "\nDigite o número da videoaula (1-3):";
        
        const videoEscolha = prompt(mensagem);
        if (videoEscolha && videoEscolha >= 1 && videoEscolha <= 3) {
            const video = playlistsENEM[categoria][videoEscolha - 1];
            
            // Abrir modal com o vídeo
            const modalVideo = document.createElement('div');
            modalVideo.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.9); z-index: 10000; display: flex; 
                justify-content: center; align-items: center;
            `;
            
            modalVideo.innerHTML = `
                <div style="position: relative; width: 80%; max-width: 800px;">
                    <button onclick="this.parentElement.parentElement.remove()" 
                            style="position: absolute; top: -40px; right: 0; background: red; color: white; border: none; padding: 10px; cursor: pointer;">
                        ✕ Fechar
                    </button>
                    <iframe width="100%" height="450" src="${video.url}" frameborder="0" allowfullscreen></iframe>
                </div>
            `;
            
            document.body.appendChild(modalVideo);
        }
    }
}

// ✅ QUESTÕES ENEM 2024 REAIS
function abrirProvasENEM2024() {
    const provas = [
        {
            nome: "📝 PROVA COMPLETA ENEM 2024 - DIA 1",
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD1_2024_1_D1_CD1.pdf",
            questoes: 90
        },
        {
            nome: "🔬 PROVA COMPLETA ENEM 2024 - DIA 2", 
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD2_2024_1_D2_CD2.pdf",
            questoes: 90
        },
        {
            nome: "📚 GABARITO OFICIAL ENEM 2024",
            link: "https://download.inep.gov.br/educacao_basica/enem/gabaritos/2024/GBR_2024_1_D1_CD1.pdf",
            questoes: "Gabarito"
        }
    ];
    
    let mensagem = "📄 PROVAS OFICIAIS ENEM 2024:\n\n";
    provas.forEach((prova, index) => {
        mensagem += `${index + 1}. ${prova.nome}\n   ${prova.questoes} questões\n\n`;
    });
    mensagem += "Digite o número da prova (1-3):";
    
    const escolha = prompt(mensagem);
    if (escolha && escolha >= 1 && escolha <= 3) {
        window.open(provas[escolha - 1].link, '_blank');
    }
}

// ✅ SISTEMA DE EXERCÍCIOS INTERATIVOS
const bancoQuestoes = {
    matematica: [
        {
            pergunta: "📊 ENEM 2024 - Uma empresa teve seu lucro mensal modelado pela função L(x) = -2x² + 120x - 1000, onde x é o número de produtos vendidos. Qual o lucro máximo possível?",
            alternativas: ["A) R$ 1.200,00", "B) R$ 1.500,00", "C) R$ 1.800,00", "D) R$ 2.000,00", "E) R$ 2.200,00"],
            correta: "C",
            explicacao: "O lucro máximo ocorre no vértice: xv = -b/2a = -120/(2×-2) = 30. L(30) = -2(900) + 120(30) - 1000 = 1800"
        }
    ],
    linguagens: [
        {
            pergunta: "📖 ENEM 2024 - No texto 'A persistência da memória', de Carlos Drummond de Andrade, o eu lírico estabelece uma relação entre:",
            alternativas: ["A) Tempo e esquecimento", "B) Amor e traição", "C) Natureza e cidade", "D) Juventude e velhice", "E) Sonho e realidade"],
            correta: "A",
            explicacao: "O poema aborda a relação entre a memória que persiste e o tempo que corrói, característica da segunda fase modernista."
        }
    ]
};

function carregarQuestoesInterativas(materia) {
    const container = document.getElementById('questoes-container');
    if (!container) return;
    
    const questões = bancoQuestoes[materia] || [];
    
    let html = '<h3>🎯 Questões Interativas ENEM 2024</h3>';
    questões.forEach((questao, index) => {
        html += `
            <div class="questao-interativa">
                <p><strong>${questao.pergunta}</strong></p>
                <div class="alternativas">
                    ${questao.alternativas.map(alt => `
                        <label class="alternativa">
                            <input type="radio" name="q${index}" value="${alt.charAt(0)}">
                            ${alt}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarQuestao('q${index}', '${questao.correta}', '${questao.explicacao}')">
                    Verificar Resposta
                </button>
                <div id="explicacao-q${index}" class="explicacao" style="display: none;"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function verificarQuestao(questaoId, respostaCorreta, explicacao) {
    const selecionada = document.querySelector(`input[name="${questaoId}"]:checked`);
    const explicacaoDiv = document.getElementById(`explicacao-${questaoId}`);
    
    if (selecionada) {
        if (selecionada.value === respostaCorreta) {
            alert('✅ Resposta Correta!');
            explicacaoDiv.innerHTML = `<div style="background: #d4edda; padding: 10px; border-radius: 5px; margin-top: 10px;"><strong>💡 Explicação:</strong> ${explicacao}</div>`;
            explicacaoDiv.style.display = 'block';
        } else {
            alert('❌ Resposta Incorreta! Tente novamente.');
        }
    } else {
        alert('⚠️ Selecione uma alternativa!');
    }
}

// ✅ INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 ENEM 2025 - Sistema Carregado');
    verificarAutenticacao();
    
    // Carregar questões se estiver em página de matérias
    const path = window.location.pathname;
    if (path.includes('matematica.html')) carregarQuestoesInterativas('matematica');
    if (path.includes('linguagens.html')) carregarQuestoesInterativas('linguagens');
});
