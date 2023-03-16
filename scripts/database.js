// database.js

const database = {
  paintColor: ["Silver", "Midnight Blue", "Firebrick Red", "Spring Green"],
  interior: ["Beige Fabric", "Charcoal Fabric", "White Leather", "Black Leather"],
  wheels: ["17-inch Pair Radial", "17-inch Pair Radial Black", "18-inch Pair Spoke Silver", "18-inch Pair Spoke Black"],
  technology: {
    basicPackage: "Basic Package (basic sound system)",
    navigationPackage: "Navigation Package (includes integrated navigation controls)",
    visibilityPackage: "Visibility Package (includes side and rear cameras)",
    ultraPackage: {
      navigation: "Navigation Package (includes integrated navigation controls)",
      visibility: "Visibility Package (includes side and rear cameras)"
    }
  }
};

const paintColors = database.paintColor.map((color) => ({ name: color }));
const interiors = database.interior.map((material) => ({ name: material }));
const wheels = database.wheels.map((wheel) => ({ name: wheel }));
const technology = {
  basicPackage: { name: database.technology.basicPackage },
  navigationPackage: { name: database.technology.navigationPackage },
  visibilityPackage: { name: database.technology.visibilityPackage },
  ultraPackage: {
    navigation: { name: database.technology.ultraPackage.navigation },
    visibility: { name: database.technology.ultraPackage.visibility }
  }
};

export { paintColors, interiors, wheels, technology };
