<template>
    <div class="container">
        <div class="container-left">
            <div class="img">
                <img class="profile-pic" src="../../public/resources/yo.png" alt="">
                <div class="info">
                    <span class="name">Nazareno Navarrete</span>
                    <span class="title">DEVELOPER</span>
                </div>
                <div class="links">
                    <a href="https://wa.me/5493855223287" target="_blank" class="nav-opt-item nav-item"><img
                            class="nav-opt-img" src="/resources/whatsapp.png" alt=""></a>
                    <a href="https://linkedin.com/in/nazadoto" target="_blank" class="nav-opt-item nav-item"><img
                            class="nav-opt-img" src="/resources/linkedin.png" alt=""></a>
                    <a href="https://github.com/nazadoto" target="_blank" class="nav-opt-item nav-item"><img
                            class="nav-opt-img" src="/resources/github.png" alt=""></a>
                </div>
            </div>

            <div class="technologies item">
                TECHNOLOGIES
                <div class="radar-chart">
                    <div class="radar-background">
                    </div>
                    <svg class="radar-data" viewBox="0 0 200 200">
                        <polygon points="100,45 150,75 130,145 65,130 60,75" />
                        <!-- Labels -->
                        <text x="100" y="25" class="radar-label">HTML5</text>
                        <text x="175" y="75" class="radar-label">CSS</text>
                        <text x="145" y="160" class="radar-label">JS</text>
                        <text x="45" y="160" class="radar-label">JAVA</text>
                        <text x="30" y="75" class="radar-label">PY</text>
                    </svg>
                </div>
            </div>

        </div>
        <div class="container-right">
            <div class="cover item">
                Hello, I’m from Santiago del Estero, Argentina, and I’m an Information Systems Analyst and Fullstack
                Developer.

                Building innovative and efficient web solutions is what excites me the most, and I’m always eager to
                explore new tools and techniques to enhance my work.
            </div>
            <div class="education item">
                EDUCATION
                <div class="education-content">
                    <ul>
                        <li><strong>Bachelor's in Social Sciences and Humanities:</strong> Colegio San José (2012–2016)
                        </li>
                        <li><strong>Cambridge English Advanced:</strong> CEFR: C1 Advanced (2019)</li>
                        <li><strong>Information Systems Analyst Degree:</strong> Universidad Nacional de Santiago del
                            Estero
                            (2017–2024)</li>
                        <li><strong>Bachelor's in Information Systems:</strong> Universidad Nacional de Santiago del
                            Estero
                            (2025)</li>
                    </ul>
                </div>
            </div>
            <div class="languages item">
                LANGUAGES <ul>
                    <li><strong>Spanish:</strong> Native</li>
                    <li><strong>English:</strong> Professional (CEFR: C1 Advanced)</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.links {
    display: none;
}

li {
    margin-top: 2px;
}

.radar-chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #111;
}

.radar-chart {
    position: relative;
    width: 250px;
    height: 250px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.radar-background {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 100%;
    background: conic-gradient(rgba(0, 128, 255, 0.2) 72deg,
            rgba(0, 128, 255, .2));
}

.radar-label {
    font-size: 12px;
    fill: white;
    stroke: white;
    stroke-width: 0;
    text-anchor: middle;
}

.radar-data {
    fill: rgba(0, 128, 255, 0.5);
    stroke: rgba(0, 128, 255, 0.8);
    stroke-width: 2;
}

.container {
    position: relative;
    display: flex;
    gap: 15px;
    margin: 50px 0;
    padding: 15px 15svw;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: white;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
}

.container-left {
    min-width: 375px;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
}

.container-right {
    display: flex;
    height: 100%;
    flex-direction: column;
    gap: 15px;
    width: 70%;
}

.item {
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    border-radius: 5px;
    padding: 10px;
}

.img {
    display: flex;
    gap: 10px;
    height: 100%;
}

.profile-pic {
    width: 150px;
    height: 150px;
    background: white;
    border-radius: 2px;
    border: solid white 1px;
}

.info {
    display: flex;
    flex-direction: column;
}

.title {
    color: rgb(0, 209, 0);
    font-size: 1rem;
}

.name {
    width: fit-content;
    font-size: 2.8rem;
}

.cover {}

.education {
    height: 100%;
}

.education-content {
    height: 80%;
    overflow: auto;
    text-overflow: ellipsis;
}

.education-content::-webkit-scrollbar {
    width: 12px;
}

.education-content::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
}

.education-content::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.8);
}

.education-content::-webkit-scrollbar-track {
    background-color: rgba(255, 255, 255, 0.2);
}

.technologies {
    position: relative;
}

@media (max-width: 1175px) {
    .container {
        padding: 15px 5svw;
    }

}

@media (max-width:850px) {
    .container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 10px 0;
        border-radius: 0;
        margin-top: 10px;
        max-height: calc(100svh - 140px) !important;
        overflow: auto;
    }

    .container::-webkit-scrollbar {
        width: 12px;
    }

    .container::-webkit-scrollbar-thumb {
        background-color: rgba(13, 126, 0, 0.5);
        /* Color de la barra */
        border-radius: 6px;
    }

    .container::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 54, 5, 0.8);
        /* Color al pasar el cursor */
    }

    .container::-webkit-scrollbar-track {
        background-color: rgba(13, 255, 0, 0.053);
        /* Color del track */
    }

    .container-left, .container-right {
        padding: 0 20px !important;
        max-width: none;
        width: auto;
    }

    .technologies,
    .item {
        width: auto;
    }


    .img {
        width: calc(100% - 10px);
        padding: 0 5px;
    }

    .info {
        width: 100%;
    }

    .name {
        width: 50%;
        font-size: 2rem;
        line-break: strict;
    }

    .profile-pic {
        width: 100px;
        height: 100px;
    }

    .links {
        display: flex;
        flex-direction: column;
    }

    .nav-opt-img {
        width: 30px;
        height: 30px;
        filter: invert(100%) brightness(1);
    }

    .nav-opt-img:hover {
        filter: invert(100%) brightness(2);

    }

    .cover {
        padding: 10px 10px;
        text-align: justify;
    }
    .education-content {
        height: 100%;
    }

    .item {
        border-radius: 0;
    }
}
</style>
