document.querySelector('.generatorInput').addEventListener('submit', e =>{
    e.preventDefault(); //Função para bloquear função padrão de formulário

    var input = document.querySelector('#inputNumber').value; //Armazena o valor

    if(input === ''){
        clearInfo();
        showWarning('');
    } else if(input > 0){
        showFibo(input);
    } else if(input <= 0){
        clearInfo();
        showWarning('Valor não pode ser menor ou igual 0');
    }
});

function showFibo(input){
    const inputFiboValue = parseInt(input);
    console.log(inputFiboValue);
    let fiboString = "";
    if(typeof(inputFiboValue) === 'number'){
        let previousValue = 0;
        let currentValue = 1;
        let aux = 0;
        for (let i = 1; i <= inputFiboValue; i++) {
            fiboString += `${currentValue} `;
            aux = currentValue + previousValue;
            previousValue = currentValue;
            currentValue = aux;
        }
        console.log(fiboString);
        document.querySelector('.boxResult').style.display = 'block';
        document.querySelector('.sequence').innerHTML = fiboString;
        showWarning('')
    }
}
function clearInfo(){
    showWarning('');
    document.querySelector('.boxResult').style.display = 'none';

}
function showWarning(msg){ //Irá mostrar mensagem na tela com o aviso na div .aviso
    document.querySelector('.aviso').innerHTML = msg;
}
