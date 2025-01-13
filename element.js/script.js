

import { container, onClick, onChange,onInput,runAfterDOM,runAfterAll ,textFocus   } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js';

// Container function examples
window.getTextContent = function() {
    const element = container("demoText");
    const outputElement = container("output1");
    outputElement.textContent = `Teks yang didapat: "${element.textContent.trim()}"`;
};

  // onClick examples
  let count = 0;

onClick("incrementBtn", function() {
count++;
container("counter").textContent = count;
});

onClick("decrementBtn", function() {
count--;
container("counter").textContent = count;
});

onClick("resetCounterBtn", function() {
count = 0;
container("counter").textContent = count;
});

onClick("changeColorBtn", function() {
const colors = ['#4CAF50', '#2196F3', '#f44336', '#9C27B0'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
container("colorBox").style.backgroundColor = randomColor;
container("colorBox").style.color = 'white';
});

// onChange examples
onChange("fruitSelect", function(element) {
    const selectedText = element.options[element.selectedIndex].text;
    container("fruitOutput").textContent = `Anda memilih: ${selectedText}`;
});

onChange("colorPicker", function(element) {
    const color = element.value;
    container("colorPreview").style.backgroundColor = color;
    container("colorOutput").textContent = `Kode warna: ${color}`;
});

onChange("fileInput", function(element) {
    const file = element.files[0];
    container("fileOutput").textContent = 
        `File: ${file.name}\nUkuran: ${(file.size/1024).toFixed(2)} KB`;
});

// Initialize color preview
container("colorPreview").style.backgroundColor = "#4CAF50";
//4
  // onInput examples
  onInput("messageInput", function(element) {
    const maxLength = element.maxLength;
    const currentLength = element.value.length;
    container("charCount").textContent = `${currentLength}/${maxLength} karakter`;
});

onInput("rangeSlider", function(element) {
    container("rangeOutput").textContent = `Nilai: ${element.value}`;
});

// Comparison examples
onChange("onChangeInput", function(element) {
    container("onChangeOutput").textContent = `Nilai: ${element.value}`;
});

onInput("onInputDemo", function(element) {
    container("onInputOutput").textContent = `Nilai: ${element.value}`;
});
//5
 // Example 1: Content Initialization
 runAfterDOM(function(event) {
    const content = document.getElementById('initContent');
    const status = document.getElementById('domStatus');
    
    status.className = 'status success';
    status.textContent = 'DOM telah dimuat!';
    
    content.style.opacity = '1';
});

// Example 2: Event Listener Setup
runAfterDOM(function(event) {
    const button = document.getElementById('demoButton');
    const status = document.getElementById('listenerStatus');
    
    button.addEventListener('click', function() {
        document.getElementById('buttonOutput').textContent = 'Button diklik!';
    });
    
    status.className = 'status success';
    status.textContent = 'Event listeners telah di-setup!';
});

// Example 3: Form Validation Setup
runAfterDOM(function(event) {
    const input = document.getElementById('username');
    const status = document.getElementById('formStatus');
    
    input.addEventListener('input', function() {
        const output = document.getElementById('validationOutput');
        if(this.value.length < 3) {
            output.textContent = 'Username minimal 3 karakter';
        } else {
            output.textContent = 'Username valid';
        }
    });
    
    status.className = 'status success';
    status.textContent = 'Validasi form telah di-setup!';
});
//6
  // Example 1: Image Loading Status
  runAfterAll(function(event) {
    const status = document.getElementById('imageLoadStatus');
    status.className = 'status success';
    status.innerHTML = 'Semua resources termasuk gambar telah dimuat!';
});

// Example 2: Resource Loading Report
runAfterAll(function(event) {
    const report = document.getElementById('resourceReport');
    const resources = performance.getEntriesByType('resource');
    let summary = `Total resources: ${resources.length}\n`;
    summary += `Images: ${resources.filter(r => r.initiatorType === 'img').length}\n`;
    summary += `Scripts: ${resources.filter(r => r.initiatorType === 'script').length}\n`;
    summary += `Stylesheets: ${resources.filter(r => r.initiatorType === 'link').length}`;
    report.textContent = summary;
});

// Example 3: Lazy Loading Setup
runAfterAll(function(event) {
    const container = document.getElementById('lazyLoadContainer');
    container.innerHTML = `
        <div class="status success">
            Lazy loading telah di-setup!
            Scroll untuk memuat konten tambahan.
        </div>
    `;
});
//7
   // Example 1: Auto Focus
onClick("focusBtn", function() {
textFocus("autoFocusInput");
});

// Example 2: Multiple Fields
onClick("focusField1", function() {
textFocus("field1");
});

onClick("focusField2", function() {
textFocus("field2");
});

onClick("focusField3", function() {
textFocus("field3");
});

// Example 3: Form Validation
onClick("validateBtn", function() {
const nameField = container("nameField");
const emailField = container("emailField");
const validationMessage = container("validationMessage");

if (!nameField.value) {
    validationMessage.textContent = "Nama harus diisi!";
    textFocus("nameField");
    return;
}

if (!emailField.value) {
    validationMessage.textContent = "Email harus diisi!";
    textFocus("emailField");
    return;
}

validationMessage.textContent = "Semua field valid!";
});