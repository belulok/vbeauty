const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
const items = document.querySelectorAll('.items');
document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large')

  for(let i=0; i<items.length; i++) {
    items[i].classList.toggle('no-items')
  }

}

var currentdate = new Date();
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear()

let info = []

let com_btn = document.getElementById("add-new-comm");

com_btn.addEventListener("click", clickEventHandler)

function clickEventHandler() {
    // add body list
  let list="";

  info.push(
    {
      date: datetime,
      cname: document.getElementById("customer").value,
      card: document.getElementById("card").value,
      treatment: document.getElementById("treatment").value,
      p_c: document.getElementById("p_c").value,
      product: document.getElementById("product").value,
      course: document.getElementById("course").value,
      service: document.getElementById("service").value,
      commisions: document.getElementById("comm").value
    })



  for(let j=0; j < info.length; j++) {
    list += "<tr>"
    list += "<td>"+ (j+1) +"</td>"
    list += "<td>"+info[j].date+"</td>"
    list += "<td>"+info[j].card+"</td>"
    list += "<td>"+info[j].treatment+"</td>"
    list += "<td>"+info[j].p_c+"</td>"
    list += "<td>"+info[j].product+"</td>"
    list += "<td>"+info[j].course+"</td>"
    list += "<td>"+info[j].service+"</td>"
    list += "<td>"+info[j].commisions+"</td>"
    list += "</tr>"
  }

  document.getElementById("table-body").innerHTML = list;
  document.getElementById("customer").innerHTML = "";
}


