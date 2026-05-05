<template>
    <div class="container">
      <h2 class="section-title">Experience Timeline</h2>
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
            position: 'Hardware and software maintenance for the employees, web development (VueJS, ExpressJS, MySQL), database administration (SQL Server).',
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
    border-radius: 5px;
    color: white;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(2px);
    box-sizing: border-box;
    overflow-x: hidden;
}
  .section-title {
    margin: 0 0 8px;
    font-family: Arial, Helvetica, sans-serif;
    color: #f4f4f4;
    text-transform: uppercase;
    letter-spacing: 1px;
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
    align-items: flex-start;
    margin-bottom: 15px;
    padding: 12px;
    border:none;
    background-color: rgba(0, 0, 0, 0.5);
    border-left: 3px solid rgba(255, 88, 88, 0.75);
    border-radius: 4px;

  }
  .experience-year {
    font-weight: bold;
    color: #ff5858;
    text-wrap: nowrap;
  }
  .experience-details {
    flex-grow: 1;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .experience-position {
    font-size: 1.1em;
    margin-bottom: 2px;
    font-weight: 700;
  }
  .experience-description {
    font-size: 0.9em;
    line-height: 1.35;
    color: rgba(255, 255, 255, 0.9);
  }
@media (max-width:850px) {
.container{
  padding: 10px 20px;
}
.experience-item{
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-bottom: 10px;
}
.experience-details{
  margin-left: 0;
}
}

@media (max-width:550px){
.container{
  margin-top: 12px;
  padding: 10px 12px;
}
.section-title{
  font-size: 1.1rem;
}
.experience-position{
  font-size: 1rem;
}
.experience-description{
  font-size: 0.86rem;
}
.experience-year{
  font-size: 0.95rem;
}
}
  </style>
  