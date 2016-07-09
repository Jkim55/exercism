class Squares
attr_reader :num
require 'pry'

  def initialize (num)
    @num = num
  end

  def setup_arr(num)
    arr = []
    if (num>=1)
      arr << num #do arr<<num, num-=1 repeatedly until num = 0
      num -= 1
    end
    arr * 2
  end

  def square_of_sum
    base_arr = setup_arr(num)
    # binding.pry
    base_arr.inject(:+)**2 # base_arr = arr of num decremented
  end
end
