class Raindrops
  VERSION = 1

  def self.convert(drop_count)
    @sound = ""
    make_sound(drop_count)
    @sound == "" ? drop_count.to_s : @sound
  end

  def self.make_sound(drop_count)
    @sound += 'Pling' if drop_count % 3 == 0
    @sound += 'Plang' if drop_count % 5 == 0
    @sound += 'Plong' if drop_count % 7 == 0
  end
end
