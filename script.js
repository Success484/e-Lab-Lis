function toggle_sidebar() {
  const sidebar = document.querySelector(".side-nav");
  sidebar.classList.toggle("side");
}
function handleSidebar() {
  const sidebar = document.querySelector(".side-nav");

  if (window.innerWidth >= 1221) {
    sidebar.classList.add("side");
  } else {
    sidebar.classList.remove("side");
  }
}
window.addEventListener("resize", handleSidebar);
window.addEventListener("load", handleSidebar);

// fetching api

const close_medicine = document.querySelector('.close-medicine')
    close_medicine.addEventListener('click', () => {
        const display = document.querySelector('.medicine-section')
        display.style.display = 'none'
    })

let medicines = [];
const inputField1 = document.getElementById('input1')

document.getElementById("input1").addEventListener("click", async () => {
    try {
    const display = document.querySelector('.medicine-section')
        display.style.display = 'block'
    if (medicines.length === 0) {
      const response = await fetch(
        "https://cliniqueplushealthcare.com.ng/prescriptions/drug_class"
      );
      medicines = await response.json();
    }
    displayMedicines(medicines);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
});

document.getElementById("input1").addEventListener("input", () => {
  const searchQuery = document.getElementById("input1").value.toLowerCase();
  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery)
  );
  displayMedicines(filteredMedicines);
});

function displayMedicines(data) {
  const medicineContainer = document.querySelector(".medicine-brand");
  medicineContainer.innerHTML = "";
  if (data.length > 0) {
    data.forEach((medicine) => {
      const section = document.createElement("section");
      const p = document.createElement("p");
      p.textContent = medicine.name;
      p.addEventListener('click', () => {
        inputField1.value = p.textContent
      })
      section.appendChild(p);
      medicineContainer.appendChild(section);
    });
  } else {
    const noResult = document.createElement("p");
    noResult.textContent = "No results found";
    medicineContainer.appendChild(noResult);
  }
}
