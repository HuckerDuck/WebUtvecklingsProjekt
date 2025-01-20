//1 -  Javascript för Hamburgare menyn i mobilen

const hamburger = document.getElementById("hamburger");
const navsmall = document.getElementById("navbarMobileList");

hamburger.addEventListener("click", () => {
    navbarMobileList.classList.toggle("active");
});

//2 - Filtering av kategorier
document.addEventListener("DOMContentLoaded", () => {
    // Dropdown-menyn
    const filterDropdown = document.getElementById("filter"); 
    
    // Alla artiklarna i listan
    const articles = document.querySelectorAll(".article"); 

    // 
    filterDropdown.addEventListener("change", () => {
        const selectedCategory = filterDropdown.value.toLowerCase(); 

        // Loopar genom allt innehåll
        articles.forEach((article) => {
            article.style.display = 
                selectedCategory === "all" || article.dataset.category.toLowerCase().includes(selectedCategory)
                ? "block"
                : "none";
        });
    });
});
