const students = [
    { name: "Alice", age: 22, grade: "A" },
    { name: "Bob", age: 20, grade: "B" },
    { name: "Charlie", age: 23, grade: "A" },
    { name: "David", age: 21, grade: "C" },
    { name: "Eve", age: 22, grade: "B" }
  ];
   function filterByGrade(students, grade) {
    return students.filter(student => student.grade === grade);
  }
   function averageAge(students) {
    if (students.length === 0) return 0;
    
    const totalAge = students.reduce((sum, student) => sum + student.age, 0);
    return totalAge / students.length;
  }
   // Filter students that has matching grade which is grade "A"
  const gradeAStudents = filterByGrade(students, "A");
  console.log(gradeAStudents);
  
  // Calculate average age of all students
  const avgAge = averageAge(students);
  console.log(avgAge);