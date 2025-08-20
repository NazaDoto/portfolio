<template>
  <div class="gallery-container">
    <div v-for="project in projects" :key="project.name" class="project-card" @click="goToProject(project.link)">
      <img class="project-img" :src="project.img" :alt="project.name" />
      <div class="project-overlay">
        <div class="name">{{ project.name }}</div>
        <div class="description">{{ project.description }}</div>
      </div>
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
          description: 'Display your products and start selling!.',
          link: 'https://puestito-online.nazadoto.com',
          img: '/resources/puestito-online.png',
        },
        {
          name: 'SN-MDS',
          description: 'Notification system for the Social Development Ministry of Santiago del Estero.',
          link: 'https://sn-mds.nazadoto.com',
          img: '/resources/sn-mds.png',
        },
        {
          name: 'SGTS',
          description: 'Tarjetas Sociales management system for the Social Development Ministry of Santiago del Estero.',
          link: 'https://sgts.nazadoto.com',
          img: '/resources/sgts.png',
        },
      ],
    };
  },
  methods: {
    goToProject(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style scoped>
.name{
  font-size: 10px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.8); /* Sombra para dar profundidad */
}
.gallery-container {
  display: flex;
  width: 100%;
  gap: 10px;
  margin: 50px 0;
  justify-content: center;
  padding: 30px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
}

.project-card {
  position: relative;
  width: 100px;
  height: 150px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-size: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4), /* Sombra general */
    inset 0px -2px 4px rgba(255, 255, 255, 0.2); /* Sombra interior */
}

.project-card:hover {
  transform: scale(2);
  z-index: 2;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgb(10, 10, 10), rgba(10, 10, 10,0.7), rgba(10, 10, 10, 0.5), transparent);
  color: white;
  padding: 2px;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease-in-out;
  text-align: center;
}

.project-card:hover .project-overlay {
  opacity: 1;
  transform: translateY(0);
}
</style>
