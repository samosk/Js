// collapsible.js
function initializeCollapsibleSections() {
    // Get all showmore elements
    const showMoreButtons = document.querySelectorAll('.showmore');
    
    showMoreButtons.forEach(button => {
        // Find the content section that precedes this button
        const content = button.previousElementSibling;
        
        // Create the button element to replace the paragraph
        const toggleButton = document.createElement('button');
        toggleButton.className = 'more';
        toggleButton.textContent = 'Visa mindre ▲';
        
        // Replace the paragraph with the button
        const paragraph = button.querySelector('p');
        button.replaceChild(toggleButton, paragraph);
        
        // Add click event listener
        toggleButton.addEventListener('click', () => {
            // Toggle content visibility
            const isVisible = content.style.display !== 'none';
            content.style.display = isVisible ? 'none' : 'block';
            
            // Update button text and arrow
            toggleButton.textContent = isVisible ? 'Visa mer ▼' : 'Visa mindre ▲';
        });
    });
}

// Add CSS to the page
const style = document.createElement('style');
style.textContent = `
    .showmore button {
        width: 100%;
        border: none;
        background: none;
        cursor: pointer;
        padding: 8px 0;
        color: inherit;
        text-align: left;
    }

    .showmore button:hover {
        background-color: rgba(0, 0, 0, 0.05);
    }

    .item {
        transition: all 0.3s ease-in-out;
    }
`;
document.head.appendChild(style);

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCollapsibleSections);