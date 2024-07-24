const compression = require('compression');
const cors = require('cors');
const {indexRouter} = require("./src/router/indexRouter");
const express = require('express');
const app = express();
const port = 3000;

// CORS 설정
app.use(cors());

// Body JSON 파싱
app.use(express.json());

// HTML 요청 압축
app.use(compression());

// 라우터 분리
indexRouter(app);

app.listen(port, () => {
  console.log(`Express app listening at port: ${port}`)
});
