function toggle_sidebar() {
    const sidebar = document.querySelector('.side-nav');
    sidebar.classList.toggle('side');
}
function handleSidebar() {
    const sidebar = document.querySelector('.side-nav');

    if (window.innerWidth >= 1221) {
        sidebar.classList.add('side');
    } else {
        sidebar.classList.remove('side');
    }
}
window.addEventListener('resize', handleSidebar);
window.addEventListener('load', handleSidebar);