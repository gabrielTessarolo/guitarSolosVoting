var allSolos = document.querySelector("#solos");
var listOfSolos = Array.from(document.querySelectorAll(".solo"));

const songInformation = [
    ["https://www.youtube.com/embed/qD3RmiCLTEE", "Led Zeppelin", 0],
    ["https://www.youtube.com/embed/GZgPcYilmn8", "Guns N' Roses", 0],
    ["https://www.youtube.com/embed/yU-CfDIKyE4", "Lynyrd Skynyrd", 0],
    ["https://www.youtube.com/embed/VPH5c9SMtO4", "Iron Maiden", 0],
    ["https://www.youtube.com/embed/a6i2WlX90DE", "Dire Straits", 0],
    ["https://www.youtube.com/embed/jHf9FH333iA", "Scorpions", 0],
    ["https://www.youtube.com/embed/u65GsTzaqKk", "Van Halen", 0],
    ["https://www.youtube.com/embed/o1NNlqCjGcQ", "Ethan Meixsell", 0],
    ["https://www.youtube.com/embed/DgXcTFILmY0", "Judas Priest", 0],
    ["https://www.youtube.com/embed/s0LeYPYvuH0?si=w6ZuZVFXD8EuAwJw", "Eagles", 0],
    ["https://www.youtube.com/embed/Ys_7d4mq48M", "Slayer", 0],
    ["https://www.youtube.com/embed/3xLk-t2Mrd4", "Megadeth", 0],
    ["https://www.youtube.com/embed/TaX_3_JZJSQ", "Steppenwolf", 0],
    ["https://www.youtube.com/embed/qK06r7Djmeg", "Skullflower", 0]
];

var songDisplayer = document.querySelector('[data-information="song"]');
var bandDisplayer = document.querySelector('[data-information="band"]');
var ytReprodutor = document.querySelector('#ytplayer');
const showFormButton =  document.querySelector('#showForm');
const userSpec = document.querySelector('.userSpec');
const form = document.getElementById('form');

var selectedSolo = 0;

// Mostrar o solo selecionado.
allSolos.addEventListener('click', (evento)=>{
    var whatClicked = evento.target;
    if(whatClicked.classList.contains('solo')){
        listOfSolos.forEach((element) => {
            element.classList.remove('selected');
        });
        whatClicked.classList.add('selected');

        var songName = whatClicked.textContent;
        songDisplayer.textContent = songName;
        selectedSolo = listOfSolos.indexOf(whatClicked);
        bandDisplayer.textContent = songInformation[selectedSolo][1];
        ytReprodutor.src = songInformation[selectedSolo][0];
    }
});

showFormButton.addEventListener('click', showForm);

// Ação para quando o botão para revelar o formulário for clicado.
function showForm(){
    if(!userSpec.classList.contains('showForm')){
        userSpec.classList.add('showForm');
    }else{
        userSpec.classList.remove('showForm');
    }
}

let users = [];

function displayTable(){
    // Atualiza a tabela com os solos mais votados.
    let topSolos = Array.from(document.querySelectorAll('.top'));
    let ordered = [...songInformation].sort((a,b)=>b[2]-a[2]);
    topSolos.forEach((solo,index) => {
        
        solo.textContent = `${['I','II','III'][index]}.` + listOfSolos[songInformation.indexOf(ordered[index])].textContent;
        // `- ${songInformation[songInformation.indexOf(ordered[index])][2]}`;
        solo.style.color = `${['goldenrod','silver','rgb(171, 97, 52)'][index]}`;
        
    });
}

displayTable();

// Ação para quando o usuário votar.
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    // Verificação se o usuário colocou informações válidas para a votação.
    let canSend = new Promise((resolve, reject)=>{
        if(users.includes(form.tName.value)) {reject(`You have already voted, ${form.tName.value}.`) } // Se já tiver votado com o mesmo nome.
        else if(form.tName.value===''||form.tGenre.value===''){reject('Insert valid information.')} // Se faltou informação.
        else{
            // Tudo certo, retorne a informação do usuário.
            resolve([form.tName.value, form.tGenre.value])} 
    })

    canSend.then(m=>{
        users.push(m[0]);
        form.tName.value = '', form.tGenre.value = '';
        songInformation[selectedSolo][2]+=1;
        displayTable();
        
    }).catch(m=>alert(m));
})