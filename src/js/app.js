document.addEventListener('DOMContentLoaded' ,() =>{

    fetchData();
})
const fetchData = async () => {
    try {
        const response = await fetch(`https://hp-api.herokuapp.com/api/characters`);
        const data = await response.json();
        mostrarData(data);
    } catch (error) {

        console.error(error);
    }
}
const mostrarData = (character) => {
    
    /* console.log(character); */


    const article = document.querySelector('.hp-container');
    const main = document.querySelector('.main');
    
    for (let i=1; i<character.length; i++) {

        
        const element = article.cloneNode(true);
        main.appendChild(element)

        const imagen = document.querySelector('.hp__avatar');
        imagen.setAttribute('src', character[i].image);
        
        const name = document.querySelector('.hp__name');
        name.textContent = character[i].name;

        const status = document.querySelector('.hp__status');
                
        if(character[i].alive){

            status.classList.remove('muerto');
            status.classList.add('vivo');
           
            
        }else{
            
            status.classList.remove('vivo');
            status.classList.add('muerto');
           
        }

        status.innerHTML = `

        <span class="hp__status-icon" ><span>

            <i class="icono fas fa-circle"></i>
          
        </span>

        
        \n ${character[i].species.toUpperCase()} - ${character[i].gender.toUpperCase()}
        
        
        `;

        const qualities = document.querySelector('.hp__section').nextElementSibling;
       
        
        const phouse = qualities.children[1];

        if(character[i].house === ""){
            phouse.textContent = `House: none`
        }else{
            phouse.textContent = `House: ${character[i].house}`
        }


        const dofBirth = qualities.children[2];

        if(character[i].dateOfBirth === ""){
            
            dofBirth.textContent = `Date of birth: unknown`
        }else{
            dofBirth.textContent = `Date of birth: ${character[i].dateOfBirth}`
        }

        const eyeColor = qualities.children[3];

        if(character[i].eyeColour === ""){
            
            eyeColor.textContent = `Eye color: unknown`
        }else{
            eyeColor.textContent = `Eye color: ${character[i].eyeColour}`
        }

        const hairColor = qualities.children[4];

        if(character[i].hairColour === ""){
            
            hairColor.textContent = `Hair colur: unknown`
        }else{
            hairColor.textContent = `Hair colur: ${character[i].hairColour}`
        }

        const qualitiesFinal =  qualities.nextElementSibling;

        const patronus = qualitiesFinal.children[1]

        if(character[i].patronus === ""){
            
            patronus.textContent = `Efectus Patronus: not apply`
        }else{
            patronus.textContent = `Efectus Patronus: ${character[i].patronus}`
        }

        
    }
 

}