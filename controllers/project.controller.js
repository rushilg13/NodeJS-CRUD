const Project = require('../models/project.model');

exports.project_create = function(req, res) {
    let project = new Project({
        name: req.body.name,
        technologies: req.body.tech,
        days: req.body.days
    });

    project.save(function(err) {
        if (err) {
            return (err);
        }
        res.send('Project Created successfully')
    })
};

exports.project_details = function(req, res) {
    Project.findById(req.params.id, function(err, project) {
        if (err) return next(err);
        res.send(project);
    })
};

exports.project_update = function(req, res) {
    Project.findByIdAndUpdate(req.params.id, { $set: req.body }, function(err, project) {
        if (err) return next(err);
        res.send('Project updated.');
    });
};

exports.project_delete = function(req, res) {
    Project.findByIdAndRemove(req.params.id, function(err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};