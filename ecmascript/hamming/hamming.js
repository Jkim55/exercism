export default class Hamming {
  compute(d1, d2){
    if (d1.length === d2.length){
      return [...d1].filter((nucleotide, i) => nucleotide !== d2[i]).length
    }
    throw new Error ('DNA strands must be of equal length.')
  }
}
