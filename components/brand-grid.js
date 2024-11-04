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
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Regulators, Valves and Systems deliver a wide range of standard and custom engineered precision pressure control solutions for a diverse world market.',
        buttonLabel: 'LEARN MORE',
        buttonUrl: 'https://google.com'
    },
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Power quality solutions designed to keep production lines moving and protect people, equipment, and information.',
        buttonLabel: 'LEARN MORE',
        buttonUrl: 'https://google.com'
    },
    {
        image: 'https://www.emerson.com/resource/image/9467478/landscape_ratio2x1/370/185/2479e91fb5ee367228962f32b9f448d7/2C084AD5243A998AC15BC439665F0DB0/asco%20logo.jpg',
        description: 'Power quality solutions designed to keep production lines moving and protect people, equipment, and information.',
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

dummyData.forEach((data, index) => {
    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';
    imageContainer.innerHTML = `<img src="${data.image}" alt="image"/>`;

    // Create hover box
    const contentRow = document.createElement('div');
    contentRow.className = 'hover-box';
    contentRow.innerHTML = `
        <div class="hover-box-content">${data.description}</div>
        <div><button>${data.buttonLabel}</button></div>
    `;
    
    imageContainer.addEventListener('mouseenter', () => {
        const descContainer = gridContainer.children[3]?.nextSibling; // it is hard coded for now
        gridContainer.insertBefore(contentRow, descContainer);
        contentRow.style.display = 'block';
    });

    imageContainer.addEventListener('mouseleave', () => {
        contentRow.style.display = 'none';
    });

    contentRow.addEventListener('mouseenter', () => {
        contentRow.style.display = 'block';
    })

    contentRow.addEventListener('mouseleave', () => {
        contentRow.style.display = 'none';
    });

    // Append elements
    gridContainer.appendChild(imageContainer);
})

function getColumnCount(index) {
    console.log('index:', index);
    
    let columns = 3;
    if (window.matchMedia("(max-width: 768px)").matches) {
        columns = 1;
    } else if (window.matchMedia("(max-width: 1024px)").matches) {
        columns = 2;
    }
    const remainder = index % columns;
    console.log('remainder', remainder);
    
    if(remainder === 0 && index) {
        return index;
    }
    console.log('return val',index +(columns - remainder));
    
    return index +(columns - remainder);
}