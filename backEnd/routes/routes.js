const express = require("express");
const router = express.Router();
const contact = require("../controller/contactController");

router.route("/").get(contact.getAllContacts);

router.route("/").post(contact.createContacts);

router.route("/contact/:id").get(contact.getContact);

router.route("/contact/:id").put(contact.editContact);

router.route("/contact/:id").delete(contact.deleteContact);

module.exports = router;