package javaFundamentals.LanguageBasics;

import java.util.Arrays;

public class Languagebasics_1 {

	public static void main(String[] args) {
		System.out.println(Arrays.toString(args));
		if(args.length !=2)
		{
			System.out.println("2 arguments required");
			return;
		}
		
		String first_string_arg = args[0];
		String second_string_arg = args[1];
		
		String outputString = first_string_arg + " Technology " + second_string_arg;
		
		System.out.println(outputString);
		
	}

}
