import fs from 'fs';

export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const fields = {};

      students.forEach((student) => {
        const details = student.split(',');
        if (details.length === 4) {
          const firstname = details[0].trim();
          const field = details[3].trim();

          if (!fields[field]) fields[field] = [];
          fields[field].push(firstname);
        }
      });

      resolve(fields);
    });
  });
}
