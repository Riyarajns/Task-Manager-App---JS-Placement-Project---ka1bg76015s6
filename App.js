let taskHeading = document.querySelector(".task-heading");
let input = document.querySelector(".add-input");
let button = document.querySelector(".add-btn");
const containerList = document.querySelector(".container-list");


input.setAttribute("placeholder", "Please Enter Task");


button.addEventListener("click", function () {
  //console.log("hello");

  if(input.value === "") {
    alert("Please Fill This Field");
  }
  else {
  var containertList1Item = document.createElement('div');
  containertList1Item.classList.add('container-list1-item');
  containerList.appendChild(containertList1Item);

  let itemColor = document.createElement('div');
  itemColor.classList.add('item-color');
  containertList1Item.appendChild(itemColor);
  // if (containerList == containertList1Item) {
  //   itemColor.style.display = "#e75b4a";
  // }
  // if (containerList == )

  let itemHeading = document.createElement('div');
  itemHeading.classList.add('item-heading');
  containertList1Item.appendChild(itemHeading);

  let heading = document.createElement('h3');
  // heading.classList.add('task-heading');
  heading.innerText = input.value;
  itemHeading.appendChild(heading);
  input.value = '';

  const description = document.createElement('div');
  description.classList.add('description');
  containertList1Item.appendChild(description);

  const decsPara = document.createElement('div');
  decsPara.classList.add('desc-para');
  description.appendChild(decsPara);

  const para = document.createElement('p');
  para.classList.add('para');
  // add paragraph using modal
  decsPara.appendChild(para);

  var descBtn = document.createElement('div');
  descBtn.classList.add('desc-btn');
  // add paragraph using modal
  description.appendChild(descBtn);

  descBtn.addEventListener('click', function () {
    containertList1Item.remove();
  });
  // open modal

  containertList1Item.addEventListener('dblclick', function () {
    containertList1Item.setAttribute("data-bs-toggle", "modal");
    containertList1Item.setAttribute("data-bs-target", "#exampleModal");


    const messageText = document.querySelector("#message-text");
    const addPara = document.querySelector("#add-para");
    const recipientName = document.querySelector("#recipient-name");

    addPara.addEventListener('click', function () {

      heading.innerText = recipientName.value;

      para.innerText = messageText.value;
    });
    // recipientName.value=' ';
    // messageText.value=' ';


  });
  // DRAG START
  containertList1Item.setAttribute("draggable", "true");
  containertList1Item.addEventListener('dragstart', () => {
    containertList1Item.classList.add('dragging');
  });
  containertList1Item.addEventListener('dragend', () => {
    containertList1Item.classList.remove('dragging');
  });
}
});

const listcontainer = document.querySelectorAll('.container-list');
listcontainer.forEach((list) => {
  list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingElm = document.querySelector('.dragging');
    list.appendChild(draggingElm);
  })
})
