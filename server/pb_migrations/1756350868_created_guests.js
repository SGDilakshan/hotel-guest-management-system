// 1756350868_created_guests.js - FIXED VERSION
/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "btphg0raslfqs8i",
    "created": "2025-08-28 03:14:28.810Z",
    "updated": "2025-08-28 03:14:28.810Z",
    "name": "guests",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ocajplax",
        "name": "first_name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pah7ews1",
        "name": "last_name",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yutzjabn",
        "name": "email",
        "type": "email",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "kmjejzdp",
        "name": "phone",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "qkjjb4dr",
        "name": "address",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nsxwbbd4",
        "name": "date_of_birth",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": "created >= @request.auth.created",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i");
  return dao.deleteCollection(collection);
});

 <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i");

  // Clear existing schema to start fresh
  collection.schema = [];

  // Add final schema fields with correct IDs
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ocajplax",
    "name": "first_name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }));

  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pah7ews1", 
    "name": "last_name",
    "type": "text",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }));

  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yutzjabn",
    "name": "email",
    "type": "email",
    "required": true,
    "presentable": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }));

  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kmjejzdp",
    "name": "phone", 
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }));

  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkjjb4dr",
    "name": "address",
    "type": "text", 
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }));

  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nsxwbbd4",
    "name": "date_of_birth",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }));

  // Set final rules
  collection.createRule = "created >= @request.auth.created";

  return dao.saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("btphg0raslfqs8i");
  
  // Revert to previous state if needed
  collection.createRule = null;
  
  return dao.saveCollection(collection);
});