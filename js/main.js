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

/*-------------
FUNCTIONS
--------------*/

function renderPost(elementHTML, postElement){

    const {author, created, content, media, likes, id} = postElement;
    const { name: nameAuthor} = author;
    
    //Autore
    elementHTML.querySelector('.post-meta_autor').innerHTML = postElement.author.name; //concatenazione dot notation post --> proprietà author --> proprietà name
    //Data
    elementHTML.querySelector('.post-meta_time').innerHTML = created;
    //Description
    elementHTML.querySelector('.post_text').innerHTML = content;
    //Image
    elementHTML.querySelector('.post_image').src = media;
    //Likes
    elementHTML.querySelector('.js-likes-counter').id = `like-counter${id}`;
    elementHTML.querySelector('.js-likes-counter').innerHTML = likes;
}


//Realizzare la lista dei post
//1. creo un ciclo che attraversa la lista dei post
//2. per ogni post, creo la struttura del post
//2a 6 - uso createElement per definire ogni porzione del mio template (documento html con troppe classi)
//2b 7 - uso template literal e innerHTML per creare la struttura del template (problematico per foto e testi che protrebbero cambiare)
//2c 9 - clono un template html per crere la struttura del template (controllare classi)
//(2d 10 - framework)

/*-------------
RENDER DEI POST
--------------*/

const containerElement = document.getElementById('container');
const templateElement = document.getElementById('template-post');
//console.log(templateElement);

posts.forEach(element => {
    console.log(element);
    const currentHTMLPost = templateElement.content.cloneNode(true);
    console.log(currentHTMLPost);

    //elaborazione dei dati del post

    currentHTMLPost = renderPost(currentHTMLPost, postElement)

    //containerElement.append(currentPost);
    containerElement.prepend(currentPost);

});