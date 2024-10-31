function toggleForm() {
  const form = document.getElementById("formId");

  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }

  const labelNama = document.querySelector("#labelNama");
  const labelRole = document.querySelector("#labelRole");
  const labelAvailability = document.querySelector("#labelAvailability");
  const labelAge = document.querySelector("#labelAge");
  const labelLokasi = document.querySelector("#labelLokasi");
  const labelYears = document.querySelector("#labelYears");
  const labelEmail = document.querySelector("#labelEmail");

  const inputNama = document.querySelector("[name='inputNama']");
  const inputRole = document.querySelector("[name='inputRole']");
  const inputAvailability = document.querySelector(
    "[name='inputAvailability']"
  );
  const inputAge = document.querySelector("[name='inputAge']");
  const inputLokasi = document.querySelector("[name='inputLokasi']");
  const inputYears = document.querySelector("[name='inputYears']");
  const inputEmail = document.querySelector("[name='inputEmail']");

  inputNama.value = labelNama.innerText;
  inputRole.value = labelRole.innerText;
  inputAvailability.value = labelAvailability.innerText;
  inputAge.value = labelAge.innerText;
  inputLokasi.value = labelLokasi.innerText;
  inputYears.value = parseInt(labelYears.innerText);
  inputEmail.value = labelEmail.innerText;
}

const submitForm = document.getElementById("formId");
submitForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const form = event.target;
  const data = new FormData(form);

  for (const [name, value] of data) {
    console.log(name, ":", value);

    document.querySelector(`#label${name.replace("input", "")}`).innerHTML =
      value;
  }
});
