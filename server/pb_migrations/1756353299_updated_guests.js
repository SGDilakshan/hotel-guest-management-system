// /// <reference path="../pb_data/types.d.ts" />
// migrate((db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "ocajplax",
//     "name": "first_name",
//     "type": "text",
//     "required": true,
//     "presentable": true,
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
//     "presentable": true,
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
//     "id": "fmhskhcm",
//     "name": "email",
//     "type": "email",
//     "required": true,
//     "presentable": true,
//     "unique": false,
//     "options": {
//       "exceptDomains": null,
//       "onlyDomains": null
//     }
//   }))

//   return dao.saveCollection(collection)
// }, (db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

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

//   // update
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "fmhskhcm",
//     "name": "email",
//     "type": "email",
//     "required": false,
//     "presentable": false,
//     "unique": false,
//     "options": {
//       "exceptDomains": null,
//       "onlyDomains": null
//     }
//   }))

//   return dao.saveCollection(collection)
// })
