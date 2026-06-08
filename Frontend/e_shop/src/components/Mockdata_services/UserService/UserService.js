export let mockUsers = [
  {
    name: { fname: "Terry", lname: "Kennedy" },
    _id: "6a20ce2b5c5c79a86b2b2ec2",
    username: "tkennedy",
    email: "tkennedy@gmail.com",
    password: "Tkennedy1",
    admin: false,
    createdAt: "2026-06-04T01:00:27.383Z",
    updatedAt: "2026-06-05T04:17:03.055Z",
    __v: 0,
  },
  {
    name: { fname: "Sarah", lname: "Johnson" },
    _id: "6a20cde35c5c79a86b2b2ec0",
    username: "Sarah",
    email: "sjohnson@gmail.com",
    password: "Sjohnson1",
    admin: false,
    createdAt: "2026-06-04T00:59:15.252Z",
    updatedAt: "2026-06-06T22:06:08.290Z",
    __v: 0,
  },
  {
    name: { fname: "Joe", lname: "Smith" },
    _id: "6a20cda85c5c79a86b2b2ebe",
    username: "jsmith",
    email: "jsmith@yahoo.com",
    password: "Jsmith1",
    admin: false,
    createdAt: "2026-06-04T00:58:16.866Z",
    updatedAt: "2026-06-04T01:06:24.927Z",
    __v: 0,
  },
  {
    name: { fname: "userdemo1", lname: "username1" },
    _id: "69054bde8805700013d47e11",
    username: "fzaigirdar",
    email: "fzaigirdar@yahoo.com",
    password: "password123",
    admin: true,
    createdAt: "2025-10-31T23:53:02.946Z",
    updatedAt: "2026-05-30T02:14:20.716Z",
    __v: 0,
  },
];

function createMockError(message) {
  return {
    response: {
      data: {
        message,
      },
    },
  };
}

export async function mockGetUsers() {
  return mockUsers.map(({ password, ...user }) => user);
}

export async function mockDeleteUser(id) {
  const user = mockUsers.find((user) => user._id === id);

  if (!user) {
    throw createMockError("User not found");
  }

  mockUsers = mockUsers.filter((user) => user._id !== id);

  return {
    message: "User deleted successfully",
  };
}

export async function mockChangeStatus(data) {
  const user = mockUsers.find((user) => user._id === data.id);

  if (!user) {
    throw createMockError("User not found");
  }

  user.admin = data.status === "admin";

  return {
    message: "Status updated successfully",
  };
}

export async function mockAdminChangePassword(data) {
  const user = mockUsers.find((user) => user._id === data.id);

  if (!user) {
    throw createMockError("User not found");
  }

  user.password = data.password;

  return {
    message: "Password updated successfully",
  };
}

export async function mockLogin(data) {
  const user = mockUsers.find(
    (user) => user.email === data.email && user.password === data.password
  );

  if (!user) {
    throw createMockError("Invalid email or password");
  }

  return {
    message: "success",
    user_id: user._id,
    email: user.email,
    token: "mock-token",
  };
}

export async function mockCreateUser(data) {
  const { username, fname, lname, email, password } = data;

  const existingUser = mockUsers.find(
    (user) => user.username === username || user.email === email
  );

  if (existingUser) {
    throw createMockError("Username or email already exists");
  }

  const newUser = {
    _id: Date.now().toString(16) + Math.random().toString(16).slice(2, 8),
    name: { fname, lname },
    username,
    email,
    password,
    admin: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    __v: 0,
  };

  mockUsers.push(newUser);

  const { password: _, ...userWithoutPassword } = newUser;
  return { message: "success", user: userWithoutPassword };
}

export async function mockForgetPassword(_data) {
  throw createMockError("resetting password is not available in frontend demo only");
}
  