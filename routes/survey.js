const express = require('express');
const router = new express.Router();
const db = require('../db');

/* add new survey results to db */
router.post('/', async function (req, res, next) {
  try {
    const { sex, ethnicity, racism, police, vote, community } = req.body;

    const result = await db.query(
      `INSERT INTO results (sex, ethnicity,racism, police, vote, community)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING id, sex, ethnicity,racism, police, vote, community
        `,
      [sex, ethnicity, racism, police, vote, community]
    );
    return res.json(result.rows[0]);
  } catch (error) {
    return next(error);
  }
});

/* fetch survey resulsts so i can use it for charts */

module.exports = router;
