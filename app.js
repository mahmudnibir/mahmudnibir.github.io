document.addEventListener('DOMContentLoaded', function() {
    // Functionality for navigating movie lists
    const arrows = document.querySelectorAll(".arrow");
    const movieLists = document.querySelectorAll(".movie-list");

    arrows.forEach((arrow, i) => {
        const itemNumber = movieLists[i].querySelectorAll("img").length;
        let clickCounter = 0;
        arrow.addEventListener("click", () => {
            const ratio = Math.floor(window.innerWidth / 270);
            clickCounter++;
            if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
                movieLists[i].style.transform = `translateX(${
                    movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
                }px)`;
            } else {
                movieLists[i].style.transform = "translateX(0)";
                clickCounter = 0;
            }
        });

        console.log(Math.floor(window.innerWidth / 270));
    });

    // Toggle functionality
    const ball = document.querySelector(".toggle-ball");
    const items = document.querySelectorAll(
        ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
    );

    ball.addEventListener("click", () => {
        items.forEach((item) => {
            item.classList.toggle("active");
        });
        ball.classList.toggle("active");
    });

    // Reload page functionality for home icon
    const homeIcon = document.querySelector('.fas.fa-home');
    if (homeIcon) {
        homeIcon.addEventListener('click', function() {
            location.reload();
        });
    }

    // Contact form functionality
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value == "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });
});
