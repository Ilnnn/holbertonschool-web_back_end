const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    
    const students = lines.slice(1);
    
    console.log(`Number of students: ${students.length}`);
    
    const fields = {};
    
    students.forEach((student) => {
      const details = student.split(',');
      if (details.length === 4) {
        const firstname = details[0];
        const field = details[3];
        
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }
    });
    
    // Affichage formaté pour chaque champ
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;