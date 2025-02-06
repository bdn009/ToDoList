function search(){
    const searchBar=document.getElementById('searchBar');
    searchBar.classList.toggle('border-b-cyan-300');
    searchBar.classList.toggle('border-b-2');
}
document.addEventListener('DOMContentLoaded', (event) => {
    const currentDateElement = document.getElementById('currentDate');
    const currentDate = new Date().toLocaleDateString();
    currentDateElement.textContent = `Today's Date: ${currentDate}`;
});