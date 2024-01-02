// THE JAVASCRIPT


displayModal("Cookie_container")


function displayModal(id) {
    document.getElementById(id).style.display = "block";
}


function displayGallery(id, src, desc) {
    document.getElementById(id).style.display = "block";
    document.getElementById("desc").innerHTML = desc;
}


function closeModal(id) {
    document.getElementById(id).style.display = "none";
}