<template>
  <div class="gallery-container">
    <!-- Galería de proyectos -->
    <div
      v-for="project in projects"
      :key="project.name"
      class="project-card"
      @click="openModal(project)"
    >
      <img class="project-img" :src="project.img" :alt="project.name" />
      <div class="project-overlay">
        <div class="name">{{ project.name }}</div>
        <div class="description">{{ project.description }}</div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-content">
        <img
          class="modal-img"
          :src="selectedProject.img"
          :alt="selectedProject.name"
        />
        <h2 class="modal-title">{{ selectedProject.name }}</h2>
        <p class="modal-description">{{ selectedProject.description }}</p>
        <div class="modal-actions">
          <button class="visit-btn" @click="goToProject(selectedProject.link)">
            Visit
          </button>
          <button class="close-btn" @click="closeModal">Close</button>
        </div>
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
          name: 'Ministerio de Desarrollo Social - SDE',
          description:
            'WORDPRESS | Government website for the Social Development Ministry of Santiago del Estero.',
          link: 'http://www.mdssde.gob.ar/',
          img: '/resources/mds.png',
        },
        {
          name: 'Puestito Online',
          description:
            'VUE + EXPRESS | Display your products and start selling!.',
          link: 'https://puestito-online.nazadoto.com',
          img: '/resources/puestito-online.png',
        },
        {
          name: 'SN-MDS',
          description:
            'VUE + EXPRESS | Notification system for the Social Development Ministry of Santiago del Estero.',
          link: 'https://sn-mds.nazadoto.com',
          img: '/resources/sn-mds.png',
        },
        {
          name: 'SGTS',
          description:
            'VUE + EXPRESS | Tarjetas Sociales management system for the Social Development Ministry of Santiago del Estero.',
          link: 'https://sgts.nazadoto.com',
          img: '/resources/sgts.png',
        },
        {
          name: 'Olgadle',
          description:
            'VUE + EXPRESS | Wordle-like webapp for the streaming channel "OLGA".',
          link: 'https://olgadle.nazadoto.com',
          img: '/resources/olgadle.png',
        },
        {
          name: 'POS',
          description:
            'VUE + EXPRESS | Tool for small and medium-sized businesses that leverages GPT-powered artificial intelligence to analyze sales and provide smart recommendations.',
          link: 'https://nazadoto.store',
          img: '/resources/pos.png',
        },
      ],
      selectedProject: null,
    };
  },
  methods: {
    openModal(project) {
      this.selectedProject = project;
    },
    closeModal() {
      this.selectedProject = null;
    },
    goToProject(link) {
      window.open(link, '_blank');
    },
  },
};
</script>

<style scoped>
.name {
  font-size: 10px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 0, 0, 0.8);
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

.description {
  font-size: 0.3rem;
}

.project-card {
  position: relative;
  width: 100px;
  height: 150px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  font-size: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
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
  background: linear-gradient(
    to top,
    rgb(10, 10, 10),
    rgba(10, 10, 10, 0.7),
    rgba(10, 10, 10, 0.5),
    transparent
  );
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

/* --- Modal --- */
.modal-backdrop {
  position: fixed;
  top: -110px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-content {
  background: #1e1e1e;
  border-radius: 12px;
  padding: 20px;
  width: 90%;
  max-width: 450px;
  text-align: center;
  color: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
  animation: fadeIn 0.3s ease;
}

.modal-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.modal-description {
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.modal-actions {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.visit-btn,
.close-btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s;
}

.close-btn {
  background: #444;
}

.visit-btn:hover {
  background: #0056b3;
}

.close-btn:hover {
  background: #666;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 850px) {
  .gallery-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    justify-items: center;
    border-radius: 0;
  }
}
</style>
