// /// <reference path="../pb_data/types.d.ts" />
// migrate((db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // add
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

//   return dao.saveCollection(collection)
// }, (db) => {
//   const dao = new Dao(db)
//   const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

//   // remove
//   collection.schema.removeField("fmhskhcm")

//   // remove
//   collection.schema.removeField("qdnterz2")

//   return dao.saveCollection(collection)
// })
