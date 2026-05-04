function getStudentIdsSum(listStudents) {
  return listStudents.reduce((accumulator, currentStudent) => {
    return accumulator + currentStudent.id;
  }, 0);
}