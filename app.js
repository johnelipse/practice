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

