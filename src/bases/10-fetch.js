
// Fetch GIPHY API

const apiKey = 'pHp3uRjZmGLKx39GlQXwiNkwPrJFnlk9';

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
  .then(res => res.json())
  .then(({ data }) => {
    const { url } = data.images.original
    console.log(url);
    
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img)
  })
  .catch(console.warn)