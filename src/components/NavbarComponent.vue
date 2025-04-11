<template>
    <nav class="nav-dota" :class="{ active: $route.path === '/' }">
        <div class="nav-left">
            <router-link to="/" class="container-logo" :class="{ active: $route.path === '/' }">
                <div class="container-logo-outer" :class="{ active: $route.path === '/' }">
                </div>
                <div class="container-logo-inner" :class="{ active: $route.path === '/' }">
                    <img src="/resources/logo.png" alt="" class="nav-logo">
                </div>
            </router-link>
            <router-link id="about-content" class="nav-left-item nav-item" :class="{ 'active': $route.path === '/about' }"
                to="/about"><span class="mauto" >ABOUT</span></router-link>
            <router-link id="exp-content" class="nav-left-item nav-item push-left" :class="{ 'active': $route.path === '/experience' }"
                to="/experience"><span class="mauto" >EXPERIENCE</span></router-link>
            <router-link id="projects-content" class="nav-left-item nav-item push-left-" :class="{ 'active': $route.path === '/projects' }"
                to="/projects"><span class="mauto" >PROJECTS</span></router-link>
        </div>
        <div class="nav-right">
            <a href="https://wa.me/5493855223287" target="_blank"  class="nav-opt-item nav-item"><img class="nav-opt-img" src="/resources/whatsapp.png" alt=""></a>
            <a href="https://linkedin.com/in/nazadoto" target="_blank" class="nav-opt-item nav-item"><img class="nav-opt-img" src="/resources/linkedin.png" alt=""></a>
            <a href="https://github.com/nazadoto" target="_blank" class="nav-opt-item nav-item"><img class="nav-opt-img" src="/resources/github.png" alt=""></a>
        </div>
    </nav>
</template>

<script>

export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
.nav-logo{
    opacity: 0.5;    
}
.mauto {
    margin: auto;    
    z-index: 1;
    font-family: 'Bebas Neue', sans-serif; /* Fuente similar */
    font-size: 1.5rem; /* Tamaño de la fuente */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 0, 0, 0.5); /* Sombra para dar profundidad */
    letter-spacing: 2px; /* Espaciado entre letras */
    text-transform: uppercase; /* Convierte el texto a mayúsculas */
    transition: transform 0.3s ease-in-out; /* Transición suave */
}

.active{
    color:white !important;
}
.nav-item {
    text-decoration: none;
    color: white;
}
.push-left{
    position:absolute;
    left: -20px;
}
.push-left-{
    position:absolute;
    left: -40px;
}
.container-logo {
    position: relative;
    height: calc(100% + 20px);
    /* Extiende el tamaño total */
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* Asegura la posición en la pila de renderizado */
    
}

.container-logo-outer {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: calc(100% - 10px);
    /* Sobresale del navbar */
    background-color: rgb(37, 37, 37);
    /* Color más claro para destacar */
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    z-index: 1;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), /* Sombra general */
    inset 0px -2px 4px rgba(255, 255, 255, 0.1); /* Sombra interior */
    /* Añade sombra para resaltar */
}

.container-logo-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 30px);
    height: calc(100% + 10px);
    background-color: rgb(44, 44, 44);
    /* Color más oscuro */
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    z-index: 2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), /* Sombra general */
    inset 0px -2px 4px rgba(255, 255, 255, 0.1); /* Sombra interior */
    /* Sombra adicional */
    position: relative;
    /* Necesario para que funcione el pseudo-elemento */
}



/* Opcional: también aplicar a la capa externa */
.container-logo-inner.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    /* Colocar en la parte inferior */
    left: 0;
    width: 100%;
    height: 100%;
    /* Grosor del borde */
    background: radial-gradient(circle, rgba(255, 196, 0, 0.6), rgba(255, 94, 0, 0.2), transparent);
    /* Color del borde */
    z-index: 3;
    pointer-events: none;
}

/* Opcional: también aplicar a la capa externa */
.container-logo-outer.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    /* Colocar en la parte inferior */
    left: 0;
    width: 100%;
    height: 100%;
    /* Grosor del borde */
    background: radial-gradient(circle, rgba(255, 72, 0, 0.5), rgba(255, 94, 0, 0.2), transparent);
    /* Color del borde */
    z-index: 3;
    pointer-events: none;
}


.diagonal-left {
    width: 2px;
    /* Grosor de la línea */
    background-color: grey;
    /* Color de la línea */
    transform: rotate(-20deg);
    /* Inclina la línea */
    transform-origin: center;
    /* Define el punto de rotación */
}

.diagonal-left-inner {
    width: 2px;
    /* Grosor de la línea */
    background-color: grey;
    /* Color de la línea */
    transform: rotate(-10deg);
    /* Inclina la línea */
    transform-origin: center;
    /* Define el punto de rotación */
}

.nav-logo {
    border-radius: 100%;
    height: calc(100% - 10px);
    z-index: 4;
}

.diagonal-right {
    width: 2px;
    /* Grosor de la línea */
    background-color: grey;
    /* Color de la línea */
    transform: rotate(30deg);
    /* Inclina la línea */
    transform-origin: center;
    /* Define el punto de rotación */
}

.diagonal-right-inner {
    width: 2px;
    /* Grosor de la línea */
    background-color: grey;
    /* Color de la línea */
    transform: rotate(10deg);
    /* Inclina la línea */
    transform-origin: center;
    /* Define el punto de rotación */
}

ul {
    list-style-type: none;
    padding: 0;
}

.nav-dota {
    position: relative;
    display: flex;
    height: 60px;
    padding: 0 50px;
    background-color: rgb(37, 37, 37);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2), /* Sombra general */
    inset 0px -2px 4px rgba(255, 255, 255, 0.1); /* Sombra interior */
}
.nav-dota.active::after{
    content: '';
    position: absolute;
    bottom: 0;
    /* Colocar en la parte inferior */
    left: 0;
    width: 100%;
    height: 3px;
    /* Grosor del borde */
    background: 
    linear-gradient(to right, rgba(255, 72, 0, 0.3),transparent, transparent, transparent);
    z-index: 0;
    /* Para superponer al fondo */
    pointer-events: none;
    /* No afecta las interacciones del usuario */
}
.nav-opt {
    margin: auto 0;
    display: flex;
    height: 100%;
}

.nav-opt-item {
    display: flex;
    justify-content: center;
    width: 55px;
    padding: 15px 10px;
}
.nav-opt-item:hover{
    filter: invert(100%) brightness(2);
}
.nav-opt-img {
    margin: auto;
    height: 100%;    
}

.nav-left {
    display: flex;
    margin: 0;
    height: 100%;
    width: 80%;
    padding: 0 0 0 20px;
}

.nav-left-item {
    position: relative;
    display: flex;
    height: 100%;
    width:200px;
    max-width: 200px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: larger;
    color: grey;    
    clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%);
}

/* Borde interior blanco cuando está activo */
.nav-left-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    /* Colocar en la parte inferior */
    left: -10px;
    width: 220px;
    height: 100%;
    /* Grosor del borde */
    background: 
    linear-gradient(to bottom, transparent, transparent, rgba(100, 224, 255, 0.1));
    z-index: 0;
    /* Para superponer al fondo */
    pointer-events: none;
    /* No afecta las interacciones del usuario */
}

.nav-left-item:hover {
    color: white;
}

.nav-right {
    display: flex;
    justify-content: end;
    margin-top: 0;
    height: 100%;
    width: 20%;
}
@media (max-width: 1175px){
    .nav-opt-item{
        width: fit-content;
    }
  }

@media (max-width: 850px){
    .nav-dota{
        width: 100%;
    }
    .nav-logo{
        width: calc(100% - 10px);
        height: auto;
    }
    .nav-dota{
        padding: 0;
    }
    .nav-left{
        width: 100%;
        padding:0;
    }
    .container-logo, .container-logo-outer{
        width: 100px;
    }
    .container-logo-inner{
        width: 70px;
    }
    .nav-right{
        display:none;
        width: 0;
    }
    .nav-left-item.active::after{
        width: 200px;
    }
}
@media (max-width:550px){
    .nav-left{
        width: 100%;
        padding:0;
    }
    .container-logo, .container-logo-outer{
        width: 50px;
        height: 65px;
    }
    .container-logo-inner{
        width: 40px;
    }
    #about-content{
        min-width: 70px;
    }
    #exp-content{
        min-width:130px;
    }
    #projects-content{
        min-width:110px;
    }
    .push-left{
        left:-5px;
    }
    .push-left-{
        left:-15px;
    }
}
</style>