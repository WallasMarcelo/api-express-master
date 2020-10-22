module.exports  = app => {
  const controller = app.controllers.games;

  app.route('/api/v1/games')
    .get(controller.listGames)
    .post(controller.saveGames)
    .put(controller.updateGame);

  app.route('/api/v1/games/:gameId')
    .delete(controller.removeGames);
}