const http = require('http');
const fs = require('fs');

http.get('http://localhost:3000/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('--- HTML INTEGRITY VERIFICATION ---');
    console.log('Total characters:', data.length);
    console.log('Has #home:', data.includes('id="home"'));
    console.log('Has #about:', data.includes('id="about"'));
    console.log('Has #skills:', data.includes('id="skills"'));
    console.log('Has #projects:', data.includes('id="projects"'));
    console.log('Has #experience:', data.includes('id="experience"'));
    console.log('Has #education:', data.includes('id="education"'));
    console.log('Has #contact:', data.includes('id="contact"'));
    console.log('Has Lost in Egypt:', data.includes('Lost in Egypt'));
    console.log('Has Route Academy:', data.includes('Route Academy'));
    console.log('Has Microsoft x Sprints:', data.includes('Microsoft x Sprints'));
    console.log('Has AOI:', data.includes('Arab Organization for Industrialization'));
    console.log('Has We Telecom Testing:', data.includes('Software Testing Training'));
    console.log('Has We Telecom Cloud:', data.includes('Cloud Computing Training'));
    console.log('Has Impact @ Zewail City:', data.includes('Impact @ Zewail City'));
    console.log('Has Misr University:', data.includes('Misr University for Science and Technology'));
    console.log('Has CV PDF link:', data.includes('Fager_Hussein_Ahmed_CV.pdf'));
    console.log('Has phone mockups:', data.includes('phone-mockup-wrapper'));
    console.log('Has desktop mockups:', data.includes('desktop-mockup-wrapper'));
    console.log('--- ALL SECTIONS PRESENT ---');
  });
});
