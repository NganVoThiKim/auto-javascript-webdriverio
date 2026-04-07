// Bài 1: Hàm kiểm tra độ dài mật khẩu Viết một hàm isPasswordValid(password) nhận vào một chuỗi.
// Nếu độ dài chuỗi >= 8: trả về true.
// Ngược lại: trả về false.
function isPasswordValid(password) {
    return password.length >= 8 ? true : false;
}
//let password = "mySecret";
let password = "short";
if (isPasswordValid(password)) {
    console.log("Mật khẩu hợp lệ");
} else {
    console.log("Mật khẩu không hợp lệ");
}

// Bài 2: Hàm định dạng tiền tệ Viết một hàm formatPrice(amount) nhận vào một số (ví dụ: 500000) và trả về chuỗi có thêm ký tự $ đằng sau (ví dụ: "500000$").
function formatPrice(amount) {
    return amount + "$";
}
console.log(`Giá sản phẩm: ${formatPrice(500000)}`); // 500000$

// Bài 3: Hàm lọc danh sách Bug (Kết hợp Loop + Array + Function) Cho một mảng các đối tượng bug:
const myBugs = [
    { id: 1, severity: "High" },
    { id: 2, severity: "Low" },
    { id: 3, severity: "High" }
];
// Viết hàm getHighSeverityBugs(list) để trả về một mảng mới chỉ chứa các bug có severity là "High".
function getHighSeverityBugs(bugList) {
    const highSeverityBugs = [];
    for (const bug of bugList) {
        if (bug.severity === "High") {
            highSeverityBugs.push(bug);
        }
    }
    return highSeverityBugs;
}
console.log("Các bug có độ nghiêm trọng cao: ", getHighSeverityBugs(myBugs));
