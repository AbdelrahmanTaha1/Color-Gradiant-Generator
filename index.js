



document.getElementById('main-button').addEventListener('click',()=>{

    let input = document.getElementById('color-input')
    let value = input.value.slice(1)
    let selectOption = document.querySelector('header select')


    fetch(`https://www.thecolorapi.com/scheme?hex=${value}&mode=${selectOption.value}`)
    .then(res => res.json())
    .then(data=>
    {
        // document.body.style.backgroundColor = data.colors[0].hex.values
        
        const colorDivs = document.querySelectorAll('.color')
        const hexColors = document.querySelectorAll('.hex-color')
        colorDivs.forEach((colorDiv , index)=>{
            colorDiv.style.backgroundColor = data.colors[index].hex.value
            colorDiv.dataset.color = data.colors[index].hex.value            
        })
        hexColors.forEach((hexCode, index)=>{
            hexCode.textContent = data.colors[index].hex.value
        })
    })
})

document.addEventListener('click',async( e ) =>{
    if(e.target.dataset.color){
            if (!navigator.clipboard) {
              alert("Copy functionality not supported");
            }
            try {
              await navigator.clipboard.writeText(e.target.dataset.color);
            } catch (err) {
              console.error("ERROR", err);
            }
    }
})