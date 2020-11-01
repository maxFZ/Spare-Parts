
function swap() {
    this.children[0].classList.add("emblem-hover");
    this.children[1].classList.remove("emblem-hover");
}
function swapEnd() {
    this.children[0].classList.remove("emblem-hover");
    this.children[1].classList.add("emblem-hover");
};
let carBrand = document.querySelectorAll(".car-brands");
carBrand.forEach(function (element) {
    element.onmouseenter = swap;
    element.onmouseleave = swapEnd;
});
