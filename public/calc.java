import java.util.Scanner;

public class calc {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);

        while (true) {
            System.out.print("which (rem or tw): ");
            String input = in.nextLine();

            if (input.equals("done")) {
                break;
            }

            if (input.equals("rem")) {
              System.out.print("num: ");
              String rem = in.nextLine();

              double num = Double.parseDouble(rem);
              System.out.println(num / 16.0);

            } else if (input.equals("tw")) {
              System.out.print("num: ");
              String tw = in.nextLine();

              double num = Double.parseDouble(tw);
              System.out.println(num / 4.0);
            }
        }

        in.close();
    }
}