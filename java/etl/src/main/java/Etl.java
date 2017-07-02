import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Etl {
   public Map<String, Integer> transform(Map<Integer, List<String>> input) {
      Map<String, Integer> transformed = new HashMap<String, Integer>();
       input.forEach((score, letters) -> letters.forEach(letter -> transformed.put(letter.toLowerCase(), score)));
      return transformed;
   }
}
