let balance = 0;
        function addTransaction() {
            let amount = +document.getElementById("amount").value;
            let desc = document.getElementById("description").value;
            let cat = document.getElementById("category").value;
            if (!amount || !desc) return alert("Enter valid details!");
            balance += cat === "income" ? amount : -amount;
            document.getElementById("balance").innerText = balance.toFixed(2);
            let li = document.createElement("li");
            li.className = cat;
            li.textContent = `${desc} - $${amount.toFixed(2)}`;
            document.getElementById("transactions").appendChild(li);
        }