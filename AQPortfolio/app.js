var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarmenu(){
    if(menu_visible == false){//si esta oculto
        menu.style.display= "block";
    menu_visible= true;
}
else{
    menu.style.display= "none";
    menu_visible = false;
}
}

// oculto el menu una vez que selecciono una opcion

let links = document.querySelectorAll("nav a");
for(var x = 0; x < links.length; x++){
    links[x].onclick = function (){
        menu.style.display = "none";
        menu_visible = false
    }
}

// Funcionalidad barras de habilidades
const progressHtml= document.getElementById("htmlCss");
const progressJavaScript = document.getElementById("javascript-1");
const progressPython = document.getElementById("python-1");
const progressSql = document.getElementById("sql-1");
const progressReact = document.getElementById("react-1");
const progressGithub = document.getElementById("github-1");
const controller = new AbortController();

// Evento barra html
progressHtml.addEventListener("click", unaFuctionHtml)
function unaFuctionHtml (e){
    const value = 88;
    const barraTemplate = "88%"
    const barraTxtElement = document.createElement("p")
    const txtHtml = document.getElementById("html");
    barraTxtElement.innerHTML = barraTemplate;
    progressHtml.appendChild(barraTxtElement);
    progressHtml.style.setProperty("--progress", `${value}% `);
    barraTxtElement.style.fontSize= "25px";
    txtHtml.style.color=("yellow");
    barraTxtElement.style.color= ("yellow");
    barraTxtElement.style.marginTop = "35px";
    progressHtml.removeEventListener("click", unaFuctionHtml);
}

// Evento barra javascript
progressJavaScript.addEventListener("click", unaFuctionJavascript)
function unaFuctionJavascript (e){
    const value = 30 ;
    const barraTemplate = "30%";
    const barraTxtElement = document.createElement("p");
    const txtJavascript = document.getElementById("javascript-2");
    barraTxtElement.innerHTML = barraTemplate;
    progressJavaScript.appendChild(barraTxtElement);
    progressJavaScript.style.setProperty("--progress", `${value}%`);
    barraTxtElement.style.fontSize= "25px";
    txtJavascript.style.color=("yellow");
    barraTxtElement.style.color= ("yellow");
    barraTxtElement.style.marginTop = "35px";
    progressJavaScript.removeEventListener("click", unaFuctionJavascript)
}

// Evento Python 

progressPython.addEventListener("click", unaFuctionPython)
function unaFuctionPython (e){
    const value = 30 ;
    const barraTemplate = "30%";
    const barraTxtElement = document.createElement("p");
    const txtPython = document.getElementById("python-2");
    barraTxtElement.innerHTML = barraTemplate;
    progressPython.appendChild(barraTxtElement);
    progressPython.style.setProperty("--progress", `${value}%`);
    barraTxtElement.style.fontSize= "25px";
    txtPython.style.color=("yellow");
    barraTxtElement.style.color= ("yellow");
    barraTxtElement.style.marginTop = "35px";
    progressPython.removeEventListener("click", unaFuctionPython)
}

//  Evento SQL 


progressSql.addEventListener("click", unaFuctionSql)
function unaFuctionSql (e){
    const value = 20 ;
    const barraTemplate = "20%";
    const barraTxtElement = document.createElement("p");
    const txtSql = document.getElementById("sql-2");
    barraTxtElement.innerHTML = barraTemplate;
    progressSql.appendChild(barraTxtElement);
    progressSql.style.setProperty("--progress", `${value}%`);
    barraTxtElement.style.fontSize= "25px";
    barraTxtElement.style.color= ("yellow");
    barraTxtElement.style.marginTop = "35px";
    txtSql.style.color=("yellow");
    progressSql.removeEventListener("click", unaFuctionSql)
}

//  Eevento  React 
progressReact.addEventListener("click", unaFuctionReact)
function unaFuctionReact (e){
    const value = 30 ;
    const barraTemplate = "30%";
    const barraTxtElement = document.createElement("p");
    const txtReact = document.getElementById("react-2");
    barraTxtElement.innerHTML = barraTemplate;
    progressReact.appendChild(barraTxtElement);
    progressReact.style.setProperty("--progress", `${value}%`);
    barraTxtElement.style.fontSize= "25px";
    barraTxtElement.style.color= ("yellow");
    barraTxtElement.style.marginTop = "35px";
    txtReact.style.color=("yellow");
    progressReact.removeEventListener("click", unaFuctionReact)
}

//  Evento github
progressGithub.addEventListener("click", unaFuctionGithub)
function unaFuctionGithub(e){
    const value = 60 ;
    const barraTemplate = "60%";
    const barraTxtElement = document.createElement("p");
    const txtGithub = document.getElementById("github-2");
    barraTxtElement.innerHTML = barraTemplate;
    progressGithub.appendChild(barraTxtElement);
    progressGithub.style.setProperty("--progress", `${value}%`);
    barraTxtElement.style.fontSize= "25px";
    barraTxtElement.style.color= ("yellow");
    barraTxtElement.style.marginTop = "35px";
    txtGithub.style.color=("yellow");
    progressGithub.removeEventListener("click", unaFuctionGithub)
}



