// Bài tập: Xây dựng cấu trúc Page Object Model (POM) đơn giản
// Tạo Class BaseElement:
// Có thuộc tính selector.
// Có phương thức click() (In ra: "Clicking on [selector]").
// Tạo Class Button kế thừa từ BaseElement:
// Có thêm phương thức doubleClick().
// Tạo Class InputField kế thừa từ BaseElement:
// Có thêm phương thức type(text) (In ra: "Typing [text] into [selector]").
// Thực thi: Tạo 1 Button "Submit" và 1 InputField "Username". Thực hiện Click vào Button và gõ "admin" vào InputField.

class BaseElement {
    constructor(selector) {
        this.selector = selector;
    }

    click() {
        console.log(`Clicking on ${this.selector}`);
    }
}

class Button extends BaseElement {
    constructor(selector) {
        super(selector);
    }

    doubleClick() {
        console.log(`Double click on ${this.selector}`);
    }
}

class InputField extends BaseElement {
    constructor(selector, text) {
        super(selector);
        this.text = text;
    }

    typeText() {
        console.log(`Typing ${this.text} into ${this.selector}`);
    }
}

const submitButtonSel = new Button("Submit");
const inputFieldSel = new InputField("Username", "admin");
submitButtonSel.click();
inputFieldSel.typeText();


