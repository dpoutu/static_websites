fetch('static/data.json')
    .then(response => response.json())
    .then(data => {
        Object.keys(data).forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.innerText = data[id];
            }
        });
    })
    .catch(error => console.error('Error loading JSON:', error));