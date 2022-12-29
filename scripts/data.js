var updateWindow = document.getElementById("update-window");

fetch('scripts/updates.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        data.forEach(x => {
            let box = document.createElement("div");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            box.className = "box fancy-button";
            box.onclick= function(){
                window.location.href = "/page.html" + "?id="+ x["id"];
            }
            h2.innerHTML = x["title"];
            p.innerHTML = x["content"];
            updateWindow.appendChild(box);
            box.appendChild(h2);
            box.appendChild(p);
        })
    })
    .catch(function (err) {
        console.log('error retrieving data for updates ' + err);
    });
