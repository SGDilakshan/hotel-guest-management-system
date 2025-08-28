// /// <reference path="../pb_data/types.d.ts" />
// migrate((db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "lms9m4hz",
//     "name": "address",
//     "type": "text",
//     "required": false,
//     "presentable": false,
//     "unique": false,
//     "options": {
//       "min": null,
//       "max": null,
//       "pattern": ""
//     }
//   }))

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "ixu2ofif",
//     "name": "date_of_birth",
//     "type": "date",
//     "required": false,
//     "presentable": false,
//     "unique": false,
//     "options": {
//       "min": "",
//       "max": ""
//     }
//   }))

//   return dao.saveCollection(collection)
// }, (db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "lms9m4hz",
//     "name": "address",
//     "type": "text",
//     "required": true,
//     "presentable": false,
//     "unique": false,
//     "options": {
//       "min": null,
//       "max": null,
//       "pattern": ""
//     }
//   }))

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "ixu2ofif",
//     "name": "date_of_birth",
//     "type": "date",
//     "required": true,
//     "presentable": false,
//     "unique": false,
//     "options": {
//       "min": "",
//       "max": ""
//     }
//   }))

//   return dao.saveCollection(collection)
// })
