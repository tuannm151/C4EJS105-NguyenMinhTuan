let userDatabase = [
    {
        username: 'admin',
        password: 'admin',
        email: 'adminemail12345@gmail.com',
        role: 'admin',
        favorite: [0,2],
        created: [0,2],
    },
    {
        username: 'dummyuser',
        password: '12345',
        email: 'dummyemail123@gmail.com',
        role: 'user',
        favorite: [4,3,2,1],
        created: [],
    },
    {
        username: 'dummyuser2',
        password: '125',
        email: 'dummy123@gmail.com',
        favorite: [],
        created: [],
    },
    {
        username: 'dummyuser3',
        password: 'lmao',
        email: 'eeeeeeeeeeeeeeeeeeeeeee',
        role: 'user',
        favorite: [0,2],
        created: [],
    },
]
let activeUser = [{
    username: 'no user logged in',
    password: 'a',
    email: 'a',
    role: 'none',
    favorite: [],
    created: [],
}];