<%@page contentType="text/html" pageEncoding="UTF-8"%>

    <!DOCTYPE html>
    <html>
        <head>
           <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
           <title>JSP Page</title>
           
            <script type='text/javascript' src='js/engine.js'> </script>
  <script type='text/javascript' src='js/util.js'> </script>
    <script type='text/javascript' src='js/DWRCall.js'></script>
  

           
            <script type="text/javascript">
 function callMethod(){
	
 DWRCall.getString(getData);
 }
 function getData(data)
 {
 document.getElementById("dwrdemo").innerHTML = data;
 }
 </script> 
       </head>
    <body>
      <h3>DWR Implementation</h3><br>
<br> <input type="button" value="getData" onclick="callMethod()"> <br>
<div id="dwrdemo"></div> <hr>
  </body>
</html>