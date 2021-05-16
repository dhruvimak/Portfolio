
window.addEventListener('load', (event) => {
    var date = new Date();
    var currentYear = date.getFullYear();
    var dateEle = document.getElementById('currentYear');
    dateEle.textContent = currentYear;
});