const helpBtn = document.getElementById("help");

helpBtn.addEventListener("click", () => {
    const words = ["This app is a simple contact manager", "For this beta you can just add an see your contact but on the next versions you will be able to delete your contacts", "Thanks for use this app ATT: Daniels-not."];
    let help = words.map(word => {
        return `<p>${word}</p>`;
    });
    Swal.fire({
        icon: 'info',
        title: 'Parch Notes v0.0.1',
        html: help,
        width: 800,
        padding: '4em',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://i.ibb.co/XZtTL9q/helpgiphy.gif")
            right bottom
            no-repeat
        `
    })
})