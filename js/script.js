
function enviar(){
   
    if(document.getElementById('nome').value.length == 0
        || document.getElementById('email').value.length == 0
        || document.getElementById('telefone').value.length == 0
        || document.getElementById('textoarea').value.length == 0)
    {
        alert('Preencha os campos vazios!');
        
    }else{
        document.getElementById('nome').value=''
        document.getElementById('email').value=''
        document.getElementById('telefone').value=''
        document.getElementById('textoarea').value=''
        alert('Sua mensagem foi enviada com sucesso!')
    }
    

}