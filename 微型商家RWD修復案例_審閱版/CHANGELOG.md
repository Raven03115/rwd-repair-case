# 修復前後差異

## JavaScript

### 問題

HTML 按鈕使用 `.menu-button`，JavaScript 卻查找 `.mobile-menu-button`，因此得到 `null`，接著呼叫 `addEventListener` 時中止後續程式。

### 修復

```diff
- const menuButton = document.querySelector(".mobile-menu-button");
+ const menuButton = document.querySelector(".menu-button");
```

## 商品網格

```diff
- grid-template-columns: repeat(3, 420px);
+ grid-template-columns: repeat(3, minmax(0, 1fr));
```

並新增：

- 900px 以下：兩欄。
- 760px 以下：一欄。

## 詢價表單

```diff
- width: 760px;
+ width: 100%;
+ max-width: 760px;
```

送出按鈕審閱版使用：

```css
width: 100%;
max-width: 420px;
```

## 圖片

主視覺改用自動高度以完整顯示；商品圖保留固定卡片高度並加入：

```css
object-fit: cover;
object-position: center;
```
