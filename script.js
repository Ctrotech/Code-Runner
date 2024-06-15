
const elements = {
    tabModal: document.getElementById('tabModal'),
    tabBtn: document.getElementById('tabBtn'),
    toggleListBtn: document.getElementById('lists-modal-Btn'),
    listModal: document.getElementById('lists'),
    codeLiModalBtn: document.getElementById('code-modal-btn'),
    codeItemsModal: document.getElementById('code-items-lists'),
    settingsModalBtn: document.getElementById('settings-modal-btn'),
    aboutModalBtn: document.getElementById('about-modal-btn'),
    aboutUsModal: document.getElementById('aboutUsModal'),
    closeAboutUsModalBtn: document.getElementById('closeAboutUsModal'),
    settingsModal: document.getElementById('settingsModal'),
    closeSettingsModal: document.getElementById('closeSettingsModal'),
    backdrop: document.getElementById('backdrop'),
    fontsizeSelectModal: document.getElementById('fontsizeSelectModal'),
    FontSizeSelectBtn: document.getElementById('FontSizeSelectBtn'),
    closeFontSizeModdal: document.getElementById('closeFontSizeModdal'),
    themeSelectModal: document.getElementById('themeSelectModal'),
    closeThemeModdal: document.getElementById('closeThemeModdal'),
    themeSelectBtn: document.getElementById('themeSelectBtn'),
    selectedTheme: document.getElementById('selectedTheme'),
    body: document.getElementById('container'),
    editorTop: document.querySelectorAll('editor--top'),
    modeSelectModal: document.getElementById('modeSelectModal'),
    closeModeModal: document.getElementById('closeModeModal'),
    modeSelectBtn: document.getElementById('modeSelectBtn'),
    selectEditorMode: document.getElementById('selectEditorMode'),
    fontweightSelectModal: document.getElementById('fontweightSelectModal'),
    closeFontweightModal: document.getElementById('closeFontweightModal'),
    fontweightBtn: document.getElementById('fontweightBtn'),
    runCode: document.getElementById('runCode'),
    outputs: document.getElementById('outputs'),
    close: document.getElementById('close'),
    outputBarItems: document.getElementById('outputBarItems'),
    toggleOutputBarList: document.getElementById('toggleOutputBarList'),
    toggleOutputBarListActive: document.querySelector('.output-bar-items-right'),
    tabsizeSelectModal: document.getElementById('tabsizeSelectModal'),
    closeTabsizeModdal: document.getElementById('closeTabsizeModdal'),
    tabsizeSelectBtn: document.getElementById('tabsizeSelectBtn'),
    selectedTabSize: document.getElementById('selectedTabSize'),
    lightTheme: document.getElementById('light'),
    darkTheme: document.getElementById('dark'),
    systemDefault: document.getElementById('systemDefault')
};

// Toggle output bar list
elements.toggleOutputBarList.addEventListener('click', function () {
    elements.toggleOutputBarListActive.classList.toggle('active');
    elements.outputBarItems.classList.toggle('active');
				
});

// Run code
elements.runCode.addEventListener('click', function () {
    elements.outputs.classList.add('active');
});

// Toggle tab modal
elements.tabBtn.addEventListener('click', function () {
    elements.tabModal.classList.toggle('active');
				codeEditor.focus();
});

// Toggle list modal
elements.toggleListBtn.addEventListener('click', function () {
    elements.listModal.classList.toggle('active');
});

// Open code items modal
elements.codeLiModalBtn.addEventListener('click', function () {
    elements.listModal.classList.remove('active');
    elements.codeItemsModal.classList.add('active');
});

// Open about modal
elements.aboutModalBtn.addEventListener('click', function () {
    elements.listModal.classList.remove('active');
    elements.aboutUsModal.classList.add('active');
});

// Close about modal
elements.closeAboutUsModalBtn.addEventListener('click', function () {
    elements.aboutUsModal.classList.remove('active');
});

// Open settings modal
elements.settingsModalBtn.addEventListener('click', function () {
    elements.listModal.classList.remove('active');
    elements.settingsModal.classList.add('active');
});

// Close settings modal
elements.closeSettingsModal.addEventListener('click', function () {
    elements.settingsModal.classList.remove('active');
});

// Open fontsize select modal
elements.FontSizeSelectBtn.addEventListener('click', function () {
    elements.backdrop.classList.add('active');
    elements.fontsizeSelectModal.classList.add('active');
});

// Close fontsize select modal
elements.closeFontSizeModdal.addEventListener('click', function () {
    elements.backdrop.classList.remove('active');
    elements.fontsizeSelectModal.classList.remove('active');
});

// Open theme select modal
elements.themeSelectBtn.addEventListener('click', function () {
    elements.backdrop.classList.add('active');
    elements.themeSelectModal.classList.add('active');
});

// Close theme select modal
elements.closeThemeModdal.addEventListener('click', function () {
    elements.backdrop.classList.remove('active');
    elements.themeSelectModal.classList.remove('active');
});

// Open mode select modal
elements.modeSelectBtn.addEventListener('click', function () {
    elements.backdrop.classList.add('active');
    elements.modeSelectModal.classList.add('active');
});

// Close mode select modal
elements.closeModeModal.addEventListener('click', function () {
    elements.backdrop.classList.remove('active');
    elements.modeSelectModal.classList.remove('active');
});

// Open fontweight select modal
elements.fontweightBtn.addEventListener('click', function () {
    elements.backdrop.classList.add('active');
    elements.fontweightSelectModal.classList.add('active');
});

// Close fontweight select modal
elements.closeFontweightModal.addEventListener('click', function () {
    elements.backdrop.classList.remove('active');
    elements.fontweightSelectModal.classList.remove('active');
});

// Open tabsize select modal
elements.tabsizeSelectBtn.addEventListener('click', function () {
    elements.backdrop.classList.add('active');
    elements.tabsizeSelectModal.classList.add('active');
});

// Close tabsize select modal
elements.closeTabsizeModdal.addEventListener('click', function () {
    elements.backdrop.classList.remove('active');
    elements.tabsizeSelectModal.classList.remove('active');
});

// Set theme to light
elements.lightTheme.onclick = function (e) {
    elements.backdrop.classList.remove('active');
    elements.themeSelectModal.classList.remove('active');
    elements.selectedTheme.innerHTML = `light`;
};

// Set theme to dark
elements.darkTheme.onclick = function (e) {
    elements.backdrop.classList.remove('active');
    elements.themeSelectModal.classList.remove('active');
    elements.selectedTheme.innerHTML = `Dark`;
};

// Set theme to system default
elements.systemDefault.onclick = function (e) {
    elements.backdrop.classList.remove('active');
    elements.themeSelectModal.classList.remove('active');
    elements.selectedTheme.innerHTML = `System Default`;
};

// Close modals when clicking outside
window.onclick = function (e) {
    if (e.target == elements.backdrop) {
        elements.backdrop.classList.remove('active');
        elements.fontsizeSelectModal.classList.remove('active');
        elements.themeSelectModal.classList.remove('active');
        elements.modeSelectModal.classList.remove('active');
        elements.fontweightSelectModal.classList.remove('active');
        elements.tabsizeSelectModal.classList.remove('active');
    }
};

// Close modals when clicking outside (specific modals)
window.addEventListener('click', function (event) {
    // Check if the clicked element is not within the lists modal
    if (!event.target.closest('#lists') && !event.target.closest('#lists-modal-Btn')) {
        elements.listModal.classList.remove('active');
    }

     // Check if the clicked element is not within the code-items-lists modal
    if (!event.target.closest('#code-items-lists') && !event.target.closest('#code-modal-btn')) {
        elements.codeItemsModal.classList.remove('active');
    }
});

// Check if the clicked element is not within the tabsizeSelectModal modal
window.addEventListener('click', function (event) {
    if (!event.target.closest('#tabsizeSelectModal') && !event.target.closest('#tabsizeSelectBtn')) {
        elements.tabsizeSelectModal.classList.remove('active');
    }
});

// Check if the clicked element is not within the fontweightSelectModal modal
window.addEventListener('click', function (event) {
    if (!event.target.closest('#fontweightSelectModal') && !event.target.closest('#fontweightBtn')) {
        elements.fontweightSelectModal.classList.remove('active');
    }
});

// Check if the clicked element is not within the modeSelectModal modal
window.addEventListener('click', function (event) {
    if (!event.target.closest('#modeSelectModal') && !event.target.closest('#modeSelectBtn')) {
        elements.modeSelectModal.classList.remove('active');
    }
});

// Check if the clicked element is not within the themeSelectModal modal
window.addEventListener('click', function (event) {
    if (!event.target.closest('#themeSelectModal') && !event.target.closest('#themeSelectBtn')) {
        elements.themeSelectModal.classList.remove('active');
    }
});

// Check if the clicked element is not within the fontsizeSelectModal modal
window.addEventListener('click', function (event) {
    if (!event.target.closest('#fontsizeSelectModal') && !event.target.closest('#FontSizeSelectBtn')) {
        elements.fontsizeSelectModal.classList.remove('active');
    }
});


const exitOutputModal = document.getElementById('exitoutputModal');

exitOutputModal.addEventListener('click', function() {
		elements.toggleOutputBarListActive.classList.remove('active');
    elements.outputBarItems.classList.remove('active');
			  	elements.outputs.classList.remove('active');
});

const enableWordwrapSection = document.getElementById('enableWordwrap');
const wordWrapCheckbox = document.querySelector('.word-wrap-radio');

enableWordwrapSection.addEventListener('click', function() {
    wordWrapCheckbox.checked = !wordWrapCheckbox.checked;
});

const enableAutoSaveSection = document.getElementById('enableAutoSave');
const autoSaveCheckbox = document.querySelector('.auto-save-radio');

enableAutoSaveSection.addEventListener('click', function() {
    autoSaveCheckbox.checked = !autoSaveCheckbox.checked;
});
const useSoftab = document.getElementById('useSoftab');
const usesoftTabCheckbox = document.querySelector('.use-soft-tab-radio');

useSoftab.addEventListener('click', function() {
    usesoftTabCheckbox.checked = !usesoftTabCheckbox.checked;
});

const workerSyntax = document.getElementById('workerr-syntax-error');
const workerCheckbox = document.querySelector('.syntax-error-radio');

workerSyntax.addEventListener('click', function() {
    workerCheckbox.checked = !workerCheckbox.checked;
});

const showLineNumbers = document.getElementById('showLineNumbers');
const lineNumbersCheckbox = document.querySelector('.line-numbers-radio');

showLineNumbers.addEventListener('click', function() {
    lineNumbersCheckbox.checked = !lineNumbersCheckbox.checked;
});


const enableIndentedSoftWrap = document.getElementById('enableIndentedSoftWrap');
const indentedsoftWrapCheckbox = document.querySelector('.indent-soft-wrap-radio');

enableIndentedSoftWrap.addEventListener('click', function() {
    indentedsoftWrapCheckbox.checked = !indentedsoftWrapCheckbox.checked;
});

const enableCodeSnippets = document.getElementById('enableCodeSnippets');
const codeSnippetCheckbox = document.querySelector('.code-snipet-enable-radio');

enableCodeSnippets.addEventListener('click', function() {
    codeSnippetCheckbox.checked = !codeSnippetCheckbox.checked;
});

const showSpaces = document.getElementById('showSpaces');
const showSpacesCheckbox = document.querySelector('.show-spaces-radio');

showSpaces.addEventListener('click', function() {
    showSpacesCheckbox.checked = !showSpacesCheckbox.checked;
});
const enableAutoCompletion = document.getElementById('enableAutoCompletion');
const autoCompleteCheckbox = document.querySelector('.auto-complete-radio');

enableAutoCompletion.addEventListener('click', function() {
    autoCompleteCheckbox.checked = !autoCompleteCheckbox.checked;
});


