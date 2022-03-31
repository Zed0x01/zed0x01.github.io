let inputText = document.querySelector(".inputText");
let button = document.querySelector(".btn1");
let contentView = document.querySelector(".contentView");

button.addEventListener("click", async (event) => {
    const respone = await fetch(inputText.value, {
        method: "GET",
        accept: "application/text",
    });
    const jsonData = await respone.text();
    getElementsReq(jsonData);
});

function getElementsReq(data) {
    let parseData = new DOMParser();
    let parsedData = parseData.parseFromString(data, "text/html");
    let pageTitle = parsedData.title;
    let meta = parsedData.getElementsByTagName("meta");
    
    for (let i = 0; i < meta.length; i++) {
        if (meta[i].getAttribute("name") && meta[i].getAttribute("content")) {
            let firsth2 = document.createElement("h2");
            firsth2.setAttribute("id", "titlePage");
            firsth2.innerText = `Name : ${pageTitle}`;
            contentView.append(firsth2);

            let secondh2 = document.createElement("h2");
            secondh2.setAttribute("id", "descriptionPage");
            secondh2.innerText = `${meta[i].getAttribute("name")} : ${meta[i].getAttribute("content")}`;
            contentView.append(secondh2);
        }
    }
}
