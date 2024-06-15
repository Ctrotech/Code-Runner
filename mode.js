let htmlMode = document.getElementById('htmlMode');
let htmlAndCssMode = document.getElementById('htmlAndCssMode');
let javascriptMode = document.getElementById('javascriptMode');
let allMode = document.getElementById('allMode');

let htmlModal = document.getElementById('htmlModal');
let cssModal = document.getElementById('cssModal');
let jsModal = document.getElementById('jsModal');
let selectedEditorMode = document.getElementById('selectedEditorMode');

// Function to uncheck all radio buttons
function uncheckRadioButtons() {
    document.querySelectorAll('.editor-mode-radio').forEach(radio => {
        radio.checked = false;
    });
}

htmlMode.addEventListener('click', function() {
    backdrop.classList.remove('active');
    modeSelectModal.classList.remove('active');
    selectedEditorMode.innerHTML = `HTML`;
    cssModal.style.display = 'none';
    jsModal.style.display = 'none';
    uncheckRadioButtons();
    htmlMode.querySelector('.editor-mode-radio').checked = true;
});

htmlAndCssMode.addEventListener('click', function() {
    backdrop.classList.remove('active');
    modeSelectModal.classList.remove('active');
    selectedEditorMode.innerHTML = `HTML & CSS`;
    cssModal.style.display = 'block';
    htmlModal.style.display = 'block';
    jsModal.style.display = 'none';
    uncheckRadioButtons();
    htmlAndCssMode.querySelector('.editor-mode-radio').checked = true;
});

javascriptMode.addEventListener('click', function() {
    backdrop.classList.remove('active');
    modeSelectModal.classList.remove('active');
    selectedEditorMode.innerHTML = `JavaScript`;
    cssModal.style.display = 'none';
    htmlModal.style.display = 'none';
    jsModal.style.display = 'block';
    uncheckRadioButtons();
    javascriptMode.querySelector('.editor-mode-radio').checked = true;
});

allMode.addEventListener('click', function() {
    backdrop.classList.remove('active');
    modeSelectModal.classList.remove('active');
    selectedEditorMode.innerHTML = `All`;
    cssModal.style.display = 'block';
    htmlModal.style.display = 'block';
    jsModal.style.display = 'block';
    uncheckRadioButtons();
    allMode.querySelector('.editor-mode-radio').checked = true;
});