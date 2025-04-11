<template>
  <div class="container">

    <div  v-for="project in projects" :key="project.name">
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
      <a :href="project.link">Ver Proyecto</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Puestito Online',
          description: 'Plataforma de pedidos mediante QR.',
          link: 'https://puestito-online.nazadoto.com',
        },
        {
          name: 'SNMDS',
          description: 'Sistema de Notificaciones.',
          link: 'https://sn-mds.nazadoto.com',
        },
        {
          name: 'SGTS',
          description: 'Sistema de gestión de tarjetas sociales.',
          link: 'https://sgts.nazadoto.com',
        },
      ],
    };
  },
};
</script>

<style scoped>
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
</style>