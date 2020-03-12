const joloPortfolio = {};

joloPortfolio.blogPosts = [];

joloPortfolio.getPosts = function() {
  $.ajax({
    url: 'https://dev.to/api/articles',
    method: 'GET',
    dataType: 'json',
    data: {
      username: 'joemano'
    }
  }).then((response) => {
    this.blogPosts = response;
    console.log(this.blogPosts);
  });
}

joloPortfolio.init = function() {
  this.getPosts();
}

$(() => {
  joloPortfolio.init();
});