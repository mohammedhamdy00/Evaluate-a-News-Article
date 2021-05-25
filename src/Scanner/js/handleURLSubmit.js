const {ValidateURL} = require('./ValidateURL')

async function handleURLSubmit(event) {
    event.preventDefault()
    const uRLScan = document.getElementById('url').value;
    if(ValidateURL(uRLScan)){
        const sendDataToAPI = await fetch(`http://localhost:8085/scanURL/${uRLScan}`);
        const dataScanned = await sendDataToAPI.json();
        document.getElementById("agreement").innerHTML = `<label>Agreement:</label> ${dataScanned.agreement}`;
        document.getElementById("subjectivity").innerHTML = `<label>Subjectivity:</label> ${dataScanned.subjectivity}`;
        document.getElementById("confidence").innerHTML = `<label>Confidence:</label> ${dataScanned.confidence}`;
        document.getElementById("irony").innerHTML = `<label>Irony:</label> ${dataScanned.irony}`;
        document.getElementById("noResult").innerHTML = '';
        document.getElementById("invalidURL").style.display = "none";

    }else{
        document.getElementById("invalidURL").style.display = "block";
        document.getElementById("agreement").innerHTML = '';
        document.getElementById("subjectivity").innerHTML = '';
        document.getElementById("confidence").innerHTML = '';
        document.getElementById("irony").innerHTML = '';
        document.getElementById("noResult").innerHTML = 'Kindly Add URL to Scan';
    }
}

module.exports= {handleURLSubmit};