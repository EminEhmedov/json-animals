AOS.init();
let ARR = "";
window.addEventListener("load", dataal);
async function  dataal(params) {
  await fetch("https://api.publicapis.org/entries")
    .then((response) => response.json())
    .then((json) => (  ARR = json.entries))
    .catch((err) => {
      console.log(err);
    });
}

let animals2 = document.querySelector(".animals1");

async function animalsfilter(params) {
  let data = ``;
  let data2 = await ARR.filter((item) => {
    return item.Category == "Animals";
  });
  if (data2) {
    data2.forEach((element) => {
      data += `
   <div class='my-2' >
   <div> <h4>${element.API}</h4></div>
   <div>${element.Description}</div>
   <div> Link <a href='' >${element.Link}</a> </div>
   </div>
    `;
    });
  }
  animals2.innerHTML = data;
}

let books2 = document.querySelector(".books1");

async function booksfilter(params) {
  
let data1 = ``;
  let data2 = await ARR.filter((item) => {
    return item.Category == "Books";
  });
  if (data2) {
    data2.forEach((element) => {
      data1 += `
   <div class='my-2' >
   <div> <h4>${element.API}</h4></div>
   <div>${element.Description}</div>
   <div> Link <a href='' >${element.Link}</a> </div>
   </div>
    `;
    });
  }
  books2.innerHTML = data1;
}

let gover2 = document.querySelector(".gover1");


 async function goverfilter(params) {
  let data = ``;
  let data2 = await ARR.filter((item) => {
    return item.Category == "Government";
  });
  if (data2) {
    data2.forEach((element) => {
      data += `
   <div class='my-2' >
   <div> <h4>${element.API}</h4></div>
   <div>${element.Description}</div>
   <div> Link <a href='' >${element.Link}</a> </div>
   </div>
    `;
    });
  }
  gover2.innerHTML = data;
}

let other2 = document.querySelector(".other1");


 async function otherfilter(params) {
  let data = ``;

  let data2 = await ARR.filter((item) => {
    return (
      item.Category !== "Government" &&
      item.Category !== "Books" &&
      item.Category !== "Animals"
    );
  });
  data2.forEach((element) => {
    data += `
   <div class='my-2' >
   <div> <h4>${element.API}</h4></div>
   <div>${element.Description}</div>
   <div> Link <a href='' >${element.Link}</a> </div>
   </div>
    `;
  });

  other2.innerHTML = data;
}
