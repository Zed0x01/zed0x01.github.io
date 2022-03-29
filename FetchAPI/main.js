let inputText = document.querySelector('.inputText');
let button = document.querySelector('.btn1');

button.onclick = async () =>{
    const respone = await fetch(inputText.value);
    const jsonData = await respone.json();
    jsonData.forEach(users => {
        console.log(`
        Name : ${users.name}
        Username : ${users.username}
        Phone : ${users.phone}
        Website : ${users.website}
        `);
    });
}