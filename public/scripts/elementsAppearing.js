function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const box = document.querySelector('.appear');

document.addEventListener('scroll', function () {
    if(isInViewport(box)){
        box.classList.add("come-in")
    }
}, {
    passive: true
});