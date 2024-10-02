// configure the test here
var TestConfig = {
  "TestName": "Mushra Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",
  "RateMinValue": 0,
  "RateMaxValue": 100,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": false,
  "BeaqleServiceURL": "",
  "SupervisorContact": "",
  "RandomizeTestOrder": false,
  "MaxTestsPerRun": 3,
  "RequireMaxRating": false,
  "Testsets": [
    //    
    {
      "Name": "Schubert 1",
      "TestID": "id1_1",
      "Files": {
            "Reference": "audio/Measurement08_3s.wav",
            "1": "audio/Measurement08_3s.wav",
            "2": "audio/Measurement08_3s.wav",
            "3": "audio/Measurement08_3s.wav",
            "4": "audio/Measurement08_3s.wav"
        }
    },
    {
      "Name": "Schubert 2",
      "TestID": "id1_2",
      "Files": {
            "Reference": "audio/Measurement08_3s.wav",
            "1": "audio/Measurement08_3s.wav",
            "2": "audio/Measurement08_3s.wav",
            "3": "audio/Measurement08_3s.wav",
            "4": "audio/Measurement08_3s.wav"
        }
    },
    {
      "Name": "Schubert 3",
      "TestID": "id1_3",
      "Files": {
            "Reference": "audio/Measurement08_3s.wav",
            "1": "audio/Measurement08_3s.wav",
            "2": "audio/Measurement08_3s.wav",
            "3": "audio/Measurement08_3s.wav",
            "4": "audio/Measurement08_3s.wav"
        }
    },
    //    
    {
       "Name": "Castanets",
       "TestID": "id2_1",
       "Files": {
            "Reference": "audio/Measurement08_3s.wav",
            "1": "audio/Measurement08_3s.wav",
            "2": "audio/Measurement08_3s.wav",
            "3": "audio/Measurement08_3s.wav",
            "4": "audio/Measurement08_3s.wav"
        }
    },
  ]
}
