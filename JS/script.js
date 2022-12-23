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
    ["https://www.youtube.com/embed/AGrU6pLg0T8", "Eagles", 0],
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

// const loop = setInterval({
//     //     for(var i = 0; i < songInformation.length; i++){
//     //         var liWidth = window.getComputedStyle(listOfSolos[i]).width;
//     //         console.log(liWidth);*
//     //         if(songInformation[i][2] != liWidth){}
//     //     
//         listOfSolos[selectedSolo].style.width = 2;
//     }, 10);

allSolos.addEventListener('click', (evento)=>{
    var whatClicked = evento.target;
    if(whatClicked.classList.contains('solo')){
        listOfSolos.forEach((element) => {
        element.classList.remove('selected');
    });
        whatClicked.classList.add('selected');

        var songName = whatClicked.textContent;
        songDisplayer.textContent = songName;
        var songPosition = listOfSolos.indexOf(whatClicked);
        bandDisplayer.textContent = songInformation[songPosition][1];
        ytReprodutor.src = songInformation[songPosition][0];
        selected = songPosition;
    }
});

showFormButton.addEventListener('click', showForm);

function showForm(){
    if(!userSpec.classList.contains('showForm')){
        userSpec.classList.add('showForm');
    }else{
        userSpec.classList.remove('showForm');
    }
    growLine(listOfSolos[selected]);
    
}

function getInformation(form){
    
}

function growLine(solo){
    soloWidth = window.getComputedStyle(solo).width.replace('px','');
    solo.style.width = `${soloWidth + 50}px`;
    console.log('cool');
}