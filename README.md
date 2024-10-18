
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

## 2.1 Jury Test ##

In a Jury test, which is a type of differential semantic test, listeners evaluate a series of items by using a slider to rate each one based on its quality or characteristics.

Unlike MUSHRA tests, the Jury method allows listeners to express their opinions freely without a reference item, making the evaluation more subjective. The results are presented on a continuous scale, which makes it easy to directly compare all the algorithms being tested.

```javascript
...                                   // <=  General options
"RateMinValue": 0,                    // <=  Minimum rating
"RateMaxValue": 100,                  // <=  Maximum rating
"RateDefaultValue":0,                 // <=  Default rating

"Testsets": [
  { "Name": "Schubert 1",             // <=  Name of the test set
    "TestID": "id1_1",                // <=  Unique test set ID, necessary for
                                      //     internal referencing
    "Files": {                        // <=  Array with test files
      "Reference": "audio/ref.wav",   // <=  Every JURY test set needs exactly
                                      //     one(!) file with a "Reference" label
      "label_1": "happy",             // <=  Various words to be tested, the labels
      "label_2": "sad",               //     can be freely chosen as desired but
      "label_3": "bright",            //     have to be unique inside a test set
      "anchor":  "soft",              //      ...
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
