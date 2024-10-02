// configure the test here
var TestConfig = {
  
  "TestName": "Jury Demo Test",
  "RateScalePng": "img/scale_abs.png",
  "RateScaleBgPng": "img/scale_abs_background.png",


  "RateMinValue": 1,
  "RateMaxValue": 5,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "https://script.google.com/macros/s/AKfycbzJR9sw1EIMCuokq3KmE_7d4nREkpp5JMyUL0DZG_tHJkCUxyoTLhgA7132kfjzwslt/exec",
  "SupervisorContact": "liang.shang@rwth-aachen.de",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 25,
  "RequireMaxRating": false,
  "AudioRoot": "https://raw.githubusercontent.com/lshang-max/Jury-Test/main/",
   
  "Testsets": [
    // {
    //   "Name": "Volume Adjustment",
    //   "TestID": "volume_adjustment",
    //   "Files": {
    //     "1": "audio/Measurement08_3s.wav"  
    //   },
    // },
    {
      "Name": "Test Sound 1",
      "TestID": "id_1",
      "Files": {
            "Reference": "audio/Measurement08_3s.mp3",
            "1": "audio/Measurement08_3s.mp3",
            "2": "audio/Measurement08_3s.mp3",
            "3": "audio/Measurement08_3s.mp3",
            "4": "audio/Measurement08_3s.mp3"
        }
    },
    // 
    {
      "Name": "Test Sound 2",
      "TestID": "id_2",
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
      "Name": "Test Sound 3",
      "TestID": "id_3",
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
       "Name": "Test Sound 4",
       "TestID": "id_4",
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
