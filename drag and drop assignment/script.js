window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.item');
  const dropzone = document.getElementById('dropzone');
  const resetButton = document.getElementById('resetButton');

  // Add event listeners for drag and drop events
  items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });

  dropzone.addEventListener('dragenter', dragEnter);
  dropzone.addEventListener('dragover', dragOver);
  dropzone.addEventListener('dragleave', dragLeave);
  dropzone.addEventListener('drop', drop);

  resetButton.addEventListener('click', reset);

  // Drag and Drop Functions

  function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    this.classList.add('dragging');
  }

  function dragEnd() {
    this.classList.remove('dragging');
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-enter');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragLeave() {
    this.classList.remove('drag-enter');
  }

  function drop(e) {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');
    const item = document.getElementById(itemId);
    const clonedImage = item.querySelector('img').cloneNode(true);
    dropzone.innerHTML = ''; // Clear the drop zone
    dropzone.appendChild(clonedImage); // Append the cloned image
    this.classList.remove('drag-enter');
    showMessage('Item dropped successfully!');
  }

  function reset() {
    const container1 = document.getElementById('container1');
    const items = container1.querySelectorAll('.item');
    items.forEach(item => {
      container1.appendChild(item);
    });
    dropzone.innerHTML = 'Drop here';
  }

  function showMessage(message) {
    dropzone.innerHTML = message;
  }
});
