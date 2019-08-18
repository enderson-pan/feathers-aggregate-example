module.exports = function () {
  return async (context) => {
    if (context.params.query && context.params.query._aggregate) {
      const res = await context.service.Model.aggregate(context.params.query._aggregate);
      console.log('res', res);
      context.result = res;
    }
  };
};
