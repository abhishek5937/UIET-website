
function display() {
  DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200');
  message = "<ul><li><b>NAME: </b>" + document.form1.firstname.value + document.form1.lastname.value;
  message += "<li><b>ROLL NUMBER: </b>" + document.form1.rollno.value;
  message += "<li><b>BRANCH: </b>" + document.form1.branch.value;
  message += "<li><b>COURSE: </b>" + document.form1.course.value;
  message += "<li><b>YEAR: </b>" + document.form1.year.value;
  message += "<li><b>CATEGORY: </b>" + document.form1.category.value;
  message += "<li><b>GENDER: </b>" + document.form1.gender.value;
  message += "<li><b>DATE OF BIRTH: </b>" + document.form1.dob.value;
 
  var lang =  document.getElementsByName('language');
    var txt = "";
    var i;
    for (i = 0; i < lang.length; i++) {
        if (lang[i].checked==true) {
			txt = txt + lang[i].value + " ";
        }
	
    }
  message += "<li><b>LANGUAGES: </b>" + txt;
  message += "<li><b>USERNAME: </b>" + document.form1.username.value;
  DispWin.document.write(message);
}
