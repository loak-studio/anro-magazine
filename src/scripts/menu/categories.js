window.addEventListener('load',()=>{
    const button = document.querySelector('#hamburger-button')
    const dropdown = document.querySelector('#dropdown')
    button.addEventListener('click',()=>{
       if( dropdown.classList.contains('lg:opacity-0')){
        dropdown.classList.toggle('lg:hidden')
        setTimeout(()=>{
            dropdown.classList.toggle('lg:opacity-0')
        },50)
       }
       else{
        dropdown.classList.toggle('lg:opacity-0')
        setTimeout(()=>{
            dropdown.classList.toggle('lg:hidden')
        },50)
       }
       button.querySelector('svg').classList.toggle('rotate-180')
    })
})