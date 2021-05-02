//fetch form data in google sheets
function SubForm (){
    $.ajax({
        url:'https://api.apispreadsheets.com/data/11720/',
        type:'post',
        data:$("#myForm").serializeArray(),
        success: function(){
          alert("Form Data Submitted :)")
        },
        error: function(){
          alert("There was an error :(")
        }
    });
}
//loader
