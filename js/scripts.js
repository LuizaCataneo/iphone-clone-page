const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected"); // removendo a classe .selected de todos os elementos com a classe .color quando algum é clicado
    });

    const button = e.target;

    const id = button.getAttribute("id"); // pega o id de cada item da classe .color
    console.log(id);

    button.querySelector(".color").classList.add("selected");

    image.classList.add("changing"); // .changing diminui a opacidade para a transição para outra imagem

    image.src = `img/iphone_${id}.jpg`; // ou image.setAttribute("src", `img/iphone_${id}.jpg`)

    setTimeout(() => {image.classList.remove("changing")}, 200); // setando um intervalo de 200ms para voltar a opacidade da transição
  });
})
