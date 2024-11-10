var editableElements = document.querySelectorAll('[contenteditable="true"]');
window.addEventListener('DOMContentLoaded', function () {
    editableElements.forEach(function (element) {
        var id = element.id;
        var savedContent = localStorage.getItem(id);
        if (savedContent) {
            element.textContent = savedContent;
        }
    });
});

editableElements.forEach(function (element) {
    element.addEventListener('input', function (event) {
        var target = event.target;
        var id = target.id;
        var content = target.textContent || '';
        
        localStorage.setItem(id, content);
    });
});
