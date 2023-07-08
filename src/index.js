import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  //値を初期化
  document.getElementById("add-text").value = "";

  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  //入力した値を設定
  p.innerText = inputText;

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  //divタグの子要素に各要素を設定
  div.appendChild(p);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
