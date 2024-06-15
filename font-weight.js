
const fontWeightButtons = [
    'bold', 'normal', '100', '200', '300', '400', '500', '600', '700', '800', '900'
];

fontWeightButtons.forEach(weight => {
    const element = document.getElementById(weight);
    element.addEventListener('click', function() {
        backdrop.classList.remove('active');
        fontweightSelectModal.classList.remove('active');
        selectedFontWeight.innerHTML = weight;

        // Toggle the radio buttons
        const weightradioButtons = document.querySelectorAll('.font-weight-radio');
        weightradioButtons.forEach(weightradioButton => {
            if (weightradioButton.value === weight) {
                weightradioButton.checked = true;
            } else {
                weightradioButton.checked = false;
            }
        });

        // Set the font weight for the code editor and other elements
        codeEditor.style.fontWeight = weight;
        cssCode.style.fontWeight = weight;
        jsCode.style.fontWeight = weight;
    });
});