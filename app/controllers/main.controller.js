module.exports = {
    home: home,
    epicUniverse: epicUniverse,
    mardiGras: mardiGras
}

function home (req, res) {
    res.render('./home', {layout: 'layout.hbs'});
}

function epicUniverse (req, res) {
    res.render('./epicUniverse');
}

function mardiGras (req, res) {
    res.render('./mardiGras');
}
