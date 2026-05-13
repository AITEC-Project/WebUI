const mockCases = [
    {
        "id": "AA-0000",
        "status": "verified",
        "type": "違規停車",
        "plate": "GXQ-3629",
        "location": "台中市北屯區環中路",
        "confidence": 96,
        "timestamp": "2026-04-29T06:28:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000464.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000438.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000228.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 GXQ-3629 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0001",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "MGA-4354",
        "location": "台中市南區文心路四段",
        "confidence": 90,
        "timestamp": "2026-04-28T23:09:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000065.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000209.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 MGA-4354 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0002",
        "status": "pending",
        "type": "未依標誌標線行駛",
        "plate": "STP-9968",
        "location": "台中市北區文心路四段",
        "confidence": 95,
        "timestamp": "2026-04-29T13:47:00",
        "images": [
            { "src": "video/image01.jpg", "time": 3 },
            { "src": "video/image02.jpg", "time": 5 },
            { "src": "video/image03.jpg", "time": 13 }
        ],
        "video": "video/video01.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到該車道地面標線為「雙黃線」，車輛違規跨越雙黃線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 STP-9968 未依規定車道行駛，跨越禁止變換車道線。"
            }
        ]
    },
    {
        "id": "AA-0003",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "VDZ-2252",
        "location": "台中市南屯區環中路",
        "confidence": 94,
        "timestamp": "2026-04-29T22:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000425.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000485.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000091.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 82km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 SUV，車牌 VDZ-2252 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0004",
        "status": "pending",
        "type": "未依標誌標線行駛",
        "plate": "PVF-6988",
        "location": "台中市大里區中清路",
        "confidence": 96,
        "timestamp": "2026-04-29T08:06:00",
        "images": [
            { "src": "video/image04.jpg", "time": 1 },
            { "src": "video/image05.jpg", "time": 2 },
            { "src": "video/image06.jpg", "time": 12 }
        ],
        "video": "video/video02.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到該車道地面標線為「雙黃線」，車輛違規跨越雙黃線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PVF-6988 未依規定車道行駛，跨越禁止變換車道線。"
            }
        ]
    },
    {
        "id": "AA-0005",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "ZSH-3267",
        "location": "台中市南區台灣大道二段",
        "confidence": 78,
        "timestamp": "2026-04-29T13:10:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000342.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000234.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ZSH-3267 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0006",
        "status": "pending",
        "type": "未禮讓行人",
        "plate": "TFG-0423",
        "location": "台中市西區公益路",
        "confidence": 95,
        "timestamp": "2026-04-29T07:31:00",
        "images": [
            { "src": "video/image07.jpg", "time": 0 },
            { "src": "video/image08.jpg", "time": 1 },
            { "src": "video/image09.jpg", "time": 2 }
        ],
        "video": "video/video03.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 TFG-0423 於行人過馬路期間加速通過，且車頭已進入行人通行路徑。"
            }
        ]
    },
    {
        "id": "AA-0007",
        "status": "pending",
        "type": "未禮讓行人",
        "plate": "AXG-3009",
        "location": "台中市北屯區環中路",
        "confidence": 93,
        "timestamp": "2026-04-29T17:58:00",
        "images": [
            { "src": "video/image10.jpg", "time": 6 },
            { "src": "video/image11.jpg", "time": 8 },
            { "src": "video/image12.jpg", "time": 10 }
        ],
        "video": "video/video04.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 AXG-3009 於行人過馬路期間加速通過，且車頭已進入行人通行路徑。"
            }
        ]
    },
    {
        "id": "AA-0008",
        "status": "pending",
        "type": "未禮讓行人",
        "plate": "FTK-4888",
        "location": "台中市西區復興路",
        "confidence": 82,
        "timestamp": "2026-04-29T11:43:00",
        "images": [
            { "src": "video/image13.jpg", "time": 3 },
            { "src": "video/image14.jpg", "time": 6 },
            { "src": "video/image15.jpg", "time": 13 }
        ],
        "video": "video/video05.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 FTK-4888 於行人過馬路期間加速通過，且車頭已進入行人通行路徑。"
            }
        ]
    },
    {
        "id": "AA-0009",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "KGS-7793",
        "location": "台中市西屯區環中路",
        "confidence": 96,
        "timestamp": "2026-04-29T17:47:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000359.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 KGS-7793 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0010",
        "status": "pending",
        "type": "未禮讓行人",
        "plate": "IBC-0156",
        "location": "台中市北區公益路",
        "confidence": 79,
        "timestamp": "2026-04-29T19:06:00",
        "images": [
            { "src": "video/image16.jpg", "time": 5 },
            { "src": "video/image17.jpg", "time": 10 },
            { "src": "video/image18.jpg", "time": 12 }
        ],
        "video": "video/video06.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 IBC-0156 為特殊車輛。"
            }
        ]
    },
    {
        "id": "AA-0011",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "OUI-4636",
        "location": "台中市西屯區中清路",
        "confidence": 85,
        "timestamp": "2026-04-29T01:28:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000058.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 OUI-4636 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0012",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "ZWA-9747",
        "location": "台中市南屯區環中路",
        "confidence": 90,
        "timestamp": "2026-04-29T13:49:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000486.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ZWA-9747 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0013",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "JJB-8639",
        "location": "台中市西屯區復興路",
        "confidence": 88,
        "timestamp": "2026-04-29T03:39:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000391.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000369.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 JJB-8639 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0014",
        "status": "verified",
        "type": "違規停車",
        "plate": "WPQ-7829",
        "location": "台中市北區復興路",
        "confidence": 75,
        "timestamp": "2026-04-29T08:04:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000357.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000350.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000389.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 WPQ-7829 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0015",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "YTP-8087",
        "location": "台中市中區黎明路",
        "confidence": 99,
        "timestamp": "2026-04-29T07:32:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000402.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000323.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000386.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 YTP-8087 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0016",
        "status": "verified",
        "type": "違規停車",
        "plate": "FXR-7934",
        "location": "台中市南區中清路",
        "confidence": 96,
        "timestamp": "2026-04-29T10:22:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000426.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000358.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000113.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 FXR-7934 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0017",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "RFO-5067",
        "location": "台中市南屯區精誠路",
        "confidence": 75,
        "timestamp": "2026-04-29T21:24:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000308.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 RFO-5067 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0018",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "MVH-1998",
        "location": "台中市豐原區黎明路",
        "confidence": 85,
        "timestamp": "2026-04-29T07:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000284.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 MVH-1998 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0019",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "EBB-9076",
        "location": "台中市太平區台灣大道二段",
        "confidence": 81,
        "timestamp": "2026-04-29T21:54:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000481.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 54km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 Hatchback，車牌 EBB-9076 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0020",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "RLP-0797",
        "location": "台中市南屯區精誠路",
        "confidence": 76,
        "timestamp": "2026-04-29T10:03:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000100.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 53km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 SUV，車牌 RLP-0797 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0021",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "YAV-5909",
        "location": "台中市豐原區崇德路三段",
        "confidence": 91,
        "timestamp": "2026-04-29T20:05:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000235.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000461.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000213.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 52km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 SUV，車牌 YAV-5909 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0022",
        "status": "verified",
        "type": "違規停車",
        "plate": "JHC-2395",
        "location": "台中市西屯區復興路",
        "confidence": 95,
        "timestamp": "2026-04-29T02:51:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000443.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000190.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 JHC-2395 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0023",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "LVX-3171",
        "location": "台中市豐原區五權西路",
        "confidence": 80,
        "timestamp": "2026-04-29T07:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 LVX-3171 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0024",
        "status": "pending",
        "type": "違規停車",
        "plate": "AES-0432",
        "location": "台中市北區環中路",
        "confidence": 81,
        "timestamp": "2026-04-29T13:51:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000257.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg", "time": 4 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 AES-0432 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0025",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "JHB-9250",
        "location": "台中市太平區復興路",
        "confidence": 83,
        "timestamp": "2026-04-29T00:06:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000250.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000357.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000175.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 58km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Hatchback，車牌 JHB-9250 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0026",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "SZT-6704",
        "location": "台中市西屯區台灣大道二段",
        "confidence": 80,
        "timestamp": "2026-04-29T16:56:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000043.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000296.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 56km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Truck，車牌 SZT-6704 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0027",
        "status": "pending",
        "type": "違規停車",
        "plate": "TCQ-4991",
        "location": "台中市南屯區公益路",
        "confidence": 82,
        "timestamp": "2026-04-29T04:25:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000272.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000104.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000216.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 TCQ-4991 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0028",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "GLN-4295",
        "location": "台中市西屯區精誠路",
        "confidence": 86,
        "timestamp": "2026-04-29T12:47:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000002.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 GLN-4295 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0029",
        "status": "pending",
        "type": "違規停車",
        "plate": "AHO-4127",
        "location": "台中市北區精誠路",
        "confidence": 83,
        "timestamp": "2026-04-29T01:24:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000009.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000311.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 AHO-4127 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0030",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "GPE-0697",
        "location": "台中市中區五權西路",
        "confidence": 98,
        "timestamp": "2026-04-29T15:12:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000368.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000019.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000435.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 84km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Sedan，車牌 GPE-0697 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0031",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "MQR-8479",
        "location": "台中市西屯區公益路",
        "confidence": 99,
        "timestamp": "2026-04-29T20:58:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000228.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000106.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 68km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 SUV，車牌 MQR-8479 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0032",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "GYG-5009",
        "location": "台中市太平區公益路",
        "confidence": 97,
        "timestamp": "2026-04-29T18:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000420.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000380.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000014.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 84km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Hatchback，車牌 GYG-5009 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0033",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "LNM-3863",
        "location": "台中市北區文心路四段",
        "confidence": 87,
        "timestamp": "2026-04-29T11:56:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000112.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000459.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 LNM-3863 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0034",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "PWE-8882",
        "location": "台中市南屯區環中路",
        "confidence": 88,
        "timestamp": "2026-04-29T11:16:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000316.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000270.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000144.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PWE-8882 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0035",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "AGN-6451",
        "location": "台中市太平區中清路",
        "confidence": 83,
        "timestamp": "2026-04-29T20:32:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000349.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000120.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 88km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 SUV，車牌 AGN-6451 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0036",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "WPW-5317",
        "location": "台中市北區復興路",
        "confidence": 95,
        "timestamp": "2026-04-29T16:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000259.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000295.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WPW-5317 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0037",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "FCU-7676",
        "location": "台中市南區公益路",
        "confidence": 96,
        "timestamp": "2026-04-29T06:24:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000359.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000292.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000255.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 FCU-7676 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0038",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ZPK-5969",
        "location": "台中市北區崇德路三段",
        "confidence": 81,
        "timestamp": "2026-04-29T01:15:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000187.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000380.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 50km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Hatchback，車牌 ZPK-5969 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0039",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "BHR-3687",
        "location": "台中市太平區文心路四段",
        "confidence": 93,
        "timestamp": "2026-04-29T02:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000172.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000437.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 BHR-3687 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0040",
        "status": "pending",
        "type": "違規停車",
        "plate": "CPB-5632",
        "location": "台中市北區公益路",
        "confidence": 82,
        "timestamp": "2026-04-29T12:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000045.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000250.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 CPB-5632 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0041",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "AVP-8791",
        "location": "台中市西屯區中清路",
        "confidence": 88,
        "timestamp": "2026-04-29T12:10:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000064.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000142.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 89km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Hatchback，車牌 AVP-8791 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0042",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "VRN-4638",
        "location": "台中市北區崇德路三段",
        "confidence": 93,
        "timestamp": "2026-04-29T09:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000415.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000327.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VRN-4638 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0043",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "FHN-0301",
        "location": "台中市豐原區崇德路三段",
        "confidence": 96,
        "timestamp": "2026-04-29T12:35:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000312.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 63km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Sedan，車牌 FHN-0301 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0044",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "JMD-8544",
        "location": "台中市太平區公益路",
        "confidence": 87,
        "timestamp": "2026-04-29T16:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000499.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000161.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 JMD-8544 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0045",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "JTZ-4055",
        "location": "台中市西區黎明路",
        "confidence": 94,
        "timestamp": "2026-04-29T21:31:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000039.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 JTZ-4055 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0046",
        "status": "verified",
        "type": "違規停車",
        "plate": "KBF-7685",
        "location": "台中市北屯區公益路",
        "confidence": 92,
        "timestamp": "2026-04-29T06:01:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000215.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000203.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000123.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 KBF-7685 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0047",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "MVX-7316",
        "location": "台中市南屯區中清路",
        "confidence": 99,
        "timestamp": "2026-04-29T15:14:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000085.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000355.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.3 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 MVX-7316 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0048",
        "status": "pending",
        "type": "違規停車",
        "plate": "XNE-3445",
        "location": "台中市南屯區文心路四段",
        "confidence": 91,
        "timestamp": "2026-04-29T05:58:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000017.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000250.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 XNE-3445 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0049",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "JFE-2783",
        "location": "台中市豐原區公益路",
        "confidence": 93,
        "timestamp": "2026-04-29T16:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000406.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000443.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000495.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 JFE-2783 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0050",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "HSJ-6486",
        "location": "台中市北屯區環中路",
        "confidence": 82,
        "timestamp": "2026-04-29T04:16:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000185.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000210.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000193.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 HSJ-6486 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0051",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "VMJ-2570",
        "location": "台中市豐原區崇德路三段",
        "confidence": 93,
        "timestamp": "2026-04-29T11:19:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000105.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000240.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 60km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Hatchback，車牌 VMJ-2570 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0052",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "BIS-7828",
        "location": "台中市中區精誠路",
        "confidence": 82,
        "timestamp": "2026-04-28T23:12:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000054.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 BIS-7828 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0053",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "TSO-3515",
        "location": "台中市北區公益路",
        "confidence": 75,
        "timestamp": "2026-04-29T12:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000465.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000187.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000179.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 77km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Truck，車牌 TSO-3515 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0054",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "WFW-4854",
        "location": "台中市中區崇德路三段",
        "confidence": 88,
        "timestamp": "2026-04-29T05:22:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000477.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.8 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WFW-4854 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0055",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "ODI-3772",
        "location": "台中市西區精誠路",
        "confidence": 87,
        "timestamp": "2026-04-29T20:34:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000451.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 3.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ODI-3772 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0056",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "BEZ-2183",
        "location": "台中市北區文心路四段",
        "confidence": 91,
        "timestamp": "2026-04-29T14:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000238.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000147.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000034.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 55km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Sedan，車牌 BEZ-2183 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0057",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "WGZ-7656",
        "location": "台中市西區公益路",
        "confidence": 84,
        "timestamp": "2026-04-29T20:22:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000402.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000415.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WGZ-7656 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0058",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "SHJ-7624",
        "location": "台中市南區文心路四段",
        "confidence": 84,
        "timestamp": "2026-04-29T14:29:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000470.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000095.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.4 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 SHJ-7624 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0059",
        "status": "verified",
        "type": "違規停車",
        "plate": "LBZ-2084",
        "location": "台中市大里區五權西路",
        "confidence": 80,
        "timestamp": "2026-04-29T18:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000077.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000005.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 LBZ-2084 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0060",
        "status": "pending",
        "type": "違規停車",
        "plate": "YYN-8157",
        "location": "台中市大里區公益路",
        "confidence": 78,
        "timestamp": "2026-04-29T13:54:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000247.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 YYN-8157 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0061",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "SWJ-6298",
        "location": "台中市西屯區黎明路",
        "confidence": 92,
        "timestamp": "2026-04-29T21:48:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000287.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000021.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 73km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Hatchback，車牌 SWJ-6298 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0062",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "KBO-4789",
        "location": "台中市大里區復興路",
        "confidence": 92,
        "timestamp": "2026-04-29T14:42:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000257.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 60km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Truck，車牌 KBO-4789 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0063",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "QNN-5459",
        "location": "台中市西區精誠路",
        "confidence": 92,
        "timestamp": "2026-04-29T13:54:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000100.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000173.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000388.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 QNN-5459 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0064",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "VNH-6196",
        "location": "台中市大里區環中路",
        "confidence": 84,
        "timestamp": "2026-04-29T00:20:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000155.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000290.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000249.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VNH-6196 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0065",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "MFU-2276",
        "location": "台中市南區文心路四段",
        "confidence": 90,
        "timestamp": "2026-04-29T15:07:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000140.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000029.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 MFU-2276 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0066",
        "status": "verified",
        "type": "違規停車",
        "plate": "LHF-6719",
        "location": "台中市西屯區五權西路",
        "confidence": 88,
        "timestamp": "2026-04-29T22:52:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000337.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000499.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000302.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 LHF-6719 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0067",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "XUT-1486",
        "location": "台中市中區復興路",
        "confidence": 91,
        "timestamp": "2026-04-29T21:45:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000034.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000363.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.5 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XUT-1486 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0068",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "LAX-7336",
        "location": "台中市太平區中清路",
        "confidence": 96,
        "timestamp": "2026-04-29T19:18:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000097.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000152.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 83km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Truck，車牌 LAX-7336 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0069",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "CJM-7200",
        "location": "台中市北區崇德路三段",
        "confidence": 83,
        "timestamp": "2026-04-29T09:36:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000341.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000374.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 75km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為黑色 SUV，車牌 CJM-7200 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0070",
        "status": "pending",
        "type": "違規停車",
        "plate": "THY-5498",
        "location": "台中市北區復興路",
        "confidence": 99,
        "timestamp": "2026-04-29T01:41:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000274.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000216.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 THY-5498 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0071",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "NZT-4415",
        "location": "台中市中區黎明路",
        "confidence": 78,
        "timestamp": "2026-04-29T12:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000117.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000242.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000422.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 NZT-4415 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0072",
        "status": "verified",
        "type": "違規停車",
        "plate": "KNO-1052",
        "location": "台中市中區黎明路",
        "confidence": 89,
        "timestamp": "2026-04-29T22:14:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000090.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000276.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000369.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 KNO-1052 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0073",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "ANF-7900",
        "location": "台中市豐原區復興路",
        "confidence": 78,
        "timestamp": "2026-04-29T10:36:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000225.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000460.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000214.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ANF-7900 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0074",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "BRY-4855",
        "location": "台中市中區五權西路",
        "confidence": 75,
        "timestamp": "2026-04-29T08:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000097.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.5 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 BRY-4855 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0075",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "CID-2386",
        "location": "台中市太平區五權西路",
        "confidence": 97,
        "timestamp": "2026-04-29T18:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000322.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000150.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 CID-2386 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0076",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "WTQ-2790",
        "location": "台中市西屯區五權西路",
        "confidence": 88,
        "timestamp": "2026-04-29T14:48:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000194.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000271.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WTQ-2790 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0077",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "GNP-8138",
        "location": "台中市西區精誠路",
        "confidence": 81,
        "timestamp": "2026-04-29T10:08:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 GNP-8138 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0078",
        "status": "pending",
        "type": "違規停車",
        "plate": "TOA-2917",
        "location": "台中市太平區文心路四段",
        "confidence": 92,
        "timestamp": "2026-04-29T11:02:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000409.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000341.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000154.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 TOA-2917 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0079",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "ACN-6561",
        "location": "台中市豐原區環中路",
        "confidence": 86,
        "timestamp": "2026-04-29T17:01:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000463.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000263.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ACN-6561 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0080",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "COV-3096",
        "location": "台中市南區文心路四段",
        "confidence": 81,
        "timestamp": "2026-04-29T04:22:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000437.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000471.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000370.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 COV-3096 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0081",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "HPY-1912",
        "location": "台中市太平區公益路",
        "confidence": 97,
        "timestamp": "2026-04-29T04:53:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000261.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 HPY-1912 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0082",
        "status": "verified",
        "type": "違規停車",
        "plate": "EPT-0917",
        "location": "台中市太平區文心路四段",
        "confidence": 93,
        "timestamp": "2026-04-29T18:08:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000006.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000400.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 EPT-0917 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0083",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "NBH-9257",
        "location": "台中市中區中清路",
        "confidence": 91,
        "timestamp": "2026-04-29T09:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000354.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 79km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Hatchback，車牌 NBH-9257 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0084",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "TQU-0884",
        "location": "台中市南區文心路四段",
        "confidence": 98,
        "timestamp": "2026-04-29T00:04:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000276.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000131.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000430.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 TQU-0884 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0085",
        "status": "verified",
        "type": "違規停車",
        "plate": "JMT-3956",
        "location": "台中市西屯區復興路",
        "confidence": 77,
        "timestamp": "2026-04-29T04:33:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000267.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000191.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000132.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 JMT-3956 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0086",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "DBG-2152",
        "location": "台中市太平區文心路四段",
        "confidence": 91,
        "timestamp": "2026-04-29T11:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000009.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000440.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 DBG-2152 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0087",
        "status": "verified",
        "type": "違規停車",
        "plate": "IOG-2332",
        "location": "台中市北區五權西路",
        "confidence": 89,
        "timestamp": "2026-04-29T21:09:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000056.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000400.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 IOG-2332 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0088",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "APT-8446",
        "location": "台中市豐原區黎明路",
        "confidence": 98,
        "timestamp": "2026-04-29T04:10:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000281.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000180.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 APT-8446 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0089",
        "status": "pending",
        "type": "違規停車",
        "plate": "ANP-7647",
        "location": "台中市中區中清路",
        "confidence": 98,
        "timestamp": "2026-04-29T08:50:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000193.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000415.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ANP-7647 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0090",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "WQB-4061",
        "location": "台中市豐原區五權西路",
        "confidence": 99,
        "timestamp": "2026-04-29T08:59:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000128.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000248.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WQB-4061 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0091",
        "status": "pending",
        "type": "違規停車",
        "plate": "DFZ-6406",
        "location": "台中市南區精誠路",
        "confidence": 99,
        "timestamp": "2026-04-29T13:38:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000031.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 DFZ-6406 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0092",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "CWV-7759",
        "location": "台中市豐原區公益路",
        "confidence": 92,
        "timestamp": "2026-04-29T18:49:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000271.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000262.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 66km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Truck，車牌 CWV-7759 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0093",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "AUV-2591",
        "location": "台中市北屯區文心路四段",
        "confidence": 96,
        "timestamp": "2026-04-29T05:44:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000292.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000046.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.2 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 AUV-2591 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0094",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "IRH-0870",
        "location": "台中市豐原區中清路",
        "confidence": 91,
        "timestamp": "2026-04-29T08:10:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000241.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000130.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 IRH-0870 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0095",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "SPJ-1720",
        "location": "台中市北屯區黎明路",
        "confidence": 82,
        "timestamp": "2026-04-29T13:53:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000020.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000057.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 58km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Sedan，車牌 SPJ-1720 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0096",
        "status": "pending",
        "type": "違規停車",
        "plate": "SCK-0842",
        "location": "台中市西屯區五權西路",
        "confidence": 94,
        "timestamp": "2026-04-29T20:14:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000413.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 SCK-0842 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0097",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "VIJ-5775",
        "location": "台中市北屯區台灣大道二段",
        "confidence": 77,
        "timestamp": "2026-04-29T19:59:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000050.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000197.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000205.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VIJ-5775 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0098",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "FLS-8298",
        "location": "台中市北區五權西路",
        "confidence": 97,
        "timestamp": "2026-04-29T05:01:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000196.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000330.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 FLS-8298 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0099",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "NYN-5436",
        "location": "台中市豐原區五權西路",
        "confidence": 97,
        "timestamp": "2026-04-29T16:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000418.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000458.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 89km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 Hatchback，車牌 NYN-5436 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0100",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "XQQ-3624",
        "location": "台中市南區黎明路",
        "confidence": 98,
        "timestamp": "2026-04-29T04:04:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000413.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XQQ-3624 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0101",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "LHY-0610",
        "location": "台中市太平區台灣大道二段",
        "confidence": 81,
        "timestamp": "2026-04-29T05:22:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000234.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000458.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 75km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Sedan，車牌 LHY-0610 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0102",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "QTQ-9516",
        "location": "台中市豐原區台灣大道二段",
        "confidence": 84,
        "timestamp": "2026-04-29T04:50:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000178.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000320.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000113.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 QTQ-9516 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0103",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "OBH-9255",
        "location": "台中市中區文心路四段",
        "confidence": 86,
        "timestamp": "2026-04-29T04:03:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000416.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000054.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000154.jpg", "time": 4 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 OBH-9255 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0104",
        "status": "verified",
        "type": "違規停車",
        "plate": "AXB-4299",
        "location": "台中市北區環中路",
        "confidence": 81,
        "timestamp": "2026-04-29T00:52:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000104.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000342.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 AXB-4299 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0105",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "OHT-1895",
        "location": "台中市北屯區五權西路",
        "confidence": 86,
        "timestamp": "2026-04-29T09:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000392.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000247.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 OHT-1895 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0106",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "IPZ-5789",
        "location": "台中市太平區精誠路",
        "confidence": 97,
        "timestamp": "2026-04-29T05:44:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000372.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000246.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000079.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 IPZ-5789 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0107",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "OHR-2058",
        "location": "台中市西區崇德路三段",
        "confidence": 89,
        "timestamp": "2026-04-29T08:57:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000330.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000004.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 OHR-2058 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0108",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "ROI-8763",
        "location": "台中市南屯區台灣大道二段",
        "confidence": 92,
        "timestamp": "2026-04-29T20:29:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000384.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000102.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ROI-8763 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0109",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ZLQ-7138",
        "location": "台中市西屯區公益路",
        "confidence": 91,
        "timestamp": "2026-04-29T11:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000435.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000129.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 77km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Sedan，車牌 ZLQ-7138 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0110",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "NHL-7963",
        "location": "台中市豐原區中清路",
        "confidence": 82,
        "timestamp": "2026-04-29T15:20:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000043.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000479.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 61km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為黑色 Hatchback，車牌 NHL-7963 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0111",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "ATY-3118",
        "location": "台中市西區復興路",
        "confidence": 94,
        "timestamp": "2026-04-29T19:57:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000207.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000198.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000017.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ATY-3118 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0112",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "UBS-1661",
        "location": "台中市南屯區精誠路",
        "confidence": 87,
        "timestamp": "2026-04-29T11:57:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000059.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000069.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000241.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 UBS-1661 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0113",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "XEE-5694",
        "location": "台中市北屯區精誠路",
        "confidence": 86,
        "timestamp": "2026-04-29T04:31:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 90km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Hatchback，車牌 XEE-5694 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0114",
        "status": "pending",
        "type": "違規停車",
        "plate": "AZT-6709",
        "location": "台中市西屯區黎明路",
        "confidence": 96,
        "timestamp": "2026-04-29T06:29:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000138.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 AZT-6709 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0115",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "ZQX-1929",
        "location": "台中市中區台灣大道二段",
        "confidence": 94,
        "timestamp": "2026-04-29T19:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000165.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000224.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000190.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ZQX-1929 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0116",
        "status": "verified",
        "type": "違規停車",
        "plate": "RZP-0136",
        "location": "台中市南屯區精誠路",
        "confidence": 82,
        "timestamp": "2026-04-29T08:08:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000435.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000360.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 RZP-0136 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0117",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "AAY-8624",
        "location": "台中市南區復興路",
        "confidence": 95,
        "timestamp": "2026-04-29T16:52:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000098.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000294.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.5 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 AAY-8624 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0118",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "PLZ-4761",
        "location": "台中市北區環中路",
        "confidence": 77,
        "timestamp": "2026-04-29T17:24:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000451.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000389.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PLZ-4761 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0119",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ODH-0043",
        "location": "台中市中區中清路",
        "confidence": 76,
        "timestamp": "2026-04-29T13:29:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000055.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000041.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000093.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 89km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 Sedan，車牌 ODH-0043 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0120",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "YIG-4714",
        "location": "台中市南區精誠路",
        "confidence": 76,
        "timestamp": "2026-04-29T09:58:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000249.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000487.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000436.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 70km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Truck，車牌 YIG-4714 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0121",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "XOQ-6164",
        "location": "台中市中區公益路",
        "confidence": 99,
        "timestamp": "2026-04-29T18:34:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000057.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XOQ-6164 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0122",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "AMK-1913",
        "location": "台中市南屯區公益路",
        "confidence": 91,
        "timestamp": "2026-04-29T19:06:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 86km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 SUV，車牌 AMK-1913 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0123",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "TQO-6292",
        "location": "台中市西區台灣大道二段",
        "confidence": 90,
        "timestamp": "2026-04-29T09:01:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000358.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000012.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.3 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 TQO-6292 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0124",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "XGI-9826",
        "location": "台中市中區公益路",
        "confidence": 93,
        "timestamp": "2026-04-29T05:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000456.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000326.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000091.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XGI-9826 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0125",
        "status": "pending",
        "type": "違規停車",
        "plate": "WOL-1096",
        "location": "台中市豐原區公益路",
        "confidence": 94,
        "timestamp": "2026-04-29T15:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000456.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 WOL-1096 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0126",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "NRB-9896",
        "location": "台中市南區崇德路三段",
        "confidence": 76,
        "timestamp": "2026-04-29T02:01:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000144.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000333.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000307.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 76km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Hatchback，車牌 NRB-9896 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0127",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "IUZ-5947",
        "location": "台中市中區中清路",
        "confidence": 93,
        "timestamp": "2026-04-29T13:59:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000084.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000483.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000331.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.4 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 IUZ-5947 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0128",
        "status": "pending",
        "type": "違規停車",
        "plate": "LQA-8871",
        "location": "台中市大里區復興路",
        "confidence": 79,
        "timestamp": "2026-04-29T21:03:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000119.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000167.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 LQA-8871 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0129",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "NZQ-1026",
        "location": "台中市南區五權西路",
        "confidence": 77,
        "timestamp": "2026-04-29T03:19:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000499.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000283.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000305.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 NZQ-1026 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0130",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "UWK-6707",
        "location": "台中市南屯區公益路",
        "confidence": 80,
        "timestamp": "2026-04-29T04:06:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000184.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000229.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000294.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 UWK-6707 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0131",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "SGR-4683",
        "location": "台中市西屯區復興路",
        "confidence": 93,
        "timestamp": "2026-04-29T00:36:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000396.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000261.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000452.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 SGR-4683 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0132",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "LOS-4548",
        "location": "台中市南屯區中清路",
        "confidence": 87,
        "timestamp": "2026-04-29T15:19:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000313.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000135.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 LOS-4548 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0133",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "SXG-8512",
        "location": "台中市中區中清路",
        "confidence": 83,
        "timestamp": "2026-04-29T02:11:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000191.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000100.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 SXG-8512 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0134",
        "status": "pending",
        "type": "違規停車",
        "plate": "ODH-0491",
        "location": "台中市北區台灣大道二段",
        "confidence": 83,
        "timestamp": "2026-04-28T23:24:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000183.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000003.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000256.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ODH-0491 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0135",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "SQU-6623",
        "location": "台中市西屯區環中路",
        "confidence": 88,
        "timestamp": "2026-04-29T03:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000419.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000078.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 72km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為黑色 SUV，車牌 SQU-6623 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0136",
        "status": "verified",
        "type": "違規停車",
        "plate": "TBM-4865",
        "location": "台中市西屯區崇德路三段",
        "confidence": 98,
        "timestamp": "2026-04-29T11:47:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000202.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000042.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000190.jpg", "time": 4 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 TBM-4865 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0137",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "XDR-6251",
        "location": "台中市北區五權西路",
        "confidence": 83,
        "timestamp": "2026-04-29T07:51:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000495.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000273.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000325.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XDR-6251 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0138",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "TXI-8350",
        "location": "台中市西區黎明路",
        "confidence": 78,
        "timestamp": "2026-04-29T13:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000420.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000151.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 TXI-8350 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0139",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "UFT-9971",
        "location": "台中市北區精誠路",
        "confidence": 97,
        "timestamp": "2026-04-29T10:30:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000464.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000089.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 UFT-9971 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0140",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "QMK-4025",
        "location": "台中市豐原區精誠路",
        "confidence": 93,
        "timestamp": "2026-04-29T07:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000206.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000453.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 QMK-4025 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0141",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "GJR-1647",
        "location": "台中市南屯區文心路四段",
        "confidence": 86,
        "timestamp": "2026-04-29T18:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000362.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000496.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 GJR-1647 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0142",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "XDE-3284",
        "location": "台中市大里區崇德路三段",
        "confidence": 88,
        "timestamp": "2026-04-29T07:15:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000331.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000325.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000262.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 72km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 SUV，車牌 XDE-3284 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0143",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "RXY-9185",
        "location": "台中市大里區文心路四段",
        "confidence": 86,
        "timestamp": "2026-04-29T09:49:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000007.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000419.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000311.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 RXY-9185 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0144",
        "status": "pending",
        "type": "違規停車",
        "plate": "ZXQ-1707",
        "location": "台中市大里區台灣大道二段",
        "confidence": 87,
        "timestamp": "2026-04-29T05:14:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000370.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000451.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ZXQ-1707 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0145",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "HDE-5415",
        "location": "台中市豐原區復興路",
        "confidence": 79,
        "timestamp": "2026-04-29T18:25:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000070.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000070.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 HDE-5415 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0146",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "CFL-6256",
        "location": "台中市西區中清路",
        "confidence": 87,
        "timestamp": "2026-04-29T18:11:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000454.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000245.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000154.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 86km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Sedan，車牌 CFL-6256 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0147",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "NSJ-7574",
        "location": "台中市北屯區復興路",
        "confidence": 84,
        "timestamp": "2026-04-28T23:28:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000221.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000466.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000469.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 81km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Hatchback，車牌 NSJ-7574 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0148",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "TAH-9992",
        "location": "台中市北屯區崇德路三段",
        "confidence": 82,
        "timestamp": "2026-04-29T19:06:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000275.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000336.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 73km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 SUV，車牌 TAH-9992 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0149",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "HZH-8518",
        "location": "台中市中區公益路",
        "confidence": 92,
        "timestamp": "2026-04-29T05:12:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000322.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000212.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000170.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 HZH-8518 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0150",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "PAS-4207",
        "location": "台中市中區復興路",
        "confidence": 97,
        "timestamp": "2026-04-29T01:53:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000267.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000207.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PAS-4207 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0151",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "OIG-3364",
        "location": "台中市北區公益路",
        "confidence": 89,
        "timestamp": "2026-04-29T03:42:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000479.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000307.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 OIG-3364 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0152",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "OON-4033",
        "location": "台中市大里區台灣大道二段",
        "confidence": 80,
        "timestamp": "2026-04-29T12:57:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 86km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Hatchback，車牌 OON-4033 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0153",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "DNR-4356",
        "location": "台中市西屯區台灣大道二段",
        "confidence": 78,
        "timestamp": "2026-04-29T10:08:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000180.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000213.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000331.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 82km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為黑色 Truck，車牌 DNR-4356 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0154",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "JAY-2384",
        "location": "台中市北區五權西路",
        "confidence": 78,
        "timestamp": "2026-04-29T06:48:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000438.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000010.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000397.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 70km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 SUV，車牌 JAY-2384 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0155",
        "status": "pending",
        "type": "違規停車",
        "plate": "ASO-6038",
        "location": "台中市南屯區精誠路",
        "confidence": 93,
        "timestamp": "2026-04-29T02:08:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000107.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000311.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000340.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ASO-6038 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0156",
        "status": "verified",
        "type": "違規停車",
        "plate": "CWP-1084",
        "location": "台中市西區精誠路",
        "confidence": 87,
        "timestamp": "2026-04-29T06:34:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000492.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000372.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 CWP-1084 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0157",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "WXN-9187",
        "location": "台中市豐原區公益路",
        "confidence": 96,
        "timestamp": "2026-04-29T14:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000148.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000007.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000389.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 77km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Sedan，車牌 WXN-9187 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0158",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "GNO-5773",
        "location": "台中市太平區文心路四段",
        "confidence": 82,
        "timestamp": "2026-04-29T03:02:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000247.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000243.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 79km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 Hatchback，車牌 GNO-5773 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0159",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "AXB-0321",
        "location": "台中市北區公益路",
        "confidence": 97,
        "timestamp": "2026-04-29T12:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000028.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000027.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000112.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 AXB-0321 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0160",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "MXU-6093",
        "location": "台中市北區崇德路三段",
        "confidence": 81,
        "timestamp": "2026-04-29T01:47:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000002.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000318.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000150.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 59km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 SUV，車牌 MXU-6093 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0161",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "FEK-7694",
        "location": "台中市大里區五權西路",
        "confidence": 77,
        "timestamp": "2026-04-29T13:02:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000455.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000285.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.2 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 FEK-7694 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0162",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "EHE-2645",
        "location": "台中市北屯區精誠路",
        "confidence": 94,
        "timestamp": "2026-04-29T16:05:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000495.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000024.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000453.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 EHE-2645 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0163",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "UUG-5688",
        "location": "台中市北屯區復興路",
        "confidence": 96,
        "timestamp": "2026-04-29T22:02:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000049.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 82km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 SUV，車牌 UUG-5688 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0164",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "MMJ-6439",
        "location": "台中市北屯區精誠路",
        "confidence": 90,
        "timestamp": "2026-04-29T12:50:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000361.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000486.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.4 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 MMJ-6439 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0165",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "NSD-2396",
        "location": "台中市太平區台灣大道二段",
        "confidence": 99,
        "timestamp": "2026-04-29T08:25:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 NSD-2396 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0166",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "CDU-6170",
        "location": "台中市太平區黎明路",
        "confidence": 89,
        "timestamp": "2026-04-29T00:26:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000469.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000222.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000414.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 64km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Sedan，車牌 CDU-6170 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0167",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "QSY-2541",
        "location": "台中市南屯區台灣大道二段",
        "confidence": 82,
        "timestamp": "2026-04-29T08:50:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000112.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000306.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 QSY-2541 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0168",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "PBU-6493",
        "location": "台中市豐原區公益路",
        "confidence": 95,
        "timestamp": "2026-04-29T16:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000018.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000446.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PBU-6493 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0169",
        "status": "pending",
        "type": "違規停車",
        "plate": "JGI-7613",
        "location": "台中市北區黎明路",
        "confidence": 83,
        "timestamp": "2026-04-29T01:00:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000183.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000202.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000441.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 JGI-7613 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0170",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "VKP-4407",
        "location": "台中市南區精誠路",
        "confidence": 98,
        "timestamp": "2026-04-29T00:59:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000409.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000084.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000105.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VKP-4407 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0171",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "BKK-1699",
        "location": "台中市南屯區公益路",
        "confidence": 95,
        "timestamp": "2026-04-29T09:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000442.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000489.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 BKK-1699 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0172",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "WJK-9721",
        "location": "台中市西屯區台灣大道二段",
        "confidence": 90,
        "timestamp": "2026-04-29T11:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000467.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000457.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WJK-9721 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0173",
        "status": "pending",
        "type": "違規停車",
        "plate": "VUT-1152",
        "location": "台中市西區文心路四段",
        "confidence": 81,
        "timestamp": "2026-04-29T05:19:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000015.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000255.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000229.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 VUT-1152 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0174",
        "status": "pending",
        "type": "違規停車",
        "plate": "CQO-1029",
        "location": "台中市北屯區五權西路",
        "confidence": 85,
        "timestamp": "2026-04-29T22:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000422.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000047.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 CQO-1029 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0175",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "CML-6139",
        "location": "台中市北區環中路",
        "confidence": 99,
        "timestamp": "2026-04-29T11:04:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000444.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000174.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000265.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 CML-6139 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0176",
        "status": "verified",
        "type": "違規停車",
        "plate": "WAY-0986",
        "location": "台中市西區環中路",
        "confidence": 81,
        "timestamp": "2026-04-29T10:22:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 WAY-0986 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0177",
        "status": "verified",
        "type": "違規停車",
        "plate": "ZIW-1912",
        "location": "台中市北區公益路",
        "confidence": 99,
        "timestamp": "2026-04-29T19:02:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000209.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000179.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ZIW-1912 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0178",
        "status": "verified",
        "type": "違規停車",
        "plate": "IZV-2164",
        "location": "台中市北區五權西路",
        "confidence": 83,
        "timestamp": "2026-04-29T17:29:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000239.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000313.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 IZV-2164 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0179",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "SVY-9407",
        "location": "台中市南區環中路",
        "confidence": 81,
        "timestamp": "2026-04-29T02:53:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000329.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000176.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 68km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 SUV，車牌 SVY-9407 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0180",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "XLZ-7330",
        "location": "台中市大里區環中路",
        "confidence": 81,
        "timestamp": "2026-04-29T07:27:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000472.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000441.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.2 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XLZ-7330 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0181",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ETR-4580",
        "location": "台中市豐原區復興路",
        "confidence": 97,
        "timestamp": "2026-04-29T08:45:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000360.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 72km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Sedan，車牌 ETR-4580 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0182",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "WFV-8548",
        "location": "台中市南屯區精誠路",
        "confidence": 90,
        "timestamp": "2026-04-28T23:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000025.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000297.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WFV-8548 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0183",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "GXL-6286",
        "location": "台中市北區台灣大道二段",
        "confidence": 86,
        "timestamp": "2026-04-29T11:16:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000320.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000416.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 GXL-6286 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0184",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ZFT-9616",
        "location": "台中市太平區文心路四段",
        "confidence": 84,
        "timestamp": "2026-04-29T08:18:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000271.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 83km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 SUV，車牌 ZFT-9616 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0185",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "XNT-6004",
        "location": "台中市南屯區崇德路三段",
        "confidence": 84,
        "timestamp": "2026-04-29T03:15:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000401.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000417.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XNT-6004 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0186",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "CMT-6572",
        "location": "台中市西區中清路",
        "confidence": 86,
        "timestamp": "2026-04-29T09:36:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000084.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000278.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 57km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Truck，車牌 CMT-6572 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0187",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "PIG-8195",
        "location": "台中市豐原區台灣大道二段",
        "confidence": 94,
        "timestamp": "2026-04-29T16:43:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PIG-8195 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0188",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "MCD-4425",
        "location": "台中市中區精誠路",
        "confidence": 85,
        "timestamp": "2026-04-29T03:41:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000283.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000089.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 MCD-4425 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0189",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "AZY-0811",
        "location": "台中市豐原區黎明路",
        "confidence": 77,
        "timestamp": "2026-04-29T06:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000278.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000354.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 AZY-0811 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0190",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "ZXA-7611",
        "location": "台中市西區崇德路三段",
        "confidence": 87,
        "timestamp": "2026-04-29T12:49:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000071.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000500.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ZXA-7611 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0191",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "PHL-1056",
        "location": "台中市西區精誠路",
        "confidence": 80,
        "timestamp": "2026-04-29T03:17:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000336.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000385.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PHL-1056 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0192",
        "status": "pending",
        "type": "違規停車",
        "plate": "FPX-1591",
        "location": "台中市西屯區環中路",
        "confidence": 81,
        "timestamp": "2026-04-28T23:15:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000440.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000256.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000388.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 FPX-1591 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0193",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "RCZ-1698",
        "location": "台中市南區崇德路三段",
        "confidence": 86,
        "timestamp": "2026-04-29T05:33:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000448.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000446.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000015.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 54km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Hatchback，車牌 RCZ-1698 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0194",
        "status": "pending",
        "type": "違規停車",
        "plate": "JUQ-7530",
        "location": "台中市南區五權西路",
        "confidence": 88,
        "timestamp": "2026-04-29T14:17:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 JUQ-7530 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0195",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "ZTJ-0233",
        "location": "台中市中區中清路",
        "confidence": 87,
        "timestamp": "2026-04-29T15:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000462.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.3 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ZTJ-0233 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0196",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "RIH-8435",
        "location": "台中市南屯區台灣大道二段",
        "confidence": 93,
        "timestamp": "2026-04-29T21:17:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000200.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000143.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000161.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 65km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為黑色 Hatchback，車牌 RIH-8435 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0197",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "QQK-8580",
        "location": "台中市北屯區五權西路",
        "confidence": 97,
        "timestamp": "2026-04-29T10:22:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000178.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000393.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000016.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 81km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Sedan，車牌 QQK-8580 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0198",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "YHS-5612",
        "location": "台中市南屯區文心路四段",
        "confidence": 88,
        "timestamp": "2026-04-29T04:45:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000402.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 YHS-5612 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0199",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ALB-0846",
        "location": "台中市北屯區台灣大道二段",
        "confidence": 92,
        "timestamp": "2026-04-29T21:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000361.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000203.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 56km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 SUV，車牌 ALB-0846 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0200",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "YYE-2780",
        "location": "台中市中區環中路",
        "confidence": 83,
        "timestamp": "2026-04-29T12:18:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000249.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000369.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 YYE-2780 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0201",
        "status": "pending",
        "type": "違規停車",
        "plate": "URU-8986",
        "location": "台中市豐原區復興路",
        "confidence": 79,
        "timestamp": "2026-04-29T21:42:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000448.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000156.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000408.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 URU-8986 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0202",
        "status": "pending",
        "type": "違規停車",
        "plate": "AKJ-2503",
        "location": "台中市西區五權西路",
        "confidence": 85,
        "timestamp": "2026-04-29T22:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000324.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000457.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 AKJ-2503 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0203",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ZKZ-3878",
        "location": "台中市南屯區精誠路",
        "confidence": 87,
        "timestamp": "2026-04-29T21:00:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000210.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000388.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 88km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為黑色 SUV，車牌 ZKZ-3878 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0204",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "LOP-1183",
        "location": "台中市北屯區復興路",
        "confidence": 86,
        "timestamp": "2026-04-29T15:16:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000176.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000293.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 LOP-1183 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0205",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "PVJ-6877",
        "location": "台中市太平區五權西路",
        "confidence": 90,
        "timestamp": "2026-04-29T20:34:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000473.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000231.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PVJ-6877 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0206",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "VEL-1988",
        "location": "台中市豐原區精誠路",
        "confidence": 96,
        "timestamp": "2026-04-29T18:11:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000029.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VEL-1988 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0207",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "EPP-6119",
        "location": "台中市中區復興路",
        "confidence": 96,
        "timestamp": "2026-04-29T04:27:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000231.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000320.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000295.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 EPP-6119 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0208",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "HNK-7006",
        "location": "台中市北屯區公益路",
        "confidence": 94,
        "timestamp": "2026-04-29T13:44:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000254.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 50km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 Truck，車牌 HNK-7006 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0209",
        "status": "verified",
        "type": "違規停車",
        "plate": "HUK-1392",
        "location": "台中市豐原區環中路",
        "confidence": 77,
        "timestamp": "2026-04-29T04:50:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000058.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000197.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000333.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 HUK-1392 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0210",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "VOX-1151",
        "location": "台中市南屯區中清路",
        "confidence": 97,
        "timestamp": "2026-04-29T07:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000016.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000468.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000170.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VOX-1151 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0211",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "NMO-5799",
        "location": "台中市大里區環中路",
        "confidence": 89,
        "timestamp": "2026-04-29T11:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000206.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000297.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000055.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 NMO-5799 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0212",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "OQK-5560",
        "location": "台中市大里區台灣大道二段",
        "confidence": 86,
        "timestamp": "2026-04-29T00:56:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000329.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000261.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 55km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Hatchback，車牌 OQK-5560 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0213",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "NHG-4336",
        "location": "台中市北屯區五權西路",
        "confidence": 99,
        "timestamp": "2026-04-29T19:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000244.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.3 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 NHG-4336 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0214",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "KOJ-0570",
        "location": "台中市北屯區五權西路",
        "confidence": 78,
        "timestamp": "2026-04-29T01:17:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000074.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000255.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000281.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 70km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Truck，車牌 KOJ-0570 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0215",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "PRS-6832",
        "location": "台中市西屯區環中路",
        "confidence": 98,
        "timestamp": "2026-04-29T05:05:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000242.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000366.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PRS-6832 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0216",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "PDK-1539",
        "location": "台中市豐原區精誠路",
        "confidence": 81,
        "timestamp": "2026-04-29T09:48:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000146.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000232.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000400.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PDK-1539 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0217",
        "status": "pending",
        "type": "違規停車",
        "plate": "XFP-7023",
        "location": "台中市西區中清路",
        "confidence": 83,
        "timestamp": "2026-04-29T06:17:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000145.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 XFP-7023 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0218",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "YIH-8765",
        "location": "台中市太平區黎明路",
        "confidence": 91,
        "timestamp": "2026-04-29T04:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000422.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000323.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000186.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 81km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為黑色 Truck，車牌 YIH-8765 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0219",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "ACY-4659",
        "location": "台中市北區台灣大道二段",
        "confidence": 93,
        "timestamp": "2026-04-29T03:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000131.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000286.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000325.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.2 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ACY-4659 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0220",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "ZQL-2515",
        "location": "台中市南區崇德路三段",
        "confidence": 81,
        "timestamp": "2026-04-28T23:57:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000045.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000136.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000401.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ZQL-2515 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0221",
        "status": "verified",
        "type": "違規停車",
        "plate": "HZU-5458",
        "location": "台中市豐原區黎明路",
        "confidence": 95,
        "timestamp": "2026-04-29T04:08:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000500.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000339.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 HZU-5458 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0222",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "EBI-4130",
        "location": "台中市西屯區五權西路",
        "confidence": 78,
        "timestamp": "2026-04-29T10:11:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000431.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000229.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000296.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.8 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 EBI-4130 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0223",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "NML-3662",
        "location": "台中市中區復興路",
        "confidence": 83,
        "timestamp": "2026-04-29T21:39:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000186.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000121.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 87km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Truck，車牌 NML-3662 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0224",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "VJY-3875",
        "location": "台中市西區環中路",
        "confidence": 87,
        "timestamp": "2026-04-29T06:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000163.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000358.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000274.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 53km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Sedan，車牌 VJY-3875 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0225",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "TAF-4447",
        "location": "台中市北屯區復興路",
        "confidence": 85,
        "timestamp": "2026-04-29T00:52:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000448.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 54km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Sedan，車牌 TAF-4447 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0226",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "AKM-6770",
        "location": "台中市南屯區崇德路三段",
        "confidence": 85,
        "timestamp": "2026-04-29T09:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000376.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000321.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000293.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 AKM-6770 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0227",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "KOT-7553",
        "location": "台中市西區台灣大道二段",
        "confidence": 89,
        "timestamp": "2026-04-29T18:28:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 50km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Hatchback，車牌 KOT-7553 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0228",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "FFG-3626",
        "location": "台中市北屯區精誠路",
        "confidence": 75,
        "timestamp": "2026-04-29T00:05:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000321.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000482.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000266.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.3 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 FFG-3626 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0229",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "YRM-4415",
        "location": "台中市北屯區崇德路三段",
        "confidence": 92,
        "timestamp": "2026-04-29T00:15:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000313.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000090.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000350.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 YRM-4415 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0230",
        "status": "verified",
        "type": "違規停車",
        "plate": "SIA-8179",
        "location": "台中市南屯區公益路",
        "confidence": 80,
        "timestamp": "2026-04-29T01:10:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000316.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000308.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000195.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 SIA-8179 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0231",
        "status": "verified",
        "type": "違規停車",
        "plate": "UZG-7692",
        "location": "台中市南區環中路",
        "confidence": 82,
        "timestamp": "2026-04-29T22:29:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000458.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000099.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000408.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 UZG-7692 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0232",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "HUI-2783",
        "location": "台中市西屯區文心路四段",
        "confidence": 95,
        "timestamp": "2026-04-29T02:28:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000035.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000128.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 HUI-2783 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0233",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "RGK-1456",
        "location": "台中市西屯區中清路",
        "confidence": 95,
        "timestamp": "2026-04-29T10:53:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000225.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000391.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000208.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 RGK-1456 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0234",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "JDY-9712",
        "location": "台中市西屯區復興路",
        "confidence": 77,
        "timestamp": "2026-04-29T01:04:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000315.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000434.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 JDY-9712 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0235",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "WFG-5276",
        "location": "台中市西屯區復興路",
        "confidence": 98,
        "timestamp": "2026-04-29T02:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000038.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000010.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WFG-5276 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0236",
        "status": "pending",
        "type": "違規停車",
        "plate": "XYZ-1727",
        "location": "台中市北區文心路四段",
        "confidence": 86,
        "timestamp": "2026-04-29T12:52:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000124.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 XYZ-1727 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0237",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "IGO-3084",
        "location": "台中市西區台灣大道二段",
        "confidence": 92,
        "timestamp": "2026-04-29T14:59:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000107.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000485.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 81km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 SUV，車牌 IGO-3084 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0238",
        "status": "pending",
        "type": "違規停車",
        "plate": "VME-7528",
        "location": "台中市北屯區復興路",
        "confidence": 89,
        "timestamp": "2026-04-29T05:52:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000219.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000377.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 VME-7528 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0239",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "SID-4221",
        "location": "台中市南區崇德路三段",
        "confidence": 89,
        "timestamp": "2026-04-28T23:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000460.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000301.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000025.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 SID-4221 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0240",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "OVZ-5409",
        "location": "台中市西屯區崇德路三段",
        "confidence": 86,
        "timestamp": "2026-04-29T18:14:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000462.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000022.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 OVZ-5409 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0241",
        "status": "verified",
        "type": "違規停車",
        "plate": "RGO-2429",
        "location": "台中市南區中清路",
        "confidence": 89,
        "timestamp": "2026-04-29T09:28:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000042.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000106.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000125.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 RGO-2429 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0242",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "WYO-4151",
        "location": "台中市西區黎明路",
        "confidence": 96,
        "timestamp": "2026-04-29T01:55:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000440.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000256.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 61km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 SUV，車牌 WYO-4151 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0243",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "EVV-9114",
        "location": "台中市西區台灣大道二段",
        "confidence": 82,
        "timestamp": "2026-04-29T07:35:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000045.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000081.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 74km/h，超過該路段限速 60km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Sedan，車牌 EVV-9114 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0244",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "XKC-3750",
        "location": "台中市西屯區精誠路",
        "confidence": 82,
        "timestamp": "2026-04-29T04:20:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000393.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000194.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000385.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.4 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XKC-3750 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0245",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "KHX-8522",
        "location": "台中市中區文心路四段",
        "confidence": 84,
        "timestamp": "2026-04-29T01:43:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000363.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.3 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 KHX-8522 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0246",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "XOD-9115",
        "location": "台中市北屯區復興路",
        "confidence": 98,
        "timestamp": "2026-04-29T09:57:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000215.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000000.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 XOD-9115 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0247",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "XKC-6738",
        "location": "台中市中區崇德路三段",
        "confidence": 99,
        "timestamp": "2026-04-29T21:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000086.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000129.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XKC-6738 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0248",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "FGO-0752",
        "location": "台中市中區環中路",
        "confidence": 96,
        "timestamp": "2026-04-29T07:38:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000473.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000215.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000500.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 FGO-0752 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0249",
        "status": "verified",
        "type": "違規停車",
        "plate": "RKP-4585",
        "location": "台中市北屯區台灣大道二段",
        "confidence": 78,
        "timestamp": "2026-04-29T05:12:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000461.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000020.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000312.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 RKP-4585 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0250",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "BBE-2277",
        "location": "台中市豐原區文心路四段",
        "confidence": 92,
        "timestamp": "2026-04-29T11:44:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000494.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000119.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000002.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 BBE-2277 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0251",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "VIE-7449",
        "location": "台中市大里區中清路",
        "confidence": 94,
        "timestamp": "2026-04-29T04:48:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000022.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VIE-7449 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0252",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "GHC-1625",
        "location": "台中市豐原區黎明路",
        "confidence": 78,
        "timestamp": "2026-04-29T08:35:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000420.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000024.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000381.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 85km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 Hatchback，車牌 GHC-1625 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0253",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "QRD-1846",
        "location": "台中市中區台灣大道二段",
        "confidence": 87,
        "timestamp": "2026-04-29T09:09:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000137.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000003.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000275.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 QRD-1846 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0254",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "RKC-2833",
        "location": "台中市南屯區黎明路",
        "confidence": 83,
        "timestamp": "2026-04-29T06:59:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.7 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 RKC-2833 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0255",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "ECM-1159",
        "location": "台中市西區文心路四段",
        "confidence": 80,
        "timestamp": "2026-04-29T21:35:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000425.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 ECM-1159 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0256",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "GFL-9852",
        "location": "台中市中區復興路",
        "confidence": 76,
        "timestamp": "2026-04-29T22:03:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000442.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000098.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.7 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 GFL-9852 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0257",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "FCR-1459",
        "location": "台中市西屯區台灣大道二段",
        "confidence": 94,
        "timestamp": "2026-04-28T23:01:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000001.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 FCR-1459 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0258",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "DLE-6721",
        "location": "台中市西區台灣大道二段",
        "confidence": 76,
        "timestamp": "2026-04-29T02:43:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000310.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 DLE-6721 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0259",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "UUK-6998",
        "location": "台中市南區台灣大道二段",
        "confidence": 83,
        "timestamp": "2026-04-29T07:42:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000139.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000001.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.5 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 UUK-6998 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0260",
        "status": "verified",
        "type": "違規停車",
        "plate": "DBU-3156",
        "location": "台中市南區台灣大道二段",
        "confidence": 98,
        "timestamp": "2026-04-28T23:57:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000152.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000357.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000338.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 DBU-3156 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0261",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "OZY-7811",
        "location": "台中市北區台灣大道二段",
        "confidence": 97,
        "timestamp": "2026-04-29T04:00:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000085.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000114.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 OZY-7811 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0262",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "VZE-7071",
        "location": "台中市北屯區台灣大道二段",
        "confidence": 86,
        "timestamp": "2026-04-29T00:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000038.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000186.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000136.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 55km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Sedan，車牌 VZE-7071 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0263",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "FXE-9457",
        "location": "台中市北屯區五權西路",
        "confidence": 79,
        "timestamp": "2026-04-29T20:19:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000005.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000048.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 FXE-9457 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0264",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "WTI-5830",
        "location": "台中市太平區文心路四段",
        "confidence": 85,
        "timestamp": "2026-04-29T08:19:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000433.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000130.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 WTI-5830 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0265",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "UFJ-8129",
        "location": "台中市大里區環中路",
        "confidence": 75,
        "timestamp": "2026-04-29T12:05:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000477.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000494.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000338.jpg", "time": 4 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 88km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 SUV，車牌 UFJ-8129 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0266",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "OSX-9337",
        "location": "台中市中區公益路",
        "confidence": 85,
        "timestamp": "2026-04-29T14:14:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000475.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000333.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000321.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 51km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為銀色 SUV，車牌 OSX-9337 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0267",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "LLA-8116",
        "location": "台中市西區崇德路三段",
        "confidence": 88,
        "timestamp": "2026-04-29T06:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000457.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000316.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 LLA-8116 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0268",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "ZIL-6208",
        "location": "台中市大里區台灣大道二段",
        "confidence": 86,
        "timestamp": "2026-04-29T00:37:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000238.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000213.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 89km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Hatchback，車牌 ZIL-6208 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0269",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "SUL-3508",
        "location": "台中市北區中清路",
        "confidence": 83,
        "timestamp": "2026-04-29T13:16:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000259.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000163.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 70km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為灰色 Sedan，車牌 SUL-3508 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0270",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "XZR-2564",
        "location": "台中市大里區中清路",
        "confidence": 76,
        "timestamp": "2026-04-29T04:33:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000471.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000259.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 XZR-2564 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0271",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "JDT-6133",
        "location": "台中市中區五權西路",
        "confidence": 93,
        "timestamp": "2026-04-29T10:14:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000210.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000135.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000466.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 JDT-6133 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0272",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "HES-2964",
        "location": "台中市中區中清路",
        "confidence": 94,
        "timestamp": "2026-04-29T07:26:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000056.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000424.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 HES-2964 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0273",
        "status": "verified",
        "type": "違規停車",
        "plate": "FVZ-7177",
        "location": "台中市中區中清路",
        "confidence": 98,
        "timestamp": "2026-04-29T14:54:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000047.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000378.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000120.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 FVZ-7177 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0274",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "SWM-4849",
        "location": "台中市西屯區中清路",
        "confidence": 81,
        "timestamp": "2026-04-29T16:21:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000462.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000408.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 SWM-4849 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0275",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "VPB-2199",
        "location": "台中市西區黎明路",
        "confidence": 85,
        "timestamp": "2026-04-29T01:50:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000064.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000156.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000184.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 VPB-2199 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0276",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "JKU-7701",
        "location": "台中市南區崇德路三段",
        "confidence": 90,
        "timestamp": "2026-04-29T05:51:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000344.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000228.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.6 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 JKU-7701 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0277",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "EPQ-1808",
        "location": "台中市北區文心路四段",
        "confidence": 82,
        "timestamp": "2026-04-29T15:04:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000094.jpg", "time": 9 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000028.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 EPQ-1808 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0278",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "IWM-7881",
        "location": "台中市北區黎明路",
        "confidence": 78,
        "timestamp": "2026-04-29T21:23:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000417.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000051.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000489.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.1 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 IWM-7881 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0279",
        "status": "pending",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "MLS-8373",
        "location": "台中市西屯區中清路",
        "confidence": 85,
        "timestamp": "2026-04-29T20:53:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000079.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000035.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000237.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 83km/h，超過該路段限速 50km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 Hatchback，車牌 MLS-8373 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0280",
        "status": "cancelled",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "CAG-7367",
        "location": "台中市南屯區台灣大道二段",
        "confidence": 99,
        "timestamp": "2026-04-29T05:07:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000124.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000007.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 78km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為藍色 Hatchback，車牌 CAG-7367 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0281",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "HTY-1335",
        "location": "台中市西屯區精誠路",
        "confidence": 89,
        "timestamp": "2026-04-29T15:10:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000013.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000363.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 HTY-1335 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0282",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "SYN-6890",
        "location": "台中市北區精誠路",
        "confidence": 95,
        "timestamp": "2026-04-29T18:00:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000464.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000245.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000206.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 80km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為紅色 SUV，車牌 SYN-6890 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0283",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "SHJ-1671",
        "location": "台中市西區公益路",
        "confidence": 92,
        "timestamp": "2026-04-29T11:19:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.3 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 SHJ-1671 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0284",
        "status": "cancelled",
        "type": "違規停車",
        "plate": "XWR-9190",
        "location": "台中市北區復興路",
        "confidence": 91,
        "timestamp": "2026-04-29T09:53:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000419.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 XWR-9190 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0285",
        "status": "verified",
        "type": "違規停車",
        "plate": "ZGB-7018",
        "location": "台中市北區環中路",
        "confidence": 91,
        "timestamp": "2026-04-29T20:47:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000244.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000174.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 ZGB-7018 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0286",
        "status": "pending",
        "type": "闖紅燈",
        "plate": "BYJ-8058",
        "location": "台中市北區台灣大道二段",
        "confidence": 80,
        "timestamp": "2026-04-29T02:45:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000176.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000431.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000070.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 0.9 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 BYJ-8058 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0287",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "AUD-3379",
        "location": "台中市南屯區黎明路",
        "confidence": 88,
        "timestamp": "2026-04-29T09:44:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000382.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000123.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg", "time": 5 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.5 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 AUD-3379 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0288",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "CLG-9654",
        "location": "台中市南區崇德路三段",
        "confidence": 76,
        "timestamp": "2026-04-29T03:09:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000433.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000049.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000372.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 CLG-9654 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0289",
        "status": "verified",
        "type": "闖紅燈",
        "plate": "EKP-9323",
        "location": "台中市西屯區公益路",
        "confidence": 79,
        "timestamp": "2026-04-29T04:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000166.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 1.0 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 EKP-9323 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0290",
        "status": "verified",
        "type": "超速行駛 (限速 45, 實測 65)",
        "plate": "VTB-4776",
        "location": "台中市南區崇德路三段",
        "confidence": 99,
        "timestamp": "2026-04-29T07:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000396.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000109.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 40 條：汽車駕駛人，行車速度，超過規定之最高時速。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：測速雷達偵測該車速為 65km/h，超過該路段限速 40km/h。"
            },
            {
                "type": "ai",
                "text": "物件辨識：標的車輛為白色 Hatchback，車牌 VTB-4776 清晰可見。"
            }
        ]
    },
    {
        "id": "AA-0291",
        "status": "verified",
        "type": "違規停車",
        "plate": "HSF-5429",
        "location": "台中市大里區五權西路",
        "confidence": 90,
        "timestamp": "2026-04-29T18:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000153.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000193.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000131.jpg", "time": 8 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 HSF-5429 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0292",
        "status": "pending",
        "type": "違規停車",
        "plate": "DDY-1010",
        "location": "台中市北屯區台灣大道二段",
        "confidence": 78,
        "timestamp": "2026-04-29T14:56:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000496.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000483.jpg", "time": 6 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000300.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 DDY-1010 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0293",
        "status": "verified",
        "type": "違規停車",
        "plate": "VLE-7236",
        "location": "台中市南區黎明路",
        "confidence": 87,
        "timestamp": "2026-04-29T17:56:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000220.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000051.jpg", "time": 6 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 56 條：汽車駕駛人在禁止臨時停車處所停車。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：偵測到車輛於紅線區域靜止超過 3 分鐘。"
            },
            {
                "type": "ai",
                "text": "物件辨識：車輛 VLE-7236 佔用機車優先道。"
            }
        ]
    },
    {
        "id": "AA-0294",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "HOU-5490",
        "location": "台中市南區崇德路三段",
        "confidence": 97,
        "timestamp": "2026-04-29T04:13:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000147.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000209.jpg", "time": 5 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000344.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 HOU-5490 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0295",
        "status": "verified",
        "type": "未依標誌指示行駛",
        "plate": "NER-7392",
        "location": "台中市中區五權西路",
        "confidence": 93,
        "timestamp": "2026-04-29T01:49:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg", "time": 1 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000444.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000207.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 NER-7392 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0296",
        "status": "cancelled",
        "type": "闖紅燈",
        "plate": "MRO-6889",
        "location": "台中市西區文心路四段",
        "confidence": 97,
        "timestamp": "2026-04-29T08:46:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg", "time": 3 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg", "time": 10 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 53 條：汽車駕駛人，行經有燈光號誌管制之交岔路口闖紅燈者。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：紅燈亮起後 2.8 秒，車輛仍強行通過停止線。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 MRO-6889 於紅燈狀態下跨越路口。"
            }
        ]
    },
    {
        "id": "AA-0297",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "NGZ-4318",
        "location": "台中市大里區文心路四段",
        "confidence": 94,
        "timestamp": "2026-04-29T00:40:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000059.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000423.jpg", "time": 8 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000460.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 NGZ-4318 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0298",
        "status": "cancelled",
        "type": "未依標誌指示行駛",
        "plate": "RRJ-6596",
        "location": "台中市大里區五權西路",
        "confidence": 87,
        "timestamp": "2026-04-29T14:07:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000354.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg", "time": 7 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg", "time": 9 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 RRJ-6596 未依地面標線指示行駛。"
            }
        ]
    },
    {
        "id": "AA-0299",
        "status": "pending",
        "type": "未依標誌指示行駛",
        "plate": "PKA-1768",
        "location": "台中市西屯區黎明路",
        "confidence": 87,
        "timestamp": "2026-04-29T00:02:00",
        "images": [
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000135.jpg", "time": 2 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000417.jpg", "time": 4 },
            { "src": "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg", "time": 7 }
        ],
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "legalBasis": "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        "aiReport": [
            {
                "type": "ai",
                "text": "環境感測：該車道僅准左轉，車輛違規直行。"
            },
            {
                "type": "ai",
                "text": "物件辨識：偵測到車牌 PKA-1768 未依地面標線指示行駛。"
            }
        ]
    }
];