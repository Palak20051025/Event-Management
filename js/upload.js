const fileInput = document.getElementById('file-input');
const uploadBtn = document.getElementById('upload-btn');
const uploadProgress = document.getElementById('upload-progress');
const uploadProgressText = document.getElementById('upload-progress-text');

uploadBtn.addEventListener('click', () => {
    // Upload media logic here
    // For demonstration purposes, simulate an upload progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        uploadProgress.value = progress;
        uploadProgressText.textContent = `${progress}% uploaded`;
        if (progress === 100) {
            clearInterval(interval);
            alert('Media uploaded successfully!');
        }
    }, 1000);
});

fileInput.addEventListener('change', () => {
    // Handle file input change event
    console.log('File input changed:', fileInput.files);
});