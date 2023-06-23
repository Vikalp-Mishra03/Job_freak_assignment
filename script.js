// Function to show the content based on the clicked link
function showContent(contentId) {
    // Hide all content divs
    var contentDivs = document.getElementsByClassName("content");
    for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = "none";
    }

    // Show the selected content div
    document.getElementById(contentId).style.display = "block";

    // Set the active link
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }
    document.getElementById(contentId + "-link").classList.add("active");
}