const inputText = document.querySelector(".inputText");
const formHolder = document.querySelector(".formHolder");
const contentView = document.querySelector(".contentView");

formHolder.addEventListener("submit", async (event) => {
    event.preventDefault();
    const respone = await fetch(inputText.value);
    const jsonData = await respone.text();
    getElementsReq(jsonData);
});

function getElementsReq(data) {

    const parseData = new DOMParser();
    const parsedData = parseData.parseFromString(data, "text/html");
    const description = parsedData.querySelector("meta[name=description]");

    const descElement = document.createElement('h2');
    descElement.innerText = `Name : ${parsedData.title}`
    contentView.append(descElement);

    const titleElement = document.createElement('h2');
    titleElement.innerText= `Description : ${description.getAttribute('content')}`;
    contentView.append(titleElement);

}