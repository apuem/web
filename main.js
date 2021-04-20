function searching() {
    var input, autocomplete, ul, li, a, i;
    input = document.getElementById("search");
    autocomplete = input.value.toUpperCase();
    ul = document.getElementById("webappList");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("span")[0];
        if (a.innerHTML.toUpperCase().indexOf(autocomplete) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

$.ajax({
    url: "/assets/web-app-list.json",
    dataType: "json",
}).done(function (result) {
    console.log(result);
    var selected = result.filter(function (item) {
        return item.id == i;
});

var i;
for (i = 0; i < result.length; i++) {
    
    const webappList = document.querySelector('#webappList');

    let li = document.createElement('li');
    let title = document.createElement('span');
    let id = document.createElement('span');
    let link = document.createElement('a');

    var linkName = result[i].name;

    li.className = "list-group-item";
    title.textContent = result[i].title;
    id.className = "text-secondary badge";
    id.textContent = "AP" + result[i].id;
    link.href = "https://apuem.com/" + linkName;

    li.appendChild(title);
    li.appendChild(id);

    link.appendChild(li);

    webappList.appendChild(link);
}

});