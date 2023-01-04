var updateWindow = document.getElementById("update-window");
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/scripts/sw.js').then((registration) => {
      console.log('Service worker registration succeeded:', registration);
    },(error) => {
      console.error(`Service worker registration failed: `,error);
    });
  } else {
    console.error('Service workers are not supported.');
  }  

fetch('scripts/updates.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var noOfUpdates = data.length;
        data.forEach(x => {
            let box = document.createElement("a");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
            box.className = "box fancy-button";
            box.href = "/page.html" + "?id="+ x["id"];
            h2.innerHTML = x["title"];
            p.innerHTML = x["content"];
            updateWindow.appendChild(box);
            box.appendChild(h2);
            box.appendChild(p);
        })
        if(noOfUpdates==0){
            let text = document.createElement("p");
            text.innerHTML = "No updates..";
            updateWindow.appendChild(text);
        }
    })
    .catch(function (err) {
        let text = document.createElement("p");
        text.innerHTML = "Connection Error..";
        updateWindow.appendChild(text);
    });
