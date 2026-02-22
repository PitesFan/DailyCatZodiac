fetch("content.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    renderHeader(data);
    renderFindCat(data);
    renderFooter(data);
  });

function renderHeader(data) {
  const header = document.getElementById("header");
  const logo = document.createElement("img");
  const divHeader = document.createElement("div");
  const divTitle = document.createElement("div");
  const title1 = document.createElement("h1");
  const title2 = document.createElement("h1");
  const description = document.createElement("p");

  logo.src = data.header.logo;
  logo.classList.add("logo");
  title1.innerText = data.header.title1;
  title2.innerText = data.header.title2;
  description.innerText = data.header.description;
  divTitle.classList.add("div-title");
  divHeader.classList.add("div-header");
  title1.classList.add("white");
  title2.classList.add("light-blue");
  description.classList.add("gray");

  header.appendChild(logo);
  header.appendChild(divHeader);
  divHeader.appendChild(divTitle);
  divTitle.appendChild(title1);
  divTitle.appendChild(title2);
  divHeader.appendChild(description);
}

function renderFindCat(data) {
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
}

function renderFooter(data) {
  const footer = document.getElementById("footer");
  const footerP = document.createElement("p");
  footer.classList.add("footer");
  footerP.innerText = data.footer;
  footerP.classList.add("gray");
  footer.appendChild(footerP);
}
