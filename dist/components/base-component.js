export class Component {
    constructor(templateId, hostElement, insertAtStart, newElementid) {
        this.templateElement = document.getElementById(templateId);
        this.hostElement = document.getElementById(hostElement);
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        if (newElementid) {
            this.element.id = newElementid;
        }
        this.attach(insertAtStart);
    }
    attach(insertAtBeginning) {
        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
    }
}
//# sourceMappingURL=base-component.js.map