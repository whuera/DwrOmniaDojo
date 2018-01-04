
package ec.com.app.controller;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
 import javax.servlet.http.HttpServletResponse;
 
 /**
	 * The Class add.
	 */
 public class add extends HttpServlet {

/** The Constant serialVersionUID. */
	private static final long serialVersionUID = 1L;

/** The val 3. */
String val3;

/**
 * Process request.
 *
 * @param request
 *            the request
 * @param response
 *            the response
 * @throws ServletException
 *             the servlet exception
 * @throws IOException
 *             Signals that an I/O exception has occurred.
 */
protected void processRequest(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    response.setContentType("text/html;charset=UTF-8");
    PrintWriter out = response.getWriter();

    String val1=request.getParameter("val1");
    String val2=request.getParameter("val2");
    if(val1 != null && val2 != null)
    val3=""+(Integer.parseInt(val1)+Integer.parseInt(val2));
    else
    val3="";
    request.setAttribute("val3",val3);
    request.getRequestDispatcher("index.jsp").forward(request, response); 

    try {
    } finally {            
        out.close();
    }
}


/* (non-Javadoc)
 * @see javax.servlet.http.HttpServlet#doGet(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
 */
@Override
protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    processRequest(request, response);
}


/* (non-Javadoc)
 * @see javax.servlet.http.HttpServlet#doPost(javax.servlet.http.HttpServletRequest, javax.servlet.http.HttpServletResponse)
 */
@Override
protected void doPost(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
    processRequest(request, response);
}


/* (non-Javadoc)
 * @see javax.servlet.GenericServlet#getServletInfo()
 */
@Override
public String getServletInfo() {
    return "Short description";
}// </editor-fold>
}