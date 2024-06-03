fetch(`http://localhost:5000/users/${localStorage.getItem('id')}`, {
    method: "GET"
})
    .then((res) => {
        console.log(res)
        if (res.ok && res.status === 200) {
            return res.json()
        } else {
            return 'CLIENT ERROR'
        }
    })
    .then((data) => {
        document.getElementById('loading').style = 'display:none'
        document.getElementById('user').style = 'display:block'
        if(!Array.isArray(data)){
            document.getElementById('user').innerText = data
        }else{
            document.getElementById('user').innerText = data[0].username
        }
    })
    .catch((err) => {
        document.getElementById('loading').style = 'display:none'
        document.getElementById('user').style = 'display:block'
        document.getElementById('user').innerHTML = `<h1>LOADING ERROR</h1>`
    })
