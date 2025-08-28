// /// <reference path="../pb_data/types.d.ts" />
// migrate((db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // remove
//   collection.schema.removeField("lms9m4hz")

//   // remove
//   collection.schema.removeField("qdnterz2")

//   // remove
//   collection.schema.removeField("yqfq9zbw")

//   // remove
//   collection.schema.removeField("3ggpun15")

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "yutzjabn",
//     "name": "email",
//     "type": "email",
//     "required": true,
//     "presentable": true,
//     "unique": false,
//     "options": {
//       "exceptDomains": [],
//       "onlyDomains": []
//     }
//   }))

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "kmjejzdp",
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

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "qkjjb4dr",
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

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "nsxwbbd4",
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

//   // add
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

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "qdnterz2",
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

//   // add
//   collection.schema.addField(new SchemaField({
//     "system": false,
//     "id": "yqfq9zbw",
//     "name": "email",
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

//   // remove
//   collection.schema.removeField("yutzjabn")

//   // remove
//   collection.schema.removeField("kmjejzdp")

//   // remove
//   collection.schema.removeField("qkjjb4dr")

//   // remove
//   collection.schema.removeField("nsxwbbd4")

//   return dao.saveCollection(collection)
// })
