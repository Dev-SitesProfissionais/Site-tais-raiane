/* =====================================================
   MENU MOBILE
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

        const aberto =
            nav.classList.contains("open");

        menuBtn.setAttribute(
            "aria-expanded",
            aberto
        );

        menuBtn.textContent =
            aberto ? "×" : "☰";

    });

}


/* =====================================================
   FECHAR MENU AO CLICAR
===================================================== */

const menuLinks =
    document.querySelectorAll(".nav a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =====================================================
   ANIMAÇÃO AO ROLAR
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target
                            .classList
                            .add("show");

                    }

                });

            },

            {
                threshold: 0.12
            }

        );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("show");

    });

}


/* =====================================================
   EFEITO DO MOUSE
===================================================== */

const glow =
    document.querySelector(".cursor-glow");


if (glow && window.matchMedia("(hover: hover)").matches) {

    window.addEventListener("mousemove", event => {

        glow.style.left =
            `${event.clientX}px`;

        glow.style.top =
            `${event.clientY}px`;

    });

}


/* =====================================================
   ROLAGEM SUAVE
===================================================== */

const anchors =
    document.querySelectorAll(
        'a[href^="#"]'
    );


anchors.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(event) {

            const id =
                this.getAttribute("href");

            if (!id || id === "#") {

                return;

            }


            const target =
                document.querySelector(id);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }

        }
    );

});


/* =====================================================
   GARANTIR ANIMAÇÃO INICIAL
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        revealElements.forEach(element => {

            element.classList.add("show");

        });

    }, 150);

});


/* =====================================================
   FECHAR MENU AO AUMENTAR A TELA
===================================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        nav.classList.remove("open");

        menuBtn.textContent = "☰";

    }

});