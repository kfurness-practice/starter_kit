export const schema = {
  "type": "object", // data structure is an object
  "properties": {
    "users": { // first property is users
      "type": "array",
      "minItems": 3, // contain btwn 3 & 5 items
      "maxItems": 5,
      "items": { // shape of the items that should sit in the users array
        "type": "object",
        "properties": { // define properties for object
          "id": {
            "type": "number",
            "unique": true, // it should be unique
            "minimum": 1 // don't want negative numbers
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName" // using faker library and asking for fake name
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName" // using faker library and asking for fake last
          },
          "email": {
            "type": "string",
            "faker": "internet.email" // using faker library and asking for fake email
          }
        },
        "required": ["id", "firstName", "lastName", "email"] // all four properties above are required and always need to be populated
      }
    }
  },
  "required": ["users"] // top level property is required
  // Our schema will always return these properties because they are always required
};
