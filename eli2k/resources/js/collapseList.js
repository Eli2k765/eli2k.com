document.addEventListener('DOMContentLoaded', () => {

  // Get all the <h3>elements on the page
  const headings = document.querySelectorAll('div.page-content.blog h3, div.page-content.blog h4, div.page-content.blog h5, div.page-content.blog h6');

  // Loop through each <h3> element
  headings.forEach((heading) => {
    // Check if the heading has any child elements
    const childElements = Array.from(heading.nextElementSibling.children);
    if (childElements.length) {
      // Hide the child elements by default
      childElements.forEach((child) => {
        child.classList.add('hidden');
      });

      // Add a click event listener to the <h3> element
      heading.addEventListener('click', () => {
        // Toggle the display of the child elements
        childElements.forEach((child) => {
          child.classList.toggle('hidden');
        });

        // Toggle the icon and class on the heading element
        heading.classList.toggle('expanded');
        const iconElement = heading.querySelector('.icon');
        if (iconElement) {
          iconElement.innerHTML = (iconElement.innerHTML === '+') ? '-' : '+';
        }
      });

      // Add a plus or minus icon to the <h3> element
      const iconElement = document.createElement('span');
      iconElement.classList.add('icon');
      iconElement.innerHTML = '+';
      heading.insertBefore(iconElement, heading.firstChild);
    }
  });

  // Get the toggle button
  const toggleButton = document.getElementById('toggle-all-btn');

  // Add the 'show-all' class to the toggle button element by default
  toggleButton.classList.add('show-all');

  // Add a click event listener to the toggle button
  toggleButton.addEventListener('click', () => {
    // Toggle the display of all child elements
    headings.forEach((heading) => {
      const childElements = Array.from(heading.nextElementSibling.children);
      childElements.forEach((child) => {
        child.classList.toggle('hidden');
      });

      // Toggle the icon and class on the heading element
      heading.classList.toggle('expanded');
      const iconElement = heading.querySelector('.icon');
      if (iconElement) {
        iconElement.innerHTML = (iconElement.innerHTML === '+') ? '-' : '+';
      }
    });

    // Toggle the class and text on button
    toggleButton.classList.toggle('show-all');
    toggleButton.classList.toggle('hide-all');
    
    // Check the current class on button and update the text accordingly
    if (toggleButton.classList.contains('show-all')) {
      toggleButton.innerHTML = 'Show All';
    } else {
      toggleButton.innerHTML = 'Hide All';
    }
  });
});