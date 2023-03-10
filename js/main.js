'use strict';

//milestone 1 creo gli array per autore e post

/*-------------
SETUP VARIABLES
--------------*/

const authors = [
    {
        name: 'Kalle Anka',
        image: 'https://unsplash.it/300/300/?image=',
        age: 39,
        nPosts: 150
    }
];
const posts = [
    { 
        id: 1,
        author: {
            name: 'Kalle Anka',
            image: 'path',
            age: 39,
            nPosts: 150
        },
        created: '03-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/300/300/?image=',
        likes: 80
    },
    { 
        id: 2,
        author: {
            name: 'Kalle Anka',
            image: 'path',
            age: 39,
            nPosts: 150
        },
        created: '03-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/300/300/?image=',
        likes: 80
    },
    { 
        id: 3,
        author: {
            name: 'Kalle Anka',
            image: 'path',
            age: 39,
            nPosts: 150
        },
        created: '03-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/300/300/?image=',
        likes: 80
    },
    { 
        id: 4,
        author: {
            name: 'Kalle Anka',
            image: 'path',
            age: 39,
            nPosts: 150
        },
        created: '03-10-2023',
        content: 'Lorem ipsum',
        media: 'https://unsplash.it/300/300/?image=',
        likes: 80
    },
];

console.log(posts);