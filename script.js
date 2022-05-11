let fiboString = '';

document.querySelector('.generatorInput').addEventListener('submit', e =>{
    e.preventDefault(); //Função para bloquear função padrão de formulário

    var input = document.querySelector('#inputNumber').value; //Armazena o valor

    if(input === ''){
        showWarning('');
    } else if(input > 0){
        showFibo(input);
        console.log(fiboString)
    } else if(input <= 0){
        clearInfo();
        showWarning('Valor não pode ser menor ou igual 0');
    }
});

function showFibo(input){
    fiboString = '';
    let a1 = 1;
    let a2 = 1;
    let a3 = 0;
    document.querySelector('.boxResult').style.display = 'block';
    if(input === '1'){
        fiboString = `${a1}` ;
        //console.log(typeof(fiboString));
        //console.log(fiboString);
        document.querySelector('.sequence').innerHTML = fiboString;
        
    }
    if(input === '2'){
        fiboString = `${a1}, ${a2}`;
        //console.log(typeof(fiboString));
        //console.log(fiboString);
        document.querySelector('.sequence').innerHTML = fiboString;
    }
    if(input >= '3'){
        
        fiboString = `1, 1`;
        for(i = 2; i <= (input - 1) ; i++){
            a3 = a1 + a2;
            fiboString = fiboString.concat(`, ${a3}`);
            //console.log(typeof(fiboString));
            //console.log(fiboString);
            a1 = a2;
            a2 = a3;
        }
    document.querySelector('.sequence').innerHTML = fiboString;
    }
}
function clearInfo(){
    showWarning('');
    document.querySelector('.boxResult').style.display = 'none';

}
function showWarning(msg){ //Irá mostrar mensagem na tela com o aviso na div .aviso
    document.querySelector('.aviso').innerHTML = msg;
}
