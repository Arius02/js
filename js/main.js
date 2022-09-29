var siteName= document.querySelector(".inp-1");
var cat= document.querySelector(".inp-2");
var siteURL= document.querySelector(".inp-3");
var bookmarksList = []
if(JSON.parse(localStorage.getItem("My Pages")) != null){
  bookmarksList= JSON.parse(localStorage.getItem("My Pages"))
  display()
}

function getPage() {
  if(document.querySelector(".submitPage").innerHTML != "Update"){
    var page ={
    name: siteName.value,
    cat: cat.value,
    url: siteURL.value,
    }
  bookmarksList.push(page)
  console.log(bookmarksList)
  clear()
  display()
  localStorage.setItem("My Pages" , JSON.stringify(bookmarksList))
  }
  else{
    document.querySelector(".submitPage").innerHTML ="Add"
    document.querySelector(".submitPage").classList.replace("btn-info","btn-primary")
    bookmarksList[passingVar].name =  siteName.value;
    bookmarksList[passingVar].url = siteURL.value;
    display()
    clear()
    localStorage.setItem("My Pages", JSON.stringify(bookmarksList))
  }
  }
function clear(){
  siteName.value = "";
  cat.value = ""; 
  siteURL.value = ""; 
}
function display(){
  var html=""
  for(i=0 ; i<bookmarksList.length; i++){
    
    html+=` <div class="row mt-3">
        <div class="col-lg-3 col-md-8 text-center text-md-start">
          <div>
            <h5 class="fw-semibold">${bookmarksList[i].name}</h5>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 text-center ">
          <div>
            <p>${bookmarksList[i].cat}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-11 text-center ">
          <div>
            <div class="row">
            <div class="col-sm-4 my-margin ">
              <div><a href="${bookmarksList[i].url}" target="_blank"  class="btn btn-success rounded-pill">Visit</a></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button"  class="btn btn-danger rounded-pill" onclick="deletePage(${i})">Delete</button></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button" onclick="updatePage(${i})" class="btn rounded-pill btn-info text-white">Update</button></div>

            </div>
          </div>
          </div>
        </div>
        <div class="col-lg-1 col-md-1 text-center mt-2 ">
          <div><i class="fa-regular fa-eye"></i><span class="ms-1 counter" ></span></div>
        </div>
      </div>`

  }
  document.querySelector(".fillByJS").innerHTML = html
}

function deletePage(index){
  bookmarksList.splice(index,1)
  display()
  localStorage.setItem("My Pages" , JSON.stringify(bookmarksList))
}
var passingVar;
function updatePage(index){
  siteName.value= bookmarksList[index].name ;
  siteURL.value = bookmarksList[index].url;
  document.querySelector(".submitPage").innerHTML = "Update"
  document.querySelector(".submitPage").classList.replace("btn-primary", "btn-info")
  passingVar = index
}
// let buttonHome = document.querySelector(".btn-success");
// var x;  let CountButtonHomeClicks = 0;
// buttonHome.addEventListener("click", function() {
//   CountButtonHomeClicks += 1;
//   document.querySelector("span").innerHTML= CountButtonHomeClicks
//   x = CountButtonHomeClicks
// });
function searchGlobal(term){
  var html = ""
 if(document.getElementById("searchPlace").placeholder== "Search.."){
   for(i=0 ; i<bookmarksList.length ; i++){
    if(bookmarksList[i].name.toLowerCase().includes(term.toLowerCase() || bookmarksList[i].cat.toLowerCase().includes(term.toLowerCase)))
     html+=` <div class="row mt-3">
        <div class="col-lg-3 col-md-8 text-center text-md-start">
          <div>
            <h5 class="fw-semibold">${bookmarksList[i].name}</h5>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 text-center ">
          <div>
            <p>${bookmarksList[i].cat}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-11 text-center ">
          <div>
            <div class="row">
            <div class="col-sm-4 my-margin ">
              <div><a href="${bookmarksList[i].url}" target="_blank"  class="btn btn-success">Visit</a></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button"  class="btn btn-danger" onclick="deletePage(${i})">Delete</button></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button" onclick="updatePage(${i})" class="btn btn-info text-white">Update</button></div>

            </div>
          </div>
          </div>
        </div>
        <div class="col-lg-1 col-md-1 text-center mt-2 ">
          <div><i class="fa-regular fa-eye"></i><span class="ms-1 counter"></span></div>
        </div>
      </div>`
  }
   document.querySelector(".fillByJS").innerHTML = html
 }
 else if (document.getElementById("searchPlace").placeholder =="Search By Name.."){
  for(i=0 ; i<bookmarksList.length ; i++){
    if(bookmarksList[i].name.toLowerCase().includes(term.toLowerCase()))
     html+=` <div class="row mt-3">
        <div class="col-lg-3 col-md-8 text-center text-md-start">
          <div>
            <h5 class="fw-semibold">${bookmarksList[i].name}</h5>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 text-center ">
          <div>
            <p>${bookmarksList[i].cat}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-11 text-center ">
          <div>
            <div class="row">
            <div class="col-sm-4 my-margin ">
              <div><a href="${bookmarksList[i].url}" target="_blank"  class="btn btn-success">Visit</a></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button"  class="btn btn-danger" onclick="deletePage(${i})">Delete</button></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button" onclick="updatePage(${i})" class="btn btn-info text-white">Update</button></div>

            </div>
          </div>
          </div>
        </div>
        <div class="col-lg-1 col-md-1 text-center mt-2 ">
          <div><i class="fa-regular fa-eye"></i><span class="ms-1 counter"></span></div>
        </div>
      </div>`
  }
     document.querySelector(".fillByJS").innerHTML = html

 }
 else{
  for(i=0 ; i<bookmarksList.length ; i++){
    if(bookmarksList[i].cat.toLowerCase().includes(term.toLowerCase()))
     html+=` <div class="row mt-3">
        <div class="col-lg-3 col-md-8 text-center text-md-start">
          <div>
            <h5 class="fw-semibold">${bookmarksList[i].name}</h5>
          </div>
        </div>
        <div class="col-lg-2 col-md-4 text-center ">
          <div>
            <p>${bookmarksList[i].cat}</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-11 text-center ">
          <div>
            <div class="row">
            <div class="col-sm-4 my-margin ">
              <div><a href="${bookmarksList[i].url}" target="_blank"  class="btn btn-success">Visit</a></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button"  class="btn btn-danger" onclick="deletePage(${i})">Delete</button></div>
            </div>
            <div class="col-sm-4 my-margin">
              <div><button type="button" onclick="updatePage(${i})" class="btn btn-info text-white">Update</button></div>

            </div>
          </div>
          </div>
        </div>
        <div class="col-lg-1 col-md-1 text-center mt-2 ">
          <div><i class="fa-regular fa-eye"></i><span class="ms-1 counter"></span></div>
        </div>
      </div>`
  }
   document.querySelector(".fillByJS").innerHTML = html
 }
}
function byName(){
  var test= document.getElementById("searchPlace");
 test.placeholder = "Search By Name..";
  
}
function byCat(){
  var test= document.getElementById("searchPlace");
  test.placeholder = "Search By Category..";
}
function searchReset(){
  var test= document.getElementById("searchPlace");
  test.placeholder = "Search..";
  document.getElementById("searchPlace").value= ""
}
document.getElementById("searchReset").addEventListener("click", searchReset)
document.getElementById("searchCat").addEventListener("click", byCat)
document.getElementById("searchName").addEventListener("click", byName)

var mainRegex= /^([a-zA-Z0-9@\.]{2,15})$/
var regexURL= /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/   
var form = document.querySelector(".mainForm")

form.addEventListener("submit",function(e){
  e.preventDefault()
  checkInput();
})
function checkInput(){
  var nameValue = siteName.value.trim()
  var catValue = cat.value.trim()
  var urlValue = siteURL.value.trim()
  if(mainRegex.test(nameValue)== false){
    document.querySelector(".alert-name").classList.replace("d-none","d-block")
  }
  else{
    document.querySelector(".alert-name").classList.replace("d-block","d-none")
  }
  if(mainRegex.test(catValue)== false){
    document.querySelector(".alert-cat").classList.replace("d-none","d-block")
  }
  else{
    document.querySelector(".alert-cat").classList.replace("d-block","d-none")
  }
  if(regexURL.test(urlValue)== false){
    document.querySelector(".alert-url").classList.replace("d-none","d-block")
  }
  else{
    document.querySelector(".alert-url").classList.replace("d-block","d-none")
  }
  if(mainRegex.test(catValue) == true && mainRegex.test(nameValue)== true && regexURL.test(urlValue)==true){
    getPage()
  }
}
