// Exercise 1:
const bugs = ["Bug 1", "Bug 2", "Bug 3", "Bug 4"];
for (const bug of bugs) {
    console.log("Đang xử lý " + bug);
}

// Bài tập 2: Tìm kiếm dữ liệu (Dùng break) Cho mảng 
// const names = ["Luke", "Diện", "Điểm", "Trâm", "Ngân"]; Hãy dùng vòng lặp để tìm tên "Ngân". Khi thấy tên "Ngân", in ra "Đã tìm thấy Ngân!" và dừng vòng lặp ngay lập tức.
const names = ["Luke", "Diện", "Điểm", "Trâm", "Ngân"];
for (let name of names) {
    if (name === "Ngân") {
        console.log("Đã tìm thấy Ngân!");
        break;
    }
}

// Bài tập 3: Data Driven nâng cao (Object + Array + Loop) 
// const users = [
//     { name: "User 1", status: "Active" },
//     { name: "User 2", status: "Inactive" },
//     { name: "User 3", status: "Active" }
// ];
// Hãy dùng vòng lặp for...of để in ra tên của những User có trạng thái là "Active".

const users = [
    { name: "User 1", status: "Active" },
    { name: "User 2", status: "Inactive" },
    { name: "User 3", status: "Active" }
];


