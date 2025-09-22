// utilidades puras (fáciles de testear)
function cToF(c) {
  return (c * 9/5) + 32;
}
function fToC(f) {
  return (f - 32) * 5/9;
}

// DOM listo
document.addEventListener("DOMContentLoaded", () => {
  const $modo = document.getElementById("modo");
  const $valor = document.getElementById("valor");
  const $btn = document.getElementById("btn-convertir");
  const $res = document.getElementById("resultado");
  const $err = document.getElementById("error");

  // accesibilidad: Enter para convertir
  $valor.addEventListener("keydown", (e) => {
    if (e.key === "Enter") $btn.click();
  });

  // habilitar/deshabilitar botón si no hay valor
  const toggleBtn = () => { $btn.disabled = ($valor.value.trim() === ""); };
  $valor.addEventListener("input", toggleBtn);
  toggleBtn();

  $btn.addEventListener("click", () => {
    $err.textContent = "";
    $res.textContent = "";

    const modo = $modo.value; // "F" o "C"
    const input = Number($valor.value);

    if (Number.isNaN(input)) {
      $err.textContent = "Ingresá un número válido.";
      return;
    }

    if (modo === "F") {
      const r = cToF(input);
      $res.textContent = `${input}°C = ${r.toFixed(2)}°F`;
    } else {
      const r = fToC(input);
      $res.textContent = `${input}°F = ${r.toFixed(2)}°C`;
    }
  });
});
