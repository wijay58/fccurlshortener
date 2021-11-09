const e = require('express');
const URL = require('../models/url.js');

module.exports = {
    createShortUrl: async function(req,res) {
        let regexx = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
        if(regexx.test(req.body.url)) {
            URL.findOne({original_url:req.body.url}, function (err, url) {
                if (err) {
                    return res.status(500).json({
                        error: err.message
                    });
                } else if(!url){
                    let urll = new URL({
                        original_url: req.body.url
                    })
                    urll.save(function (err, url) {
                        if (err) {
                            res.status(500).json({
                                error: 'Internal server error',
                                err:err
                            });
                        } else {
                            res.status(200).json({
                                original_url: url.original_url,
                                short_url: url.short_url
                            });
                        }
                    })
                } else {
                    res.status(200).json({
                        original_url: url.original_url,
                        short_url: url.short_url
                    });
                }
            })
        }
        else return res.json({ error: 'invalid url' })
    },
    goToUrl: async function(req,res) {
        URL.findOne({short_url:req.params.id},function(err,url){
            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            } else {
                return res.redirect(url.original_url);
            }
        })
    }
}