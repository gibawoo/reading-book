self.addEventListener('install', (e) => {
  console.log('서비스 워커 설치 완료!');
});

self.addEventListener('fetch', (e) => {
  // 앱 실행 속도를 위해 네트워크 요청을 제어합니다.
});
