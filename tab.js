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
        wrap: true
    });

    const jsEditor = ace.edit("jsCode");
    jsEditor.setTheme("ace/theme/tomorrow_night");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.setOptions({
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        wrap: true
    });

    // Load saved progress from local storage
    function loadFromLocalStorage() {
        const htmlContent = localStorage.getItem('htmlContent');
        const cssContent = localStorage.getItem('cssContent');
        const jsContent = localStorage.getItem('jsContent');
        const fontSize = localStorage.getItem('fontSize');
        const fontWeight = localStorage.getItem('fontWeight');
        const wordWrap = localStorage.getItem('wordWrap');
       const autoSave = localStorage.getItem('autoSave');
        const softTab = localStorage.getItem('softTab');
        const syntaxError = localStorage.getItem('syntaxError');
        const lineNumbers = localStorage.getItem('lineNumbers');
        const indentedSoftWrap = localStorage.getItem('indentedSoftWrap');
        const codeSnippets = localStorage.getItem('codeSnippets');
        const showSpaces = localStorage.getItem('showSpaces');
        const autoComplete = localStorage.getItem('autoComplete');

        if (htmlContent) {
            htmlEditor.setValue(htmlContent, -1);
        }
        if (cssContent) {
            cssEditor.setValue(cssContent, -1);
        }
        if (jsContent) {
            jsEditor.setValue(jsContent, -1);
        }
        if (fontSize) {
            applyFontSize(parseInt(fontSize));
        }
        if (fontWeight) {
            applyFontWeight(fontWeight);
        }
        if (wordWrap) {
            wordWrapCheckbox.checked = wordWrap === 'true';
            htmlEditor.getSession().setUseWrapMode(wordWrap === 'true');
            cssEditor.getSession().setUseWrapMode(wordWrap === 'true');
            jsEditor.getSession().setUseWrapMode(wordWrap === 'true');
        }
        if (autoSave) {
            autoSaveCheckbox.checked = autoSave === 'true';
        }
        if (softTab) {
            usesoftTabCheckbox.checked = softTab === 'true';
            htmlEditor.getSession().setUseSoftTabs(softTab === 'true');
            cssEditor.getSession().setUseSoftTabs(softTab === 'true');
            jsEditor.getSession().setUseSoftTabs(softTab === 'true');
        }
        if (syntaxError) {
            workerCheckbox.checked = syntaxError === 'true';
            htmlEditor.session.setOption('useWorker', syntaxError === 'true');
            cssEditor.session.setOption('useWorker', syntaxError === 'true');
            jsEditor.session.setOption('useWorker', syntaxError === 'true');
        }
        if (lineNumbers) {
            lineNumbersCheckbox.checked = lineNumbers === 'true';
            htmlEditor.renderer.setShowGutter(lineNumbers === 'true');
            cssEditor.renderer.setShowGutter(lineNumbers === 'true');
            jsEditor.renderer.setShowGutter(lineNumbers === 'true');
        }
        if (indentedSoftWrap) {
            indentedsoftWrapCheckbox.checked = indentedSoftWrap === 'true';
            htmlEditor.setOption('indentedSoftWrap', indentedSoftWrap === 'true');
            cssEditor.setOption('indentedSoftWrap', indentedSoftWrap === 'true');
            jsEditor.setOption('indentedSoftWrap', indentedSoftWrap === 'true');
        }
        if (codeSnippets) {
            codeSnippetCheckbox.checked = codeSnippets === 'true';
        }
        if (showSpaces) {
            showSpacesCheckbox.checked = showSpaces === 'true';
            htmlEditor.setShowInvisibles(showSpaces === 'true');
            cssEditor.setShowInvisibles(showSpaces === 'true');
            jsEditor.setShowInvisibles(showSpaces === 'true');
        }
        if (autoComplete) {
            autoCompleteCheckbox.checked = autoComplete === 'true';
            htmlEditor.setOption('enableBasicAutocompletion', autoComplete === 'true');
            cssEditor.setOption('enableBasicAutocompletion', autoComplete === 'true');
            jsEditor.setOption('enableBasicAutocompletion', autoComplete === 'true');
        }
        // Load selected editor mode
        const selectedMode = localStorage.getItem('selectedMode');
        if (selectedMode) {
            applyEditorMode(selectedMode);
            document.getElementById(selectedMode).checked = true;
        }
    }

    // Save progress to local storage
    function saveToLocalStorage() {
        localStorage.setItem('htmlContent', htmlEditor.getValue());
        localStorage.setItem('cssContent', cssEditor.getValue());
        localStorage.setItem('jsContent', jsEditor.getValue());
        const selectedMode = document.querySelector('.editor-mode-radio:checked').value;
        localStorage.setItem('selectedMode', selectedMode);
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
        htmlEditor.setFontSize(size);
        cssEditor.setFontSize(size);
        jsEditor.setFontSize(size);

        // Toggle the radio buttons
        const radioButtons = document.querySelectorAll('.font-size-radio');
        radioButtons.forEach(radioButton => {
            if (parseInt(radioButton.value) === size) {
                radioButton.checked = true;
            } else {
                radioButton.checked = false;
            }
        });
    }

    // Apply font weight
    function applyFontWeight(weight) {
        selectedFontWeight.innerHTML = weight;
        htmlEditor.container.style.fontWeight = weight;
        cssEditor.container.style.fontWeight = weight;
        jsEditor.container.style.fontWeight = weight;

        // Toggle the radio buttons
        const weightradioButtons = document.querySelectorAll('.font-weight-radio');
        weightradioButtons.forEach(weightradioButton => {
            if (weightradioButton.value === weight) {
                weightradioButton.checked = true;
            } else {
                weightradioButton.checked = false;
            }
        });
    }

				 // Function to apply editor mode
    function applyEditorMode(mode) {
        switch (mode) {
            case 'html':
                selectedEditorMode.innerHTML = 'HTML';
                cssModal.style.display = 'none';
                jsModal.style.display = 'none';
                break;
            case 'htmlAndCss':
                selectedEditorMode.innerHTML = 'HTML & CSS';
                cssModal.style.display = 'block';
                htmlModal.style.display = 'block';
                jsModal.style.display = 'none';
                break;
            case 'javascript':
                selectedEditorMode.innerHTML = 'JavaScript';
                cssModal.style.display = 'none';
                htmlModal.style.display = 'none';
                jsModal.style.display = 'block';
                break;
            case 'all':
                selectedEditorMode.innerHTML = 'All';
                cssModal.style.display = 'block';
                htmlModal.style.display = 'block';
                jsModal.style.display = 'block';
                break;
            default:
                break;
        }
    }


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

    // Add event listeners to font weight buttons
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
            htmlEditor.container.style.fontWeight = weight;
            cssEditor.container.style.fontWeight = weight;
            jsEditor.container.style.fontWeight = weight;

            // Save to local storage
            saveToLocalStorage();
        });
    });

    // Event listeners for saving progress
    document.getElementById("saveProgress").addEventListener("click", saveToLocalStorage);

    // Event listener for word wrap option
    wordWrapCheckbox.addEventListener('change', function() {
        const useWrapMode = this.checked;
        htmlEditor.getSession().setUseWrapMode(useWrapMode);
        cssEditor.getSession().setUseWrapMode(useWrapMode);
        jsEditor.getSession().setUseWrapMode(useWrapMode);
        localStorage.setItem('wordWrap', useWrapMode);
    });

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

    // Load the initial state from local storage
    loadFromLocalStorage();
}); 