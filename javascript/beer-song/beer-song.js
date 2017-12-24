function BeerSong() {
}

BeerSong.prototype.formLyrics = function (bottleCount) {
  switch (bottleCount) {
    case 2:
      return '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n';
      break;
    case 1:
      return '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
      break;
    case 0:
      return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
    default:
      return bottleCount + ' bottles of beer on the wall, ' + bottleCount + ' bottles of beer.\nTake one down and pass it around, '+ (bottleCount -1) + ' bottles of beer on the wall.\n';
    }
}

BeerSong.prototype.verse = function(bottleCount){
  return this.formLyrics(bottleCount);
}

BeerSong.prototype.sing = function(start, stop){
  while(start >= stop ){
    console.log('start: ', start)
    console.log('stop: ', stop)

    var currentLine = this.formLyrics(start)
    return currentLine
  }
}

module.exports = BeerSong
