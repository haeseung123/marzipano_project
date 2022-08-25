var APP_DATA = {
  "scenes": [
    {
      "id": "0-start",
      "name": "현관",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-room"
        },
        {
          "yaw": 0.4948247298956119,
          "pitch": 0.001954219906471266,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -0.37449457182641765,
          "pitch": 0.002066658570241131,
          "rotation": 0,
          "target": "2-livingroom2"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "81%",
        "left": "50%"
      }
    },
    {
      "id": "1-livingroom1",
      "name": "거실",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0738391440181587,
          "pitch": 0.05894219626437547,
          "rotation": 0,
          "target": "2-livingroom2"
        },
        {
          "yaw": 2.6003279001422825,
          "pitch": 0.06321447784196721,
          "rotation": 0,
          "target": "0-start"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "30%",
        "left": "16%"
      }
    },
    {
      "id": "2-livingroom2",
      "name": "주방",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.028336862227574,
          "pitch": 0.09233123706113133,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -2.479405732342885,
          "pitch": 0.07342879206861141,
          "rotation": 0,
          "target": "0-start"
        },
        {
          "yaw": 2.6215402395177643,
          "pitch": 0.0913427424630644,
          "rotation": 0,
          "target": "3-room"
        },
        {
          "yaw": 1.5843798847742185,
          "pitch": 0.10434182442132389,
          "rotation": 0,
          "target": "1-livingroom1"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "60%",
        "left": "20%"
      }
    },
    {
      "id": "3-room",
      "name": "방",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.522474011822286,
          "pitch": 0.1396784913282385,
          "rotation": 0,
          "target": "0-start"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "29%",
        "left": "65%"
      }
    },
    {
      "id": "4-bathroom",
      "name": "화장실",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.725537782328935,
          "pitch": 0.11040397171021432,
          "rotation": 0,
          "target": "2-livingroom2"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "65%",
        "left": "71%"
      }
    },
    {
      "id": "5-start_i",
      "name": "현관",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "8-room_i"
        },
        {
          "yaw": 0.4948247298956119,
          "pitch": 0.001954219906471266,
          "rotation": 0,
          "target": "9-bathroom_i"
        },
        {
          "yaw": -0.37449457182641765,
          "pitch": 0.002066658570241131,
          "rotation": 0,
          "target": "7-livingroom2_i"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "81%",
        "left": "50%"
      }
    },
    {
      "id": "6-livingroom1_i",
      "name": "거실",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0738391440181587,
          "pitch": 0.05894219626437547,
          "rotation": 0,
          "target": "7-livingroom2_i"
        },
        {
          "yaw": 2.6003279001422825,
          "pitch": 0.06321447784196721,
          "rotation": 0,
          "target": "5-start_i"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "30%",
        "left": "16%"
      }
    },
    {
      "id": "7-livingroom2_i",
      "name": "주방",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.028336862227574,
          "pitch": 0.09233123706113133,
          "rotation": 0,
          "target": "9-bathroom_i"
        },
        {
          "yaw": -2.479405732342885,
          "pitch": 0.07342879206861141,
          "rotation": 0,
          "target": "5-start_i"
        },
        {
          "yaw": 2.6215402395177643,
          "pitch": 0.0913427424630644,
          "rotation": 0,
          "target": "8-room_i"
        },
        {
          "yaw": 1.5843798847742185,
          "pitch": 0.10434182442132389,
          "rotation": 0,
          "target": "6-livingroom1_i"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "60%",
        "left": "20%"
      }
    },
    {
      "id": "8-room_i",
      "name": "방",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.522474011822286,
          "pitch": 0.1396784913282385,
          "rotation": 0,
          "target": "5-start_i"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "29%",
        "left": "65%"
      }
    },
    {
      "id": "9-bathroom_i",
      "name": "화장실",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.725537782328935,
          "pitch": 0.11040397171021432,
          "rotation": 0,
          "target": "7-livingroom2_i"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "65%",
        "left": "71%"
      }
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
