/* обязательное добавление на докуменнт  */
document.addEventListener("DOMContentLoaded", () => {
  /* модальное окно */
  const modal = document.querySelectorAll(".modal");
  const modalForm = document.querySelector(".modal-form");
  const modalSend = document.querySelector(".modal-send");
  const btn = document.querySelector("#home-button");
  const btnModal = document.querySelector("#modal-btn__1");
  const exit = document.querySelectorAll(".modal-exit");

  btn.addEventListener("click", function () {
    modalForm.classList.add("active");
  });
  exit.forEach((exitBtn) => {
    exitBtn.addEventListener("click", function () {
      modal.forEach((modalBlock) => {
        modalBlock.classList.remove("active");
      });
    });
  });
  /* модальное окно ОТПРАВЛЕНО */
  btnModal.addEventListener("click", function () {
    modalForm.classList.remove("active");
    modalSend.classList.add("active");
  });
});
