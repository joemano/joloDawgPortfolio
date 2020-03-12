const joloPortfolio = {};

const devToApiKey = 'Pdeaq3Sioao7t5CzjKfajjNT';

joloPortfolio.getPosts = () => {
  $.ajax({
    url: 'https://dev.to/api/articles',
    method: 'GET',
    dataType: 'json',
    data: {
      username: 'joemano'
    }
  }).then((response) => {
    console.log(response);
  });
}

joloPortfolio.init = function() {
  this.getPosts();
}

$(() => {
  joloPortfolio.init();
});