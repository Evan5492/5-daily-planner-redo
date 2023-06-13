var btnEl = $(".saveBtn");
var currentDay = dayjs();
$("#currentDay").text(currentDay.format("MMMM d YYYY, h:m:s A"));

btnEl.on("click", function() {
  //console.log("test")
  var text = $(this).siblings(".description").val();
  var times = $(this).parent().attr("id")
  console.log(times,text)
  localStorage.setItem(times,text);
});








