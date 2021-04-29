var count = 0;
var arr =document.getElementsByName("interests[]");
function check() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].checked) {
            count++;
        }
    }
    if (count == 0) {
        alert("please select at least one in the checkbox!");
        return false;
    }
}

