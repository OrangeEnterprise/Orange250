let x = document.querySelectorAll("td");
for (let i = 0; i < x.length; i++) {
  if (x[i].innerText === "Yes") {
    x[i].style.backgroundColor = "#198754";
    x[i].style.color = "#fff";
  }
}

function myFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("myTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const td = rows[i].getElementsByTagName("td")[0]; // Assuming you want to search by the first column (Name)
    if (td) {
      const txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        rows[i].style.display = ""; // Show matching rows
      } else {
        rows[i].style.display = "none"; // Hide non-matching rows
      }
    }
  }
}
