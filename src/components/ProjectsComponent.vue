<template>
  <div class="projects-shell">
    <div class="projects-scroll">
      <div class="gallery-container">
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
      </div>
    </div>

    <div v-if="selectedProject" class="modal-backdrop" @click.self="closeModal">
      <div class="modal-content">
        <button class="modal-close-x" @click="closeModal" aria-label="Close modal">x</button>
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
          name: 'DND',
          description:
            'VUE + EXPRESS | A platform where players can store and manage their character sheets, notes, and stats, while tracking campaign progress together with their DM.',
          link: 'https://dnd.nazadoto.com',
          img: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/2694.svg',
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

.projects-shell {
  width: 100%;
  margin: 50px 0;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  overflow: hidden;
  max-height: calc(100svh - 150px);
  box-sizing: border-box;
}

.projects-scroll {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 22px;
  box-sizing: border-box;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 180px));
  width: 100%;
  gap: 14px;
  justify-content: center;
  box-sizing: border-box;
}

.description {
  font-size: 0.74rem;
  line-height: 1.2;
}

.project-card {
  position: relative;
  width: 100%;
  min-height: 120px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 22px rgba(0, 0, 0, 0.45);
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
  padding: 10px;
  text-align: left;
}

/* --- Modal --- */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 10, 0.72);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0;
  z-index: 1100;
}

.modal-content {
  position: relative;
  background: linear-gradient(to bottom, #2f2f2f, #1d1d1d);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 16px;
  width: 90%;
  max-width: 520px;
  text-align: left;
  color: white;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.62);
  animation: fadeIn 0.2s ease;
}

.modal-img {
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-title {
  margin: 0 0 8px;
  font-size: 1.35rem;
  line-height: 1.2;
}

.modal-description {
  font-size: 0.95rem;
  margin: 0 0 16px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.visit-btn,
.close-btn {
  background: linear-gradient(to bottom, #3a3a3a, #242424);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.22);
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.15s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.visit-btn {
  background: linear-gradient(to bottom, #2a6fd1, #1b4f99);
}

.visit-btn:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

.close-btn:hover {
  filter: brightness(1.08);
  transform: translateY(-1px);
}

.modal-close-x {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: rgba(0, 0, 0, 0.45);
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
  line-height: 1;
  transition: background 0.15s ease, transform 0.15s ease;
}

.modal-close-x:hover {
  background: rgba(0, 0, 0, 0.75);
  transform: scale(1.04);
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
  .projects-shell {
    max-height: calc(100svh - 145px);
    border-radius: 0;
  }
  .projects-scroll {
    padding: 12px;
  }
  .gallery-container {
    grid-template-columns: repeat(2, minmax(130px, 165px));
    justify-content: center;
    border-radius: 0;
  }
  .project-card {
    min-height: 105px;
  }
  .modal-content {
    max-width: 460px;
  }
  .modal-img {
    height: 200px;
  }
}

@media (max-width: 550px) {
  .projects-shell {
    margin: 12px 0 0;
    max-height: calc(100svh - 125px);
  }
  .gallery-container {
    grid-template-columns: minmax(140px, 190px);
    justify-content: center;
  }
  .project-card {
    min-height: 110px;
  }
  .name {
    font-size: 0.9rem;
  }
  .description {
    font-size: 0.82rem;
  }
  .modal-content {
    width: 94%;
    padding: 12px;
  }
  .modal-title {
    font-size: 1.1rem;
  }
  .modal-description {
    font-size: 0.86rem;
  }
  .modal-actions {
    justify-content: space-between;
  }
  .visit-btn,
  .close-btn {
    width: 48%;
    padding: 8px 10px;
    font-size: 0.76rem;
  }
}
</style>
