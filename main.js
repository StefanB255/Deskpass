

const displayNav = document.querySelectorAll(".titles");
const fabs = document.getElementsByClassName('footerlist');


for (i = 0; i<fabs.length; i++){
   fabs[i].addEventListener('click', function(){
                             this.classList.toggle('active')
                             })
}



