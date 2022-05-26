




const input = document.getElementById("input");


const button = document.getElementById("btn");

const container = document.getElementById("todoContainer");




button.addEventListener("click" , function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('para-styling');
    paragraph.innerText = input.value;
    container.appendChild(paragraph);
    input.value = "";



    paragraph.addEventListener("click" , ()=>
    {

        paragraph.style.textDecoration = "line-through";

    });


    paragraph.addEventListener("dblclick" , ()=>
    {
        container.removeChild(paragraph);
    })

})