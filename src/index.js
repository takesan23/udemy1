import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  //値を初期化
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");
  li.className = "list";

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  //pタグ生成
  const p = document.createElement("p");
  //入力した値を設定
  p.innerText = text;
  p.className = "content";

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(completeButton.closest(".list"));

    //　完了リストに追加する要素
    const addTarget = completeButton.closest(".list");

    // TODO内容テキストを取得
    const text = addTarget.querySelector("p:nth-child(1)").innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // 完了リストに表示
    //liタグ生成
    const li = document.createElement("li");
    li.className = "list";

    //divタグ生成
    const div = document.createElement("div");
    div.className = "list-row";

    //pタグ生成
    const p = document.createElement("p");
    //入力した値を設定
    p.innerText = text;
    p.className = "content";

    //button(戻る)タグ生成
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      //　押された戻すボタンの親タグ(div)を完了リストから削除
      const deleteTarget = returnButton.closest(".list");
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = returnButton.closest(".list").querySelector("p:nth-child(1)")
        .innerText;
      createIncompleteList(text);
    });

    //liタグの子要素に各要素を設定
    addTarget.appendChild(div);
    //divタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(returnButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.closest(".list"));
  });

  //liタグの子要素に各要素を設定
  li.appendChild(div);
  //divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
