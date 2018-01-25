class Test {
    constructor(obj) {
        this.wrap = document.querySelector(".wrap")
        this.tab = obj.tab;
        this.createtitle();
        this.addEvent();
    }
    createtitle() {
        var ul = document.createElement("ul");
        ul.className = "uls";
        [...this.tab].forEach(function(item) {
            var li = document.createElement("li");
            li.innerHTML = item.title;
            ul.append(li);
        });
        this.wrap.append(ul);
        return ul;
    }
    createcontent() {
        var content = document.createElement("div");
        content.className = "content";
        content.innerHTML = this.tab[0]["txt"];
        this.wrap.append(content);
        return content;
    }
    addEvent() {
        let lis = document.querySelectorAll("li");
        let tent = this.createcontent();
        for (let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click", (event) => {
                tent.innerHTML = this.tab[i]["txt"];
            }, false)
        }
    }
}
new Test({
    tab: [{
        "id": 1,
        "title": "title1",
        "txt": "内容1"
    }, {
        "id": 2,
        "title": "title2",
        "txt": "内容2"
    }, {
        "id": 3,
        "title": "title3",
        "txt": "内容3"
    }]
})