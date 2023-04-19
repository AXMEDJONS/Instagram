let doc = document
let body = doc.body

let form = doc.forms.form
let input__name = form.name
let input__surname = form.surname
let input__email = form.email
let input__phone = form.phone
let input__password = form.password
let button = doc.querySelector('btn')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let user = {
        id: Math.floor(Math.random() * 1000)
    }
    let data = new FormData(form)
    data.forEach((value, key) => {
        user[key] = value
    })
    fetch('http://localhost:3002/data', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    })

    input__name.value = ""
    input__surname.value = ""
    input__email.value = ""
    input__phone.value = ""
    input__password.value = ""
})

fetch('http://localhost:3002/data')
    .then(res => res.json())
    .then(res => console.log(res))