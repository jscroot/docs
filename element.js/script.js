

import { container, onClick, onChange,onInput,runAfterDOM,runAfterAll ,textFocus,textBlur,getValue,getAttributeValue  } from 'https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js';

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
//8
  // Example 1: Auto Blur after Enter
  const input = container("autoBlurInput");
  input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          container("blurOutput").textContent = 
              `Status: Input selesai - "${this.value}"`;
          textBlur("autoBlurInput");
      }
  });
  
  // Example 2: Validation Blur
  onInput("validateBlurInput", function(element) {
      const value = parseInt(element.value);
      const output = container("blurValidationOutput");
      
      if (value < 1 || value > 100 || isNaN(value)) {
          output.textContent = "Input harus antara 1-100";
          output.style.color = "red";
      } else {
          output.textContent = "Input valid!";
          output.style.color = "green";
          textBlur("validateBlurInput");
      }
  });
  
  // Example 3: Toggle Focus/Blur
  let isFocused = false;
  onClick("toggleFocusBtn", function() {
      const status = container("toggleStatus");
      
      if (isFocused) {
          textBlur("toggleInput");
          status.textContent = "Status: Tidak fokus";
      } else {
          textFocus("toggleInput");
          status.textContent = "Status: Fokus";
      }
      isFocused = !isFocused;
  });
  
  // Example 4: Timer Blur
  onClick("startTimerBtn", function() {
      const status = container("timerStatus");
      textFocus("timerInput");
      status.textContent = "Timer dimulai... (3 detik)";
      
      setTimeout(() => {
          textBlur("timerInput");
          status.textContent = "Waktu habis! Focus dihapus.";
      }, 3000);
  });
//9
// Example 1: Get Text Input Value
onClick("getTextBtn", function() {
    const value = getValue("textInput");
    container("textOutput").textContent = 
        `Nilai yang diambil: "${value}"`;
});

// Example 2: Calculator
onClick("calculateBtn", function() {
    const num1 = Number(getValue("num1"));
    const num2 = Number(getValue("num2"));
    
    const sum = num1 + num2;
    const product = num1 * num2;
    
    container("calcOutput").textContent = 
        `Hasil:\nPenjumlahan: ${sum}\nPerkalian: ${product}`;
});

// Example 3: Form Select and Textarea
onClick("submitFormBtn", function() {
    const color = getValue("colorSelect");
    const message = getValue("messageArea");
    
    let output = "Form Submission:\n";
    output += `Warna: ${color || 'Tidak dipilih'}\n`;
    output += `Pesan: ${message || 'Kosong'}`;
    
    container("formOutput").textContent = output;
});

// Example 4: Real-time Monitoring
onInput("rangeValue", function() {
    const value = getValue("rangeValue");
    container("monitorOutput").textContent = 
        `Nilai slider: ${value}`;
});

onInput("textValue", function() {
    const value = getValue("textValue");
    container("monitorOutput").textContent = 
        `Panjang teks: ${value.length} karakter`;
});
//10
  
    // Example 1: Data Attributes
    onClick("getUserInfoBtn", function() {
        const userId = getAttributeValue("userButton", "data-user-id");
        const role = getAttributeValue("userButton", "data-role");
        
        container("userOutput").textContent = 
            `User ID: ${userId}\nRole: ${role}`;
    });
    
    // Example 2: Input Attributes
    onClick("getInputAttrBtn", function() {
        const maxLength = getAttributeValue("limitedInput", "maxlength");
        const pattern = getAttributeValue("limitedInput", "pattern");
        const placeholder = getAttributeValue("limitedInput", "placeholder");
        
        let output = "Input Attributes:\n";
        output += `Max Length: ${maxLength}\n`;
        output += `Pattern: ${pattern}\n`;
        output += `Placeholder: ${placeholder}`;
        
        container("inputAttrOutput").textContent = output;
    });
    
    // Example 3: Link and Image Attributes
    onClick("getLinkImageAttrBtn", function() {
        // Get link attributes
        const href = getAttributeValue("demoLink", "href");
        const target = getAttributeValue("demoLink", "target");
        const rel = getAttributeValue("demoLink", "rel");
        
        // Get image attributes
        const src = getAttributeValue("demoImage", "src");
        const alt = getAttributeValue("demoImage", "alt");
        const width = getAttributeValue("demoImage", "width");
        
        let output = "Link Attributes:\n";
        output += `HREF: ${href}\n`;
        output += `Target: ${target}\n`;
        output += `Rel: ${rel}\n\n`;
        output += "Image Attributes:\n";
        output += `Source: ${src}\n`;
        output += `Alt Text: ${alt}\n`;
        output += `Width: ${width}px`;
        
        container("linkImageOutput").textContent = output;
    });
    
    // Example 4: Data Binding
    onClick("nextProductBtn", function() {
        // Get product info
        const productId = getAttributeValue("productCard", "data-product-id");
        const price = getAttributeValue("productCard", "data-price");
        const category = getAttributeValue("productCard", "data-category");
        const stock = getAttributeValue("productCard", "data-stock");
        
        // Get pagination info
        const current = getAttributeValue("nextProductBtn", "data-current");
        const total = getAttributeValue("nextProductBtn", "data-total");
        
        let output = "Product Information:\n";
        output += `ID: ${productId}\n`;
        output += `Price: $${price}\n`;
        output += `Category: ${category}\n`;
        output += `Stock: ${stock}\n\n`;
        output += `Showing product ${current} of ${total}`;
        
        container("productOutput").textContent = output;
    });