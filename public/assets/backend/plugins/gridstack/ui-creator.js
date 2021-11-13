// Submit button Click
$(document).ready(function(){


  $(function () {
    $('.grid-stack').gridstack({
      width: 12
    });
  });


  $("#get-data").click(function(){ 

    console.log('Submit button Click');

    var array = [];
    var k = 0;
    $(".ui-creator-grid-stack").children().each(function(n, i) {
      var id = this.id;

      var width = $('#'+this.id).data('gs-width');
      var value = $.trim($('#'+this.id+'>.grid-stack-item-content > .ui-cdata').text());
      var gridvalue = $.trim($('#'+this.id+'> .grid-stack-item-content > .grid-item-value').val());
      var x = $('#'+this.id).data('gs-x');
      var y = $('#'+this.id).data('gs-y');


      array.push([]);
      //array[k].push(id, width, value, x, y);
      array[k].push(id, width, gridvalue, x, y);
      console.log(id+' => '+width+' => '+value+' => '+x+' => '+y+' => '+gridvalue);

      k = k+1;
    });

    array.sort(function(a,b){
      return a[4] - b[4] || a[3] - b[3];
    });

    console.log(array);
    console.log(array.length); 

    var section = $('#get-data').data('page');


    if (section == 'footer') {
      $("#footer-content").val(array);
      console.log("Footer: " + section);
    }
    if (section == 'left') {
      $("#leftsidebar-content").val(array);
      console.log("Left Sidebar: " + section);
    }
    if (section == 'right') {
      $("#rightsidebar-content").val(array);
      console.log("Right Sidebar: " + section);
    }
    if (section == 'header') {
      $("#header-content").val(array);
      console.log("Header: " + section);
    }
    if (section == 'home') {
      $("#homepage-content").val(array);
      console.log("Home Page: " + section);
    }


  });
});




  /************************* START: Apperance: Home Page Settings ***************************/
  $(document).ready(function(){

    $(".homeslider").on("change paste keyup", function() {
        var sliderid = $('#home-slider').val().replace(/,/g, "");
        var isactive = ($("#slider-isactive").prop('checked') == true) ? 1 : 0;
        var id = $('.homeslider').data('id'); 
        console.log(id);

        var homeslider = "maintype:slider| sliderid:"+sliderid+"| isactive:"+isactive;
        console.log(homeslider);     
        $("#item"+id).val(homeslider);
    });



    $(".featurecat").on("change paste keyup", function() {
        var ThisInput = $(this);
        var data_id = ThisInput.data('id');
        var type = $('.featurecat-type[data-id="'+data_id +'"]').val();
        var style = $('.featurecat-style[data-id="'+data_id +'"]').val();        
        var item = $('.featurecat-item[data-id="'+data_id +'"]').val().replace(/,/g, "");
        var label = $('.featurecat-label[data-id="'+data_id +'"]').val().replace(/,/g, "");        
        var isactive = ($('.featurecat-isactive[data-id="'+data_id +'"]').prop('checked') == true) ? 1 : 0;

        var data = "maintype:homecategory| type:"+type+"| style:"+style+"|item:"+item+"|label:"+label+"| isactive:"+isactive;
        console.log(data);     
        $("#item"+data_id).val(data);
    });



    $(".singlecat").on("change paste keyup", function() {
        var ThisInput = $(this);
        var data_id = ThisInput.data('id');
        var scatid = $('.singlecat-type[data-id="'+data_id +'"]').val();
        var isactive = ($('.singlecat-isactive[data-id="'+data_id +'"]').prop('checked') == true) ? 1 : 0;

        var data = "maintype:homesinglecategory| scatid:"+scatid+"| isactive:"+isactive;
        console.log(data);     
        $("#item"+data_id).val(data);
    });


    $(".article").on("change paste keyup", function() {
        var ThisInput = $(this);
        var data_id = ThisInput.data('id');

        var type = $('.article-type[data-id="'+data_id +'"]').val();
        var title = $('.article-title[data-id="'+data_id +'"]').val().replace(/,/g, "");
        var item = $('.article-item[data-id="'+data_id +'"]').val().replace(/,/g, "");
        var isactive = ($('.article-isactive[data-id="'+data_id +'"]').prop('checked') == true) ? 1 : 0;

        var data = "maintype:homearticle| type:"+type+"| title:"+title+"| item:"+item+"| isactive:"+isactive;
        console.log(data);     
        $("#item"+data_id).val(data);
    });


    $(".newsletter").on("change paste keyup", function() {
        var ThisInput = $(this);
        var data_id = ThisInput.data('id');

        var title = $('.newsletter-title[data-id="'+data_id +'"]').val().replace(/,/g, "");
        var heading = $('.newsletter-heading[data-id="'+data_id +'"]').val().replace(/,/g, "");
        var isactive = ($('.newsletter-isactive[data-id="'+data_id +'"]').prop('checked') == true) ? 1 : 0;

        var data = "maintype:homenewsletter| title:"+title+"| heading:"+heading+"| isactive:"+isactive;
        console.log(data);     
        $("#item"+data_id).val(data);
    });


  });
  /************************* END: Apperance: Home Page Settings ***************************/




  /************************* START: Apperance: Header Settings ***************************/
  $(document).ready(function(){
      $("#thumbnail").on("change paste keyup", function() {
          var logocontent = "maintype:logo| logo:"+$(this).val();        
          $("#item0").val(logocontent);
      });



      $('#header-menu').on('change', function() {
        //console.log( this.value );
        var pmenu = "maintype:menu| table:Menu | menuid:"+this.value;        
        $("#item1").val(pmenu);
      });



      $('#ui-social-submit').on('click', function() {
        console.log('Click Social Submit Button');

        var headsocialid = $('input[name="headersocial"]:checked').map(function() {
            return this.value;
        }).get().join(', ');

        var headsocial = "maintype:social| socialid: "+headsocialid+"| table:Social| align:vertical| style:icon| isactive:1";
        console.log(headsocial);
        $("#item2").val(headsocial);

        console.log(headsocialid);
        $('#item2').data('socialid',headsocialid); //set value in data
        console.log("Set value: "+ $('#item2').data('socialid'));

        $(".all-social").addClass("social-block");
        if (headsocial == 'null') {

        }//End of If
        else{
          $.each(headsocialid.split(","), function(i,e){
            //console.log(e);
            $("#social-block-"+$.trim(e)).removeClass("social-block");
          });
        }//End of else
      });


      //Click button to open the MODAL
      $(document).on("click", ".open-SocialCreatorDialog", function () {
        console.log('Click button to open the Social MODAL');

        var sval = $("#item2").val();
        console.log("Social Value: "+sval);

        var sid = $('#item2').data('socialid'); //get value in data
        console.log("Social ID: "+sid);
      });


  });
  /************************* END: Apperance: Header Settings ********************/





  //Click button to open the MODAL
  $(document).on("click", ".open-UICreatorDialog", function () {

    console.log('Click button to open the MODAL');

     var ItemID = $(this).data('itemid');
     console.log("ItemID: "+ItemID);

     //var ItemID = 0;
     $(".ui-creator-modal #uidata").val(ItemID);

     var uidata = $("#item"+$(".ui-creator-modal #uidata").val()).val();
     console.log(uidata);

     $('.ui-input-item, .ui-input-mitem, .ui-description').css({ display: 'none' });

     if (uidata == 'null') {
      $('.ui-heading, .ui-title, .ui-url, .ui-logo, .ui-description, .ui-item, .ui-address, .ui-phone, .ui-visible, .ui-email, .ui-ftext, .ui-furl, .ui-time, .ui-date').val('');     
      $("select.ui-align option:selected").prop("selected", false);
      $("select.ui-menuid option:selected").prop("selected", false);
      $("select.ui-style option:selected").prop("selected", false);
      $("select.ui-type option:selected").prop("selected", false);
      $("select.ui-social option:selected").prop("selected", false);
      $("select.ui-maintype option:selected").prop("selected", false);
     }//End of if
     else{
       var uieachdata = uidata.split("|");
       for (i=0; i<uieachdata.length; i++){
          var key = uieachdata[i].split(':')[0];
          var value = uieachdata[i].split(':')[1];
          console.log(key+' => '+value);

          var uiclass = '.ui-'+$.trim(key);
          console.log(uiclass);

          if($.trim(key)=="social") {
            $(uiclass).css({ display: 'block' });
            $.each(value.split(";"), function(i,e){
              $(".ui-social option[value='" + e + "']").attr("selected", true);
            });
          }
          else if($.trim(key)=="isactive"){
              if(value==0) { 
                $(".ui-isactive").prop('checked', false);
                console.log("Not Active: Key: "+key+" | Value: "+value); 
              }else{
                $(".ui-isactive").prop('checked', true);
                console.log("Active: Key: "+key+" | Value: "+value);
              }
          }
          else{
            $(uiclass).css({ display: 'block' });
            $(uiclass).val(value);
          }
       }//End of for
     }//End of else

    console.log("checked Value(ItemID): "+$(".ui-creator-modal #uidata").val());

  });




  // MODAL dropdown selection  
  jQuery(document).ready(function () {
    $('select.ui-maintype').on('change', function() {

    console.log('MODAL dropdown selection');
    $('.ui-input-item, .ui-input-desc').css({ display: 'none' });

    switch (this.value){
      case 'menu':
        $('.ui-heading, .ui-menuid, .ui-align, .ui-style').css({ display: 'block' });
        break;

      case 'text':
        $('.ui-heading, .ui-title, .ui-logo, .ui-description').css({ display: 'block' });
        break;

      case 'social':
        $('.ui-heading, .ui-social, .ui-item, .ui-align, .ui-style').css({ display: 'block' });      
        break;

      case 'contact':
        $('.ui-heading, .ui-address, .ui-phone, .ui-email, .ui-time, .ui-date').css({ display: 'block' });
        break;

      case 'tag':
        $('.ui-heading, .ui-table, .ui-item, .ui-type, .ui-style').css({ display: 'block' });
        break;

      case 'category':
        $('.ui-heading, .ui-table, .ui-item, .ui-type, .ui-style').css({ display: 'block' });
        break;

      case 'post':
        $('.ui-heading, .ui-table, .ui-item, .ui-type, .ui-style').css({ display: 'block' });
        break;

      case 'product':
        $('.ui-heading, .ui-table, .ui-item, .ui-type, .ui-style').css({ display: 'block' });
        break;

      case 'pagepost':
        $('.ui-heading, .ui-title, .ui-logo, .ui-typecontent, .ui-type, .ui-style, .ui-align, .ui-item, .ui-visible, .ui-ftext, .ui-furl').css({ display: 'block' });
        break;

      case 'pagetext':
        $('.ui-heading, .ui-title, .ui-logo, .ui-typecontent, .ui-description, .ui-ftext, .ui-furl').css({ display: 'block' });
        break;

      default:
        alert('Nobody Wins!');
    }//End of Switch

  });

  //maintype:menu, heading:kjhj jhj , table:0, menuid:2, align:vertical, style:icon, isactive:1

  // MODAL Submit button Click
  $('#ui-creator-submit').on('click', function() {
    event.preventDefault();
    var type = $(".ui-input-item-main").val();

    console.log('MODAL Submit button Click');

    switch (type){
      case 'menu':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var menuid = $('.ui-menuid').val();
        var table = $('.ui-table').val();
        var align = $('.ui-align').val();
        var style = $('.ui-style').val();
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;


        if(heading != '' && menuid != 'null' && align != 'null' && style != 'null'){
          var menu = 'maintype:menu| heading:'+heading+"| table:Menu | menuid:"+menuid+"| align:"+align+"| style:"+style+"| isactive:"+active;
          
          console.log(menu);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(menu);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+": "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+menu);
        }
        break;

      case 'text':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var title = $('.ui-title').val().replace(/,/g, "");
        var logo = $('.ui-logo').val().replace(/,/g, "");
        var description = $('.ui-description').val().replace(/,/g, "");
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(heading != '' && title != '' && logo != '' && description != ''){
          var text = 'maintype:text| logo:'+logo+'| heading:'+heading+"| title:"+title+"| description:"+description+"| isactive:"+active;
          
          console.log(text);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(text);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+": "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+text);
        }
        break;

      case 'social':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var socialid = $('.ui-social').val();
        var table = $('.ui-table').val();
        var item = $('.ui-item').val();
        var align = $('.ui-align').val();
        var style = $('.ui-style').val();
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        console.log(heading+" - "+socialid);

        if(heading != '' && socialid != '' && item != '' && align != '' && style != ''){
          var text = 'maintype:social| heading:'+heading+"| social:"+socialid+"| table:Social| item:"+item+"| align:"+align+"| style:"+style+"| isactive:"+active;
          
          console.log(text);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(text);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+": "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+text);
        }
        break;

      case 'contact':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var address = $('.ui-address').val().replace(/,/g, "");
        var phone = $('.ui-phone').val().replace(/,/g, "");
        var email = $('.ui-email').val().replace(/,/g, "");
        var time = $('.ui-time').val();
        var date = $('.ui-date').val();
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(heading != '' && address != '' && email != ''){
          var contact = 'maintype:contact| heading:'+heading+'| address:'+address+"| phone:"+phone+"| email:"+email+"| time:"+time+"| date:"+date+"| isactive:"+active;
          
          console.log(contact);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(contact);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+": "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+contact);
        }
        break;

      case 'tag':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var table = $('.ui-table').val();
        var type = $('.ui-type').val();
        var style = $('.ui-style').val();
        var item = $('.ui-item').val();
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(heading != '' && type != 'null' && style != 'null' && item != ''){
          var tag = 'maintype:tag| heading:'+heading+"| table:Tag| item:"+item+"| type:"+type+"| style:"+style+"| isactive:"+active;
          
          console.log(tag);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(tag);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+" tag: "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+tag);
        }
        break;

      case 'category':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var table = $('.ui-table').val();
        var type = $('.ui-type').val();
        var style = $('.ui-style').val();
        var item = $('.ui-item').val();
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(heading != '' && type != 'null' && style != 'null' && item != ''){
          var category = 'maintype:category| heading:'+heading+"| table:Category| item:"+item+"| type:"+type+"| style:"+style+"| isactive:"+active;
          
          console.log(category);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(category);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+" category: "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+category);
        }
        break;

      case 'post':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var table = $('.ui-table').val();
        var type = $('.ui-type').val();
        var style = $('.ui-style').val();
        var item = $('.ui-item').val();
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(heading != '' && type != 'null' && style != 'null' && item != ''){
          var post = 'maintype:post| heading:'+heading+"| table:Post| item:"+item+"| type:"+type+"| style:"+style+"| isactive:"+active;
          
          console.log(post);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(post);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+" post: "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+post);
        }
        break;


      case 'product':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var table = $('.ui-table').val();
        var type = $('.ui-type').val();
        var style = $('.ui-style').val();
        var item = $('.ui-item').val();
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(heading != '' && type != 'null' && style != 'null' && item != ''){
          var post = 'maintype:product| heading:'+heading+"| table:Product| item:"+item+"| type:"+type+"| style:"+style+"| isactive:"+active;
          
          console.log(post);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(post);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+" Product: "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+post);
        }
        break;


      case 'pagepost':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var title = $('.ui-title').val().replace(/,/g, ""); 
        var logo = $('.ui-logo').val().replace(/,/g, ""); 

        var typecontent = $('.ui-typecontent').val().replace(/,/g, "");
        var type = $('.ui-type').val();
        var style = $('.ui-style').val();
        var item = $('.ui-item').val();
        var align = $('.ui-align').val();
        var visible = $('.ui-visible').val();

        var ftext = $('.ui-ftext').val().replace(/,/g, "");          
        var furl = $('.ui-furl').val().replace(/,/g, ""); 
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(typecontent != '' && heading != '' && type != 'null' && style != 'null' && item != '' && visible != '' && align != ''){
          var post = 'maintype:pagepost| heading:'+heading+"| title:"+title+"| logo:"+logo+"| typecontent:"+typecontent+"| visible:"+visible+"| align:"+align+"| item:"+item+"| type:"+type+"| style:"+style+"| furl:"+furl+"| ftext:"+ftext+"| isactive:"+active;
          
          console.log(post);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(post);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(type+" post: "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(type+": "+post);
        }
        break;

      case 'pagetext':
        var heading = $('.ui-heading').val().replace(/,/g, "");
        var title = $('.ui-title').val().replace(/,/g, ""); 
        var logo = $('.ui-logo').val().replace(/,/g, ""); 

        var typecontent = $('.ui-typecontent').val().replace(/,/g, "");
        var description = $('.ui-description').val().replace(/,/g, "");

        var ftext = $('.ui-ftext').val().replace(/,/g, "");          
        var furl = $('.ui-furl').val().replace(/,/g, ""); 
        var active = ($(".ui-isactive").prop('checked') == true) ? 1 : 0;

        if(typecontent != '' && heading != '' && description != 'null'){
          var post = 'maintype:pagetext| heading:'+heading+"| title:"+title+"| logo:"+logo+"| typecontent:"+typecontent+"| description:"+description+"| furl:"+furl+"| ftext:"+ftext+"| isactive:"+active;
          
          console.log(post);
          console.log("ID: "+$(".ui-creator-modal #uidata").val());

          $("#item"+$(".ui-creator-modal #uidata").val()).val(post);
          $("#ui-title-"+$(".ui-creator-modal #uidata").val()).html(typecontent+" Text: "+heading);
          $("#ui-cdata-"+$(".ui-creator-modal #uidata").val()).append(typecontent+": "+post);
        }
        break;


      default:
        alert('Click Modal Submit - Nobody Wins!');

    }//End of 
  });


});