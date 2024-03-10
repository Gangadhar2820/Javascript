let voiceListEle = document.querySelector("select");
let text = document.querySelector("textarea");

let speechSyn = speechSynthesis;

let button = document.querySelector("button");

let Voices = null;

function getVoices(){
    return new Promise((resolve,reject)=>{
        let interval = setInterval(()=>{
            if(speechSyn.getVoices().length !== 0){
                resolve(speechSyn.getVoices());
                clearInterval(interval)
            }
        },10)
    })
}
getVoices().then((voices)=>{
    for(let voice of voices){
        let option = document.createElement('option');
        option.value = voice.name;
        option.innerText = `${voice.name} - ${voice.lang}`
        voiceListEle.appendChild(option);
    }

    button.onclick = ()=>{
        Voices = voices;
        let inputText = text.value.trim();
        if(inputText.length == 0){
            text.value = "";
            alert("Please enter text");
        }else{
            if(!speechSyn.speaking){
                textToSpeech(inputText);
            }
        }
    }
});

function textToSpeech(inputText){
    let utterance = new SpeechSynthesisUtterance(inputText);
    for(let voice of Voices){
        if(voice.name === voiceListEle.value){
            utterance.voice = voice;
            break;
        }
    }

    speechSyn.speak(utterance);

}


