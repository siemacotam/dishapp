export const dishes = [
  {
    name: "pizza",
    conditions: [
      { name: "Number of slices", shortName: "no_of_slices", input: "number" },
      { name: "Diameter", shortName: "diameter", input: "number" },
    ],
  },
  {
    name: "soup",
    conditions: [
      {
        name: "Spiciness scale",
        shortName: "spiciness_scale",
        input: "number",
        min: 1,
        max: 10,
      },
    ],
  },
  {
    name: "sandwich",
    conditions: [
      {
        name: "Slices of bread",
        shortName: "slices_of_bread",
        input: "number",
      },
    ],
  },
];
