
var index = 1;
var imgs = document.getElementsByClassName('img-slide');
var changeImage = function () {
    document.getElementById('img-show').src = imgs[index].src;
    document.getElementById('img-title').innerText = imgs[index].getAttribute('data-title');
    index++;
    if (index == imgs.length) index = 0;
}
setInterval(changeImage, 1000);
