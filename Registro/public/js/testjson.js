$(document).ready(function () {
    var localObj = JSON.parse(localStorage.getItem('jsonFormData'));
    console.log(localObj);
    alert(localObj.field1);
});