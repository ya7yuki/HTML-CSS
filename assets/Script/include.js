function includeHTML(){
    document.querySelectorAll("[data-include]").forEach(el =>{
        const file = el.getAttribute("data-include");
        fetch(file)
        .then(Response => Response.text())
        .then(data => {
            el.innerHTML = data;
        });
    });
}

document.addEventListener("DOMContentLoaded",includeHTML);