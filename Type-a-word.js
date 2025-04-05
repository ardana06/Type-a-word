document.querySelector("#wordInput").addEventListener("input", function() {
    const word = document.querySelector("#wordInput").value;
    document.querySelector("#wordLength").textContent = word.length;
});
