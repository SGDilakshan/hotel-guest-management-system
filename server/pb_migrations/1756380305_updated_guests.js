/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

  collection.listRule = "@request.auth.id=id"
  collection.viewRule = " @request.auth.id=id"
  collection.updateRule = "@request.auth.id=id"
  collection.deleteRule = "@request.auth.id=id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i")

  collection.listRule = null
  collection.viewRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
