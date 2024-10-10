const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container_texto')
    paragrafo.innerHTML = `Vocẽ sabia que o mundo tem${dados.total_pessoas_mundo} de pessoas e que aproximaamente 
    ${dados.total_passoas_conectas} estão conectadas em aguma rede social e pasam em média ${dados.tempo_medio} horas conectadas.`
}

visualizarInformacoesGlobais()