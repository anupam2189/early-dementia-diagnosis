
var SpeechToTextV1 = require('watson-developer-cloud/speech-to-text/v1');
var fs = require('fs');

var speech_to_text = new SpeechToTextV1({
    username: '<username>',
    password: '<password>'
});

var params = {
    // From file
    //audio: fs.createReadStream('speech.wav'),
    content_type: 'audio/wav; rate=44100'
};

speech_to_text.recognize(params, function(err, res) {
    if (err)
        console.log(err);
    else
        console.log(JSON.stringify(res, null, 2));
});

module.exports.recognize = function(req, res) {
    var params = {
        audio: fs.createReadStream(req.audiofilename),
        content_type: 'audio/wav; rate=44100'
    }

    speech_to_text.recognize(params, function (err, res) {
        if (err)
            console.log(err);
        else
            console.log(JSON.stringify(res, null, 2))
    });
}