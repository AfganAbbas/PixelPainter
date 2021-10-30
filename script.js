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
    LogoColor();

    function startToPaint(e) {
        painting = true;
        draw(e);
    }

    function finishToPaint() {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = widthInput.value;
        ctx.strokeStyle = color.value;
        ctx.lineCap = "round";
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }

    function erase() {
        ctx.strokeStyle = "white";
    }

    function eraseAll(params) {

    }
    canvas.addEventListener("mousedown", startToPaint);
    canvas.addEventListener("mouseup", finishToPaint);
    canvas.addEventListener("mousemove", draw);
    eraseBtn.addEventListener('click', erase);
    eraseAllBtn.addEventListener('click', eraseAll);

    function LogoColor() {
        let r = Math.random();
    }
})