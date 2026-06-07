import { mockUsers } from "../UserService/UserService/UserService.js";

let mockReviews = [
    {
        "_id": "6a249a3c313d58016b199cd5",
        "Review": "The pastries at Bakery were absolutely fantastic. I tried the almond croissant and a fruit Danish, and both were fresh, flaky, and full of flavor. The croissant had the perfect buttery layers, while the Danish was topped with fresh fruit and just the right amount of sweetness.\n\nWhat really stood out was the friendly and attentive service. The staff were welcoming, helped me choose from the pastry selection, and made the whole experience enjoyable. Even during a busy morning rush, my order was handled quickly and accurately.\n\nI highly recommend this bakery to anyone who loves quality pastries and excellent customer service. It's become one of my favorite spots for a morning treat.",
        "Rating": 5,
        "username": "Sarah",
        "name": {
            "fname": "Sarah",
            "lname": "Johnson"
        }
    },
    {
        "_id": "6a2498fb313d58016b199ca2",
        "Review": "I recently visited Sweet Crumbs Bake Shop and had one of the best cheesecakes I've ever tasted. The cheesecake was incredibly creamy, rich, and perfectly balanced—not overly sweet, with a smooth texture that practically melted in my mouth.\n\nThe service was just as impressive as the desserts. The staff greeted me with a smile, patiently answered my questions, and made me feel welcome from the moment I walked in. My order was prepared quickly, and the team went above and beyond to ensure I had a great experience.\n\nIf you're looking for delicious cheesecake and outstanding customer service, Sweet Crumbs Bake Shop is definitely worth a visit. I'll be coming back soon to try more of their baked treats!",
        "Rating": 4,
        "username": "tkennedy",
        "name": {
            "fname": "Terry",
            "lname": "Kennedy"
        }
    },
    {
        "_id": "6a20d01d5c5c79a86b2b2f37",
        "Review": "I stopped by this bakeshop on a whim and was pleasantly surprised. The pastries were fresh, flavorful, and not overly sweet. I tried a chocolate croissant and a blueberry muffin, and both were delicious with a perfect texture. The staff was friendly and patient while I decided what to order, and the shop itself had a cozy, welcoming atmosphere. Prices were reasonable for the quality of the baked goods. I'll definitely be coming back to try more items from their menu. Highly recommended for anyone looking for a tasty treat and great service.",
        "Rating": 4,
        "username": "jsmith",
        "name": {
            "fname": "Joe",
            "lname": "Smith"
        }
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

export async function mockGetReviews() {
    return [...mockReviews];
}

export async function mockSubmitReview(data) {
    const { user_id, review, rating } = data;

    if (!user_id || !review || !rating) {
        throw createMockError("review or rating or id missing");
    }

    const user = mockUsers.find(u => u._id === user_id);
    if (!user) {
        throw createMockError("User not found");
    }

    const newReview = {
        _id: Date.now().toString(16) + Math.random().toString(16).slice(2, 8),
        Review: review,
        Rating: rating,
        username: user.username,
        name: { ...user.name }
    };

    mockReviews.unshift(newReview);
    return "New review has been added";
}

export async function mockDeleteReview(id) {
    if (!id) {
        throw createMockError("id not found");
    }

    const index = mockReviews.findIndex(rev => rev._id === id);
    if (index === -1) {
        throw createMockError("review not found");
    }

    mockReviews.splice(index, 1);
    return "Review deleted";
}

export async function mockGetReviewStats() {
    const total = mockReviews.length;

    const countMap = {};
    mockReviews.forEach(rev => {
        const star = rev.Rating;
        countMap[star] = (countMap[star] || 0) + 1;
    });

    const starWords = ['one', 'two', 'three', 'four', 'five'];
    const result = {};
    for (let i = 0; i < 5; i++) {
        const starNumber = i + 1;
        const count = countMap[starNumber] || 0;
        const percentage = total > 0 ? Math.round((count / total) * 100) : 0;
        result[starWords[i]] = percentage;
    }

    return result;
}