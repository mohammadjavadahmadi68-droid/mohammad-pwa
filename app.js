
document.getElementById("date").valueAsDate = new Date();

function getKey() {
    return document.getElementById("date").value;
}

function saveTrade() {
    const key = getKey();
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    if (!data.trades) data.trades = [];
    data.trades.push({
        symbol: document.getElementById("symbol").value,
        accountType: document.getElementById("accountType").value,
        profitLoss: document.getElementById("profitLoss").value,
        drawdown: document.getElementById("drawdown").value,
        notes: document.getElementById("tradeNotes").value
    });
    localStorage.setItem(key, JSON.stringify(data));
    alert("ترید ذخیره شد");
}

function saveFinance() {
    const key = getKey();
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    data.finance = {
        income: document.getElementById("income").value,
        expenses: document.getElementById("expenses").value,
        others: document.getElementById("otherExpenses").value
    };
    localStorage.setItem(key, JSON.stringify(data));
    alert("امور مالی ذخیره شد");
}

function saveNutrition() {
    const key = getKey();
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    data.nutrition = {
        breakfast: parseInt(document.getElementById("breakfast").value),
        lunch: parseInt(document.getElementById("lunch").value),
        dinner: parseInt(document.getElementById("dinner").value),
        water: parseInt(document.getElementById("water").value)
    };
    localStorage.setItem(key, JSON.stringify(data));
    drawChart(data.nutrition);
    alert("تغذیه ذخیره شد");
}

function saveGoal() {
    const key = getKey();
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    data.goal = document.getElementById("goal").value;
    localStorage.setItem(key, JSON.stringify(data));
    alert("برنامه‌ریزی ذخیره شد");
}

function drawChart(nutrition) {
    const canvas = document.getElementById("chart");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const vals = [nutrition.breakfast, nutrition.lunch, nutrition.dinner, nutrition.water];
    vals.forEach((val, i) => {
        ctx.fillStyle = ["orange", "green", "blue", "purple"][i];
        ctx.fillRect(i * 70 + 20, 200 - val * 2, 40, val * 2);
    });
}
