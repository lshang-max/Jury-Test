
Table of contents

1. [Description](#1-description)
2. [Test Configuration](#2-test-configuration)
3. [Contact](#3-contact)
4. [License](#4-license)


# 1. Description #

BeaqleJS (**b**rowser based **e**valuation of **a**udio **q**uality and **c**omparative **l**istening **e**nvironment) provides a framework to create browser based listening tests and is purely based on open web standards like HTML5 and Javascript. 

To get a better impression about its functionality there are one test sites for the Jury test classes based on the BeaqleJS:

* <https://lshang-max.github.io/Jury-Test/>
* <https://lshang-max.github.io/Jury-Test/audiotest.html>


# 2. Test Configuration #

## 2.1 General Options ##

The available options can be divided into a set of general options which apply to all test classes and other options, including file declarations, that are specific for a single test class.

```javascript
var TestConfig = {
  "TestName": "My Listening Test",   // <=  Name of the test
  "LoopByDefault": true,             // <=  Enable looped playback by default
  "AutoReturnByDefault": true,       // <=  Always start playback from loop/track begin
  "ShowFileIDs": false,              // <=  Show file IDs for debugging (never
                                     //     enable this during real test!)
  "ShowResults": false,              // <=  Show table with test results at the end
  "EnableABLoop": true,              // <=  Show controls to loop playback with an
                                     //     AB range slider
  "EnableOnlineSubmission": false,   // <=  Enable transmission of JSON encoded
                                     //     results to a web service
  "BeaqleServiceURL": "",            // <=  URL of the web service
  "SupervisorContact": "",           // <=  Email address of supervisor to contact for
                                     //     help or for submission of results by email
  "RandomizeTestOrder": true,        // <=  Present test sets in a random order
  "MaxTestsPerRun": -1,              // <=  Only run a random subset of all available
                                     //     tests, set to -1 to disable
  "AudioRoot": "",                   // <=  path to prepend to all audio URLs in the testsets
  "Testsets": [ {...}, {...}, ... ], // <=  Definition of test sets and files, more
                                     //     details below
}
```

## 2.2 Jury Test ##

In a Jury test (ITU-R BS.1116-1) the listener gets presented an item marked as reference together with several anonymous test items. By using a slider for each test item he has to rate how close the items are to the reference on top. Among the test items there is usually also one hidden reference and one, or several, anchor signals to prove the validity of the ratings and the qualification of the participants.

Contrary to ABX tests the MUSHRA procedure allows more detailed evaluations as it is possible to compare more than one algorithm to a reference. Furthermore, the results are on a continuous scale allowing a direct numerical comparison of all algorithms under test.

```javascript
...                                   // <=  General options
"RateMinValue": 0,                    // <=  Minimum rating
"RateMaxValue": 100,                  // <=  Maximum rating
"RateDefaultValue":0,                 // <=  Default rating
"RequireMaxRating": false,            // <=  At least one of the ratings in a testset
                                      //     has to be at the maximum value
"Testsets": [
  { "Name": "Schubert 1",             // <=  Name of the test set
    "TestID": "id1_1",                // <=  Unique test set ID, necessary for
                                      //     internal referencing
    "Files": {                        // <=  Array with test files
      "Reference": "audio/ref.wav",   // <=  Every MUSHRA test set needs exactly
                                      //     one(!) file with a "Reference" label
      "label_1": "audio/algo_1.wav",  // <=  Various files to be tested, the labels
      "label_2": "audio/algo_2.wav",  //     can be freely chosen as desired but
      "label_3": "audio/algo_3.wav",  //     have to be unique inside a test set
      "anchor": "audio/algo_anc.wav", //      ...
      }
  },
  { ... },                            // <=  Next test set starts here
  ....
]
```


# 3. Contact #

<https://github.com/lshang-max/Jury-Test>

liang.shang (AT) rwth-aachen.de


# 4. License #

The complete sources, html and script files as well as images are released under the *GPLv3
license*. A copy of the GPL is provided in the `LICENSE.txt` file.
