const light = document.getElementById("light");
const darkness = document.getElementById("darkness");
const bulb = document.getElementById("bulb");

light.addEventListener("click", function(){
    bulb.src = "Images/on bulb.png"
    bulb.style.width = "230px"
    light.style.backgroundColor = "yellow"

    setTimeout(function(){
        alert("UP NEPA!");    
    }, 1000);
});

darkness.addEventListener("click", function(){
    bulb.src = "Images/bulb_PNG1243.png" 
    bulb.style.width = "250px"
    darkness.style.backgroundColor = "red"
    darkness.style.color = "white"

    setTimeout(function(){
        alert("DOWN NEPA!");
    }, 1000)
});