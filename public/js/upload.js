document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const fileNameDisplay = document.getElementById("fileName");
    const progressBar = document.getElementById("upload-progress");
    const progressText = document.getElementById("upload-progress-text");

    // Function to update the file name display
    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            fileNameDisplay.textContent = file.name;
            startUploadSimulation(); // Start the upload simulation
        } else {
            fileNameDisplay.textContent = "No file chosen";
        }
    });

    // Function to simulate upload progress
    function startUploadSimulation() {
        let progress = 0;
        progressBar.value = 0;
        progressText.textContent = "0% uploaded";

        const interval = setInterval(() => {
            progress += 10;
            progressBar.value = progress;
            progressText.textContent = `${progress}% uploaded`;

            if (progress >= 100) {
                clearInterval(interval);
                progressText.textContent = "Upload complete!";
            }
        }, 200); // Update every 200ms
    }
});