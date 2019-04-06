document.querySelector('#myForm').addEventListener('submit', saveBookmark);
function saveBookmark(e) {

  e.preventDefault();
  var siteName = document.querySelector('#name').value;
  var siteEmail = document.querySelector('#email').value;
  var siteSubject = document.querySelector('#subject').value;
  var sitePhone = document.querySelector('#phone').value;
  var siteMale = document.querySelector('#demo-priority-male').value;
  var siteFemale = document.querySelector('#demo-priority-female').value;
  var siteMes = document.querySelector('#message').value;

//   if(siteMale === on){
//     siteMale = male;
//   }else{
//     siteMale = female;
//   }

  var info = {
    name: siteName,
    mail: siteEmail,
    sub : siteSubject,
    phone : sitePhone,
    male : siteMale,
    female : siteFemale,
    mes : siteMes,
    gender : siteMale
  }
  if (localStorage.getItem('infos') === null) {
    var infos = [];
    infos.push(info);
    localStorage.setItem('infos', JSON.stringify(infos));
  } else {
    var infos = JSON.parse(localStorage.getItem('infos'));
    infos.push(info);
    localStorage.setItem('infos', JSON.stringify(infos));
  }

  fetchInfos();
}
function deleteBookmark(name,mail) {
  var bookmarks = JSON.parse(localStorage.getItem('infos'));
  for (var i=0; i<bookmarks.length; i++) {
    if (bookmarks[i].name === name && bookmarks[i].mail === mail)  {
      
      bookmarks.splice(i,1);
    }
  }

  localStorage.setItem('infos', JSON.stringify(bookmarks));

  fetchInfos();
}

function fetchInfos() {
  var infos = JSON.parse(localStorage.getItem('infos'));

  var infosResults = document.querySelector('#copyright');

  infosResults.innerHTML = '';

  var str = '<div class="card-deck text-center">';

  for (var i = 0; i < infos.length; i++) {
    var name = infos[i].name;
    var email = infos[i].mail;
    var sub = infos[i].sub;
    var phone = infos[i].phone;
    var male = infos[i].male;
    var female = infos[i].female;
    var mes = infos[i].mes;
    console.log(male);
    console.log(female);
    str += '<table>'
      + `<tr style="width : 100%">`
      + `<th style="width : 17.5%">`
      + `<h3>Name</h3>`
      + `</th>`
      + `<th style="width : 17.5%">`
      + `<h3>Email</h3>`
      + `</th>`
      + `<th style="width : 15%">`
      + `<h3>Subject</h3>`
      + `</th>`
      + `<th style="width : 15%">`
      + `<h3>Phone</h3>`
      + `</th>`
    //   + `<th style="width : 10%">`
    //   + `<h3>Gender</h3>`
    //   + `</th>`
      + `<th style="width : 25%">`
      + `<h3>Message</h3>`
      + `</th>`
      + `</tr>`
      + `<div id="infosResults">`
      + `<tr style="width : 100%">`
      + `<th style="width : 17.5%" id="outname">${name}</th>`
      + `<th style="width : 17.5%" id="outmail">${email}</th>`
      + `<th style="width : 15%" id="outsub">${sub}</th>`
      + `<th style="width : 15%" id="outphone">${phone}</th>`
    //   + `<th style="width : 10%" id="outgender">${gender}</th>`
      + `<th style="width : 15%" id="outmes">${mes}	</th>`
      + `<th style="width : 10%"><a onclick="deleteBookmark('${name}','${email}')" class="btn btn-danger">Delete</a></th>`
      +`</tr></div>`
  }
  str += '</table>'

  infosResults.innerHTML = str;
}