import java.util.Arrays;
import java.util.HashMap;

public class RnaTranscription {
    HashMap<String, String> transcriber = createTranscriber();

    public String transcribe(String dnaStrand) {
        if (dnaStrand == null || dnaStrand.isEmpty()) {
            return "";
        }
        return Arrays.stream(dnaStrand.split(""))
                .map(c -> transcribeRNA(c))
                .reduce("", (a, b) -> a + b);
    }

    private String transcribeRNA(String nucleotide){
        return transcriber.get(nucleotide);
    }

    private static HashMap<String, String> createTranscriber() {
        HashMap<String,String> transcriberMap = new HashMap<String, String>();
        transcriberMap.put("C", "G");
        transcriberMap.put("G", "C");
        transcriberMap.put("T", "A");
        transcriberMap.put("A", "U");
        return transcriberMap;
    }

}
