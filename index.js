const tutors = [{
  Name: 'Mahir Al Muaiqly',
  Title: 'Imam, Khatib & Qari',
  short_discription: 'Born on 11th May 1985 and asfaa asfaf asfasf asfas afasf safas sfa',
  img: 'images/mahir.jfif',
},
{
  Name: 'Mahir Al Muaiqly',
  Title: 'Imam, Khatib & Qari',
  short_discription: 'Born on 11th May 1985 and asfaa asfaf asfasf asfas afasf safas sfa',
  img: 'images/mahir.jfif',
},
{
  Name: 'Mahir Al Muaiqly',
  Title: 'Imam, Khatib & Qari',
  short_discription: 'Born on 11th May 1985 and asfaa asfaf asfasf asfas afasf safas sfa',
  img: 'images/mahir.jfif',
  class: 'hide',
},
{
  Name: 'Mahir Al Muaiqly',
  Title: 'Imam, Khatib & Qari',
  short_discription: 'Born on 11th May 1985 and asfaa asfaf asfasf asfas afasf safas sfa',
  img: 'images/mahir.jfif',
  class: 'hide',
},
{
  Name: 'Mahir Al Muaiqly',
  Title: 'Imam, Khatib & Qari',
  short_discription: 'Born on 11th May 1985 and asfaa asfaf asfasf asfas afasf safas sfa',
  img: 'images/mahir.jfif',
  class: 'hide',
},
{
  Name: 'Mahir Al Muaiqly',
  Title: 'Imam, Khatib & Qari',
  short_discription: 'Born on 11th May 1985 and asfaa asfaf asfasf asfas afasf safas sfa',
  img: 'images/mahir.jfif',
  class: 'hide',
},
];

const teachers = document.querySelector('.holder');
tutors.forEach((item) => {
  teachers.innerHTML
  += `<div class="tutors ${item.class}">
  <img src="${item.img}" alt="img" width="100px" height="100px">
  <div>
    <h2>${item.Name}</h2>
    <p class="primary">${item.Title}</p>
    <p>${item.short_discription}</p>
  </div>
</div>`;
});

const closebtn = document.querySelector('.close-btn');
const menuBar = document.querySelector('.menu-bar');
const main = document.querySelector('.pop-up');
menuBar.addEventListener('click', () => {
  main.classList.toggle('active');
});

closebtn.addEventListener('click', () => {
  main.classList.toggle('active');
});

const more = document.querySelector('.more');
const hiddenCards = document.querySelectorAll('.hide');
const capturedList = [...hiddenCards];

more.addEventListener('click', () => {
  capturedList.forEach((speaker) => {
    speaker.classList.toggle('hide');
  });
});