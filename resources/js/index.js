


function createcarousel(topic,items,k) {
    let firstit = items[0]
    firstim=firstit.enclosure.link
    let s =`<div class="carousel-item active">
  <div class="card mb-3">
  <a href =`+firstit.link+`><img class="card-img-top imi" src=`+firstim+` alt=`+firstit.title+`></a>
  <div class="card-body pad">
    <h5 class="card-title">`+firstit.title+`</h5>
    <p class="card-text"><small class="text-muted">`+firstit.author+` `+ firstit.pubDate+`</small></p>
    <p class="card-text">`+firstit.description+`</p>
    
  </div>
</div>
</div>
    `;
  
    for(let i=1;i<items.length;i++)
    {
      let im = items[i].enclosure.link;
      let ti = items[i].title;
      let au = items[i].author;
      let da = items[i].pubDate;
      let desc = items[i].description;
      let ur = items[i].link;
     // console.log(im);
    s=s+`<div class="carousel-item">
    <div class="card mb-3">
    <a href =`+ur+`><img class="card-img-top imi" src=`+im+` alt=`+ti+`></a>
    <div class="card-body pad">
      <h5 class="card-title">`+ti+`</h5>
      <p class="card-text"><small class="text-muted">`+au+` `+ da+`</small></p>
      <p class="card-text">`+desc+`</p>
      
    </div>
  </div>
     

    </div>`
  }
   
    const phot = document.getElementById(topic);
    phot.innerHTML= `<div id="carouselExampleControls`+k+`" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">`+s+`
     </div>
     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls`+k+`" data-bs-slide="prev">
     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Previous</span>
   </button>
   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls`+k+`" data-bs-slide="next">
     <span class="carousel-control-next-icon" aria-hidden="true"></span>
     <span class="visually-hidden">Next</span>
   </button>
  </div>`
}
async function init() {
  //Fetches list of all cities along with their images and description
  let cities = await fetchCities();
  let cities1 =await fetchCities1();
  let cities2 =await fetchCities2();
  items = cities.items;
  items1 = cities1.items;
  items2 = cities2.items;
//console.log(items[0]);
  //Updates the DOM with the cities
 createcarousel("politics",items,1);
 createcarousel("space",items2,2);
 createcarousel("sports",items1,3);
 
}

//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data

  
  try{const data = fetch("https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@thenewsdesk/the-latest-on-coronavirus-covid-19-t82no8kmz.rss").then((res)=> {
    return res.json();
  })
  .catch(function (err) 
    { return null;
  });
  return data.then((res) => res);
}
catch(err){
  return null;
}

}
async function fetchCities1() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data

  
  try{const data = fetch("https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/topic/indiansports.rss").then((res)=> {
    return res.json();
  })
  .catch(function (err) 
    { return null;
  });
  return data.then((res) => res);
}
catch(err){
  return null;
}

}
async function fetchCities2() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data

  
  try{const data = fetch("https://api.rss2json.com/v1/api.json?rss_url=https://flipboard.com/@dfletcher/india-tech-b2meqpd6z.rss").then((res)=> {
    return res.json();
  })
  .catch(function (err) 
    { return null;
  });
  return data.then((res) => res);
}
catch(err){
  return null;
}

}
init();
//let hmm = document.getElementById(");
//let sh = hmm.getElementsByClassName("accordian-collapse collapse");
//console.log(hmm)