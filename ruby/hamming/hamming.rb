class Hamming
  VERSION = 1
  def self.compute(a, b)
    raise ArgumentError if a.length != b.length
    a.chars.zip(b.chars).select do |pair|
      pair[0] != pair[1]
    end.count
  end
end



# raise ArgumentError if a.length != b.length
# count = 0
# gene_pairs = a.chars.zip(b.chars)
# gene_pairs.each do |gene_pair|
#   count += 1 if gene_pair[0] != gene_pair[1]
# end
# count
