// jscript.js
document.addEventListener('DOMContentLoaded', function () {
    
    const codeElement = document.getElementById('raw-code');
  
    // Fetch the raw content of the file
    fetch(rawGitUrl)
      .then(response => response.text())
      .then(data => {
        // Set the content of the code element
        codeElement.textContent = data;
  
        // Highlight the code using Prism.js
        Prism.highlightElement(codeElement);
  
        // Add line numbers using the line-numbers plugin
        Prism.plugins.lineNumbers.initialize({
          // You can customize the options here if needed
          // See: https://prismjs.com/plugins/line-numbers/
        });
      })
      .catch(error => console.error('Error fetching raw file:', error));
  });
  