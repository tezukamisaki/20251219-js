// 現在の時刻(時)を取得
const currentHour = new Date().getHours();

const target = document.querySelector('.bg-time');
if (currentHour >= 5 && currentHour < 11) {
  // 朝：5時～10時
  target.classList.add("morning");
} else if (currentHour >= 11 && currentHour < 17) {
  // 昼：11時～16時
  target.classList.add("daytime");
} else {
  // 17時～翌4時
  target.classList.add("night");
}