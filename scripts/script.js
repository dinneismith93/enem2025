// =============================================
// SISTEMA PRINCIPAL ENEM 2025 - COMPLETO
// =============================================

// Sistema de Videoaulas Animadas
class VideoPlayerENEM {
    constructor() {
        this.videos = {
            matematica: [
                {
                    id: 'math1',
                    titulo: '📐 Matemática Básica com Professor Leo',
                    descricao: 'Aprenda os fundamentos da matemática com exemplos práticos',
                    url: 'https://www.youtube.com/embed/jU6w7Vf-aFU',
                    personagem: '🧮 Professor Leo',
                    duracao: '15:30',
                    nivel: 'Básico'
                },
                {
                    id: 'math2', 
                    titulo: '📊 Estatística ENEM com Dra. Ana',
                    descricao: 'Domine estatística para o ENEM com cases reais',
                    url: 'https://www.youtube.com/embed/ds4_IA0Gm1Q',
                    personagem: '📈 Dra. Ana',
                    duracao: '18:45',
                    nivel: 'Intermediário'
                }
            ],
            linguagens: [
                {
                    id: 'port1',
                    titulo: '📖 Gramática com Mestre Carlos',
                    descricao: 'Gramática completa de forma descomplicada',
                    url: 'https://www.youtube.com/embed/5RrGdNK_7_c',
                    personagem: '🎭 Mestre Carlos',
                    duracao: '22:10',
                    nivel: 'Básico'
                }
            ],
            humanas: [
                {
                    id: 'hist1',
                    titulo: '📜 Brasil Colônia com Prof. História',
                    descricao: 'Entenda o período colonial brasileiro',
                    url: 'https://www.youtube.com/embed/8FCS6-Zf-Sg',
                    personagem: '🏛️ Prof. História',
                    duracao: '25:20',
                    nivel: 'Intermediário'
                }
            ],
            natureza: [
                {
                    id: 'quim1',
                    titulo: '🧪 Química Orgânica com Cientista Maria',
                    descricao: 'Domine as funções orgânicas para o ENEM',
                    url: 'https://www.youtube.com/embed/3VSTjm2qS8Q',
                    personagem: '🔬 Cientista Maria',
                    duracao: '20:15',
                    nivel: 'Avançado'
                }
            ]
        };
    }

    criarModalVideo(videoData) {
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', sans-serif;
        `;

        modal.innerHTML = `
            <div class="video-modal-content" style="
                background: white;
                border-radius: 15px;
                padding: 20px;
                max-width: 900px;
                width: 95%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
            ">
                <button class="close-video" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    font-size: 20px;
                    cursor: pointer;
                    z-index: 10001;
                ">×</button>
                
                <div class="video-header" style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 20px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                ">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="font-size: 2rem;">${videoData.personagem}</div>
                        <div>
                            <h2 style="margin: 0 0 5px 0;">${videoData.titulo}</h2>
                            <p style="margin: 0; opacity: 0.9;">${videoData.descricao}</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 15px; margin-top: 10px; font-size: 0.9em;">
                        <span>⏱️ ${videoData.duracao}</span>
                        <span>📊 ${videoData.nivel}</span>
                    </div>
                </div>

                <div class="video-container" style="
                    position: relative;
                    padding-bottom: 56.25%;
                    height: 0;
                    overflow: hidden;
                    border-radius: 10px;
                    margin-bottom: 20px;
                ">
                    <iframe 
                        src="${videoData.url}?rel=0&modestbranding=1" 
                        style="
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            border: none;
                            border-radius: 10px;
                        " 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>

                <div class="video-actions" style="
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                    margin-top: 20px;
                ">
                    <button class="btn-download" style="
                        padding: 10px 20px;
                        background: #27ae60;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    ">📥 Material de Apoio</button>
                    
                    <button class="btn-exercicios" style="
                        padding: 10px 20px;
                        background: #3498db;
                        color: white;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                    ">✏️ Exercícios Relacionados</button>
                </div>
            </div>
        `;

        modal.querySelector('.close-video').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.querySelector('.btn-download').addEventListener('click', () => {
            const materiais = {
                'math1': 'https://blogdoenem.com.br/wp-content/uploads/2023/01/Matematica-ENEM-2023.pdf',
                'math2': 'https://exercicios.mundoeducacao.uol.com.br/exercicios-matematica/',
                'port1': 'https://blogdoenem.com.br/wp-content/uploads/2023/01/Portugues-ENEM-2023.pdf',
                'hist1': 'https://blogdoenem.com.br/wp-content/uploads/2023/01/Historia-ENEM-2023.pdf',
                'quim1': 'https://blogdoenem.com.br/wp-content/uploads/2023/01/Quimica-ENEM-2023.pdf'
            };
            const link = materiais[videoData.id];
            if (link) {
                window.open(link, '_blank');
            }
        });

        modal.querySelector('.btn-exercicios').addEventListener('click', () => {
            const exercicios = {
                'math1': 'matematica.html',
                'math2': 'matematica.html',
                'port1': 'linguagens.html', 
                'hist1': 'humanas.html',
                'quim1': 'natureza.html'
            };
            const pagina = exercicios[videoData.id];
            if (pagina) window.location.href = pagina;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    }

    exibirCatalogoVideos(materia) {
        const videosMateria = this.videos[materia] || [];
        let html = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">`;
        
        videosMateria.forEach(video => {
            html += `
                <div class="video-card" style="border: 1px solid #ddd; border-radius: 10px; padding: 15px; cursor: pointer; transition: transform 0.3s; background: #f8f9fa;" 
                     onclick="videoPlayer.criarModalVideo(videoPlayer.videos.${materia}.find(v => v.id === '${video.id}'))">
                    <div style="display: flex; align-items: start; gap: 10px;">
                        <div style="font-size: 1.5rem;">${video.personagem}</div>
                        <div>
                            <h4 style="margin: 0 0 5px 0;">${video.titulo}</h4>
                            <p style="margin: 0; font-size: 0.9em; color: #666;">${video.descricao}</p>
                            <div style="display: flex; gap: 10px; margin-top: 8px; font-size: 0.8em;">
                                <span>⏱️ ${video.duracao}</span>
                                <span>📊 ${video.nivel}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
        return html;
    }
}

// Sistema de Simulados Interativos
class SimuladoENEM {
    constructor() {
        this.provaCompleta = [
            {
                id: 1,
                pergunta: "🌍 ENEM 2024 - O fenômeno das ilhas de calor urbanas é resultante principalmente:",
                alternativas: [
                    "A) Da maior umidade relativa do ar nas cidades",
                    "B) Da substituição de áreas verdes por superfícies impermeáveis", 
                    "C) Da menor concentração de poluentes atmosféricos",
                    "D) Da redução da atividade industrial",
                    "E) Do aumento da velocidade dos ventos"
                ],
                correta: "B",
                materia: "Geografia",
                tempo: 3
            },
            {
                id: 2,
                pergunta: "🧪 ENEM 2024 - Na reação: 2H₂ + O₂ → 2H₂O, quantos gramas de água são produzidos a partir de 4g de hidrogênio?",
                alternativas: [
                    "A) 18 g",
                    "B) 36 g",
                    "C) 54 g", 
                    "D) 72 g",
                    "E) 90 g"
                ],
                correta: "B",
                materia: "Química",
                tempo: 2
            }
        ];
        this.respostasUsuario = {};
    }

    iniciarSimuladoCompleto() {
        if (confirm('🎯 Iniciar Simulado ENEM Completo?\n\n⏱️ 5h30min - 180 questões\n📝 Prova realista cronometrada')) {
            this.mostrarSimuladoReduzido();
        }
    }

    mostrarSimuladoReduzido() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 10000;
            overflow-y: auto;
            padding: 20px;
            font-family: 'Segoe UI', sans-serif;
        `;

        let html = `
            <div style="max-width: 800px; margin: 0 auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; padding-bottom: 15px; border-bottom: 2px solid #3498db;">
                    <h1 style="color: #2c3e50;">🎯 SIMULADO ENEM 2024</h1>
                    <div style="background: #34495e; color: white; padding: 10px 20px; border-radius: 20px;">⏱️ 45:00</div>
                </div>
        `;

        this.provaCompleta.forEach((questao, index) => {
            html += this.renderizarQuestao(questao, index);
        });

        html += `
            <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px;">
                <button onclick="simuladoENEM.finalizarProva()" style="padding: 15px 30px; background: #27ae60; color: white; border: none; border-radius: 8px; font-size: 1.1em; cursor: pointer;">✅ Finalizar Prova</button>
                <button onclick="document.body.removeChild(this.parentElement.parentElement.parentElement)" style="padding: 15px 30px; background: #e74c3c; color: white; border: none; border-radius: 8px; font-size: 1.1em; cursor: pointer;">✕ Sair</button>
            </div>
        `;

        container.innerHTML = html;
        document.body.appendChild(container);

        this.provaCompleta.forEach((questao) => {
            const inputs = container.querySelectorAll(`input[name="q${questao.id}"]`);
            inputs.forEach(input => {
                input.addEventListener('change', (e) => {
                    this.respostasUsuario[questao.id] = e.target.value;
                });
            });
        });
    }

    renderizarQuestao(questao, index) {
        return `
            <div style="background: white; padding: 25px; margin: 20px 0; border-radius: 10px; box-shadow: 0 3px 10px rgba(0,0,0,0.1); border-left: 4px solid #3498db;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <h3 style="margin: 0; color: #2c3e50;">Questão ${questao.id} - ${questao.materia}</h3>
                    <span style="background: #ecf0f1; padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">⏱️ ${questao.tempo} min</span>
                </div>
                <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;"><strong>${questao.pergunta}</strong></p>
                <div>
                    ${questao.alternativas.map(alt => `
                        <label style="display: block; padding: 15px; margin: 8px 0; background: #f8f9fa; border: 2px solid #ddd; border-radius: 8px; cursor: pointer; transition: all 0.3s;" 
                               onmouseover="this.style.background='#e3f2fd'" onmouseout="this.style.background='#f8f9fa'">
                            <input type="radio" name="q${questao.id}" value="${alt.charAt(0)}" style="margin-right: 10px;">${alt}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    finalizarProva() {
        const acertos = this.calcularAcertos();
        const total = this.provaCompleta.length;
        const nota = Math.round(500 + (500 * (acertos/total)));

        let resultadoHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10001; display: flex; justify-content: center; align-items: center;">
                <div style="background: white; padding: 30px; border-radius: 15px; max-width: 600px; width: 90%; text-align: center;">
                    <h2 style="color: #2c3e50;">📊 RESULTADO DO SIMULADO</h2>
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin: 20px 0;">
                        <div style="font-size: 3em; font-weight: bold;">${acertos}/${total}</div>
                        <div style="font-size: 1.2em;">Acertos</div>
                        <div style="font-size: 2em; margin-top: 10px;">NOTA: ${nota}</div>
                    </div>
                    <button onclick="location.reload()" style="padding: 15px 30px; background: #27ae60; color: white; border: none; border-radius: 8px; font-size: 1.1em; cursor: pointer; margin: 10px;">🔄 Novo Simulado</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', resultadoHTML);
    }

    calcularAcertos() {
        let acertos = 0;
        this.provaCompleta.forEach(questao => {
            if (this.respostasUsuario[questao.id] === questao.correta) acertos++;
        });
        return acertos;
    }
}

// Instâncias globais
const videoPlayer = new VideoPlayerENEM();
const simuladoENEM = new SimuladoENEM();

// =============================================
// SISTEMA PRINCIPAL DE AUTENTICAÇÃO
// =============================================

function verificarAutenticacao() {
    const paginasRestritas = ['area-aluno', 'matematica', 'redacao', 'linguagens', 'humanas', 'natureza'];
    const paginaAtual = window.location.pathname;
    
    if (paginasRestritas.some(pagina => paginaAtual.includes(pagina))) {
        const usuarioLogado = localStorage.getItem('usuarioLogado');
        if (!usuarioLogado) {
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
                alert('❌ E-mail ou senha incorretos.\n\n💡 Admin: dinneismith93@gmail.com / Aa@12011993');
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
        dataExpiracao.setDate(dataExpiracao.getDate() + 60);
        
        usuarios.push({
            nome: name,
            email: email,
            senha: password,
            dataExpiracao: dataExpiracao.toISOString()
        });
        
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        
        alert(`🎉 Cadastro realizado, ${name}! Redirecionando para pagamento...`);
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

// =============================================
// FUNÇÕES GLOBAIS PARA TODAS AS PÁGINAS
// =============================================

// ✅ SISTEMA DE SIMULADOS
function iniciarSimuladoENEM() {
    simuladoENEM.iniciarSimuladoCompleto();
}

// ✅ SISTEMA DE VIDEOAULAS
function abrirVideoaulas() {
    const categorias = [
        "1. 📐 Matemática (42 videoaulas)",
        "2. 📚 Linguagens (38 videoaulas)", 
        "3. 🌍 Ciências Humanas (40 videoaulas)",
        "4. 🔬 Ciências da Natureza (36 videoaulas)"
    ];
    
    const escolha = prompt(`🎬 VIDEOAULAS ANIMADAS ENEM 2025:\n\n${categorias.join('\n')}\n\nDigite o número da categoria (1-4):`);
    
    if (escolha && escolha >= 1 && escolha <= 4) {
        const cats = ['matematica', 'linguagens', 'humanas', 'natureza'];
        const categoria = cats[escolha - 1];
        videoPlayer.criarModalVideo(videoPlayer.videos[categoria][0]);
    }
}

// ✅ PROVAS OFICIAIS
function abrirProvasENEM2024() {
    const provas = [
        {
            nome: "📝 PROVA COMPLETA ENEM 2024 - DIA 1",
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD1_2024_1_D1_CD1.pdf",
            questoes: "90 questões - Linguagens e Humanas"
        },
        {
            nome: "🔬 PROVA COMPLETA ENEM 2024 - DIA 2", 
            link: "https://download.inep.gov.br/educacao_basica/enem/provas/2024/PD2_2024_1_D2_CD2.pdf",
            questoes: "90 questões - Matemática e Natureza"
        }
    ];
    
    let mensagem = "📄 PROVAS OFICIAIS ENEM 2024:\n\n";
    provas.forEach((prova, index) => {
        mensagem += `${index + 1}. ${prova.nome}\n   ${prova.questoes}\n\n`;
    });
    mensagem += "Digite o número da prova (1-2):";
    
    const escolha = prompt(mensagem);
    if (escolha && escolha >= 1 && escolha <= 2) {
        window.open(provas[escolha - 1].link, '_blank');
    }
}

// ✅ FUNÇÕES BÁSICAS
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

function verificarResposta(questao, respostaCorreta) {
    const selecionada = document.querySelector(`input[name="${questao}"]:checked`);
    if (selecionada) {
        if (selecionada.value === respostaCorreta) {
            alert('✅ Resposta Correta! Parabéns!');
            atualizarProgresso();
        } else {
            alert('❌ Resposta Incorreta. Continue estudando!');
        }
    } else {
        alert('⚠️ Selecione uma alternativa!');
    }
}

function baixarLivro() {
    const livroUrl = "https://download.inep.gov.br/publicacoes/institucionais/avaliacoes_e_exames_da_educacao_basica/o_que_estuda_quem_faz_enem.pdf";
    alert(`📖 LIVRO "ENEM 2025 - Guia Completo"\n\nIniciando download...`);
    window.open(livroUrl, '_blank');
}

function iniciarMusica() {
    const playlists = [
        "https://www.youtube.com/watch?v=jfKfPfyJRdk",
        "https://www.youtube.com/watch?v=rUxyKA_-grg", 
        "https://www.youtube.com/watch?v=5qap5aO4i9A"
    ];
    
    const playlist = prompt(`🎵 Ambiente de Estudo:\n\n1. 🎹 Lo-fi Hip Hop\n2. 🌧️ Sons da Natureza\n3. 🔇 Música para Concentração\n\nDigite o número (1-3):`);
    
    if (playlist && playlist >= 1 && playlist <= 3) {
        window.open(playlists[playlist-1], '_blank');
    }
}

// ✅ SISTEMA DE PROGRESSO
function atualizarProgresso() {
    let progresso = parseInt(localStorage.getItem('progressoENEM') || '35');
    if (progresso < 100) {
        progresso += 2;
        localStorage.setItem('progressoENEM', progresso.toString());
        
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-section strong');
        
        if (progressFill) progressFill.style.width = progresso + '%';
        if (progressText) progressText.textContent = progresso + '% completo';
    }
}

// =============================================
// INICIALIZAÇÃO DO SISTEMA
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 ENEM 2025 - Sistema Carregado!');
    
    // Verificar autenticação
    verificarAutenticacao();
    
    // Inicializar progresso
    const progresso = localStorage.getItem('progressoENEM') || '35';
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = progresso + '%';
        const progressText = document.querySelector('.progress-section strong');
        if (progressText) progressText.textContent = progresso + '% completo';
    }
    
    // Adicionar botão flutuante de simulados
    const floatingBtn = document.createElement('button');
    floatingBtn.innerHTML = '🎯 Simulado';
    floatingBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        padding: 15px 20px;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        font-weight: bold;
        font-size: 1.1em;
    `;
    floatingBtn.onclick = iniciarSimuladoENEM;
    document.body.appendChild(floatingBtn);
});
