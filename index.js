var body = document.querySelector('body');
var galleryList = document.querySelector('.gallery__list');
var lightbox = document.querySelector('.lightbox');
var lightboxLayout = document.querySelector('.lightbox__layout');
var lightboxClose = document.querySelector('.lightbox__close');

var images = [
  {
    src: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 1'
  },
  {
    src: 'https://images.pexels.com/photos/259987/pexels-photo-259987.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 2'
  },
  {
    src: 'https://images.pexels.com/photos/396234/pexels-photo-396234.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 3'
  },
  {
    src: 'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 4'
  },
  {
    src: 'https://images.pexels.com/photos/97516/pexels-photo-97516.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 5'
  },
  {
    src: 'https://images.pexels.com/photos/327502/pexels-photo-327502.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 6'
  }
];

var createImg = function(obj) {
  var img = document.createElement('img');
  img.src = obj.src;
  img.alt = obj.alt;

  return img;
}

var turnLightbox = function(str) {
  if (str === 'on') {
    body.classList.add('lightbox-is-active');
  } else {
    body.classList.remove('lightbox-is-active');
  }
}

var createGalleryItem = function(obj) {
  var li = document.createElement('li');
  li.classList.add('gallery__item');

  var img = createImg(obj);
  img.classList.add('gallery__img');
  li.appendChild(img);

  return li;
}

var lightboxImg = createImg(images[0]);
lightboxImg.classList.add('lightbox__img');
lightboxLayout.appendChild(lightboxImg);

var armImg = function(node) {
  node.addEventListener('click', function(e) {
    var elem = e.target;
    var src = elem.src;
    lightboxImg.src = src;

    turnLightbox('on');
  });
}

var galleryItems = images.map(function(obj) {
  return createGalleryItem(obj);
});

galleryItems.forEach(function(node) {
  galleryList.appendChild(node);
  armImg(node);
});

var closeDivs = [lightboxClose,lightboxLayout];

closeDivs.forEach(function(node) {
  node.addEventListener('click', function(e) {
    e.preventDefault();
  
    if(e.target === node) {
      turnLightbox('off');
    }
  });
});

window.addEventListener('keyup', function(e) {
  e.preventDefault();

  if(e.code === 'Escape') {
    turnLightbox('off');
  }
});
