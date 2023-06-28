const readMoreButton = document.querySelectorAll('.read-more');
const moreContent = document.querySelectorAll('.about-content-more');

readMoreButton.forEach((button) => {
    button.addEventListener('click', ()=>{
        const siblingDIV = button.previousElementSibling;

        if(siblingDIV.tagName.toLowerCase() === 'div'){
            siblingDIV.classList.toggle('hidden');
            if(siblingDIV.classList.contains('hidden')){
                button.innerText = 'Read More';
            }
            else{
                button.innerText = 'Show Less';
            }
        }
    })
})

