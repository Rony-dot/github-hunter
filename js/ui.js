class UI {
    constructor() {
        this.profile = document.querySelector('#profile');
    }
    showProfile(user) {
        console.log("received in UI.js file... " + user)
        console.log(user)
        this.profile.innerHTML =
            `<div class="card text-white">
            <div class="row">
                <div class="card-header col-md-3 d-grid gap-2 mx-auto py-3">
                    <img src="${user.avatar_url}" style="max-width:300px !important; max-height:300px !important" alt="" class="mx-auto img-fluid rounded-circle">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary ">view profile</a>
                </div>
                <div class="card-body col-md-9 py-3">
                    <h1 class="card-title">${user.name}</h1>
                    <span class="badge bg-primary">Total Public Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary">Total Public gists: ${user.public_gists}</span>
                    <span class="badge bg-success">Followers: ${user.followers}</span>
                    <span class="badge bg-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group" style="padding:0">
                        <li class="list-group-item">Bio: ${user.bio? user.bio : "no bio"}</li>
                        <li class="list-group-item">Repos:
                         <a href="${user.repos_url}" class="btn btn-info btn-sm">click</a>
                         </li>
                        <li class="list-group-item ">Gists:
                        <a href="${user.gists_url}" class="btn btn-info btn-sm">click</a>
                        </li>
                        <li class="list-group-item">Starred:
                        <a href="${user.starred_url}" class="btn btn-info btn-sm">click</a>
                        </li>
                        <li class="list-group-item">Member Since:
                        <a href="${user.created_at}" class="btn btn-info btn-sm">click</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
    }
}