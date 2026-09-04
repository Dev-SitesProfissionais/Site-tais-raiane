/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

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


    const links =
        nav.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("open");

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* =========================================
   EFEITO DO MOUSE
========================================= */

const glow =
    document.querySelector(".cursor-glow");

if (
    glow &&
    window.matchMedia("(hover: hover)").matches
) {

    window.addEventListener("mousemove", event => {

        glow.style.left =
            `${event.clientX}px`;

        glow.style.top =
            `${event.clientY}px`;

    });

}


/* =========================================
   SCROLL SUAVE
========================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


/* =========================================
   ANIMAÇÃO AO ENTRAR NA TELA
========================================= */

const elements =
    document.querySelectorAll(
        ".hero-content, .hero-photo, .section, .service-card, .project, .ebook, .contact-grid"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity = "1";

                        entry.target.style.transform =
                            "translateY(0)";

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.08
            }
        );


    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    });

}


/* =========================================
   FECHAR MENU AO REDIMENSIONAR
========================================= */

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 768 &&
        nav
    ) {

        nav.classList.remove("open");

        if (menuBtn) {

            menuBtn.textContent = "☰";

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }

});
