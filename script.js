var currentHour = dayjs().hour()

function hourChecker(){
  $(".time-block").each(function(){
    var hour = parseInt($(this).attr("id").split("-")[1])
    if(currentHour < hour){
      $(this).addClass("past")
    }
  })
};

function hourChecker(){
  $(".time-block").each(function(){
    var hour = parseInt($(this).attr("id").split("-")[1])
    if(currentHour === hour){
      $(this).addClass("present")
    }
  })
};

function hourChecker(){
  $(".time-block").each(function(){
    var hour = parseInt($(this).attr("id").split("-")[1])
    if(cuurentHour > hour){
      $(this).addclass("future")
    }
  })
};

//saves the information into the local storage.
$('.saveBtn').on("click", saveText) 
function saveText() {
  console.log(this.value)
  console.log($(`#text${this.value}`).val())
  localStorage.setItem(this.value,$(`#text${this.value}`).val())
}

//
for (let i = 9; i < 18; i++) {
  $(`#text${i}`).val(localStorage.getItem(i))
  if(i < dayjs().hour()) {
    $(`#text${i}`).addClass("past")
  } else if (i > dayjs().hour()) {
    $(`#text${i}`).addClass("future")
  } else {
    $(`#text${i}`).addClass("present")
  }
}