public class NumericWrapperRange {
    public static void main(String[] args) {
        System.out.println("Byte range:");
        System.out.println("min: " + Byte.MIN_VALUE);
        System.out.println("max: " + Byte.MAX_VALUE);

        System.out.println("\nShort range:");
        System.out.println("min: " + Short.MIN_VALUE);
        System.out.println("max: " + Short.MAX_VALUE);

        System.out.println("\nInteger range:");
        System.out.println("min: " + Integer.MIN_VALUE);
        System.out.println("max: " + Integer.MAX_VALUE);

        System.out.println("\nLong range:");
        System.out.println("min: " + Long.MIN_VALUE);
        System.out.println("max: " + Long.MAX_VALUE);

        System.out.println("\nFloat range:");
        System.out.println("min: " + Float.MIN_VALUE);
        System.out.println("max: " + Float.MAX_VALUE);

        System.out.println("\nDouble range:");
        System.out.println("min: " + Double.MIN_VALUE);
        System.out.println("max: " + Double.MAX_VALUE);
    }
}
===================================================================================================
public class NumericConverter {
    public static void main(String[] args) {
        if (args.length != 1) {
            System.out.println("Usage: Java NumericConverter <number>");
            return;
        }

        try {
            int number = Integer.parseInt(args[0]);
            System.out.println("Given Number: " + number);
            System.out.println("Binary equivalent: " + Integer.toBinaryString(number));
            System.out.println("Octal equivalent: " + Integer.toOctalString(number));
            System.out.println("Hexadecimal equivalent: " + Integer.toHexString(number));
        } catch (NumberFormatException e) {
            System.out.println("Invalid input: " + args[0]);
        }
    }
}
=========================================================================================================
import java.util.Scanner;

public class BinaryRepresentation {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter an integer number between 1 and 255: ");
        int number = scanner.nextInt();
        scanner.close();

        if (number < 1 || number > 255) {
            System.out.println("Invalid input. Please enter a number between 1 and 255.");
            return;
        }

        String binary = String.format("%8s", Integer.toBinaryString(number)).replace(' ', '0');
        System.out.println("Binary representation: " + binary);
    }
}
==========================================================================================================================
class Employee implements Cloneable {
    private String name;
    private int age;

    public Employee(String name, int age) {
        this.name = name;
        this.age = age;
    }

    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
}

public class EmployeeCloneExample {
    public static void main(String[] args) {
       
        Employee originalEmployee = new Employee("John", 30);

        try {
            
            Employee clonedEmployee = (Employee) originalEmployee.clone();

         
            originalEmployee.setName("Jane");
            originalEmployee.setAge(25);

           
            System.out.println("Original Employee:");
            System.out.println("Name: " + originalEmployee.getName());
            System.out.println("Age: " + originalEmployee.getAge());

            System.out.println("\nCloned Employee:");
            System.out.println("Name: " + clonedEmployee.getName());
            System.out.println("Age: " + clonedEmployee.getAge());

        
        } catch (CloneNotSupportedException e) {
            e.printStackTrace();
        }
    }
}
===========================================================================================================================================