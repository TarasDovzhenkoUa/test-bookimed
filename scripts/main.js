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

function checkBoxPrice() {
  const radios = document.querySelectorAll('input[name="customRadio"]');
        const priceSummary = document.getElementById('price-summary');

        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.checked) {
                    updatePriceSummary(this);
                }
            });
        });

        function updatePriceSummary(radio) {
            const oldPrice = radio.getAttribute('data-old-price');
            const newPrice = radio.getAttribute('data-new-price');

            if (!newPrice) {
                priceSummary.innerHTML = `
                  <span class="custom-radio__bottom-price">${oldPrice}</span>
                `;
            } else {
                priceSummary.innerHTML = `
                  <span class="custom-radio__bottom-price--old">${oldPrice}</span>
                  <span class="custom-radio__bottom-price--new">${newPrice}</span>
                `;
            }
        }

        const checkedRadio = document.querySelector('input[name="customRadio"]:checked');
        if (checkedRadio) {
            updatePriceSummary(checkedRadio);
        }
}

addEventListener("DOMContentLoaded", () => {
  dropDown();
  viewMore();
  checkBoxPrice();
});

addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    centeredSlides: false,
    slidesPerView: 1,
    autoHeight: true,
    spaceBetween: "16px",
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


