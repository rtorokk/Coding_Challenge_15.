// Task 1: Creating the Base Structure

document.addEventListener('DOMContentLoaded', function() {
    const riskDashboard = document.querySelector('.risk-dashboard');
    console.log("Risk Dashboard Loaded");
});
    // Task 2: Adding Risk Items Dynamically

    function addRiskItem(riskName, riskLevel, department) {
        const riskItem = document.createElement('div');
        riskItem.classList.add('risk-item');
    }
    // Task 3: Removing Risk Items
    const riskContent = `
    <h3>${riskName}</h3>
    <p>Risk Level: ${riskLevel}</p>
    <p>Department: ${department}</p>
    <button class="remove-risk">Remove</button>
    `;
    
    riskItem.innerHTML = riskContent
    riskDashboard.appendChild(riskItem);
// Test Cases for Task 2
addRiskItem('Data Breach', 'High', 'IT');
addRiskItem("Supply Chain Disruption", "Medium", "Operations");