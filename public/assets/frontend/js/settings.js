    $(document).ready(function() {

        // Javascript method's body can be found in assets/js/demos.js
        /*demo.initDashboardPageCharts();

        demo.initVectorMap();*/

        /********* Start: CKEditor **********/
        /*CKEDITOR.replace( 'editor1' );*/
        /*********** End: CKEditor **********/

    });






/*
$(document).ready(function() {
    $('#datatables').DataTable({
        "pagingType": "full_numbers",
        "lengthMenu": [
            [10, 25, 50, -1],
            [10, 25, 50, "All"]
        ],
        responsive: true,
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search records",
        }

    });


    var table = $('#datatables').DataTable();

    // Edit record
    table.on('click', '.edit', function() {
        $tr = $(this).closest('tr');

        var data = table.row($tr).data();
        alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
    });

    // Delete a record
    table.on('click', '.remove', function(e) {
        $tr = $(this).closest('tr');
        table.row($tr).remove().draw();
        e.preventDefault();
    });

    //Like record
    table.on('click', '.like', function() {
        alert('You clicked on Like button');
    });

    $('.card .material-datatables label').addClass('form-group');
});


$(function () {
    $('.datetimepicker').datetimepicker();

    $('.datepicker').datetimepicker({
      format: 'YYYY-MM-DD'
    });

    $('.timepicker').datetimepicker({
        format: 'LT'
    });
});*/

/*
$(document).ready(function() {
    md.initSliders()
    demo.initFormExtendedDatetimepickers();
});   
*/