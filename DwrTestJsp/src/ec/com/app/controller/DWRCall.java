package ec.com.app.controller;

import ec.com.app.model.Address;
import ec.com.app.model.Person;

public class DWRCall {
	
	/**
	 * Gets the string.
	 *
	 * @return the string
	 */
	public String getString() 
	{
		String value = null;
		Address addressoffice = new Address("amazonas-pereira");
		try {
			Thread.sleep(10000);
			Person person = new Person("1","Pedro Perez", "centro", 20, true, addressoffice);
			value = person.toString();
		} catch (Exception e) {
			
			value = "Error in callback";
			e.printStackTrace();
			 throw new NullPointerException("error in call obkect person");
		}
	 return value;
	 }
	
	 public String getData() {
		    throw new NullPointerException("message");
		  }

}
