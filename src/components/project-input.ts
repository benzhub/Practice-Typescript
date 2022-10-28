/// <reference path="./base-component.ts"/>
/// <reference path="../decorators/autobind.ts"/>
/// <reference path="../utils/validation.ts"/>
/// <reference path="../state/project-state.ts"/>

namespace App {
    // ProjectInput Class
    export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
        titleInputElement: HTMLInputElement;
        descriptionInputElement: HTMLInputElement;
        peopleInputElement: HTMLInputElement;

        constructor() {
            super('project-input', 'app', true, 'user-input')

            this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title')!;
            this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description')!;
            this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people')!;

            this.configure();
        }

        configure () {
            this.element.addEventListener('submit', this.submitHandler)
        }

        renderContent() {}

        private getUserInput (): [string, string, number] | void {
            const enteredTitle = this.titleInputElement.value;
            const enteredDescription = this.descriptionInputElement.value;
            const enteredPeople = +this.peopleInputElement.value;

            const titleValidatable: Validatable = {
                value: enteredTitle,
                required: true
            }
            const descriptionValidatable: Validatable = {
                value: enteredDescription,
                required: true,
                minLength: 5
            }
            const peopleValidatable: Validatable = {
                value: enteredPeople,
                required: true,
                min: 1,
                max: 5
            }

            if (
                !validate(titleValidatable) ||
                !validate(descriptionValidatable) ||
                !validate(peopleValidatable)
            ) {
                alert('Invalid input, please try again!');
                return 
            } else {
                return [enteredTitle, enteredDescription, +enteredPeople]
            }
        }

        private claearInput() {
            this.titleInputElement.value = ''
            this.descriptionInputElement.value = ''
            this.peopleInputElement.value = ''
        }

        @Autobind
        private submitHandler (event: Event) {
            event.preventDefault();
            // console.log(this.titleInputElement.value);
            const userInput = this.getUserInput();
            if (Array.isArray(userInput)) {
                const [title, desc, people] = userInput;
                // console.log(title, desc, people);
                projectState.addProject(title, desc, people)
                this.claearInput()
            }
        }
    }
}