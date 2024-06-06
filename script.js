document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('themeToggleBtn1');
    const body = document.body;

    themeToggleBtn.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme'); // Add this line
        // You can also add localStorage functionality to remember the theme choice
    });
});



const togglebtn = document.querySelector('#toggleMenu');
const dropDownMenu = document.querySelector('.dropdownmenu');

togglebtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
}





document.getElementById('downloadResumeButton').addEventListener('click', function() {
    const pdfLink = 'https://drive.google.com/file/d/1VNPUTbC-HkEOqPfl-agwifNb7vu5xvcb/view?usp=drive_link';
    window.open(pdfLink, '_blank');
});







