let departement = "Computer Science";

let students = [
    [1,"Fazila",80,90,75],
    [2,"Ali",80,95,75],
    [3,"Shayan",90,90,75],
    [4,"Ahmad",60,90,95],
    [1,"Maryam",70,90,85],
]; 

console.log("Departement: " + departement);

console.table(students.map(student =>({
    ID:student[0],
    Name:student[1],
    Python:student[2],
    Java:student[3],
    JavaScirept:student[4],
    Total:student[2] + student[3] + student[4]
})));