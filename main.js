const root = document.getElementById("root");

class List {

    constructor(tag, content) {
        this.tag = tag
        this.content = content;
    }

    createList() {
        const listItem = ["Home", "About", "Contact"];
        const ul = document.createElement("ul")
        const li = document.createElement("li")

        for(const list of listItem ) {
            li.textContent = list;
        }

        return ul.append(li)
    }
}

root.append(new List().createList())