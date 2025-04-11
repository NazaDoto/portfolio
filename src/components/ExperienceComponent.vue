<template>
    <div class="container">
      <div class="experience-item" v-for="(item, index) in experience" :key="index">
        <div class="experience-year">{{ item.year }}</div>
        <div class="experience-details">
          <div class="experience-position">{{ item.company }}</div>
          <div class="experience-description">{{ item.position }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experience: [
          {
            year: '2017 – 2021',
            company: 'Freelance Graphic Designer',
            position: 'Design of banners, covers, and audiovisual material for various institutions and ventures using Adobe Photoshop, Adobe Premiere Pro, and Adobe After Effects.',
          },
          {
            year: '2019 – 2020',
            company: 'Database Administrator at Editorial AMERICANIA',
            position: 'Management of books and magazines database for AMERICANIA publishing house using Excel.',
          },
          {
            year: '2022 – Now',
            company: 'IT Technician at Ministerio de Desarrollo Social de Santiago del Estero',
            position: 'IT service (hardware and software maintenance for the employees), structured cabling (cat 6 UTP cable assembly, IP configuration), web application development (control and monitoring of IT supplies using VueJS, ExpressJS, MySQL), database administration (SQL Server).',
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
    flex-direction: column;
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
  .title {
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: center;
    color: #f4f4f4;
  }
  .experience-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding: 10px;
    border: (Some code was cut) 1px solid #444444;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.5);

  }
  .experience-year {
    font-weight: bold;
    color: #ff5858;
    text-wrap: nowrap;
  }
  .experience-details {
    flex-grow: 1;
    margin-left: 20px;
  }
  .experience-position {
    font-size: 1.1em;
    margin-bottom: 5px;
  }
  .experience-description {
    font-size: 0.9em;
  }

  
  </style>
  