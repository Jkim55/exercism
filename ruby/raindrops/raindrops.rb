class Raindrops
  VERSION = 1

  # def self.sound_library
  #   {
  #     3 => "Pling",
  #     5 => "Plang",
  #     7 => "Plong"
  #   }
  # end
  #
  # def self.convert(num)
  #   sound = ""
  #   sound_library.each do |key, value|
  #     sound << value if num % key == 0
  #   end
  #   checkString_validity(sound, num)
  # end
  #
  # def self.checkString_validity(sound, num)
  #   sound.empty? ? num.to_s : sound
  # end
# end

require 'pry'

obj = { 3 => "Pling", 5 => "Plang", 7 => "Plong"}

obj = obj.map do |num, sound|
  if num.odd?
    {num + 1 => sound}
  else
    {num => sound}
  end
end

new_obj = obj.inject(:merge)
p new_obj
