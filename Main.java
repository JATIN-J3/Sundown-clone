import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Stack;

class Main {
    public static void main(String[] args) {
        String[] x = { "hyy", "byy", "vhayy", "gaay" };
        StringBuilder sb = new StringBuilder();
        for (String i : x) {
            sb.append(i + " ");
        }
        String s = new String(sb);
        System.out.println(s);
        System.out.println(s.charAt(0));
    }
}