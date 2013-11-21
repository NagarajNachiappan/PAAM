/**
 * New node file
 */

exports.after = function(req, res) {
	
	  res.render('After', { title: 'After', flag: 0, items: ['a', 'b', 'c'] });
};