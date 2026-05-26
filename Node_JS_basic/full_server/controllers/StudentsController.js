import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    const dbFile = process.argv[2];
    try {
      const fields = await readDatabase(dbFile);
      const keys = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
      let output = 'This is the list of our students';

      keys.forEach((field) => {
        const list = fields[field].join(', ');
        output += `\nNumber of students in ${field}: ${fields[field].length}. `;
        output += `List: ${list}`;
      });

      return res.status(200).send(output);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    const dbFile = process.argv[2];
    try {
      const fields = await readDatabase(dbFile);
      const list = fields[major] || [];
      return res.status(200).send(`List: ${list.join(', ')}`);
    } catch (err) {
      return res.status(500).send('Cannot load the database');
    }
  }
}
