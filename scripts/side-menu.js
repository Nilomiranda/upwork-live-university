/**
 * script to add functionality to the side menu
 */

const menuItem = Array.from(document.querySelectorAll('.menu-options a'));

menuItem.forEach(item => item.addEventListener('click', () => {
  setTimeout(() => {
    const activeLink = window.location.hash;
    const activeMenuItem = document.querySelector(`a[href="${activeLink}"]`);

    // checks if there's any other selected element in the menu
    const prevSelectedItem = document.querySelector('li.selected');

    if (!prevSelectedItem) {
      // simply add 'selected' class if none was previously selected
      activeMenuItem.children[0].classList.add('selected');
    } else {
      // removes previous 'selected' class from previous item ...
      prevSelectedItem.classList.remove('selected');

      // and adds to the newly selected one ...
      activeMenuItem.children[0].classList.add('selected');
    }

  }, 1);
}))


