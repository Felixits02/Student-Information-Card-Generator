let btn = document.getElementById("generatorBtn");
let marksInput = document.getElementById("marks");
let marksValue = document.getElementById("marksValue");

//marls value show
marksInput.addEventListener("input", function () {
  marksValue.innerText = marksInput.value;
});

//get value
btn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let email = document.getElementById("email").value;
  let age = document.getElementById("age").value;

  //gender
  let gender = document.querySelector('input[name="gender"]:checked');
  gender = gender ? gender.value : "--";

  //courses
  let selectedCourses = document.querySelectorAll(
    'input[type="checkbox"]:checked'
  );
  let courses = [];
  selectedCourses.forEach((c) => courses.push(c.value));

  //marks
  let marks = marksInput.value;

  //show card
  document.getElementById("cardName").innerText = name || "Student Name";
  document.getElementById("cardRoll").innerText = roll
    ? "Roll No:" + roll
    : "Roll No: --";
  document.getElementById("cardEmail").innerText = email
    ? "Email:" + email
    : "Email: --";
  document.getElementById("cardAge").innerText = age ? "Age:" + age : "Age: --";
  document.getElementById("cardGender").innerText = "Gender:" + gender;
  document.getElementById("cardCourse").innerText = courses.length
    ? "Courses:" + courses.join(",")
    : "Courses: --";
  document.getElementById("cardMarks").innerText = "Marks:" + marks + "/100";
});
