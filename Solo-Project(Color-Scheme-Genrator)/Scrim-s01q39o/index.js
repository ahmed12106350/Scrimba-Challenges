const seedColor = document.getElementById("seed-color")
const colorMode= document.getElementById("color-mode")
const generateBtn= document.getElementById("color-genrator")
const generatedColors=document.getElementById("pallete")
const options = {method:"GET",
                 headers: {"Content-Type":"application/json"}
                }


generateBtn.addEventListener("click",() =>{
    const hexColor = seedColor.value.replace("#", "")
    console.log("Hex color:", hexColor)
    console.log("Mode:", colorMode.value)
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorMode.value}&count=5`,options)
    .then(res => res.json())
    .then(data => {
        console.log("API Response:", data)
        if(data.colors) {
            console.log(data.colors)
            renderColors(data.colors)
        } else {
            console.error("No colors in response")
        }
    })
    .catch(err => console.error("Fetch error:", err))
})

function renderColors(colors)
{
    generatedColors.innerHTML=""
    for(const C of colors)
    {
        generatedColors.innerHTML+=
        `<div id="color-box">
        <div class="color" style="background:${C.hex.value}">
        </div>
        <p>${C.hex.value}</p>
        </div>`
    }
}