let amigos =[]
let sorteio=[]
let sorteados=[]

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value
    if(amigo!=' '){
        if(amigos.includes(amigo)){
            alert('Esse nome ja foi inserido')
        }else{
    amigos.push(amigo)
   
    let incluidos = document.getElementById('lista-amigos')
    incluidos.innerHTML = amigos



     document.getElementById("nome-amigo").value =  ' '
        }


    }else{
    alert('digite um nome valido')
}


}

function sortear() {
    
    let numAmigos= amigos.length
    if(numAmigos>3){
    
    
        for(let i = 0;i<numAmigos;i++){
        //while(numAmigos!=sorteados.length){
            numSorteado =Math.floor(Math.random()*numAmigos)
            
            while(numSorteado==i ||sorteados.includes(amigos[numSorteado])){
                numSorteado =Math.floor(Math.random()*numAmigos)
            }
            
            sorteio.push(amigos[i]+" -> "+amigos[numSorteado])
            sorteados.push(amigos[numSorteado])
                    
            
        }
        console.log(sorteio)
        
        document.getElementById('lista-sorteio').innerHTML= sorteio
    }else{
        alert('digite pelo menos 4 pessoas')
    }
}

function reiniciar() {
        document.getElementById('lista-amigos').innerHTML = ''
        amigos = []
        sorteio=[]
        sorteados=[]
        document.getElementById('lista-sorteio').innerHTML=''
        document.getElementById("nome-amigo").value =  ' '

}



