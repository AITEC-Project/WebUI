const mockCases = [
    {
        id: "AA-0000",
        status: "verified",
        type: "未依號誌行駛",
        plate: "GXQ-3629",
        location: "台中市北屯區環中路",
        confidence: 96,
        timestamp: "2026-05-28T06:28:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000464.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000438.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000228.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 GXQ-3629 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0001",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "MGA-4354",
        location: "台中市南區文心路四段",
        confidence: 90,
        timestamp: "2026-05-31T23:09:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000065.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000209.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 MGA-4354 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0002",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "STP-9968",
        location: "台中市北區文心路四段",
        confidence: 95,
        timestamp: "2026-05-30T13:47:00",
        images: [
            {
                src: "video/image01.jpg",
                time: 3
            },
            {
                src: "video/image02.jpg",
                time: 5
            },
            {
                src: "video/image03.jpg",
                time: 13
            }
        ],
        video: "video/video01.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        description: "偵測到該車道地面標線為「雙白線」，車輛違規跨越雙白線，偵測到車牌 STP-9968 未依規定車道行駛，跨越禁止變換車道線。",
        auditor: null
    },
    {
        id: "AA-0003",
        status: "cancelled",
        type: "逆向",
        plate: "VDZ-2252",
        location: "台中市南屯區環中路",
        confidence: 94,
        timestamp: "2026-05-25T22:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000425.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000485.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000091.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 VDZ-2252 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0004",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "PVF-6988",
        location: "台中市大里區中清路",
        confidence: 96,
        timestamp: "2026-05-25T08:06:00",
        images: [
            {
                src: "video/image04.jpg",
                time: 1
            },
            {
                src: "video/image05.jpg",
                time: 2
            },
            {
                src: "video/image06.jpg",
                time: 12
            }
        ],
        video: "video/video02.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條：不依標誌、標線、號誌指示。",
        description: "偵測到該車道地面標線為「雙黃線」，車輛違規跨越雙黃線，偵測到車牌 PVF-6988 未依規定車道行駛，跨越禁止變換車道線。",
        auditor: null
    },
    {
        id: "AA-0005",
        status: "cancelled",
        type: "闖紅燈",
        plate: "ZSH-3267",
        location: "台中市南區台灣大道二段",
        confidence: 78,
        timestamp: "2026-05-31T13:10:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000342.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000234.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 ZSH-3267 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0006",
        status: "pending",
        type: "未禮讓行人",
        plate: "TFG-0423",
        location: "台中市西區公益路",
        confidence: 95,
        timestamp: "2026-05-29T07:31:00",
        images: [
            {
                src: "video/image07.jpg",
                time: 0
            },
            {
                src: "video/image08.jpg",
                time: 1
            },
            {
                src: "video/image09.jpg",
                time: 2
            }
        ],
        video: "video/video03.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        description: "偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離，偵測到車牌 TFG-0423 於行人過馬路期間加速通過，且車頭已進入行人通行路徑。",
        auditor: null
    },
    {
        id: "AA-0007",
        status: "pending",
        type: "未禮讓行人",
        plate: "AXG-3009",
        location: "台中市北屯區環中路",
        confidence: 93,
        timestamp: "2026-05-27T17:58:00",
        images: [
            {
                src: "video/image10.jpg",
                time: 6
            },
            {
                src: "video/image11.jpg",
                time: 8
            },
            {
                src: "video/image12.jpg",
                time: 10
            }
        ],
        video: "video/video04.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        description: "偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離，偵測到車牌 AXG-3009 於行人過馬路期間加速通過，且車頭已進入行人通行路徑。",
        auditor: null
    },
    {
        id: "AA-0008",
        status: "pending",
        type: "未禮讓行人",
        plate: "FTK-4888",
        location: "台中市西區復興路",
        confidence: 82,
        timestamp: "2026-05-28T11:43:00",
        images: [
            {
                src: "video/image13.jpg",
                time: 3
            },
            {
                src: "video/image14.jpg",
                time: 6
            },
            {
                src: "video/image15.jpg",
                time: 13
            }
        ],
        video: "video/video05.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        description: "偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離，偵測到車牌 FTK-4888 於行人過馬路期間加速通過，且車頭已進入行人通行路徑。",
        auditor: null
    },
    {
        id: "AA-0009",
        status: "verified",
        type: "未依號誌行駛",
        plate: "KGS-7793",
        location: "台中市西屯區環中路",
        confidence: 96,
        timestamp: "2026-05-25T17:47:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000359.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 KGS-7793 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0010",
        status: "pending",
        type: "未禮讓行人",
        plate: "IBC-0156",
        location: "台中市北區公益路",
        confidence: 79,
        timestamp: "2026-05-27T19:06:00",
        images: [
            {
                src: "video/image16.jpg",
                time: 5
            },
            {
                src: "video/image17.jpg",
                time: 10
            },
            {
                src: "video/image18.jpg",
                time: 12
            }
        ],
        video: "video/video06.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條：汽車駕駛人，駕駛汽車行經行人穿越道有行人穿越時，不暫停讓行人先行通過者。",
        description: "偵測到行人正於行人穿越道通行，目標車輛未依規定與行人保持 3 公尺（三個枕木紋）以上距離，偵測到車牌 IBC-0156 為特殊車輛。",
        auditor: null
    },
    {
        id: "AA-0011",
        status: "pending",
        type: "逆向",
        plate: "OUI-4636",
        location: "台中市西屯區中清路",
        confidence: 85,
        timestamp: "2026-05-27T01:28:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000058.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 OUI-4636 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0012",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "ZWA-9747",
        location: "台中市南屯區環中路",
        confidence: 90,
        timestamp: "2026-05-30T13:49:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000486.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ZWA-9747 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0013",
        status: "verified",
        type: "違規迴轉",
        plate: "JJB-8639",
        location: "台中市西屯區復興路",
        confidence: 88,
        timestamp: "2026-05-29T03:39:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000391.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000369.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 JJB-8639 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "黃警員"
    },
    {
        id: "AA-0014",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "WPQ-7829",
        location: "台中市北區復興路",
        confidence: 75,
        timestamp: "2026-05-25T08:04:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000357.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000350.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000389.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 WPQ-7829 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0015",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "YTP-8087",
        location: "台中市中區黎明路",
        confidence: 99,
        timestamp: "2026-05-25T07:32:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000402.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000323.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000386.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 YTP-8087 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0016",
        status: "verified",
        type: "逆向",
        plate: "FXR-7934",
        location: "台中市南區中清路",
        confidence: 96,
        timestamp: "2026-05-29T10:22:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000426.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000358.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000113.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 FXR-7934 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0017",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "RFO-5067",
        location: "台中市南屯區精誠路",
        confidence: 75,
        timestamp: "2026-05-29T21:24:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000308.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 RFO-5067 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0018",
        status: "pending",
        type: "闖紅燈",
        plate: "MVH-1998",
        location: "台中市豐原區黎明路",
        confidence: 85,
        timestamp: "2026-05-30T07:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000284.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 MVH-1998 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0019",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "EBB-9076",
        location: "台中市太平區台灣大道二段",
        confidence: 81,
        timestamp: "2026-05-28T21:54:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000481.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 EBB-9076 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0020",
        status: "cancelled",
        type: "逆向",
        plate: "RLP-0797",
        location: "台中市南屯區精誠路",
        confidence: 76,
        timestamp: "2026-05-27T10:03:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000100.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 RLP-0797 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0021",
        status: "verified",
        type: "未依號誌行駛",
        plate: "YAV-5909",
        location: "台中市豐原區崇德路三段",
        confidence: 91,
        timestamp: "2026-05-26T20:05:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000235.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000461.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000213.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 YAV-5909 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0022",
        status: "verified",
        type: "違規迴轉",
        plate: "JHC-2395",
        location: "台中市西屯區復興路",
        confidence: 95,
        timestamp: "2026-05-26T02:51:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000443.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000190.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 JHC-2395 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "黃警員"
    },
    {
        id: "AA-0023",
        status: "verified",
        type: "闖紅燈",
        plate: "LVX-3171",
        location: "台中市豐原區五權西路",
        confidence: 80,
        timestamp: "2026-05-30T07:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 LVX-3171 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0024",
        status: "pending",
        type: "違規迴轉",
        plate: "AES-0432",
        location: "台中市北區環中路",
        confidence: 81,
        timestamp: "2026-05-31T13:51:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000257.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg",
                time: 4
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 AES-0432 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0025",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "JHB-9250",
        location: "台中市太平區復興路",
        confidence: 83,
        timestamp: "2026-05-29T00:06:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000250.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000357.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000175.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 JHB-9250 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0026",
        status: "pending",
        type: "逆向",
        plate: "SZT-6704",
        location: "台中市西屯區台灣大道二段",
        confidence: 80,
        timestamp: "2026-05-31T16:56:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000043.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000296.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 SZT-6704 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0027",
        status: "pending",
        type: "未禮讓行人",
        plate: "TCQ-4991",
        location: "台中市南屯區公益路",
        confidence: 82,
        timestamp: "2026-05-31T04:25:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000272.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000104.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000216.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 TCQ-4991 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0028",
        status: "cancelled",
        type: "闖紅燈",
        plate: "GLN-4295",
        location: "台中市西屯區精誠路",
        confidence: 86,
        timestamp: "2026-05-30T12:47:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000002.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 GLN-4295 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0029",
        status: "pending",
        type: "違規迴轉",
        plate: "AHO-4127",
        location: "台中市北區精誠路",
        confidence: 83,
        timestamp: "2026-05-25T01:24:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000009.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000311.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 AHO-4127 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0030",
        status: "cancelled",
        type: "違規迴轉",
        plate: "GPE-0697",
        location: "台中市中區五權西路",
        confidence: 98,
        timestamp: "2026-05-27T15:12:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000368.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000019.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000435.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 GPE-0697 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0031",
        status: "verified",
        type: "違規迴轉",
        plate: "MQR-8479",
        location: "台中市西屯區公益路",
        confidence: 99,
        timestamp: "2026-05-27T20:58:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000228.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000106.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 MQR-8479 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0032",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "GYG-5009",
        location: "台中市太平區公益路",
        confidence: 97,
        timestamp: "2026-05-25T18:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000420.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000380.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000014.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 GYG-5009 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0033",
        status: "cancelled",
        type: "闖紅燈",
        plate: "LNM-3863",
        location: "台中市北區文心路四段",
        confidence: 87,
        timestamp: "2026-05-25T11:56:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000112.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000459.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 LNM-3863 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0034",
        status: "cancelled",
        type: "闖紅燈",
        plate: "PWE-8882",
        location: "台中市南屯區環中路",
        confidence: 88,
        timestamp: "2026-05-25T11:16:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000316.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000270.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000144.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 PWE-8882 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0035",
        status: "cancelled",
        type: "闖紅燈",
        plate: "AGN-6451",
        location: "台中市太平區中清路",
        confidence: 83,
        timestamp: "2026-05-28T20:32:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000349.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000120.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 AGN-6451 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0036",
        status: "pending",
        type: "逆向",
        plate: "WPW-5317",
        location: "台中市北區復興路",
        confidence: 95,
        timestamp: "2026-05-29T16:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000259.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000295.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 WPW-5317 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0037",
        status: "pending",
        type: "違規迴轉",
        plate: "FCU-7676",
        location: "台中市南區公益路",
        confidence: 96,
        timestamp: "2026-05-26T06:24:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000359.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000292.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000255.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 FCU-7676 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0038",
        status: "pending",
        type: "違規迴轉",
        plate: "ZPK-5969",
        location: "台中市北區崇德路三段",
        confidence: 81,
        timestamp: "2026-05-30T01:15:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000187.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000380.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 ZPK-5969 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0039",
        status: "verified",
        type: "闖紅燈",
        plate: "BHR-3687",
        location: "台中市太平區文心路四段",
        confidence: 93,
        timestamp: "2026-05-26T02:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000172.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000437.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 BHR-3687 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0040",
        status: "pending",
        type: "未依號誌行駛",
        plate: "CPB-5632",
        location: "台中市北區公益路",
        confidence: 82,
        timestamp: "2026-05-25T12:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000045.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000250.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 CPB-5632 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0041",
        status: "cancelled",
        type: "逆向",
        plate: "AVP-8791",
        location: "台中市西屯區中清路",
        confidence: 88,
        timestamp: "2026-05-25T12:10:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000064.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000142.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 AVP-8791 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0042",
        status: "pending",
        type: "未禮讓行人",
        plate: "VRN-4638",
        location: "台中市北區崇德路三段",
        confidence: 93,
        timestamp: "2026-05-25T09:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000415.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000327.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 VRN-4638 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0043",
        status: "verified",
        type: "逆向",
        plate: "FHN-0301",
        location: "台中市豐原區崇德路三段",
        confidence: 96,
        timestamp: "2026-05-26T12:35:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000312.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 FHN-0301 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0044",
        status: "cancelled",
        type: "違規迴轉",
        plate: "JMD-8544",
        location: "台中市太平區公益路",
        confidence: 87,
        timestamp: "2026-05-31T16:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000499.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000161.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 JMD-8544 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0045",
        status: "verified",
        type: "違規迴轉",
        plate: "JTZ-4055",
        location: "台中市西區黎明路",
        confidence: 94,
        timestamp: "2026-05-30T21:31:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000039.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 JTZ-4055 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0046",
        status: "verified",
        type: "逆向",
        plate: "KBF-7685",
        location: "台中市北屯區公益路",
        confidence: 92,
        timestamp: "2026-05-31T06:01:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000215.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000203.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000123.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 KBF-7685 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0047",
        status: "pending",
        type: "未禮讓行人",
        plate: "MVX-7316",
        location: "台中市南屯區中清路",
        confidence: 99,
        timestamp: "2026-05-28T15:14:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000085.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000355.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 MVX-7316 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0048",
        status: "pending",
        type: "逆向",
        plate: "XNE-3445",
        location: "台中市南屯區文心路四段",
        confidence: 91,
        timestamp: "2026-05-31T05:58:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000017.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000250.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 XNE-3445 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0049",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "JFE-2783",
        location: "台中市豐原區公益路",
        confidence: 93,
        timestamp: "2026-05-26T16:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000406.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000443.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000495.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 JFE-2783 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0050",
        status: "cancelled",
        type: "闖紅燈",
        plate: "HSJ-6486",
        location: "台中市北屯區環中路",
        confidence: 82,
        timestamp: "2026-05-27T04:16:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000185.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000210.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000193.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 HSJ-6486 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0051",
        status: "pending",
        type: "闖紅燈",
        plate: "VMJ-2570",
        location: "台中市豐原區崇德路三段",
        confidence: 93,
        timestamp: "2026-05-30T11:19:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000105.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000240.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 VMJ-2570 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0052",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "BIS-7828",
        location: "台中市中區精誠路",
        confidence: 82,
        timestamp: "2026-05-29T23:12:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000054.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 BIS-7828 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0053",
        status: "cancelled",
        type: "逆向",
        plate: "TSO-3515",
        location: "台中市北區公益路",
        confidence: 75,
        timestamp: "2026-05-25T12:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000465.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000187.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000179.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 TSO-3515 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0054",
        status: "cancelled",
        type: "闖紅燈",
        plate: "WFW-4854",
        location: "台中市中區崇德路三段",
        confidence: 88,
        timestamp: "2026-05-27T05:22:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000477.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 WFW-4854 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0055",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "ODI-3772",
        location: "台中市西區精誠路",
        confidence: 87,
        timestamp: "2026-05-25T20:34:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000451.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ODI-3772 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0056",
        status: "verified",
        type: "逆向",
        plate: "BEZ-2183",
        location: "台中市北區文心路四段",
        confidence: 91,
        timestamp: "2026-05-28T14:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000238.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000147.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000034.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 BEZ-2183 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0057",
        status: "verified",
        type: "逆向",
        plate: "WGZ-7656",
        location: "台中市西區公益路",
        confidence: 84,
        timestamp: "2026-05-25T20:22:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000402.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000415.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 WGZ-7656 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0058",
        status: "verified",
        type: "未依號誌行駛",
        plate: "SHJ-7624",
        location: "台中市南區文心路四段",
        confidence: 84,
        timestamp: "2026-05-26T14:29:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000470.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000095.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 SHJ-7624 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0059",
        status: "verified",
        type: "逆向",
        plate: "LBZ-2084",
        location: "台中市大里區五權西路",
        confidence: 80,
        timestamp: "2026-05-31T18:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000077.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000005.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 LBZ-2084 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0060",
        status: "pending",
        type: "逆向",
        plate: "YYN-8157",
        location: "台中市大里區公益路",
        confidence: 78,
        timestamp: "2026-05-26T13:54:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000247.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 YYN-8157 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0061",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "SWJ-6298",
        location: "台中市西屯區黎明路",
        confidence: 92,
        timestamp: "2026-05-29T21:48:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000287.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000021.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 SWJ-6298 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0062",
        status: "verified",
        type: "闖紅燈",
        plate: "KBO-4789",
        location: "台中市大里區復興路",
        confidence: 92,
        timestamp: "2026-05-25T14:42:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000257.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 KBO-4789 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0063",
        status: "cancelled",
        type: "違規迴轉",
        plate: "QNN-5459",
        location: "台中市西區精誠路",
        confidence: 92,
        timestamp: "2026-05-28T13:54:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000100.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000173.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000388.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 QNN-5459 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0064",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "VNH-6196",
        location: "台中市大里區環中路",
        confidence: 84,
        timestamp: "2026-05-31T00:20:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000155.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000290.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000249.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 VNH-6196 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0065",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "MFU-2276",
        location: "台中市南區文心路四段",
        confidence: 90,
        timestamp: "2026-05-25T15:07:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000140.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000029.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 MFU-2276 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0066",
        status: "verified",
        type: "違規迴轉",
        plate: "LHF-6719",
        location: "台中市西屯區五權西路",
        confidence: 88,
        timestamp: "2026-05-31T22:52:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000337.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000499.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000302.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 LHF-6719 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0067",
        status: "cancelled",
        type: "闖紅燈",
        plate: "XUT-1486",
        location: "台中市中區復興路",
        confidence: 91,
        timestamp: "2026-05-25T21:45:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000034.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000363.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 XUT-1486 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0068",
        status: "verified",
        type: "未依號誌行駛",
        plate: "LAX-7336",
        location: "台中市太平區中清路",
        confidence: 96,
        timestamp: "2026-05-25T19:18:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000097.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000152.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 LAX-7336 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0069",
        status: "pending",
        type: "逆向",
        plate: "CJM-7200",
        location: "台中市北區崇德路三段",
        confidence: 83,
        timestamp: "2026-05-31T09:36:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000341.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000374.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 CJM-7200 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0070",
        status: "pending",
        type: "逆向",
        plate: "THY-5498",
        location: "台中市北區復興路",
        confidence: 99,
        timestamp: "2026-05-29T01:41:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000274.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000216.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 THY-5498 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0071",
        status: "pending",
        type: "違規迴轉",
        plate: "NZT-4415",
        location: "台中市中區黎明路",
        confidence: 78,
        timestamp: "2026-05-30T12:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000117.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000242.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000422.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 NZT-4415 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0072",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "KNO-1052",
        location: "台中市中區黎明路",
        confidence: 89,
        timestamp: "2026-05-31T22:14:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000090.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000276.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000369.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 KNO-1052 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0073",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "ANF-7900",
        location: "台中市豐原區復興路",
        confidence: 78,
        timestamp: "2026-05-27T10:36:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000225.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000460.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000214.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ANF-7900 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0074",
        status: "cancelled",
        type: "違規迴轉",
        plate: "BRY-4855",
        location: "台中市中區五權西路",
        confidence: 75,
        timestamp: "2026-05-27T08:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000097.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 BRY-4855 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0075",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "CID-2386",
        location: "台中市太平區五權西路",
        confidence: 97,
        timestamp: "2026-05-27T18:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000322.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000150.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 CID-2386 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0076",
        status: "cancelled",
        type: "闖紅燈",
        plate: "WTQ-2790",
        location: "台中市西屯區五權西路",
        confidence: 88,
        timestamp: "2026-05-30T14:48:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000194.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000271.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 WTQ-2790 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0077",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "GNP-8138",
        location: "台中市西區精誠路",
        confidence: 81,
        timestamp: "2026-05-28T10:08:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 GNP-8138 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0078",
        status: "pending",
        type: "闖紅燈",
        plate: "TOA-2917",
        location: "台中市太平區文心路四段",
        confidence: 92,
        timestamp: "2026-05-28T11:02:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000409.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000341.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000154.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 TOA-2917 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0079",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "ACN-6561",
        location: "台中市豐原區環中路",
        confidence: 86,
        timestamp: "2026-05-31T17:01:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000463.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000263.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ACN-6561 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0080",
        status: "cancelled",
        type: "闖紅燈",
        plate: "COV-3096",
        location: "台中市南區文心路四段",
        confidence: 81,
        timestamp: "2026-05-30T04:22:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000437.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000471.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000370.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 COV-3096 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0081",
        status: "verified",
        type: "闖紅燈",
        plate: "HPY-1912",
        location: "台中市太平區公益路",
        confidence: 97,
        timestamp: "2026-05-25T04:53:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000261.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 HPY-1912 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0082",
        status: "verified",
        type: "未依號誌行駛",
        plate: "EPT-0917",
        location: "台中市太平區文心路四段",
        confidence: 93,
        timestamp: "2026-05-29T18:08:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000006.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000400.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 EPT-0917 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0083",
        status: "pending",
        type: "逆向",
        plate: "NBH-9257",
        location: "台中市中區中清路",
        confidence: 91,
        timestamp: "2026-05-31T09:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000354.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 NBH-9257 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0084",
        status: "verified",
        type: "逆向",
        plate: "TQU-0884",
        location: "台中市南區文心路四段",
        confidence: 98,
        timestamp: "2026-05-30T00:04:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000276.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000131.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000430.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 TQU-0884 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0085",
        status: "verified",
        type: "未禮讓行人",
        plate: "JMT-3956",
        location: "台中市西屯區復興路",
        confidence: 77,
        timestamp: "2026-05-26T04:33:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000267.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000191.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000132.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 JMT-3956 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0086",
        status: "verified",
        type: "違規迴轉",
        plate: "DBG-2152",
        location: "台中市太平區文心路四段",
        confidence: 91,
        timestamp: "2026-05-28T11:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000009.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000440.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 DBG-2152 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0087",
        status: "verified",
        type: "逆向",
        plate: "IOG-2332",
        location: "台中市北區五權西路",
        confidence: 89,
        timestamp: "2026-05-31T21:09:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000056.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000400.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 IOG-2332 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0088",
        status: "pending",
        type: "未禮讓行人",
        plate: "APT-8446",
        location: "台中市豐原區黎明路",
        confidence: 98,
        timestamp: "2026-05-30T04:10:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000281.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000180.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 APT-8446 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0089",
        status: "pending",
        type: "違規迴轉",
        plate: "ANP-7647",
        location: "台中市中區中清路",
        confidence: 98,
        timestamp: "2026-05-31T08:50:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000193.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000415.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 ANP-7647 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0090",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "WQB-4061",
        location: "台中市豐原區五權西路",
        confidence: 99,
        timestamp: "2026-05-31T08:59:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000128.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000248.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 WQB-4061 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0091",
        status: "pending",
        type: "違規迴轉",
        plate: "DFZ-6406",
        location: "台中市南區精誠路",
        confidence: 99,
        timestamp: "2026-05-26T13:38:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000314.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000031.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 DFZ-6406 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0092",
        status: "verified",
        type: "闖紅燈",
        plate: "CWV-7759",
        location: "台中市豐原區公益路",
        confidence: 92,
        timestamp: "2026-05-30T18:49:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000271.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000262.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 CWV-7759 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0093",
        status: "verified",
        type: "未禮讓行人",
        plate: "AUV-2591",
        location: "台中市北屯區文心路四段",
        confidence: 96,
        timestamp: "2026-05-27T05:44:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000292.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000046.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 AUV-2591 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0094",
        status: "pending",
        type: "未依號誌行駛",
        plate: "IRH-0870",
        location: "台中市豐原區中清路",
        confidence: 91,
        timestamp: "2026-05-28T08:10:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000241.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000130.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 IRH-0870 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0095",
        status: "pending",
        type: "闖紅燈",
        plate: "SPJ-1720",
        location: "台中市北屯區黎明路",
        confidence: 82,
        timestamp: "2026-05-31T13:53:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000020.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000057.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 SPJ-1720 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0096",
        status: "pending",
        type: "未依號誌行駛",
        plate: "SCK-0842",
        location: "台中市西屯區五權西路",
        confidence: 94,
        timestamp: "2026-05-25T20:14:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000413.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 SCK-0842 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0097",
        status: "verified",
        type: "未禮讓行人",
        plate: "VIJ-5775",
        location: "台中市北屯區台灣大道二段",
        confidence: 77,
        timestamp: "2026-05-31T19:59:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000050.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000197.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000205.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 VIJ-5775 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0098",
        status: "pending",
        type: "違規迴轉",
        plate: "FLS-8298",
        location: "台中市北區五權西路",
        confidence: 97,
        timestamp: "2026-05-26T05:01:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000196.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000330.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 FLS-8298 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0099",
        status: "pending",
        type: "逆向",
        plate: "NYN-5436",
        location: "台中市豐原區五權西路",
        confidence: 97,
        timestamp: "2026-05-31T16:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000418.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000458.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 NYN-5436 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0100",
        status: "pending",
        type: "未依號誌行駛",
        plate: "XQQ-3624",
        location: "台中市南區黎明路",
        confidence: 98,
        timestamp: "2026-05-26T04:04:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000413.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 XQQ-3624 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0101",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "LHY-0610",
        location: "台中市太平區台灣大道二段",
        confidence: 81,
        timestamp: "2026-05-29T05:22:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000234.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000458.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 LHY-0610 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0102",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "QTQ-9516",
        location: "台中市豐原區台灣大道二段",
        confidence: 84,
        timestamp: "2026-05-28T04:50:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000178.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000320.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000113.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 QTQ-9516 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0103",
        status: "pending",
        type: "違規迴轉",
        plate: "OBH-9255",
        location: "台中市中區文心路四段",
        confidence: 86,
        timestamp: "2026-05-27T04:03:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000416.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000054.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000154.jpg",
                time: 4
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 OBH-9255 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0104",
        status: "verified",
        type: "闖紅燈",
        plate: "AXB-4299",
        location: "台中市北區環中路",
        confidence: 81,
        timestamp: "2026-05-26T00:52:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000104.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000342.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 AXB-4299 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0105",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "OHT-1895",
        location: "台中市北屯區五權西路",
        confidence: 86,
        timestamp: "2026-05-26T09:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000392.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000247.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 OHT-1895 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0106",
        status: "cancelled",
        type: "闖紅燈",
        plate: "IPZ-5789",
        location: "台中市太平區精誠路",
        confidence: 97,
        timestamp: "2026-05-29T05:44:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000372.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000246.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000079.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 IPZ-5789 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0107",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "OHR-2058",
        location: "台中市西區崇德路三段",
        confidence: 89,
        timestamp: "2026-05-28T08:57:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000330.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000004.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 OHR-2058 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0108",
        status: "cancelled",
        type: "闖紅燈",
        plate: "ROI-8763",
        location: "台中市南屯區台灣大道二段",
        confidence: 92,
        timestamp: "2026-05-25T20:29:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000384.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000102.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 ROI-8763 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0109",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "ZLQ-7138",
        location: "台中市西屯區公益路",
        confidence: 91,
        timestamp: "2026-05-26T11:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000435.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000129.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ZLQ-7138 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0110",
        status: "cancelled",
        type: "闖紅燈",
        plate: "NHL-7963",
        location: "台中市豐原區中清路",
        confidence: 82,
        timestamp: "2026-05-31T15:20:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000043.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000479.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 NHL-7963 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0111",
        status: "verified",
        type: "闖紅燈",
        plate: "ATY-3118",
        location: "台中市西區復興路",
        confidence: 94,
        timestamp: "2026-05-31T19:57:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000207.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000198.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000017.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 ATY-3118 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0112",
        status: "cancelled",
        type: "逆向",
        plate: "UBS-1661",
        location: "台中市南屯區精誠路",
        confidence: 87,
        timestamp: "2026-05-28T11:57:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000059.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000069.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000241.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 UBS-1661 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0113",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "XEE-5694",
        location: "台中市北屯區精誠路",
        confidence: 86,
        timestamp: "2026-05-26T04:31:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 XEE-5694 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0114",
        status: "pending",
        type: "違規迴轉",
        plate: "AZT-6709",
        location: "台中市西屯區黎明路",
        confidence: 96,
        timestamp: "2026-05-30T06:29:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000138.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 AZT-6709 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0115",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "ZQX-1929",
        location: "台中市中區台灣大道二段",
        confidence: 94,
        timestamp: "2026-05-30T19:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000165.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000224.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000190.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ZQX-1929 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0116",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "RZP-0136",
        location: "台中市南屯區精誠路",
        confidence: 82,
        timestamp: "2026-05-29T08:08:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000435.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000360.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 RZP-0136 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0117",
        status: "cancelled",
        type: "違規迴轉",
        plate: "AAY-8624",
        location: "台中市南區復興路",
        confidence: 95,
        timestamp: "2026-05-31T16:52:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000098.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000294.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 AAY-8624 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0118",
        status: "verified",
        type: "違規迴轉",
        plate: "PLZ-4761",
        location: "台中市北區環中路",
        confidence: 77,
        timestamp: "2026-05-28T17:24:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000451.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000389.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 PLZ-4761 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0119",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "ODH-0043",
        location: "台中市中區中清路",
        confidence: 76,
        timestamp: "2026-05-31T13:29:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000055.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000041.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000093.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ODH-0043 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0120",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "YIG-4714",
        location: "台中市南區精誠路",
        confidence: 76,
        timestamp: "2026-05-25T09:58:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000249.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000487.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000436.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 YIG-4714 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0121",
        status: "verified",
        type: "違規迴轉",
        plate: "XOQ-6164",
        location: "台中市中區公益路",
        confidence: 99,
        timestamp: "2026-05-28T18:34:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000057.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 XOQ-6164 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "黃警員"
    },
    {
        id: "AA-0122",
        status: "pending",
        type: "未禮讓行人",
        plate: "AMK-1913",
        location: "台中市南屯區公益路",
        confidence: 91,
        timestamp: "2026-05-28T19:06:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 AMK-1913 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0123",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "TQO-6292",
        location: "台中市西區台灣大道二段",
        confidence: 90,
        timestamp: "2026-05-30T09:01:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000358.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000012.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 TQO-6292 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0124",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "XGI-9826",
        location: "台中市中區公益路",
        confidence: 93,
        timestamp: "2026-05-25T05:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000456.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000326.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000091.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 XGI-9826 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0125",
        status: "pending",
        type: "違規迴轉",
        plate: "WOL-1096",
        location: "台中市豐原區公益路",
        confidence: 94,
        timestamp: "2026-05-29T15:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000456.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 WOL-1096 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0126",
        status: "pending",
        type: "未禮讓行人",
        plate: "NRB-9896",
        location: "台中市南區崇德路三段",
        confidence: 76,
        timestamp: "2026-05-31T02:01:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000144.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000333.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000307.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 NRB-9896 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0127",
        status: "pending",
        type: "違規迴轉",
        plate: "IUZ-5947",
        location: "台中市中區中清路",
        confidence: 93,
        timestamp: "2026-05-27T13:59:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000084.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000483.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000331.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 IUZ-5947 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0128",
        status: "pending",
        type: "未依號誌行駛",
        plate: "LQA-8871",
        location: "台中市大里區復興路",
        confidence: 79,
        timestamp: "2026-05-31T21:03:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000119.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000167.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 LQA-8871 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0129",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "NZQ-1026",
        location: "台中市南區五權西路",
        confidence: 77,
        timestamp: "2026-05-28T03:19:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000499.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000283.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000305.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 NZQ-1026 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0130",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "UWK-6707",
        location: "台中市南屯區公益路",
        confidence: 80,
        timestamp: "2026-05-28T04:06:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000184.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000229.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000294.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 UWK-6707 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0131",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "SGR-4683",
        location: "台中市西屯區復興路",
        confidence: 93,
        timestamp: "2026-05-28T00:36:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000396.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000261.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000452.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 SGR-4683 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0132",
        status: "verified",
        type: "闖紅燈",
        plate: "LOS-4548",
        location: "台中市南屯區中清路",
        confidence: 87,
        timestamp: "2026-05-28T15:19:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000313.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000135.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 LOS-4548 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0133",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "SXG-8512",
        location: "台中市中區中清路",
        confidence: 83,
        timestamp: "2026-05-26T02:11:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000269.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000191.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000100.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 SXG-8512 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0134",
        status: "pending",
        type: "違規迴轉",
        plate: "ODH-0491",
        location: "台中市北區台灣大道二段",
        confidence: 83,
        timestamp: "2026-05-26T23:24:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000183.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000003.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000256.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 ODH-0491 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0135",
        status: "pending",
        type: "逆向",
        plate: "SQU-6623",
        location: "台中市西屯區環中路",
        confidence: 88,
        timestamp: "2026-05-30T03:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000419.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000078.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 SQU-6623 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0136",
        status: "verified",
        type: "未依號誌行駛",
        plate: "TBM-4865",
        location: "台中市西屯區崇德路三段",
        confidence: 98,
        timestamp: "2026-05-27T11:47:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000202.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000042.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000190.jpg",
                time: 4
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 TBM-4865 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0137",
        status: "pending",
        type: "未禮讓行人",
        plate: "XDR-6251",
        location: "台中市北區五權西路",
        confidence: 83,
        timestamp: "2026-05-29T07:51:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000495.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000273.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000325.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 XDR-6251 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0138",
        status: "cancelled",
        type: "闖紅燈",
        plate: "TXI-8350",
        location: "台中市西區黎明路",
        confidence: 78,
        timestamp: "2026-05-31T13:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000420.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000151.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 TXI-8350 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0139",
        status: "pending",
        type: "未依號誌行駛",
        plate: "UFT-9971",
        location: "台中市北區精誠路",
        confidence: 97,
        timestamp: "2026-05-30T10:30:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000464.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000089.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 UFT-9971 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0140",
        status: "cancelled",
        type: "闖紅燈",
        plate: "QMK-4025",
        location: "台中市豐原區精誠路",
        confidence: 93,
        timestamp: "2026-05-25T07:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000206.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000453.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 QMK-4025 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0141",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "GJR-1647",
        location: "台中市南屯區文心路四段",
        confidence: 86,
        timestamp: "2026-05-25T18:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000362.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000449.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000496.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 GJR-1647 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0142",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "XDE-3284",
        location: "台中市大里區崇德路三段",
        confidence: 88,
        timestamp: "2026-05-28T07:15:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000331.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000325.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000262.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 XDE-3284 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0143",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "RXY-9185",
        location: "台中市大里區文心路四段",
        confidence: 86,
        timestamp: "2026-05-26T09:49:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000007.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000419.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000311.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 RXY-9185 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0144",
        status: "pending",
        type: "逆向",
        plate: "ZXQ-1707",
        location: "台中市大里區台灣大道二段",
        confidence: 87,
        timestamp: "2026-05-29T05:14:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000370.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000451.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 ZXQ-1707 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0145",
        status: "pending",
        type: "違規迴轉",
        plate: "HDE-5415",
        location: "台中市豐原區復興路",
        confidence: 79,
        timestamp: "2026-05-27T18:25:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000070.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000070.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 HDE-5415 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0146",
        status: "cancelled",
        type: "闖紅燈",
        plate: "CFL-6256",
        location: "台中市西區中清路",
        confidence: 87,
        timestamp: "2026-05-31T18:11:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000454.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000245.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000154.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 CFL-6256 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0147",
        status: "cancelled",
        type: "闖紅燈",
        plate: "NSJ-7574",
        location: "台中市北屯區復興路",
        confidence: 84,
        timestamp: "2026-05-26T23:28:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000221.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000466.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000469.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 NSJ-7574 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0148",
        status: "cancelled",
        type: "違規迴轉",
        plate: "TAH-9992",
        location: "台中市北屯區崇德路三段",
        confidence: 82,
        timestamp: "2026-05-27T19:06:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000275.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000336.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 TAH-9992 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0149",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "HZH-8518",
        location: "台中市中區公益路",
        confidence: 92,
        timestamp: "2026-05-29T05:12:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000322.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000212.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000170.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 HZH-8518 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0150",
        status: "verified",
        type: "未禮讓行人",
        plate: "PAS-4207",
        location: "台中市中區復興路",
        confidence: 97,
        timestamp: "2026-05-28T01:53:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000267.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000207.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 PAS-4207 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0151",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "OIG-3364",
        location: "台中市北區公益路",
        confidence: 89,
        timestamp: "2026-05-28T03:42:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000479.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000307.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 OIG-3364 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0152",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "OON-4033",
        location: "台中市大里區台灣大道二段",
        confidence: 80,
        timestamp: "2026-05-29T12:57:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 OON-4033 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0153",
        status: "verified",
        type: "未禮讓行人",
        plate: "DNR-4356",
        location: "台中市西屯區台灣大道二段",
        confidence: 78,
        timestamp: "2026-05-28T10:08:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000180.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000213.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000331.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 DNR-4356 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0154",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "JAY-2384",
        location: "台中市北區五權西路",
        confidence: 78,
        timestamp: "2026-05-27T06:48:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000438.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000010.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000397.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 JAY-2384 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0155",
        status: "pending",
        type: "闖紅燈",
        plate: "ASO-6038",
        location: "台中市南屯區精誠路",
        confidence: 93,
        timestamp: "2026-05-30T02:08:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000107.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000311.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000340.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 ASO-6038 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0156",
        status: "verified",
        type: "闖紅燈",
        plate: "CWP-1084",
        location: "台中市西區精誠路",
        confidence: 87,
        timestamp: "2026-05-27T06:34:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000492.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000372.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 CWP-1084 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0157",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "WXN-9187",
        location: "台中市豐原區公益路",
        confidence: 96,
        timestamp: "2026-05-25T14:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000148.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000007.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000389.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 WXN-9187 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0158",
        status: "pending",
        type: "違規迴轉",
        plate: "GNO-5773",
        location: "台中市太平區文心路四段",
        confidence: 82,
        timestamp: "2026-05-29T03:02:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000247.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000243.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 GNO-5773 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0159",
        status: "verified",
        type: "未依號誌行駛",
        plate: "AXB-0321",
        location: "台中市北區公益路",
        confidence: 97,
        timestamp: "2026-05-25T12:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000028.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000027.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000112.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 AXB-0321 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0160",
        status: "verified",
        type: "未禮讓行人",
        plate: "MXU-6093",
        location: "台中市北區崇德路三段",
        confidence: 81,
        timestamp: "2026-05-28T01:47:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000002.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000318.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000150.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 MXU-6093 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0161",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "FEK-7694",
        location: "台中市大里區五權西路",
        confidence: 77,
        timestamp: "2026-05-28T13:02:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000455.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000285.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 FEK-7694 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0162",
        status: "verified",
        type: "逆向",
        plate: "EHE-2645",
        location: "台中市北屯區精誠路",
        confidence: 94,
        timestamp: "2026-05-30T16:05:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000495.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000024.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000453.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 EHE-2645 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0163",
        status: "pending",
        type: "闖紅燈",
        plate: "UUG-5688",
        location: "台中市北屯區復興路",
        confidence: 96,
        timestamp: "2026-05-28T22:02:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000049.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 UUG-5688 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0164",
        status: "pending",
        type: "闖紅燈",
        plate: "MMJ-6439",
        location: "台中市北屯區精誠路",
        confidence: 90,
        timestamp: "2026-05-29T12:50:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000361.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000486.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000115.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 MMJ-6439 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0165",
        status: "verified",
        type: "違規迴轉",
        plate: "NSD-2396",
        location: "台中市太平區台灣大道二段",
        confidence: 99,
        timestamp: "2026-05-31T08:25:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 NSD-2396 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0166",
        status: "verified",
        type: "未禮讓行人",
        plate: "CDU-6170",
        location: "台中市太平區黎明路",
        confidence: 89,
        timestamp: "2026-05-25T00:26:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000469.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000222.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000414.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 CDU-6170 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0167",
        status: "pending",
        type: "闖紅燈",
        plate: "QSY-2541",
        location: "台中市南屯區台灣大道二段",
        confidence: 82,
        timestamp: "2026-05-27T08:50:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000112.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000306.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 QSY-2541 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0168",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "PBU-6493",
        location: "台中市豐原區公益路",
        confidence: 95,
        timestamp: "2026-05-27T16:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000018.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000446.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 PBU-6493 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0169",
        status: "pending",
        type: "未禮讓行人",
        plate: "JGI-7613",
        location: "台中市北區黎明路",
        confidence: 83,
        timestamp: "2026-05-28T01:00:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000183.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000202.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000441.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 JGI-7613 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0170",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "VKP-4407",
        location: "台中市南區精誠路",
        confidence: 98,
        timestamp: "2026-05-26T00:59:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000409.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000084.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000105.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 VKP-4407 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0171",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "BKK-1699",
        location: "台中市南屯區公益路",
        confidence: 95,
        timestamp: "2026-05-29T09:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000442.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000489.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 BKK-1699 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0172",
        status: "pending",
        type: "逆向",
        plate: "WJK-9721",
        location: "台中市西屯區台灣大道二段",
        confidence: 90,
        timestamp: "2026-05-28T11:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000467.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000457.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 WJK-9721 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0173",
        status: "pending",
        type: "違規迴轉",
        plate: "VUT-1152",
        location: "台中市西區文心路四段",
        confidence: 81,
        timestamp: "2026-05-31T05:19:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000015.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000255.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000229.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 VUT-1152 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0174",
        status: "pending",
        type: "違規迴轉",
        plate: "CQO-1029",
        location: "台中市北屯區五權西路",
        confidence: 85,
        timestamp: "2026-05-31T22:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000422.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000047.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 CQO-1029 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0175",
        status: "verified",
        type: "違規迴轉",
        plate: "CML-6139",
        location: "台中市北區環中路",
        confidence: 99,
        timestamp: "2026-05-30T11:04:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000444.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000174.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000265.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 CML-6139 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0176",
        status: "verified",
        type: "未依號誌行駛",
        plate: "WAY-0986",
        location: "台中市西區環中路",
        confidence: 81,
        timestamp: "2026-05-28T10:22:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 WAY-0986 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0177",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "ZIW-1912",
        location: "台中市北區公益路",
        confidence: 99,
        timestamp: "2026-05-28T19:02:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000209.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000179.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ZIW-1912 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0178",
        status: "verified",
        type: "逆向",
        plate: "IZV-2164",
        location: "台中市北區五權西路",
        confidence: 83,
        timestamp: "2026-05-29T17:29:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000239.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000313.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000429.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 IZV-2164 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0179",
        status: "verified",
        type: "未依號誌行駛",
        plate: "SVY-9407",
        location: "台中市南區環中路",
        confidence: 81,
        timestamp: "2026-05-25T02:53:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000329.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000176.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 SVY-9407 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0180",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "XLZ-7330",
        location: "台中市大里區環中路",
        confidence: 81,
        timestamp: "2026-05-26T07:27:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000472.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000441.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000060.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 XLZ-7330 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0181",
        status: "verified",
        type: "闖紅燈",
        plate: "ETR-4580",
        location: "台中市豐原區復興路",
        confidence: 97,
        timestamp: "2026-05-31T08:45:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000360.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 ETR-4580 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0182",
        status: "pending",
        type: "未依號誌行駛",
        plate: "WFV-8548",
        location: "台中市南屯區精誠路",
        confidence: 90,
        timestamp: "2026-05-30T23:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000025.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000297.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 WFV-8548 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0183",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "GXL-6286",
        location: "台中市北區台灣大道二段",
        confidence: 86,
        timestamp: "2026-05-26T11:16:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000320.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000416.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 GXL-6286 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0184",
        status: "pending",
        type: "未禮讓行人",
        plate: "ZFT-9616",
        location: "台中市太平區文心路四段",
        confidence: 84,
        timestamp: "2026-05-31T08:18:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000271.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 ZFT-9616 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0185",
        status: "pending",
        type: "未禮讓行人",
        plate: "XNT-6004",
        location: "台中市南屯區崇德路三段",
        confidence: 84,
        timestamp: "2026-05-26T03:15:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000401.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000417.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 XNT-6004 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0186",
        status: "verified",
        type: "未依號誌行駛",
        plate: "CMT-6572",
        location: "台中市西區中清路",
        confidence: 86,
        timestamp: "2026-05-25T09:36:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000084.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000278.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 CMT-6572 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0187",
        status: "cancelled",
        type: "違規迴轉",
        plate: "PIG-8195",
        location: "台中市豐原區台灣大道二段",
        confidence: 94,
        timestamp: "2026-05-28T16:43:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 PIG-8195 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "黃警員"
    },
    {
        id: "AA-0188",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "MCD-4425",
        location: "台中市中區精誠路",
        confidence: 85,
        timestamp: "2026-05-30T03:41:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000283.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000089.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 MCD-4425 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0189",
        status: "verified",
        type: "未依號誌行駛",
        plate: "AZY-0811",
        location: "台中市豐原區黎明路",
        confidence: 77,
        timestamp: "2026-05-25T06:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000134.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000278.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000354.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 AZY-0811 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0190",
        status: "cancelled",
        type: "違規迴轉",
        plate: "ZXA-7611",
        location: "台中市西區崇德路三段",
        confidence: 87,
        timestamp: "2026-05-29T12:49:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000071.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000500.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 ZXA-7611 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0191",
        status: "verified",
        type: "闖紅燈",
        plate: "PHL-1056",
        location: "台中市西區精誠路",
        confidence: 80,
        timestamp: "2026-05-30T03:17:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000336.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000088.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000385.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 PHL-1056 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0192",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "FPX-1591",
        location: "台中市西屯區環中路",
        confidence: 81,
        timestamp: "2026-05-27T23:15:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000440.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000256.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000388.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 FPX-1591 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0193",
        status: "cancelled",
        type: "闖紅燈",
        plate: "RCZ-1698",
        location: "台中市南區崇德路三段",
        confidence: 86,
        timestamp: "2026-05-28T05:33:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000448.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000446.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000015.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 RCZ-1698 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0194",
        status: "pending",
        type: "違規迴轉",
        plate: "JUQ-7530",
        location: "台中市南區五權西路",
        confidence: 88,
        timestamp: "2026-05-30T14:17:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000319.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 JUQ-7530 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0195",
        status: "pending",
        type: "逆向",
        plate: "ZTJ-0233",
        location: "台中市中區中清路",
        confidence: 87,
        timestamp: "2026-05-29T15:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000462.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000375.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 ZTJ-0233 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0196",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "RIH-8435",
        location: "台中市南屯區台灣大道二段",
        confidence: 93,
        timestamp: "2026-05-26T21:17:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000200.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000143.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000161.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 RIH-8435 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0197",
        status: "verified",
        type: "逆向",
        plate: "QQK-8580",
        location: "台中市北屯區五權西路",
        confidence: 97,
        timestamp: "2026-05-29T10:22:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000178.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000393.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000016.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 QQK-8580 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0198",
        status: "verified",
        type: "逆向",
        plate: "YHS-5612",
        location: "台中市南屯區文心路四段",
        confidence: 88,
        timestamp: "2026-05-29T04:45:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000402.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 YHS-5612 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0199",
        status: "verified",
        type: "逆向",
        plate: "ALB-0846",
        location: "台中市北屯區台灣大道二段",
        confidence: 92,
        timestamp: "2026-05-31T21:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000361.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000203.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 ALB-0846 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0200",
        status: "verified",
        type: "逆向",
        plate: "YYE-2780",
        location: "台中市中區環中路",
        confidence: 83,
        timestamp: "2026-05-28T12:18:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000249.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000369.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 YYE-2780 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0201",
        status: "pending",
        type: "未依號誌行駛",
        plate: "URU-8986",
        location: "台中市豐原區復興路",
        confidence: 79,
        timestamp: "2026-05-31T21:42:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000448.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000156.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000408.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 URU-8986 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0202",
        status: "pending",
        type: "逆向",
        plate: "AKJ-2503",
        location: "台中市西區五權西路",
        confidence: 85,
        timestamp: "2026-05-26T22:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000291.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000324.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000457.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 AKJ-2503 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0203",
        status: "pending",
        type: "違規迴轉",
        plate: "ZKZ-3878",
        location: "台中市南屯區精誠路",
        confidence: 87,
        timestamp: "2026-05-28T21:00:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000210.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000141.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000388.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 ZKZ-3878 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0204",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "LOP-1183",
        location: "台中市北屯區復興路",
        confidence: 86,
        timestamp: "2026-05-27T15:16:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000176.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000293.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 LOP-1183 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0205",
        status: "cancelled",
        type: "逆向",
        plate: "PVJ-6877",
        location: "台中市太平區五權西路",
        confidence: 90,
        timestamp: "2026-05-27T20:34:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000379.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000473.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000231.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 PVJ-6877 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0206",
        status: "pending",
        type: "逆向",
        plate: "VEL-1988",
        location: "台中市豐原區精誠路",
        confidence: 96,
        timestamp: "2026-05-31T18:11:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000404.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000029.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 VEL-1988 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0207",
        status: "cancelled",
        type: "違規迴轉",
        plate: "EPP-6119",
        location: "台中市中區復興路",
        confidence: 96,
        timestamp: "2026-05-25T04:27:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000231.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000320.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000295.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 EPP-6119 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0208",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "HNK-7006",
        location: "台中市北屯區公益路",
        confidence: 94,
        timestamp: "2026-05-31T13:44:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000254.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 HNK-7006 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0209",
        status: "verified",
        type: "逆向",
        plate: "HUK-1392",
        location: "台中市豐原區環中路",
        confidence: 77,
        timestamp: "2026-05-28T04:50:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000058.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000197.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000333.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 HUK-1392 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0210",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "VOX-1151",
        location: "台中市南屯區中清路",
        confidence: 97,
        timestamp: "2026-05-27T07:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000016.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000468.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000170.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 VOX-1151 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0211",
        status: "verified",
        type: "闖紅燈",
        plate: "NMO-5799",
        location: "台中市大里區環中路",
        confidence: 89,
        timestamp: "2026-05-25T11:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000206.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000297.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000055.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 NMO-5799 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0212",
        status: "verified",
        type: "未禮讓行人",
        plate: "OQK-5560",
        location: "台中市大里區台灣大道二段",
        confidence: 86,
        timestamp: "2026-05-25T00:56:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000329.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000261.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 OQK-5560 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0213",
        status: "pending",
        type: "違規迴轉",
        plate: "NHG-4336",
        location: "台中市北屯區五權西路",
        confidence: 99,
        timestamp: "2026-05-26T19:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000303.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000244.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 NHG-4336 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0214",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "KOJ-0570",
        location: "台中市北屯區五權西路",
        confidence: 78,
        timestamp: "2026-05-26T01:17:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000074.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000255.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000281.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 KOJ-0570 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0215",
        status: "verified",
        type: "未禮讓行人",
        plate: "PRS-6832",
        location: "台中市西屯區環中路",
        confidence: 98,
        timestamp: "2026-05-26T05:05:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000242.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000366.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 PRS-6832 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0216",
        status: "verified",
        type: "未禮讓行人",
        plate: "PDK-1539",
        location: "台中市豐原區精誠路",
        confidence: 81,
        timestamp: "2026-05-26T09:48:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000146.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000232.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000400.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 PDK-1539 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0217",
        status: "pending",
        type: "違規迴轉",
        plate: "XFP-7023",
        location: "台中市西區中清路",
        confidence: 83,
        timestamp: "2026-05-28T06:17:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000145.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 XFP-7023 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0218",
        status: "pending",
        type: "未依號誌行駛",
        plate: "YIH-8765",
        location: "台中市太平區黎明路",
        confidence: 91,
        timestamp: "2026-05-28T04:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000422.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000323.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000186.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 YIH-8765 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0219",
        status: "pending",
        type: "闖紅燈",
        plate: "ACY-4659",
        location: "台中市北區台灣大道二段",
        confidence: 93,
        timestamp: "2026-05-27T03:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000131.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000286.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000325.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 ACY-4659 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0220",
        status: "pending",
        type: "未禮讓行人",
        plate: "ZQL-2515",
        location: "台中市南區崇德路三段",
        confidence: 81,
        timestamp: "2026-05-31T23:57:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000045.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000136.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000401.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 ZQL-2515 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0221",
        status: "verified",
        type: "逆向",
        plate: "HZU-5458",
        location: "台中市豐原區黎明路",
        confidence: 95,
        timestamp: "2026-05-28T04:08:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000500.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000339.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 HZU-5458 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0222",
        status: "verified",
        type: "未依號誌行駛",
        plate: "EBI-4130",
        location: "台中市西屯區五權西路",
        confidence: 78,
        timestamp: "2026-05-26T10:11:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000431.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000229.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000296.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 EBI-4130 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0223",
        status: "cancelled",
        type: "闖紅燈",
        plate: "NML-3662",
        location: "台中市中區復興路",
        confidence: 83,
        timestamp: "2026-05-27T21:39:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000186.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000121.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 NML-3662 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0224",
        status: "pending",
        type: "違規迴轉",
        plate: "VJY-3875",
        location: "台中市西區環中路",
        confidence: 87,
        timestamp: "2026-05-28T06:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000163.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000358.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000274.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 VJY-3875 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0225",
        status: "verified",
        type: "未依號誌行駛",
        plate: "TAF-4447",
        location: "台中市北屯區復興路",
        confidence: 85,
        timestamp: "2026-05-31T00:52:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000407.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000448.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 TAF-4447 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0226",
        status: "cancelled",
        type: "違規迴轉",
        plate: "AKM-6770",
        location: "台中市南屯區崇德路三段",
        confidence: 85,
        timestamp: "2026-05-28T09:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000376.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000321.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000293.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 AKM-6770 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "黃警員"
    },
    {
        id: "AA-0227",
        status: "pending",
        type: "未依號誌行駛",
        plate: "KOT-7553",
        location: "台中市西區台灣大道二段",
        confidence: 89,
        timestamp: "2026-05-26T18:28:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000223.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000199.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 KOT-7553 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0228",
        status: "verified",
        type: "未禮讓行人",
        plate: "FFG-3626",
        location: "台中市北屯區精誠路",
        confidence: 75,
        timestamp: "2026-05-30T00:05:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000321.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000482.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000266.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 FFG-3626 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0229",
        status: "verified",
        type: "違規迴轉",
        plate: "YRM-4415",
        location: "台中市北屯區崇德路三段",
        confidence: 92,
        timestamp: "2026-05-28T00:15:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000313.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000090.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000350.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 YRM-4415 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "黃警員"
    },
    {
        id: "AA-0230",
        status: "verified",
        type: "逆向",
        plate: "SIA-8179",
        location: "台中市南屯區公益路",
        confidence: 80,
        timestamp: "2026-05-26T01:10:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000316.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000308.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000195.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 SIA-8179 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0231",
        status: "verified",
        type: "闖紅燈",
        plate: "UZG-7692",
        location: "台中市南區環中路",
        confidence: 82,
        timestamp: "2026-05-27T22:29:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000458.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000099.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000408.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 UZG-7692 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0232",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "HUI-2783",
        location: "台中市西屯區文心路四段",
        confidence: 95,
        timestamp: "2026-05-31T02:28:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000410.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000035.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000128.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 HUI-2783 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0233",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "RGK-1456",
        location: "台中市西屯區中清路",
        confidence: 95,
        timestamp: "2026-05-28T10:53:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000225.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000391.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000208.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 RGK-1456 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0234",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "JDY-9712",
        location: "台中市西屯區復興路",
        confidence: 77,
        timestamp: "2026-05-25T01:04:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000315.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000332.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000434.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 JDY-9712 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0235",
        status: "pending",
        type: "逆向",
        plate: "WFG-5276",
        location: "台中市西屯區復興路",
        confidence: 98,
        timestamp: "2026-05-29T02:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000230.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000038.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000010.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 WFG-5276 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0236",
        status: "pending",
        type: "未禮讓行人",
        plate: "XYZ-1727",
        location: "台中市北區文心路四段",
        confidence: 86,
        timestamp: "2026-05-26T12:52:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000383.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000124.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 XYZ-1727 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0237",
        status: "verified",
        type: "逆向",
        plate: "IGO-3084",
        location: "台中市西區台灣大道二段",
        confidence: 92,
        timestamp: "2026-05-27T14:59:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000030.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000107.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000485.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 IGO-3084 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0238",
        status: "pending",
        type: "未禮讓行人",
        plate: "VME-7528",
        location: "台中市北屯區復興路",
        confidence: 89,
        timestamp: "2026-05-26T05:52:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000219.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000377.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000447.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 VME-7528 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0239",
        status: "cancelled",
        type: "闖紅燈",
        plate: "SID-4221",
        location: "台中市南區崇德路三段",
        confidence: 89,
        timestamp: "2026-05-31T23:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000460.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000301.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000025.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 SID-4221 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0240",
        status: "verified",
        type: "違規迴轉",
        plate: "OVZ-5409",
        location: "台中市西屯區崇德路三段",
        confidence: 86,
        timestamp: "2026-05-30T18:14:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000462.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000022.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 OVZ-5409 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0241",
        status: "verified",
        type: "逆向",
        plate: "RGO-2429",
        location: "台中市南區中清路",
        confidence: 89,
        timestamp: "2026-05-30T09:28:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000042.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000106.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000125.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 RGO-2429 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0242",
        status: "pending",
        type: "違規迴轉",
        plate: "WYO-4151",
        location: "台中市西區黎明路",
        confidence: 96,
        timestamp: "2026-05-26T01:55:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000440.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000256.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 WYO-4151 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0243",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "EVV-9114",
        location: "台中市西區台灣大道二段",
        confidence: 82,
        timestamp: "2026-05-28T07:35:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000045.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000081.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000023.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 EVV-9114 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0244",
        status: "pending",
        type: "違規迴轉",
        plate: "XKC-3750",
        location: "台中市西屯區精誠路",
        confidence: 82,
        timestamp: "2026-05-30T04:20:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000393.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000194.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000385.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 XKC-3750 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0245",
        status: "verified",
        type: "未依號誌行駛",
        plate: "KHX-8522",
        location: "台中市中區文心路四段",
        confidence: 84,
        timestamp: "2026-05-26T01:43:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000298.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000363.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000116.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 KHX-8522 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0246",
        status: "cancelled",
        type: "逆向",
        plate: "XOD-9115",
        location: "台中市北屯區復興路",
        confidence: 98,
        timestamp: "2026-05-30T09:57:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000215.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000000.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000405.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 XOD-9115 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0247",
        status: "verified",
        type: "闖紅燈",
        plate: "XKC-6738",
        location: "台中市中區崇德路三段",
        confidence: 99,
        timestamp: "2026-05-31T21:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000309.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000086.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000129.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 XKC-6738 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "林警員"
    },
    {
        id: "AA-0248",
        status: "verified",
        type: "闖紅燈",
        plate: "FGO-0752",
        location: "台中市中區環中路",
        confidence: 96,
        timestamp: "2026-05-30T07:38:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000473.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000215.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000500.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 FGO-0752 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0249",
        status: "verified",
        type: "未依號誌行駛",
        plate: "RKP-4585",
        location: "台中市北屯區台灣大道二段",
        confidence: 78,
        timestamp: "2026-05-28T05:12:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000461.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000020.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000312.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 RKP-4585 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0250",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "BBE-2277",
        location: "台中市豐原區文心路四段",
        confidence: 92,
        timestamp: "2026-05-29T11:44:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000494.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000119.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000002.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 BBE-2277 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0251",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "VIE-7449",
        location: "台中市大里區中清路",
        confidence: 94,
        timestamp: "2026-05-30T04:48:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000403.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000061.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000022.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 VIE-7449 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0252",
        status: "pending",
        type: "未依號誌行駛",
        plate: "GHC-1625",
        location: "台中市豐原區黎明路",
        confidence: 78,
        timestamp: "2026-05-29T08:35:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000420.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000024.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000381.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 GHC-1625 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0253",
        status: "cancelled",
        type: "違規迴轉",
        plate: "QRD-1846",
        location: "台中市中區台灣大道二段",
        confidence: 87,
        timestamp: "2026-05-27T09:09:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000137.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000003.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000275.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 QRD-1846 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0254",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "RKC-2833",
        location: "台中市南屯區黎明路",
        confidence: 83,
        timestamp: "2026-05-29T06:59:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000063.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000036.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 RKC-2833 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0255",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "ECM-1159",
        location: "台中市西區文心路四段",
        confidence: 80,
        timestamp: "2026-05-30T21:35:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000425.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000364.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 ECM-1159 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0256",
        status: "pending",
        type: "未依號誌行駛",
        plate: "GFL-9852",
        location: "台中市中區復興路",
        confidence: 76,
        timestamp: "2026-05-25T22:03:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000442.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000098.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 GFL-9852 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0257",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "FCR-1459",
        location: "台中市西屯區台灣大道二段",
        confidence: 94,
        timestamp: "2026-05-26T23:01:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000348.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000189.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000001.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 FCR-1459 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0258",
        status: "cancelled",
        type: "闖紅燈",
        plate: "DLE-6721",
        location: "台中市西區台灣大道二段",
        confidence: 76,
        timestamp: "2026-05-27T02:43:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000310.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000351.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 DLE-6721 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "王警員"
    },
    {
        id: "AA-0259",
        status: "verified",
        type: "未依號誌行駛",
        plate: "UUK-6998",
        location: "台中市南區台灣大道二段",
        confidence: 83,
        timestamp: "2026-05-30T07:42:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000139.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000001.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 UUK-6998 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0260",
        status: "verified",
        type: "未依號誌行駛",
        plate: "DBU-3156",
        location: "台中市南區台灣大道二段",
        confidence: 98,
        timestamp: "2026-05-31T23:57:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000152.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000357.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000338.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 DBU-3156 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0261",
        status: "verified",
        type: "未禮讓行人",
        plate: "OZY-7811",
        location: "台中市北區台灣大道二段",
        confidence: 97,
        timestamp: "2026-05-30T04:00:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000085.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000114.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 OZY-7811 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "黃警員"
    },
    {
        id: "AA-0262",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "VZE-7071",
        location: "台中市北屯區台灣大道二段",
        confidence: 86,
        timestamp: "2026-05-31T00:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000038.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000186.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000136.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 VZE-7071 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0263",
        status: "pending",
        type: "違規迴轉",
        plate: "FXE-9457",
        location: "台中市北屯區五權西路",
        confidence: 79,
        timestamp: "2026-05-30T20:19:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000005.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000048.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000260.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 FXE-9457 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: null
    },
    {
        id: "AA-0264",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "WTI-5830",
        location: "台中市太平區文心路四段",
        confidence: 85,
        timestamp: "2026-05-27T08:19:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000433.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000130.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 WTI-5830 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0265",
        status: "cancelled",
        type: "逆向",
        plate: "UFJ-8129",
        location: "台中市大里區環中路",
        confidence: 75,
        timestamp: "2026-05-29T12:05:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000477.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000494.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000338.jpg",
                time: 4
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 UFJ-8129 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0266",
        status: "cancelled",
        type: "逆向",
        plate: "OSX-9337",
        location: "台中市中區公益路",
        confidence: 85,
        timestamp: "2026-05-25T14:14:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000475.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000333.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000321.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 OSX-9337 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0267",
        status: "cancelled",
        type: "違規迴轉",
        plate: "LLA-8116",
        location: "台中市西區崇德路三段",
        confidence: 88,
        timestamp: "2026-05-31T06:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000457.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000367.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000316.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 LLA-8116 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0268",
        status: "pending",
        type: "闖紅燈",
        plate: "ZIL-6208",
        location: "台中市大里區台灣大道二段",
        confidence: 86,
        timestamp: "2026-05-27T00:37:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000238.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000160.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000213.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 ZIL-6208 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0269",
        status: "pending",
        type: "未依號誌行駛",
        plate: "SUL-3508",
        location: "台中市北區中清路",
        confidence: 83,
        timestamp: "2026-05-25T13:16:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000259.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000163.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 SUL-3508 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0270",
        status: "cancelled",
        type: "逆向",
        plate: "XZR-2564",
        location: "台中市大里區中清路",
        confidence: 76,
        timestamp: "2026-05-27T04:33:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000471.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000259.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 XZR-2564 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "王警員"
    },
    {
        id: "AA-0271",
        status: "verified",
        type: "未依標誌標線行駛",
        plate: "JDT-6133",
        location: "台中市中區五權西路",
        confidence: 93,
        timestamp: "2026-05-27T10:14:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000210.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000135.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000466.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 JDT-6133 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0272",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "HES-2964",
        location: "台中市中區中清路",
        confidence: 94,
        timestamp: "2026-05-30T07:26:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000056.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000424.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000439.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 HES-2964 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0273",
        status: "verified",
        type: "未依號誌行駛",
        plate: "FVZ-7177",
        location: "台中市中區中清路",
        confidence: 98,
        timestamp: "2026-05-27T14:54:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000047.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000378.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000120.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 FVZ-7177 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0274",
        status: "cancelled",
        type: "逆向",
        plate: "SWM-4849",
        location: "台中市西屯區中清路",
        confidence: 81,
        timestamp: "2026-05-26T16:21:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000462.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000149.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000408.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 SWM-4849 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0275",
        status: "cancelled",
        type: "違規迴轉",
        plate: "VPB-2199",
        location: "台中市西區黎明路",
        confidence: 85,
        timestamp: "2026-05-25T01:50:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000064.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000156.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000184.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 VPB-2199 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0276",
        status: "pending",
        type: "未依號誌行駛",
        plate: "JKU-7701",
        location: "台中市南區崇德路三段",
        confidence: 90,
        timestamp: "2026-05-28T05:51:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000480.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000344.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000228.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 JKU-7701 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0277",
        status: "pending",
        type: "逆向",
        plate: "EPQ-1808",
        location: "台中市北區文心路四段",
        confidence: 82,
        timestamp: "2026-05-30T15:04:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000227.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000094.jpg",
                time: 9
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000028.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 EPQ-1808 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0278",
        status: "verified",
        type: "違規迴轉",
        plate: "IWM-7881",
        location: "台中市北區黎明路",
        confidence: 78,
        timestamp: "2026-05-27T21:23:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000417.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000051.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000489.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 IWM-7881 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "黃警員"
    },
    {
        id: "AA-0279",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "MLS-8373",
        location: "台中市西屯區中清路",
        confidence: 85,
        timestamp: "2026-05-25T20:53:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000079.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000035.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000237.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 MLS-8373 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    },
    {
        id: "AA-0280",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "CAG-7367",
        location: "台中市南屯區台灣大道二段",
        confidence: 99,
        timestamp: "2026-05-28T05:07:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000124.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000007.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000498.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 CAG-7367 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0281",
        status: "cancelled",
        type: "違規迴轉",
        plate: "HTY-1335",
        location: "台中市西屯區精誠路",
        confidence: 89,
        timestamp: "2026-05-30T15:10:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000218.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000013.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000363.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 HTY-1335 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "王警員"
    },
    {
        id: "AA-0282",
        status: "verified",
        type: "未依號誌行駛",
        plate: "SYN-6890",
        location: "台中市北區精誠路",
        confidence: 95,
        timestamp: "2026-05-27T18:00:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000464.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000245.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000206.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 SYN-6890 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0283",
        status: "cancelled",
        type: "未依標誌標線行駛",
        plate: "SHJ-1671",
        location: "台中市西區公益路",
        confidence: 92,
        timestamp: "2026-05-27T11:19:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000299.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000044.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 SHJ-1671 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: "林警員"
    },
    {
        id: "AA-0284",
        status: "cancelled",
        type: "闖紅燈",
        plate: "XWR-9190",
        location: "台中市北區復興路",
        confidence: 91,
        timestamp: "2026-05-30T09:53:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000288.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000419.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 XWR-9190 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: "黃警員"
    },
    {
        id: "AA-0285",
        status: "verified",
        type: "未依號誌行駛",
        plate: "ZGB-7018",
        location: "台中市北區環中路",
        confidence: 91,
        timestamp: "2026-05-27T20:47:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000244.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000174.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000040.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 ZGB-7018 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "黃警員"
    },
    {
        id: "AA-0286",
        status: "pending",
        type: "未依號誌行駛",
        plate: "BYJ-8058",
        location: "台中市北區台灣大道二段",
        confidence: 80,
        timestamp: "2026-05-26T02:45:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000176.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000431.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000070.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 BYJ-8058 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0287",
        status: "cancelled",
        type: "未依號誌行駛",
        plate: "AUD-3379",
        location: "台中市南屯區黎明路",
        confidence: 88,
        timestamp: "2026-05-29T09:44:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000382.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000123.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000236.jpg",
                time: 5
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 AUD-3379 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0288",
        status: "pending",
        type: "逆向",
        plate: "CLG-9654",
        location: "台中市南區崇德路三段",
        confidence: 76,
        timestamp: "2026-05-28T03:09:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000433.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000049.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000372.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 CLG-9654 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: null
    },
    {
        id: "AA-0289",
        status: "verified",
        type: "未禮讓行人",
        plate: "EKP-9323",
        location: "台中市西屯區公益路",
        confidence: 79,
        timestamp: "2026-05-31T04:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000387.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000166.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 EKP-9323 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0290",
        status: "verified",
        type: "未依號誌行駛",
        plate: "VTB-4776",
        location: "台中市南區崇德路三段",
        confidence: 99,
        timestamp: "2026-05-31T07:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000396.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000109.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 VTB-4776 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: "王警員"
    },
    {
        id: "AA-0291",
        status: "verified",
        type: "未禮讓行人",
        plate: "HSF-5429",
        location: "台中市大里區五權西路",
        confidence: 90,
        timestamp: "2026-05-31T18:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000153.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000193.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000131.jpg",
                time: 8
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 HSF-5429 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "林警員"
    },
    {
        id: "AA-0292",
        status: "pending",
        type: "未依號誌行駛",
        plate: "DDY-1010",
        location: "台中市北屯區台灣大道二段",
        confidence: 78,
        timestamp: "2026-05-27T14:56:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000496.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000483.jpg",
                time: 6
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000300.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 DDY-1010 車輛於交岔路口未遵守交通號誌指示行駛。",
        auditor: null
    },
    {
        id: "AA-0293",
        status: "verified",
        type: "逆向",
        plate: "VLE-7236",
        location: "台中市南區黎明路",
        confidence: 87,
        timestamp: "2026-05-28T17:56:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000220.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000182.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000051.jpg",
                time: 6
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 VLE-7236 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "林警員"
    },
    {
        id: "AA-0294",
        status: "pending",
        type: "未禮讓行人",
        plate: "HOU-5490",
        location: "台中市南區崇德路三段",
        confidence: 97,
        timestamp: "2026-05-26T04:13:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000147.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000209.jpg",
                time: 5
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000344.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 HOU-5490 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: null
    },
    {
        id: "AA-0295",
        status: "verified",
        type: "違規迴轉",
        plate: "NER-7392",
        location: "台中市中區五權西路",
        confidence: 93,
        timestamp: "2026-05-28T01:49:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg",
                time: 1
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000444.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000207.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 49 條：在設有禁止迴車標誌或劃有分向限制線之路段迴車。",
        description: "偵測到車牌 NER-7392 車輛於禁止迴轉路段或設有分向限制線之路口違規迴車。",
        auditor: "林警員"
    },
    {
        id: "AA-0296",
        status: "cancelled",
        type: "逆向",
        plate: "MRO-6889",
        location: "台中市西區文心路四段",
        confidence: 97,
        timestamp: "2026-05-31T08:46:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000008.jpg",
                time: 3
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000371.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000158.jpg",
                time: 10
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 45 條第 1 項第 1 款：不按遵行之方向行駛。",
        description: "偵測到車牌 MRO-6889 車輛駛入對向車道或單行道逆向行駛，產生嚴重碰撞風險。",
        auditor: "黃警員"
    },
    {
        id: "AA-0297",
        status: "pending",
        type: "闖紅燈",
        plate: "NGZ-4318",
        location: "台中市大里區文心路四段",
        confidence: 94,
        timestamp: "2026-05-31T00:40:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000059.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000423.jpg",
                time: 8
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000460.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 53 條第 1 項：行經有燈光號誌管制之交岔路口闖紅燈。",
        description: "偵測到車牌 NGZ-4318 車輛於紅燈亮起後仍強行通過路口，違規事實明確。",
        auditor: null
    },
    {
        id: "AA-0298",
        status: "cancelled",
        type: "未禮讓行人",
        plate: "RRJ-6596",
        location: "台中市大里區五權西路",
        confidence: 87,
        timestamp: "2026-05-27T14:07:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000354.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000328.jpg",
                time: 7
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000037.jpg",
                time: 9
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 44 條第 2 項：汽車駕駛人行近行人穿越道，不暫停讓行人先行通過。",
        description: "偵測到車牌 RRJ-6596 車輛行經行人穿越道時，未暫停讓行人優先通行，危害行人安全。",
        auditor: "王警員"
    },
    {
        id: "AA-0299",
        status: "pending",
        type: "未依標誌標線行駛",
        plate: "PKA-1768",
        location: "台中市西屯區黎明路",
        confidence: 87,
        timestamp: "2026-05-28T00:02:00",
        images: [
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000135.jpg",
                time: 2
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000417.jpg",
                time: 4
            },
            {
                src: "https://c01.twipcam.com/cam/snapshot/tpe-000192.jpg",
                time: 7
            }
        ],
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        legalBasis: "《道路交通管理處罰條例》第 48 條第 1 項第 2 款：不依標誌、標線、號誌指示。",
        description: "偵測到車牌 PKA-1768 車輛違規直行或轉彎，未依地面標誌、標線指示行駛。",
        auditor: null
    }
];

(function updateMockDataTimestamps() {
    const now = new Date();

    mockCases.forEach(caseItem => {
        // 隨機產生 0 到 14 天前的差距
        const randomDaysAgo = Math.floor(Math.random() * 15);
        // 隨機產生時、分、秒
        const randomHours = Math.floor(Math.random() * 24);
        const randomMinutes = Math.floor(Math.random() * 60);
        const randomSeconds = Math.floor(Math.random() * 60);

        // 以現在時間為基準去扣除天數並覆寫時間
        const newDate = new Date(now);
        newDate.setDate(newDate.getDate() - randomDaysAgo);
        newDate.setHours(randomHours, randomMinutes, randomSeconds, 0);

        // 格式化為原本的 YYYY-MM-DDTHH:mm:ss 格式
        const year = newDate.getFullYear();
        const month = String(newDate.getMonth() + 1).padStart(2, '0');
        const day = String(newDate.getDate()).padStart(2, '0');
        const hours = String(newDate.getHours()).padStart(2, '0');
        const minutes = String(newDate.getMinutes()).padStart(2, '0');
        const seconds = String(newDate.getSeconds()).padStart(2, '0');

        caseItem.timestamp = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    });

})();