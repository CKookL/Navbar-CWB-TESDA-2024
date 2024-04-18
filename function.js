const buttonTheme = document.querySelector('.theme')
const changeThemeNav = document.querySelector('nav')
const changeThemeNav2 = document.querySelector('.sidenav')
const changeThemeBody = document.querySelector('body')

buttonTheme.addEventListener('click', function (){
    buttonTheme.classList.toggle('change');
    changeThemeNav.classList.toggle('changeNav');
    changeThemeBody.classList.toggle('change');
    changeThemeNav2.classList.toggle('changeNav');
  })

  
  $(document).ready(function(){
    $('.materialboxed').materialbox();
    $(".dropdown-trigger").dropdown();
    $('.sidenav').sidenav();
  });

  