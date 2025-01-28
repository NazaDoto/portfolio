<template>
    <div class="container">
        <div class="container-left">
            <div class="img">
                <img class="profile-pic" src="../../public/resources/yo.png" alt="">
                <div class="info">
                    <span class="name">Nazareno Navarrete</span>
                    <span class="title">SYSTEMS ANALYST</span>
                </div>
            </div>
            <div class="cover item">
                I am an Information Systems Analyst and Fullstack Developer, seeking a position to grow my expertise in
                web development.
            </div>
            <div class="languages item">
                LANGUAGES <ul>
                    <li><strong>Spanish:</strong> Native</li>
                    <li><strong>English:</strong> Professional (CEFR: C1 Advanced)</li>
                </ul>
            </div>
        </div>
        <div class="container-right">
            <div class="education item">
                EDUCATION
                <ul>
                    <li><strong>Bachelor's in Social Sciences and Humanities:</strong> Colegio San José (2012–2016)</li>
                    <li><strong>Cambridge English Advanced:</strong> CEFR: C1 Advanced (2019)</li>
                    <li><strong>Information Systems Analyst Degree:</strong> Universidad Nacional de Santiago del Estero
                        (2017–2024)</li>
                    <li><strong>Bachelor's in Information Systems:</strong> Universidad Nacional de Santiago del Estero
                        (2025)</li>
                </ul>
            </div>
            <div class="technologies item">
                TECHNOLOGIES
                <div class="radar-chart">
                    <!-- Lines and Areas -->
                    <div class="radar-background"></div>
                    <!-- Labels -->

                    <!-- Polygon (Your Data) -->
                    <svg class="radar-data" viewBox="0 0 200 200">
                        <polygon points="100,30 160,70 140,140 100,170 60,100" />
                    </svg>
                </div>
                <div class="radar-label" style="top: 0%; left: 50%; transform: translate(-50%, -50%);">
                    Versatility</div>
                <div class="radar-label" style="top: 20%; left: 85%; transform: translate(-50%, -50%);">Farming
                </div>
                <div class="radar-label" style="top: 70%; left: 85%; transform: translate(-50%, -50%);">
                    Teamfight</div>
                <div class="radar-label" style="top: 100%; left: 50%; transform: translate(-50%, -50%);">Pushing
                </div>
                <div class="radar-label" style="top: 70%; left: 15%; transform: translate(-50%, -50%);">Support
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
    height: 90%;
    clip-path: circle(20%);
}

.radar-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(rgba(0, 128, 255, 0.2) 72deg,
            rgba(0, 128, 255, .2));
}

.radar-label {
    position: absolute;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}

.radar-data {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    fill: rgba(0, 128, 255, 0.5);
    stroke: rgba(0, 128, 255, 0.8);
    stroke-width: 2;
}

.container {
    position: relative;
    display: flex;
    gap: 15px;
    margin: 50px 0;
    padding: 0 50px 0 20svw;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Fondo semitransparente */
    border-radius: 10px;
    /* Bordes redondeados para mejor estética */
    color: white;
    /* Asegúrate de que el texto sea legible */
    backdrop-filter: blur(2px);
    /* Blur aplicado al fondo */
    -webkit-backdrop-filter: blur(2px);
    /* Soporte para navegadores basados en WebKit */
}

.container-left {
    min-width: 250px;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;
}

.container-right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;
    width: 70%;
}

.item {
    background-color: rgba(0, 0, 0, 0.2);
    /* Fondo semitransparente */
    backdrop-filter: blur(2px);
    /* Blur aplicado al fondo */
    -webkit-backdrop-filter: blur(2px);
    /* Soporte para navegadores basados en WebKit */
    border-radius: 5px;
    padding: 10px;
}

.img {
    display: flex;
    gap: 10px;
}

.profile-pic {
    width: 150px;
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
    margin-top: 15px;
}

.technologies {
    height: 100%;
}
</style>