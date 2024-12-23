document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Google Sheets URL
    const googleScriptURL = "YOUR_GOOGLE_SCRIPT_URL_HERE";

    // Send form data to Google Sheets
    try {
        const response = await fetch(googleScriptURL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(data),
        });

        // Optional: Add code here to send email notification
        alert("Message sent successfully!");
        this.reset();
    } catch (error) {
        alert("Error sending message.");
        console.error("Error:", error);
    }
});
