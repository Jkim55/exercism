import java.util.HashMap;
import java.util.stream.Collectors;

public class RnaTranscription {
    HashMap<Integer, String> transcriber = createTranscriber();

    public String transcribe(String dnaStrand) {
        if (dnaStrand == null || dnaStrand.isEmpty()) {
            return "";
        }

        return dnaStrand.chars()
                .mapToObj(transcriber::get)
                .collect(Collectors.joining());
    }


    private static HashMap<Integer, String> createTranscriber() {
        return new HashMap<Integer, String>() {{
            put((int) 'G', "C");
            put((int) 'C', "G");
            put((int) 'T', "A");
            put((int) 'A', "U");
        }};
    }
}
