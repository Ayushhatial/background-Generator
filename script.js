document.getElementById('generateButton').addEventListener('click', generateBackground);
document.getElementById('randomButton').addEventListener('click', generateRandomBackground);

function generateBackground() {
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;
    applyBackground(color1, color2);
}

function generateRandomBackground() {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    applyBackground(color1, color2);
    document.getElementById('color1').value = color1;
    document.getElementById('color2').value = color2;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyBackground(color1, color2) {
    const preview = document.getElementById('preview');
    const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
    preview.style.background = gradient;

    const cssCode = `background: ${gradient};`;
    document.getElementById('cssCode').textContent = cssCode;
}
