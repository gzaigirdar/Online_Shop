import { mockUsers } from "../UserService/UserService.js";

let mockOrders = [
    {
        "_id": "68e9a2004629db9aae553329",
        "fname": "John",
        "lname": "Cena",
        "orderStatus": "Pending",
        "total": 100,
        "address": {
            "zipcode": "06666",
            "city": "Fairfield",
            "street": "ct ave",
            "state": "ct",
            "phone_number": "203333333"
        },
        "date": "2025-10-11T00:17:04.043Z",
        "items": [
            {
                "productName": "Classic Club Sandwich",
                "price": 8.99,
                "type": "sandwiches",
                "quantity": 2
            },
            {
                "productName": "Roast Beef Sandwich",
                "price": 7.99,
                "type": "sandwiches",
                "quantity": 2
            }
        ]
    },
    {
        "_id": "69f291481b679a0635a3d56c",
        "fname": "Omar",
        "lname": "Alvarez",
        "orderStatus": "Pending",
        "total": 45,
        "address": {
            "zipcode": "06666",
            "city": "Fairfield",
            "street": "ct ave",
            "state": "ct",
            "phone_number": "203333333"
        },
        "date": "2026-04-29T23:16:24.038Z",
        "items": [
            {
                "productName": "Classic Club Sandwich",
                "price": 8.99,
                "type": "sandwiches",
                "quantity": 2
            },
            {
                "productName": "Roast Beef Sandwich",
                "price": 7.99,
                "type": "sandwiches",
                "quantity": 2
            }
        ]
    },
    {
        "_id": "6a224b27e26e3c81e39318d8",
        "fname": "Joe",
        "lname": "Smith",
        "orderStatus": "Pending",
        "total": 70.96,
        "address": {
            "zipcode": "8806",
            "city": "Fairfield",
            "street": "36 grace st",
            "state": "ct",
            "phone_number": "2031111111"
        },
        "date": "2026-06-05T04:05:59.250Z",
        "items": [
            {
                "productName": "Cheese Cake",
                "price": 15.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Strawberry Cake",
                "price": 14.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Chocolate Cake",
                "price": 14.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Vanilla Bean Delight",
                "price": 16,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Roast Beef Sandwich",
                "price": 7.99,
                "type": "sandwiches",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6a224bf2e26e3c81e39318dc",
        "fname": "Joe",
        "lname": "Smith",
        "orderStatus": "Pending",
        "total": 70.96,
        "address": {
            "zipcode": "8806",
            "city": "Fairfield",
            "street": "36 grace st",
            "state": "ct",
            "phone_number": "2031111111"
        },
        "date": "2026-06-05T04:09:22.447Z",
        "items": [
            {
                "productName": "Cheese Cake",
                "price": 15.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Strawberry Cake",
                "price": 14.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Chocolate Cake",
                "price": 14.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Vanilla Bean Delight",
                "price": 16,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Roast Beef Sandwich",
                "price": 7.99,
                "type": "sandwiches",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6a236a360a46d9b980f4dd56",
        "fname": "Joe",
        "lname": "Smith",
        "orderStatus": "Pending",
        "total": 33.99,
        "address": {
            "zipcode": "06825",
            "city": "Fairfield",
            "street": "36 grace street",
            "state": "CT",
            "phone_number": "2031111111"
        },
        "date": "2026-06-06T00:30:46.059Z",
        "items": [
            {
                "productName": "Strawberry Cake",
                "price": 14.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Black Forest Gateau",
                "price": 18,
                "type": "cake",
                "quantity": 1
            }
        ]
    },
    {
        "_id": "6a236acc0a46d9b980f4dd85",
        "fname": "Joe",
        "lname": "Smith",
        "orderStatus": "Pending",
        "total": 34.47,
        "address": {
            "zipcode": "06825",
            "city": "Fairfield",
            "street": "36 grace street",
            "state": "CT",
            "phone_number": "2031111111"
        },
        "date": "2026-06-06T00:33:16.889Z",
        "items": [
            {
                "productName": "Strawberry Cake",
                "price": 14.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Cheese Cake",
                "price": 15.99,
                "type": "cake",
                "quantity": 1
            },
            {
                "productName": "Gatorade",
                "price": 2.49,
                "type": "drinks",
                "quantity": 1
            }
        ]
    }
];

function createMockError(message) {
    return {
        response: {
            data: {
                message
            }
        }
    };
}

export async function mockGetAllOrders() {
    return [...mockOrders];
}

export async function mockCreateOrder(data) {
    const { user_id, address, items, total } = data;

    const user = mockUsers.find(u => u._id === user_id);
    const fname = user?.name?.fname || "N/A";
    const lname = user?.name?.lname || "N/A";

    const newOrder = {
        _id: Date.now().toString(16) + Math.random().toString(16).slice(2, 8),
        fname,
        lname,
        orderStatus: "Pending",
        total,
        address,
        date: new Date().toISOString(),
        items: items.map(item => ({
            productName: item.productName || item.name || "N/A",
            price: item.price || 0,
            type: item.type || "N/A",
            quantity: item.quantity
        }))
    };

    mockOrders.unshift(newOrder);
    return { confirmation: "Submitted" };
}

export async function mockEditOrderStatus(data) {
    const { order_id, status } = data;

    const allowedStatuses = ["Pending", "Fulfilled", "Canceled"];
    if (!allowedStatuses.includes(status)) {
        throw createMockError("Invalid status value");
    }

    const order = mockOrders.find(order => order._id === order_id);
    if (!order) {
        throw createMockError("Order doesn't exist");
    }

    order.orderStatus = status;
    return { ...order };
}

export async function mockDeleteOrder(order_id) {
    const index = mockOrders.findIndex(order => order._id === order_id);
    if (index === -1) {
        throw createMockError("Order doesn't exist");
    }

    mockOrders.splice(index, 1);
    return { message: "Successfully deleted" };
}

export async function mockFindOrder(order_id) {
    const order = mockOrders.find(order => order._id === order_id);
    if (!order) {
        throw createMockError("Order doesn't exist");
    }
    return { ...order };
}

export async function mockGetOrderStat() {
    const totalOrders = mockOrders.length;

    const itemsSold = mockOrders.reduce((sum, order) => {
        return sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0);
    }, 0);

    const overallTotal = mockOrders.reduce((sum, order) => sum + order.total, 0);

    const totalPerDay = [120, 85, 200, 150, 310, 450, 275];

    const productByType = [
        { _id: "cake", total: 6 },
        { _id: "sandwiches", total: 2 },
        { _id: "drinks", total: 2 },
        { _id: "pastries", total: 1 },
        { _id: "other", total: 0 }
    ];

    return {
        total_per_day: totalPerDay,
        overall_total: overallTotal || 1590,
        total_num_Orders: totalOrders,
        itemsSold: itemsSold,
        total_products: { total: 12 },
        product_by_type: productByType
    };
}