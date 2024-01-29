let number = 0;
let data = null; 
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = JSON.parse(request.responseText);
      console.log("データを取得しました。");
      changeVideo(); 
    }
  };
  request.open("GET", "ajax.json", true);
  request.send();
}

function changeVideo() {
  if (!data) {
    getData();
    return;
  }

  const currentVideo = data[number];
  titleArea.innerHTML = currentVideo.title;
  contentArea.innerHTML = currentVideo.content;
  videoArea.setAttribute("src", currentVideo.url);

  number = (number + 1) % data.length;
}

window.onload = getData;

button.addEventListener('click',changeVideo);