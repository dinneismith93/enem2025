// Sistema de Simulados ENEM Interativos
class SimuladoENEM {
    constructor() {
        this.simulados = {
            matematica: [
                {
                    pergunta: "📐 ENEM 2024 - Um investidor aplica R$ 5.000,00 a juros compostos de 2% ao mês. Qual o montante após 6 meses?",
                    alternativas: [
                        "A) R$ 5.600,00",
                        "B) R$ 5.630,81", 
                        "C) R$ 5.700,00",
                        "D) R$ 5.800,00",
                        "E) R$ 5.920,00"
                    ],
                    correta: "B",
                    explicacao: "M = C × (1 + i)ⁿ = 5000 × (1,02)⁶ = 5000 × 1,126162 = R$ 5.630,81",
                    materia: "Matemática Financeira",
                    nivel: "Médio"
                }
            ],
            linguagens: [
                {
                    pergunta: "📖 ENEM 2024 - Assinale a alternativa em que o uso da vírgula está INCORRETO:",
                    alternativas: [
                        "A) Maria, que é minha amiga, chegou agora.",
                        "B) Estudamos português, matemática e história.",
                        "C) Ele disse, que viria amanhã.",
                        "D) Ontem, choveu muito.",
                        "E) Porto Alegre, 15 de março de 2024."
                    ],
                    correta: "C",
                    explicacao: "A vírgula não deve separar o verbo 'disse' do complemento introduzido por 'que'.",
                    materia: "Gramática",
                    nivel: "Fácil"
                }
            ]
        };

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
                tempo: 3 // minutos
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
        this.tempoRestante = 0;
        this.questaoAtual = 0;
        this.timer = null;
    }

    iniciarSimuladoCompleto() {
        if (confirm('🎯 Iniciar Simulado ENEM Completo?\n\n⏱️ 5h30min - 180 questões\n📝 Prova realista cronometrada')) {
            this.mostrarInstrucoes();
        }
    }

    mostrarInstrucoes() {
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            z-index: 10000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Segoe UI', sans-serif;
        `;

        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 15px;
                padding: 30px;
                max-width: 600px;
                width: 90%;
                max-height: 90vh;
                overflow-y: auto;
            ">
                <h2 style="color: #2c3e50; text-align: center;">🎯 SIMULADO ENEM 2024</h2>
                
                <div style="background: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h3>📋 Instruções:</h3>
                    <ul style="text-align: left;">
                        <li>⏱️ <strong>Tempo total:</strong> 5 horas e 30 minutos</li>
                        <li>📝 <strong>Questões:</strong> 180 questões divididas em 2 dias</li>
                        <li>🎯 <strong>Objetivo:</strong> Simular condições reais do ENEM</li>
                        <li>📊 <strong>Resultado:</strong> Relatório detalhado ao final</li>
                    </ul>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
                    <div style="background: #e8f5e8; padding: 15px; border-radius: 8px;">
                        <h4>📅 DIA 1</h4>
                        <p>Linguagens e Ciências Humanas</p>
                        <p>⏰ 5h30min</p>
                    </div>
                    <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
                        <h4>📅 DIA 2</h4>
                        <p>Matemática e Ciências da Natureza</p>
                        <p>⏰ 5h30min</p>
                    </div>
                </div>

                <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
                    <button id="iniciarSimulado" style="
                        padding: 15px 30px;
                        background: #27ae60;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 1.1em;
                        cursor: pointer;
                    ">🚀 Iniciar Simulado</button>
                    
                    <button id="fecharInstrucoes" style="
                        padding: 15px 30px;
                        background: #95a5a6;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 1.1em;
                        cursor: pointer;
                    ">✕ Fechar</button>
                </div>
            </div>
        `;

        modal.querySelector('#iniciarSimulado').addEventListener('click', () => {
            document.body.removeChild(modal);
            this.iniciarProva();
        });

        modal.querySelector('#fecharInstrucoes').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
    }

    iniciarProva() {
        // Implementar a prova completa aqui
        alert('🎯 Simulado ENEM iniciado!\n\nEm desenvolvimento: Sistema completo de 180 questões');
        
        // Por enquanto, vamos mostrar um simulado reduzido
        this.mostrarSimuladoReduzido();
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
                    <div style="background: #34495e; color: white; padding: 10px 20px; border-radius: 20px;">
                        ⏱️ 45:00
                    </div>
                </div>

                <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                    <h3>📋 Instruções:</h3>
                    <ul>
                        <li>Leia cada questão com atenção</li>
                        <li>Selecione apenas UMA alternativa</li>
                        <li>Você pode pular e voltar às questões</li>
                        <li>Ao final, clique em "Finalizar Prova"</li>
                    </ul>
                </div>
        `;

        // Adicionar questões
        this.provaCompleta.forEach((questao, index) => {
            html += this.renderizarQuestao(questao, index);
        });

        html += `
            <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px;">
                <button onclick="simuladoENEM.finalizarProva()" style="
                    padding: 15px 30px;
                    background: #27ae60;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1.1em;
                    cursor: pointer;
                ">✅ Finalizar Prova</button>
                
                <button onclick="document.body.removeChild(this.parentElement.parentElement.parentElement)" style="
                    padding: 15px 30px;
                    background: #e74c3c;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 1.1em;
                    cursor: pointer;
                ">✕ Sair do Simulado</button>
            </div>
        `;

        container.innerHTML = html;
        document.body.appendChild(container);

        // Adicionar eventos às questões
        this.provaCompleta.forEach((questao, index) => {
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
            <div class="questao-simulado" style="
                background: white;
                padding: 25px;
                margin: 20px 0;
                border-radius: 10px;
                box-shadow: 0 3px 10px rgba(0,0,0,0.1);
                border-left: 4px solid #3498db;
            ">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                    <h3 style="margin: 0; color: #2c3e50;">Questão ${questao.id} - ${questao.materia}</h3>
                    <span style="background: #ecf0f1; padding: 5px 10px; border-radius: 15px; font-size: 0.9em;">
                        ⏱️ ${questao.tempo} min
                    </span>
                </div>
                
                <p style="font-size: 1.1em; line-height: 1.6; margin-bottom: 20px;"><strong>${questao.pergunta}</strong></p>
                
                <div class="alternativas-simulado">
                    ${questao.alternativas.map(alt => `
                        <label style="
                            display: block;
                            padding: 15px;
                            margin: 8px 0;
                            background: #f8f9fa;
                            border: 2px solid #ddd;
                            border-radius: 8px;
                            cursor: pointer;
                            transition: all 0.3s;
                        " onmouseover="this.style.background='#e3f2fd'" onmouseout="this.style.background='#f8f9fa'">
                            <input type="radio" name="q${questao.id}" value="${alt.charAt(0)}" style="margin-right: 10px;">
                            ${alt}
                        </label>
                    `).join('')}
                </div>
            </div>
        `;
    }

    finalizarProva() {
        const acertos = this.calcularAcertos();
        const total = this.provaCompleta.length;
        const nota = this.calcularNotaENEM(acertos, total);

        let resultadoHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 10001; display: flex; justify-content: center; align-items: center;">
                <div style="background: white; padding: 30px; border-radius: 15px; max-width: 600px; width: 90%; text-align: center;">
                    <h2 style="color: #2c3e50;">📊 RESULTADO DO SIMULADO</h2>
                    
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin: 20px 0;">
                        <div style="font-size: 3em; font-weight: bold;">${acertos}/${total}</div>
                        <div style="font-size: 1.2em;">Acertos</div>
                        <div style="font-size: 2em; margin-top: 10px;">NOTA: ${nota}</div>
                    </div>

                    <div style="text-align: left; background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
                        <h4>📈 Seu Desempenho:</h4>
                        <p>✅ <strong>Acertos:</strong> ${acertos} questões</p>
                        <p>❌ <strong>Erros:</strong> ${total - acertos} questões</p>
                        <p>🎯 <strong>Taxa de acerto:</strong> ${((acertos/total)*100).toFixed(1)}%</p>
                    </div>

                    <button onclick="location.reload()" style="
                        padding: 15px 30px;
                        background: #27ae60;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 1.1em;
                        cursor: pointer;
                        margin: 10px;
                    ">🔄 Fazer Outro Simulado</button>
                    
                    <button onclick="document.body.removeChild(this.parentElement.parentElement)" style="
                        padding: 15px 30px;
                        background: #3498db;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 1.1em;
                        cursor: pointer;
                        margin: 10px;
                    ">📝 Ver Gabarito Comentado</button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', resultadoHTML);
    }

    calcularAcertos() {
        let acertos = 0;
        this.provaCompleta.forEach(questao => {
            if (this.respostasUsuario[questao.id] === questao.correta) {
                acertos++;
            }
        });
        return acertos;
    }

    calcularNotaENEM(acertos, total) {
        // Simulação do cálculo TRI do ENEM
        const base = 500;
        const variacao = 500;
        const percentual = acertos / total;
        return Math.round(base + (variacao * percentual));
    }
}

// Instância global do simulado
const simuladoENEM = new SimuladoENEM();
