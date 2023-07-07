const express = require("express");
const mysql = require("mysql2/promise");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

// 전역 미들웨어
app.use(bodyParser.json());

// MySQL 연결
let con;
(async () => {
  con = await mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "qwer4321a",
    database: "posts",
  });
  console.log("MySQL 연결 완료");
})();

// MySQL 전체 게시글 조회
app.get("/posts", async (req, res) => {
  const [posts] = await con.execute("SELECT * FROM posts ORDER BY id DESC");
  res.send(posts);
});

// MySQL 특정 게시글 조회
app.get("/posts/:id", async (req, res) => {
  const [post] = await con.execute("SELECT * FROM posts WHERE id = ?", [
    req.params.id,
  ]);
  res.send(post);
});

// MySQL 게시글 생성
app.post("/posts", async (req, res) => {
  const { user, title, contents } = req.body;
  const query = "INSERT INTO posts (user, title, contents) VALUES (?, ?, ?)";
  await con.execute(query, [user, title, contents]);
  res.status(201).send("게시글 생성 완료");
});

// 정예반 수정
app.put("/posts/:id", async (req, res) => {
  // 수정하고 싶은 게시글 ID
  const id = req.params.id;
  // 변경 내용을 받음
  const { title, contents } = req.body;
  const query = `update posts set title = "${title}", contents = "${contents}" where id = ${id}`;
  console.log(query);
  await con.execute(query);
  res.send("put-posts");
});

// 정예반 삭제

// 회원가입 -> post // sign-up
app.post("/sign-up", (req, res) => {
  res.send("signup");
});

// 로그인 -> post // sign-in
app.post("/sign-in", (req, res) => {
  res.send("signin");
});

// 서버 listen
app.listen(port, () => {
  console.log(`${port} 포트에서 서버가 실행되었습니다.`);
});
