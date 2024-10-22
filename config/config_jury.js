// configure the test here
var TestConfig = {
  
  "TestName": "Jury Demo Test",
  "RateScalePng": "",
  "RateScaleBgPng": "img/scale_abs_background.png",


  "RateMinValue": 1,
  "RateMaxValue": 5,
  "RateDefaultValue":0,
  "ShowFileIDs": false,
  "ShowResults": false,
  "LoopByDefault": true,
  "EnableABLoop": true,
  "EnableOnlineSubmission": true,
  "BeaqleServiceURL": "https://github.com/lshang-max/Jury-Test/tree/main/web_service",
  "SupervisorContact": "liang.shang@rwth-aachen.de",
  "RandomizeTestOrder": true,
  "MaxTestsPerRun": 4,
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
      "Name": "Test Sound",
      "TestID": "id_1",
      "Files": {
            "Reference": "audio/Measurement08_3s.wav",
            "1": "soft",
            "2": "pleasant",
            "3": "not disturbing",
            "4": "not humming",
            "5": "negligible",
            "6": "not noisy",
            "7": "not droning",
            "8": "varied",
            "9": "not vibrating "
        }
    },
    // 
    {
      "Name": "Test Sound",
      "TestID": "id_2",
      "Files": {
            "Reference": "audio/Measurement12_3s.wav",
            "1": "soft",
            "2": "pleasant",
            "3": "not disturbing",
            "4": "not humming",
            "5": "negligible",
            "6": "not noisy",
            "7": "not droning",
            "8": "varied",
            "9": "not vibrating "
        }
    },
    // 
    {
      "Name": "Test Sound",
      "TestID": "id_3",
      "Files": {
            "Reference": "audio/Measurement12_3s.wav",
            "1": "soft",
            "2": "pleasant",
            "3": "not disturbing",
            "4": "not humming",
            "5": "negligible",
            "6": "not noisy",
            "7": "not droning",
            "8": "varied",
            "9": "not vibrating "
        }
    },
    //    
    {
       "Name": "Test Sound",
       "TestID": "id_4",
       "Files": {
            "Reference": "audio/Measurement08_3s.wav",
            "1": "soft",
            "2": "pleasant",
            "3": "not disturbing",
            "4": "not humming",
            "5": "negligible",
            "6": "not noisy",
            "7": "not droning",
            "8": "varied",
            "9": "not vibrating "
        }
    },

  ]
}
