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
			Thread.sleep(100000);
			value = "DWR implemented, String returned from server.";
		} catch (Exception e) {
			
			value = "Error in callback";
			e.printStackTrace();
		}
	 return value;
	 }

}
