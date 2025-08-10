document.addEventListener("DOMContentLoaded", function() {
    const progressBars = document.querySelectorAll(".progress");
    
    progressBars.forEach(bar => {
        let progressValue = bar.getAttribute("data-progress");
        bar.style.width = progressValue + "%";
        bar.textContent = progressValue + "%";
    });
});