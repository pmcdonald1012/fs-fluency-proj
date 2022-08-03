// import { request } from "express";

// import { json } from "express";

// import { data } from "jquery";


const allAccBtn = $('#getBtn');
const container = $('.container');
const submitBtn = $('#postBtn');
const $checking = $("#checking-input");
const $saving = $("#saving-input");
const $name = $("#name-input");


allAccBtn.on("click", () => {

  let userId = $name.val();
  let obj = {userId}
  console.log(obj)
    $.ajax({
        type: "POST",
        url: "/api/accounts/all",
        data: JSON.stringify(obj),
        success: res => {
          console.log('get requst is a success');
           let resultdiv = $('<div></div>');
           resultdiv.text(JSON.stringify(res));
           resultdiv.appendTo(container);
        },
        contentType: "application/json"
      });
})

submitBtn.on("click", () => {
  let userId = $name.val();

  const checking = $checking.val();
  const savings = $saving.val();
  const name = userId;
  const obj = {name, checking, savings};
    $.ajax({
        type: "POST",
        url:'/api/update',
        data: JSON.stringify(obj),
        success: res => {
          console.log(res)
        },
        contentType: "application/json"
    })
})


