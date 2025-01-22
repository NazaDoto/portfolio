<template>
    <nav class="nav-dota">
        <ul class="nav-left">
            <div class="container-logo">
                <div class="container-logo-outer">
                </div>
                    <div class="container-logo-inner">
                        <img src="/resources/logo.png" alt="" class="nav-logo">
                    </div>
            </div>
            <li class="nav-left-item">ABOUT</li>
            <span class="diagonal-right"></span>
            <li class="nav-left-item">EXPERIENCE</li>
            <span class="diagonal-right"></span>
            <li class="nav-left-item">PROJECTS</li>
            <span class="diagonal-right"></span>
        </ul>
        <ul class="nav-right">
            <span class="diagonal-right"></span>
            <li class="nav-opt-item"><img class="nav-opt-img" src="/resources/mail.png" alt=""></li>
            <span class="diagonal-right"></span>
            <li class="nav-opt-item"><img class="nav-opt-img" src="/resources/linkedin.png" alt=""></li>
            <span class="diagonal-right"></span>
            <li class="nav-opt-item"><img class="nav-opt-img" src="/resources/github.png" alt=""></li>
            <span class="diagonal-right"></span>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-logo {
    position: relative;
    height: calc(100% + 20px); /* Extiende el tamaño total */
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1; /* Asegura la posición en la pila de renderizado */
}

.container-logo-outer {
    position: absolute;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: calc(100% - 10px); /* Sobresale del navbar */
    background-color: #d32f2f; /* Color más claro para destacar */
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    z-index: 0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* Añade sombra para resaltar */
}

.container-logo-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 30px); 
    height: calc(100% + 10px); /* Sobresale del outer */
    background-color: #b71c1c; /* Color más oscuro */
    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
    z-index: 1;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Sombra adicional */
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

.nav-logo {}

.diagonal-right {
    width: 2px;
    /* Grosor de la línea */
    background-color: grey;
    /* Color de la línea */
    transform: rotate(20deg);
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

.nav-opt-img {
    margin: auto;
    height: 100%;
}

.nav-left {
    display: flex;
    margin:0;
    height: 100%;
    padding: 0 20px;
}

.nav-left-item {
    display: flex;
    justify-content: center;
    margin: auto;
    padding: 10px 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: larger;
}

.nav-right {
    display: flex;
    margin-top: 0;
    margin-left: auto;
    height: 100%;
}
</style>