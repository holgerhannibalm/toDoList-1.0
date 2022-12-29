function listItem(element){
    var list = element.value;
    var result = document.getElementById('result');
    var inputField = document.getElementById('inputField');

    if (document.getElementById('inputField').value == "") {
        alert('Du skal skrive noget tekst før du kan tilføje det til din to-do liste.');
        return false;
    }   else {
            document.getElementById('result').innerHTML += "--> " + inputField.value + "<br/>";
            document.getElementById('inputField').value == '';
    }
}

function checkForBlank() {
    if (document.getElementById('inputField').value == "") {
        alert('Du skal skrive noget tekst før du kan tilføje det til din to-do liste.');
        return false;
    }   else {
            document.getElementById('result').innerHTML += "--> " + inputField.value + "<br/>";
            document.getElementById('inputField').value == '';
    }
}

function resetResult() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('inputField').value = '';
}
