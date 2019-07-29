

document.addEventListener('DOMContentLoaded', ()=> {
    //Menú header
    const mercury = document.getElementById('mercury')
    const venus = document.getElementById('venus') 
    const earth = document.getElementById('earth') 
    const mars = document.getElementById('mars') 
    const jupiter = document.getElementById('jupiter') 
    const saturn = document.getElementById('saturn') 
    const uranus = document.getElementById('uranus') 
    const neptune = document.getElementById('neptune') 

    //Img de planetas 
    const mercuryImgPlanet = document.getElementById('mercury-planet')
    const venusImgPlanet = document.getElementById('venus-planet')
    const earthImgPlanet = document.getElementById('earth-planet')
    const marsImgPlanet = document.getElementById('mars-planet')
    const jupiterImgPlanet = document.getElementById('jupiter-planet')
    const saturnImgPlanet = document.getElementById('saturn-planet')
    const uranusImgPlanet = document.getElementById('uranus-planet')
    const neptuneImgPlanet = document.getElementById('neptune-planet')

    //Info plantes
    const infoMercury = document.getElementById('info-mercury')
    const infoVenus = document.getElementById('info-venus')
    const infoEarth = document.getElementById('info-earth')
    const infoMars = document.getElementById('info-mars')
    const infoJupiter = document.getElementById('info-jupiter')
    const infoSaturn = document.getElementById('info-saturn')
    const infoUranus = document.getElementById('info-uranus')
    const infoNeptune = document.getElementById('info-neptune')

    const fondoStars = document.getElementById('fondoStars')
    const fondoStarsBack = document.getElementById('fondoStarsBack')
    
    const planets = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
    const listClass = ['color-mercury', 'color-venus', 'color-earth', 'color-mars', 'color-jupiter', 'color-saturn', 'color-uranus', 'color-neptune']

    //Control slider
    const infoPlanetsList = [infoMercury, infoVenus, infoEarth, infoMars, infoJupiter, infoSaturn, infoUranus, infoNeptune]
    const imgPlanets = [mercuryImgPlanet, venusImgPlanet, earthImgPlanet, marsImgPlanet, jupiterImgPlanet, saturnImgPlanet, uranusImgPlanet, neptuneImgPlanet]

    const infoPlanets = document.getElementById('info-planets')
    const contentPlanets = document.getElementById('planets')

    const arrowUp = document.getElementById('arrowUp')
    const arrowDown = document.getElementById('arrowDown')

    //Remover las clases al cambiar de links 
    let removeClass = (arrayplanets, arrayclass, planetsIndex) => {
        for(let a = 0; a < planets.length; a++) {
            if( a !== planetsIndex) {
                //console.log(a)  
                arrayplanets[a].classList.remove(arrayclass[a])
        
            }
        }
    }

    //Control menú links para colorear o animar las secciones
    let findElement;
    let targetLinkEffect = (imgPlanet, planetsContent) => {

        findElement = [...planetsContent.children].findIndex(element => element === imgPlanet)
                
        TweenMax.from(planetsContent.children[findElement], 1, {opacity: 0})
        planetsContent.insertBefore(planetsContent.children[findElement], planetsContent.children[0])
        
    }

    let targetLinkEffectInfo = (infoPlanet, infoContent) => {

        findElement = [...infoContent.children].findIndex(element => element === infoPlanet)
                
        TweenMax.from(infoContent.children[findElement], 2, {opacity: 0})
        infoContent.insertBefore(infoContent.children[findElement], infoContent.children[0])

        
    }
    //resetear la posición en el orden normal
    let reset = false
    let restePos = () => {
        for(let i = 0; i < imgPlanets.length; i++){
            contentPlanets.insertBefore(imgPlanets[i], contentPlanets.children[i])
        }

    }
    let restePosInfo = () => {
        for(let i = 0; i < infoPlanetsList.length; i++){
            infoPlanets.insertBefore(infoPlanetsList[i], infoPlanets.children[i])
        }

    }

    //ordenar elementos consecutivos segun siga en su orden para los imgPlanets
    let orderby = (initIndex, content, imglist) => {
        let counter = 1
        content.insertBefore(content.children[initIndex - 1], content.children[0])

        for(let i = initIndex; i < content.children.length; i++) {

            content.insertBefore(imglist[i], content.children[counter++])
            //Resetear los estilos para los elementos siguientes
            content.children[i].removeAttribute('style')
        }

    }
    //ordenar elementos consecutivos segun siga en su orden para los imgPlanets 
    let orderbyInfo = (initIndex, content, infolist) => {
        let counter = 1
        content.insertBefore(content.children[initIndex - 1], content.children[0])

        for(let a = initIndex;  a< content.children.length; a++) {

            content.insertBefore(infolist[a], content.children[counter++])
            content.children[a].removeAttribute('style')
    
        }

    }

    let newCounterLink; 
    for(let i = 0; i < planets.length; i++){
        
        planets[i].addEventListener('click', e => {

            e.preventDefault()

            if(e.target.id === 'mercury') {
                removeClass(planets, listClass, 0);
                restePos()
                e.target.classList.toggle('color-mercury')
                orderby(1, contentPlanets, imgPlanets)
                targetLinkEffect(mercuryImgPlanet, contentPlanets)

                restePosInfo()
                orderbyInfo(1, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoMercury, infoPlanets)
                
                newCounterLink = i+1
                
            }else if(e.target.id === 'venus') {
                removeClass(planets, listClass, 1);
                e.target.classList.toggle('color-venus')
                restePos()
                orderby(2, contentPlanets, imgPlanets)
                targetLinkEffect(venusImgPlanet, contentPlanets)
                
                restePosInfo()
                orderbyInfo(2, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoVenus, infoPlanets)
                
                newCounterLink = i+1
                
            }else if(e.target.id === 'earth') {
                removeClass(planets, listClass, 2);
                e.target.classList.toggle('color-earth')
                restePos()
                orderby(3, contentPlanets, imgPlanets)
                targetLinkEffect(earthImgPlanet, contentPlanets)
                
                restePosInfo()
                orderbyInfo(3, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoEarth, infoPlanets)
                
                newCounterLink = i+1
            }else if(e.target.id === 'mars') {
                
                removeClass(planets, listClass, 3);
                e.target.classList.toggle('color-mars')
                restePos()
                orderby(4, contentPlanets, imgPlanets)
                targetLinkEffect(marsImgPlanet, contentPlanets)
                
                restePosInfo()
                orderbyInfo(4, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoMars, infoPlanets)
                
                newCounterLink = i+1
            }else if(e.target.id === 'jupiter') {
                
                removeClass(planets, listClass, 4);
                e.target.classList.toggle('color-jupiter')
                restePos()
                orderby(5, contentPlanets, imgPlanets)
                targetLinkEffect(jupiterImgPlanet, contentPlanets)
                
                restePosInfo()
                orderbyInfo(5, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoJupiter, infoPlanets)

                newCounterLink = i+1
                
            }else if(e.target.id === 'saturn') {
                
                removeClass(planets, listClass, 5);
                e.target.classList.toggle('color-saturn')
                restePos()
                orderby(6, contentPlanets, imgPlanets)
                targetLinkEffect(saturnImgPlanet, contentPlanets)
                
                restePosInfo()
                orderbyInfo(6, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoSaturn, infoPlanets)
                newCounterLink = i+1
                
            }else if(e.target.id === 'uranus') {
                
                removeClass(planets, listClass, 6);
                e.target.classList.toggle('color-uranus')
                restePos()
                orderby(7, contentPlanets, imgPlanets)
                targetLinkEffect(uranusImgPlanet, contentPlanets)
                
                restePosInfo()
                orderbyInfo(7, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoUranus, infoPlanets)
                
                newCounterLink = i+1
                
            }else {
                removeClass(planets, listClass, 7);
                e.target.classList.toggle('color-neptune')
                restePos()
                orderby(8, contentPlanets, imgPlanets)
                targetLinkEffect(neptuneImgPlanet, contentPlanets)
                
                restePosInfo()
                orderbyInfo(8, infoPlanets, infoPlanetsList)
                targetLinkEffectInfo(infoNeptune, infoPlanets)

                newCounterLink = i+1
                
            }
            console.log(newCounterLink)
            
        })

    }


    let counter = 0;
    
    planets[0].classList.toggle(listClass[0])
    
    arrowUp.addEventListener('click', e => {
        //Entra si newCounterLink Tiene valor o es clickeado de algun link
        if(newCounterLink != undefined) {

            if(newCounterLink == 8) {
                newCounterLink = 0
            }

            if(reset) {
                restePos()
            }
            reset = false

            //Control de los links
            removeClass(planets, listClass, newCounterLink)
           
            console.log(newCounterLink)
            
            planets[newCounterLink].classList.toggle(listClass[newCounterLink])
            newCounterLink++
            
           
        }else {
            counter++
            if(reset) {
                restePos()
            }
             
            if(counter > planets.length -1) {
                counter = 0
            }
            
            console.log(counter)
            
    
            reset = false
            //Control de los links
            removeClass(planets, listClass, counter);

            planets[counter].classList.toggle(listClass[counter])
        }



        //Resetar los estilos del primer elemento
        contentPlanets.children[0].removeAttribute('style')
        contentPlanets.children[0].style.transition = 'opacity ease-in .8s'
        contentPlanets.children[0].style.opacity = 0

        //Esperar un tiempo para animar
        setTimeout(() => {
            
            contentPlanets.insertAdjacentElement('beforeend', contentPlanets.firstElementChild )
            TweenMax.from(contentPlanets.children[0], .8, { y:'75vh', opacity: 0, scale: 0})
            //resetear el estilo del ultimo elemento 
            contentPlanets.children[7].removeAttribute('style')
        }, 800);

        //Animacion de los parrafos info
        infoPlanets.children[0].removeAttribute('style')
        infoPlanets.children[0].style.transition = 'opacity ease-in .8s'
        infoPlanets.children[0].style.opacity = 0

        setTimeout(() => {
            
            infoPlanets.insertAdjacentElement('beforeend', infoPlanets.firstElementChild )
            TweenMax.from(infoPlanets.children[0], 1, { y:'-75vh', opacity: 0, scale: 0, delay:.4})
            //resetear el estilo del ultimo elemento 
            infoPlanets.children[7].removeAttribute('style')
        }, 800);


    })
    

    arrowDown.addEventListener('click', e => {

        //Entra si newCounterLink Tiene valor o es clickeado de algun link
        if(newCounterLink != undefined) {
            newCounterLink--
            
            if(newCounterLink === 0) {
                newCounterLink = 8
            }
            
            if(reset) {
                restePos()
            }
            reset = false
            
            //Control de los links
            removeClass(planets, listClass, newCounterLink-1)
            planets[newCounterLink-1].classList.toggle( listClass[newCounterLink-1] )
            
           
        }else {
            counter--

            if(reset) {
                restePos()
            }
            
            if(counter < 0) {
                counter = planets.length -1
            }
            console.log(counter)
            reset = false
            
            removeClass(planets, listClass, (counter-1));
            planets[counter].classList.toggle(listClass[counter])

        }

        //Remover los estilos para el primer elemento y luego aplicar otros
        contentPlanets.children[0].removeAttribute('style')
        contentPlanets.children[0].style.transition = 'opacity ease-in .8s'
        contentPlanets.children[0].style.opacity = 0

        setTimeout(() => {
            
            contentPlanets.insertAdjacentElement('afterbegin', contentPlanets.lastElementChild )
            TweenMax.from(contentPlanets.children[0], .8, { y:'-75vh', opacity: 0, scale: 0})
            contentPlanets.children[1].removeAttribute('style')
        }, 800);

        //Animacion de  parrafos info
        infoPlanets.children[0].removeAttribute('style')
        infoPlanets.children[0].style.transition = 'opacity ease-in .8s'
        infoPlanets.children[0].style.opacity = 0

        setTimeout(() => {
            
            infoPlanets.insertAdjacentElement('afterbegin', infoPlanets.lastElementChild )
            TweenMax.from(infoPlanets.children[0], 1, { y:'75vh', opacity: 0, scale: 0, delay: .4})
            infoPlanets.children[1].removeAttribute('style')
        }, 800);
            
        
    })
    
    //Animacion de las particulas 
    let els = [] ,nx, ny; 
    let maxWidth = innerWidth; 
    let maxHeight = innerHeight; 

    const stars = 'div'
    let starsList = []
    for(let m = 0; m < planets.length; m++){
        starsList.push(stars)
    }


    for(let j = 0; j < planets.length; j++) {

        els.push(document.createElement(starsList[j]) ) 
        els[j].setAttribute('class', 'white-star')
        document.body.append(els[j])
    
        setInterval( ()=> {
            nx = Math.floor(Math.random() * (maxWidth - 50)); 
            ny = Math.floor(Math.random() * (maxHeight - 50));
            els[j].style.transition = 'translate ease-in-out .5s'
            els[j].style.transform = `translate(${nx}px, ${ny}px)`
        }, 2000)
        
        setInterval( ()=> {
          
            TweenMax.to(els[j], .1, {opacity: Math.random()})
        }, 1000)
    }

    //Animacion del fondo de las imagenes (efecto paralax)
    document.addEventListener('mousemove', e => {
        
        TweenMax.from(fondoStars, 1, {x: e.x/60, y: e.y/60})
        TweenMax.from(fondoStarsBack, 1, {x: -e.x/60, y: -e.y/60})
    })

    


















}); 

