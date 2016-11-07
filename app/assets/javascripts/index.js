
$(document).ready(function(event){
  $('#map_canvas').gmap3({
    marker: { address: "25.057371, 121.547824"},
    map: { options: 
            {
              zoom: 15,
              scrollwheel: false,
              streetViewControl: false
            }
          }
  });

  $("#name").bind("change",function(event){
    $("#post_name").val($(this).val());
  });

  $("#phone").bind("change",function(event){
    $("#post_mobile").val($(this).val());
  });

  $("#email").bind("change",function(event){
    $("#post_email").val($(this).val());
  });


  $("input[name=gender]").bind("checked",function(event){
    $("#post_gender").val($("input[name=gender]:checked").val());
  });

  $("input[name=echelon]").bind("checked",function(event){
    $("#post_echelon").val($("input[name=echelon]:checked").val());
  });

  $("input[name=age]").bind("checked",function(event){
    $("#post_age").val($("input[name=age]:checked").val());
  });

  $(".favorite").bind("checked",function(event){
    $("#post_favorite").val("");
    var rtv="";
    $(".favorite:checked").each(function(){
      rtv += $(this).val()+" ";
    });
    $("#post_favorite").val(rtv);
  });

  $("#sumbitbtn").bind("click",function(event){
    if($("#post_name").val()=="")
    {
      alert("請輸入姓名!");
      return false;
    }
    if($("#post_gender").val()=="")
    {
      alert("請選擇性別!");
      return false;
    }
    if($("#post_echelon").val()=="")
    {
      alert("請選擇場次!");
      return false;
    }
    if($("#post_age").val()=="")
    {
      alert("請選擇年齡!");
      return false;
    }
    if($("#post_favorite").val()=="")
    {
      alert("請選擇喜好投資國家!");
      return false;
    }
    if($("#post_mobile").val()=="")
    {
      alert("請輸入手機號碼!");
      return false;
    }
    if($("#post_email").val()=="")
    {
      alert("請輸入EMAIL!");
      return false;
    }

  });
});