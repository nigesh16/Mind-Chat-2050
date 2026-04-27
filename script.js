const loader=document.getElementById("loader")
const loaderText=document.getElementById("loaderText")
const chat=document.getElementById("chat")

setTimeout(()=>loaderText.textContent="Establishing Neural Link...",1500)
setTimeout(()=>loaderText.textContent="Neural Interface Connected",3000)

setTimeout(()=>{
    loader.style.display="none"
    startChat()
},4200)

function addHuman(text){
    const msg=document.createElement("div")
    msg.className="message human"
    msg.innerHTML=`<div class="label">Thought Detected</div>${text}`
    chat.appendChild(msg)
    chat.scrollTop=chat.scrollHeight
}

function typeAI(text){
    const msg=document.createElement("div")
    msg.className="message ai typing"
    chat.appendChild(msg)
    let i=0
    
    const typing=setInterval(()=>{
        msg.textContent+=text[i++]
        chat.scrollTop=chat.scrollHeight
        if(i>=text.length){
        clearInterval(typing)
        msg.classList.remove("typing")
        }
        },22)
}

function startChat(){
setTimeout(()=>addHuman("How will AI change our life in the future?"),1000)
setTimeout(()=>typeAI("AI will help humans in many ways. It can make work faster and help us solve problems."),3000)
setTimeout(()=>addHuman("Will humans still control AI?"),7000)
setTimeout(()=>typeAI("Yes. Humans will guide AI and decide how it should be used."),9000)
setTimeout(()=>addHuman("Thank you."),12000)
setTimeout(()=>typeAI("You are welcome."),13500)
}