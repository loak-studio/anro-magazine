window.addEventListener('load',()=>{
    const picker = document.querySelector('#lang-picker').querySelector('ul')
    const notPicked = document.querySelectorAll('.not-picked')
    const indicator = document.querySelector('#indicator')
    picker.addEventListener('click',()=>{
        indicator.classList.toggle('rotate-180')
        notPicked.forEach(item=>{
            item.classList.toggle('hidden')
        })
    })
})