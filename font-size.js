 
const fontSizes = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
];

fontSizes.forEach(size => {
    const element = document.getElementById(`${size}`);
    element.addEventListener('click', function() {
        backdrop.classList.remove('active');
        fontsizeSelectModal.classList.remove('active');
        selectedFontSize.innerHTML = `${size}px`;
        output.style.fontSize = `${size}px`;
        codeEditor.style.fontSize = `${size}px`;
        cssCode.style.fontSize = `${size}px`;
        jsCode.style.fontSize = `${size}px`;

        // Toggle the radio buttons
        const radioButtons = document.querySelectorAll('.font-size-radio');
        radioButtons.forEach(radioButton => {
            if (parseInt(radioButton.value) === size) {
                radioButton.checked = true;
            } else {
                radioButton.checked = false;
            }
        });
    });
});
