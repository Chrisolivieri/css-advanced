let twitter = document.querySelector(".p-4:nth-of-type(3) li:nth-child(2) a")

twitter.style.display = "none"

let contenuto = document.querySelector(".col p")
let contenuto2 = document.querySelector(".lead")

function cancellaContenuto(){
    contenuto.innerHTML = " "
    contenuto2.innerHTML = " "
}
 
function mostraIacopo(){
    alert("IACOPO")
}

function mostraMarco(){
    alert ("MARCO")
}

function mostraChristian(){
    alert("CHRISTIAN")
}


