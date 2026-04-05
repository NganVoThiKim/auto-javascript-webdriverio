// Bài tập thực hành: "Refactoring Code"
// Hãy yêu cầu học viên sửa lại đoạn code "thảm họa" sau đây cho đúng Convention:

// const base_url = "https://google.com"
// let Isvisible = true
// function DANGNHAP(u, p) {
//     let Error_message = "fail";
//     console.log(Error_message)
// }
const baseUrl = "https://google.com"
let isVisible = true
function dangNhap(username, password) {
    let errorMessage = "fail";
    console.log(errorMessage)
}


// Bài 1: Chỉnh lại đoạn code dưới đây cho đúng convention
// const Url_DANG_NHAP = "https://test-site.com/login"
// let Kiemtra_button = true
// var user = "admin_01"

// function Kiem_Tra_Login(U, P) {
//     if (U === "admin") {
//         console.log("Welcome")
//     } else {
//         let ERROR_MSG = "Sai pass rùi"
//         console.log(ERROR_MSG)
//     }
// }

const urlDangNhap = "https://test-site.com/login"
let kiemTraButton = true
var user = "admin_01"

function kiemTraLogin(username, password) {
    if (username === "admin") {
        console.log("Welcome")
    } else {
        let errorMessage = "Sai pass rùi"
        console.log(errorMessage)
    }
}

// Bài 2: Thiết kế "Bộ khung" Dữ liệu (Data Architect)
// Bạn đang xây dựng một dự án Automation cho một trang web bán điện thoại. 
// Yêu cầu: 
// 1. Khai báo một hằng số lưu thời gian chờ mặc định (Timeout) là 5000ms. 
const DEFAULT_TIMEOUT = 5000;

// 2. Tạo một danh sách (Array) chứa 3 đối tượng (Object) sản phẩm. Mỗi đối tượng phải có: id, tên sản phẩm, giá tiền, và trạng thái còn hàng. 
// 3. Lưu ý quan trọng: Tất cả tên biến, tên thuộc tính phải đặt theo chuẩn camelCase, tên hằng số theo UPPER_SNAKE_CASE.
// Tên phải bằng tiếng Anh chuyên ngành (ví dụ: isStocked hoặc inStock thay vì conHang).
const products = [
    { id: 1, name: "iPhone 14", price: 999, inStock: true },
    { id: 2, name: "Samsung Galaxy S22", price: 899, inStock: false },
    { id: 3, name: "Google Pixel 6", price: 799, inStock: true }
];


