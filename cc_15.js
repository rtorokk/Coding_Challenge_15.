// Task 1: Creating the Base Structure

document.addEventListener('DOMContentLoaded', function() {
    const riskDashboard = document.querySelector('.risk-dashboard');
    console.log("Risk Dashboard Loaded");

    // Task 2: Adding Risk Items Dynamically
    function addRiskItem(riskName, riskLevel, department) {
        const riskItem = document.createElement('div');
        riskItem.classList.add('risk-item');

        // Task 4: Categorizing Risks by Level
        switch(riskLevel) {
            case 'Low':
                riskItem.classList.add('Low-risk');
                break;
            case 'Medium':
                riskItem.classList.add('Medium-risk');
                break;
            case 'High':
                riskItem.classList.add('High-risk');
                break;
        }

        // Task 3: Removing Risk Items
        const riskContent = `
            <h3>${riskName}</h3>
            <p>Risk Level: ${riskLevel}</p>
            <p>Department: ${department}</p>
            <button class="remove-risk">Remove</button>
        `;
        riskItem.innerHTML = riskContent;

        riskItem.querySelector('.remove-risk').addEventListener('click', function() {
            riskItem.remove();
        });
        riskItem.addEventListener('click', function(event) {
            event.stopPropagation();
        });

        riskDashboard.appendChild(riskItem);
    }
    
     // Task 5: Implementing Bulk Updates
     const increaseRiskButton = document.createElement('button');
     increaseRiskButton.textContent = 'Increase Risk Level';
     increaseRiskButton.addEventListener('click', function() {
         const riskItems = document.querySelectorAll('.risk-item');
         riskItems.forEach(function(riskItem) {
             if (riskItem.classList.contains('Low-risk')) {
                 riskItem.classList.remove('Low-risk');
                 riskItem.classList.add('Medium-risk');
                 riskItem.querySelector('p').textContent = 'Risk Level: Medium';
             } else if (riskItem.classList.contains('Medium-risk')) {
                 riskItem.classList.remove('Medium-risk');
                 riskItem.classList.add('High-risk');
                 riskItem.querySelector('p').textContent = 'Risk Level: High';
             }
         });
     });
    riskDashboard.appendChild(increaseRiskButton);

    // Test Cases for Task 2
    addRiskItem('Data Breach', 'High', 'IT');
    addRiskItem("Supply Chain Disruption", "Medium", "Operations");
    // Test Cases for Task 3
    addRiskItem("Market Fluctuations", "High", "Finance");
    // Test Cases for Task 4
     addRiskItem("Cybersecurity Threat", "High", "IT");
     addRiskItem("HR Compliance Issue", "Low", "Human Resources");
    // Test Cases for Task 5
    addRiskItem("Employee Retention", "Low", "HR");
});

