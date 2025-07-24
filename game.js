// Балансы игрока
let bluePills = 0;
let redPills = 0;

// Функция покупки синих таблеток
function buyBluePills(amount) {
    // В реальной игре здесь будет интеграция с CryptoBot
    alert(`Покупка ${amount} синих таблеток...`);
    bluePills += amount;
    updateBalances();
}

// Функция игры
function playGame() {
    if(bluePills < 1) {
        alert("Купите синие таблетки для игры!");
        return;
    }
    
    // Списание стоимости игры
    bluePills--;
    
    // Анимация слотов
    spinSlots();
    
    // Определение результата
    setTimeout(() => {
        const result = Math.random() > 0.7; // 30% шанс на победу
        if(result) {
            const winnings = Math.floor(Math.random() * 5) + 1; // 1-5 красных таблеток
            redPills += winnings;
            alert(`🎉 ПОБЕДА! Вы выиграли ${winnings} красных таблеток!`);
        } else {
            alert("Агенты Матрицы помешали вашему побегу... Попробуйте снова!");
        }
        updateBalances();
    }, 2000);
}

// Функция продажи красных таблеток
function sellRedPills() {
    if(redPills < 1) {
        alert("У вас нет красных таблеток для продажи!");
        return;
    }
    
    // В реальной игре здесь будет вывод через Telegram-бота
    alert(`Продажа ${redPills} красных таблеток...`);
    redPills = 0;
    updateBalances();
}

// Обновление интерфейса
function updateBalances() {
    document.getElementById('blueCount').textContent = bluePills;
    document.getElementById('redCount').textContent = redPills;
}

// Анимация слотов
function spinSlots() {
    const slots = ['7', 'X', '0', 'Ψ', 'Δ', 'Ω'];
    const spinCount = 10;
    let currentSpin = 0;
    
    const spinInterval = setInterval(() => {
        for(let i = 1; i <= 3; i++) {
            document.getElementById(`slot${i}`).textContent = 
                slots[Math.floor(Math.random() * slots.length)];
        }
        
        currentSpin++;
        if(currentSpin >= spinCount) {
            clearInterval(spinInterval);
        }
    }, 100);
}

// Инициализация при загрузке
window.onload = updateBalances;