const encriptarBoton = document.getElementById("encriptar");
const desencriptarBoton = document.getElementById("desencriptar");
const copiarBoton = document.getElementById("copiar");

const datos = [
  { letra: "e", cadena: "enter" },
  { letra: "i", cadena: "imes" },
  { letra: "a", cadena: "ai" },
  { letra: "o", cadena: "ober" },
  { letra: "u", cadena: "ufat" },
];
encriptarBoton.addEventListener("click", () => {
  const text = document.querySelector("textarea").value;

  var textoEncriptado = text;
  datos.map((dato) => {
    textoEncriptado = textoEncriptado.replaceAll(dato.letra, dato.cadena);
  });
  document.getElementById("noText").style.display = "none";
  document.getElementById("output_text").innerHTML = `${textoEncriptado}`;
});

desencriptarBoton.addEventListener("click", () => {
  const text = document.querySelector("textarea").value;

  var textoEncriptado = text;
  datos.map((dato) => {
    textoEncriptado = textoEncriptado.replaceAll(dato.cadena, dato.letra);
  });
  document.getElementById("noText").style.display = "none";
  document.getElementById("output_text").innerHTML = `${textoEncriptado}`;
});
function copiar() {
  const textCopy = document.getElementById("output_text").innerHTML;
  navigator.clipboard.writeText(textCopy).then(
    () => {
      alert("Texto copiado!");
    },
    () => {
      alert("nose pudo copiar el texto");
    }
  );
}
copiarBoton.onclick = copiar;
