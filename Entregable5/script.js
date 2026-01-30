document.getElementById("PDF-button").addEventListener("click", () => { html2pdf()
    .from(document.body)
    .save("AlvaroLeon-CV.pdf");
});