// Sistema de Videoaulas Animadas com Personagens
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

        // Event listeners
        modal.querySelector('.close-video').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        modal.querySelector('.btn-download').addEventListener('click', () => {
            this.baixarMaterialApoio(videoData);
        });

        modal.querySelector('.btn-exercicios').addEventListener('click', () => {
            this.abrirExerciciosRelacionados(videoData);
        });

        // Fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        document.body.appendChild(modal);
    }

    baixarMaterialApoio(videoData) {
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
            alert('📚 Abrindo material de apoio...');
        } else {
            alert('📝 Material em desenvolvimento!');
        }
    }

    abrirExerciciosRelacionados(videoData) {
        const exercicios = {
            'math1': 'matematica.html',
            'math2': 'matematica.html',
            'port1': 'linguagens.html', 
            'hist1': 'humanas.html',
            'quim1': 'natureza.html'
        };

        const pagina = exercicios[videoData.id];
        if (pagina) {
            window.location.href = pagina;
        }
    }

    // Método para exibir catálogo de vídeos
    exibirCatalogoVideos(materia) {
        const videosMateria = this.videos[materia] || [];
        
        let html = `
            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <h3>🎬 Videoaulas - ${materia.toUpperCase()}</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px; margin-top: 15px;">
        `;

        videosMateria.forEach(video => {
            html += `
                <div class="video-card" style="
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    padding: 15px;
                    cursor: pointer;
                    transition: transform 0.3s;
                    background: #f8f9fa;
                " onclick="videoPlayer.abrirVideo('${materia}', '${video.id}')">
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

        html += `</div></div>`;
        return html;
    }

    abrirVideo(materia, videoId) {
        const video = this.videos[materia].find(v => v.id === videoId);
        if (video) {
            this.criarModalVideo(video);
        }
    }
}

// Instância global do player
const videoPlayer = new VideoPlayerENEM();
