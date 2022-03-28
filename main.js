class makeChild {
    constructor(tagName, text) {
        this.tagName = tagName;
        this.text = text;
    }

    createNewTag() {
        const container = document.getElementsByClassName("container")[0];
        const newTag = document.createElement("h2");
        const newText = document.createTextNode("new Element");

        newTag.appendChild(newText);
        container.appendChild(newTag)
    }

    replaceChild() {
        // const firstChild = this.createNewTag();

        console.log(this.createNewTag())
    }
}

const getTag = new makeChild();
// getTag.createNewTag()
getTag.replaceChild()