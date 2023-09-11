/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const showPage = (list, page) => {

const startIndex = ( page * 9)- 9 ;
const endIndex = (page * 9) ;

const studentList = document.querySelector('.student-list');
studentList.innerHTML = '';

for (let i = 0; i < list.length; i++) {
if (i >= startIndex && i < endIndex) {
const person = list[i];
  const html = `
  <li class="student-item cf">
  <div class="student-details">
    <img class="avatar" src=${person.picture.large} alt="Profile Picture">
    <h3>${person.name.title} ${person.name.first} ${person.name.last}</h3>
    <span class="email">${person.email}</span>
  </div>
  <div class="joined-details">
    <span class="date">Joined ${person.registered.date}</span>
  </div>
</li>
  `;

//   studentList += htmlString;
studentList.insertAdjacentHTML("beforeend", html)
}
}
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list ) => {
const buttons = Math.ceil(list.length/9);
const buttonList = document.querySelector('.link-list');
buttonList.innerHTML = '';

for (let i = 1; i <= buttons; i++) {
const html = `
<li>
   <button type="button">${i}</button>
 </li>
`;
buttonList.insertAdjacentHTML("beforeend", html);

 buttonList.querySelector('button').classList.add('active');

}

buttonList.addEventListener("click", (e) => {
   const activeButton = buttonList.querySelector('.active')
   const buttonClicked = e.target.closest("button");
   console.log("buttonClicked", buttonClicked)
   if (buttonClicked) {
      activeButton.classList.remove('active');
      console.log("buttonClicked", buttonClicked)
      buttonClicked.classList.add('active');
      showPage(list,  buttons)
   }
})

}

console.log(data)
// Call functions
addPagination(data);
showPage(data, 1)