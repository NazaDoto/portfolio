<template>
    <div class="left">
      <div v-if="!loadingData" class="sidebar">
        <div class="sidebar-profile">
          <div class="profile-header">
            <img :src="profile.avatarfull" height="100" width="100" alt="">
            <div class="profile-name">{{ profile.personaname }}
              <a class="profile-url" :href="profile.profileurl">
                <svg class="sc-fjdhpX kwMXpV icon" viewBox="0 0 110 110">
                  <path d="M55,0C25.881,0,2.062,22.634,0.14,51.267l28.525,11.507C31.172,61.029,34.214,60,37.5,60
                  c0.706,0,1.396,0.063,2.076,0.155l13.426-19.691C53.021,29.159,62.19,20,73.5,20C84.822,20,94,29.178,94,40.5S84.822,61,73.5,61
                  c-0.01,0-0.021-0.001-0.031-0.001L52.944,74.385C52.97,74.754,53,75.124,53,75.5C53,84.061,46.061,91,37.5,91
                  c-7.565,0-13.855-5.422-15.218-12.591L2.118,70.107C8.685,93.134,29.866,110,55,110c30.376,0,55-24.624,55-55
                  C110,24.625,85.376,0,55,0z M37.5,84c-0.915,0-1.795-0.148-2.621-0.416l-0.004,0.01l-0.252-0.104
      c-0.243-0.087-0.48-0.185-0.712-0.293l-6.805-2.801C28.945,84.295,32.902,87,37.5,87C43.851,87,49,81.852,49,75.5
      S43.851,64,37.5,64c-1.406,0-2.747,0.265-3.993,0.727l7.2,2.904c0.05,0.021,0.1,0.039,0.149,0.061l0.56,0.226l-0.015,0.037
      C44.131,69.368,46,72.213,46,75.5C46,80.194,42.194,84,37.5,84z M88,40.5C88,32.492,81.508,26,73.5,26S59,32.492,59,40.5
      S65.492,55,73.5,55S88,48.508,88,40.5z M63,40.5C63,34.701,67.701,30,73.5,30S84,34.701,84,40.5S79.299,51,73.5,51
      S63,46.299,63,40.5z"></path>
                </svg></a>
            </div>
          </div>
          <div class="dota-rank"><img src="/resources/immortal.png" height="100" width="100" alt=""></div>
        </div>
        <div class="matches-header">
          <span class="header-hero">HERO</span>
          <span class="header-result">RESULT</span>
          <div class="header-kda">
            <span>K</span>
            <span>D</span>
            <span>A</span>
          </div>
          <span class="header-duration">DURATION</span>
        </div>
        <div class="sidebar-matches">
          <div v-for="(match, index) in matchesWithHeroIcons" :key="index" class="match">
            <div class="match-row">
              <div class="match-row-hero">
                <span class="header-hero"><img :src="match.heroIcon" :alt="match.hero_id"></span>
                <div class="flex-column">
                  <span class="hero-name">{{ match.heroName }}</span>
                  <small class="match-time-ago">{{ formatTimeAgo(match.start_time) }}</small>
                </div>
              </div>
              <span :class="['header-result', checkWin(match) ? 'match-won' : 'match-lost']"> {{ checkWin(match) ?
                'Victory' : 'Defeat' }}
              </span>
              <div class="header-kda">
                <span>{{ match.kills }}</span>
                <span>{{ match.deaths }}</span>
                <span>{{ match.assists }}</span>
              </div>
              <span class="match-duration">{{ formatDuration(match.duration) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="loading-container">
        <h2>Loading...</h2>
        <div class="spinner"></div>
      </div>
    </div>

    <div class="bg-img">
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomeComponent',
  data() {
    return {
      loadingData: true,
      matches: [],
      profile: '',
      heroeIcons: [],
    }
  },
  methods: {
    checkWin(match) {
      const isRadiant = match.player_slot < 128; // Determina si el jugador es Radiant
      return (isRadiant && match.radiant_win) || (!isRadiant && !match.radiant_win);
    },
    formatDuration(seconds) {
      const hours = Math.floor(seconds / 3600); // Calcula las horas
      const minutes = Math.floor((seconds % 3600) / 60); // Calcula los minutos restantes
      const secs = seconds % 60; // Calcula los segundos restantes

      // Formatea las partes para que siempre tengan 2 dígitos
      const formattedHours = hours > 0 ? String(hours).padStart(2, '0') + ':' : ''; // Incluye horas solo si es necesario
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(secs).padStart(2, '0');

      return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
    },
    formatTimeAgo(timestamp) {
      const now = Math.floor(Date.now() / 1000); // Tiempo actual en segundos
      const secondsAgo = now - timestamp;

      const minutes = Math.floor(secondsAgo / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
      } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else {
        return 'Just now';
      }
    },
    async fetchDota() {
      try {
        const fetchMatches = axios.get(`https://api.opendota.com/api/players/377361889/recentMatches`);
        const fetchProfile = axios.get(`https://api.opendota.com/api/players/377361889/`);
        const fetchHeroes = axios.get(`https://api.opendota.com/api/heroStats`);

        const [matches, profile, heroes] = await Promise.all([
          fetchMatches,
          fetchProfile,
          fetchHeroes,
        ]);

        this.matches = matches.data;
        this.profile = profile.data.profile;
        this.heroeIcons = heroes.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },

    async getHeroIcon(id) {
      const hero = this.heroeIcons.find((hero) => hero.id === id); // Busca el héroe por ID
      if (hero) {
        return hero.img; // Retorna el valor del campo "img"
      } else {
        console.warn(`Hero with ID ${id} not found.`);
        return null; // Si no se encuentra, retorna null
      }
    }

  },
  async mounted() {
    try {
      this.loadingData = true;
      await this.fetchDota();
    } catch (error) {
      console.log(error);
    } finally {
      this.loadingData = false;
    }
  },
  computed: {
    matchesWithHeroIcons() {
      return this.matches.map(match => {
        const hero = this.heroeIcons.find(hero => hero.id === match.hero_id);
        return {
          ...match,
          heroName: hero ? hero.localized_name : 'NN',
          heroIcon: hero ? `https://cdn.cloudflare.steamstatic.com${hero.img}` : '/resources/default.png'
        };
      });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h-100 {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

.spinner {
  width: 64px;
  height: 64px;
  border: 8px solid rgba(0, 128, 0, 0.2);
  /* Verde oscuro transparente */
  border-top: 8px solid #008000;
  /* Verde oscuro sólido */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading-container {
  display: flex;
  margin: 40px auto;
  flex-direction: column;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.text-center {
  text-align: center;
}

.matches-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px 0;
  margin-top: 10px;
  background: linear-gradient(to right, rgb(37, 37, 37), rgba(37, 37, 37, 0.2));
}

.header-hero {
  width: 40%;
}

.header-kda {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 5px;
}

.match-kda {}

.match-row-hero {
  display: flex;
  width: 40%;
  height: 100%;
  gap: 5px;
}

.match-result,
.header-result,
.header-kda,
.match-kda,
.header-duration,
.match-duration {
  text-align: center;
  width: 20%;
}

.hero-name {
  color: lightskyblue;
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.match-hero {
  height: 100%;
}

.match-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  gap: 5px;
}

.match {
  height: 40px;
  border-bottom: solid 1px rgba(255, 255, 255, 0.2);
  padding: 5px 0;
  width: 100%;
}

.match-won {
  color: green;
}

.match-lost {
  color: red;
}

.profile-url {
  text-align: center;
  height: 30px !important;
  transition: 450ms cubic-bezier(0.23, 1, 0.32, 1);
  filter: invert(100%) brightness(0.5);
}

.profile-url:hover {
  filter: invert(100%) brightness(1);
}

svg {
  height: 100%;
}

.profile-name {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.2rem;
  display: flex;
  gap: 10px;
}

.profile-header {
  display: flex;
  flex-direction: row;
}

.sidebar-profile {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 75px;
}

.sidebar-matches {
  width: calc(100% + 12px);
  /* Incrementa el ancho para compensar la barra de scroll */
  height: calc(100% - 75px);
  overflow-y: scroll;
  overflow-x: hidden;
  /* Espacio reservado para la barra de scroll */
  /* Mueve la barra hacia afuera */
}

.sidebar-matches::-webkit-scrollbar {
  width: 12px;
}

.sidebar-matches::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  /* Color de la barra */
  border-radius: 6px;
}

.sidebar-matches::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0, 0, 0, 0.8);
  /* Color al pasar el cursor */
}

.sidebar-matches::-webkit-scrollbar-track {
  background-color: rgba(0, 0, 0, 0.2);
  /* Color del track */
}

.left {
  display: flex;
  flex-direction: column;
  width: 40svw;
  height: 70svh;
  margin-top: 50px;
  margin-left: 50px;
}
.sidebar{
  height: 100%;
  width: 100%;
}

.bg-img {
  height: 100%;
}

img {
  height: 100%;
  object-fit: contain;
}
</style>
