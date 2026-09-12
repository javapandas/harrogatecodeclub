(function() {
      (function() {
          // Menu.
const mobileMenu2 = document.getElementById("menu-2-mobile");
if (mobileMenu2) {
  const openBtn = document.getElementById("menu-2-button");

  if (typeof window.disableBodyScroll !== "function") {
    function disableBodyScroll() {
      document.body.style.overflowX = "hidden";
    }
  }
  if (typeof window.enableBodyScroll !== "function") {
    function enableBodyScroll() {
      document.body.style.overflowX = "";
    }
  }

  // Initially hide mobile menu
  gsap.set(mobileMenu2, { x: "100%", display: "none", autoAlpha: 0 });

  let menuOpen = false;
  const tl = gsap.timeline({ paused: true }).to(mobileMenu2, {
    x: "0%",
    display: "flex",
    autoAlpha: 1,
    duration: 0.32,
    ease: "power3.out",
  });

  openBtn.addEventListener("click", () => {
    menuOpen = !menuOpen;
    if (menuOpen) {
      tl.play();
      disableBodyScroll();
    } else {
      tl.reverse();
      enableBodyScroll();
    }
  });
}

        })();

    })();