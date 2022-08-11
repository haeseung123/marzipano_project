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
          "yaw": 0.4999701214362595,
          "pitch": -0.0019487696895765794,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -0.5084819501469777,
          "pitch": 0.0058188607870626186,
          "rotation": 0,
          "target": "2-livingroom2"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "36%",
        "left": "21%"
      }
    },
    {
      "id": "1-livingroom1",
      "name": "거실1",
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
          "target": "2-livingroom2"
        },
        {
          "yaw": -0.4728681073739409,
          "pitch": 0.005732355041621062,
          "rotation": 0,
          "target": "0-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-livingroom2",
      "name": "거실2",
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
          "yaw": -2.800350692941249,
          "pitch": 0.05146342456306385,
          "rotation": 0,
          "target": "4-bathroom"
        },
        {
          "yaw": -2.3576812179813995,
          "pitch": 0.051916551738695915,
          "rotation": 0,
          "target": "0-start"
        },
        {
          "yaw": 1.5523033825357047,
          "pitch": 0.0718779991469809,
          "rotation": 0,
          "target": "1-livingroom1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-room",
      "name": "침실",
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
          "yaw": 0.3463807284727345,
          "pitch": 0.038597568422289896,
          "rotation": 0,
          "target": "0-start"
        }
      ],
      "infoHotspots": []
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
          "yaw": -2.7400643489747303,
          "pitch": 0.1735435173558173,
          "rotation": 0,
          "target": "2-livingroom2"
        }
      ],
      "infoHotspots": []
    },
    /* furniture */
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
          "yaw": 0.4999701214362595,
          "pitch": -0.0019487696895765794,
          "rotation": 0,
          "target": "9-bathroom_i"
        },
        {
          "yaw": -0.5084819501469777,
          "pitch": 0.0058188607870626186,
          "rotation": 0,
          "target": "7-livingroom2_i"
        }
      ],
      "infoHotspots": [],
      "minimapLocation" : {
        "top": "36%",
        "left": "21%"
      }
    },
    {
      "id": "6-livingroom1_i",
      "name": "거실1",
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
          "target": "7-livingroom2_i"
        },
        {
          "yaw": -0.4728681073739409,
          "pitch": 0.005732355041621062,
          "rotation": 0,
          "target": "5-start_i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-livingroom2_i",
      "name": "거실2",
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
          "yaw": -2.800350692941249,
          "pitch": 0.05146342456306385,
          "rotation": 0,
          "target": "9-bathroom_i"
        },
        {
          "yaw": -2.3576812179813995,
          "pitch": 0.051916551738695915,
          "rotation": 0,
          "target": "5-start_i"
        },
        {
          "yaw": 1.5523033825357047,
          "pitch": 0.0718779991469809,
          "rotation": 0,
          "target": "6-livingroom1_i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-room_i",
      "name": "침실",
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
          "yaw": 0.3463807284727345,
          "pitch": 0.038597568422289896,
          "rotation": 0,
          "target": "5-start_i"
        }
      ],
      "infoHotspots": []
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
          "yaw": -2.7400643489747303,
          "pitch": 0.1735435173558173,
          "rotation": 0,
          "target": "7-livingroom2_i"
        }
      ],
      "infoHotspots": []
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
