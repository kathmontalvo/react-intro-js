

// async await

// const getImagePromise = () => new Promise (resolve => resolve('abc'));
// getImagePromise().then(console.log);

const getImage = async () => {
  try {

    const apiKey = 'pHp3uRjZmGLKx39GlQXwiNkwPrJFnlk9';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = await data.images.original;
    console.log(url);
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

  } catch (error) {
    //manejo del error
    console.error(error);
  }

}


getImage();
