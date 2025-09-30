//   ----- Mobile Navbar ----- 
  
  const menu = document.querySelector('.menu-bar');
  const nav = document.querySelector('.nav-overlay');
  const closeBtn = document.querySelector('.close-bar');
  const navanchor = document.querySelectorAll('.nav-overlay ul li a');


  menu.addEventListener('click', () => {
    nav.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    nav.classList.remove('active');
  });

  navanchor.forEach((item)=>{
    item.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
  })
  document.addEventListener('click',(e)=>{
    if(nav.contains(e.target) && e.target!=closeBtn){
        nav.classList.remove('active')
    }
  })