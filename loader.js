document.addEventListener("DOMContentLoaded", function() {
    const loaderModal = document.getElementById('loaderModal');

    // Function to generate random timeout between 1s and 5s
    function getRandomTimeout() {
        return Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
    }

    // Function to show loader
    function showLoader() {
        loaderModal.style.display = 'block';
        const loaderSpan = document.getElementById('loader');
        const rotate = () => {
            loaderSpan.style.borderColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        };
        setInterval(rotate, 1000);
    }

    // Function to hide loader after random timeout
    function hideLoader() {
        loaderModal.style.maxHeight = '0';
        setTimeout(() => {
            loaderModal.style.display = 'none';
        }, 1000); // Adjust time as needed
    }

    // Call showLoader() function to display loader
    showLoader();

    // Hide loader after random timeout
    setTimeout(hideLoader, getRandomTimeout());
});