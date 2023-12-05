function getrandomid()
{
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
var string_length = 8;
var randomstring = '';
var charCount = 0;
var numCount = 0;

for (var i=0; i<string_length; i++) {
    // If random bit is 0, there are less than 3 digits already saved, and there are not already 5 characters saved, generate a numeric value. 
    if((Math.floor(Math.random() * 2) == 0) && numCount < 3 || charCount >= 5) {
        var rnum = Math.floor(Math.random() * 10);
        randomstring += rnum;
        numCount += 1;
    } else {
        // If any of the above criteria fail, go ahead and generate an alpha character from the chars string
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
        charCount += 1;
    }
}
return randomstring;
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


function assignthiscontent(targetid)
{	
	console.log(targetid);
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}


function dorequest(url)
{
	var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {				
				if (xhttp.readyState == 4 && xhttp.status == 200) {	
					 var resultcontent = xhttp.responseText;
					 var cons = JSON.parse(resultcontent);
					 var target_id = cons.target_id;
					 var result = cons.output;
					 document.getElementById(target_id).innerHTML = result+'<p class="embed_ptag"></p>';				
					 var getdatatype =  document.getElementById(target_id).getAttribute("data-type");
						if(getdatatype=='test')
						{
							//http://www.hitbullseye.com/mba/quant/mixture-and-alligation.php?takeauto=Y&testid=624
							var takeauto = getUrlParameter('takeauto');
							var testid = getUrlParameter('testid');
							if(takeauto=='Y' && testid!='')
							{
								var submitelement = 'taketest'+testid;
								document.getElementById(submitelement).click();
							}
						}
					 
				}
			};
			xhttp.open("GET", url, true);			
			xhttp.send();
}

function loadTestScoreModal(testid,studentid){
	$.ajax({
		type: 'GET',
		url:window.location.protocol+"//mba.hitbullseye.com/articlescorecard/getArticlesScorecard.php",
		data:{studentid:studentid, testid:testid},
		success: function (response) {
			$('#Articlescorecardmodal').find('.scorecardtestname').html('Score Card');
			$('#Articlescorecardmodal').find('#modalbodyscoreid').html(response);
            $('#Articlescorecardmodal').modal();
		}
	});
	/*var options = {
		modal: true,
		resizable: false,
		height:300,
		fluid: true,
		width:500
	};
	
	//$('#Articlescorecardmodal').html("loading...");
	//$('#Articlescorecardmodal').load('//mba.hitbullseye.com/cat-courses/lib/getscorecard.php?testid='+testid).dialog(options).dialog('open');*/
}


function loadDoc() {

			var fileurl=window.location.protocol+"//mba.hitbullseye.com/";
		var cusid_ele = document.getElementsByClassName('embeduniquecontent');
		for (var i = 0; i < cusid_ele.length; ++i) {
			var gettypeofcontent = cusid_ele[i];
			var newid = getrandomid();
			gettypeofcontent.id = newid;
		}
	
		for (var i = 0; i < cusid_ele.length; ++i) {
			var thisid = document.getElementsByClassName("embeduniquecontent")[i].id;
			var gettypeofcontent = document.getElementById(thisid);
			var contenttype = document.getElementById(thisid).getAttribute("data-type");
			var contentid = document.getElementById(thisid).getAttribute("data-id");
			var filename = '';
			var is_log =  getCookie('logged_in_user');

			if(contenttype=="pdf")
			{				
			    var pdfbackimage = document.getElementById(thisid).getAttribute("data-background-image");
				var additional = ''
				if(pdfbackimage!=null && pdfbackimage!="")
				{
					additional = '&pdfbackimage='+pdfbackimage;
				}
				filename = fileurl+"embed/pdf.php?pdfid="+contentid+"&target_id="+thisid+'&is_log='+is_log+additional;
				
			}
			else if (contenttype=="test")
			{
				filename = fileurl+"embed/test.php?testid="+contentid+"&target_id="+thisid+'&is_log='+is_log;
			}
			else if (contenttype=="video")
			{
				var width = document.getElementById(thisid).getAttribute("data-width");
				var height = document.getElementById(thisid).getAttribute("data-height");
				var hasaccess = document.getElementById(thisid).getAttribute("data-hasaccess");
				filename = fileurl+"embed/video.php?videoid="+contentid+"&width="+width+"&height="+height+"&target_id="+thisid+'&is_log='+is_log+'&hasaccess='+hasaccess;
			}
			else if (contenttype=="videonew")
			{
				var width = document.getElementById(thisid).getAttribute("data-width");
				var height = document.getElementById(thisid).getAttribute("data-height");
				filename = fileurl+"embed/videonew.php?videoid="+contentid+"&width="+width+"&height="+height+"&target_id="+thisid+'&is_log='+is_log;
			}
			else
			{
				filename = "";
			}
			document.getElementById(thisid).innerHTML = '<img src="'+fileurl+'/embed/loader.gif">';						
			dorequest(filename);
			
        }
		
}

loadDoc();

