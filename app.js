// call backs function 

const posts = [{ title: 'post one', body: 'this is post one' }, { title: 'post two', body: 'this is post two' },];

// may function na push para ma push yung isang object
function createPost(post, callback){
    setTimeout(function(){
        posts .push(post);
        callback();
    }, 2000);
}
// para sa get post 
function getPost(){
    setTimeout(function(){
let output = '';
posts.forEach(function(post){
    output += `<li>${post.title}</li>`;
});
document.body.innerHTML = output;
    }, 1000)
}

createPost({ title: 'post three', body: 'this is post three' }, getPost);

