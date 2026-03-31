// Bài 1: Kiểm tra kết quả Test Khai báo biến actualResult = "Login Success" và expectedResult = "Login Success". 
// Hãy dùng if...else để in ra "PASSED" nếu hai biến bằng nhau, ngược lại in ra "FAILED".
let actualResult = "Login Success";
let expectedResult = "Login Success";
if (actualResult === expectedResult) {
    console.log("PASSED");
} else {
    console.log("FAILED");
}

// Bài 2: Phân loại mức độ lỗi (Bug Severity) Cho một biến bugPriority có giá trị từ 1 đến 3.
// Nếu là 1: In ra "Blocker - Sửa ngay!".
// Nếu là 2: In ra "High - Cần sửa trong sprint".
// Nếu là 3: In ra "Low - Sửa sau". (Gợi ý: Dùng if...else if...else hoặc switch...case).
let bugPriority = 1;
switch (bugPriority) {
    case 1:
        console.log("Blocker - Sửa ngay!");
        break;
    case 2:
        console.log("High - Cần sửa trong sprint");
        break;
    case 3:
        console.log("Low - Sửa sau");
        break;
    default:
        console.log("Giá trị không hợp lệ");
}

// Bài 3: Kiểm tra điều kiện Coupon Một mã giảm giá chỉ áp dụng nếu: totalBill > 500 VÀ isMember === true. Hãy viết code để kiểm tra xem khách hàng có được giảm giá không.

let totalBill = 600;
let isMember = true;
if (totalBill > 500 && isMember) {
    console.log("Khách hàng được giảm giá");
} else {
    console.log("Khách hàng không được giảm giá");
}

// Bài 4: Câu hỏi tình huống: Bạn lấy được số lượng sản phẩm từ Website là chuỗi "5". 
// Bạn muốn kiểm tra xem nó có lớn hơn 0 hay không. Bạn nên dùng cách nào an toàn nhất? 
// (Gợi ý: Ép kiểu về Number trước khi so sánh === hay cứ dùng > 0?)

let productQuantity = "5";
if (Number(productQuantity) > 0) {
    console.log("Số lượng sản phẩm lớn hơn 0");
} else {
    console.log("Số lượng sản phẩm không lớn hơn 0");
}

