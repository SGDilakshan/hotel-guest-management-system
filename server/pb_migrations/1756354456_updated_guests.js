// /// <reference path="../pb_data/types.d.ts" />
// migrate((db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // remove
//   collection.schema.removeField("ixu2ofif")

//   // remove
//   collection.schema.removeField("fmhskhcm")

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "yqfq9zbw",
//     "name": "email",
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

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "3ggpun15",
//     "name": "date_of_birth",
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
// }, (db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // add
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

//   // add
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

//   // remove
//   collection.schema.removeField("yqfq9zbw")

//   // remove
//   collection.schema.removeField("3ggpun15")

//   return dao.saveCollection(collection)
// })
