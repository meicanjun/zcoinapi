define({ "api": [
  {
    "type": "post",
    "url": "/init_plate",
    "title": "初始化盘口",
    "version": "0.1.0",
    "name": "_____",
    "group": "_____",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>初始化盘口，调用后将初始化所有机器人参数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "none",
            "description": ""
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://localhost/robot/init_plate",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>返回代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "200",
            "description": "<p>权限不足</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>系统错误</p>"
          }
        ]
      }
    },
    "filename": "api/zcoinapi.js",
    "groupTitle": "_____"
  },
  {
    "type": "post",
    "url": "/canceld_order",
    "title": "取消机器人订单",
    "version": "0.1.0",
    "name": "_______",
    "group": "_____",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "description": "<p>取消机器人订单（只取消指定机器人用户ID的订单） 慎用此接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sellMemberId",
            "description": "<p>卖方UID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "canceldTime",
            "description": "<p>订单取消时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyMemberId",
            "description": "<p>买方UID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "code",
            "description": "<p>返回代码</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "200",
            "description": "<p>权限不足</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>系统错误</p>"
          }
        ]
      }
    },
    "filename": "api/zcoinapi.js",
    "groupTitle": "_____"
  }
] });
