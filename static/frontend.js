// import { request } from "express";

// import { data } from "jquery";


const allAccBtn = $('#allAccBtn');
const container = $('.container');
const submitBtn = $('#postBtn');
const $checking = $("#checking-input");
const $saving = $("#saving-input");
const $name = $("#name-input");


allAccBtn.on("click", () => {
    $.ajax({
        type: "GET",
        url: '/api/accounts/all',
        success: res => {
         let i = 0;
         while (i < res.length) {
           let resultdiv = $('<div></div>');
           resultdiv.text(JSON.stringify(res[i]));
           resultdiv.appendTo(container);
           i++;
         }
        },
        contentType: "application/json"
      });
})

submitBtn.on("click", () => {
  const checking = $checking.val();
  const savings = $saving.val();
  const name = $name.val();
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


