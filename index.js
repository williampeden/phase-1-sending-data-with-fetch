function submitData(name, email) {
    const configurationObject ={
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            "name": name,
            "email": email
        })

    }
    return fetch("http://localhost:3000/users", configurationObject)
    .then(res =>res.json())
    .then(body => newContact (body.id))

    .catch(function(error){
        document.body.innerHTML = error.message
    })
}

function newContact(contact){
    document.getElementsByTagName("body")[0].innerHTML = contact
    document.body.append(contact)
}
