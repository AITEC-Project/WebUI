/**
 * 模擬歷史數據源
 */
window.SHARED_HISTORY_DATA = [
            { id: 'AA-1300', date: '2026-04-16 10:22', location: '文心路/台灣大道', type: '超速', plate: 'K82-LMP', conf: 88, status: '已成立' },
            { id: 'AA-1299', date: '2026-04-16 09:15', location: '西屯路/逢甲路', type: '違規停車', plate: 'ABC-1234', conf: 100, status: '已成立' },
            { id: 'AA-1298', date: '2026-04-15 23:45', location: '崇德路/三民路', type: '闖紅燈', plate: 'H55-EES', conf: 93, status: '已成立' },
            { id: 'AA-1297', date: '2026-04-15 14:10', location: '公益路/美村路', type: '未禮讓行人', plate: 'EFG-5678', conf: 79, status: '已撤銷' },
            { id: 'AA-1296', date: '2026-04-14 18:30', location: '環中路/中清路', type: '超速', plate: 'T90-RTC', conf: 85, status: '已成立' },
            { id: 'AA-1295', date: '2026-04-14 12:40', location: '文心路/台灣大道', type: '超速', plate: 'YJ-9921', conf: 91, status: '已成立' },
            { id: 'AA-1294', date: '2026-04-14 08:12', location: '五權西路/忠明南路', type: '闖紅燈', plate: 'BK-552', conf: 95, status: '已成立' },
            { id: 'AA-1293', date: '2026-04-13 22:05', location: '西屯路/逢甲路', type: '違規停車', plate: 'RC-1029', conf: 100, status: '已成立' },
            { id: 'AA-1292', date: '2026-04-13 17:50', location: '中清路/環中路', type: '蛇行', plate: 'MW-338', conf: 82, status: '已成立' },
            { id: 'AA-1291', date: '2026-04-13 15:30', location: '文心路/台灣大道', type: '未禮讓行人', plate: 'QA-771', conf: 87, status: '已成立' },
            { id: 'AA-1290', date: '2026-04-12 11:20', location: '崇德路/三民路', type: '超速', plate: 'PL-002', conf: 89, status: '已成立' },
            { id: 'AA-1289', date: '2026-04-12 09:45', location: '公益路/美村路', type: '違規停車', plate: 'KL-8822', conf: 100, status: '已成立' },
            { id: 'AA-1288', date: '2026-04-12 01:15', location: '西屯路/逢甲路', type: '蛇行', plate: 'GH-441', conf: 78, status: '已撤銷' },
            { id: 'AA-1287', date: '2026-04-11 20:33', location: '環中路/中清路', type: '闖紅燈', plate: 'ZZ-119', conf: 92, status: '已成立' },
            { id: 'AA-1286', date: '2026-04-11 16:20', location: '五權西路/忠明南路', type: '超速', plate: 'PP-992', conf: 84, status: '已成立' },
            { id: 'AA-1285', date: '2026-04-11 14:05', location: '文心路/台灣大道', type: '未禮讓行人', plate: 'MM-3381', conf: 81, status: '已成立' },
            { id: 'AA-1284', date: '2026-04-10 23:55', location: '崇德路/三民路', type: '超速', plate: 'KK-122', conf: 88, status: '已成立' },
            { id: 'AA-1283', date: '2026-04-10 19:12', location: '西屯路/逢甲路', type: '違規停車', plate: 'LL-009', conf: 100, status: '已成立' },
            { id: 'AA-1282', date: '2026-04-10 15:40', location: '公益路/美村路', type: '闖紅燈', plate: 'RR-556', conf: 96, status: '已成立' },
            { id: 'AA-1281', date: '2026-04-10 10:20', location: '中清路/環中路', type: '超速', plate: 'VV-778', conf: 90, status: '已成立' },
            { id: 'AA-1280', date: '2026-04-09 18:30', location: '五權西路/忠明南路', type: '未禮讓行人', plate: 'OO-112', conf: 85, status: '已成立' },
            { id: 'AA-1279', date: '2026-04-09 14:15', location: '文心路/台灣大道', type: '超速', plate: 'XX-445', conf: 87, status: '已成立' },
            { id: 'AA-1278', date: '2026-04-09 09:05', location: '西屯路/逢甲路', type: '違規停車', plate: 'SS-990', conf: 100, status: '已成立' },
            { id: 'AA-1277', date: '2026-04-08 22:40', location: '崇德路/三民路', type: '蛇行', plate: 'BB-334', conf: 80, status: '已撤銷' },
            { id: 'AA-1276', date: '2026-04-08 17:55', location: '公益路/美村路', type: '闖紅燈', plate: 'NN-221', conf: 94, status: '已成立' },
            { id: 'AA-1275', date: '2026-04-08 12:10', location: '環中路/中清路', type: '超速', plate: 'YY-887', conf: 91, status: '已成立' },
            { id: 'AA-1274', date: '2026-04-07 20:30', location: '五權西路/忠明南路', type: '未禮讓行人', plate: 'UU-554', conf: 83, status: '已成立' },
            { id: 'AA-1273', date: '2026-04-07 15:45', location: '文心路/台灣大道', type: '闖紅燈', plate: 'II-332', conf: 97, status: '已成立' },
            { id: 'AA-1272', date: '2026-04-07 10:20', location: '西屯路/逢甲路', type: '違規停車', plate: 'KK-111', conf: 100, status: '已成立' },
            { id: 'AA-1271', date: '2026-04-06 21:15', location: '崇德路/三民路', type: '超速', plate: 'EE-998', conf: 86, status: '已成立' },
            { id: 'AA-1270', date: '2026-04-06 17:30', location: '公益路/美村路', type: '超速', plate: 'JJ-445', conf: 89, status: '已成立' },
            { id: 'AA-1269', date: '2026-04-06 13:05', location: '環中路/中清路', type: '蛇行', plate: 'HH-001', conf: 76, status: '已撤銷' },
            { id: 'AA-1268', date: '2026-04-05 19:40', location: '五權西路/忠明南路', type: '闖紅燈', plate: 'WW-223', conf: 93, status: '已成立' },
            { id: 'AA-1267', date: '2026-04-05 15:55', location: '文心路/台灣大道', type: '違規停車', plate: 'QQ-776', conf: 100, status: '已成立' },
            { id: 'AA-1266', date: '2026-04-05 10:12', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'AA-112', conf: 82, status: '已成立' },
            { id: 'AA-1265', date: '2026-04-04 22:30', location: '崇德路/三民路', type: '超速', plate: 'CC-554', conf: 88, status: '已成立' },
            { id: 'AA-1264', date: '2026-04-04 18:20', location: '公益路/美村路', type: '闖紅燈', plate: 'ZZ-990', conf: 95, status: '已成立' },
            { id: 'AA-1263', date: '2026-04-04 14:05', location: '環中路/中清路', type: '超速', plate: 'FF-332', conf: 87, status: '已成立' },
            { id: 'AA-1262', date: '2026-04-03 21:45', location: '五權西路/忠明南路', type: '違規停車', plate: 'RR-111', conf: 100, status: '已成立' },
            { id: 'AA-1261', date: '2026-04-03 16:10', location: '文心路/台灣大道', type: '蛇行', plate: 'BB-887', conf: 79, status: '已撤銷' },
            { id: 'AA-1260', date: '2026-04-03 11:30', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'MM-445', conf: 84, status: '已成立' },
            { id: 'AA-1259', date: '2026-04-02 23:50', location: '崇德路/三民路', type: '超速', plate: 'GG-221', conf: 90, status: '已成立' },
            { id: 'AA-1258', date: '2026-04-02 19:15', location: '公益路/美村路', type: '闖紅燈', plate: 'KK-887', conf: 96, status: '已成立' },
            { id: 'AA-1257', date: '2026-04-02 15:05', location: '環中路/中清路', type: '違規停車', plate: 'XX-122', conf: 100, status: '已成立' },
            { id: 'AA-1256', date: '2026-04-01 20:40', location: '五權西路/忠明南路', type: '超速', plate: 'TT-998', conf: 86, status: '已成立' },
            { id: 'AA-1255', date: '2026-04-01 16:55', location: '文心路/台灣大道', type: '未禮讓行人', plate: 'PP-441', conf: 81, status: '已成立' },
            { id: 'AA-1254', date: '2026-04-01 12:15', location: '西屯路/逢甲路', type: '闖紅燈', plate: 'LL-001', conf: 94, status: '已成立' },
            { id: 'AA-1253', date: '2026-03-31 22:20', location: '崇德路/三民路', type: '蛇行', plate: 'YY-332', conf: 77, status: '已撤銷' },
            { id: 'AA-1252', date: '2026-03-31 17:10', location: '公益路/美村路', type: '超速', plate: 'WW-776', conf: 89, status: '已成立' },
            { id: 'AA-1251', date: '2026-03-31 13:45', location: '環中路/中清路', type: '未禮讓行人', plate: 'HH-112', conf: 85, status: '已成立' },
            { id: 'AA-1250', date: '2026-03-30 20:12', location: '五權西路/忠明南路', type: '違規停車', plate: 'SS-554', conf: 100, status: '已成立' },
            { id: 'AA-1249', date: '2026-03-30 15:30', location: '文心路/台灣大道', type: '超速', plate: 'UU-990', conf: 87, status: '已成立' },
            { id: 'AA-1248', date: '2026-03-30 11:05', location: '西屯路/逢甲路', type: '闖紅燈', plate: 'JJ-332', conf: 92, status: '已成立' },
            { id: 'AA-1247', date: '2026-03-29 23:55', location: '崇德路/三民路', type: '超速', plate: 'RR-111', conf: 88, status: '已成立' },
            { id: 'AA-1246', date: '2026-03-29 19:40', location: '公益路/美村路', type: '未禮讓行人', plate: 'CC-887', conf: 82, status: '已成立' },
            { id: 'AA-1245', date: '2026-03-29 14:20', location: '環中路/中清路', type: '蛇行', plate: 'BB-445', conf: 80, status: '已撤銷' },
            { id: 'AA-1244', date: '2026-03-28 21:15', location: '五權西路/忠明南路', type: '違規停車', plate: 'DD-221', conf: 100, status: '已成立' },
            { id: 'AA-1243', date: '2026-03-28 16:50', location: '文心路/台灣大道', type: '闖紅燈', plate: 'FF-887', conf: 95, status: '已成立' },
            { id: 'AA-1242', date: '2026-03-28 12:30', location: '西屯路/逢甲路', type: '超速', plate: 'EE-122', conf: 91, status: '已成立' },
            { id: 'AA-1241', date: '2026-03-27 22:45', location: '崇德路/三民路', type: '未禮讓行人', plate: 'GG-998', conf: 84, status: '已成立' },
            { id: 'AA-1240', date: '2026-03-27 18:10', location: '公益路/美村路', type: '闖紅燈', plate: 'HH-441', conf: 97, status: '已成立' },
            { id: 'AA-1239', date: '2026-03-27 14:05', location: '環中路/中清路', type: '違規停車', plate: 'II-001', conf: 100, status: '已成立' },
            { id: 'AA-1238', date: '2026-03-26 20:30', location: '五權西路/忠明南路', type: '超速', plate: 'JJ-332', conf: 86, status: '已成立' },
            { id: 'AA-1237', date: '2026-03-26 15:55', location: '文心路/台灣大道', type: '蛇行', plate: 'KK-776', conf: 78, status: '已撤銷' },
            { id: 'AA-1236', date: '2026-03-26 11:20', location: '西屯路/逢甲路', type: '闖紅燈', plate: 'LL-112', conf: 93, status: '已成立' },
            { id: 'AA-1235', date: '2026-03-25 23:15', location: '崇德路/三民路', type: '違規停車', plate: 'MM-554', conf: 100, status: '已成立' },
            { id: 'AA-1234', date: '2026-03-25 19:40', location: '公益路/美村路', type: '超速', plate: 'NN-990', conf: 89, status: '已成立' },
            { id: 'AA-1233', date: '2026-03-25 14:05', location: '環中路/中清路', type: '未禮讓行人', plate: 'OO-332', conf: 83, status: '已成立' },
            { id: 'AA-1232', date: '2026-03-24 21:50', location: '五權西路/忠明南路', type: '闖紅燈', plate: 'PP-111', conf: 96, status: '已成立' },
            { id: 'AA-1231', date: '2026-03-24 16:15', location: '文心路/台灣大道', type: '超速', plate: 'QQ-887', conf: 90, status: '已成立' },
            { id: 'AA-1230', date: '2026-03-24 10:40', location: '西屯路/逢甲路', type: '蛇行', plate: 'RR-445', conf: 79, status: '已撤銷' },
            { id: 'AA-1229', date: '2026-03-23 23:55', location: '崇德路/三民路', type: '未禮讓行人', plate: 'SS-221', conf: 85, status: '已成立' },
            { id: 'AA-1228', date: '2026-03-23 19:10', location: '公益路/美村路', type: '超速', plate: 'TT-887', conf: 87, status: '已成立' },
            { id: 'AA-1227', date: '2026-03-23 15:20', location: '環中路/中清路', type: '違規停車', plate: 'UU-122', conf: 100, status: '已成立' },
            { id: 'AA-1226', date: '2026-03-22 20:45', location: '五權西路/忠明南路', type: '闖紅燈', plate: 'VV-998', conf: 94, status: '已成立' },
            { id: 'AA-1225', date: '2026-03-22 16:30', location: '文心路/台灣大道', type: '超速', plate: 'WW-441', conf: 88, status: '已成立' },
            { id: 'AA-1224', date: '2026-03-22 11:15', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'XX-001', conf: 81, status: '已成立' },
            { id: 'AA-1223', date: '2026-03-21 22:50', location: '崇德路/三民路', type: '超速', plate: 'YY-332', conf: 91, status: '已成立' },
            { id: 'AA-1222', date: '2026-03-21 18:25', location: '公益路/美村路', type: '蛇行', plate: 'ZZ-111', conf: 77, status: '已撤銷' },
            { id: 'AA-1221', date: '2026-03-21 14:05', location: '環中路/中清路', type: '闖紅燈', plate: 'AA-887', conf: 92, status: '已成立' },
            { id: 'AA-1220', date: '2026-03-20 21:30', location: '五權西路/忠明南路', type: '未禮讓行人', plate: 'BB-122', conf: 84, status: '已成立' },
            { id: 'AA-1219', date: '2026-03-20 16:55', location: '文心路/台灣大道', type: '違規停車', plate: 'CC-998', conf: 100, status: '已成立' },
            { id: 'AA-1218', date: '2026-03-20 12:10', location: '西屯路/逢甲路', type: '超速', plate: 'DD-441', conf: 86, status: '已成立' },
            { id: 'AA-1217', date: '2026-03-19 23:40', location: '崇德路/三民路', type: '闖紅燈', plate: 'EE-001', conf: 95, status: '已成立' },
            { id: 'AA-1216', date: '2026-03-19 19:15', location: '公益路/美村路', type: '超速', plate: 'FF-332', conf: 89, status: '已成立' },
            { id: 'AA-1215', date: '2026-03-19 15:30', location: '環中路/中清路', type: '未禮讓行人', plate: 'GG-776', conf: 83, status: '已成立' },
            { id: 'AA-1214', date: '2026-03-18 20:20', location: '五權西路/忠明南路', type: '蛇行', plate: 'HH-112', conf: 76, status: '已撤銷' },
            { id: 'AA-1213', date: '2026-03-18 16:45', location: '文心路/台灣大道', type: '超速', plate: 'II-554', conf: 87, status: '已成立' },
            { id: 'AA-1212', date: '2026-03-18 11:20', location: '西屯路/逢甲路', type: '闖紅燈', plate: 'JJ-990', conf: 97, status: '已成立' },
            { id: 'AA-1211', date: '2026-03-17 22:55', location: '崇德路/三民路', type: '違規停車', plate: 'KK-332', conf: 100, status: '已成立' },
            { id: 'AA-1210', date: '2026-03-17 18:30', location: '公益路/美村路', type: '超速', plate: 'LL-111', conf: 90, status: '已成立' },
            { id: 'AA-1209', date: '2026-03-17 14:15', location: '環中路/中清路', type: '未禮讓行人', plate: 'MM-887', conf: 85, status: '已成立' },
            { id: 'AA-1208', date: '2026-03-16 21:40', location: '五權西路/忠明南路', type: '超速', plate: 'NN-122', conf: 88, status: '已成立' },
            { id: 'AA-1207', date: '2026-03-16 16:10', location: '文心路/台灣大道', type: '闖紅燈', plate: 'OO-998', conf: 94, status: '已成立' },
            { id: 'AA-1206', date: '2026-03-16 10:25', location: '西屯路/逢甲路', type: '蛇行', plate: 'PP-441', conf: 80, status: '已撤銷' },
            { id: 'AA-1205', date: '2026-03-15 23:55', location: '崇德路/三民路', type: '超速', plate: 'QQ-001', conf: 86, status: '已成立' },
            { id: 'AA-1204', date: '2026-03-15 19:45', location: '公益路/美村路', type: '未禮讓行人', plate: 'RR-332', conf: 82, status: '已成立' },
            { id: 'AA-1203', date: '2026-03-15 14:30', location: '環中路/中清路', type: '違規停車', plate: 'SS-776', conf: 100, status: '已成立' },
            { id: 'AA-1202', date: '2026-03-14 22:15', location: '五權西路/忠明南路', type: '超速', plate: 'TT-112', conf: 89, status: '已成立' },
            { id: 'AA-1201', date: '2026-03-14 17:50', location: '文心路/台灣大道', type: '闖紅燈', plate: 'UU-554', conf: 96, status: '已成立' },
            { id: 'AA-1200', date: '2026-03-14 12:05', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'VV-990', conf: 84, status: '已成立' },
            { id: 'AA-1199', date: '2026-03-13 23:30', location: '崇德路/三民路', type: '超速', plate: 'WW-332', conf: 87, status: '已成立' },
            { id: 'AA-1198', date: '2026-03-13 18:15', location: '公益路/美村路', type: '蛇行', plate: 'XX-111', conf: 78, status: '已撤銷' },
            { id: 'AA-1197', date: '2026-03-13 14:40', location: '環中路/中清路', type: '闖紅燈', plate: 'YY-887', conf: 93, status: '已成立' },
            { id: 'AA-1196', date: '2026-03-12 21:55', location: '五權西路/忠明南路', type: '違規停車', plate: 'ZZ-122', conf: 100, status: '已成立' },
            { id: 'AA-1195', date: '2026-03-12 17:10', location: '文心路/台灣大道', type: '未禮讓行人', plate: 'AA-998', conf: 81, status: '已成立' },
            { id: 'AA-1194', date: '2026-03-12 11:25', location: '西屯路/逢甲路', type: '超速', plate: 'BB-441', conf: 91, status: '已成立' },
            { id: 'AA-1193', date: '2026-03-11 23:45', location: '崇德路/三民路', type: '闖紅燈', plate: 'CC-001', conf: 95, status: '已成立' },
            { id: 'AA-1192', date: '2026-03-11 19:20', location: '公益路/美村路', type: '超速', plate: 'DD-332', conf: 88, status: '已成立' },
            { id: 'AA-1191', date: '2026-03-11 15:05', location: '環中路/中清路', type: '未禮讓行人', plate: 'EE-776', conf: 83, status: '已成立' },
            { id: 'AA-1190', date: '2026-03-10 20:40', location: '五權西路/忠明南路', type: '蛇行', plate: 'FF-112', conf: 77, status: '已撤銷' },
            { id: 'AA-1189', date: '2026-03-10 16:55', location: '文心路/台灣大道', type: '違規停車', plate: 'GG-554', conf: 100, status: '已成立' },
            { id: 'AA-1188', date: '2026-03-10 12:10', location: '西屯路/逢甲路', type: '超速', plate: 'HH-990', conf: 90, status: '已成立' },
            { id: 'AA-1187', date: '2026-03-09 23:25', location: '崇德路/三民路', type: '闖紅燈', plate: 'II-332', conf: 92, status: '已成立' },
            { id: 'AA-1186', date: '2026-03-09 18:10', location: '公益路/美村路', type: '未禮讓行人', plate: 'JJ-111', conf: 85, status: '已成立' },
            { id: 'AA-1185', date: '2026-03-09 14:50', location: '環中路/中清路', type: '超速', plate: 'KK-887', conf: 89, status: '已成立' },
            { id: 'AA-1184', date: '2026-03-08 21:30', location: '五權西路/忠明南路', type: '違規停車', plate: 'LL-122', conf: 100, status: '已成立' },
            { id: 'AA-1183', date: '2026-03-08 17:20', location: '文心路/台灣大道', type: '闖紅燈', plate: 'MM-998', conf: 94, status: '已成立' },
            { id: 'AA-1182', date: '2026-03-08 12:45', location: '西屯路/逢甲路', type: '蛇行', plate: 'NN-441', conf: 80, status: '已撤銷' },
            { id: 'AA-1181', date: '2026-03-07 23:55', location: '崇德路/三民路', type: '超速', plate: 'OO-001', conf: 86, status: '已成立' },
            { id: 'AA-1180', date: '2026-03-07 19:40', location: '公益路/美村路', type: '未禮讓行人', plate: 'PP-332', conf: 82, status: '已成立' },
            { id: 'AA-1179', date: '2026-03-07 15:15', location: '環中路/中清路', type: '闖紅燈', plate: 'QQ-776', conf: 96, status: '已成立' },
            { id: 'AA-1178', date: '2026-03-06 20:50', location: '五權西路/忠明南路', type: '超速', plate: 'RR-112', conf: 87, status: '已成立' },
            { id: 'AA-1177', date: '2026-03-06 16:35', location: '文心路/台灣大道', type: '違規停車', plate: 'SS-554', conf: 100, status: '已成立' },
            { id: 'AA-1176', date: '2026-03-06 12:10', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'TT-990', conf: 84, status: '已成立' },
            { id: 'AA-1175', date: '2026-03-05 23:20', location: '崇德路/三民路', type: '超速', plate: 'UU-332', conf: 91, status: '已成立' },
            { id: 'AA-1174', date: '2026-03-05 18:55', location: '公益路/美村路', type: '蛇行', plate: 'VV-111', conf: 77, status: '已撤銷' },
            { id: 'AA-1173', date: '2026-03-05 14:05', location: '環中路/中清路', type: '闖紅燈', plate: 'WW-887', conf: 93, status: '已成立' },
            { id: 'AA-1172', date: '2026-03-04 21:40', location: '五權西路/忠明南路', type: '未禮讓行人', plate: 'XX-122', conf: 85, status: '已成立' },
            { id: 'AA-1171', date: '2026-03-04 16:15', location: '文心路/台灣大道', type: '違規停車', plate: 'YY-998', conf: 100, status: '已成立' },
            { id: 'AA-1170', date: '2026-03-04 10:50', location: '西屯路/逢甲路', type: '超速', plate: 'ZZ-441', conf: 88, status: '已成立' },
            { id: 'AA-1169', date: '2026-03-03 23:55', location: '崇德路/三民路', type: '闖紅燈', plate: 'AA-001', conf: 95, status: '已成立' },
            { id: 'AA-1168', date: '2026-03-03 19:40', location: '公益路/美村路', type: '超速', plate: 'BB-332', conf: 90, status: '已成立' },
            { id: 'AA-1167', date: '2026-03-03 15:25', location: '環中路/中清路', type: '未禮讓行人', plate: 'CC-776', conf: 82, status: '已成立' },
            { id: 'AA-1166', date: '2026-03-02 20:30', location: '五權西路/忠明南路', type: '蛇行', plate: 'DD-112', conf: 76, status: '已撤銷' },
            { id: 'AA-1165', date: '2026-03-02 16:50', location: '文心路/台灣大道', type: '違規停車', plate: 'EE-554', conf: 100, status: '已成立' },
            { id: 'AA-1164', date: '2026-03-02 11:20', location: '西屯路/逢甲路', type: '超速', plate: 'FF-990', conf: 86, status: '已成立' },
            { id: 'AA-1163', date: '2026-03-01 23:45', location: '崇德路/三民路', type: '闖紅燈', plate: 'GG-332', conf: 94, status: '已成立' },
            { id: 'AA-1162', date: '2026-03-01 19:10', location: '公益路/美村路', type: '未禮讓行人', plate: 'HH-111', conf: 83, status: '已成立' },
            { id: 'AA-1161', date: '2026-03-01 14:55', location: '環中路/中清路', type: '超速', plate: 'II-887', conf: 87, status: '已成立' },
            { id: 'AA-1160', date: '2026-02-28 21:20', location: '五權西路/忠明南路', type: '違規停車', plate: 'JJ-122', conf: 100, status: '已成立' },
            { id: 'AA-1159', date: '2026-02-28 17:15', location: '文心路/台灣大道', type: '闖紅燈', plate: 'KK-998', conf: 97, status: '已成立' },
            { id: 'AA-1158', date: '2026-02-28 12:05', location: '西屯路/逢甲路', type: '蛇行', plate: 'LL-441', conf: 80, status: '已撤銷' },
            { id: 'AA-1157', date: '2026-02-27 23:55', location: '崇德路/三民路', type: '超速', plate: 'MM-001', conf: 89, status: '已成立' },
            { id: 'AA-1156', date: '2026-02-27 19:40', location: '公益路/美村路', type: '未禮讓行人', plate: 'NN-332', conf: 85, status: '已成立' },
            { id: 'AA-1155', date: '2026-02-27 15:30', location: '環中路/中清路', type: '超速', plate: 'OO-776', conf: 88, status: '已成立' },
            { id: 'AA-1154', date: '2026-02-26 20:40', location: '五權西路/忠明南路', type: '違規停車', plate: 'PP-112', conf: 100, status: '已成立' },
            { id: 'AA-1153', date: '2026-02-26 16:55', location: '文心路/台灣大道', type: '闖紅燈', plate: 'QQ-554', conf: 93, status: '已成立' },
            { id: 'AA-1152', date: '2026-02-26 11:20', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'RR-990', conf: 84, status: '已成立' },
            { id: 'AA-1151', date: '2026-02-25 23:15', location: '崇德路/三民路', type: '超速', plate: 'SS-332', conf: 90, status: '已成立' },
            { id: 'AA-1150', date: '2026-02-25 18:40', location: '公益路/美村路', type: '蛇行', plate: 'TT-111', conf: 79, status: '已撤銷' },
            { id: 'AA-1149', date: '2026-02-25 14:25', location: '環中路/中清路', type: '闖紅燈', plate: 'UU-887', conf: 95, status: '已成立' },
            { id: 'AA-1148', date: '2026-02-24 21:10', location: '五權西路/忠明南路', type: '未禮讓行人', plate: 'VV-122', conf: 82, status: '已成立' },
            { id: 'AA-1147', date: '2026-02-24 16:50', location: '文心路/台灣大道', type: '違規停車', plate: 'WW-998', conf: 100, status: '已成立' },
            { id: 'AA-1146', date: '2026-02-24 12:15', location: '西屯路/逢甲路', type: '超速', plate: 'XX-441', conf: 87, status: '已成立' },
            { id: 'AA-1145', date: '2026-02-23 23:55', location: '崇德路/三民路', type: '闖紅燈', plate: 'YY-001', conf: 92, status: '已成立' },
            { id: 'AA-1144', date: '2026-02-23 19:40', location: '公益路/美村路', type: '未禮讓行人', plate: 'ZZ-332', conf: 86, status: '已成立' },
            { id: 'AA-1143', date: '2026-02-23 15:05', location: '環中路/中清路', type: '蛇行', plate: 'AA-776', conf: 81, status: '已撤銷' },
            { id: 'AA-1142', date: '2026-02-22 20:30', location: '五權西路/忠明南路', type: '超速', plate: 'BB-112', conf: 88, status: '已成立' },
            { id: 'AA-1141', date: '2026-02-22 16:15', location: '文心路/台灣大道', type: '違規停車', plate: 'CC-554', conf: 100, status: '已成立' },
            { id: 'AA-1140', date: '2026-02-22 11:40', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'DD-990', conf: 83, status: '已成立' },
            { id: 'AA-1139', date: '2026-02-21 23:55', location: '崇德路/三民路', type: '超速', plate: 'EE-332', conf: 91, status: '已成立' },
            { id: 'AA-1138', date: '2026-02-21 19:20', location: '公益路/美村路', type: '闖紅燈', plate: 'FF-111', conf: 96, status: '已成立' },
            { id: 'AA-1137', date: '2026-02-21 14:50', location: '環中路/中清路', type: '超速', plate: 'GG-887', conf: 89, status: '已成立' },
            { id: 'AA-1136', date: '2026-02-20 21:15', location: '五權西路/忠明南路', type: '違規停車', plate: 'HH-122', conf: 100, status: '已成立' },
            { id: 'AA-1135', date: '2026-02-20 16:55', location: '文心路/台灣大道', type: '未禮讓行人', plate: 'II-998', conf: 85, status: '已成立' },
            { id: 'AA-1134', date: '2026-02-20 12:20', location: '西屯路/逢甲路', type: '蛇行', plate: 'JJ-441', conf: 80, status: '已撤銷' },
            { id: 'AA-1133', date: '2026-02-19 23:45', location: '崇德路/三民路', type: '超速', plate: 'KK-001', conf: 87, status: '已成立' },
            { id: 'AA-1132', date: '2026-02-19 19:15', location: '公益路/美村路', type: '闖紅燈', plate: 'LL-332', conf: 94, status: '已成立' },
            { id: 'AA-1131', date: '2026-02-19 14:40', location: '環中路/中清路', type: '超速', plate: 'MM-776', conf: 90, status: '已成立' },
            { id: 'AA-1130', date: '2026-02-18 21:55', location: '五權西路/忠明南路', type: '違規停車', plate: 'NN-112', conf: 100, status: '已成立' },
            { id: 'AA-1129', date: '2026-02-18 17:10', location: '文心路/台灣大道', type: '未禮讓行人', plate: 'OO-554', conf: 82, status: '已成立' },
            { id: 'AA-1128', date: '2026-02-18 12:45', location: '西屯路/逢甲路', type: '蛇行', plate: 'PP-990', conf: 79, status: '已撤銷' },
            { id: 'AA-1127', date: '2026-02-17 23:55', location: '崇德路/三民路', type: '超速', plate: 'QQ-332', conf: 86, status: '已成立' },
            { id: 'AA-1126', date: '2026-02-17 19:30', location: '公益路/美村路', type: '闖紅燈', plate: 'RR-111', conf: 95, status: '已成立' },
            { id: 'AA-1125', date: '2026-02-17 15:05', location: '環中路/中清路', type: '超速', plate: 'SS-887', conf: 88, status: '已成立' },
            { id: 'AA-1124', date: '2026-02-16 20:45', location: '五權西路/忠明南路', type: '未禮讓行人', plate: 'TT-122', conf: 84, status: '已成立' },
            { id: 'AA-1123', date: '2026-02-16 16:30', location: '文心路/台灣大道', type: '違規停車', plate: 'UU-998', conf: 100, status: '已成立' },
            { id: 'AA-1122', date: '2026-02-16 12:15', location: '西屯路/逢甲路', type: '超速', plate: 'VV-441', conf: 91, status: '已成立' },
            { id: 'AA-1121', date: '2026-02-15 22:55', location: '崇德路/三民路', type: '闖紅燈', plate: 'WW-001', conf: 96, status: '已成立' },
            { id: 'AA-1120', date: '2026-02-15 18:40', location: '公益路/美村路', type: '未禮讓行人', plate: 'XX-332', conf: 81, status: '已成立' },
            { id: 'AA-1119', date: '2026-02-15 14:05', location: '環中路/中清路', type: '蛇行', plate: 'YY-776', conf: 78, status: '已撤銷' },
            { id: 'AA-1118', date: '2026-02-14 21:30', location: '五權西路/忠明南路', type: '超速', plate: 'ZZ-112', conf: 87, status: '已成立' },
            { id: 'AA-1117', date: '2026-02-14 16:55', location: '文心路/台灣大道', type: '違規停車', plate: 'AA-554', conf: 100, status: '已成立' },
            { id: 'AA-1116', date: '2026-02-14 11:20', location: '西屯路/逢甲路', type: '未禮讓行人', plate: 'BB-990', conf: 83, status: '已成立' },
            { id: 'AA-1115', date: '2026-02-13 23:45', location: '崇德路/三民路', type: '超速', plate: 'CC-332', conf: 89, status: '已成立' },
            { id: 'AA-1114', date: '2026-02-13 19:20', location: '公益路/美村路', type: '闖紅燈', plate: 'DD-111', conf: 94, status: '已成立' },
            { id: 'AA-1113', date: '2026-02-13 14:05', location: '環中路/中清路', type: '未禮讓行人', plate: 'EE-887', conf: 85, status: '已成立' },
            { id: 'AA-1112', date: '2026-02-12 21:55', location: '五權西路/忠明南路', type: '超速', plate: 'FF-122', conf: 88, status: '已成立' },
            { id: 'AA-1111', date: '2026-02-12 17:15', location: '文心路/台灣大道', type: '蛇行', plate: 'GG-998', conf: 77, status: '已撤銷' },
            { id: 'AA-1110', date: '2026-02-12 12:40', location: '西屯路/逢甲路', type: '違規停車', plate: 'HH-441', conf: 100, status: '已成立' },
            { id: 'AA-1109', date: '2026-02-11 23:55', location: '崇德路/三民路', type: '超速', plate: 'II-001', conf: 90, status: '已成立' },
            { id: 'AA-1108', date: '2026-02-11 19:35', location: '公益路/美村路', type: '未禮讓行人', plate: 'JJ-332', conf: 82, status: '已成立' },
            { id: 'AA-1107', date: '2026-02-11 14:20', location: '環中路/中清路', type: '闖紅燈', plate: 'KK-776', conf: 93, status: '已成立' },
            { id: 'AA-1106', date: '2026-02-10 21:05', location: '五權西路/忠明南路', type: '超速', plate: 'LL-112', conf: 86, status: '已成立' },
            { id: 'AA-1105', date: '2026-02-10 16:50', location: '文心路/台灣大道', type: '未禮讓行人', plate: 'MM-554', conf: 84, status: '已成立' },
            { id: 'AA-1104', date: '2026-02-10 11:15', location: '西屯路/逢甲路', type: '蛇行', plate: 'NN-990', conf: 81, status: '已撤銷' },
            { id: 'AA-1103', date: '2026-02-09 23:30', location: '崇德路/三民路', type: '違規停車', plate: 'OO-332', conf: 100, status: '已成立' },
            { id: 'AA-1102', date: '2026-02-09 19:10', location: '公益路/美村路', type: '超速', plate: 'PP-111', conf: 87, status: '已成立' },
            { id: 'AA-1101', date: '2026-02-09 14:05', location: '環中路/中清路', type: '未禮讓行人', plate: 'QQ-887', conf: 85, status: '已成立' }
        ];

const historyApp = {
    rawRecords: window.SHARED_HISTORY_DATA,

    async init() {
        this.renderTable(this.rawRecords);
        this.setupEventListeners();
    },

    renderTable(data) {
        const tbody = document.getElementById('history-table-body');
        tbody.innerHTML = data.map(record => `
            <tr class="border-b border-gray-800 hover:bg-gray-800/30 transition">
                <td class="p-4 font-mono text-blue-400">#${record.id}</td>
                <td class="p-4 text-gray-400">${record.date}</td>
                <td class="p-4">${record.type}</td>
                <td class="p-4 font-mono font-bold">${record.plate}</td>
                <td class="p-4">
                    <span class="${record.conf > 90 ? 'text-green-500' : 'text-yellow-500'}">${record.conf}%</span>
                </td>
                <td class="p-4">
                    <span class="px-2 py-1 rounded-full text-[10px] font-bold ${
            record.status === '已成立' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
        }">${record.status}</span>
                </td>
                <td class="p-4 text-right">
                    <button class="text-gray-500 hover:text-white transition"><i class="fas fa-eye"></i></button>
                </td>
            </tr>
        `).join('');
    },

    setupEventListeners() {
        const filters = ['filter-range', 'filter-type', 'filter-status'];
        filters.forEach(id => {
            document.getElementById(id).addEventListener('change', () => this.applyFilters());
        });

        document.getElementById('reset-filters').addEventListener('click', () => {
            filters.forEach(id => document.getElementById(id).value = 'all');
            this.renderTable(this.rawRecords);
        });
    },

    applyFilters() {
        const range = document.getElementById('filter-range').value;
        const type = document.getElementById('filter-type').value;
        const status = document.getElementById('filter-status').value;

        const filtered = this.rawRecords.filter(r => {
            const matchType = type === 'all' || r.type === type;
            const matchStatus = status === 'all' || r.status === status;

            // 時間篩選邏輯 (簡化版：模擬今日篩選)
            let matchRange = true;
            if (range === 'today') matchRange = r.date.includes('2026-04-08');

            return matchType && matchStatus && matchRange;
        });

        this.renderTable(filtered);
    }
};

document.addEventListener('DOMContentLoaded', () => historyApp.init());