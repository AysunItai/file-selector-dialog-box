const selectFileButton = document.getElementById('select-file-button');
const fileInput = document.getElementById('file-input');
  

  selectFileButton.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    // Do something with the selected file(s)
    
    const selectedFile = fileInput.files[0];
    console.log('Selected file:', selectedFile.name);
  });