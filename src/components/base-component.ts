// Component Base Class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElement: string,
    insertAtStart: boolean,
    newElementid?: string
  ) {
    this.templateElement = <HTMLTemplateElement>document.getElementById(templateId)!;
    this.hostElement = <T>document.getElementById(hostElement)!;
    const importedNode = document.importNode(this.templateElement.content, true);
    this.element = <U>importedNode.firstElementChild;
    if (newElementid) {
      this.element.id = newElementid;
    }
    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? 'afterbegin' : 'beforeend',
      this.element
    )
  }

  abstract configure(): void;
  abstract renderContent(): void;
}