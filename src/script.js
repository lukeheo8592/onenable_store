/* Add any JavaScript you need to this file. */
window.onload = function() {
  let data = [
    './image/1.jpg',
    './image/2.jpg',
    './image/3.jpg',
    './image/4.jpg',
    './image/5.jpg',
    './image/6.jpg',
    './image/7.jpg',
    './image/8.jpg'
  ];
  let backgroundPhoto = document.querySelector('#backgroundPhoto');
  let count = 0;
  backgroundPhoto.style.backgroundImage = "url('./image/4.jpg')";
  setInterval(function() {
    backgroundPhoto.style.backgroundImage = `url(${data[count++ % data.length]})`;
  }, 3000);

  let onepiece = document.querySelector('#onepiece');
  let naruto = document.querySelector('#naruto');
  let bleach = document.querySelector('#bleach');
  let allCategories = document.querySelector('#all');

  let onepieceImage = document.querySelector('#img1');
  let narutoImage = document.querySelector('#img2');
  let bleachImage = document.querySelector('#img3');

  let onepieceTag = document.querySelector('#name1');
  let narutoTag = document.querySelector('#name2');
  let bleachTag = document.querySelector('#name3');

  onepiece.onclick = showOnepieceFunction;
  naruto.onclick = showNarutoFunction;
  bleach.onclick = showBleachFunction;
  allCategories.onclick = showAllFunction;
  function showOnepieceFunction() {
    onepieceImage.style.display = 'flex';
    bleachImage.style.display = 'none';
    narutoImage.style.display = 'none';

    onepieceTag.style.display = 'block';
    narutoTag.style.display = 'none';
    bleachTag.style.display = 'none';
  }

  function showNarutoFunction() {
    narutoImage.style.display = 'flex';
    onepieceImage.style.display = 'none';
    bleachImage.style.display = 'none';

    onepieceTag.style.display = 'none';
    narutoTag.style.display = 'block';
    bleachTag.style.display = 'none';
  }

  function showBleachFunction() {
    narutoImage.style.display = 'none';
    onepieceImage.style.display = 'none';
    bleachImage.style.display = 'flex';

    onepieceTag.style.display = 'none';
    narutoTag.style.display = 'none';
    bleachTag.style.display = 'block';
  }

  function showAllFunction() {
    narutoImage.style.display = 'flex';
    onepieceImage.style.display = 'flex';
    bleachImage.style.display = 'flex';

    onepieceTag.style.display = 'block';
    narutoTag.style.display = 'block';
    bleachTag.style.display = 'block';
  }
};
