package ec.com.app.main;

import ec.com.app.controller.DWRCall;

public class Main {
	
	public static void main (String [] args){
		DWRCall dwrcall = new DWRCall();
		System.out.println(dwrcall.getString());
	}

}
