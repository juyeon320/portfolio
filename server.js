const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// 정적 파일(css, html 등) 제공
app.use(express.static(__dirname));

// 기본 경로 요청 시 code.html 반환
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'code.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
