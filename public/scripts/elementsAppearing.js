function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return(rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right<= (window.innerWidth || document.documentElement.clientWidth)
    );
}


document.addEventListener('scroll', showElements, {passive: true});


function showElements() {
    const box = document.querySelectorAll('.appear');
    box.forEach(element => {

        if (isInViewport(element)) {
            element.classList.add("come-in")
        }

    });

}