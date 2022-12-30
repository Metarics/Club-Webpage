const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
let id = params.id; 

const article = document.getElementById("article");
const PageTitle = document.getElementById("page-title");
const PageContent = document.getElementById("page-content");

fetch('pages/'+id.toString(10)+'.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (page) {
        PageTitle.innerHTML = page["title"];
        PageContent.innerHTML = page["content"];
    })
    .catch (function (err) {
        PageTitle.innerHTML = "404:Page Not found";
        PageTitle.align = "center";
        PageContent.style.visibility = "hidden";
    console.log('error retrieving data for article ' + err);
});