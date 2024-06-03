
// function showList(value, valueSecond) {

// fetch(`http://localhost:5000/users?value=${value}&valueSecond=${valueSecond}`)
//     .then((res) => {
//         console.log(res)
//         console.log(res.headers.get('content-type'))
//         if (res.ok  && res.headers.get('content-type').includes('text')) {
//             return res.text()
//         }else if(res.ok  && res.headers.get('content-type').includes('json')){
//             return res.json()
//         }
//          else {
//             return 'CLIENT ERROR'
//         }
//     })
//     .then((data) => {
//         console.log(data)
//         document.getElementById('loading').style = 'display:none'
//         document.getElementById('list').style = 'display:block'
//         if(Array.isArray(data)){
//             data.forEach(element => {
//                 let li = document.createElement('li')
//                 let a = document.createElement('a')
//                 a.href = 'user.html'
//                 a.innerText = element.username
//                 a.addEventListener('click', () => {
//                          localStorage.setItem('id', element.id)
//                 })
//                 li.appendChild(a)
//                 document.getElementById('list').appendChild(li)
//             });
//         }else{
//             document.getElementById('list').innerText = data
//         }

//     })
//     .catch((err) => {
//         document.getElementById('loading').style = 'display:none'
//         document.getElementById('list').style = 'display:block'
//         document.getElementById('list').innerHTML = `<h1>LOADING ERROR</h1>`
//     })
// }

// showList('')

// document.getElementById('search').addEventListener('input', () => {
//     document.getElementById('list').innerHTML = ``
//     showList(document.getElementById('search').value,document.getElementById('searchSecond').value)
// })

// document.getElementById('searchSecond').addEventListener('input', () => {
//     document.getElementById('list').innerHTML = ``
//     showList(document.getElementById('search').value,document.getElementById('searchSecond').value)
// })

function showListWorkers(value) {
    fetch(`http://localhost:5000/workers?department=${value}`)
        .then((res) => {
            console.log(res)
            console.log(res.headers.get('content-type'))
            if (res.ok && res.headers.get('content-type').includes('text')) {
                return res.text()
            } else if (res.ok && res.headers.get('content-type').includes('json')) {
                return res.json()
            }
            else {
                return 'CLIENT ERROR'
            }
        })
        .then((data) => {
            console.log(data)
            document.getElementById('loading').style = 'display:none'
            document.getElementById('list').style = 'display:block'
            if (Array.isArray(data)) {
                data.forEach(element => {
                    let li = document.createElement('li')
                    li.innerHTML = `<p>${element.name}</p>`
                    let del = document.createElement('button')
                    del.innerText = `X`
                    console.log(element.id)
                    del.addEventListener('click', (ev) => {
                        ev.target.parentElement.remove()
                        fetch(`http://localhost:5000/delete/${element.id}`, {
                            method: "DELETE",
                        })
                    })
                    let input = document.createElement('input')
                    input.type = 'checkbox'
                    input.value = element.id                  
                    input.addEventListener('change', () => {
                        let check = Number(input.checked)
                        fetch(`http://localhost:5000/checked-delete?chckedObj=${check}&id=${element.id}`,{
                            method: 'PATCH',
                        })
                    })
                    li.appendChild(del)
                    li.appendChild(input)

                    document.getElementById('list').appendChild(li)
                });
            } else {
                document.getElementById('list').innerText = data
            }

        })
        .catch((err) => {
            document.getElementById('loading').style = 'display:none'
            document.getElementById('list').style = 'display:block'
            document.getElementById('list').innerHTML = `<h1>LOADING ERROR</h1>`
        })
}

showListWorkers('')

document.getElementById('select').addEventListener('change', (ev) => {
    document.getElementById('list').innerHTML = ``
    showListWorkers(ev.target.value)
})

document.getElementById('deleteAll').addEventListener('click', () => {
    let boxes = document.querySelectorAll('ul li input')
    boxes.forEach((item) => {
        if (item.checked) {
            item.parentElement.remove()
        }
    })
    fetch(`http://localhost:5000/delete-all`, {
        method: "DELETE",
    })
})



document.getElementById('addForm').addEventListener('submit', (ev) => {
    ev.preventDefault()
    let formData = new FormData(ev.target)
    let infoArray = [...formData]
    console.log(infoArray)

    let infoObj = {}
    infoArray.forEach((item) => {
        console.log(item)
        infoObj[item[0]] = item[1]
    })
    fetch('http://localhost:5000/add-worker', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(infoObj)
    }).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
        if (data.case) {
            infoObj = {...infoObj, id: data.id}
            let li = document.createElement('li')
            li.innerHTML = `<p>${infoObj.name}</p>`
            let del = document.createElement('button')
            del.innerText = `X`
            console.log(infoObj.id)
            del.addEventListener('click', (ev) => {
                ev.target.parentElement.remove()
                fetch(`http://localhost:5000/delete/${infoObj.id}`, {
                    method: "DELETE",
                })
            })
            let input = document.createElement('input')
            input.type = 'checkbox'
            input.value = infoObj.id
            let change = document.createElement('button')
            change.innerText = 'CHANGE'
            del.addEventListener('click', () => {
                let input = prompt()

               
            })

            li.appendChild(del)
            li.appendChild(input)
            document.getElementById('list').appendChild(li)
        } else {
            console.log(data.text)
        }
    })
})