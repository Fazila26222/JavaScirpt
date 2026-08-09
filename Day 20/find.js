// find اولین عنصر که شرظ را داشته باشد پیدا میکند
const students = [
    {   id:1,name:"Fazila",score:90 },
    {   id:2,name:"Fatima",score:95 },
    {   id:3,name:"Bahara",score:85 },
    {   id:4,name:"Zahra",score:80 },
    {   id:5,name:"Hajer",score:79 },
];
console.log("---------Find----------");
const result = students.find(student =>
    student.score > 85
)
console.log(result);

// FindIndex شماره اندکس هواین عنصر را پیدا میکند

console.log("---------FindIndex----------");

const index = students.findIndex(student =>
    student.name==="Fatima"
);
console.log(index);

console.log("---------Some----------");
// some  بررسی میکند که آیا حداقل یک عنصر شرط را دارد یا نه

const Result = students.some(student =>
    student.score > 90
)
console.log(Result);

console.log("---------evrey----------");
// every  بررسی میکند آیا همه عناصر شرط را دارد یا نه

const nateja = students.every(student =>
    student.score >= 80
)
console.log(nateja);

console.log("---------reduce----------");

// reduce برای محاسبه مجموعه ,میانگین .... استفاده میشود

const total = students.reduce((sum,student)=>
    sum + student.score,0);
console.log(total);

console.log("---------Sort----------");

students.sort((a,b)=> a.sort - b.sort);
console.log(students);

console.log("---------reveres---------");
// بر عکس رایه ترتیب میکند
students.reverse();
console.log(students);

console.log("---------includes----------");

// بررسی میکند یک مقدار در ارایه وجود دارد یا نه

const firuts = ["Apple","Banana","Orage"];
console.log(firuts.includes("Banana"));
