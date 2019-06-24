!function (e) {
    "use strict";
    e("#calendar").length && e("#calendar").fullCalendar({
        header: {left: "title", center: "", right: "today"},
        defaultDate: "2019-03-12",
        defaultView: "listWeek",
        navLinks: !0,
        editable: !0,
        eventLimit: !0,
        events: [{title: "CEO's Birthday", start: "2019-03-12T09:15", color: dangerColor}, {
            title: "UI/UX Workshop",
            start: "2018-03-05",
            color: primaryColor
        }, {title: "Meeting With Client", start: "2019-03-13T10:25", color: dangerColor}, {
            title: "Meeting With Alisa",
            start: "2019-03-12T12:32",
            color: infoColor
        }, {title: "Team Meetup", start: "2019-03-11T02:32", color: successColor}, {
            title: "UI/UX Workshop",
            start: "2018-03-05",
            color: infoColor
        }, {title: "Annual Team Meetup", start: "2018-03-27T12:30", color: primaryColor}, {
            title: "Check Reports",
            start: "2019-03-12T10:45",
            color: infoColor
        }, {title: "Annual Team Meetup", start: "2018-03-27T09:15", color: dangerColor}, {
            title: "Check Reports",
            start: "2019-03-15T03:10",
            color: dangerColor
        }]
    }), e("#calendar_2").length && e("#calendar_2").fullCalendar({
        header: {left: "title", center: "", right: "today"},
        locale: "en",
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["SUN", "MON", "TUE", "WED", "THUS", "FRI", "SAT"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        defaultDate: "2019-03-12",
        navLinks: !0,
        editable: !0,
        eventLimit: !0,
        events: [{title: "CEO's Birthday", start: "2019-03-12T09:15", color: dangerColor}, {
            title: "UI/UX Workshop",
            start: "2018-03-05",
            color: primaryColor
        }, {title: "Meeting With Client", start: "2019-03-13T10:25", color: dangerColor}, {
            title: "Meeting With Alisa",
            start: "2019-03-12T12:32",
            color: infoColor
        }, {title: "Team Meetup", start: "2019-03-11T02:32", color: successColor}, {
            title: "UI/UX Workshop",
            start: "2018-03-05",
            color: infoColor
        }, {title: "Annual Team Meetup", start: "2018-03-27T12:30", color: primaryColor}, {
            title: "Check Reports",
            start: "2019-03-12T10:45",
            color: infoColor
        }, {title: "Annual Team Meetup", start: "2018-03-27T09:15", color: dangerColor}, {
            title: "Check Reports",
            start: "2019-03-15T03:10",
            color: dangerColor
        }],
        eventRender: function (e, t) {
            e.color == dangerColor && t.addClass("event-invers-danger"), e.color == warningColor && t.addClass("event-invers-warning"), e.color == infoColor && t.addClass("event-invers-info"), e.color == successColor && t.addClass("event-invers-success"), e.color == primaryColor && t.addClass("event-invers-primary")
        }
    })
}(jQuery), $(function () {
    "use strict";
    var e = {
        scales: {responsive: !1, maintainAspectRatio: !0, yAxes: [{display: !1}], xAxes: [{display: !1}]},
        legend: {display: !1},
        elements: {point: {radius: 0}},
        stepsize: 100
    };
    if ($("#stat-line_1").length) {
        (a = (t = $("#stat-line_1").get(0).getContext("2d")).createLinearGradient(100, 60, 30, 0)).addColorStop(0, "#B721FF"), a.addColorStop(1, "#21D4FD");
        new Chart(t, {
            type: "line",
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
                datasets: [{
                    label: "Profit",
                    data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
                    borderColor: a,
                    borderWidth: 3,
                    fill: !1
                }]
            },
            options: e
        })
    }
    if ($("#stat-line_2").length) {
        (a = (t = $("#stat-line_2").get(0).getContext("2d")).createLinearGradient(100, 60, 30, 0)).addColorStop(0, "#08AEEA"), a.addColorStop(1, "#2AF598");
        new Chart(t, {
            type: "line",
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
                datasets: [{
                    label: "Profit",
                    data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
                    borderColor: a,
                    borderWidth: 3,
                    fill: !1
                }]
            },
            options: e
        })
    }
    if ($("#stat-line_3").length) {
        (a = (t = $("#stat-line_3").get(0).getContext("2d")).createLinearGradient(100, 60, 30, 0)).addColorStop(0, "#FEE140"), a.addColorStop(1, "#FA709A");
        new Chart(t, {
            type: "line",
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
                datasets: [{
                    label: "Profit",
                    data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
                    borderColor: "#6d7cfc",
                    borderColor: a,
                    borderWidth: 3,
                    fill: !1
                }]
            },
            options: e
        })
    }
    if ($("#stat-line_4").length) {
        var t, a;
        (a = (t = $("#stat-line_4").get(0).getContext("2d")).createLinearGradient(100, 60, 30, 0)).addColorStop(0, "#ff7fc7"), a.addColorStop(1, "#43b4ff");
        new Chart(t, {
            type: "line",
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13"],
                datasets: [{
                    label: "Profit",
                    data: [7, 6, 9, 7, 8, 6, 8, 5, 7, 8, 6, 7, 7],
                    borderColor: "#6d7cfc",
                    borderColor: a,
                    borderWidth: 3,
                    fill: !1
                }]
            },
            options: e
        })
    }
    if ($("#followers-bar-chart").length) {
        var r = {
            layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
            scales: {
                responsive: !0,
                maintainAspectRatio: !0,
                yAxes: [{
                    display: !0,
                    gridLines: {color: chartGridLineColor, drawBorder: !1},
                    ticks: {
                        min: 20,
                        max: 80,
                        stepSize: 20,
                        fontColor: chartFontcolor,
                        maxTicksLimit: 3,
                        callback: function (e, t, a) {
                            return e + " K"
                        },
                        padding: 10
                    }
                }],
                xAxes: [{display: !1, barPercentage: .3, gridLines: {display: !1, drawBorder: !1}}]
            },
            legend: {display: !1}
        }, o = document.getElementById("followers-bar-chart");
        new Chart(o, {
            type: "bar",
            data: {
                labels: ["Mon", "Tue", "Wed", "Thus", "Fri", "Sat"],
                datasets: [{
                    label: "Follower",
                    data: [62, 52, 73, 58, 63, 72],
                    backgroundColor: [chartColors[0], chartColors[0], chartColors[0], chartColors[0], chartColors[0], chartColors[0]],
                    borderColor: chartColors[0],
                    borderWidth: 0
                }]
            },
            options: r
        })
    }
    if ($("#radial-chart").length && (r = {
        chart: {height: 230, type: "radialBar"},
        series: [67],
        colors: ["#696ffb"],
        plotOptions: {
            radialBar: {
                hollow: {margin: 0, size: "70%", background: "rgba(255,255,255,0)"},
                track: {dropShadow: {enabled: !0, top: 2, left: 0, blur: 4, opacity: .02}},
                dataLabels: {
                    name: {offsetY: -10, color: "#adb5bd", fontSize: "13px"},
                    value: {offsetY: 5, color: chartFontcolor, fontSize: "20px", show: !0}
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {shade: "dark", type: "vertical", gradientToColors: ["#87D4F9"], stops: [0, 100]}
        },
        stroke: {lineCap: "round"},
        labels: ["Progress"]
    }, (l = new ApexCharts(document.querySelector("#radial-chart"), r)).render()), $("#cpu-performance").length) {
        var l, n = (l = document.getElementById("cpu-performance").getContext("2d")).createLinearGradient(0, 0, 0, 0);
        n.addColorStop(0, "rgba(255, 255, 225,0.5)"), n.addColorStop(1, "rgba(255, 255, 225,0.5)"), new Chart(l, {
            type: "line",
            data: {
                labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7", "Day 8", "Day 9", "Day 10", "Day 11", "Day 12", "Day 13", "Day 14", "Day 15", "Day 16", "Day 17", "Day 18", "Day 19", "Day 20", "Day 21", "Day 22", "Day 23", "Day 24", "Day 25", "Day 26", "Day 27", "Day 28", "Day 29", "Day 30", "Day 31", "Day 32", "Day 33", "Day 34", "Day 35", "Day 36", "Day 37", "Day 38", "Day 39", "Day 40", "Day 41", "Day 42", "Day 43", "Day 44", "Day 45", "Day 46", "Day 47", "Day 48", "Day 49", "Day 50", "Day 51", "Day 52", "Day 53", "Day 54", "Day 55", "Day 56", "Day 57", "Day 58", "Day 59", "Day 60", "Day 61", "Day 62", "Day 63", "Day 64", "Day 65", "Day 66", "Day 67", "Day 68", "Day 69", "Day 70", "Day 71", "Day 72", "Day 73", "Day 74", "Day 75", "Day 76", "Day 77", "Day 78", "Day 79", "Day 80", "Day 81", "Day 82"],
                datasets: [{
                    label: "CPU Usage",
                    data: [56, 55, 59, 59, 59, 57, 56, 57, 54, 56, 58, 57, 59, 58, 59, 57, 55, 56, 54, 52, 49, 48, 50, 50, 46, 45, 49, 50, 52, 53, 52, 55, 54, 53, 56, 55, 56, 55, 54, 55, 57, 58, 56, 55, 56, 57, 58, 59, 58, 57, 55, 53, 52, 55, 57, 55, 54, 52, 55, 57, 56, 57, 58, 59, 58, 59, 57, 56, 55, 57, 58, 59, 60, 62, 60, 59, 58, 57, 56, 57, 56, 58, 59],
                    borderColor: chartColors[0],
                    backgroundColor: n,
                    borderWidth: 3
                }, {
                    label: "Ram Usage",
                    data: [32, 25, 29, 29, 29, 27, 26, 27, 24, 26, 28, 27, 29, 28, 29, 27, 25, 26, 24, 20, 18, 21, 19, 17, 14, 13, 16, 15, 17, 18, 19, 22, 20, 23, 21, 25, 24, 22, 25, 27, 25, 26, 24, 20, 18, 18, 18, 22, 19, 23, 25, 23, 22, 25, 27, 25, 24, 22, 25, 27, 26, 27, 28, 29, 28, 29, 27, 26, 25, 27, 28, 29, 26, 27, 25, 29, 28, 27, 26, 27, 26, 28, 29],
                    borderColor: chartColors[1],
                    backgroundColor: "rgba(255,255,255,0.05)",
                    borderWidth: 3
                }]
            },
            options: {
                responsive: !0,
                animation: {animateScale: !0, animateRotate: !0},
                elements: {point: {radius: 0}},
                layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}},
                legend: !1,
                stepsize: 150,
                min: 0,
                max: 350,
                scales: {
                    xAxes: [{gridLines: {display: !1, drawBorder: !1}, ticks: {display: !1, max: 150}}],
                    yAxes: [{gridLines: {display: !1, drawBorder: !1}, ticks: {display: !1}}]
                }
            }
        })
    }
}), $(function () {
    "use strict";
    $("#sample-data-table").length && $("#sample-data-table").DataTable({}), $("#json-sample-data-table").length && $("#json-sample-data-table").DataTable({
        ajax: "../../../assets/js/TABLE_DATA.json",
        columns: [{data: "name"}, {data: "position"}, {data: "office"}, {data: "extn"}, {data: "start_date"}, {data: "salary"}]
    }), $("#complex-header-table").length && $("#complex-header-table").DataTable({stateSave: !0}), $("#horizontal-scroll-table").length && $("#horizontal-scroll-table").DataTable({
        stateSave: !0,
        scrollY: "50vh",
        scrollX: !0,
        scrollCollapse: !0
    })
}), function (e) {
    var t = "object" == typeof window && window || "object" == typeof self && self;
    "undefined" != typeof exports ? e(exports) : t && (t.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
        return t.hljs
    }))
}(function (o) {
    function f(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function h(e) {
        return e.nodeName.toLowerCase()
    }

    function y(e, t) {
        var a = e && e.exec(t);
        return a && 0 === a.index
    }

    function p(e) {
        return r.test(e)
    }

    function d(e) {
        var t, a = {}, r = Array.prototype.slice.call(arguments, 1);
        for (t in e) a[t] = e[t];
        return r.forEach(function (e) {
            for (t in e) a[t] = e[t]
        }), a
    }

    function g(e) {
        var o = [];
        return function e(t, a) {
            for (var r = t.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? a += r.nodeValue.length : 1 === r.nodeType && (o.push({
                event: "start",
                offset: a,
                node: r
            }), a = e(r, a), h(r).match(/br|hr|img|input/) || o.push({event: "stop", offset: a, node: r}));
            return a
        }(e, 0), o
    }

    function C(n) {
        function i(e) {
            return e && e.source || e
        }

        function s(e, t) {
            return new RegExp(i(e), "m" + (n.cI ? "i" : "") + (t ? "g" : ""))
        }

        !function t(a, e) {
            if (!a.compiled) {
                if (a.compiled = !0, a.k = a.k || a.bK, a.k) {
                    var r = {}, o = function (a, e) {
                        n.cI && (e = e.toLowerCase()), e.split(" ").forEach(function (e) {
                            var t = e.split("|");
                            r[t[0]] = [a, t[1] ? Number(t[1]) : 1]
                        })
                    };
                    "string" == typeof a.k ? o("keyword", a.k) : c(a.k).forEach(function (e) {
                        o(e, a.k[e])
                    }), a.k = r
                }
                a.lR = s(a.l || /\w+/, !0), e && (a.bK && (a.b = "\\b(" + a.bK.split(" ").join("|") + ")\\b"), a.b || (a.b = /\B|\b/), a.bR = s(a.b), a.endSameAsBegin && (a.e = a.b), a.e || a.eW || (a.e = /\B|\b/), a.e && (a.eR = s(a.e)), a.tE = i(a.e) || "", a.eW && e.tE && (a.tE += (a.e ? "|" : "") + e.tE)), a.i && (a.iR = s(a.i)), null == a.r && (a.r = 1), a.c || (a.c = []), a.c = Array.prototype.concat.apply([], a.c.map(function (e) {
                    return (t = "self" === e ? a : e).v && !t.cached_variants && (t.cached_variants = t.v.map(function (e) {
                        return d(t, {v: null}, e)
                    })), t.cached_variants || t.eW && [d(t)] || [t];
                    var t
                })), a.c.forEach(function (e) {
                    t(e, a)
                }), a.starts && t(a.starts, e);
                var l = a.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([a.tE, a.i]).map(i).filter(Boolean);
                a.t = l.length ? s(l.join("|"), !0) : {
                    exec: function () {
                        return null
                    }
                }
            }
        }(n)
    }

    function w(e, t, i, a) {
        function s(e, t, a, r) {
            var o = '<span class="' + (r ? "" : N.classPrefix);
            return (o += e + '">') + t + (a ? "" : A)
        }

        function d() {
            p += null != h.sL ? function () {
                var e = "string" == typeof h.sL;
                if (e && !D[h.sL]) return f(g);
                var t = e ? w(h.sL, g, !0, l[h.sL]) : x(g, h.sL.length ? h.sL : void 0);
                return 0 < h.r && (b += t.r), e && (l[h.sL] = t.top), s(t.language, t.value, !1, !0)
            }() : function () {
                var e, t, a, r, o, l, n;
                if (!h.k) return f(g);
                for (r = "", t = 0, h.lR.lastIndex = 0, a = h.lR.exec(g); a;) r += f(g.substring(t, a.index)), o = h, l = a, n = u.cI ? l[0].toLowerCase() : l[0], (e = o.k.hasOwnProperty(n) && o.k[n]) ? (b += e[1], r += s(e[0], f(a[0]))) : r += f(a[0]), t = h.lR.lastIndex, a = h.lR.exec(g);
                return r + f(g.substr(t))
            }(), g = ""
        }

        function c(e) {
            p += e.cN ? s(e.cN, "", !0) : "", h = Object.create(e, {parent: {value: h}})
        }

        function r(e, t) {
            if (g += e, null == t) return d(), 0;
            var a = function (e, t) {
                var a, r, o;
                for (a = 0, r = t.c.length; a < r; a++) if (y(t.c[a].bR, e)) return t.c[a].endSameAsBegin && (t.c[a].eR = (o = t.c[a].bR.exec(e)[0], new RegExp(o.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m"))), t.c[a]
            }(t, h);
            if (a) return a.skip ? g += t : (a.eB && (g += t), d(), a.rB || a.eB || (g = t)), c(a), a.rB ? 0 : t.length;
            var r, o, l = function e(t, a) {
                if (y(t.eR, a)) {
                    for (; t.endsParent && t.parent;) t = t.parent;
                    return t
                }
                return t.eW ? e(t.parent, a) : void 0
            }(h, t);
            if (l) {
                var n = h;
                for (n.skip ? g += t : (n.rE || n.eE || (g += t), d(), n.eE && (g = t)); h.cN && (p += A), h.skip || h.sL || (b += h.r), (h = h.parent) !== l.parent;) ;
                return l.starts && (l.endSameAsBegin && (l.starts.eR = l.eR), c(l.starts)), n.rE ? 0 : t.length
            }
            if (r = t, o = h, !i && y(o.iR, r)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (h.cN || "<unnamed>") + '"');
            return g += t, t.length || 1
        }

        var u = k(e);
        if (!u) throw new Error('Unknown language: "' + e + '"');
        C(u);
        var o, h = a || u, l = {}, p = "";
        for (o = h; o !== u; o = o.parent) o.cN && (p = s(o.cN, "", !0) + p);
        var g = "", b = 0;
        try {
            for (var n, v, m = 0; h.t.lastIndex = m, n = h.t.exec(t);) v = r(t.substring(m, n.index), n[0]), m = n.index + v;
            for (r(t.substr(m)), o = h; o.parent; o = o.parent) o.cN && (p += A);
            return {r: b, value: p, language: e, top: h}
        } catch (e) {
            if (e.message && -1 !== e.message.indexOf("Illegal")) return {r: 0, value: f(t)};
            throw e
        }
    }

    function x(a, e) {
        e = e || N.languages || c(D);
        var r = {r: 0, value: f(a)}, o = r;
        return e.filter(k).filter(l).forEach(function (e) {
            var t = w(e, a, !1);
            t.language = e, t.r > o.r && (o = t), t.r > r.r && (o = r, r = t)
        }), o.language && (r.second_best = o), r
    }

    function b(e) {
        return N.tabReplace || N.useBR ? e.replace(n, function (e, t) {
            return N.useBR && "\n" === e ? "<br>" : N.tabReplace ? t.replace(/\t/g, N.tabReplace) : ""
        }) : e
    }

    function t(e) {
        var t, a, r, o, l, n, i, s, d, c, u = function (e) {
            var t, a, r, o, l = e.className + " ";
            if (l += e.parentNode ? e.parentNode.className : "", a = S.exec(l)) return k(a[1]) ? a[1] : "no-highlight";
            for (t = 0, r = (l = l.split(/\s+/)).length; t < r; t++) if (p(o = l[t]) || k(o)) return o
        }(e);
        p(u) || (N.useBR ? (t = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : t = e, l = t.textContent, r = u ? w(u, l, !0) : x(l), (a = g(t)).length && ((o = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = r.value, r.value = function (e, t, a) {
            function r() {
                return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
            }

            function o(e) {
                s += "<" + h(e) + v.map.call(e.attributes, function (e) {
                    return " " + e.nodeName + '="' + f(e.value).replace('"', "&quot;") + '"'
                }).join("") + ">"
            }

            function l(e) {
                s += "</" + h(e) + ">"
            }

            function n(e) {
                ("start" === e.event ? o : l)(e.node)
            }

            for (var i = 0, s = "", d = []; e.length || t.length;) {
                var c = r();
                if (s += f(a.substring(i, c[0].offset)), i = c[0].offset, c === e) {
                    for (d.reverse().forEach(l); n(c.splice(0, 1)[0]), (c = r()) === e && c.length && c[0].offset === i;) ;
                    d.reverse().forEach(o)
                } else "start" === c[0].event ? d.push(c[0].node) : d.pop(), n(c.splice(0, 1)[0])
            }
            return s + f(a.substr(i))
        }(a, g(o), l)), r.value = b(r.value), e.innerHTML = r.value, e.className = (n = e.className, i = u, s = r.language, d = i ? m[i] : s, c = [n.trim()], n.match(/\bhljs\b/) || c.push("hljs"), -1 === n.indexOf(d) && c.push(d), c.join(" ").trim()), e.result = {
            language: r.language,
            re: r.r
        }, r.second_best && (e.second_best = {language: r.second_best.language, re: r.second_best.r}))
    }

    function a() {
        if (!a.called) {
            a.called = !0;
            var e = document.querySelectorAll("pre code");
            v.forEach.call(e, t)
        }
    }

    function k(e) {
        return e = (e || "").toLowerCase(), D[e] || D[m[e]]
    }

    function l(e) {
        var t = k(e);
        return t && !t.disableAutodetect
    }

    var v = [], c = Object.keys, D = {}, m = {}, r = /^(no-?highlight|plain|text)$/i, S = /\blang(?:uage)?-([\w-]+)\b/i,
        n = /((^(<[^>]+>|\t|)+|(?:\n)))/gm, A = "</span>",
        N = {classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0};
    return o.highlight = w, o.highlightAuto = x, o.fixMarkup = b, o.highlightBlock = t, o.configure = function (e) {
        N = d(N, e)
    }, o.initHighlighting = a, o.initHighlightingOnLoad = function () {
        addEventListener("DOMContentLoaded", a, !1), addEventListener("load", a, !1)
    }, o.registerLanguage = function (t, e) {
        var a = D[t] = e(o);
        a.aliases && a.aliases.forEach(function (e) {
            m[e] = t
        })
    }, o.listLanguages = function () {
        return c(D)
    }, o.getLanguage = k, o.autoDetection = l, o.inherit = d, o.IR = "[a-zA-Z]\\w*", o.UIR = "[a-zA-Z_]\\w*", o.NR = "\\b\\d+(\\.\\d+)?", o.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", o.BNR = "\\b(0b[01]+)", o.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", o.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, o.ASM = {cN: "string", b: "'", e: "'", i: "\\n", c: [o.BE]}, o.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [o.BE]
    }, o.PWM = {b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/}, o.C = function (e, t, a) {
        var r = o.inherit({cN: "comment", b: e, e: t, c: []}, a || {});
        return r.c.push(o.PWM), r.c.push({cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0}), r
    }, o.CLCM = o.C("//", "$"), o.CBCM = o.C("/\\*", "\\*/"), o.HCM = o.C("#", "$"), o.NM = {
        cN: "number",
        b: o.NR,
        r: 0
    }, o.CNM = {cN: "number", b: o.CNR, r: 0}, o.BNM = {cN: "number", b: o.BNR, r: 0}, o.CSSNM = {
        cN: "number",
        b: o.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, o.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [o.BE, {b: /\[/, e: /\]/, r: 0, c: [o.BE]}]
    }, o.TM = {cN: "title", b: o.IR, r: 0}, o.UTM = {
        cN: "title",
        b: o.UIR,
        r: 0
    }, o.METHOD_GUARD = {b: "\\.\\s*" + o.UIR, r: 0}, o
}), hljs.registerLanguage("bash", function (e) {
    var t = {cN: "variable", v: [{b: /\$[\w\d#@][\w\d_]*/}, {b: /\$\{(.*?)}/}]},
        a = {cN: "string", b: /"/, e: /"/, c: [e.BE, t, {cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE]}]};
    return {
        aliases: ["sh", "zsh"],
        l: /\b-?[a-z\._]+\b/,
        k: {
            keyword: "if then else elif fi for while in do done case esac function",
            literal: "true false",
            built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
            _: "-ne -eq -lt -gt -f -d -e -s -l -a"
        },
        c: [{cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10}, {
            cN: "function",
            b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
            rB: !0,
            c: [e.inherit(e.TM, {b: /\w[\w\d_]*/})],
            r: 0
        }, e.HCM, a, {cN: "string", b: /'/, e: /'/}, t]
    }
}), hljs.registerLanguage("java", function (e) {
    var t = "false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
        a = {
            cN: "number",
            b: "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
            r: 0
        };
    return {
        aliases: ["jsp"],
        k: t,
        i: /<\/|#/,
        c: [e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [{b: /\w+@/, r: 0}, {cN: "doctag", b: "@[A-Za-z]+"}]
        }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{bK: "extends implements"}, e.UTM]
        }, {bK: "new throw return else", r: 0}, {
            cN: "function",
            b: "([À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(<[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*(\\s*,\\s*[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*)*>)?\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [{b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM]}, {
                cN: "params",
                b: /\(/,
                e: /\)/,
                k: t,
                r: 0,
                c: [e.ASM, e.QSM, e.CNM, e.CBCM]
            }, e.CLCM, e.CBCM]
        }, a, {cN: "meta", b: "@[A-Za-z]+"}]
    }
}), hljs.registerLanguage("xml", function (e) {
    var t = {
        eW: !0,
        i: /</,
        r: 0,
        c: [{cN: "attr", b: "[A-Za-z0-9\\._:-]+", r: 0}, {
            b: /=\s*/,
            r: 0,
            c: [{cN: "string", endsParent: !0, v: [{b: /"/, e: /"/}, {b: /'/, e: /'/}, {b: /[^\s"'=<>`]+/}]}]
        }]
    };
    return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [{
            cN: "meta",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{b: "\\[", e: "\\]"}]
        }, e.C("\x3c!--", "--\x3e", {r: 10}), {b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10}, {
            cN: "meta",
            b: /<\?xml/,
            e: /\?>/,
            r: 10
        }, {
            b: /<\?(php)?/,
            e: /\?>/,
            sL: "php",
            c: [{b: "/\\*", e: "\\*/", skip: !0}, {b: 'b"', e: '"', skip: !0}, {
                b: "b'",
                e: "'",
                skip: !0
            }, e.inherit(e.ASM, {i: null, cN: null, c: null, skip: !0}), e.inherit(e.QSM, {
                i: null,
                cN: null,
                c: null,
                skip: !0
            })]
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {name: "style"},
            c: [t],
            starts: {e: "</style>", rE: !0, sL: ["css", "xml"]}
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {name: "script"},
            c: [t],
            starts: {e: "<\/script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"]}
        }, {cN: "tag", b: "</?", e: "/?>", c: [{cN: "name", b: /[^\/><\s]+/, r: 0}, t]}]
    }
}), hljs.registerLanguage("scss", function (e) {
    var t = {cN: "variable", b: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"}, a = {cN: "number", b: "#[0-9A-Fa-f]+"};
    return e.CSSNM, e.QSM, e.ASM, e.CBCM, {
        cI: !0,
        i: "[=/|']",
        c: [e.CLCM, e.CBCM, {cN: "selector-id", b: "\\#[A-Za-z0-9_-]+", r: 0}, {
            cN: "selector-class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {cN: "selector-attr", b: "\\[", e: "\\]", i: "$"}, {
            cN: "selector-tag",
            b: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
            r: 0
        }, {b: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"}, {b: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"}, t, {
            cN: "attribute",
            b: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
            i: "[^\\s]"
        }, {b: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"}, {
            b: ":",
            e: ";",
            c: [t, a, e.CSSNM, e.QSM, e.ASM, {cN: "meta", b: "!important"}]
        }, {
            b: "@",
            e: "[{;]",
            k: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
            c: [t, e.QSM, e.ASM, a, e.CSSNM, {b: "\\s[A-Za-z0-9_.-]+", r: 0}]
        }]
    }
}), hljs.registerLanguage("css", function (e) {
    var t = {
        b: /[A-Z\_\.\-]+\s*:/,
        rB: !0,
        e: ";",
        eW: !0,
        c: [{
            cN: "attribute",
            b: /\S/,
            e: ":",
            eE: !0,
            starts: {
                eW: !0,
                eE: !0,
                c: [{
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [{cN: "built_in", b: /[\w-]+/}, {b: /\(/, e: /\)/, c: [e.ASM, e.QSM]}]
                }, e.CSSNM, e.QSM, e.ASM, e.CBCM, {cN: "number", b: "#[0-9A-Fa-f]+"}, {cN: "meta", b: "!important"}]
            }
        }]
    };
    return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [e.CBCM, {cN: "selector-id", b: /#[A-Za-z0-9_-]+/}, {
            cN: "selector-class",
            b: /\.[A-Za-z0-9_-]+/
        }, {cN: "selector-attr", b: /\[/, e: /\]/, i: "$"}, {
            cN: "selector-pseudo",
            b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
        }, {b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page"}, {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [{cN: "keyword", b: /\w+/}, {b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM]}]
        }, {cN: "selector-tag", b: "[a-zA-Z-][a-zA-Z0-9_-]*", r: 0}, {b: "{", e: "}", i: /\S/, c: [e.CBCM, t]}]
    }
}), hljs.registerLanguage("javascript", function (e) {
    var t = "[A-Za-z$_][0-9A-Za-z$_]*", a = {
            keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
        }, r = {cN: "number", v: [{b: "\\b(0[bB][01]+)"}, {b: "\\b(0[oO][0-7]+)"}, {b: e.CNR}], r: 0},
        o = {cN: "subst", b: "\\$\\{", e: "\\}", k: a, c: []}, l = {cN: "string", b: "`", e: "`", c: [e.BE, o]};
    o.c = [e.ASM, e.QSM, l, r, e.RM];
    var n = o.c.concat([e.CBCM, e.CLCM]);
    return {
        aliases: ["js", "jsx"],
        k: a,
        c: [{cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/}, {
            cN: "meta",
            b: /^#!/,
            e: /$/
        }, e.ASM, e.QSM, l, e.CLCM, e.CBCM, r, {
            b: /[{,]\s*/,
            r: 0,
            c: [{b: t + "\\s*:", rB: !0, r: 0, c: [{cN: "attr", b: t, r: 0}]}]
        }, {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [e.CLCM, e.CBCM, e.RM, {
                cN: "function",
                b: "(\\(.*?\\)|" + t + ")\\s*=>",
                rB: !0,
                e: "\\s*=>",
                c: [{cN: "params", v: [{b: t}, {b: /\(\s*\)/}, {b: /\(/, e: /\)/, eB: !0, eE: !0, k: a, c: n}]}]
            }, {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [{b: /<\w+\s*\/>/, skip: !0}, {
                    b: /<\w+/,
                    e: /(\/\w+|\w+\/)>/,
                    skip: !0,
                    c: [{b: /<\w+\s*\/>/, skip: !0}, "self"]
                }]
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, {b: t}), {cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: n}],
            i: /\[|%/
        }, {b: /\$[(.]/}, e.METHOD_GUARD, {
            cN: "class",
            bK: "class",
            e: /[{;=]/,
            eE: !0,
            i: /[:"\[\]]/,
            c: [{bK: "extends"}, e.UTM]
        }, {bK: "constructor", e: /\{/, eE: !0}],
        i: /#(?!!)/
    }
}), hljs.initHighlightingOnLoad(), $(function () {
    $("#board-category_1,#board-category_2,#board-category_3").sortable({
        connectWith: "#board-category_1,#board-category_2,#board-category_3",
        items: ".task-item"
    })
}), function (t) {
    t(".alert.dismissible-alert").append('<i class="alert-close mdi mdi-close"></i>'), t(".alert.dismissible-alert .alert-close").on("click", function () {
        t(this).parent().slideToggle()
    }), t("#alert-notification-toggler-top").click("on", function () {
        t("body").append('            <div class="alert-notification-wrapper top">                <div class="alert-notification dismissible-alert">                    <p><b>Welcome !&nbsp;</b>Bernice Ingram</p>                    <i class="alert-close mdi mdi-close"></i>                </div>            </div>        '), t(".alert-notification-wrapper .dismissible-alert .alert-close").on("click", function () {
            t(this).parentsUntil(".alert-notification-wrapper").slideToggle()
        })
    }), t("#alert-notification-toggler-bottom").click("on", function () {
        t("body").append('            <div class="alert-notification-wrapper bottom">                <div class="alert-notification dismissible-alert">                    <p><b>Welcome !&nbsp;</b>Bernice Ingram</p>                    <i class="alert-close mdi mdi-close"></i>                </div>            </div>        '), t(".alert-notification-wrapper .dismissible-alert .alert-close").on("click", function () {
            t(this).parentsUntil(".alert-notification-wrapper").slideToggle()
        })
    }), showInfoToast = function () {
        "use strict";
        resetToastPosition(), t.toast({
            text: "Hi There, What's up!",
            icon: "info",
            allowToastClose: !1,
            heading: "Lou Watson",
            position: "top-right",
            loader: !0,
            loaderBg: "#00e093"
        })
    }, showSuccessToast = function () {
        "use strict";
        resetToastPosition(), t.toast({
            text: "Hi There, What's up!",
            icon: "success",
            allowToastClose: !1,
            heading: "Lou Watson",
            position: "top-right",
            loader: !0,
            loaderBg: "#00ba7a"
        })
    }, showWarningToast = function () {
        "use strict";
        resetToastPosition(), t.toast({
            text: "Hi There, What's up!",
            icon: "warning",
            allowToastClose: !1,
            heading: "Lou Watson",
            position: "top-right",
            loader: !0,
            loaderBg: "#ed673c"
        })
    }, showErrorToast = function () {
        "use strict";
        resetToastPosition(), t.toast({
            text: "Hi There, What's up!",
            icon: "error",
            allowToastClose: !1,
            heading: "Lou Watson",
            position: "top-right",
            loader: !0,
            loaderBg: "#ff3941"
        })
    }, showToastPosition = function (e) {
        "use strict";
        resetToastPosition(), t.toast({
            text: "Hi There, What's up!",
            icon: "info",
            allowToastClose: !1,
            heading: "Lou Watson",
            position: String(e),
            loader: !0,
            loaderBg: "#00e093"
        })
    }, showToastInCustomPosition = function () {
        "use strict";
        resetToastPosition(), t.toast({
            heading: "Custom positioning",
            text: "Specify the custom position object or use one of the predefined ones",
            icon: "info",
            position: {left: 500, bottom: 20},
            stack: !1,
            loaderBg: "#00e093"
        })
    }, resetToastPosition = function () {
        t(".jq-toast-wrap").removeClass("bottom-left bottom-right top-left top-right mid-center"), t(".jq-toast-wrap").css({
            top: "",
            left: "",
            bottom: "",
            right: ""
        })
    }
}(jQuery);
var style = getComputedStyle(document.body),
    chartColors = ["#696ffb", "#7db8f9", "#05478f", "#00cccc", "#6CA5E0", "#1A76CA"],
    primaryColor = style.getPropertyValue("--primary"), secondaryColor = style.getPropertyValue("--secondary"),
    successColor = style.getPropertyValue("--success"), warningColor = style.getPropertyValue("--warning"),
    dangerColor = style.getPropertyValue("--danger"), infoColor = style.getPropertyValue("--info"),
    darkColor = style.getPropertyValue("--dark"), Body = $("body"), TemplateSidebar = $(".sidebar"),
    TemplateHeader = $(".t-header"), PageContentWrapper = $(".page-content-wrapper"),
    DesktopToggler = $(".t-header-desk-toggler"), MobileToggler = $(".t-header-mobile-toggler");
if ($("body").hasClass("dark-theme")) var chartFontcolor = "#b9c0d3",
    chartGridLineColor = "#383e5d"; else chartFontcolor = "#6c757d", chartGridLineColor = "rgba(0,0,0,0.08)";
DesktopToggler.on("click", function () {
    $(Body).toggleClass("sidebar-minimized")
}), MobileToggler.on("click", function () {
    $(".page-body").toggleClass("sidebar-collpased")
});
var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, "");

function themeSwitch(e) {
    var t = window.location.href, a = (t.split("/"), t.replace(/demo_.\d*/, e));
    window.location.href = a
}

$(".navigation-menu li a", TemplateSidebar).each(function () {
    var e = $(this);
    "" === current ? -1 !== e.attr("href").indexOf("index.html") && ($(this).parents("li").last().addClass("active"), $(this).parents(".navigation-submenu").length && $(this).addClass("active")) : -1 !== e.attr("href").indexOf(current) && ($(this).parents("li").last().addClass("active"), $(this).parents(".navigation-submenu").length && $(this).addClass("active"), "index.html" !== current && ($(this).parents("li").last().find("a").attr("aria-expanded", "true"), $(this).parents(".navigation-submenu").length && $(this).closest(".collapse").addClass("show")))
}), $("#light-theme-active").on("click", function (e) {
    e.preventDefault(), themeSwitch("demo_1")
}), $("#dark-theme-active").on("click", function (e) {
    e.preventDefault(), themeSwitch("demo_2")
}), $(".t-header-toggler").click(function () {
    $(".t-header-toggler").toggleClass("arrow")
}), $(".sidebar .navigation-menu > li > a[data-toggle='collapse']").on("click", function () {
    $(".sidebar .navigation-menu > li").find(".collapse.show").collapse("hide"), $(".sidebar .sidebar_footer").removeClass("opened")
}), $(".email-header .email-aside-list-toggler").on("click", function () {
    $(".email-wrapper .email-aside-list").toggleClass("open")
}), $(".btn.btn-refresh").on("click", function () {
    $(this).addClass("clicked"), setTimeout(function () {
        $(".btn.btn-refresh").removeClass("clicked")
    }, 3e3)
}), $(".btn.btn-like").on("click", function () {
    $(this).toggleClass("clicked"), $(this).find("i").toggleClass("mdi-heart-outline clicked").toggleClass("mdi-heart")
}), $(".right-sidebar-toggler").on("click", function () {
    $(".right-sidebar").toggleClass("right-sidebar-opened")
}), $(".email-compose-toolbar .toolbar-menu .delete-draft").on("click", function () {
    $(".email-compose-wrapper").removeClass("open"), $("#email-compose")[0].reset()
}), $(".email-composer").on("click", function () {
    $(".email-compose-wrapper").addClass("open")
}), $(".email-compose-wrapper .email-compose-header .header-controls .compose-minimize").on("click", function () {
    $(this).addClass("minimized"), $(".email-compose-wrapper").addClass("compose-minimized"), $(this).parentsUntil(".email-compose-header").append('<div class="header-ovelay"></div>'), $(".email-compose-wrapper .header-ovelay").on("click", function () {
        $(".email-compose-wrapper").removeClass("compose-minimized"), this.remove(".header-ovelay"), $(".email-compose-wrapper .email-compose-header .header-controls .compose-minimize").removeClass("minimized")
    })
}), $(".animated-count").length && $(".animated-count").counterUp({
    delay: 50,
    time: 800
}), $('[data-toggle="tooltip"]').tooltip({animation: !0, delay: 100}), function (e) {
    "use strict";
    var t = [["data1", 30, 200, 100, 400, 150, 250], ["data2", 130, 100, 140, 200, 150, 50]];
    if (e("#sample_c3-line-chart").length) c3.generate({
        bindto: "#sample_c3-line-chart",
        data: {columns: t, colors: {data1: chartColors[0], data2: chartColors[1]}}
    });
    if (e("#sample_c3-area-chart").length) c3.generate({
        bindto: "#sample_c3-area-chart",
        data: {
            columns: t,
            types: {data1: "area-spline", data2: "area-spline"},
            groups: [["data1", "data2"]],
            colors: {data1: chartColors[0], data2: chartColors[1]}
        }
    });
    if (e("#sample_c3-bar-chart").length) c3.generate({
        bindto: "#sample_c3-bar-chart",
        data: {
            columns: t,
            type: "bar",
            bar: {width: {ratio: .5}},
            colors: {data1: chartColors[0], data2: chartColors[1]}
        }
    });
    if (e("#sample_c3-stacked-bar-chart").length) c3.generate({
        bindto: "#sample_c3-stacked-bar-chart",
        data: {
            columns: t,
            type: "bar",
            groups: [["data1", "data2"]],
            colors: {data1: chartColors[0], data2: chartColors[1]}
        },
        grid: {y: {lines: [{value: 0}]}}
    });
    if (e("#sample_c3-step-chart").length) c3.generate({
        bindto: "#sample_c3-step-chart",
        data: {
            columns: t,
            types: {data1: "step", data2: "area-step"},
            colors: {data1: chartColors[0], data2: chartColors[1]}
        }
    });
    if (e("#sample_c3-scattered-plot-chart").length) c3.generate({
        bindto: "#sample_c3-scattered-plot-chart",
        data: {
            xs: {setosa: "setosa_x", versicolor: "versicolor_x"},
            columns: [["setosa_x", 3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3], ["versicolor_x", 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8], ["setosa", .2, .2, .2, .2, .2, .4, .3, .2, .2, .1, .2, .2, .1, .1, .2, .4, .4, .3, .3, .3, .2, .4, .2, .5, .2, .2, .4, .2, .2, .2, .2, .4, .1, .2, .2, .2, .2, .1, .2, .2, .3, .3, .2, .6, .4, .3, .2, .2, .2, .2], ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3]],
            type: "scatter",
            colors: {data1: chartColors[0], data2: chartColors[1]}
        },
        axis: {x: {label: "Sepal.Width", tick: {fit: !1}}, y: {label: "Petal.Width"}}
    });
    if (e("#sample_c3-donut-chart").length) c3.generate({
        bindto: "#sample_c3-donut-chart",
        data: {
            columns: [["data1", 30], ["data2", 120]], type: "donut", onclick: function (e, t) {
                console.log("onclick", e, t)
            }, onmouseover: function (e, t) {
                console.log("onmouseover", e, t)
            }, onmouseout: function (e, t) {
                console.log("onmouseout", e, t)
            }, colors: {data1: chartColors[0], data2: chartColors[1]}
        },
        donut: {title: "Iris Petal Width"}
    });
    if (e("#sample_c3-pie-chart").length) c3.generate({
        bindto: "#sample_c3-pie-chart",
        data: {
            columns: [["data1", 30], ["data2", 120]],
            colors: {data1: chartColors[0], data2: chartColors[1]},
            type: "pie",
            onclick: function (e, t) {
                console.log("onclick", e, t)
            },
            onmouseover: function (e, t) {
                console.log("onmouseover", e, t)
            },
            onmouseout: function (e, t) {
                console.log("onmouseout", e, t)
            }
        }
    });
    if (e("#sample_c3-guage-chart").length) c3.generate({
        bindto: "#sample_c3-guage-chart",
        data: {columns: [["data", 65]], colors: {data1: chartColors[0], data2: chartColors[1]}, type: "gauge"},
        gauge: {},
        color: {pattern: chartColors, threshold: {values: [30, 60, 90, 100]}},
        size: {height: 180}
    })
}(jQuery), $(function () {
    "use strict";
    if ($("#chartist-line-chart").length && new Chartist.Line("#chartist-line-chart", {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
    }, {
        fullWidth: !0,
        chartPadding: {right: 40}
    }), $("#chartist-holes-in-data").length) new Chartist.Line("#chartist-holes-in-data", {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        series: [[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9], [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null], [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null], [{
            x: 3,
            y: 3
        }, {x: 4, y: 3}, {x: 5, y: void 0}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]]
    }, {fullWidth: !0, chartPadding: {right: 10}, low: 0});
    if ($("#chartist-filled-holes-in-data").length) new Chartist.Line("#chartist-filled-holes-in-data", {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
        series: [[5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9], [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null], [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null], [{
            x: 3,
            y: 3
        }, {x: 4, y: 3}, {x: 5, y: void 0}, {x: 6, y: 4}, {x: 7, y: null}, {x: 8, y: 4}, {x: 9, y: 4}]]
    }, {
        fullWidth: !0,
        chartPadding: {right: 10},
        lineSmooth: Chartist.Interpolation.cardinal({fillHoles: !0}),
        low: 0
    });
    if ($("#chartist-scatter-diagram").length) {
        var e = function (e) {
            return Array.apply(null, new Array(e))
        }, t = e(52).map(Math.random).reduce(function (e, t, a) {
            return e.labels.push(a + 1), e.series.forEach(function (e) {
                e.push(100 * Math.random())
            }), e
        }, {
            labels: [], series: e(4).map(function () {
                return new Array
            })
        }), a = {
            showLine: !1, axisX: {
                labelInterpolationFnc: function (e, t) {
                    return t % 13 == 0 ? "W" + e : null
                }
            }
        }, r = [["screen and (min-width: 640px)", {
            axisX: {
                labelInterpolationFnc: function (e, t) {
                    return t % 4 == 0 ? "W" + e : null
                }
            }
        }]];
        new Chartist.Line("#chartist-scatter-diagram", t, a, r)
    }
    if ($("#chartist-line-with-area").length && new Chartist.Line("#chartist-line-with-area", {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[5, 9, 7, 8, 5, 3, 5, 4]]
    }, {
        low: 0,
        showArea: !0
    }), $("#chartist-bi-polar").length && new Chartist.Line("#chartist-bi-polar", {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [[1, 2, 3, 1, -2, 0, 1, 0], [-2, -1, -2, -1, -2.5, -1, -2, -1], [0, 0, 0, 1, 2, 2.5, 2, 1], [2.5, 2, 1, .5, 1, .5, -1, -2.5]]
    }, {
        high: 3,
        low: -3,
        showArea: !0,
        showLine: !1,
        showPoint: !1,
        fullWidth: !0,
        axisX: {showLabel: !1, showGrid: !1}
    }), $("#chartist-bi-polar-bar").length) {
        t = {
            labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
            series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
        }, a = {
            high: 10, low: -10, axisX: {
                labelInterpolationFnc: function (e, t) {
                    return t % 2 == 0 ? e : null
                }
            }
        };
        new Chartist.Bar("#chartist-bi-polar-bar", t, a)
    }
    if ($("#chartist-bi-polar-bar").length) {
        t = {
            labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
            series: [[1, 2, 4, 8, 6, -2, -1, -4, -6, -2]]
        }, a = {
            high: 10, low: -10, axisX: {
                labelInterpolationFnc: function (e, t) {
                    return t % 2 == 0 ? e : null
                }
            }
        };
        new Chartist.Bar("#chartist-bi-polar-bar", t, a)
    }
    if ($("#chartist-bar-chart").length) {
        t = {
            labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10"],
            series: [[1, 2, 4, 8, 6, 2, 1, 4, 6, 2]]
        }, a = {
            high: 10, low: 0, axisX: {
                labelInterpolationFnc: function (e, t) {
                    return t % 2 == 0 ? e : null
                }
            }
        };
        new Chartist.Bar("#chartist-bar-chart", t, a)
    }
    if ($("#chartist-overlapping-bar-chart").length) {
        t = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]]
        }, a = {seriesBarDistance: 10}, r = [["screen and (max-width: 640px)", {
            seriesBarDistance: 5,
            axisX: {
                labelInterpolationFnc: function (e) {
                    return e[0]
                }
            }
        }]];
        new Chartist.Bar("#chartist-overlapping-bar-chart", t, a, r)
    }
    if ($("#chartist-stacked-bar-chart").length && new Chartist.Bar("#chartist-stacked-bar-chart", {
        labels: ["Q1", "Q2", "Q3", "Q4"],
        series: [[8e5, 12e5, 14e5, 13e5], [2e5, 4e5, 5e5, 3e5], [1e5, 2e5, 4e5, 6e5]]
    }, {
        stackBars: !0, axisY: {
            labelInterpolationFnc: function (e) {
                return e / 1e3 + "k"
            }
        }
    }).on("draw", function (e) {
        "bar" === e.type && e.element.attr({style: "stroke-width: 30px"})
    }), $("#chartist-simple-pie-chart").length) {
        t = {series: [5, 3, 4]};
        var o = function (e, t) {
            return e + t
        };
        new Chartist.Pie("#chartist-simple-pie-chart", t, {
            labelInterpolationFnc: function (e) {
                return Math.round(e / t.series.reduce(o) * 100) + "%"
            }
        })
    }
    if ($("#chartist-pie-chart-custom-label").length) {
        t = {labels: ["Bananas", "Apples", "Grapes"], series: [20, 15, 40]}, a = {
            labelInterpolationFnc: function (e) {
                return e[0]
            }
        }, r = [["screen and (min-width: 640px)", {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: "explode",
            labelInterpolationFnc: function (e) {
                return e
            }
        }], ["screen and (min-width: 1024px)", {labelOffset: 80, chartPadding: 20}]];
        new Chartist.Pie("#chartist-pie-chart-custom-label", t, a, r)
    }
    $("#chartist-gauge-chart").length && new Chartist.Pie("#chartist-gauge-chart", {series: [20, 10, 30, 40]}, {
        donut: !0,
        donutWidth: 60,
        startAngle: 270,
        total: 200,
        showLabel: !1
    }), $("#chartist-donut-chart").length && new Chartist.Pie("#chartist-donut-chart", {series: [20, 10, 30, 40]}, {
        donut: !0,
        donutWidth: 60,
        donutSolid: !0,
        startAngle: 270,
        showLabel: !0
    })
});
var currved = $(".curved-mode");
$(".curved-mode").length && (Chart.elements.Rectangle.prototype.draw = function () {
    var e, t, a, r, o, l, n, i = this._chart.ctx, s = this._view, d = s.borderWidth;
    if (n = s.horizontal ? (e = s.base, t = s.x, a = s.y - s.height / 2, r = s.y + s.height / 2, o = e < t ? 1 : -1, l = 1, s.borderSkipped || "left") : (e = s.x - s.width / 2, t = s.x + s.width / 2, o = 1, l = (a = s.y) < (r = s.base) ? 1 : -1, s.borderSkipped || "bottom"), d) {
        var c = Math.min(Math.abs(e - t), Math.abs(a - r)), u = (d = c < d ? c : d) / 2,
            h = e + ("left" !== n ? u * o : 0), p = t + ("right" !== n ? -u * o : 0), g = a + ("top" !== n ? u * l : 0),
            b = r + ("bottom" !== n ? -u * l : 0);
        h !== p && (a = g, r = b), g !== b && (e = h, t = p)
    }
    i.beginPath(), i.fillStyle = s.backgroundColor, i.strokeStyle = s.borderColor, i.lineWidth = d;
    var v = [[e, r], [e, a], [t, a], [t, r]], m = ["bottom", "left", "top", "right"].indexOf(n, 0);

    function f(e) {
        return v[(m + e) % 4]
    }

    -1 === m && (m = 0);
    var C = f(0);
    i.moveTo(C[0], C[1]);
    for (var w = 1; w < 4; w++) {
        var k;
        C = f(w), nextCornerId = w + 1, 4 == nextCornerId && (nextCornerId = 0), nextCorner = f(nextCornerId), width = v[2][0] - v[1][0], height = v[0][1] - v[1][1], x = v[1][0], y = v[1][1], (k = 20) > height / 2 && (k = height / 2), k > width / 2 && (k = width / 2), i.moveTo(x + k, y), i.lineTo(x + width - k, y), i.quadraticCurveTo(x + width, y, x + width, y + k), i.lineTo(x + width, y + height - k), i.quadraticCurveTo(x + width, y + height, x + width - k, y + height), i.lineTo(x + k, y + height), i.quadraticCurveTo(x, y + height, x, y + height - k), i.lineTo(x, y + k), i.quadraticCurveTo(x, y, x + k, y)
    }
    i.fill(), d && i.stroke()
}), Chart.defaults.global.tooltips.enabled = !1, Chart.defaults.global.tooltips.caretSize = 4, Chart.defaults.global.tooltips.intersect = !1, Chart.defaults.global.tooltips.custom = function (o) {
    var e = document.getElementById("chartjs-tooltip");
    if (e || ((e = document.createElement("div")).id = "chartjs-tooltip", e.innerHTML = "<table></table>", document.body.appendChild(e)), 0 !== o.opacity) {
        if (e.classList.remove("above", "below", "no-transform"), o.yAlign ? e.classList.add(o.yAlign) : e.classList.add("no-transform"), o.body) {
            var t = o.title || [], a = o.body.map(function (e) {
                return e.lines
            }), l = "<thead>";
            t.forEach(function (e) {
                l += "<tr><th>" + e + "</th></tr>"
            }), l += "</thead><tbody>", a.forEach(function (e, t) {
                var a = o.labelColors[t], r = "background:" + a.borderColor;
                r += "; border-color:" + a.borderColor, l += "<tr><td>" + ('<span style="' + (r += "; border-width: 2px") + '"></span>') + e + "</td></tr>"
            }), l += "</tbody>", e.querySelector("table").innerHTML = l
        }
        var r = this._chart.canvas.getBoundingClientRect();
        e.style.opacity = 1, e.style.position = "absolute", e.style.left = r.left + window.pageXOffset + o.caretX + "px", e.style.top = r.top + window.pageYOffset + o.caretY + "px", e.style.fontFamily = o._bodyFontFamily, e.style.fontSize = o.bodyFontSize + "px", e.style.fontStyle = o._bodyFontStyle, e.style.padding = o.yPadding + "px " + o.xPadding + "px", e.style.pointerEvents = "none"
    } else e.style.opacity = 0
}, $(function () {
    "use strict";
    if ($("#chartjs-staked-area-chart").length) {
        var e = {
            type: "line",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: chartColors[0],
                    borderColor: chartColors[0],
                    borderWidth: 1
                }, {
                    label: "# of Points",
                    data: [7, 11, 5, 8, 3, 7],
                    borderColor: chartColors[1],
                    borderWidth: 1,
                    backgroundColor: chartColors[1]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: !1,
                        ticks: {reverse: !1, display: !1, beginAtZero: !1},
                        gridLines: {drawBorder: !1, color: chartGridLineColor, zeroLineColor: chartGridLineColor}
                    }],
                    yAxes: [{
                        ticks: {max: 25, min: 0, fontColor: chartFontcolor, beginAtZero: !1},
                        gridLines: {
                            color: chartGridLineColor,
                            zeroLineColor: chartGridLineColor,
                            display: !0,
                            drawBorder: !1
                        }
                    }]
                }, legend: !1
            }
        }, t = document.getElementById("chartjs-staked-area-chart").getContext("2d");
        new Chart(t, e)
    }
    if ($("#chartjs-staked-line-chart").length) {
        e = {
            type: "line",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [{
                    label: "# of Votes",
                    data: [12, 19, 3, 5, 2, 3],
                    borderWidth: 2,
                    fill: !1,
                    backgroundColor: chartColors[0],
                    borderColor: chartColors[0],
                    borderWidth: 0
                }, {
                    label: "# of Points",
                    data: [7, 11, 5, 8, 3, 7],
                    borderWidth: 2,
                    fill: !1,
                    backgroundColor: chartColors[1],
                    borderColor: chartColors[1],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        display: !1,
                        ticks: {reverse: !1, display: !1, beginAtZero: !1},
                        gridLines: {drawBorder: !1, color: chartGridLineColor, zeroLineColor: chartGridLineColor}
                    }],
                    yAxes: [{
                        ticks: {max: 25, min: 0, fontColor: chartFontcolor, beginAtZero: !1},
                        gridLines: {
                            color: chartGridLineColor,
                            zeroLineColor: chartGridLineColor,
                            display: !0,
                            drawBorder: !1
                        }
                    }]
                }, fill: !1, legend: !1
            }
        }, t = document.getElementById("chartjs-staked-line-chart").getContext("2d");
        new Chart(t, e)
    }
    if ($("#chartjs-bar-chart").length) {
        var a = {
            labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
            datasets: [{
                label: "# of Votes",
                data: [10, 19, 3, 5, 12, 3],
                backgroundColor: chartColors,
                borderColor: chartColors,
                borderWidth: 0
            }]
        }, r = $("#chartjs-bar-chart").get(0).getContext("2d");
        new Chart(r, {
            type: "bar",
            data: a,
            options: {
                legend: !1,
                scales: {
                    xAxes: [{
                        ticks: {fontColor: chartFontcolor, beginAtZero: !1, beginAtZero: !1},
                        gridLines: {
                            display: !1,
                            drawBorder: !1,
                            color: chartGridLineColor,
                            zeroLineColor: chartGridLineColor
                        }
                    }],
                    yAxes: [{
                        ticks: {max: 25, min: 0, fontColor: chartFontcolor, beginAtZero: !1},
                        gridLines: {
                            color: chartGridLineColor,
                            zeroLineColor: chartGridLineColor,
                            display: !0,
                            drawBorder: !1
                        }
                    }]
                }
            }
        })
    }
    if ($("#chartjs-staked-bar-chart").length) a = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017"],
        datasets: [{
            label: "Profit",
            data: [10, 19, 3, 5, 12, 3],
            backgroundColor: chartColors[0],
            borderColor: chartColors[0],
            borderWidth: 0
        }, {
            label: "Sales",
            data: [23, 12, 8, 13, 9, 17],
            backgroundColor: chartColors[1],
            borderColor: chartColors[1],
            borderWidth: 0
        }]
    }, r = $("#chartjs-staked-bar-chart").get(0).getContext("2d"), new Chart(r, {
        type: "bar",
        data: a,
        options: {
            tooltips: {mode: "index", intersect: !1},
            responsive: !0,
            scales: {
                xAxes: [{
                    stacked: !0,
                    ticks: {fontColor: chartFontcolor, beginAtZero: !1, beginAtZero: !1},
                    gridLines: {
                        display: !1,
                        drawBorder: !1,
                        color: chartGridLineColor,
                        zeroLineColor: chartGridLineColor
                    }
                }],
                yAxes: [{
                    stacked: !0,
                    ticks: {max: 25, min: 0, fontColor: chartFontcolor, beginAtZero: !1},
                    gridLines: {
                        color: chartGridLineColor,
                        zeroLineColor: chartGridLineColor,
                        display: !0,
                        drawBorder: !1
                    }
                }]
            },
            legend: !1
        }
    });
    if ($("#chartjs-radar-chart").length) {
        var o = document.getElementById("chartjs-radar-chart"), l = {
            labels: ["English", "Maths", "Physics", "Chemistry", "Biology", "History"],
            datasets: [{
                label: "Student A",
                data: [24, 55, 30, 56, 60, 68],
                backgroundColor: chartColors[0],
                borderColor: chartColors[0],
                borderWidth: 0
            }, {
                label: "Student B",
                data: [54, 65, 60, 70, 70, 75],
                backgroundColor: chartColors[1],
                borderColor: chartColors[1],
                borderWidth: 0
            }, {
                label: "Student c",
                data: [43, 13, 33, 57, 50, 75],
                backgroundColor: chartColors[2],
                borderColor: chartColors[2],
                borderWidth: 0
            }]
        };
        new Chart(o, {type: "radar", data: l})
    }
    if ($("#chartjs-doughnut-chart").length) {
        var n = {
            datasets: [{
                data: [30, 40, 30],
                backgroundColor: chartColors,
                borderColor: chartColors,
                borderWidth: chartColors
            }], labels: ["Data 1", "Data 2", "Data 3"]
        }, i = $("#chartjs-doughnut-chart").get(0).getContext("2d");
        new Chart(i, {
            type: "doughnut",
            data: n,
            options: {responsive: !0, animation: {animateScale: !0, animateRotate: !0}}
        })
    }
    if ($("#chartjs-pie-chart").length) {
        var s = {
            datasets: [{
                data: [30, 40, 30],
                backgroundColor: chartColors,
                borderColor: chartColors,
                borderWidth: chartColors
            }], labels: ["Data 1", "Data 2", "Data 3"]
        }, d = $("#chartjs-pie-chart").get(0).getContext("2d");
        new Chart(d, {
            type: "pie",
            data: s,
            options: {responsive: !0, animation: {animateScale: !0, animateRotate: !0}}
        })
    }
}), $(function () {
    "use strict";
    $("#morris-line-chart").length && Morris.Line({
        element: "morris-line-chart",
        data: [{y: "2006", a: 100, b: 90}, {y: "2007", a: 75, b: 65}, {y: "2008", a: 50, b: 40}, {
            y: "2009",
            a: 75,
            b: 65
        }, {y: "2010", a: 50, b: 40}, {y: "2011", a: 75, b: 65}, {y: "2012", a: 100, b: 90}],
        xkey: "y",
        ykeys: ["a", "b"],
        lineColors: chartColors,
        labels: ["Series A", "Series B"]
    }), $("#morris-area-chart").length && Morris.Area({
        element: "morris-area-chart",
        data: [{y: "2006", a: 100, b: 90}, {y: "2007", a: 75, b: 65}, {y: "2008", a: 50, b: 40}, {
            y: "2009",
            a: 75,
            b: 65
        }, {y: "2010", a: 50, b: 40}, {y: "2011", a: 75, b: 65}, {y: "2012", a: 100, b: 90}],
        xkey: "y",
        ykeys: ["a", "b"],
        lineColors: chartColors,
        labels: ["Series A", "Series B"]
    }), $("#morris-bar-chart").length && Morris.Bar({
        element: "morris-bar-chart",
        data: [{y: "2006", a: 100, b: 90}, {y: "2007", a: 75, b: 65}, {y: "2008", a: 50, b: 40}, {
            y: "2009",
            a: 75,
            b: 65
        }, {y: "2010", a: 50, b: 40}, {y: "2011", a: 75, b: 65}, {y: "2012", a: 100, b: 90}],
        xkey: "y",
        ykeys: ["a", "b"],
        barColors: chartColors,
        labels: ["Series A", "Series B"]
    }), $("#morris-donut-chart").length && Morris.Donut({
        element: "morris-donut-chart",
        data: [{label: "Download Sales", value: 12}, {label: "In-Store Sales", value: 30}, {
            label: "Mail-Order Sales",
            value: 20
        }],
        colors: chartColors
    })
}), function (e) {
    "use strict";
    if (e("#summernoteExample").length && e("#summernoteExample").summernote({
        height: 300,
        tabsize: 2
    }), e("#tinyMceExample").length && tinymce.init({
        selector: "#tinyMceExample",
        height: 500,
        theme: "modern",
        plugins: ["advlist autolink lists link image charmap print preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars code fullscreen", "insertdatetime media nonbreaking save table contextmenu directionality", "emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help"],
        toolbar1: "undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
        toolbar2: "print preview media | forecolor backcolor emoticons | codesample help",
        image_advtab: !0,
        templates: [{title: "Test template 1", content: "Test 1"}, {title: "Test template 2", content: "Test 2"}],
        content_css: []
    }), e("#simpleMde").length) new SimpleMDE({element: e("#simpleMde")[0]})
}(jQuery), $(function () {
    "use strict";
    var e = require("switchery");
    if ($("#js-select-example").length && $("#js-select-example").select2(), $("#switchery-primary").length) new e(document.querySelector("#switchery-primary"), {
        className: "switchery switch-primary",
        color: "#f3f5f6"
    });
    if ($("#switchery-success").length) new e(document.querySelector("#switchery-success"), {
        className: "switchery switch-success",
        color: "#f3f5f6"
    });
    if ($("#switchery-warning").length) new e(document.querySelector("#switchery-warning"), {
        className: "switchery switch-warning",
        color: "#f3f5f6"
    });
    if ($("#switchery-danger").length) new e(document.querySelector("#switchery-danger"), {
        className: "switchery switch-danger",
        color: "#f3f5f6"
    });
    if ($("#switchery-info").length) new e(document.querySelector("#switchery-info"), {
        className: "switchery switch-info",
        color: "#f3f5f6"
    });
    if ($("#ul-slider-1").length) {
        var t = document.getElementById("ul-slider-1");
        noUiSlider.create(t, {start: [72], connect: [!0, !1], range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-2").length) {
        t = document.getElementById("ul-slider-2");
        noUiSlider.create(t, {start: [92], connect: [!0, !1], range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-3").length) {
        t = document.getElementById("ul-slider-3");
        noUiSlider.create(t, {start: [43], connect: [!0, !1], range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-4").length) {
        t = document.getElementById("ul-slider-4");
        noUiSlider.create(t, {start: [20], connect: [!0, !1], range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-5").length) {
        t = document.getElementById("ul-slider-5");
        noUiSlider.create(t, {start: [75], connect: [!0, !1], range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-6").length) {
        t = document.getElementById("ul-slider-6");
        noUiSlider.create(t, {start: [72], connect: [!0, !1], orientation: "vertical", range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-7").length) {
        t = document.getElementById("ul-slider-7");
        noUiSlider.create(t, {start: [92], connect: [!0, !1], orientation: "vertical", range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-8").length) {
        t = document.getElementById("ul-slider-8");
        noUiSlider.create(t, {start: [43], connect: [!0, !1], orientation: "vertical", range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-9").length) {
        t = document.getElementById("ul-slider-9");
        noUiSlider.create(t, {start: [20], connect: [!0, !1], orientation: "vertical", range: {min: [0], max: [100]}})
    }
    if ($("#ul-slider-10").length) {
        t = document.getElementById("ul-slider-10");
        noUiSlider.create(t, {start: [75], connect: [!0, !1], orientation: "vertical", range: {min: [0], max: [100]}})
    }
    $("#skipstep-connect").length && $(function () {
        var e = document.getElementById("skipstep-connect");
        noUiSlider.create(e, {
            connect: !0,
            range: {min: 0, "10%": 10, "20%": 20, "30%": 30, "50%": 50, "60%": 60, "70%": 70, "90%": 90, max: 100},
            snap: !0,
            start: [20, 90]
        });
        var a = [document.getElementById("skip-value-lower-3"), document.getElementById("skip-value-upper-3")];
        e.noUiSlider.on("update", function (e, t) {
            a[t].innerHTML = e[t]
        })
    }), $("#datepicker-popup").length && $("#datepicker-popup").datepicker({
        enableOnReadonly: !0,
        todayHighlight: !0,
        templates: {
            leftArrow: '<i class="mdi mdi-chevron-left"></i>',
            rightArrow: '<i class="mdi mdi-chevron-right"></i>'
        }
    })
}), function (e) {
    "use strict";
    e(".enable-mask.date-mask").mask("00/00/0000"), e(".enable-mask.time-mask").mask("00:00:00"), e(".enable-mask.phone-mask").mask("(00) 0000-0000"), e(".enable-mask.ip_address-mask").mask("0ZZ.0ZZ.0ZZ.0ZZ", {
        translation: {
            Z: {
                pattern: /[0-9]/,
                optional: !0
            }
        }
    }), e("#defaultconfig").maxlength({
        warningClass: "badge mt-1 badge-success",
        limitReachedClass: "badge mt-1 badge-danger"
    }), e("#defaultconfig-2").maxlength({
        alwaysShow: !0,
        threshold: 20,
        warningClass: "badge mt-1 badge-success",
        limitReachedClass: "badge mt-1 badge-danger"
    }), e("#defaultconfig-3").maxlength({
        alwaysShow: !0,
        threshold: 10,
        warningClass: "badge mt-1 badge-success",
        limitReachedClass: "badge mt-1 badge-danger",
        separator: " of ",
        preText: "You have ",
        postText: " chars remaining.",
        validate: !0
    }), e("#maxlength-textarea").maxlength({
        alwaysShow: !0,
        warningClass: "badge mt-1 badge-success",
        limitReachedClass: "badge mt-1 badge-danger"
    })
}(jQuery), $(function () {
    $("#smartwizard-default").length && $("#smartwizard-default").smartWizard({
        selected: 0,
        keyNavigation: !0,
        autoAdjustHeight: !0,
        cycleSteps: !1,
        BACKBUTTONSUPPORT: !0,
        useURLhash: !0,
        lang: {next: "Next", previous: "Previous"},
        toolbarSettings: {
            toolbarPosition: "bottom",
            toolbarButtonPosition: "right",
            showNextButton: !0,
            showPreviousButton: !0
        },
        anchorSettings: {anchorClickable: !1, enableAllAnchors: !1, markDoneStep: !0, enableAnchorOnDoneStep: !0},
        contentURL: null,
        disabledSteps: [],
        errorSteps: [],
        theme: "default",
        transitionEffect: "fade",
        transitionSpeed: "0"
    }), $("#smartwizard-arrows").length && $("#smartwizard-arrows").smartWizard({
        selected: 0,
        keyNavigation: !0,
        autoAdjustHeight: !0,
        cycleSteps: !1,
        backButtonSupport: !0,
        useURLhash: !0,
        lang: {next: "Next", previous: "Previous"},
        toolbarSettings: {
            toolbarPosition: "bottom",
            toolbarButtonPosition: "right",
            showNextButton: !0,
            showPreviousButton: !0
        },
        anchorSettings: {anchorClickable: !1, enableAllAnchors: !1, markDoneStep: !0, enableAnchorOnDoneStep: !0},
        contentURL: null,
        disabledSteps: [],
        errorSteps: [],
        theme: "arrows",
        transitionEffect: "fade",
        transitionSpeed: "0"
    })
}), $(function (e) {
    "use strict";
    var t = "#apex-area-spinal", a = "#apex-time-series", r = "#apex-line-chart", o = "#apex-line-chart-multiple",
        l = "#apex-grouped-bar-chart", n = "#apex-stacked-bar-chart", i = "#apex-pie-chart", s = "#apex-donut-chart";
    if (e(t).length) {
        var d = {
            chart: {height: 380, type: "area", toolbar: {show: !1}},
            dataLabels: {enabled: !1},
            stroke: {curve: "smooth", width: 3},
            colors: chartColors,
            series: [{name: "series1", data: [31, 40, 28, 51, 42, 109, 100]}, {
                name: "series2",
                data: [11, 32, 45, 32, 34, 52, 41]
            }],
            xaxis: {categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], show: !0, axisBorder: {show: !1}},
            yaxis: {show: !1},
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15},
            tooltip: {fixed: {enabled: !1, position: "topRight"}}
        };
        new ApexCharts(document.querySelector(t), d).render()
    }
    if (e(a).length) {
        for (var c = 13885344e5, u = 13886208e5, h = 13890528e5, p = [[], [], []], g = 0; g < 12; g++) {
            var b = [c += 864e5, dataSeries[2][g].value];
            p[0].push(b)
        }
        for (g = 0; g < 18; g++) {
            b = [u += 864e5, dataSeries[1][g].value];
            p[1].push(b)
        }
        for (g = 0; g < 12; g++) {
            b = [h += 864e5, dataSeries[0][g].value];
            p[2].push(b)
        }
        d = {
            chart: {type: "area", stacked: !1, height: 380, zoom: {enabled: !1}, toolbar: {show: !1}},
            plotOptions: {line: {curve: "smooth"}},
            dataLabels: {enabled: !1},
            colors: chartColors,
            series: [{name: "PRODUCT A", data: p[0]}, {name: "PRODUCT B", data: p[1]}, {name: "PRODUCT C", data: p[2]}],
            markers: {size: 0, style: "full"},
            fill: {
                gradient: {
                    enabled: !0,
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: .45,
                    opacityTo: .05,
                    stops: [20, 100, 100, 100]
                }
            },
            xaxis: {type: "datetime", show: !0, axisBorder: {show: !1}},
            yaxis: {
                show: !1, labels: {
                    style: {color: "#8e8da4"}, offsetX: 0, formatter: function (e) {
                        return (e / 1e6).toFixed(0)
                    }
                }, axisBorder: {show: !1}, axisTicks: {show: !1}
            },
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15},
            tooltip: {
                shared: !0, y: {
                    formatter: function (e) {
                        return (e / 1e6).toFixed(0) + " points"
                    }
                }
            }
        };
        new ApexCharts(document.querySelector(a), d).render()
    }
    if (e(r).length) {
        d = {
            chart: {height: 380, type: "line", zoom: {enabled: !1}, toolbar: {show: !1}},
            dataLabels: {enabled: !1},
            stroke: {curve: "smooth", width: 3},
            colors: chartColors,
            series: [{name: "Mobile", data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320]}, {
                name: "Desktops",
                data: [233, 423, 352, 272, 432, 224, 107, 133, 458, 229]
            }],
            grid: {row: {colors: ["#f3f3f3", "transparent"], opacity: .5}},
            labels: series.monthDataSeries1.dates,
            xaxis: {categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]},
            yaxis: {show: !1},
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15}
        };
        new ApexCharts(document.querySelector(r), d).render()
    }
    if (e(o).length) {
        d = {
            chart: {height: 380, type: "line", zoom: {enabled: !1}, animations: {enabled: !1}, toolbar: {show: !1}},
            stroke: {width: [5, 5, 4], curve: "straight"},
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15},
            colors: chartColors,
            series: [{
                name: "Peter",
                data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
            }, {
                name: "Johnny",
                data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
            }, {name: "David", data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]}],
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
            yaxis: {show: !1}
        };
        new ApexCharts(document.querySelector(o), d).render()
    }
    if (e(l).length) {
        d = {
            chart: {height: 380, type: "bar", toolbar: {show: !1}},
            plotOptions: {bar: {horizontal: !1, endingShape: "rounded", columnWidth: "55%"}},
            dataLabels: {enabled: !1},
            stroke: {show: !0, width: 2, colors: ["transparent"]},
            colors: chartColors,
            series: [{name: "Net Profit", data: [44, 55, 57, 56, 61, 58]}, {
                name: "Revenue",
                data: [76, 85, 101, 98, 87, 105]
            }, {name: "Free Cash Flow", data: [35, 41, 36, 26, 45, 48]}],
            xaxis: {categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul"]},
            yaxis: {show: !1},
            fill: {opacity: 1},
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15},
            tooltip: {
                y: {
                    formatter: function (e) {
                        return "$ " + e + " thousands"
                    }
                }
            }
        };
        new ApexCharts(document.querySelector(l), d).render()
    }
    if (e(n).length) {
        d = {
            chart: {height: 380, type: "bar", stacked: !0, toolbar: {show: !1}},
            plotOptions: {bar: {horizontal: !1}},
            colors: chartColors,
            series: [{name: "PRODUCT A", data: [44, 55, 41, 67, 22, 43, 21]}, {
                name: "PRODUCT B",
                data: [13, 23, 20, 8, 13, 27, 33]
            }, {name: "PRODUCT C", data: [11, 17, 15, 15, 21, 14, 15]}],
            xaxis: {categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], show: !0, axisBorder: {show: !1}},
            yaxis: {show: !1},
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15},
            fill: {opacity: 1}
        };
        new ApexCharts(document.querySelector(n), d).render()
    }
    if (e(i).length) {
        d = {
            chart: {width: 380, type: "pie", toolbar: {show: !1}},
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15},
            colors: chartColors,
            series: [44, 25, 46]
        };
        new ApexCharts(document.querySelector(i), d).render()
    }
    if (e(s).length) {
        d = {
            chart: {width: 380, type: "donut", toolbar: {show: !1}},
            legend: {position: "bottom", verticalAlign: "top", offsetX: 0, offsetY: -15},
            colors: chartColors,
            series: [44, 67, 11]
        };
        new ApexCharts(document.querySelector(s), d).render()
    }
});