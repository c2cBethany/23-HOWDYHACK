document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      const container = document.getElementsByClassName('sidebar-container')[0];
    
      container.querySelectorAll('#sidebar-open-button, #sidebar-close-button').forEach((elem) => {
        elem.addEventListener('click', (event) => {
          container.classList.toggle('opened');
          container.classList.toggle('closed');
        });
      });
    }
  };