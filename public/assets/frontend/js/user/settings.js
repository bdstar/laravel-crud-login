$(document).ready(function(){
 
    //-----------------------------------------------------------
    // START: Save Home Page Content
    //-----------------------------------------------------------
    $(document).on('click','#save-home-page',function(){
        event.preventDefault();
        swal({
            title: 'Are you sure to Save the Home Page?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Save it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
            reverseButtons: true
        }).then((result) => {
            if (result.value) {
                event.preventDefault();

                /************* Start: Section-0 **********/
                var company_name = $.trim($('#home-edit-company-name').text());
                var company_title = $.trim($('#home-edit-co-title').text());

                var sub_category = [];
                var val = [];
                $(".sub_category_selector:checked").each(function(){
                  sub_category.push($(this).val())
                });
                //console.log("Sub Category: "+ sub_category);
                /************* End: Section-0 **********/

                /************* Start: Section-1 **********/
                var first_active = ($("#first-checkbox").prop('checked') == true) ? 1 : 0;
                var category_section_title = $.trim($('#home-edit-category-title').text());
                console.log(category_section_title);

                var first_category = [];
                var val = [];
                $(".first_category_selector:checked").each(function(){
                  first_category.push($(this).val())
                });
                console.log("First Category: "+ first_category);
                /************* Start: Section-1 **********/

                /************* Start: Section-2 **********/
                var second_active = ($("#second-checkbox").prop('checked') == true) ? 1 : 0;
                var second_category = [];
                var val = [];
                $(".second_category_selector:checked").each(function(){
                  second_category.push($(this).val())
                });
                console.log("Second Category: "+ second_category);
                /************* Start: Section-2 **********/


                /************* Start: Section-3 **********/
                var post_display = $('select[name=three_one_post_display]').val();
                var card_color = $('select[name=three_one_card_color]').val();
                //console.log(post_display);
                //console.log(card_color);

                var three_one_text = $.trim($('#three-one-text').text());
                //console.log(three_one_text);

                var three_two_social = [];
                var val = [];
                $(".social_media_selector:checked").each(function(){
                  three_two_social.push($(this).val())
                });
                //console.log("Second Category: "+ three_two_social);

                var three_two_checkbox = ($("#three-two-checkbox").prop('checked') == true) ? 1 : 0;
                var three_checkbox = ($("#three-checkbox").prop('checked') == true) ? 1 : 0;
                /*************  End: Section-3  **********/

                /************* Start: Section-4 ***********/
                var four_post_display = $('select[name=four_post_display]').val();
                var four_active = ($("#four-checkbox").prop('checked') == true) ? 1 : 0;
                console.log(four_active);
                /************* End: Setion-4 **************/

                /************* Start: Section-5 ***********/
                var five_active = ($("#five-checkbox").prop('checked') == true) ? 1 : 0;
                var five_post_display = $('select[name=five_one_post_display]').val();
                var five_two_text = $.trim($('#five-two-text').text());
                var five_two_fb = ($("#fb-like-checkbox").prop('checked') == true) ? 1 : 0;
                /************* End: Setion-5 **************/

                /************* Start: Section-6 ***********/
                var six_post_items = $('select[name=six_post_items]').val();
                var six_post_display = $('select[name=six_post_display]').val();
                var six_post_selector = ($("#six-post-checkbox").prop('checked') == true) ? 1 : 0;
                /************* End: Section-6 *************/

                /************* Start: Section-7 ***********/
                var seven_post_active = ($("#seven-post-checkbox").prop('checked') == true) ? 1 : 0;
                /************* End: Section-7 ***********/

                /************* Start: Section-8 ***********/
                var eight_active = ($("#eight-checkbox").prop('checked') == true) ? 1 : 0;
                var subscribe_title = $.trim($('#subscribe-title').text());
                //console.log(subscribe_title);
                var subscribe_description = $.trim($('#subscribe-description').text());
                //console.log(subscribe_description);
                /************* End: Section-8 ***********/

                $.ajax({
                    type:'POST',
                    url:'admin/pagesedit',
                    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                    data:{
                        // Section-0
                        company_name:company_name,
                        company_title:company_title,
                        sub_category:sub_category,

                        // Section-1
                        first_active: first_active,
                        category_section_title: category_section_title,
                        first_category: first_category,

                        // Section-2
                        second_active: second_active,
                        second_category: second_category,

                        // Section-3
                        post_display: post_display,
                        card_color: card_color,
                        three_one_text: three_one_text,
                        three_two_social: three_two_social,
                        three_two_checkbox: three_two_checkbox,
                        three_checkbox: three_checkbox,

                        // Section-4
                        four_post_display: four_post_display,
                        four_active: four_active,

                        // Section-5
                        five_active: five_active,
                        five_post_display: five_post_display,
                        five_two_text: five_two_text,
                        five_two_fb: five_two_fb,

                        // Section-6
                        six_post_items: six_post_items,
                        six_post_display: six_post_display,
                        six_post_selector: six_post_selector,

                        // Section-7
                        seven_post_active: seven_post_active,

                        // Section-8
                        eight_active: eight_active,
                        subscribe_title: subscribe_title,
                        subscribe_description: subscribe_description
                    },
                    success:function(data){
                        console.log(data.home);
                        result.dismiss === swal.DismissReason.cancel
                    }
                });
            } 
            else if (
                // Read more about handling dismissals
                result.dismiss === swal.DismissReason.cancel
            ) 
            {
                swal(
                    'Cancelled',
                    'No Data has been saved:)',
                    'error'
                )
            }
        })
    });

    //-----------------------------------------------------------
    // END: Save Home Page Content
    //-----------------------------------------------------------




    //-----------------------------------------------------------
    // START: database save with notification
    //-----------------------------------------------------------
    $(document).on('click','#contact-us',function(){
        event.preventDefault();
        $("#contact-us-submit").css('display','block');
        var contact_name = $('#contact-name').val();
        var contact_email = $('#contact-email').val();
        var contact_msg = $('#contact-msg').val();

        console.log(contact_name+' = '+contact_email+' = '+contact_msg);

        $.ajax({
            type:'POST',
            url:'contactsubmit',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
            data:{
                name: contact_name,
                email: contact_email,
                msg: contact_msg
            },
            success:function(data){
                $("#contact-us-submit").css('display','none');
                toastr.success("Thank you! We have received your message", {timeOut: 2000});
                console.log(data.result);

            }
        });
    }); 

    //-----------------------------------------------------------
    // END: database save with notification
    //-----------------------------------------------------------




    //-----------------------------------------------------------
    // START: the body of this function is in material-kit.js
    //-----------------------------------------------------------
    // materialKit.initSliders();
    window_width = $(window).width();

    if (window_width >= 992){
        big_image = $('.wrapper > .header');

        $(window).on('scroll', materialKitDemo.checkScrollForParallax);
    }
    //-----------------------------------------------------------
    // END: the body of this function is in material-kit.js
    //-----------------------------------------------------------



    //----------------------------------------
    // START: Return-To-Top
    //----------------------------------------
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200);    // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200);   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 100);
    });
    //----------------------------------------
    // END: Return-To-Top
    //----------------------------------------



    //-----------------------------------------------------------
    // START: beautyOfCode: jQuery Plugin for Syntax Highlighting
    //-----------------------------------------------------------
    $.beautyOfCode.init({
        theme: 'Django',
        noGutter: false, // hide line numbers?
        addControls: true, // copy, view plain, ...
        collapse: false, // show controls with expand link
        showColumns: false, // show column numbers
        firstLine: 1, // start with another line number?
        brushes: ['Xml', 'JScript', 'CSharp', 'Plain', 'Php'],
        ready: function() {
            $.beautyOfCode.beautifyAll();
            $(".someCode").beautifyCode('javascript', {gutter:true});
        }
    });
    //---------------------------------------------------------
    // END: beautyOfCode: jQuery Plugin for Syntax Highlighting
    //---------------------------------------------------------


    //----------------------------------------
    // Start: Affix jQuery Plugin
    //----------------------------------------
    $(".blog-post-left-sidebar, .right-sidebar").stick_in_parent();
    
    $(".profile-discover, .profile-leftside").stick_in_parent();
    //----------------------------------------
    // End: Affix jQuery Plugin
    //----------------------------------------


    //----------------------------------------
    // START: post Category carousel
    //----------------------------------------
   
    // Horizental/Vertical

    $(".owl-horizental-carousel").owlCarousel({
        autoPlay: 2500,
        items : 2,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],

        //Pagination
        pagination : true,
        paginationNumbers: true,
        nav:true,
    });



    var dd = $('.vertical-carousel').easyTicker({
        direction: 'up',
        easing: 'easeInOutBack',
        speed: 'slow',
        interval: 2000,
        height: 'auto',
        visible: 3,
        mousePause: 0,
        controls: {
            up: '.up',
            down: '.down',
            toggle: '.toggle',
            stopText: 'Stop !!!'
        }
    }).data('easyTicker');
    








    $(".owl-popular-post").owlCarousel({
        autoPlay: 2500,
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,2],

        //Pagination
        pagination : true,
        paginationNumbers: true,
        nav:true,
    }); 


    
    $(".owl-video").owlCarousel({
        autoPlay: 3500,
        items : 4,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3],
        stopOnHover:true,

        //Pagination
        pagination : true,
        paginationNumbers: true,
        nav:true,
    }); 
    //----------------------------------------
    // End: post Category carousel
    //----------------------------------------



    //----------------------------------------
    // Start: Connected Social Media
    //----------------------------------------
	// Animate the element's value from x to y:
	$({ someValue: 0 }).animate({ someValue: Math.floor(Math.random() * 3000) }, {
	    duration: 3000,
	    easing: 'swing', // can be anything
	    step: function () { // called on every step
	        // Update the element's text with rounded-up value:
	        $('.count').text(commaSeparateNumber(Math.round(this.someValue)));
	    }
	});

    var max_count = $('.download-count').attr("count");
   // console.log(max_count);
    $({ someValue: 0 }).animate({ someValue: Math.floor(max_count) }, {
        duration: 3000,
        easing: 'swing', // can be anything
        step: function () { // called on every step
            // Update the element's text with rounded-up value:
            $('.download-count').text(commaSeparateNumber(Math.round(this.someValue))); 
        }
    });


	function commaSeparateNumber(val) {
	    while (/(\d+)(\d{3})/.test(val.toString())) {
	        val = val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
	    }
	    return val;
	}
    //----------------------------------------
    // End: Connected Social Media
    //----------------------------------------




    //----------------------------------------
    // START: post carousel
    //----------------------------------------
	$('.ticker1, .ticker2').easyTicker({
		direction: 'up',
		easing: 'swing',
		speed: 'slow',
		interval: 2000,
		height: 'auto',
		visible: 0,
		mousePause: 1,
		controls: {
			up: '',
			down: '',
			toggle: '',
			playText: 'Play',
			stopText: 'Stop'
		}
	});
    //----------------------------------------
    // END: post carousel
    //----------------------------------------

});




/*============= START: Favorite Script ============ */

function myFavorite(attachmentid)
{
    let baseurl = window.location.origin
    let url = baseurl+'/favorite/'+ attachmentid;

    let token = document.head.querySelector('meta[name="csrf-token"]').content;
    let data = {_token : token, attachmentid : attachmentid};

    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .then(response => {
        if(response.save)
        {
            changefavour(response,attachmentid);

        }
    })
    .catch(error => console.error('Error:', error));
}

function changefavour(response,attachmentid)
{
    massage = response.massage;
    toastr.success(massage, {timeOut: 2000});
    randompost = document.getElementById("random"+attachmentid);
    randompost.className = '';
    response.favorite[1]? randompost.className = 'favorite_posts' : '';
    randompost.nextSibling.nextSibling.innerHTML = response.favorite[0];
    console.log(randompost.nextSibling.nextSibling.innerHTML);
}
/*============= End: Favorite Script ============ */



/*============= START: Like/Dislike Script ============ */
function insertfabo2(attachmentid,status)
{
    let url = '/favoritecreate/'+ attachmentid + '/' + status ;
    let token = document.head.querySelector('meta[name="csrf-token"]').content;
    let data = {_token : token, attachmentid : attachmentid};
    fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
        'Content-Type': 'application/json'
    }
    }).then(res => res.json())
    .then(response => {
        if(response.save)
        {

           changenum(response,attachmentid);
        }

    })
    .catch(error => console.error('Error:', error));
}

function changenum(response,attachmentid){
    likecount = document.getElementById('likecount'+ attachmentid);
    dislikecount = document.getElementById('dislikecount' + attachmentid);
    massage = response.massage;
    toastr.success(massage, {timeOut: 2000});
    likecount.className =dislikecount.className ='';
    response.like[1]? likecount.className = 'favorite_posts' : '';
    response.dislike[1]? dislikecount.className = 'favorite_posts' : '';
    console.log(likecount.nextSibling);
    likecount.nextSibling.nextSibling.innerHTML = response.favorite[0] = response.like[0];
    dislikecount.nextSibling.nextSibling.innerHTML = response.favorite[0] = response.dislike[0];
}
/*============= END: Like/Dislike Script ============ */