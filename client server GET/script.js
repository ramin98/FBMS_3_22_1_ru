fetch('http://localhost:5000/users', {
    method: "GET"
})
    .then((res) => {
        console.log(res)
        console.log(res.headers.get('content-type'))
        if (res.ok  && res.headers.get('content-type').includes('text')) {
            return res.text()
        }else if(res.ok  && res.headers.get('content-type').includes('json')){
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
        if(Array.isArray(data)){
            data.forEach(element => {
                let li = document.createElement('li')
                let a = document.createElement('a')
                a.href = 'user.html'
                a.innerText = element.username
                a.addEventListener('click', () => {
                         localStorage.setItem('id', element.id)
                })
                li.appendChild(a)
                document.getElementById('list').appendChild(li)
            });
        }else{
            document.getElementById('list').innerText = data
        }
       
    })
    .catch((err) => {
        document.getElementById('loading').style = 'display:none'
        document.getElementById('list').style = 'display:block'
        document.getElementById('list').innerHTML = `<h1>LOADING ERROR</h1>`
    })
