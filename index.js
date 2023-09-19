var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require('express');
var http = require('http');
var WebSocketServer = require('ws');
var cors = require('cors');
var app = express();
var server = http.createServer(app);
var PORT = 3000;
var API_URL = "https://tadpole.clickferry.app/departures?route=ALGECEUT&time=2023-09-20";
app.use(cors());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/departures', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var route, time, apiUrl, response, responseData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                route = req.query.route;
                time = req.query.time;
                apiUrl = "https://tadpole.clickferry.app/departures?route=".concat(route, "&time=").concat(time);
                return [4 /*yield*/, fetch(apiUrl)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("HTTP error! Status: ".concat(response.status));
                }
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                res.header('Access-Control-Allow-Origin', '*'); // Establece el encabezado CORS
                res.json(responseData); // Envia los datos JSON al cliente
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.error(error_1);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/departures/accomodations', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var route, time, adults, children, babies, apiUrl, response, responseData, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                route = req.query.route;
                time = req.query.time;
                adults = req.query.adults;
                children = req.query.children;
                babies = req.query.babies;
                apiUrl = "https://tadpole.clickferry.app/accommodations?route=".concat(route, "&time=").concat(time, "&adults=").concat(adults, "&children=").concat(children, "&babies=").concat(babies);
                return [4 /*yield*/, fetch(apiUrl)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("HTTP error! Status: ".concat(response.status));
                }
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                res.header('Access-Control-Allow-Origin', '*'); // Establece el encabezado CORS
                res.json(responseData); // Envia los datos JSON al cliente
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                console.error(error_2);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get('/departures/accomodations/seats', function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var route, time, adults, children, babies, seat, apiUrl, response, responseData, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                route = req.query.route;
                time = req.query.time;
                adults = req.query.adults;
                children = req.query.children;
                babies = req.query.babies;
                seat = req.query.accommodation;
                apiUrl = "https://tadpole.clickferry.app/price?route=".concat(route, "&time=").concat(time, "&adults=").concat(adults, "&children=").concat(children, "&babies=").concat(babies, "&accommodation=").concat(seat);
                return [4 /*yield*/, fetch(apiUrl)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("HTTP error! Status: ".concat(response.status));
                }
                return [4 /*yield*/, response.json()];
            case 2:
                responseData = _a.sent();
                res.header('Access-Control-Allow-Origin', '*'); // Establece el encabezado CORS
                res.json(responseData); // Envia los datos JSON al cliente
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                console.error(error_3);
                res.status(500).send('Internal Server Error');
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.listen(PORT, function () {
    console.log("Server is listening on port ".concat(PORT));
});
