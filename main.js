function dropDown() {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (event) => {
      const isButton = event.target.closest(".dropdown__btn");
      if (isButton) {
        const dropdownContent = isButton.nextElementSibling;
        const icon = isButton.querySelector(".dropdown__icon");

        dropdownContent.classList.toggle("show");

        icon.classList.toggle("rotate");
      }
    });
  });

  window.addEventListener("click", (event) => {
    if (!event.target.closest(".dropdown")) {
      document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
        dropdown.classList.remove("show");
      });
      document.querySelectorAll(".dropdown__icon").forEach((icon) => {
        icon.classList.remove("rotate");
      });
    }
  });
}

function viewMore() {
  const buttons = document.querySelectorAll(".show-more__btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.previousElementSibling;
      const btn = this;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        btn.querySelector(".show-more__btn-text").textContent = "View more";
        btn.querySelector(".show-more__btn-icon").classList.remove("rotated");
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        btn.querySelector(".show-more__btn-text").textContent = "View less";
        btn.querySelector(".show-more__btn-icon").classList.add("rotated");
      }
    });
  });

}

addEventListener("DOMContentLoaded", () => {
  dropDown();
  viewMore();
  swiperSlider();
});

addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    centeredSlides: false,
    slidesPerView: 1,
    autoHeight: false,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      990: {
          loop: false,
          spaceBetween: "32px",
          slidesPerView: 3,
          autoHeight: true,
          centeredSlides: false
      }
    },
    pagination: {
      el: '.swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});


