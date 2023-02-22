const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        console.log("picture Clicked");
         removeActiveClass()
        panel.classList.add('active')
    })
})

  function removeActiveClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
  }