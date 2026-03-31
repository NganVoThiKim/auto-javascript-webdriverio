// Bài 1: Hệ thống Phân loại Bug & Tự động Gán (Auto-Assignment)
// Yêu cầu: Viết một chương trình nhận vào 3 thông số của một Bug: severity (Critical, High, Medium, Low), isReproducible (true/false), và affectedModule (UI, API, Database). Logic khó:
// Nếu Bug là Critical VÀ isReproducible là true: In ra "Priority: P0 - Assign to Tech Lead".
// Nếu Bug là Critical nhưng KHÔNG isReproducible: Hạ xuống "Priority: P1 - Assign to Senior QA".
// Nếu Bug ở module Database: Bất kể severity nào (trừ Critical), đều in ra "Assign to DBA Team".
// Các trường hợp còn lại: In ra "Priority: P2 - Assign to Developer".
// Điều kiện bắt buộc: Sử dụng Switch Case kết hợp If/Else. Không được viết quá 3 tầng If lồng nhau.
let severity = "High";
let isReproducible = false;
let affectedModule = "Database";

switch (severity) {
    case "Critical":
        if (isReproducible) {
            console.log("Priority: P0 - Assign to Tech Lead");
        } else {
            console.log("Priority: P1 - Assign to Senior QA");
        }
        break;
    case "High":
    case "Medium":
    case "Low":
        if (affectedModule === "Database") {
            console.log("Assign to DBA Team");
        } else {
            console.log("Priority: P2 - Assign to Developer");
        }
        break;
    default:
        console.log("Invalid severity level");
}

// Bài 2: Trình kiểm tra Độ mạnh Mật khẩu (Password Validator)
// Yêu cầu: Viết một hàm validatePassword(password) kiểm tra các điều kiện sau:
// Độ dài phải từ 8 đến 20 ký tự.
// Phải chứa ít nhất một ký tự viết hoa.
// Phải chứa ít nhất một con số.
// Cực khó: Không được chứa khoảng trắng. 
// Output: Trả về một chuỗi thông báo cụ thể lỗi đầu tiên nó gặp phải (Ví dụ: "Thiếu chữ hoa", "Quá ngắn"...). Nếu thỏa mãn hết thì trả về "Password Secure".
// Gợi ý: Học viên cần kết hợp toán tử logic &&, || và các hàm xử lý chuỗi cơ bản.


function validatePassword(password) {
    if (password.length < 8) {
        return "Quá ngắn";
    } else if (password.length > 20) {
        return "Quá dài";
    } else if (!/[A-Z]/.test(password)) {
        return "Thiếu chữ hoa";
    } else if (!/\d/.test(password)) {
        return "Thiếu con số";
    } else if (/\s/.test(password)) {
        return "Không được chứa khoảng trắng";
    } else {
        return "Password Secure";
    }
}

// Test hàm validatePassword
console.log(validatePassword("Passw0rd")); // Password Secure
console.log(validatePassword("password")); // Thiếu chữ hoa
console.log(validatePassword("PASSWORD")); // Thiếu con số
console.log(validatePassword("Pass w0rd")); // Không được chứa khoảng trắng
console.log(validatePassword("Short1")); // Quá ngắn
console.log(validatePassword("ThisIsAVeryLongPassword123")); // Quá dài   

// Cách khác dùng Switch Case kết hợp If/Else
function validatePasswordSwitchcase(password) {
    switch (true) {
        case password.length < 8:
            return "Quá ngắn";
        case password.length > 20:
            return "Quá dài";
        case !/[A-Z]/.test(password):
            return "Thiếu chữ hoa";
        case !/\d/.test(password):
            return "Thiếu con số";
        case /\s/.test(password):
            return "Không được chứa khoảng trắng";
        default:
            return "Password Secure";
    }
}

// Test hàm validatePasswordSwitchcase
console.log(validatePasswordSwitchcase("Passw0rd")); // Password Secure
console.log(validatePasswordSwitchcase("password")); // Thiếu chữ hoa
console.log(validatePasswordSwitchcase("PASSWORD")); // Thiếu con số
console.log(validatePasswordSwitchcase("Pass w0rd")); // Không được chứa khoảng trắng
console.log(validatePasswordSwitchcase("Short1")); // Quá ngắn
console.log(validatePasswordSwitchcase("ThisIsAVeryLongPassword123")); // Quá dài     

// Bài 3: Tính toán Phí vận chuyển Đa quốc gia (Shipping Logic)
// Yêu cầu: Tính phí ship dựa trên weight (kg), distance (km), và membership (Gold, Silver, Guest). Logic:
// Phí cơ bản: 5$.
// Nếu weight > 10kg: +10$. Nếu weight > 50kg: +50$.
// Nếu distance > 500km: Phí tổng tăng thêm 20%.
// Ưu đãi thành viên: * Gold: Giảm 50% tổng phí.
// Silver: Giảm 20% tổng phí.
// Guest: Không giảm.
// Bài toán khó: Nếu tổng phí sau khi tính toán > 100$, hãy áp dụng thêm mã giảm giá cố định 10$ (sau khi đã tính giảm giá thành viên).

function calculateShippingFee(weight, distance, membership) {
    let baseFee = 5;
    let totalFee = baseFee;
    if (weight > 50) {
        totalFee += 50;
    } else if (weight > 10) {
        totalFee += 10;
    }
    if (distance > 500) {
        totalFee *= 1.2;
    }
    switch (membership) {
        case "Gold":
            totalFee *= 0.5;
            break;
        case "Silver":
            totalFee *= 0.8;
            break;
        case "Guest":
            break;
        default:
            console.log("Invalid membership type");
            return;
    }
    if (totalFee > 100) {
        totalFee -= 10;
    }
    return totalFee;
}

// Test hàm calculateShippingFee
console.log(calculateShippingFee(5, 300, "Gold")); // Expected: 2.5
console.log(calculateShippingFee(15, 600, "Silver")); // Expected: 14.4
console.log(calculateShippingFee(55, 700, "Guest")); // Expected: 66
console.log(calculateShippingFee(20, 1000, "Gold")); // Expected: 9
console.log(calculateShippingFee(60, 200, "Silver")); // Expected: 44

// Bài 4: Hệ thống Điều phối Test Execution (Smart Runner)
// Yêu cầu: Giả lập một hệ thống quyết định xem có chạy Test hay không. Đầu vào: isServerUp (boolean), isDatabaseConnected (boolean), lastTestStatus (Passed/Failed), isWeekend (boolean). Quy tắc:
// Chỉ chạy Test nếu isServerUp và isDatabaseConnected đều là true.
// Nếu là isWeekend:
// Chỉ chạy các test có lastTestStatus là "Failed" (để sửa lỗi).
// Nếu lastTestStatus là "Passed", in ra "Chỉ chạy vào ngày thường".
// Nếu không phải cuối tuần: Chạy tất cả.
// Thử thách Clean Code: Viết logic sao cho không sử dụng quá 2 từ khóa else. (Sử dụng kỹ thuật Return Early hoặc Guard Clauses).
function shouldRunTest(isServerUp, isDatabaseConnected, lastTestStatus, isWeekend) {
    if (!isServerUp || !isDatabaseConnected) {
        return "Không chạy Test - Server hoặc Database không sẵn sàng";
    }
    if (isWeekend) {
        if (lastTestStatus === "Failed") {
            return "Chạy Test - Sửa lỗi vào cuối tuần";
        } else {
            return "Chỉ chạy vào ngày thường";
        }
    }
    return "Chạy tất cả Test - Ngày thường";
}

// Test hàm shouldRunTest
console.log(shouldRunTest(true, true, "Failed", true)); // Chạy Test - Sửa lỗi vào cuối tuần
console.log(shouldRunTest(true, true, "Passed", true)); // Chỉ chạy vào ngày thường
console.log(shouldRunTest(true, true, "Failed", false)); // Chạy tất cả Test - Ngày thường
console.log(shouldRunTest(false, true, "Failed", false)); // Không chạy Test - Server hoặc Database không sẵn sàng
console.log(shouldRunTest(true, false, "Passed", false)); // Không chạy Test - Server hoặc Database không sẵn sàng


// Bài 5: Xây dựng Bộ lọc Tìm kiếm nâng cao (The Ultimate Filter)
// Yêu cầu: Cho một đối tượng sản phẩm const product = { name: "iPhone", price: 1200, color: "Black", inStock: true }; 
// và một đối tượng bộ lọc từ người dùng const filter = { maxPrice: 1500, preferredColor: "Black", requireStock: true };. 
// Logic: Viết một chương trình kiểm tra xem product có thỏa mãn tất cả các điều kiện trong filter hay không.
// Nếu thỏa mãn: In ra "Product Matches!".
// Nếu không thỏa mãn: Phải in ra tất cả những lý do khiến nó không khớp (Ví dụ: "Giá quá cao", "Sai màu"...).
// Đặc biệt: Nếu filter.maxPrice không có giá trị (undefined), hãy bỏ qua việc kiểm tra giá.

const product = { name: "iPhone", price: 1200, color: "Black", inStock: true };
const filter = { maxPrice: 1500, preferredColor: "Black", requireStock: true };

function doesProductMatch(product, filter) {
    let reasons = [];
    if (filter.maxPrice !== undefined && product.price > filter.maxPrice) {
        reasons.push("Giá quá cao");
    }
    if (filter.preferredColor !== undefined && product.color !== filter.preferredColor) {
        reasons.push("Sai màu");
    }
    if (filter.requireStock !== undefined && !product.inStock) {
        reasons.push("Hết hàng");
    }
    if (reasons.length === 0) {
        return "Product Matches!";
    } else {
        return `Product does not match: ${reasons.join(", ")}`;
    }
}

// Test hàm doesProductMatch
console.log(doesProductMatch(product, filter)); // Product Matches!
console.log(doesProductMatch({ price: 1000, color: "Black", inStock: false }, filter)); // Product does not match: Hết hàng
console.log(doesProductMatch({ price: 1500, color: "White", inStock: true }, filter)); // Product does not match: Sai màu
console.log(doesProductMatch({ price: 1501, color: "Black", inStock: true }, filter)); // Product does not match: Giá quá cao
console.log(doesProductMatch({ price: 1501, color: "White", inStock: true }, filter)); // Product does not match: Giá quá cao, Sai màu
console.log(doesProductMatch({ price: 1501, color: "Black", inStock: false }, filter)); // Product does not match: Giá quá cao, Hết hàng
console.log(doesProductMatch({ price: 1600, color: "Black", inStock: false }, { preferredColor: "Black", requireStock: true })); // Product does not match: Hết hàng (ignoring maxPrice check)