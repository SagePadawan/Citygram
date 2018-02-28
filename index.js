var $body = $('body')[0];
var $galleryList = $('.gallery__list')[0];
var $highlight = $('.highlight')[0];
var $highlightLayout = $('.highlight__layout')[0];
var $highlightClose = $('.highlight__close')[0];

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
  },
  {
    src: 'https://images.pexels.com/photos/374827/pexels-photo-374827.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 7'
  },
  {
    src: 'https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 8'
  },
  {
    src: 'https://images.pexels.com/photos/757432/pexels-photo-757432.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 9'
  },
  {
    src: 'https://images.pexels.com/photos/358243/pexels-photo-358243.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb',
    alt: 'City 10'
  }
];

var createImg = function(obj) {
  var img = document.createElement('img');
  img.src = obj.src;
  img.alt = obj.alt;

  return img;
}

var turnHighlight = function(str) {
  if (str === 'on') {
    $body.classList.add('highlight-active');
  } else {
    $body.classList.remove('highlight-active');
  }
}


//creating the gallery list item in the dom. 
//adding images to each list item.
var createGalleryItem = function(obj) {
  var li = document.createElement('li');
  li.classList.add('gallery__item');

  var img = createImg(obj);
  img.classList.add('gallery__img');
  li.appendChild(img);

  return li;
}

var highlightImg = createImg(images[0]);
highlightImg.classList.add('highlight__img');
$highlightLayout.appendChild(highlightImg);

var armImg = function(node) {
  node.addEventListener('click', function(e) {
    var elem = e.target;
    var src = elem.src;
    highlightImg.src = src;

    turnHighlight('on');
  });
}

var galleryItems = images.map(function(obj) {
  return createGalleryItem(obj);
});

galleryItems.forEach(function(node) {
  $galleryList.appendChild(node);
  armImg(node);
});

var closeDivs = [$highlightClose,$highlightLayout];

closeDivs.forEach(function(node) {
  node.addEventListener('click', function(e) {
    e.preventDefault();
  
    if(e.target === node) {
      turnHighlight('off');
    }
  });
});

window.addEventListener('keyup', function(e) {
  e.preventDefault();

  if(e.code === 'Escape') {
    turnHighlight('off');
  }
});

//Doesn't do anything as of yet
$(function() {
    
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache the DOM
    var $slider = $('.highlight_img' );
    var $slideContainer = $('.highlight_layout');

  setInterval(function() {  
    $slideContainer.animate({'margin-left': '-=90%'}, animationSpeed, function() {
      currentSlide++;
      if (currentSlide === $slides.length); {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
  }, pause);
  //setInterval
    //animate margin-left
    //if it's last slide, go to position 1 (0px);
  //listen for mouseenter and pause
  //resume on mouseleave
});