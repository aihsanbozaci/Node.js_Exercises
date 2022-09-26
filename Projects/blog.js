const posts = [
    {name: 'Post 1', author: 'Author 1'},
    {name: 'Post 2', author: 'Author 2'},
    {name: 'Post 3', author: 'Author 3'},
    {name: 'Post 4', author: 'Author 4'}
];


const allPosts = () => {
    posts.map(posts => {
        console.log(posts.name);
    })
} ;


const addPost = (newPost, callback) => {
    console.log("New Post Added:");
    posts.push(newPost);
    callback();
};

allPosts(); 

addPost({name: 'Post 5', author: 'Author 5'}, allPosts);


//For this project to work, a directive must be given with the console. After reaching the directory of the project in the console: 
//console code : node blog

