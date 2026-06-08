import { mockUsers } from "../UserService/UserService.js";

let mockInquiries = [
    {
        "_id": "6a24a5017b4ec2927e199963",
        "UserId": {
            "_id": "6a20cde35c5c79a86b2b2ec0",
            "name": {
                "fname": "Sarah",
                "lname": "Johnson"
            },
            "username": "Sarah",
            "email": "sjohnson@gmail.com"
        },
        "message": "Hello, we're planning our wedding reception for September and are interested in a dessert table featuring mini cheesecakes, macarons, and assorted pastries for approximately 120 guests. Could you provide information about your catering packages and consultation process?",
        "PhoneNumber": "2035551212",
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

export async function mockGetInquiries() {
    if (mockInquiries.length === 0) {
        return [];
    }

    return mockInquiries.map(inquiry => {
        if (!inquiry.UserId) {
            return {
                ...inquiry,
                UserId: {
                    name: { fname: 'not found', lname: 'not found' },
                    email: 'not found',
                    username: 'not found'
                }
            };
        }
        return inquiry;
    });
}

export async function mockSubmitInquiry(data) {
    const { id, message, PhoneNumber } = data;

    if (!id || !message || !PhoneNumber) {
        throw createMockError("Message or id or phone number not included");
    }

    const user = mockUsers.find(u => u._id === id);
    const UserId = user
        ? {
              _id: user._id,
              name: { ...user.name },
              username: user.username,
              email: user.email
          }
        : {
              _id: id,
              name: { fname: 'not found', lname: 'not found' },
              email: 'not found',
              username: 'not found'
          };

    const newInquiry = {
        _id: Date.now().toString(16) + Math.random().toString(16).slice(2, 8),
        UserId,
        message,
        PhoneNumber,
        __v: 0
    };

    mockInquiries.unshift(newInquiry);
    return "submitted";
}

export async function mockDeleteInquiry(id) {
    if (!id) {
        throw createMockError("Id not submitted");
    }

    const result = mockInquiries.filter(inquiry => inquiry._id !== id);
    if (result.length === mockInquiries.length) {
        throw createMockError("Inquiry not found");
    }

    mockInquiries = result;
    return "Inquiry deleted";
}