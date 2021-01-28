let globalElement


referenceFunction = () => {
    console.log(globalElement)
    closeLanguageBox(globalElement)
}

function openLanguageBox(element) {
    globalElement = element
    element.classList.toggle("expandedLanguageBox")
    element.classList.toggle("appear")
    element.children[0].classList.toggle("expandedLanguageImage")
    element.children[2].classList.toggle("languageDiscriptionInvisible")
    element.children[2].classList.toggle("languageDiscription")
    document.getElementById("backdrop").style.display = "block"

    element.setAttribute('onclick', 'closeLanguageBox(this)')
    document.addEventListener('scroll', referenceFunction, {
        passive: true,
        once: true
    });
}

function closeLanguageBox(element) {
    console.log(element)

    document.removeEventListener('scroll', referenceFunction, {
        passive: true,
        once: true
    });

    document.getElementById("backdrop").style.display = "none"
    element.children[0].style.opacity = "0%"
    element.classList.toggle("appear")
    element.classList.toggle("expandedLanguageBox")
    element.children[2].classList.toggle("languageDiscriptionInvisible")
    element.children[2].classList.toggle("languageDiscription")


    element.children[0].classList.toggle("expandedLanguageImage")
    setTimeout(() => {
        element.children[0].style.opacity = "100%";
    }, 400);
    element.setAttribute('onclick', 'openLanguageBox(this)')
}
