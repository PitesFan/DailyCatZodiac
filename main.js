Promise.all([
  fetch("content.json").then((response) => response.json()),
  fetch("database.json").then((response) => response.json()),
]).then(([contentData, databaseData]) => {
  console.log(contentData);
  console.log(databaseData);
  renderHeader(contentData);
  renderFindCat(contentData, databaseData);
  renderFooter(contentData);
});

function renderHeader(data) {
  const header = document.getElementById("header");
  const logo = document.createElement("img");
  const divHeader = document.createElement("div");
  const divTitles = document.createElement("div");
  const title1 = document.createElement("h1");
  const title2 = document.createElement("h1");
  const description = document.createElement("p");

  logo.src = data.header.logo;
  logo.classList.add("logo");
  title1.innerText = data.header.title1;
  title2.innerText = data.header.title2;
  description.innerText = data.header.description;
  divTitles.classList.add("div-titles");
  divHeader.classList.add("div-header");
  title1.classList.add("white");
  title2.classList.add("light-blue");
  description.classList.add("gray");

  header.appendChild(logo);
  header.appendChild(divHeader);
  divHeader.appendChild(divTitles);
  divTitles.appendChild(title1);
  divTitles.appendChild(title2);
  divHeader.appendChild(description);
}

function renderFindCat(data, databaseData) {
  const findCat = document.getElementById("find-cat");
  const header2 = document.createElement("h2");
  const image = document.createElement("img");
  const buttonZodia = document.createElement("button");
  const orText = document.createElement("p");
  const buttonDate = document.createElement("button");
  const divTitle = document.createElement("div");
  const divButtons = document.createElement("div");

  header2.innerText = data["find-cat"].header2;
  image.src = data["find-cat"].image;
  buttonZodia.innerText = data["find-cat"]["button-zodia"];
  orText.innerText = data["find-cat"]["or-text"];
  buttonDate.innerText = data["find-cat"]["button-date"];
  header2.classList.add("white", "h2");
  image.classList.add("cloud");
  buttonZodia.classList.add("button", "dark-green", "white");
  orText.classList.add("gray");
  buttonDate.classList.add("button", "dark-green", "white");
  divTitle.classList.add("div-title");
  divButtons.classList.add("div-buttons");

  findCat.appendChild(divTitle);
  divTitle.appendChild(header2);
  divTitle.appendChild(image);
  findCat.appendChild(divButtons);
  divButtons.appendChild(buttonZodia);
  divButtons.appendChild(orText);
  divButtons.appendChild(buttonDate);

  renderShowCatZodia(data, databaseData);

  function renderShowCatZodia(data, databaseData) {
    const showCatZodia = document.getElementById("show-cat-zodia");
    const divButtonsZodia = document.createElement("div");
    const divHeader3 = document.createElement("div");
    const header3 = document.createElement("h3");
    const catImage = document.createElement("img");
    const imageDescription = document.createElement("p");

    header3.innerText = data["show-cat-zodia"].header3;
    header3.classList.add("white", "h3");
    divHeader3.classList.add("div-header3");
    divButtonsZodia.classList.add("div-buttons-zodia");
    catImage.classList.add("cat-image");
    imageDescription.classList.add("image-description");
    imageDescription.classList.add("gray");

    showCatZodia.appendChild(divHeader3);
    divHeader3.appendChild(header3);
    divHeader3.appendChild(divButtonsZodia);
    showCatZodia.appendChild(catImage);
    showCatZodia.appendChild(imageDescription);

    for (let i = 0; i < databaseData.zodia.length; i++) {
      const buttonZodia = document.createElement("button");
      buttonZodia.innerText = databaseData.zodia[i].name;
      buttonZodia.classList.add("button", "dark-blue", "white");
      divButtonsZodia.appendChild(buttonZodia);
    }

    divButtonsZodia.addEventListener("click", (event) => {
      const clickedButton = event.target.closest("button");

      for (let i = 0; i < divButtonsZodia.children.length; i++) {
        divButtonsZodia.children[i].classList.remove("button-selected");
      }

      for (let i = 0; i < divButtonsZodia.children.length; i++) {
        if (clickedButton.innerText === databaseData.zodia[i].name) {
          catImage.src = databaseData.zodia[i].url;
          imageDescription.innerText = databaseData.zodia[i].description;
          catImage.style.display = "block";
          imageDescription.style.display = "block";
          clickedButton.classList.add("button-selected");
          break;
        }
      }
    });
  }
}

function renderFooter(data) {
  const footer = document.getElementById("footer");
  const footerP = document.createElement("p");
  footer.classList.add("footer");
  footerP.innerText = data.footer;
  footerP.classList.add("gray");
  footer.appendChild(footerP);
}
