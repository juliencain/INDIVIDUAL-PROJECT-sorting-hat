
const students = [
  {
    id: 1,
    name: "Dylan",
    color: "Green",
    house: "Slythern",
   
  },
  {
    id: 2,
    name: "Jerry",
    house: "Hufflepuff",

  },
  {
    id: 3,
    name: "Pookie",
    house: "Gryffindor",

  },
  {
    id: 4,
    name: "Tostito PR",
    house: "Ravenclaw"

  }
];

const targetingApp = document.querySelector("#app");

const cardsOnDom = (array) => {
  console.log("array", array)
  let domString = "";
  for (const student of array)  {
    domString += 
    `<div class="card" style="width: 18rem;">
    
    <div class="card-body">
      <h2 class="card-title">${student.name}</h2>
     <h5 class"color-title">${student.house}</h5>
      
     
      <button class="btn btn-danger" id="delete--${student.id}">expelle</button>
    </div>
  </div>`
  
  targetingApp.innerHTML= domString
  }}
  
  const filter = (array, house) => {
    console.log("array in filter", array);
    console.log("house", house)
    const studentArray = [];
    for (const student of array) {
      if (student.house.toLowerCase() === house) {
        studentArray.push(student);
      }
    }
    
    return studentArray;
  }
  
const gryffindorButton = document.querySelector("#gryffindor");
const slytherinButton = document.querySelector("#slytherin");
const hufflepuffButton = document.querySelector("#hufflepuff");
const ravenclawButton = document.querySelector("#ravenclaw")



gryffindorButton.addEventListener("click", () => {
  const gryffindor = filter(students, "gryffindor")
  console.log("gryffindor", gryffindor)
  cardsOnDom(gryffindor);
});

slytherinButton.addEventListener("click", () => {
  const Slytherin = filter(students, "slytherin")
  cardsOnDom(slytherin);
});

hufflepuffButton.addEventListener("click", () => {
  const hufflepuff = filter(students, "hufflepuff")
  cardsOnDom(hufflepuff);
});

ravenclawButton.addEventListener("click", () => {
  const ravenclaw = filter(students, "ravenclaw")
  cardsOnDom(ravenclaw);
});

const form = document.querySelector("form")

const createStudent = (e) => {
  e.preventDefault();
  console.log("button clicked");
  const newStuObj = {
    id: students.length + 1,
    name: document.querySelector("#studentName").value,
    
  };
   students.push(newStuObj);
   cardsOnDom(students)
  };

 form.addEventListener("click", createStudent);

 const app = document.querySelector("#app");
 app.addEventListener("click", (e) => {
  
  
  if (e.target.id.includes("expelle")) {
    const [, id] = e.target.id.split("--");
    console.log("id, id");
    const index = students.findIndex((student) => student.id === Number(id));
    console.log("index", index);
    students.splice(index, 1)
    cardsOnDom(students);
  }
  })

  const startApp = () => {
    cardsOnDom(students);
  };
  
  startApp(cardsOnDom(students));
