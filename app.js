
document.addEventListener("DOMContentLoaded", function() {
    // Initialize Ace Editor for each textarea
    const htmlEditor = ace.edit("codeEditor");
    htmlEditor.setTheme("ace/theme/tomorrow_night");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        wrap: true,
    												enableEmmet: true
    });

    const cssEditor = ace.edit("cssCode");
    cssEditor.setTheme("ace/theme/tomorrow_night");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        wrap: true,
    				enableEmmet: true
    });

    const jsEditor = ace.edit("jsCode");
    jsEditor.setTheme("ace/theme/tomorrow_night");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        wrap: true,
    				enableEmmet: true
    });

    // Load saved progress from local storage
    function loadFromLocalStorage() {
        const htmlContent = localStorage.getItem('htmlContent');
        const cssContent = localStorage.getItem('cssContent');
        const jsContent = localStorage.getItem('jsContent');
        const fontSize = localStorage.getItem('fontSize');
        const wordWrap = localStorage.getItem('wordWrap');
        const autoSave = localStorage.getItem('autoSave');
        const softTab = localStorage.getItem('softTab');
        const syntaxError = localStorage.getItem('syntaxError');
        const lineNumbers = localStorage.getItem('lineNumbers');
        const indentedSoftWrap = localStorage.getItem('indentedSoftWrap');
        const codeSnippets = localStorage.getItem('codeSnippets');
        const showSpaces = localStorage.getItem('showSpaces');
        const autoComplete = localStorage.getItem('autoComplete');
        const fontWeight = localStorage.getItem('fontWeight');
        
        if (htmlContent) htmlEditor.setValue(htmlContent, -1);
        if (cssContent) cssEditor.setValue(cssContent, -1);
        if (jsContent) jsEditor.setValue(jsContent, -1);
        if (fontSize) applyFontSize(parseInt(fontSize));
        if (fontWeight) applyFontWeight(fontWeight);
        if (wordWrap) {
            wordWrapCheckbox.checked = wordWrap === 'true';
            [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.getSession().setUseWrapMode(wordWrap === 'true'));
        }
        if (autoSave) autoSaveCheckbox.checked = autoSave === 'true';
        if (softTab) {
            usesoftTabCheckbox.checked = softTab === 'true';
            [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.getSession().setUseSoftTabs(softTab === 'true'));
        }
        if (syntaxError) {
            workerCheckbox.checked = syntaxError === 'true';
            [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.session.setOption('useWorker', syntaxError === 'true'));
        }
        if (lineNumbers) {
            lineNumbersCheckbox.checked = lineNumbers === 'true';
            [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.renderer.setShowGutter(lineNumbers === 'true'));
        }
        if (indentedSoftWrap) {
            indentedsoftWrapCheckbox.checked = indentedSoftWrap === 'true';
            [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.setOption('indentedSoftWrap', indentedSoftWrap === 'true'));
        }
        if (codeSnippets) codeSnippetCheckbox.checked = codeSnippets === 'true';
        if (showSpaces) {
            showSpacesCheckbox.checked = showSpaces === 'true';
            [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.setShowInvisibles(showSpaces === 'true'));
        }
        if (autoComplete) {
            autoCompleteCheckbox.checked = autoComplete === 'true';
            [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.setOption('enableBasicAutocompletion', autoComplete === 'true'));
        }
    }

    // Save progress to local storage
    function saveToLocalStorage() {
        localStorage.setItem('htmlContent', htmlEditor.getValue());
        localStorage.setItem('cssContent', cssEditor.getValue());
        localStorage.setItem('jsContent', jsEditor.getValue());
        localStorage.setItem('fontWeight', selectedFontWeight.innerHTML);
    }

    // Save font size to local storage
    function saveFontSizeToLocalStorage(size) {
        localStorage.setItem('fontSize', size);
    }

    // Apply font size
    function applyFontSize(size) {
        selectedFontSize.innerHTML = `${size}px`;
        output.style.fontSize = `${size}px`;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.setFontSize(size));
        // Toggle the radio buttons
        const radioButtons = document.querySelectorAll('.font-size-radio');
        radioButtons.forEach(radioButton => {
            radioButton.checked = parseInt(radioButton.value) === size;
        });
    }

    // Apply font weight
    function applyFontWeight(weight) {
        selectedFontWeight.innerHTML = weight;
        [htmlEditor.container, cssEditor.container, jsEditor.container].forEach(container => container.style.fontWeight = weight);
        // Toggle the radio buttons
        const weightradioButtons = document.querySelectorAll('.font-weight-radio');
        weightradioButtons.forEach(weightradioButton => {
            weightradioButton.checked = weightradioButton.value === weight;
        });
    }
    
				
    // Add event listeners to font weight buttons
    const fontWeightButtons = [
        'bold', 'normal', '100', '200', '300', '400', '500', '600', '700', '800', '900'
    ];

    fontWeightButtons.forEach(weight => {
        const element = document.getElementById(weight);
        element.addEventListener('click', function() {
            backdrop.classList.remove('active');
            fontweightSelectModal.classList.remove('active');
            applyFontWeight(weight);
            saveToLocalStorage();
        });
    });

				// Function to insert text at the current cursor position in the active editor
    function insertTextInActiveEditor(text) {
        let activeEditor = htmlEditor;

        if (cssEditor.isFocused()) {
            activeEditor = cssEditor;
        } else if (jsEditor.isFocused()) {
            activeEditor = jsEditor;
        }

        activeEditor.insert(text);
    }

    // Add event listeners to buttons for inserting text
    document.getElementById("bracket").addEventListener("click", function() {
        insertTextInActiveEditor("()");
    });

    document.getElementById("equalsto").addEventListener("click", function() {
        insertTextInActiveEditor("=");
    });

    document.getElementById("exclamation").addEventListener("click", function() {
        insertTextInActiveEditor("!");
    });

    document.getElementById("doubleAnd").addEventListener("click", function() {
        insertTextInActiveEditor("&&");
    });

    document.getElementById("semicolumn").addEventListener("click", function() {
        insertTextInActiveEditor(";");
    });

    document.getElementById("dot").addEventListener("click", function() {
        insertTextInActiveEditor(".");
    });

    document.getElementById("singlequotemark").addEventListener("click", function() {
        insertTextInActiveEditor("''");
    });

    document.getElementById("doublequotemark").addEventListener("click", function() {
        insertTextInActiveEditor('""');
    });

    document.getElementById("tabIndent").addEventListener("click", function() {
        const tabSize = parseInt(document.querySelector('.tab-size-radio:checked').value, 10);
        let tabString = "";
        for (let i = 0; i < tabSize; i++) {
            tabString += " "; // Add spaces for the tab size
        }
        insertTextInActiveEditor(tabString);
    });

    // Add event listeners to each tab size option in the modal
    const tabSizeRadios = document.querySelectorAll('.tab-size-radio');
    tabSizeRadios.forEach(function(tabSizeRadio) {
        tabSizeRadio.addEventListener('change', function() {
            const selectedTabSize = parseInt(this.value, 10);
            const activeEditor = htmlEditor.isFocused() ? htmlEditor : (cssEditor.isFocused() ? cssEditor : jsEditor);
            activeEditor.session.setTabSize(selectedTabSize);
            saveToLocalStorage();
        });
    });


				
    // Event listeners to save progress on change
    [htmlEditor, cssEditor, jsEditor].forEach(editor => {
        editor.session.on('change', saveToLocalStorage);
    });

    enableWordwrapSection.addEventListener('click', function() {
        const isChecked = wordWrapCheckbox.checked;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.getSession().setUseWrapMode(isChecked));
        saveToLocalStorage();
    });

    enableAutoSaveSection.addEventListener('click', saveToLocalStorage);

    useSoftab.addEventListener('click', function() {
        const isChecked = usesoftTabCheckbox.checked;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.getSession().setUseSoftTabs(isChecked));
        saveToLocalStorage();
    });

    workerSyntax.addEventListener('click', function() {
        const isChecked = workerCheckbox.checked;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.session.setOption('useWorker', isChecked));
        saveToLocalstorage();
    });

    showLineNumbers.addEventListener('click', function() {
        const isChecked = lineNumbersCheckbox.checked;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.renderer.setShowGutter(isChecked));
        saveToLocalStorage();
    });

    enableIndentedSoftWrap.addEventListener('click', function() {
        const isChecked = indentedsoftWrapCheckbox.checked;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.setOption('indentedSoftWrap', isChecked));
        saveToLocalStorage();
    });

    enableCodeSnippets.addEventListener('click', function() {
        saveToLocalStorage();
    });

    showSpaces.addEventListener('click', function() {
        const isChecked = showSpacesCheckbox.checked;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.setShowInvisibles(isChecked));
        saveToLocalStorage();
    });

    enableAutoCompletion.addEventListener('click', function() {
        const isChecked = autoCompleteCheckbox.checked;
        [htmlEditor, cssEditor, jsEditor].forEach(editor => editor.setOption('enableBasicAutocompletion', isChecked));
        saveToLocalStorage();
    });
    
    document.getElementById("saveProgress").addEventListener("click", saveToLocalStorage);

    // Function to handle the "Run" button click event
    function run() {
        let cssCode = cssEditor.getValue();
        let jsCode = jsEditor.getValue();
        let codeEditor = htmlEditor.getValue();
        
        let output = document.getElementById('output');
        
        output.contentDocument.open();
        output.contentDocument.write(
            codeEditor +
            "<style>" + cssCode + "</style>" +
            "<script>" + jsCode + "<\/script>"
        );
        output.contentDocument.close();
    }

    const openFileButton = document.getElementById('openFile');
    openFileButton.addEventListener('click', function() {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.js,.html,.htm,.css';
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(event) {
                const fileContent = event.target.result;
                const fileExtension = file.name.split('.').pop().toLowerCase();
                if (fileExtension === 'html' || fileExtension === 'htm') {
                    htmlEditor.setValue(fileContent);
                } else if (fileExtension === 'css') {
                    cssEditor.setValue(fileContent);
                } else if (fileExtension === 'js') {
                    jsEditor.setValue(fileContent);
                }
                // Automatically run the code after loading the file content
                run();
            };
            reader.readAsText(file);
        });
        fileInput.click();
    });

    // Add run function to global scope
    window.run = run;

    // Font size elements
    const fontSizes = [
        10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30
    ];

    fontSizes.forEach(size => {
        const element = document.getElementById(`${size}`);
        element.addEventListener('click', function() {
            backdrop.classList.remove('active');
            fontsizeSelectModal.classList.remove('active');
            applyFontSize(size);
            saveFontSizeToLocalStorage(size);
        });
    });
				
// Function to get the currently focused editor
function getFocusedEditor() {
    if (cssEditor.isFocused()) {
        return cssEditor;
    } else if (jsEditor.isFocused()) {
        return jsEditor;
    }
    return htmlEditor; // Default to HTML editor if none is focused
}

// Function to perform an action ('clear', 'undo', 'redo') on the active editor
function performActionOnActiveEditor(action) {
    let activeEditor = getFocusedEditor(); // Get the focused editor

    // Perform the action based on the argument
    switch (action) {
        case 'clear':
            activeEditor.setValue('');
            break;
        case 'undo':
            activeEditor.undo();
            break;
        case 'redo':
            activeEditor.redo();
            break;
        default:
            console.error('Invalid action:', action);
    }
}

// Add event listeners to buttons and associate them with the correct action
document.getElementById("clearCode").addEventListener("click", function() { performActionOnActiveEditor('clear'); });
document.getElementById("undo").addEventListener("click", function() { performActionOnActiveEditor('undo'); });
document.getElementById("redo").addEventListener("click", function() { performActionOnActiveEditor('redo'); });

				
     // Event listener for auto save option
    autoSaveCheckbox.addEventListener('change', function() {
        const autoSaveEnabled = this.checked;
        localStorage.setItem('autoSave', autoSaveEnabled);
        if (autoSaveEnabled) {
            autoSaveInterval = setInterval(saveToLocalStorage, 3000);
        } else {
            clearInterval(autoSaveInterval);
        }
    });

    // Load any saved progress from local storage
    loadFromLocalStorage();

    // Initial run
    run();
});