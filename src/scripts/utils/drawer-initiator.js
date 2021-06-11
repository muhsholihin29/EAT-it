const DrawerInitiator = {
    init({ button, drawer, content }) {
        button.addEventListener('click', (event) => {
            this._toggleDrawer(button, event, drawer);
        });
    },

    _toggleDrawer(button, event, drawer) {
        event.stopPropagation();
        drawer.classList.toggle('open');
        button.classList.toggle('rotate');
    },

    _closeDrawer(event, drawer) {
        event.stopPropagation();
        drawer.classList.remove('open');
    },
};


export default DrawerInitiator;


