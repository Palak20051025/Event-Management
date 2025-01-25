document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const fileNameDisplay = document.getElementById("fileName");
    const progressBar = document.getElementById("upload-progress");
    const progressText = document.getElementById("upload-progress-text");

    let uploadInterval;

    fileInput.addEventListener("change", () => {
        // Reset previous progress if a new file is chosen
        if (uploadInterval) {
            clearInterval(uploadInterval);
        }

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];

            // Basic file validation (e.g., check file size or type)
            if (file.size > 5000000) { // Limit file size to 5MB
                fileNameDisplay.textContent = "File is too large. Max size is 5MB.";
                progressBar.value = 0;
                progressText.textContent = "Upload failed";
                return;
            }

            fileNameDisplay.textContent = file.name;
            startUploadSimulation(); // Start the upload simulation
        } else {
            fileNameDisplay.textContent = "No file chosen";
            progressBar.value = 0;
            progressText.textContent = "Upload failed";
        }
    });

    function startUploadSimulation() {
        let progress = 0;
        progressBar.value = 0;
        progressText.textContent = "0% uploaded";

        // Simulate an upload process
        uploadInterval = setInterval(() => {
            progress += 10;
            progressBar.value = progress;
            progressText.textContent = `${progress}% uploaded`;

            if (progress >= 100) {
                clearInterval(uploadInterval);
                progressText.textContent = "Upload complete!";
            }
        }, 200); // Update every 200ms
    }
});
