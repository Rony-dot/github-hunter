let searchBtn = document.querySelector('#searchBtn')
let searchUser = document.querySelector('#searchUser')
let url = "https://api.github.com/users"
let ui = new UI();
searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    if (userText != '') {
        fetch(`${url}/${userText}`)
            .then(res => res.json())
            .then(data => {
                console.log(`${url}/${userText}`);
                ui.showProfile(data);
            }).catch(ex => console.log("error occured.... !!! "+ex))

    }
})