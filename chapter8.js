// Bài 1: Tạo khuôn mẫu Sản phẩm (Product)
// Tạo Class Product với các thuộc tính: name, price, discount.
// Viết phương thức getFinalPrice() để trả về giá sau khi đã giảm giá.
// Tạo 2 sản phẩm: iPhone (1000$, giảm 10%) và Samsung (800$, giảm 5%). In giá cuối cùng của chúng ra màn hình.
class Product {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
    getFinalPrice() {
        return this.price * (1 - this.discount / 100);
    }
}

const iPhone = new Product("iPhone", 1000, 10);
const Samsung = new Product("Samsung", 800, 5);

console.log(`Giá cuối cùng của ${iPhone.name}: ${iPhone.getFinalPrice().toFixed(2)}`);
console.log(`Giá cuối cùng của ${Samsung.name}: ${Samsung.getFinalPrice().toFixed(2)}`);

// Bài 2: Hệ thống quản lý Test Case
// Tạo Class TestCase gồm: id, name, status (mặc định là "Pending").
// Viết phương thức updateStatus(newStatus) để cập nhật trạng thái mới.
// Tạo một mảng chứa 3 Test Case khác nhau và dùng vòng lặp để in thông tin của chúng.

class TestCase {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = "Pending";
    }
    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

const testCases = [
    new TestCase(1, "Login Test"),
    new TestCase(2, "Signup Test"),
    new TestCase(3, "Checkout Test")
];

for (const testCase of testCases) {
    console.log(`Test Case ID: ${testCase.id}, Name: ${testCase.name}, Status: ${testCase.status}`);
}

// Cập nhật trạng thái của Test Case 1 và in lại thông tin
testCases[0].updateStatus("Passed");
console.log(`Updated Test Case ID: ${testCases[0].id}, Name: ${testCases[0].name}, Status: ${testCases[0].status}`);

