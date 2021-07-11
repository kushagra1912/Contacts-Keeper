const express = require('express')
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access Private
router.get('/', (req,res) => res.send('Get all contacts'));

// @route  POST api/contacts
// @desc   Add new contact
// @access Public  
router.post('/', (req,res) => res.send('Add contact'));

// @route  PUT api/contacts
// @desc   Get logged in user
// @access Private
router.put('/:id', (req,res) => res.send('Update Contact'));

// @route  DELETE api/contacts
// @desc   contacts user & get token
// @access Public  
router.delete('/:delete', (req,res) => res.send('Delete Contact'));

module.exports = router;

