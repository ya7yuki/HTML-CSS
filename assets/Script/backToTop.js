function backToTop(){
    const backToTop=document.getElementById('back-to-top');

    window.addEventListener('scroll',() => {
        if(window.scrollY > 200){
            backToTop.classList.add('show');
        }else{
            backToTop.classList.remove('show');
        }
    });
}

document.addEventListener("DOMContentLoaded",backToTop);