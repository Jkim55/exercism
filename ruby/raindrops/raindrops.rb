class Raindrops
  VERSION = 1

  def self.convert(count)
    if count % 3 == 0 && count % 5 == 0 && count % 7 == 0
      'PlingPlangPlong'
    elsif count % 3 == 0 && count % 5 == 0
      'PlingPlang'
    elsif count % 3 == 0 && count % 7 == 0
      'PlingPlong'
    elsif count % 5 == 0 && count % 7 == 0
      'PlangPlong'
    elsif count % 3 == 0
      'Pling'
    elsif count % 5 == 0
      'Plang'
    elsif count % 7 == 0
      'Plong'
    else
      count.to_s
    end
  end
end
