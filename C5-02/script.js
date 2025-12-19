// ランダムカラー生成用関数
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const target = document.querySelector('.bg-random');

// 一定間隔(3秒)ごとに背景色を変更
setInterval(() => {
  target.style.backgroundColor = getRandomColor();
}, 3000);