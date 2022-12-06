var harmburgerIcon = document.getElementById("harmburger"),
    mobileNavLink = document.getElementById("hide"),
    creative = document.querySelector(".creative");


harmburgerIcon.addEventListener("click", function(){
    if(mobileNavLink.style.display === "none"){
        mobileNavLink.style.display = "flex";
        creative.classList.add("hide");
        harmburgerIcon.style.opacity = "0.6";
    }
    else{
        mobileNavLink.style.display = "none";
        creative.classList.remove("hide"); 
        harmburgerIcon.style.opacity = "1";
    }
});