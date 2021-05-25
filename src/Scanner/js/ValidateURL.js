function ValidateURL(URL){
    event.preventDefault()
    var validUrl = require('valid-url');

    if (validUrl.isUri(URL)){
        return true;
    } else {
        return false;
    }
}
export {ValidateURL};
