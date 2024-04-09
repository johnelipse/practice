// let X=5
// X+=3
// console.log(X)
const submissionForm = document.querySelector(".submissionForm");
const nameId = document.querySelector("#name");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const connectionDetails = document.querySelector(".connectionDetails");
console.log(submissionForm, email, contact, nameId, connectionDetails);
const connectionInformation = [];

submissionForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("form submitted");
    
    const name = nameId.value;
    const emailValue = email.value;
    const contactValue = contact.value;
    
    const connectionData = {
        name: name,
        email: emailValue,
        contact: contactValue
    };

    connectionInformation.push(connectionData);

    nameId.value = "";
    email.value = "";
    contact.value = "";

    let allUserHtml = "";
    
    connectionInformation.forEach((exp) => {
        const userHtml = `
            <div class="connectionDetails">
                <p>${exp.name}</p>
                <p>${exp.email}</p>
                <p>${exp.contact}</p>
            </div>
            <br/> 
        `;
        allUserHtml += userHtml;
    });
    
    connectionDetails.innerHTML = allUserHtml;
});
const colorBox=document.querySelector(".colorBox")
let color=document.querySelector("#color")
const colorForm=document.querySelector(".colorForm")
console.log(colorBox,color,colorForm);
// let colors = color.value.toLowerCase();
let colors = color.value;

colorForm.addEventListener("submit",function(e){
e.preventDefault();
colorBox.style.backgroundColor=colors;
// if(colors="red"){
// colorBox.style.backgroundColor="red";
// }
// if(colors="green"){
// colorBox.style.backgroundColor="green";
// }
// if(colors="blue"){
// colorBox.style.backgroundColor="blue";
// }
// if(colors="Aliceblue"){
// colorBox.style.backgroundColor="Aliceblue";
// }
// if(colors="skyblue"){
// colorBox.style.backgroundColor="skyblue";
// }
// if(colors="navyblue"){
// colorBox.style.backgroundColor="navyblue";
// }
// if(colors="greenyellow"){
// colorBox.style.backgroundColor="greenyellow";
// }
// if(colors="gold"){
// colorBox.style.backgroundColor="gold";
// }
// if(colors="deeppink"){
// colorBox.style.backgroundColor="deeppink";
// }
// if(colors="blueviolet"){
// colorBox.style.backgroundColor="blueviolet";
// }
// if(colors="aquamarine"){
// colorBox.style.backgroundColor="aquamarine";
// }
// if(colors="bisque"){
// colorBox.style.backgroundColor="bisque";
// }
// if(colors="chartreuse"){
// colorBox.style.backgroundColor="chartreuse";
// }
// if(colors="brown"){
// colorBox.style.backgroundColor="brown";
// }
// if(colors="violet"){
// colorBox.style.backgroundColor="violet";
// }
// if(colors="gray"){
// colorBox.style.backgroundColor="gray";
// }
// if(colors="grey"){
// colorBox.style.backgroundColor="grey";
// }
// if(colors="pink"){
// colorBox.style.backgroundColor="pink";
// }
// if(colors="orange"){
// colorBox.style.backgroundColor="orange";
// }
// if(colors="purple"){
// colorBox.style.backgroundColor="purple";
// }
// if(colors="white"){
// colorBox.style.backgroundColor="white";
// }
// if(colors="lightgreen"){
// colorBox.style.backgroundColor="lightgreen";
// }
// if(colors="yellow"){
// colorBox.style.backgroundColor="yellow";
// }
})
