// let container = document.getElementById('container')
// let list = document.querySelector('ul')
// let html = document.querySelector('html')
// console.log(html.textContent)
// console.log(html.innerText)

// console.log(list.parentElement)
// console.log(list.previousElementSibling)
// console.log(list.nextElementSibling)
// console.log(list.firstElementChild)
// console.log(list.lastElementChild)
// console.log(list.childNodes)

// console.log(container)

// let listItem = document.getElementsByClassName('list-item')
// let listItem2 = document.querySelectorAll('ul .list-item')
// console.log(listItem[1].parentElement.lastElementChild)
// console.log(listItem2)

// for (let index = 0; index < listItem.length; index++) {
//     const element = listItem[index];
//     console.log(element)

// }

// listItem.forEach(element => {
//     console.log(element)
// });
// console.log(listItem)
// let mutatedlistItem = Array.from(listItem)
// console.log(mutatedlistItem)

let goods = [
  {
    product_name: "Kişi köynəyi",
    product_description: "Mavi rəngdə, 100% pamuk",
    product_price: 50,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın bluzası",
    product_description: "Dəri detallı, qara rəngdə",
    product_price: 60,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi pantolonu",
    product_description: "Qəhvəyi rəng, kənar cebi",
    product_price: 75,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın eteyi",
    product_description: "Qırmızı rəng, mini",
    product_price: 40,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi dəsmalı",
    product_description: "Nəqşdar dizayn",
    product_price: 20,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın çantası",
    product_description: "Əlgötürən, dəri",
    product_price: 90,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi botları",
    product_description: "Qış üçün, suya davamlı",
    product_price: 120,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın ayaqqabıları",
    product_description: "Yüksək tapan, lacivərt",
    product_price: 85,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Kişi papağı",
    product_description: "Qara rəngdə, dəri",
    product_price: 45,
    store_name: "Moda Dünyası",
    store_address: "Bakı şəhəri, Nizami kuçəsi 5",
  },
  {
    product_name: "Qadın şalvarı",
    product_description: "Göy rəngdə, kaşmir",
    product_price: 70,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi palto",
    product_description: "Süət dəri, qara rəngdə",
    product_price: 250,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın jaketi",
    product_description: "Uzun, qaşqır",
    product_price: 200,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi kəməri",
    product_description: "Dəri, metal tokalı",
    product_price: 40,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın badlonu",
    product_description: "Retro stil, qızıl rəngdə",
    product_price: 180,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi şortu",
    product_description: "Spor stil, elastik",
    product_price: 60,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın maykası",
    product_description: "Boyalı nəqş, pamuklu",
    product_price: 45,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Kişi saatı",
    product_description: "Qara rəngdə, analog",
    product_price: 150,
    store_name: "Zərif Moda",
    store_address: "Bakı şəhəri, 28 May kuçəsi 12",
  },
  {
    product_name: "Qadın bəzək",
    product_description: "Qızıl, komplekt",
    product_price: 220,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi atkısı",
    product_description: "Xəzəl rəng, uzun",
    product_price: 35,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bantı",
    product_description: "Metal detallı, elastik",
    product_price: 50,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi kostyumu",
    product_description: "İki parçalı, qara rəngdə",
    product_price: 320,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın kombinezonu",
    product_description: "Yaz üçün, açıq rəng",
    product_price: 150,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sviteri",
    product_description: "Düz rəng, yüngül",
    product_price: 70,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ziyafət geyimi",
    product_description: "Düzənşən, yaz üçün",
    product_price: 95,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi sport formaları",
    product_description: "Spandex, idman üçün",
    product_price: 55,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın bikini",
    product_description: "Tropik nəqş, elastik",
    product_price: 45,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi çantası",
    product_description: "Dizayner, əsas bölməsi",
    product_price: 100,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın ətri",
    product_description: "Gül ətri, uzunömürlü",
    product_price: 80,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Kişi şalı",
    product_description: "Səliqəli, çoxrəngli",
    product_price: 25,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
  {
    product_name: "Qadın sutyeni",
    product_description: "Destəklənmiş, rahat",
    product_price: 65,
    store_name: "Əliyev Moda Mərkəzi",
    store_address: "Bakı şəhəri, Azadlıq prospekti 89",
  },
];

// let voiceContainer = document.querySelector(".voice-container");
// let voice = document.querySelector(".voice");
// let text = document.querySelector("#text");

// let x;
// function rangeHandler(){
//   voiceContainer.addEventListener("mousemove", rangeHandlerMove);
// }

// function rangeHandlerMove(ev){
//     x = ev.offsetX / 4;
//     voice.style = `width: ${x}%;`;
//     text.innerText = Math.floor(x);
// }

// function rangeHandlerRemove(){
//   voiceContainer.removeEventListener('mousemove',rangeHandlerMove)
// }

// voiceContainer.addEventListener("mousedown",rangeHandler);
// voiceContainer.addEventListener("mouseup", rangeHandlerRemove);

// goods.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerHTML = `<p>${item.product_name}</p><p>${item.product_description}</p><p>${item.product_price}</p><p>${item.store_address}</p><p>${item.store_name}</p>`;
//   goodsList.appendChild(li);
// });

// function addObject() {
//   let item = {
//     product_name: "Kişi şalı",
//     product_description: "Səliqəli, çoxrəngli",
//     product_price: 25,
//     store_name: "Əliyev Moda Mərkəzi",
//     store_address: "Bakı şəhəri, Azadlıq prospekti 89",
//   };
//   goods.push(item);
//   let li = document.createElement("li");
//   li.innerHTML = `<p>${item.product_name}</p><p>${item.product_description}</p><p>${item.product_price}</p><p>${item.store_address}</p><p>${item.store_name}</p>`;
//   goodsList.appendChild(li);
//   console.log(goods);
// }
// let add = document.getElementById("add");
// add.addEventListener("click", addObject);
// let lists = document.querySelectorAll("#list li");

// lists.forEach((item) => {
//     item.addEventListener('mousedown', (ev) => {
//         ev.currentTarget.style = 'background-color: red; font-size:30px'
//     })
//     item.addEventListener('mouseup', (ev) => {
//         ev.currentTarget.style = 'background-color: transparent'
//     })
//     item.addEventListener('mousemove', (ev) => {
//         console.log(ev.offsetX,ev.offsetY)
//     })
// })

// document.addEventListener('scrollend', function(ev){
//     console.log('ok')
// })

// for (let index = 0; index < buttons.length; index++) {
//   const element = buttons[index];
//   element.nextElementSibling.style = "display:none";
// }

// function showFunction(ev) {
//   if (ev.target.nextElementSibling.style.display === "none") {
//     ev.target.nextElementSibling.style = "display:block;";
//   } else {
//     ev.target.nextElementSibling.style = "display:none;";
//   }
// }

// for (let index = 0; index < buttons.length; index++) {
//   const element = buttons[index];
//   element.addEventListener("click", showFunction);
// }

// showAlert.removeEventListener('click', showFunction)

// let inputValue = document.getElementsByName("gender");
// let getInfo = document.getElementById("getInfo");

// inputValue.forEach((item) => {
//   item.addEventListener("click", (ev) => {
//     console.log(ev.target.value)
//   });
// });


let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let checkedInfo = document.getElementById("checkedInfo");
let send = document.getElementById("send");
let par = document.getElementById("par");

send.addEventListener('click', () => {
  if(checkedInfo.checked){
    console.log(userName.value, userEmail.value, userPassword.value)
    par.innerHTML = `<p>${userName.value}</p>
    <p>${userEmail.value}</p>
    <p>${userPassword.value}</p>`
  }else{
    console.log('err') }
})

const regex = /^\+994-(50|51|70|55)-\d{3}-\d{2}-\d{2}$/;
userName.addEventListener('input', (ev) => {
  if(regex.test(ev.target.value)){
    par.innerText = 'OKAY'
  }else{
    par.innerText = 'WRONG'

  }
 
})

let form = document.querySelector("form");
let formButton = document.querySelector("form button");
let inputLogin = document.querySelector("form input[name=login]");
let inputEmail = document.querySelector("form input[name=email]");
let inputPassword = document.querySelector("form input[name=password]");
let inputYear = document.querySelector("form input[name=year]");
let inputs = document.querySelectorAll('form input')

let activeFormButton = true
formButton.disabled = activeFormButton

function checkButton(){
  let formData = new FormData(form);
  if (
    formData.get("login").length < 8 ||
    !formData.get("email").endsWith(".com") ||
    formData.get("password").length < 8 ||
    formData.get("year") <= 18
  ){
    activeFormButton = true
    formButton.disabled = activeFormButton

  }else{
    activeFormButton = false
    formButton.disabled = activeFormButton
  }
}

inputs.forEach((item) => {
item.addEventListener('input', (ev) => {
     if(ev.target.name === 'login'){
      if (inputLogin.value.length > 8) {
        ev.target.nextElementSibling.style = "display:none";
      } else {
        ev.target.nextElementSibling.style = "display:block";
      }
     }
     if(ev.target.name === 'email'){
      if (inputEmail.value.endsWith(".com")) {
        ev.target.nextElementSibling.style = "display:none";
      } else {
        ev.target.nextElementSibling.style = "display:block";
      }
     }
     if(ev.target.name === 'password'){
      if (inputPassword.value.length > 8) {
        ev.target.nextElementSibling.style = "display:none";
      } else {
        ev.target.nextElementSibling.style = "display:block";
      }
     }
     if(ev.target.name === 'year'){
      if (inputYear.value >= 18) {
        ev.target.nextElementSibling.style = "display:none";
      } else {
        ev.target.nextElementSibling.style = "display:block";
      }
     }
     checkButton()
  })
 
})

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let obj = {};
  let formData = new FormData(form);
  if (
    formData.get("login").length < 8 ||
    !formData.get("email").endsWith(".com") ||
    formData.get("password").length < 8 ||
    formData.get("year") <= 18
  ) {
    alert("NOT VALID FORMAT");
    return;
  } else {
    let arrayOfValue = [...formData];
    console.log(arrayOfValue)
    for (const [key, value] of arrayOfValue) {
      obj[key] = value;
    }
    console.log(obj);
  }
});
