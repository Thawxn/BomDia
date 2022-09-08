function carrega(){
    var desc = window.document.querySelector('.body-area--desc')
    var img = window.document.querySelector('img')
    var data = new Date()
    var hora = data.getHours()
    var dataMin = new Date()
    var min = dataMin.getMinutes()

    if(hora >= 0 && hora < 5){
        desc.innerHTML = `Agora são ${hora} horas - Boa Madrugada`
        img.src = 'imagens/boanoite.png'
        document.body.style.background = 'linear-gradient(90deg, #0B0D0F, #2C2B2D, #6E3826)'
    } else if(hora >= 5 && hora < 12){
        desc.innerHTML = `Agora são ${hora} horas - Bom Dia`
        img.src = 'imagens/bomdia.png'
        document.body.style.background = 'linear-gradient(10deg, #817879, #C6AEA1, #FDFACF, #6BA3C6,  #5B8BBB, #5B8BBB, #6595B9)'
    } else if(hora >= 12 && hora < 18){
        desc.innerHTML = `Agora são ${hora} horas - Boa Tarde`
        img.src = 'imagens/boatarde.png'
        document.body.style.background = 'linear-gradient(90deg, #1C5EBF, #3789CC, #75B0D6)'
    }  else {
        desc.innerHTML = `Agora são ${hora}:${min} horas - Boa Noite`
        img.src = 'imagens/boanoite.png'
        document.body.style.background = 'linear-gradient(-35deg, #0B0D0F, #6E3826, #2C2B2D)'
    }


}