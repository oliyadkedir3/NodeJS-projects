module.exports = {
  ensureAunthenticated: function(req,res,next){
    if(req.isAuthenticated()) {
      return next();
  }
  req.flash('error_msg','please log in to view this resource');
  res.redirect('/users/login');
}
}