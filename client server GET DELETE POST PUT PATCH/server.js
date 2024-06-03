let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let app = express()

app.use(cors())
app.use(bodyParser.json())


let arr = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
            "street": "Douglas Extension",
            "suite": "Suite 847",
            "city": "McKenziehaven",
            "zipcode": "59590-4157",
            "geo": {
                "lat": "-68.6102",
                "lng": "-47.0653"
            }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
            "name": "Romaguera-Jacobson",
            "catchPhrase": "Face to face bifurcated interface",
            "bs": "e-enable strategic applications"
        }
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
            "street": "Hoeger Mall",
            "suite": "Apt. 692",
            "city": "South Elvis",
            "zipcode": "53919-4257",
            "geo": {
                "lat": "29.4572",
                "lng": "-164.2990"
            }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
            "name": "Robel-Corkery",
            "catchPhrase": "Multi-tiered zero tolerance productivity",
            "bs": "transition cutting-edge web services"
        }
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8129",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
            "street": "Norberto Crossing",
            "suite": "Apt. 950",
            "city": "South Christy",
            "zipcode": "23505-1337",
            "geo": {
                "lat": "-71.4197",
                "lng": "71.7478"
            }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
            "name": "Considine-Lockman",
            "catchPhrase": "Synchronised bottom-line interface",
            "bs": "e-enable innovative applications"
        }
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
            "street": "Rex Trail",
            "suite": "Suite 280",
            "city": "Aliyaview",
            "zipcode": "58804-1099",
            "geo": {
                "lat": "24.8918",
                "lng": "21.8984"
            }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
            "name": "Johns Group",
            "catchPhrase": "Configurable multimedia task-force",
            "bs": "generate enterprise e-tailers"
        }
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
            "street": "Ellsworth Summit",
            "suite": "Suite 729",
            "city": "Aliyaview",
            "zipcode": "45169",
            "geo": {
                "lat": "-14.3990",
                "lng": "-120.7677"
            }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
            "name": "Abernathy Group",
            "catchPhrase": "Implemented secondary concept",
            "bs": "e-enable extensible e-tailers"
        }
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
            "street": "Dayna Park",
            "suite": "Suite 449",
            "city": "Lebsackbury",
            "zipcode": "76495-3109",
            "geo": {
                "lat": "24.6463",
                "lng": "-168.8889"
            }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
            "name": "Yost and Sons",
            "catchPhrase": "Switchable contextually-based project",
            "bs": "aggregate real-time technologies"
        }
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }
]

let workers = [
    {
        "name": "Алексей Иванов",
        "department": "Маркетинг",
        "position": "Менеджер по маркетингу"
    },
    {
        "name": "Ольга Петрова",
        "department": "Маркетинг",
        "position": "Аналитик по маркетингу"
    },
    {
        "name": "Ирина Сидорова",
        "department": "Финансы",
        "position": "Финансовый аналитик"
    },
    {
        "name": "Максим Кузнецов",
        "department": "ИТ",
        "position": "Разработчик программного обеспечения"
    },
    {
        "name": "Наталья Смирнова",
        "department": "Человеческие ресурсы",
        "position": "HR-менеджер"
    },
    {
        "name": "Дмитрий Васильев",
        "department": "Финансы",
        "position": "Бухгалтер"
    },
    {
        "name": "Екатерина Михайлова",
        "department": "ИТ",
        "position": "Системный администратор"
    },
    {
        "name": "Андрей Попов",
        "department": "Маркетинг",
        "position": "Специалист по рекламе"
    },
    {
        "name": "Татьяна Ковалёва",
        "department": "Финансы",
        "position": "Контролёр"
    },
    {
        "name": "Сергей Новиков",
        "department": "ИТ",
        "position": "Аналитик данных"
    },
    {
        "name": "Марина Федорова",
        "department": "Человеческие ресурсы",
        "position": "Рекрутер"
    },
    {
        "name": "Виктор Захаров",
        "department": "Маркетинг",
        "position": "Менеджер по контенту"
    },
    {
        "name": "Анна Баранова",
        "department": "ИТ",
        "position": "Разработчик мобильных приложений"
    },
    {
        "name": "Игорь Соловьев",
        "department": "Человеческие ресурсы",
        "position": "Специалист по обучению"
    },
    {
        "name": "Юлия Лебедева",
        "department": "Финансы",
        "position": "Финансовый консультант"
    },
    {
        "name": "Владимир Борисов",
        "department": "Маркетинг",
        "position": "PR-специалист"
    },
    {
        "name": "Елена Воробьёва",
        "department": "Человеческие ресурсы",
        "position": "Специалист по компенсациям и льготам"
    },
    {
        "name": "Александр Герасимов",
        "department": "ИТ",
        "position": "Инженер по безопасности"
    },
    {
        "name": "Светлана Чернова",
        "department": "Маркетинг",
        "position": "Менеджер по продукту"
    },
    {
        "name": "Роман Григорьев",
        "department": "Финансы",
        "position": "Риск-менеджер",
    }
]


for (let index = 0; index < workers.length; index++) {
    const element = workers[index];
    element.id = index + 1
}

console.log(workers)
app.get('/workers', (req, res) => {
    let departmentValue = req.query.department
    if (!departmentValue) {
        res.send(workers)
    } else {
        let filteredArray = workers.filter((item) => item.department.startsWith(departmentValue))
        res.send(filteredArray)
    }
})

app.delete('/delete/:id', (req, res) => {
    let id = req.params.id
    workers = workers.filter((item) => id != item.id)
})

app.delete('/delete-all', (req, res) => {
    workers = workers.filter((item) => item.deleted !== 1)
    console.log(workers)
})



app.patch('/checked-delete', (req, res) => {
    let id = parseInt(req.query.id)
    let check = parseInt(req.query.chckedObj)
    console.log(id)
    console.log(check)
    if (check && id) {
        let element = workers.findIndex((item) => item.id === id)
        workers[element].deleted = check
        console.log(workers[element])
        res.send('OK')
    } else {
        res.send('ERR')
    }
})

app.patch('/change-name/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let userName = req.body
    console.log(id)
    console.log(userName)
    if (userName && id) {
        let element = workers.findIndex((item) => item.id === id)
        workers[element].name = userName
        console.log(workers[element])
        res.send('OK')
    } else {
        res.send('ERR')
    }
})


app.get('/users', (req, res) => {
    let searchValue = req.query.value
    let searchValueSecond = req.query.valueSecond

    console.log(searchValue)
    if (!searchValue && !searchValueSecond) {
        console.log('all array')
        res.send(arr)
    } else {
        let filteredArray = arr.filter((item) => item.username.startsWith(searchValue)
            && item.address.city.startsWith(searchValueSecond))
        res.send(filteredArray)
    }

})

app.post('/add-worker', (req, res) => {
    let worker = req.body
    console.log(worker)
    if (workers.some((item) => item.name === worker.name)) {
        res.json({ text: 'THIS PERSON ALREDY IS IN ARRAY', case: false })
        return
    } else {
        console.log(workers.at(-1).id)
        let lastId = workers.at(-1).id + 1
        workers.push({ ...worker, id: lastId })
        res.json({ text: 'THIS PERSON ADDED TO ARRAY' + worker.name, case: true, id: lastId })
    }
})

app.get('/users/:id', (req, res) => {
    let id = parseInt(req.params.id)
    let filteredArray = arr.filter((item) => id === item.id)
    res.json(filteredArray)
})


app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log(5000)
    }
})