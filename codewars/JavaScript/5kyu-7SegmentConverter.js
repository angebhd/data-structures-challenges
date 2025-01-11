function sevenSegmentNumber(number) {
  let bitStream;
  switch(number){
      case 0:
        bitStream = '1111101';
        break;
      case 1:
        bitStream = '1010000';
        break;
      case 2:
        bitStream = '0110111';
        break;
      case 3:
        bitStream = '1010111';
        break;
      case 4:
        bitStream = '1011010';
        break;
      case 5:
        bitStream = '1001111';
        break;
      case 6:
        bitStream = '1101111';
        break;
      case 7:
        bitStream = '1010001';
        break;
      case 8:
        bitStream = '1111111';
        break;
      case 9:
        bitStream = '1011111';
        break;      
  }
  
//   function
  return parseInt(bitStream, 2);
  
}