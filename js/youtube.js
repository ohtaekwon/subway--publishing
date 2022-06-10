// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

const YOUTUBE = ["J0pkfjlaxYI", "5v4SfDWIG5Q", "AuJXFfkUjDU", "K4pQSRS__cs"];

function random() {
  randomVedio = Math.floor(Math.random() * YOUTUBE.length);
  return YOUTUBE[randomVedio];
}
// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubePlayerAPIReady() {
  // 절대 바꾸면 안됨
  // <div id="player"></div>
  const movieID = random();
  console.log(movieID);

  new YT.Player("player", {
    videoId: movieID, // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: movieID, // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      },
    },
  });
}
