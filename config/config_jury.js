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
  "BeaqleServiceURL": "",
  "SupervisorContact": "liang.shang@rwth-aachen.de",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 25,
  "RequireMaxRating": false,
   
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
            "Reference": "audio/Measurement08_3s.wav",
            "1": "happy",
            "2": "happy",
            "3": "happy",
            "4": "happy"
        }
    },
    // 
    {
      "Name": "Test Sound 2",
      "TestID": "id_2",
      "Files": {
            "Reference": "audio/Measurement12_3s.wav",
            "1": "sad",
            "2": "sad",
            "3": "sad",
            "4": "sad"
        }
    },
    // 
    {
      "Name": "Test Sound 3",
      "TestID": "id_3",
      "Files": {
            "Reference": "audio/Measurement12_3s.wav",
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
