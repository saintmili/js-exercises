// fetch()
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

let postsUrl = 'https://jsonplaceholder.typicode.com/posts/'
let usersUrl = 'https://jsonplaceholder.typicode.com/users/'
let app = document.querySelector('#app')

async function getArticles(url) {
    let response = await fetch(url)
    articles = await response.json()
    articles.forEach(async article => {
        article.user = await getAuthor(usersUrl, article.userId)
        app.innerHTML += `
            <article>
                <h2 class="h4">${article.title}</h2>
                <small class="badge badge-secondary">${article.user.name}</small>
                <p>${article.body}</p>
            </article>
            <hr>
        `
    });
}

async function getAuthor(url, id) {
    let response = await fetch(url + id)
    let author = await response.json()
    return author
}

getArticles(postsUrl)