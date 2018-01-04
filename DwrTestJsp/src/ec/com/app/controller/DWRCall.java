package ec.com.app.controller;


public class DWRCall {
	
	/**
	 * Gets the string.
	 *
	 * @return the string
	 */
	public String getString() 
	{
		String value = null;
		try {
			Thread.sleep(10000);
			value = "Respuesta desde el servidor 22222.";
		} catch (Exception e) {
			
			value = "Error in callback";
			e.printStackTrace();
		}
	 return value;
	 }

}
