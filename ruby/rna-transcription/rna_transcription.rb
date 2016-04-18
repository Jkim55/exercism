class Complement
VERSION = 3

  def self.of_dna(dna)
    dna_letter = dna.chars
    dna_letter.map do |letter|
      find_complement(letter)
    end.join
  end

  def self.find_complement(char)
    hash = {'G'=>'C', 'C'=>'G', 'T'=>'A', 'A'=>'U'}
    if hash.key?(char)
      hash[char]
    else
      raise ArgumentError
    end
  end
end
