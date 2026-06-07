let mockProducts = [
    {
        "description": "None",
        "_id": "68d9e05ae741561a8b64d1d8",
        "name": "Chocolate Cake",
        "type": "cake",
        "price": 14.99,
        "quantity": 5,
        "img_link": "https://i2.wp.com/www.livewellbakeoften.com/wp-content/uploads/2018/05/Chocolate-Layer-Cake-3.jpg?resize=1360%2C2040&ssl=1",
        "createdAt": "2025-09-29T01:26:50.031Z",
        "updatedAt": "2026-06-01T02:35:56.823Z",
        "__v": 0
    },
    {
        "description": "None",
        "_id": "68d9e09ee741561a8b64d1db",
        "name": "Strawberry Cake",
        "type": "cake",
        "price": 14.99,
        "quantity": 10,
        "img_link": "https://thetinyfairy.com/wp-content/uploads/2021/03/img_3202-scaled.jpg",
        "createdAt": "2025-09-29T01:27:58.547Z",
        "updatedAt": "2025-09-29T01:27:58.547Z",
        "__v": 0
    },
    {
        "description": "None",
        "_id": "68d9e0dce741561a8b64d1e3",
        "name": "Cheese Cake",
        "type": "cake",
        "price": 15.99,
        "quantity": 10,
        "img_link": "https://rakaminstudent.com/wp-content/uploads/2023/03/strawberry-cheesecake-11-1-1024x1024.jpg",
        "createdAt": "2025-09-29T01:29:00.063Z",
        "updatedAt": "2025-09-29T01:29:00.063Z",
        "__v": 0
    },
    {
        "description": "None",
        "_id": "68d9e146e741561a8b64d1e7",
        "name": "Coffee",
        "type": "drinks",
        "price": 3.99,
        "quantity": 10,
        "img_link": "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
        "createdAt": "2025-09-29T01:30:46.836Z",
        "updatedAt": "2025-09-29T01:30:46.836Z",
        "__v": 0
    },
    {
        "_id": "68d9e8d2d860d694ad436766",
        "name": "Classic Club Sandwich",
        "type": "sandwiches",
        "description": "None",
        "price": 8.99,
        "quantity": 10,
        "img_link": "https://icookedameal.com/wp-content/uploads/2023/07/classic-american-bacon-lettuce-tomatoe-sandwich-blt.jpg",
        "createdAt": "2025-09-29T02:02:58.140Z",
        "updatedAt": "2025-09-29T02:03:19.759Z",
        "__v": 0
    },
    {
        "_id": "68d9e919d860d694ad43676c",
        "name": "Roast Beef Sandwich",
        "type": "sandwiches",
        "description": "None",
        "price": 7.99,
        "quantity": 10,
        "img_link": "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/low-calorie-roast-beef-cheddar-sandwiches-horseradish-mayo.jpg?quality=82&strip=1",
        "createdAt": "2025-09-29T02:04:09.837Z",
        "updatedAt": "2025-09-29T02:04:09.837Z",
        "__v": 0
    },
    {
        "_id": "68d9e93fd860d694ad43676f",
        "name": "Gatorade",
        "type": "drinks",
        "description": "None",
        "price": 2.49,
        "quantity": 10,
        "img_link": "https://i5.walmartimages.com/asr/587c97bd-a12e-4fe4-abdf-0987a3d02a28_1.7b2c7c4c0b2e171f1da968d222ed7c93.jpeg",
        "createdAt": "2025-09-29T02:04:47.183Z",
        "updatedAt": "2025-09-29T02:04:47.183Z",
        "__v": 0
    },
    {
        "_id": "6a1e19376ca2ffd7eac816ab",
        "name": "puff pastry",
        "type": "pastries",
        "description": "None",
        "price": 10.99,
        "quantity": 10,
        "img_link": "https://pastrieslikeapro.com/wp-content/uploads/2024/10/finihed-pic-1200.jpg",
        "createdAt": "2026-06-01T23:43:51.111Z",
        "updatedAt": "2026-06-01T23:43:51.111Z",
        "__v": 0
    },
    {
        "_id": "6a20e82543ebf537af370fde",
        "name": "Vanilla Bean Delight",
        "type": "cake",
        "description": "None",
        "price": 16,
        "quantity": 10,
        "img_link": "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
        "createdAt": "2026-06-04T02:51:17.998Z",
        "updatedAt": "2026-06-04T02:51:17.998Z",
        "__v": 0
    },
    {
        "_id": "6a20e8f243ebf537af370fed",
        "name": "Black Forest Gateau",
        "type": "cake",
        "description": "None",
        "price": 18,
        "quantity": 10,
        "img_link": "https://thescranline.com/wp-content/uploads/2023/06/BLACK-FOREST-CAKE-WEB-07.jpg",
        "createdAt": "2026-06-04T02:54:42.085Z",
        "updatedAt": "2026-06-05T00:31:06.210Z",
        "__v": 0
    },
    {
        "_id": "6a22178551b5ef837dcd024e",
        "name": "Matcha Cake",
        "type": "cake",
        "description": "None",
        "price": 20,
        "quantity": 3,
        "img_link": "https://www.dessertfortwo.com/wp-content/uploads/2022/10/Matcha-Cake-19.jpg",
        "createdAt": "2026-06-05T00:25:41.255Z",
        "updatedAt": "2026-06-05T00:25:41.255Z",
        "__v": 0
    },
    {
        "_id": "6a2217d651b5ef837dcd0254",
        "name": "Carrot Walnut Cake",
        "type": "cake",
        "description": "None",
        "price": 17.98,
        "quantity": 3,
        "img_link": "https://freshaprilflours.com/wp-content/uploads/2021/03/carrot-cake-6.jpg",
        "createdAt": "2026-06-05T00:27:02.801Z",
        "updatedAt": "2026-06-05T00:27:02.801Z",
        "__v": 0
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

export async function mockGetProducts() {
    return [...mockProducts];
}

export async function mockAddProduct(data) {
    const { name, type, price, quantity, img_link } = data;

    const existing = mockProducts.find(product => product.name === name);
    if (existing) {
        throw createMockError("product already exist");
    }

    const newProduct = {
        description: "None",
        _id: Date.now().toString(16) + Math.random().toString(16).slice(2, 8),
        name,
        type,
        price,
        quantity,
        img_link,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        __v: 0
    };

    mockProducts.push(newProduct);
    return newProduct;
}

export async function mockEditProduct(data) {
    const { _id, name, type, price, quantity, img_link } = data;

    const index = mockProducts.findIndex(product => product._id === _id);
    if (index === -1) {
        throw createMockError("product not found");
    }

    mockProducts[index] = {
        ...mockProducts[index],
        name: name ?? mockProducts[index].name,
        type: type ?? mockProducts[index].type,
        price: price ?? mockProducts[index].price,
        quantity: quantity ?? mockProducts[index].quantity,
        img_link: img_link ?? mockProducts[index].img_link,
        updatedAt: new Date().toISOString()
    };

    return { ...mockProducts[index] };
}

export async function mockDeleteProduct(name) {
    const index = mockProducts.findIndex(product => product.name === name);
    if (index === -1) {
        throw createMockError("the product doesnt exist");
    }

    const deleted = mockProducts[index];
    mockProducts = mockProducts.filter(product => product.name !== name);
    return deleted;
}

export async function mockGetTypeCount() {
    const countMap = {};

    for (const product of mockProducts) {
        if (countMap[product.type]) {
            countMap[product.type]++;
        } else {
            countMap[product.type] = 1;
        }
    }

    return Object.entries(countMap).map(([type, count]) => ({
        _id: type,
        totalCount: count
    }));
}