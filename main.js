fetch("content.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    render(data);
  });

function render(data) {
  // Header
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

  // Footer
  const footer = document.getElementById("footer");
  const footerP = document.createElement("p");
  footer.classList.add("footer");
  footerP.innerText = data.footer;
  footerP.classList.add("gray");
  footer.appendChild(footerP);
}
