
export class Dropdown {
    toggleDropdownVisibility(clN) {
        document.querySelector(clN).classList.toggle('fake__options-list_visible');

    }

    hideDropdown(clN) {
        document.querySelector(clN).classList.remove('fake__options-list_visible');
    }

    getSelectedDropdownItem(e) {
        const value = e.target.dataset.value;
        const text = e.target.innerHTML;
        return {value, text};
    }






}