
function showaboutinfo(content){
   document.querySelectorAll('.about-info').forEach(value =>{
        value.style.display = 'none';
   })

   document.querySelector(`#${content}`).style.display = 'block';
}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.aboutbtn').forEach(aboutbtn =>{
        aboutbtn.onclick = function(){
            document.querySelectorAll('.aboutbtn').forEach(aboutbtn =>{
                aboutbtn.classList.remove('active');
            })
            
            showaboutinfo(this.dataset.content);
            this.classList.add('active');
        }
    })
})