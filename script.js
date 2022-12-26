const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "25ab4d31b9msheee4e9bad0d4df4p1ecaf6jsn74db06801763",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => response.json())
  .then((response) => {
    quote.innerHTML = response.content;
    author.innerHTML = `- ${response.originator.name}`;
    console.log(response);
  })
  .catch((err) => console.error(err));

refresh.addEventListener("click", () => {
  location.reload();
});
