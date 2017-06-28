import java.util.HashMap;

public class RnaTranscription {
    HashMap<Character, Character> transcriber = createTranscriber();

    public String transcribe(String dnaStrand) {
      char[] dnaArray = dnaStrand.toCharArray();
      for(int i=0; i<dnaArray.length; i++){
         dnaArray[i] = transcribeRNA(dnaArray[i]);
      }
      return new String(dnaArray);
    }

    private char transcribeRNA(char nucleotides){
        return transcriber.get(nucleotides);
    }

    private static HashMap<Character, Character> createTranscriber() {
        HashMap<Character,Character> transcriberMap = new HashMap<Character,Character>();
        transcriberMap.put('C', 'G');
        transcriberMap.put('G', 'C');
        transcriberMap.put('T', 'A');
        transcriberMap.put('A', 'U');
        return transcriberMap;
    }

}
