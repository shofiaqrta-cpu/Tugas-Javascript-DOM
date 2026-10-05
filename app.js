// Mengambil elemen DOM berdasarkan ID
const inputTask = document.getElementById("inputTask");
const tombol = document.getElementById("tombol");
const listContainer = document.getElementById("listContainer");

// Fungsi untuk memperbarui statistik tugas
function updateStats() {
    const total = listContainer.children.length;
    const done = listContainer.querySelectorAll(".checked").length;
    const pending = total - done;

    totalCount.textContent = total;
    doneCount.textContent = done;
    pendingCount.textContent = pending;
}

// Fungsi untuk menambahkan tugas baru
function addTask() {
    const taskText = inputTask.value.trim();

    if (taskText === "") {
        alert("Silakan ketik tugas terlebih dahulu!");
        return;
    }

    // Membuat elemen <li> baru
    const li = document.createElement("li");
    li.textContent = taskText;

    // Membuat tombol hapus (×)
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    listContainer.appendChild(li);
    inputTask.value = "";

    updateStats();
}

// Event listener untuk tombol 'Tambah'
tombol.addEventListener("click", addTask);

// Event listener untuk tekan 'Enter' di input text
inputTask.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Event listener untuk menangani klik pada daftar (tandai selesai / hapus)
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle status selesai
        e.target.classList.toggle("checked");
        updateStats();
    } else if (e.target.tagName === "SPAN") {
        // Hapus elemen <li>
        e.target.parentElement.remove();
        updateStats();
    }
});