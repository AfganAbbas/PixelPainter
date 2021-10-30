window.addEventListener("load", () => {
    const eraseAllBtn = document.querySelector("#erase-all");
    const eraseBtn = document.querySelector("#erase");
    const widthInput = document.querySelector("#text-input");
    const color = document.querySelector("#color-input");
    const canvas = document.querySelector(".paper-canvas");
    canvas.height = document.querySelector(".paper").offsetHeight - 8;
    canvas.width = document.querySelector(".paper").offsetWidth - 26;
    const ctx = canvas.getContext("2d");
    let painting = false;
    let erasing = false;
    LogoColor();

    function startToPaint(e) {
        painting = true;
        draw(e);
    }

    function finishToPaint() {
        painting = false;
        erasing = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = widthInput.value;
        if (!erasing) {
            ctx.strokeStyle = color.value;
        }
        ctx.lineCap = "round";

        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

    function erase() {
        erasing = true;
        ctx.strokeStyle = "white";
    }

    function eraseAll() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    canvas.addEventListener("mousedown", startToPaint);
    canvas.addEventListener("mouseup", finishToPaint);
    eraseBtn.addEventListener('click', erase);
    canvas.addEventListener("mousemove", draw);
    eraseAllBtn.addEventListener('click', eraseAll);

    function LogoColor() {
        const childLogos = document.querySelectorAll(".logo-char");
        let l = childLogos.length;
        for (let i = 0; i < l; i++) {
            let c = "#";
            let r = Math.floor(Math.random() * 16777215).toString(16);
            c = c + r;
            childLogos[i].style.color = c;
        }
    }
})