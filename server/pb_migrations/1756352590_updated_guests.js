// /// <reference path="../pb_data/types.d.ts" />
// migrate((db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   collection.createRule = null

//   // remove
//   collection.schema.removeField("ezrmncmh")

//   // add
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

//   // add
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

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "ocajplax",
//     "name": "first_name",
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
//     "id": "pah7ews1",
//     "name": "last_name",
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

//   return dao.saveCollection(collection)
// }, (db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   collection.createRule = "created >= @request.auth.created"

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "ezrmncmh",
//     "name": "email",
//     "type": "email",
//     "required": true,
//     "presentable": false,
//     "unique": false,
//     "options": {
//       "exceptDomains": [],
//       "onlyDomains": []
//     }
//   }))

//   // remove
//   collection.schema.removeField("lms9m4hz")

//   // remove
//   collection.schema.removeField("ixu2ofif")

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "ocajplax",
//     "name": "name",
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
//     "id": "pah7ews1",
//     "name": "phone",
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

//   return dao.saveCollection(collection)
// })
