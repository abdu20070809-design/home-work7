const scores = [5, 4, 3, 5, 2, 4, 5, 3, 5];

scores.forEach(function(scores) {
    console.log("оценка", scores);
    
});

const firstIndex = scores.indexOf(5);
console.log("Первая", firstIndex);

const lastIndex = scores.lastIndexOf(5);
console.log("Последняя", lastIndex);

function countScore(targetScore) {
    let count = 0;
    scores.forEach(function(score){
        if (score === targetScore) {
            count++;
        }
    });
    return count;
}

console.log(countScore(5));

function creatCounter() {
    let count = 0;
    return function(){
        count++;
        return count;
    };
}

const counter = creatCounter();
console.log(counter()); 
console.log(counter());
console.log(counter());

function checkScores(arr) {
  let countFives = 0;

  // Перебираем и выводим каждую оценку, а также считаем пятёрки
  arr.forEach(function(score) {
    console.log("Оценка: " + score);
    if (score === 5) {
      countFives++;
    }
  });

  // Находим индексы первой и последней пятёрки
  const firstFive = arr.indexOf(5);
  const lastFive = arr.lastIndexOf(5);

  // Выводим финальные результаты
  console.log("Всего пятёрок: " + countFives);
  console.log("Первая пятёрка: " + firstFive);
  console.log("Последняя пятёрка: " + lastFive);
}

// Запускаем функцию
checkScores(scores);





