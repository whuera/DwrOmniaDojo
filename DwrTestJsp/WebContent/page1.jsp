<%@page contentType="text/html" pageEncoding="UTF-8"%>

    <!DOCTYPE html>
    <html>
        <head>
           <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <title>JSP Page</title>
           
            <script type='text/javascript' src='js/engine.js'> </script>
  <script type='text/javascript' src='js/util.js'> </script>
    <script type='text/javascript' src='js/DWRCall.js'></script>
    <script type="text/javascript" src="js/dojo/dojo/dojo.js" data-dojo-config="parseOnLoad: true, async: true"></script>
    <!--   link rel="stylesheet" href="style.css" media="screen" -->
  

           
            <script type="text/javascript">
 function callMethod(){
	
 DWRCall.getString(getData);
 }
 function getData(data)
 {
 document.getElementById("dwrdemo").innerHTML = data;
 }
 </script> 
 <script type="text/javascript">
 var dojoConfig = {
		    async: true,
		    baseUrl: '.',
		    packages: [
		        'dojo',
		        'dijit',
		        'dojox',
		        'demo'
		    ]
		};

 </script>
 <script type="text/javascript">
 require([
	    'dojo/dom',
	    'dojo/domReady!'
	], function (dom) {
	 callMethod();
	    var greeting = dom.byId('greeting');
	    greeting.innerHTML += ' Dojo!';
	});
 </script>
       </head>
    <body class="claro">
      <h3>DWR Implementation</h3><br>
<br> <input type="button" value="getData" onclick="callMethod()"> <br>
<div id="dwrdemo"></div> <hr>
<h1 id="greeting">Test</h1>
  </body>
</html>