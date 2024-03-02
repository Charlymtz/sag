(async function() {
    const resp = await fetch('https://api.deepai.org/api/urban-graffiti-generator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': 'YOUR_API_KEY'
        },
        body: JSON.stringify({
            text: "YOUR_TEXT_URL",
        })
    });
    
    const data = await resp.json();
    console.log(data);
})()


// Example posting file picker input text (Browser only):
document.getElementById('yourFileInputId').addEventListener('change', async function() {
       const formData = new FormData();
       formData.append('text', this.files[0]);

       const resp = await fetch('https://api.deepai.org/api/urban-graffiti-generator', {
           method: 'POST',
           headers: {
               'api-key': 'YOUR_API_KEY'
           },
           body: formData
       });

       const data = await resp.json();
       console.log(data);
});