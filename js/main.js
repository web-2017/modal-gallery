// страница 182 //115
var images = document.querySelectorAll('#img__box #myImg'); //массив всех фото
var modal = document.getElementById('myModal'); //модальное окно
var img = document.getElementById('myImg'); //картинка
var modalImg = document.getElementById('img01'); //картинка в модальном окне
var captionText = document.getElementById('caption'); //описание

//запускаем цыкл прходимся по каждой фото и вешаем клик
for (var i = 0; i < images.length; i++) {
  var image = images[i];

  image.onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName('close')[0];
span.onclick = function () {
  modal.style.display = 'none';
}
