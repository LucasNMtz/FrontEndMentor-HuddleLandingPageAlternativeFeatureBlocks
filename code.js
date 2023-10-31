const socialLogosDiv = document.querySelectorAll(".div-social-logo-border");
const socialLogos = document.querySelectorAll(".social-logo");

socialLogosDiv.forEach(function(div, index)
{
    div.addEventListener("mouseenter", function()
    {
        // Change image source when moused over
        socialLogos[index].src = socialLogos[index].src.replace(".svg", "-pink.svg");
    })

    div.addEventListener("mouseleave", function(){
        // Restores image source when mouse is removed
        socialLogos[index].src = socialLogos[index].src.replace("-pink.svg", ".svg");
    });
});