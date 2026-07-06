const botoes = document.querySelectorAll("button")
console.log(botoes)

botoes.forEach(function (botao){
    let curtiu = false
    botao.addEventListener("click", botaoClicado)

    function botaoClicado(){
        let texto = document.querySelector("span")
        if (curtiu = false){
            texto.textContent++
        }else{
            texto.textContent--
            curtiu = false
        }
    }
})


















