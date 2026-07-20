// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const sunIcon = themeToggle.querySelector('.sun');
const moonIcon = themeToggle.querySelector('.moon');


function setTheme(theme) {
    const isLight = theme === 'light';
    document.body.classList.toggle('light-mode', isLight);
    sunIcon.classList.toggle('active', isLight);
    moonIcon.classList.toggle('active', !isLight);
    try {
        localStorage.setItem('fuelwise-theme', theme);
    } catch (e) {
        // localStorage indisponível (modo anônimo, etc.)
    }
}

// Carrega tema salvo
try {
    const saved = localStorage.getItem('fuelwise-theme');
    setTheme(saved === 'light' ? 'light' : 'dark');
} catch (e) {
    setTheme('dark');
}

themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
});

// ===== CALCULADORA =====
document.getElementById('combustivelForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const precoGasolina = parseFloat(document.getElementById('precoGasolina').value);
    const precoAlcool   = parseFloat(document.getElementById('precoAlcool').value);
    const consumoGasolina = parseFloat(document.getElementById('consumoGasolina').value);
    const consumoAlcool   = parseFloat(document.getElementById('consumoAlcool').value);

    if (precoGasolina <= 0 || precoAlcool <= 0 || consumoGasolina <= 0 || consumoAlcool <= 0) {
        alert('Preencha todos os campos com valores maiores que zero.');
        return;
    }

    const custoGasolina = precoGasolina / consumoGasolina;
    const custoAlcool   = precoAlcool   / consumoAlcool;

    let vantagem, icon, texto;
    if (custoAlcool < custoGasolina) {
        vantagem = 'Álcool';
        icon     = '🟢';
        texto    = 'Álcool é mais vantajoso';
    } else if (custoGasolina < custoAlcool) {
        vantagem = 'Gasolina';
        icon     = '🔵';
        texto    = 'Gasolina é mais vantajosa';
    } else {
        vantagem = 'Empate';
        icon     = '⚖️';
        texto    = 'Ambos têm o mesmo custo!';
    }

    const economia = Math.abs(custoGasolina - custoAlcool);

    // Mostra resultado
    const resultado = document.getElementById('resultado');
    resultado.classList.remove('hidden');

    document.getElementById('resultIcon').textContent = icon;
    document.getElementById('resultTitle').textContent = texto;
    document.getElementById('resultSubtitle').textContent =
        vantagem === 'Empate' ? 'Custo por km idêntico' : 'Menor custo por quilômetro rodado';

    // Barras proporcionais
    const maxCusto = Math.max(custoGasolina, custoAlcool);
    document.getElementById('barGasolina').style.width = ((custoGasolina / maxCusto) * 100) + '%';
    document.getElementById('barAlcool').style.width   = ((custoAlcool   / maxCusto) * 100) + '%';

    document.getElementById('custoGasolina').textContent = `R$ ${custoGasolina.toFixed(4)}/km`;
    document.getElementById('custoAlcool').textContent   = `R$ ${custoAlcool.toFixed(4)}/km`;

    // Caixa de economia
    const economiaBox = document.getElementById('economiaBox');
    if (vantagem !== 'Empate') {
        economiaBox.style.display = 'flex';
        document.getElementById('economiaTexto').textContent =
            `Economia de R$ ${economia.toFixed(4)}/km com ${vantagem}`;
    } else {
        economiaBox.style.display = 'none';
    }
});
