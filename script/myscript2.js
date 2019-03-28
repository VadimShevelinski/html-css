function functabs(number) {
    var divs = document.getElementsByTagName('figure');
    // var divs = document.getElementsByClassName('myblock'); // или так
    for (var i = 0; i < divs.length; i++) {
        divs[i].classList.add("row");
    }
    document.getElementById('row' + number).classList.remove("row");
    document.getElementById('row' + number).classList.add("row_one");
}

/*function close () {
    document.getElementById('row').classList.remove("row_one");
    document.getElementById('row').classList.add("row");
}*/