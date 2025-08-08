function encryptCaesar() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftKey').value);
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      let c = text.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode((c - 65 + shift) % 26 + 65);
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode((c - 97 + shift) % 26 + 97);
      } else {
        result += text.charAt(i);
      }
    }
  
    document.getElementById('outputText').innerText = result;
    logHistory('Caesar Encrypt', text, result);
  }
  
  function decryptCaesar() {
    const text = document.getElementById('inputText').value;
    const shift = parseInt(document.getElementById('shiftKey').value);
    let result = '';
  
    for (let i = 0; i < text.length; i++) {
      let c = text.charCodeAt(i);
      if (c >= 65 && c <= 90) {
        result += String.fromCharCode((c - 65 - shift + 26) % 26 + 65);
      } else if (c >= 97 && c <= 122) {
        result += String.fromCharCode((c - 97 - shift + 26) % 26 + 97);
      } else {
        result += text.charAt(i);
      }
    }
  
    document.getElementById('outputText').innerText = result;
    logHistory('Caesar Decrypt', text, result);
  }
  
  function logHistory(type, input, output) {
    const logs = JSON.parse(localStorage.getItem('cryptxLogs') || '[]');
    logs.push({ type, input, output, date: new Date().toLocaleString() });
    localStorage.setItem('cryptxLogs', JSON.stringify(logs));
  }
  