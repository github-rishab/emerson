const dummyData = [
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Wherever manufacturing or processing happens, ASCO fluid control products set the standard for helping customers maximize efficiencies, optimize applications, and transform ideas into measurable outcomes.',
        buttonLabel: 'LEARN MORE',
        buttonUrl: 'https://google.com'
    },
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Trusted pneumatic solutions delivering steadfast and long-lasting operation for industrial applications with industry leading IoT connectivity.',
        buttonLabel: 'LEARN MORE',
        buttonUrl: 'https://google.com'
    },
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Innovative, flexible software solutions to supervise and analyze overall equipment effectiveness and attain optimal performance, from small IIoT to full plant control.',
        buttonLabel: 'LEARN MORE',
        buttonUrl: 'https://google.com'
    },
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Advanced control and automation solutions that optimize production and monitoring capabilities in the widest range of process and discrete industrial environments.',
        buttonLabel: 'LEARN MORE',
        buttonUrl: 'https://google.com'
    },
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Power quality solutions designed to keep production lines moving and protect people, equipment, and information.',
        buttonLabel: 'LEARN MORE',
        buttonUrl: 'https://google.com'
    },
]

const gridContainer = document.getElementById('grid-container');

let activeHoverBox = null;
let activeIndex = null;

dummyData.forEach((data, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.innerHTML = `<img src="${data.image}" alt="image"/>`;

    const contentRow = document.createElement('div');
    contentRow.className = 'hover-box';
    contentRow.innerHTML = `
        <div class="hover-box-content text-light">${data.description}</div>
        <div><button class="button-arrow text-semibold">
      ${data.buttonLabel}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        class="arrow"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="9 6 15 12 9 18"></polyline>
      </svg>
    </button></div>
    `;

    imageContainer.addEventListener('mouseenter', appendDescriptionDiv);
    imageContainer.addEventListener('mouseleave', removeDescriptionDiv);
    contentRow.addEventListener('mouseenter', appendDescriptionDiv)
    contentRow.addEventListener('mouseleave', removeDescriptionDiv);

    gridContainer.appendChild(imageContainer);

    function appendDescriptionDiv() {
        if (activeIndex === index) return;

        // Create content for current hover
        const currentContent = `
            <div class="hover-box-content text-light">${dummyData[index].description}</div>
            <div><button class="button-arrow text-semibold">
                ${dummyData[index].buttonLabel}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="arrow" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
            </button></div>`;

        if (activeHoverBox) {
            const descContainer = gridContainer.children[getColumnCount(index)]?.nextSibling;
            activeHoverBox.style.opacity = '0';

            setTimeout(() => {
                activeHoverBox.innerHTML = currentContent;
                gridContainer.insertBefore(activeHoverBox, descContainer);
                activeHoverBox.style.opacity = '1';
            }, 200);
        } else {
            const descContainer = gridContainer.children[getColumnCount(index)]?.nextSibling;
            contentRow.innerHTML = currentContent;
            gridContainer.insertBefore(contentRow, descContainer);
            setTimeout(() => contentRow.classList.add('show'), 10);
            activeHoverBox = contentRow;
        }
        activeIndex = index;
    }

    function removeDescriptionDiv() {
        if (!activeHoverBox) return;

        // Check if mouse is still over another image
        const isOverAnotherImage = document.querySelectorAll('.image-container:hover').length > 0;

        if (!isOverAnotherImage) {
            activeHoverBox.classList.remove('show');
            setTimeout(() => {
                if (activeHoverBox && !activeHoverBox.classList.contains('show')) {
                    activeHoverBox.remove();
                    activeHoverBox = null;
                    activeIndex = null;
                }
            }, 300);
        }
    }
})

function getColumnCount(index) {
    let columns = 4;
    if (window.matchMedia("(max-width: 768px)").matches) {
        columns = 2;
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        columns = 3;
    }
    const remainder = index % columns;
    const lastIndex = index + (columns - remainder - 1);
    return lastIndex;
}
