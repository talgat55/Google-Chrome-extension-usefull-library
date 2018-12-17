
 
jQuery(document).ready(function(){
    "use strict"; 
 
Initchangecat();
Initeditor();
Initeselect();





// end redy function
});

//------------------
//    Accordion Main BLocks
//-------------------
function Initchangecat(){
    "use strict";
    jQuery('input[name=kindscat]').change(function() {
        var thisval = jQuery(this).val();
        if(thisval == 'exist'){
            jQuery('.cat-select').show();
            jQuery('.new-cat').hide();
        }else{
            jQuery('.cat-select').hide();
            jQuery('.new-cat').show();
        }

    })
}

//------------------
//    Editor
//-------------------
function Initeditor() {
    "use strict";
    tinymce.init({
        selector: "textarea",  // change this value according to your HTML
        plugins: 'image code',
        valid_elements: '*[*]',
        // without images_upload_url set, Upload tab won't show up
        images_upload_url: 'postAcceptor.php',

        // we override default upload handler to simulate successful upload
        images_upload_handler: function (blobInfo, success, failure) {
            setTimeout(function () {
                // no matter what you upload, we will turn it into TinyMCE logo :)
                success('http://moxiecode.cachefly.net/tinymce/v9/images/logo.png');
            }, 2000);
        },
        //
        // init_instance_callback: function (ed) {
        //     ed.execCommand('mceImage');
        // }
    });

}


//------------------
//    Select
//-------------------
function Initeselect() {
    "use strict";
    jQuery('.cat-select').select2({
        ajax: {
        url: '/example/api',
        dataType: 'json'
    }});

}
