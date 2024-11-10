
const editableElements = document.querySelectorAll('[contenteditable="true"]');

window.addEventListener('DOMContentLoaded', () => {
    editableElements.forEach(element => {
        const id = element.id;
        const savedContent = localStorage.getItem(id);
        if (savedContent) {
            element.textContent = savedContent;
        }
    });
});


editableElements.forEach(element => {
    element.addEventListener('input', (event) => {
        const target = event.target as HTMLElement;
        const id = target.id;
        const content = target.textContent || '';
        localStorage.setItem(id, content);
    });
});
