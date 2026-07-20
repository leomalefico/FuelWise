<div align="center">
  <img src="https://img.shields.io/badge/status-ativo-22c55e?style=for-the-badge&logo=checkmarx&logoColor=white" alt="Status" />
  <img src="https://img.shields.io/badge/licença-MIT-3b82f6?style=for-the-badge&logo=openaccess&logoColor=white" alt="License" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
</div>
 
<br />

<div align="center">
  <h1>⛽ FuelWise</h1>
  <p><strong>Calculadora inteligente de combustível</strong></p>
  <p>Descubra se compensa abastecer com gasolina ou álcool com base no custo real por quilômetro rodado.</p>

  <p>
    <a href="#-sobre">Sobre</a> •
    <a href="#-funcionalidades">Funcionalidades</a> •
    <a href="#-como-usar">Como usar</a> •
    <a href="#-regra-dos-70">Regra dos 70%</a> •
    <a href="#-deploy">Deploy</a> •
    <a href="#-tecnologias">Tecnologias</a>
  </p>
</div>

---

## 📋 Sobre

O **FuelWise** vai além da simples regra dos 70%. Ele calcula o **custo real por quilômetro rodado** considerando tanto o preço por litro quanto o consumo específico de cada combustível no seu veículo. O resultado é exibido em barras comparativas animadas, mostrando claramente a diferença de custo.

## ✨ Funcionalidades

- **✅ Cálculo realista** — Leva em conta o consumo (km/L) de cada combustível, não apenas o preço
- **📊 Barras comparativas animadas** — Visualização proporcional do custo por km entre gasolina e álcool
- **💰 Painel de economia** — Mostra exatamente quanto você economiza por km com a melhor opção
- **🌙 Dark / Light mode** — Alternância suave entre temas com preferência salva no navegador
- **📱 Responsivo** — Funciona perfeitamente em celular, tablet e desktop
- **🎨 Design moderno** — Glassmorphism, gradientes e animações fluidas
- **⚡ 100% client-side** — Zero dependências externas, roda direto no navegador

## 🚀 Como usar

1. Abra o [FuelWise online](https://leomalefico.github.io/calculadora_combustivel/) (GitHub Pages)
2. Preencha os 4 campos:
   - Preço da gasolina (R$/L)
   - Preço do álcool (R$/L)
   - Consumo da gasolina (km/L)
   - Consumo do álcool (km/L)
3. Clique em **Verificar Vantagem**
4. Veja o resultado com barras comparativas e economia por km

### Exemplo

| Combustível | Preço | Consumo | Custo/km |
|-------------|-------|---------|----------|
| Gasolina    | R$ 6,19 | 12,5 km/L | R$ 0,4952 |
| Álcool      | R$ 4,39 | 8,5 km/L  | R$ 0,5165 |

**Resultado: Gasolina é mais vantajosa** (economia de ~R$ 0,02/km)

## 📐 Regra dos 70%

A regra prática diz que o álcool compensa quando seu preço é **até 70%** do preço da gasolina. Porém, isso considera apenas o preço — o **FuelWise** vai além ao incluir o consumo real do seu veículo, dando uma resposta muito mais precisa.

## 🌐 Deploy no GitHub Pages

O projeto está pronto para ser publicado no **GitHub Pages**:
```bash
git clone https://github.com/leomalefico/calculadora_combustivel.git
cd calculadora_combustivel
git add .
git commit -m "FuelWise: calculadora com dark mode e design moderno"
git push
