function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

const apiKey = 'YOUR_API_KEY_HERE';
const apiUrl = `https://api.spaceflightnewsapi.net/v3/articles?_limit=10&token=${apiKey}`;
  
// fetch(apiUrl)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

document.getElementById('div_iframe').scrollTop = 438;