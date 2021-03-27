const partLookup = (value) => {
  switch (value) {
    case 255:
      return 4;

    case 220:
      return 2;

    case 210:
      return 0;

    case 200:
      return 5;

    case 190:
      return 3;

    case 180:
      return 1;

    case 170:
      return 16;

    case 160:
      return 15;

    case 150:
      return 14;

    case 140:
      return 9;

    case 130:
      return 13;

    case 120:
      return 11;

    case 110:
      return 12;

    case 100:
      return 8;

    case 90:
      return 10;

    case 80:
      return 7;

    case 70:
      return 6;

    case 60:
      return 17;
    default:
  }
};

export default partLookup;
