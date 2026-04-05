//ORDER MANAGER
const orders = [
    { id: "ORD001", amount: 500, status: "completed", customer: "An" },
    { id: "ORD002", amount: 1200, status: "pending", customer: "Bình" },
    { id: "ORD003", amount: 7000, status: "completed", customer: "Ngân" },
    { id: "ORD004", amount: 50, status: "canceled", customer: "Chi" },
    { id: "ORD005", amount: 3000, status: "completed", customer: "Dũng" },
    { id: "ORD006", amount: 150, status: "pending", customer: "Đạt" },
    { id: "ORD007", amount: 800, status: "completed", customer: "Hương" }
];
// Yêu cầu bài tập (Gồm 4 cấp độ):
// Cấp độ 1 (Duyệt mảng): Sử dụng vòng lặp để in ra tên tất cả các khách hàng đã mua hàng.

// for (let i = 0; i < orders.length; i++) {
//     console.log(`Khách hàng: ${orders[i].customer}`);
// }
console.log("All customers: ");
for (const order of orders) {
    console.log(`Khách hàng: ${order.customer}`);
}

// Cấp độ 2 (Lọc dữ liệu): Chỉ in ra mã đơn hàng (id) của những đơn hàng có trạng thái là "completed".
for (const order of orders) {
    if (order.status === "completed") {
        console.log(`Mã đơn hàng hoàn thành: ${order.id}`);
    }
}

// Cấp độ 3 (Tính toán & Logic): * Hãy tính Tổng số tiền của tất cả các đơn hàng có trạng thái "completed".
// Nếu đơn hàng nào có amount > 1000, hãy in thêm dòng chữ: "Đơn hàng VIP: [Mã ID]".
let totalAmount = 0;
for (const order of orders) {
    if (order.status === "completed") {
        totalAmount += order.amount;
        if (order.amount > 1000) {
            console.log(`Đơn hàng VIP: ${order.id}`);
        }
    }
}
console.log(`Tổng số tiền của các đơn hàng có trạng thái "completed": ${totalAmount}`);

// Cấp độ 4 (Tìm kiếm & Dừng): * Khách hàng tên "Chi" đang khiếu nại. Hãy dùng vòng lặp để tìm đơn hàng của "Chi".
// Khi tìm thấy, hãy in ra toàn bộ thông tin đơn hàng đó và dừng vòng lặp ngay lập tức 
// (không cần kiểm tra các đơn hàng phía sau nữa để tiết kiệm tài nguyên).

for (const order of orders) {
    if (order.customer === "Chi") {
        console.log(`Thông tin đơn hàng của Chi: ${order.id}, ${order.amount}, ${order.status}`);
        break;
    }
}

//CHECK PACKAGE
const deliveryData = [
    {
        packageId: "PKG_001",
        region: "Asia",
        items: [
            { name: "iPhone 15", price: 1000, quantity: 2 },
            { name: "Mouse", price: 50, quantity: 5 }
        ]
    },
    {
        packageId: "PKG_002",
        region: "Europe",
        items: [
            { name: "Macbook", price: 2000, quantity: 1 },
            { name: "Keyboard", price: 150, quantity: 0 } // Lỗi: Số lượng bằng 0
        ]
    },
    {
        packageId: "PKG_003",
        region: "America",
        items: [
            { name: "Screen", price: 500, quantity: 3 }
        ]
    }
];
// Yêu cầu bài tập (4 cấp độ):
// Dễ (Nested Loop): Duyệt qua toàn bộ dữ liệu và in ra tên của tất cả sản phẩm có trong mọi kiện hàng 
// theo định dạng: [Mã Kiện Hàng] - [Tên Sản Phẩm].

console.log("\n\nDanh sách sản phẩm trong các kiện hàng:");
for (const delivery of deliveryData) {
    for (const item of delivery.items) {
        console.log(`${delivery.packageId} - ${item.name}`);
    }
}

// Thường (Data Validation): Trong quá trình duyệt, nếu phát hiện sản phẩm nào có quantity (số lượng) bằng 0, 
// hãy in ra cảnh báo: [⚠️ WARNING] Sản phẩm [Tên Sản Phẩm] trong kiện [Mã ID] bị lỗi số lượng!.
for (const delivery of deliveryData) {
    for (const item of delivery.items) {
        if (item.quantity === 0) {
            console.log(`[⚠️ WARNING] Sản phẩm ${item.name} trong kiện ${delivery.packageId} bị lỗi số lượng!`);
        }
    }
}

// Khó (Complex Calculation): * Tính tổng giá trị của từng kiện hàng (Giá trị kiện hàng = Tổng của các price * quantity bên trong).
// In ra kết quả: Kiện hàng [Mã ID] ở vùng [Region] có tổng giá trị là: [Tổng tiền]$.
for (const delivery of deliveryData) {
    let totalValue = 0;
    for (const item of delivery.items) {
        totalValue += item.price * item.quantity;
    }
    console.log(`Kiện hàng ${delivery.packageId} ở vùng ${delivery.region} có tổng giá trị là: ${totalValue}$`);
}

// Ác Mộng (Logic Tìm kiếm nâng cao): * Tìm xem trong tất cả các kiện hàng, có sản phẩm nào tên là "Macbook" thuộc vùng "Europe" hay không?
// Nếu có, hãy in ra: 🚩 Đã tìm thấy Macbook tại Châu Âu!.
// Yêu cầu tối ưu: Ngay khi tìm thấy Macbook tại Châu Âu, hãy dừng toàn bộ việc kiểm tra 
// (thoát ra khỏi tất cả các vòng lặp) để tiết kiệm thời gian chạy test.

for (const delivery of deliveryData) {
    if (delivery.region === "Europe") {
        for (const item of delivery.items) {
            if (item.name === "Macbook") {
                console.log("🚩 Đã tìm thấy Macbook tại Châu Âu!");
                break;
            }
        }
    }
}


