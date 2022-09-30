window.addEventListener('load',()=>{
    const button = document.querySelector('#toggle-nav')
    const nav = document.querySelector('#main-nav')
    const html = document.querySelector('html')
    button.addEventListener('click',()=>{
        button.classList.toggle("is-active")
        nav.classList.toggle('-translate-x-[500vw]')
        html.classList.toggle('overflow-hidden')
        window.scrollTo(0,0)
    })
})