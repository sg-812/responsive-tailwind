 let toggler = document.querySelector("#toggler");
        let navMenu = document.querySelector(".navitems");
        let isOpen = true;

        toggler.addEventListener("click", () => {
            if (isOpen === true) {
                navMenu.style.right = "-100%";
                isOpen = false;
            } else {
                navMenu.style.right = "0%";
                isOpen = true;
            }
        });