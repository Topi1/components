const sideBarBtn = document.querySelector(".sideBarBtn")
const sideBarCloseBtn = document.querySelector(".sideBarCloseBtn")
const sideBar = document.querySelector(".sidebar")

sideBarBtn.addEventListener("click", openSideBar)
sideBarCloseBtn.addEventListener("click", closeSideBar)

function openSideBar() {
    //sideBar.style.position = "fixed"
    sideBarCloseBtn.style.visibility = "visible"
    sideBar.style.width = "15%"
}

function closeSideBar() {
    //sideBar.style.position = "fixed"
    sideBarCloseBtn.style.visibility = "hidden"
    sideBar.style.width = "5%"
}