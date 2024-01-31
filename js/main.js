const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedButton = button.textContent;

        if (button.id === "c") {
            screen.textContent = "0";
            return;
        }

        if (button.id === "delete") {
            if (screen.textContent.lenght === 1 || screen.textContent === "error") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        } 

        if (button.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent); 
            } catch {
                screen.textContent = "error";
            }
            return; 
        }

        if (screen.textContent === "0" || screen.textContent === "error") {
            screen.textContent = selectedButton;
        } else {
            screen.textContent += selectedButton;
        }
    })
})