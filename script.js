




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex +=n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length){slideIndex = 1};
    if(n < 1){slideIndex = slides.length};
    for(i =0 ;i<slides.length;i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex -1].style.display = "block";
    document.getElementsByClassName("prev").style.border = "1px solid black"

}



function openNav(){
    document.getElementById("mySidenav").style.width = "400px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
    
}   






