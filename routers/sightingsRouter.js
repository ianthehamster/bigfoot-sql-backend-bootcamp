const express = require('express');
const router = express.Router();

class SightingsRouter {
  constructor(controller) {
    this.controller = controller;
  }
  routes() {
    // we will insert routes into here later on
    router.get('/', this.controller.getAll.bind(this.controller));
    router.get('/:sightingId', this.controller.getOne.bind(this.controller));
    router.post('/', this.controller.insertOne.bind(this.controller));
    router.put('/:sightingId', this.controller.editOne.bind(this.controller));
    router.get(
      '/:sightingId/comments',
      this.controller.retrieveComment.bind(this.controller),
    );
    router.post(
      '/:sightingId/comments',
      this.controller.postComment.bind(this.controller),
    );
    router.put(
      '/:sightingId/comments/:commentId',
      this.controller.editComment.bind(this.controller),
    );
    router.delete(
      '/:sightingId/comments/:commentId',
      this.controller.deleteComment.bind(this.controller),
    );
    return router;
  }
}

module.exports = SightingsRouter;
