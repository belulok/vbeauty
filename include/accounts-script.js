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

    // add body list
let list="";
let info3 = [];
let info = [
    {
        package: "Body Treatment",
        treatment: "Q/E Back",
        type: "Amount (Rm)",
        commision: 10
    },
    {
        package: "Body Treatment",
        treatment: "Q/E Breast & Uterus ",
        type: "Amount (Rm)",
        commision: 15
    },
    {
        package: "Body Treatment",
        treatment: "Q/E Whole Body ",
        type: "Amount (Rm)",
        commision: 20
    },
    {
        package: "Body Treatment",
        treatment: "Cupping Treatment ",
        type: "Amount (Rm)",
        commision: 10
    },
    {
        package: "Body Treatment",
        treatment: "Meridian Therapy ",
        type: "Amount (Rm)",
        commision: 10
    },
    {
        package: "Body Treatment",
        treatment: "Body Brush ",
        type: "Amount (Rm)",
        commision: 10
    },
    {
        package: "Body Treatment",
        treatment: "Body Scrub + Mask ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Body Treatment",
        treatment: "Crystal Hand ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Body Treatment",
        treatment: "Back Treatment ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Body Treatment",
        treatment: "Breast Cupping ",
        type: "Amount (Rm)",
        commision: 10
    },
    {
        package: "Body Treatment",
        treatment: "Cavitation ",
        type: "Amount (Rm)",
        commision: 10
    },
    {
        package: "Body Treatment",
        treatment: "Tei System ",
        type: "Amount (Rm)",
        commision: 10
    },

    {
        package: "Facial Treatment ",
        treatment: "Hydrating Facial ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Cold Spa ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Lymphatic ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Cromo Light ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Deep Ionlese",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Eye Treatment ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Face Cupping ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Lymphatic ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Hydrodermabration ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Aromo Heat Stone ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Stem Cell ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "DPL",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "RF Therapy ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Derma Shine ",
        type: "Percentage (%)",
        commision: 30
    },
    {
        package: "Facial Treatment ",
        treatment: "Laser",
        type: "Amount (Rm)",
        commision: 10
    },
    {
        package: "Facial Treatment ",
        treatment: "Laser + Stemcell ",
        type: "Amount (Rm)",
        commision: 15
    },
    {
        package: "Facial Treatment ",
        treatment: "Lift Q ",
        type: "Amount (Rm)",
        commision: 15
    },
    {
        package: "Facial Treatment ",
        treatment: "Stem Cell ",
        type: "Percentage (%)",
        commision: 30
    },

]

let add = document.getElementById("add-new-comm");
let packages = document.getElementById("inputGroup-sizing-sm");
let treatments = document.getElementById("inputGroup-sizing-sm");
let types = document.getElementById("inputGroup-sizing-sm");
let commisions = document.getElementById("inputGroup-sizing-sm");


  for(let j=0; j < info.length; j++) {
    list += "<tr>"
    list += "<td>"+ info[j].package +"</td>"
    list += "<td>"+ info[j].treatment +"</td>"
    list += "<td>"+ info[j].type +"</td>"
    list += '<td><input type="text" class="form-control w-25" value="'+info[j].commision+'"></td>';
    list += "</tr>"
  }


  let comms = document.getElementById("table-body-acc").innerHTML = list;
