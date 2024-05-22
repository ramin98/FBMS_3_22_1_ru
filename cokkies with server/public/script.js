// document.cookie = "username=Samir; expires=Wed, 24 May 2024 00:00:00 UTC; path=/;";
// document.cookie = "name=Taleh; expires=Wed, 24 May 2024 00:00:00 UTC; path=/;";

// console.log(document.cookie)


// let cookiesArray = document.cookie.split(';')
// cookiesArray = cookiesArray.map((item) => {
//     let newArray = item.split('=')
//     return newArray
// })

// console.log(cookiesArray)



fetch('http://localhost:4000/setCookies')
.then((res) => res.text())
.then((data) => console.log(data))

fetch('http://localhost:4000/getCookies')
.then((res) => res.text())
.then((data) => console.log(data))