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

        return container;
    }

    replaceChild() {
        const Parent = this.createNewTag();

        Parent.replaceChild(Parent.children[0], "h4")
    }
}

const getTag = new makeChild();
// getTag.createNewTag()
getTag.replaceChild()


const callIt = (name) => {
   console.log(name)
}

function sentName(callback) {
    const name = "raazy";

    callback(name)
}

sentName(callIt())