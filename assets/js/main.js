const relogio = document.querySelector('#hora');
let segundos = 0;
let timer = null; 

function formatarTempo(segundosTotais) {
        const h = String(Math.floor(segundosTotais / 3600)).padStart(2, '0');
        const m = String(Math.floor((segundosTotais % 3600) / 60)).padStart(2, '0');
        const s = String(segundosTotais % 60).padStart(2, '0');
        return `${h} : ${m} : ${s}`;
}
function atualizarTela() {
        relogio.textContent = formatarTempo(segundos);
}

document.querySelector('#start').onclick = () => {
        relogio.style.color = 'white';      
        if (timer !== null) return;
        timer = setInterval(() => {
                segundos++;
                atualizarTela();
        }, 990);
};

document.querySelector('#stop').onclick = () => {
        clearInterval(timer);
        timer = null;
        relogio.style.color = 'red';
};

document.querySelector('#reset').onclick = () => {
        clearInterval(timer);
        timer = null;
        segundos = 0;
        atualizarTela();
        relogio.style.color = 'white';
};
