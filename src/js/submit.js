function addTestimonial(newTestimonial) {
  //dette er funktionen der putter data i tabbellen i databasen

  const url = "https://sxlgzihcyiaymzpratyu.supabase.co/rest/v1/Testimonial";
  const api =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4bGd6aWhjeWlheW16cHJhdHl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODUwMDczNTMsImV4cCI6MjAwMDU4MzM1M30.j0sWA0KAT9xc-USA2hX9yLX7LR2LcsG88YxY6TfSsts";

  const options = {
    method: "POST", //post gør at den putter noget i tabellen istedet for at hente
    headers: {
      apikey: api,
      Authorization: "Bearer " + api,
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
    body: JSON.stringify(newTestimonial), //laver variablen newTestimonial til json (her er det et objekt med 2 værdier)
  };

  console.log("options:", options);

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      console.log("data:", data);
      window.location.href = "/addTestimonialFeedback";
    });
}

const form = document.querySelector("form");
console.log("form.elements", form.elements);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const obj = {
    name: form.elements.name.value,
    description: form.elements.long.value,
  };

  addTestimonial(obj);
});
