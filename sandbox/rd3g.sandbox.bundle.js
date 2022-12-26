/*! For license information please see rd3g.sandbox.bundle.js.LICENSE.txt */
(() => {
  var e = {
      321: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => l });
        var r = n(294),
          o = (n(144), "./data/custom-node/res/images/"),
          i = { MAN: o + "man.svg", WOMAN: o + "girl.svg", CAR: o + "car.svg", BIKE: o + "bike.svg" };
        const a = function(e) {
            var t = e.person,
              n = "male" === t.gender;
            return r.createElement(
              "div",
              { className: "flex-container person-node ".concat(n ? "male" : "female") },
              r.createElement("div", { className: "name" }, t.name),
              r.createElement(
                "div",
                { className: "flex-container fill-space flex-container-row" },
                r.createElement(
                  "div",
                  { className: "fill-space" },
                  r.createElement("div", {
                    className: "icon",
                    style: { backgroundImage: "url('".concat(n ? i.MAN : i.WOMAN, "')") },
                  })
                ),
                r.createElement(
                  "div",
                  { className: "icon-bar" },
                  t.hasBike &&
                    r.createElement("div", {
                      className: "icon",
                      style: { backgroundImage: "url('".concat(i.BIKE, "')") },
                    }),
                  t.hasCar &&
                    r.createElement("div", {
                      className: "icon",
                      style: { backgroundImage: "url('".concat(i.CAR, "')") },
                    })
                )
              )
            );
          },
          l = {
            automaticRearrangeAfterDropNode: !0,
            collapsible: !0,
            height: 400,
            highlightDegree: 1,
            highlightOpacity: 0.2,
            linkHighlightBehavior: !0,
            maxZoom: 8,
            minZoom: 0.1,
            nodeHighlightBehavior: !0,
            panAndZoom: !1,
            staticGraph: !1,
            width: 800,
            directed: !0,
            node: {
              color: "#d3d3d3",
              fontColor: "black",
              fontSize: 12,
              fontWeight: "normal",
              highlightColor: "red",
              highlightFontSize: 12,
              highlightFontWeight: "bold",
              highlightStrokeColor: "SAME",
              highlightStrokeWidth: 1.5,
              labelProperty: "name",
              mouseCursor: "pointer",
              opacity: 1,
              renderLabel: !0,
              size: { width: 700, height: 900 },
              strokeColor: "none",
              strokeWidth: 1.5,
              svg: "",
              viewGenerator: function(e) {
                return r.createElement(a, { person: e });
              },
            },
            link: { color: "#d3d3d3", opacity: 1, semanticStrokeWidth: !1, strokeWidth: 4, highlightColor: "blue" },
          };
      },
      218: e => {
        e.exports = {
          links: [
            { source: 0, target: 2 },
            { source: 0, target: 3 },
            { source: 0, target: 4 },
            { source: 3, target: 4 },
          ],
          nodes: [
            { id: 0, name: "Mary", gender: "female", hasCar: !1, hasBike: !1 },
            { id: 2, name: "Roy", gender: "male", hasCar: !1, hasBike: !0 },
            { id: 3, name: "Frank", gender: "male", hasCar: !0, hasBike: !0 },
            { id: 4, name: "Melanie", gender: "female", hasCar: !0, hasBike: !1 },
          ],
        };
      },
      691: e => {
        e.exports = {
          links: [
            { source: "Androsynth", target: "Chenjesu" },
            { source: "Androsynth", target: "Ilwrath" },
            { source: "Androsynth", target: "Mycon" },
            { source: "Androsynth", target: "Spathi" },
            { source: "Androsynth", target: "Umgah" },
            { source: "Androsynth", target: "VUX" },
            { source: "Chenjesu", target: "Mycon" },
            { source: "Chenjesu", target: "Spathi" },
            { source: "Chenjesu", target: "Umgah" },
            { source: "Chenjesu", target: "VUX" },
            { source: "Ilwrath", target: "Spathi" },
            { source: "Ilwrath", target: "Umgah" },
            { source: "Ilwrath", target: "VUX" },
            { source: "Mycon", target: "Umgah" },
            { source: "Mycon", target: "VUX" },
            { source: "Umgah", target: "VUX" },
            { source: "Androsynth", target: "Guardian" },
            { source: "Chenjesu", target: "Broodhmome" },
            { source: "Ilwrath", target: "Avenger" },
            { source: "Mycon", target: "Podship" },
            { source: "Spathi", target: "Eluder" },
            { source: "Umgah", target: "Drone" },
            { source: "VUX", target: "Intruder" },
          ],
          nodes: [
            { id: "Androsynth" },
            { id: "Chenjesu" },
            { id: "Ilwrath" },
            { id: "Mycon" },
            { id: "Spathi" },
            { id: "Umgah" },
            { id: "VUX" },
            { id: "Guardian", symbolType: "square" },
            { id: "Broodhmome", symbolType: "square" },
            { id: "Avenger", symbolType: "square" },
            { id: "Podship", symbolType: "square" },
            { id: "Eluder", symbolType: "square" },
            { id: "Drone", symbolType: "square" },
            { id: "Intruder", symbolType: "square" },
          ],
        };
      },
      163: e => {
        e.exports = {
          directed: !0,
          automaticRearrangeAfterDropNode: !0,
          collapsible: !0,
          height: 400,
          highlightDegree: 2,
          highlightOpacity: 0.2,
          linkHighlightBehavior: !0,
          maxZoom: 12,
          minZoom: 0.05,
          nodeHighlightBehavior: !0,
          panAndZoom: !1,
          staticGraph: !1,
          width: 800,
          zoomDisabled: !0,
          d3: { alphaTarget: 0.05, gravity: -250, linkLength: 120, linkStrength: 2 },
          node: {
            color: "#d3d3d3",
            fontColor: "black",
            fontSize: 10,
            fontWeight: "normal",
            highlightColor: "red",
            highlightFontSize: 14,
            highlightFontWeight: "bold",
            highlightStrokeColor: "red",
            highlightStrokeWidth: 1.5,
            labelProperty: function(e) {
              return e.name ? "".concat(e.id, " - ").concat(e.name) : e.id;
            },
            mouseCursor: "crosshair",
            opacity: 0.9,
            renderLabel: !0,
            size: 200,
            strokeColor: "none",
            strokeWidth: 1.5,
            svg: "",
            symbolType: "circle",
            viewGenerator: null,
          },
          link: {
            color: "lightgray",
            highlightColor: "red",
            mouseCursor: "pointer",
            opacity: 1,
            semanticStrokeWidth: !0,
            strokeWidth: 3,
            type: "STRAIGHT",
          },
        };
      },
      977: e => {
        e.exports = {
          links: [
            { source: "Marvel", target: "Heroes" },
            { source: "Marvel", target: "Villains" },
            { source: "Marvel", target: "Teams" },
            { source: "Heroes", target: "Spider-Man" },
            { source: "Heroes", target: "CAPTAIN MARVEL" },
            { source: "Heroes", target: "HULK" },
            { source: "Heroes", target: "Black Widow" },
            { source: "Heroes", target: "Daredevil" },
            { source: "Heroes", target: "Wolverine" },
            { source: "Heroes", target: "Captain America" },
            { source: "Heroes", target: "Iron Man" },
            { source: "Heroes", target: "THOR" },
            { source: "Villains", target: "Dr. Doom" },
            { source: "Villains", target: "Mystique" },
            { source: "Villains", target: "Red Skull" },
            { source: "Villains", target: "Ronan" },
            { source: "Villains", target: "Magneto" },
            { source: "Villains", target: "Thanos" },
            { source: "Villains", target: "Black Cat" },
            { source: "Teams", target: "Avengers" },
            { source: "Teams", target: "Guardians of the Galaxy" },
            { source: "Teams", target: "Defenders" },
            { source: "Teams", target: "X-Men" },
            { source: "Teams", target: "Fantastic Four" },
            { source: "Teams", target: "Inhumans" },
          ],
          nodes: [
            {
              id: "Marvel",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/marvel.png",
              size: 500,
              fontSize: 18,
            },
            { id: "Heroes", symbolType: "circle", color: "red", size: 300 },
            { id: "Villains", symbolType: "circle", color: "red", size: 300 },
            { id: "Teams", symbolType: "circle", color: "red", size: 300 },
            {
              id: "Spider-Man",
              name: "Peter Benjamin Parker",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_spiderman.png",
              size: 400,
            },
            {
              id: "CAPTAIN MARVEL",
              name: "Carol Danvers",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainmarvel.png",
              size: 400,
            },
            {
              id: "HULK",
              name: "Robert Bruce Banner",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_hulk.png",
              size: 400,
            },
            {
              id: "Black Widow",
              name: "Natasha Alianovna Romanova",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_blackwidow.png",
              size: 400,
            },
            {
              id: "Daredevil",
              name: "Matthew Michael Murdock",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_daredevil.png",
              size: 400,
            },
            {
              id: "Wolverine",
              name: "James Howlett",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_wolverine.png",
              size: 400,
            },
            {
              id: "Captain America",
              name: "Steven Rogers",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_captainamerica.png",
              size: 400,
            },
            {
              id: "Iron Man",
              name: "Tony Stark",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_ironman.png",
              size: 400,
            },
            {
              id: "THOR",
              name: "Thor Odinson",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/top_thor.png",
              size: 400,
            },
            {
              id: "Dr. Doom",
              name: "Victor von Doom",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/drdoom.png",
              size: 400,
            },
            {
              id: "Mystique",
              name: "Unrevealed",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/mystique.png",
              size: 400,
            },
            {
              id: "Red Skull",
              name: "Johann Shmidt",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/redskull.png",
              size: 400,
            },
            {
              id: "Ronan",
              name: "Ronan",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/ronan.png",
              size: 400,
            },
            {
              id: "Magneto",
              name: "Max Eisenhardt",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/magneto.png",
              size: 400,
            },
            {
              id: "Thanos",
              name: "Thanos",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/thanos.png",
              size: 400,
            },
            {
              id: "Black Cat",
              name: "Felicia Hardy",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/blackcat.png",
              size: 400,
            },
            {
              id: "Avengers",
              name: "",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/avengers.png",
              size: 400,
            },
            {
              id: "Guardians of the Galaxy",
              name: "",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/gofgalaxy.png",
              size: 400,
            },
            {
              id: "Defenders",
              name: "",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/defenders.png",
              size: 400,
            },
            {
              id: "X-Men",
              name: "",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/xmen.png",
              size: 400,
            },
            {
              id: "Fantastic Four",
              name: "",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/fantasticfour.png",
              size: 400,
            },
            {
              id: "Inhumans",
              name: "",
              svg: "http://marvel-force-chart.surge.sh/marvel_force_chart_img/inhumans.png",
              size: 400,
            },
          ],
        };
      },
      519: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => i });
        var r = n(294);
        n(644);
        const o = function(e) {
            var t = e.person.properties,
              n = t.avatar,
              o = void 0 === n ? "" : n,
              i = t.name,
              a = void 0 === i ? "" : i,
              l = t.count,
              u = void 0 === l ? 0 : l,
              c = t.role,
              s = void 0 === c ? "" : c,
              f = t.root,
              d = void 0 === f || f,
              h = function(e) {
                var t = e + "_root";
                return d ? "".concat(e, " ").concat(t) : e;
              };
            return r.createElement(
              "div",
              { className: "custom" },
              r.createElement("div", { className: h("relation") }, s),
              r.createElement("div", { className: h("count") }, u, "+"),
              r.createElement("div", { className: h("avatar") }, r.createElement("img", { src: o, alt: "avatar" })),
              r.createElement("span", { className: h("name") }, a)
            );
          },
          i = {
            automaticRearrangeAfterDropNode: !1,
            collapsible: !0,
            height: 400,
            highlightDegree: 1,
            highlightOpacity: 0.1,
            linkHighlightBehavior: !0,
            maxZoom: 12,
            minZoom: 0.1,
            nodeHighlightBehavior: !0,
            panAndZoom: !1,
            staticGraph: !1,
            width: 1400,
            directed: !0,
            d3: { alphaTarget: 0.5, gravity: -1e4, linkLength: 400 },
            node: {
              renderLabel: !1,
              size: { width: 1360, height: 1360 },
              viewGenerator: function(e) {
                return r.createElement(o, { person: e });
              },
            },
            link: {
              renderLabel: !0,
              labelProperty: function(e) {
                return e.text;
              },
              color: "#5C8EFA",
              fontColor: "#5081FD",
              fontSize: 20,
              fontWeight: "normal",
              highlightColor: "rgba(92, 142, 250, 1)",
              highlightFontSize: 20,
              highlightFontWeight: "normal",
              mouseCursor: "pointer",
              opacity: 1,
              semanticStrokeWidth: !0,
              strokeWidth: 2,
              type: "STRAIGHT",
            },
          };
      },
      724: (e, t, n) => {
        var r = n(147).relationshipsData;
        e.exports = r;
      },
      147: e => {
        function t(e) {
          return (
            (t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function(e) {
                    return typeof e;
                  }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            t(e)
          );
        }
        function n(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function r(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? n(Object(r), !0).forEach(function(t) {
                  o(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : n(Object(r)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
          }
          return e;
        }
        function o(e, n, r) {
          return (
            (n = (function(e) {
              var n = (function(e, n) {
                if ("object" !== t(e) || null === e) return e;
                var r = e[Symbol.toPrimitive];
                if (void 0 !== r) {
                  var o = r.call(e, "string");
                  if ("object" !== t(o)) return o;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              })(e);
              return "symbol" === t(n) ? n : String(n);
            })(n)) in e
              ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 })
              : (e[n] = r),
            e
          );
        }
        var i,
          a = function(e) {
            for (
              var t = e || 32, n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", r = n.length, o = "", i = 0;
              i < t;
              i++
            )
              o += n.charAt(Math.floor(Math.random() * r));
            return o;
          },
          l = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
              n = arguments.length > 1 ? arguments[1] : void 0,
              r = arguments.length > 2 ? arguments[2] : void 0,
              o = r || u(n),
              i = [];
            if (0 === t) return o;
            for (var a = 0; a < 3; a++) {
              var l = u(o.id);
              i.push(l);
            }
            o.children = i;
            var c = t - 1;
            return (
              i.forEach(function(t, n) {
                return e(c, t.id, t);
              }),
              o
            );
          },
          u = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return {
              id: a(),
              properties: {
                avatar: "https://yunke-oss.oss-cn-hangzhou.aliyuncs.com/yued/ai-mp/assets/default_head.png",
                name: a(5),
                count: Math.floor(40 * Math.random()),
                role: a(5),
              },
              prevId: e,
              children: [],
            };
          },
          c = function(e) {
            return { nodes: s(e), relationships: f(e) };
          },
          s = function e(t, n) {
            var r,
              o = n || [],
              i = { id: t.id, properties: t.properties };
            return (
              o.push(i),
              null === (r = t.children) ||
                void 0 === r ||
                r.forEach(function(t) {
                  e(t, o);
                }),
              o
            );
          },
          f = function e(t, n) {
            var r,
              o = n || [],
              i = t.id,
              a = t.prevId,
              l = d(a, i);
            return (
              o.push(l),
              null === (r = t.children) ||
                void 0 === r ||
                r.forEach(function(t) {
                  e(t, o);
                }),
              o.filter(function(e) {
                return "" !== e.startNode;
              })
            );
          },
          d = function(e, t) {
            return { id: a(), startNode: e, endNode: t, type: 0 === Math.floor(2 * Math.random()) ? 0 : 1, text: a(5) };
          },
          h = {
            nodes: (i = c(l())).nodes,
            links: i.relationships.map(function(e) {
              return r(r({}, e), {}, { source: e.startNode, target: e.endNode, strokeDasharray: 0 === e.type ? 8 : 0 });
            }),
            rootId: i.nodes[0].id,
          };
        e.exports = { treeToResponseData: c, generateTree: l, relationshipsData: h };
      },
      664: e => {
        e.exports = {
          automaticRearrangeAfterDropNode: !1,
          collapsible: !1,
          height: 400,
          highlightDegree: 1,
          highlightOpacity: 0.2,
          linkHighlightBehavior: !0,
          maxZoom: 8,
          minZoom: 0.1,
          nodeHighlightBehavior: !0,
          panAndZoom: !1,
          staticGraph: !1,
          width: 800,
          node: {
            color: "#d3d3d3",
            fontColor: "black",
            fontSize: 12,
            fontWeight: "normal",
            highlightColor: "red",
            highlightFontSize: 12,
            highlightFontWeight: "bold",
            highlightStrokeColor: "SAME",
            highlightStrokeWidth: 1.5,
            labelProperty: "name",
            mouseCursor: "pointer",
            opacity: 1,
            renderLabel: !0,
            size: 450,
            strokeColor: "none",
            strokeWidth: 1.5,
            svg: "",
            symbolType: "circle",
          },
          link: {
            color: "#d3d3d3",
            fontColor: "red",
            fontSize: 10,
            highlightColor: "blue",
            highlightFontWeight: "bold",
            labelProperty: function(e) {
              return "from ".concat(e.source, " to ").concat(e.target);
            },
            opacity: 1,
            renderLabel: !1,
            semanticStrokeWidth: !1,
            strokeWidth: 4,
          },
          d3: { gravity: -400, linkLength: 300 },
        };
      },
      281: e => {
        e.exports = {
          links: [
            { source: 1, target: 2, label: "link 1 and 2" },
            { source: 1, target: 3 },
            { source: 1, target: 4 },
            {
              source: 3,
              target: 4,
              breakPoints: [
                { x: 100, y: 20 },
                { x: 20, y: 100 },
              ],
            },
            { source: 4, target: 4 },
          ],
          nodes: [
            { id: 1, name: "Node 1" },
            { id: 2, name: "Node 2" },
            { id: 3, name: "Node 3" },
            { id: 4, name: "Node 4" },
          ],
        };
      },
      554: e => {
        e.exports = {
          height: 400,
          width: 800,
          nodeHighlightBehavior: !0,
          linkHighlightBehavior: !0,
          staticGraphWithDragAndDrop: !0,
          node: {
            fontSize: 12,
            highlightFontSize: 12,
            highlightFontWeight: "bold",
            highlightStrokeColor: "blue",
            labelProperty: "name",
            size: 500,
            strokeWidth: 2,
          },
          link: {
            highlightColor: "blue",
            renderLabel: !0,
            highlightFontWeight: "bold",
            semanticStrokeWidth: !0,
            fontSize: 12,
          },
          d3: { gravity: -400, linkLength: 180, disableLinkForce: !0 },
        };
      },
      116: e => {
        e.exports = {
          links: [
            { source: 1, target: 2, label: "A-B" },
            { source: 1, target: 3, label: "A-C" },
            { source: 1, target: 4, label: "A-D" },
            { source: 3, target: 4, label: "C-D" },
          ],
          nodes: [
            { id: 1, name: "A", x: 50, y: 310 },
            { id: 2, name: "B", x: 300, y: 50 },
            { id: 3, name: "C", x: 400, y: 100 },
            { id: 4, name: "D", x: 400, y: 200 },
          ],
        };
      },
      514: (e, t, n) => {
        (e.exports = n(645)(!1)).push([
          e.id,
          "/* --- Generic styles --- */\n\n.flex-container {\n  flex-direction: column;\n  display: flex;\n}\n\n.flex-container-column {\n  flex-direction: column;\n}\n\n.flex-container-row {\n  flex-direction: row;\n}\n\n.fill-space {\n  flex-grow: 1;\n}\n\n.icon {\n  width: 100%;\n  height: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n/* --- Shape for the nodes --- */\n\n.person-node {\n  width: 100%;\n  height: 100%;\n  border-radius: 35% 5% 35% 5%;\n  overflow: hidden;\n  box-sizing: border-box;\n  display: flex;\n}\n\n.person-node.male {\n  background-color: lightblue;\n  box-shadow: 25px 15px cadetblue;\n}\n\n.person-node.female {\n  background-color: pink;\n  box-shadow: 25px 15px palevioletred;\n}\n\n/* --- Other styles for node content --- */\n\n.person-node .name {\n  padding: 5%;\n  font-size: 0.8rem;\n  font-weight: bold;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.person-node .icon-bar {\n  width: 20%;\n  margin-right: 5%;\n}\n\n.person-node .icon-bar > .icon {\n  width: 80%;\n  height: 30%;\n}\n\n/* you need to toggle `node.renderLabel` to see this class in action */\n.person-node-label {\n  fill: black;\n  text-shadow: rgb(255, 255, 255) 0px -2px 0px, rgb(255, 255, 255) 0px 2px 0px, rgb(255, 255, 255) 2px 0px 0px,\n    rgb(255, 255, 255) -2px 0px 0px;\n  transform: rotate(-25deg) translateX(40px) translateY(15px);\n}\n",
          "",
        ]);
      },
      299: (e, t, n) => {
        (e.exports = n(645)(!1)).push([
          e.id,
          ":root {\n  --root-color: rgb(255 190 24 / 100%);\n  --node-color: #5c8efa;\n}\n\n.custom {\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  align-items: center;\n}\n\n.avatar {\n  display: flex;\n  position: relative;\n  z-index: 3;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  width: 92px;\n  height: 92px;\n}\n\n.avatar img {\n  display: block;\n  border-radius: 50%;\n  width: 88px;\n  height: 88px;\n}\n\n.avatar_root {\n  background-color: var(--root-color);\n}\n\n.name {\n  margin-top: 2px;\n  padding: 0 12px;\n  border-radius: 13px;\n  height: 26px;\n  background: #fff;\n  box-shadow: 0 2px 8px 0 #fff1da;\n  line-height: 26px;\n  text-align: center;\n  font-size: 16px;\n  color: var(--node-color);\n}\n\n.name_root {\n  color: var(--root-color);\n}\n\n.relation,\n.count {\n  position: absolute;\n  top: 15px;\n  z-index: 4;\n  padding: 2px 4px;\n  border-radius: 4px;\n  background: var(--node-color);\n  text-align: center;\n  color: #fff;\n}\n\n.relation_root,\n.count_root {\n  background-color: var(--root-color);\n}\n.relation {\n  left: 0;\n}\n\n.count {\n  right: 10px;\n}\n",
          "",
        ]);
      },
      531: (e, t, n) => {
        (e.exports = n(645)(!1)).push([
          e.id,
          ".zoom-container {\n  position: absolute;\n  z-index: 999;\n  left: 15px;\n  top: 15px;\n  color: #000;\n}\n",
          "",
        ]);
      },
      645: e => {
        "use strict";
        e.exports = function(e) {
          var t = [];
          return (
            (t.toString = function() {
              return this.map(function(t) {
                var n = (function(e, t) {
                  var n,
                    r = e[1] || "",
                    o = e[3];
                  if (!o) return r;
                  if (t && "function" == typeof btoa) {
                    var i =
                        ((n = o),
                        "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," +
                          btoa(unescape(encodeURIComponent(JSON.stringify(n)))) +
                          " */"),
                      a = o.sources.map(function(e) {
                        return "/*# sourceURL=" + o.sourceRoot + e + " */";
                      });
                    return [r]
                      .concat(a)
                      .concat([i])
                      .join("\n");
                  }
                  return [r].join("\n");
                })(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
              }).join("");
            }),
            (t.i = function(e, n) {
              "string" == typeof e && (e = [[null, e, ""]]);
              for (var r = {}, o = 0; o < this.length; o++) {
                var i = this[o][0];
                null != i && (r[i] = !0);
              }
              for (o = 0; o < e.length; o++) {
                var a = e[o];
                (null != a[0] && r[a[0]]) ||
                  (n && !a[2] ? (a[2] = n) : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a));
              }
            }),
            t
          );
        };
      },
      20: e => {
        "use strict";
        var t = "%[a-f0-9]{2}",
          n = new RegExp("(" + t + ")|([^%]+?)", "gi"),
          r = new RegExp("(" + t + ")+", "gi");
        function o(e, t) {
          try {
            return [decodeURIComponent(e.join(""))];
          } catch (e) {}
          if (1 === e.length) return e;
          t = t || 1;
          var n = e.slice(0, t),
            r = e.slice(t);
          return Array.prototype.concat.call([], o(n), o(r));
        }
        function i(e) {
          try {
            return decodeURIComponent(e);
          } catch (i) {
            for (var t = e.match(n) || [], r = 1; r < t.length; r++) t = (e = o(t, r).join("")).match(n) || [];
            return e;
          }
        }
        e.exports = function(e) {
          if ("string" != typeof e)
            throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
          try {
            return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
          } catch (t) {
            return (function(e) {
              for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = r.exec(e); n; ) {
                try {
                  t[n[0]] = decodeURIComponent(n[0]);
                } catch (e) {
                  var o = i(n[0]);
                  o !== n[0] && (t[n[0]] = o);
                }
                n = r.exec(e);
              }
              t["%C2"] = "�";
              for (var a = Object.keys(t), l = 0; l < a.length; l++) {
                var u = a[l];
                e = e.replace(new RegExp(u, "g"), t[u]);
              }
              return e;
            })(e);
          }
        };
      },
      418: e => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        function o(e) {
          if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e);
        }
        e.exports = (function() {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function(e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function(e, i) {
              for (var a, l, u = o(e), c = 1; c < arguments.length; c++) {
                for (var s in (a = Object(arguments[c]))) n.call(a, s) && (u[s] = a[s]);
                if (t) {
                  l = t(a);
                  for (var f = 0; f < l.length; f++) r.call(a, l[f]) && (u[l[f]] = a[l[f]]);
                }
              }
              return u;
            };
      },
      563: (e, t, n) => {
        "use strict";
        const r = n(610),
          o = n(20),
          i = n(500);
        function a(e, t) {
          return t.encode ? (t.strict ? r(e) : encodeURIComponent(e)) : e;
        }
        function l(e, t) {
          return t.decode ? o(e) : e;
        }
        function u(e) {
          return Array.isArray(e)
            ? e.sort()
            : "object" == typeof e
            ? u(Object.keys(e))
                .sort((e, t) => Number(e) - Number(t))
                .map(t => e[t])
            : e;
        }
        function c(e) {
          const t = e.indexOf("#");
          return -1 !== t && (e = e.slice(0, t)), e;
        }
        function s(e) {
          const t = (e = c(e)).indexOf("?");
          return -1 === t ? "" : e.slice(t + 1);
        }
        function f(e, t) {
          return (
            t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim()
              ? (e = Number(e))
              : !t.parseBooleans ||
                null === e ||
                ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
                (e = "true" === e.toLowerCase()),
            e
          );
        }
        function d(e, t) {
          const n = (function(e) {
              let t;
              switch (e.arrayFormat) {
                case "index":
                  return (e, n, r) => {
                    (t = /\[(\d*)\]$/.exec(e)),
                      (e = e.replace(/\[\d*\]$/, "")),
                      t ? (void 0 === r[e] && (r[e] = {}), (r[e][t[1]] = n)) : (r[e] = n);
                  };
                case "bracket":
                  return (e, n, r) => {
                    (t = /(\[\])$/.exec(e)),
                      (e = e.replace(/\[\]$/, "")),
                      t ? (void 0 !== r[e] ? (r[e] = [].concat(r[e], n)) : (r[e] = [n])) : (r[e] = n);
                  };
                case "comma":
                  return (e, t, n) => {
                    const r = "string" == typeof t && t.split("").indexOf(",") > -1 ? t.split(",") : t;
                    n[e] = r;
                  };
                default:
                  return (e, t, n) => {
                    void 0 !== n[e] ? (n[e] = [].concat(n[e], t)) : (n[e] = t);
                  };
              }
            })(
              (t = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", parseNumbers: !1, parseBooleans: !1 }, t))
            ),
            r = Object.create(null);
          if ("string" != typeof e) return r;
          if (!(e = e.trim().replace(/^[?#&]/, ""))) return r;
          for (const o of e.split("&")) {
            let [e, a] = i(o.replace(/\+/g, " "), "=");
            (a = void 0 === a ? null : l(a, t)), n(l(e, t), a, r);
          }
          for (const e of Object.keys(r)) {
            const n = r[e];
            if ("object" == typeof n && null !== n) for (const e of Object.keys(n)) n[e] = f(n[e], t);
            else r[e] = f(n, t);
          }
          return !1 === t.sort
            ? r
            : (!0 === t.sort ? Object.keys(r).sort() : Object.keys(r).sort(t.sort)).reduce((e, t) => {
                const n = r[t];
                return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? (e[t] = u(n)) : (e[t] = n), e;
              }, Object.create(null));
        }
        (t.extract = s),
          (t.parse = d),
          (t.stringify = (e, t) => {
            if (!e) return "";
            const n = (function(e) {
                switch (e.arrayFormat) {
                  case "index":
                    return t => (n, r) => {
                      const o = n.length;
                      return void 0 === r
                        ? n
                        : null === r
                        ? [...n, [a(t, e), "[", o, "]"].join("")]
                        : [...n, [a(t, e), "[", a(o, e), "]=", a(r, e)].join("")];
                    };
                  case "bracket":
                    return t => (n, r) =>
                      void 0 === r
                        ? n
                        : null === r
                        ? [...n, [a(t, e), "[]"].join("")]
                        : [...n, [a(t, e), "[]=", a(r, e)].join("")];
                  case "comma":
                    return t => (n, r, o) =>
                      null == r || 0 === r.length
                        ? n
                        : 0 === o
                        ? [[a(t, e), "=", a(r, e)].join("")]
                        : [[n, a(r, e)].join(",")];
                  default:
                    return t => (n, r) =>
                      void 0 === r ? n : null === r ? [...n, a(t, e)] : [...n, [a(t, e), "=", a(r, e)].join("")];
                }
              })((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none" }, t))),
              r = Object.keys(e);
            return (
              !1 !== t.sort && r.sort(t.sort),
              r
                .map(r => {
                  const o = e[r];
                  return void 0 === o
                    ? ""
                    : null === o
                    ? a(r, t)
                    : Array.isArray(o)
                    ? o.reduce(n(r), []).join("&")
                    : a(r, t) + "=" + a(o, t);
                })
                .filter(e => e.length > 0)
                .join("&")
            );
          }),
          (t.parseUrl = (e, t) => ({ url: c(e).split("?")[0] || "", query: d(s(e), t) }));
      },
      448: (e, t, n) => {
        "use strict";
        var r = n(294),
          o = n(418),
          i = n(142);
        function a(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(a(227));
        var l = new Set(),
          u = {};
        function c(e, t) {
          s(e, t), s(e + "Capture", t);
        }
        function s(e, t) {
          for (u[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
        }
        var f = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          h = Object.prototype.hasOwnProperty,
          p = {},
          g = {};
        function m(e, t, n, r, o, i, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = o),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = a);
        }
        var y = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function(e) {
            y[e] = new m(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function(e) {
            var t = e[0];
            y[t] = new m(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
            y[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
            y[e] = new m(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function(e) {
              y[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function(e) {
            y[e] = new m(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function(e) {
            y[e] = new m(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function(e) {
            y[e] = new m(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function(e) {
            y[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var o = y.hasOwnProperty(t) ? y[t] : null;
          (null !== o
            ? 0 === o.type
            : !r && 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])) ||
            ((function(e, t, n, r) {
              if (
                null == t ||
                (function(e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, o, r) && (n = null),
            r || null === o
              ? (function(e) {
                  return !!h.call(g, e) || (!h.call(p, e) && (d.test(e) ? (g[e] = !0) : ((p[e] = !0), !1)));
                })(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === n ? 3 !== o.type && "" : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n = 3 === (o = o.type) || (4 === o && !0 === n) ? "" : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function(e) {
            var t = e.replace(v, b);
            y[t] = new m(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
            var t = e.replace(v, b);
            y[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
            var t = e.replace(v, b);
            y[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
          }),
          ["tabIndex", "crossOrigin"].forEach(function(e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (y.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1)),
          ["src", "href", "action", "formAction"].forEach(function(e) {
            y[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          x = 60106,
          S = 60107,
          E = 60108,
          O = 60114,
          C = 60109,
          P = 60110,
          N = 60112,
          M = 60113,
          T = 60120,
          L = 60115,
          j = 60116,
          A = 60121,
          z = 60128,
          R = 60129,
          D = 60130,
          I = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var F = Symbol.for;
          (k = F("react.element")),
            (x = F("react.portal")),
            (S = F("react.fragment")),
            (E = F("react.strict_mode")),
            (O = F("react.profiler")),
            (C = F("react.provider")),
            (P = F("react.context")),
            (N = F("react.forward_ref")),
            (M = F("react.suspense")),
            (T = F("react.suspense_list")),
            (L = F("react.memo")),
            (j = F("react.lazy")),
            (A = F("react.block")),
            F("react.scope"),
            (z = F("react.opaque.id")),
            (R = F("react.debug_trace_mode")),
            (D = F("react.offscreen")),
            (I = F("react.legacy_hidden"));
        }
        var U,
          B = "function" == typeof Symbol && Symbol.iterator;
        function W(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (B && e[B]) || e["@@iterator"])
            ? e
            : null;
        }
        function H(e) {
          if (void 0 === U)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              U = (t && t[1]) || "";
            }
          return "\n" + U + e;
        }
        var V = !1;
        function q(e, t) {
          if (!e || V) return "";
          V = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function() {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function() {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && "string" == typeof e.stack) {
              for (
                var o = e.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, l = i.length - 1;
                1 <= a && 0 <= l && o[a] !== i[l];

              )
                l--;
              for (; 1 <= a && 0 <= l; a--, l--)
                if (o[a] !== i[l]) {
                  if (1 !== a || 1 !== l)
                    do {
                      if ((a--, 0 > --l || o[a] !== i[l])) return "\n" + o[a].replace(" at new ", " at ");
                    } while (1 <= a && 0 <= l);
                  break;
                }
            }
          } finally {
            (V = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? H(e) : "";
        }
        function G(e) {
          switch (e.tag) {
            case 5:
              return H(e.type);
            case 16:
              return H("Lazy");
            case 13:
              return H("Suspense");
            case 19:
              return H("SuspenseList");
            case 0:
            case 2:
            case 15:
              return q(e.type, !1);
            case 11:
              return q(e.type.render, !1);
            case 22:
              return q(e.type._render, !1);
            case 1:
              return q(e.type, !0);
            default:
              return "";
          }
        }
        function $(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case O:
              return "Profiler";
            case E:
              return "StrictMode";
            case M:
              return "Suspense";
            case T:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case P:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case N:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case L:
                return $(e.type);
              case A:
                return $(e._render);
              case j:
                (t = e._payload), (e = e._init);
                try {
                  return $(e(t));
                } catch (e) {}
            }
          return null;
        }
        function Y(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function X(e) {
          var t = e.type;
          return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t);
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function(e) {
              var t = X(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var o = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                      return o.call(this);
                    },
                    set: function(e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function() {
                      return r;
                    },
                    setValue: function(e) {
                      r = "" + e;
                    },
                    stopTracking: function() {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function K(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return e && (r = X(e) ? (e.checked ? "true" : "false") : e.value), (e = r) !== n && (t.setValue(e), !0);
        }
        function Z(e) {
          if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return o({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Y(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Y(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) && (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? oe(e, t.type, n)
            : t.hasOwnProperty("defaultValue") && oe(e, t.type, Y(t.defaultValue)),
            null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!(("submit" !== r && "reset" !== r) || (void 0 !== t.value && null !== t.value))) return;
            (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function oe(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function ie(e, t) {
          return (
            (e = o({ children: void 0 }, t)),
            (t = (function(e) {
              var t = "";
              return (
                r.Children.forEach(e, function(e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ae(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
            for (n = 0; n < e.length; n++)
              (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Y(n), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === n) return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function le(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return o({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
        }
        function ue(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Y(n) };
        }
        function ce(e, t) {
          var n = Y(t.value),
            r = Y(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function se(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t);
        }
        var fe = "http://www.w3.org/1999/xhtml";
        function de(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function he(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? de(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var pe,
          ge,
          me =
            ((ge = function(e, t) {
              if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
              else {
                for (
                  (pe = pe || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = pe.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function(e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function() {
                    return ge(e, t);
                  });
                }
              : ge);
        function ye(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var ve = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          be = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n || "number" != typeof t || 0 === t || (ve.hasOwnProperty(e) && ve[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function _e(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                o = we(n, t[n], r);
              "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
            }
        }
        Object.keys(ve).forEach(function(e) {
          be.forEach(function(t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ve[t] = ve[e]);
          });
        });
        var ke = o(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function xe(e, t) {
          if (t) {
            if (ke[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(a(61));
            }
            if (null != t.style && "object" != typeof t.style) throw Error(a(62));
          }
        }
        function Se(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Ee(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Oe = null,
          Ce = null,
          Pe = null;
        function Ne(e) {
          if ((e = no(e))) {
            if ("function" != typeof Oe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = oo(t)), Oe(e.stateNode, e.type, t));
          }
        }
        function Me(e) {
          Ce ? (Pe ? Pe.push(e) : (Pe = [e])) : (Ce = e);
        }
        function Te() {
          if (Ce) {
            var e = Ce,
              t = Pe;
            if (((Pe = Ce = null), Ne(e), t)) for (e = 0; e < t.length; e++) Ne(t[e]);
          }
        }
        function Le(e, t) {
          return e(t);
        }
        function je(e, t, n, r, o) {
          return e(t, n, r, o);
        }
        function Ae() {}
        var ze = Le,
          Re = !1,
          De = !1;
        function Ie() {
          (null === Ce && null === Pe) || (Ae(), Te());
        }
        function Fe(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = oo(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Ue = !1;
        if (f)
          try {
            var Be = {};
            Object.defineProperty(Be, "passive", {
              get: function() {
                Ue = !0;
              },
            }),
              window.addEventListener("test", Be, Be),
              window.removeEventListener("test", Be, Be);
          } catch (ge) {
            Ue = !1;
          }
        function We(e, t, n, r, o, i, a, l, u) {
          var c = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, c);
          } catch (e) {
            this.onError(e);
          }
        }
        var He = !1,
          Ve = null,
          qe = !1,
          Ge = null,
          $e = {
            onError: function(e) {
              (He = !0), (Ve = e);
            },
          };
        function Ye(e, t, n, r, o, i, a, l, u) {
          (He = !1), (Ve = null), We.apply($e, arguments);
        }
        function Xe(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Qe(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t)) return t.dehydrated;
          }
          return null;
        }
        function Ke(e) {
          if (Xe(e) !== e) throw Error(a(188));
        }
        function Ze(e) {
          if (
            ((e = (function(e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Xe(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var o = n.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (r = o.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === n) return Ke(o), e;
                    if (i === r) return Ke(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = o), (r = i);
                else {
                  for (var l = !1, u = o.child; u; ) {
                    if (u === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    if (u === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!l) {
                    for (u = i.child; u; ) {
                      if (u === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      if (u === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function Je(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var et,
          tt,
          nt,
          rt,
          ot = !1,
          it = [],
          at = null,
          lt = null,
          ut = null,
          ct = new Map(),
          st = new Map(),
          ft = [],
          dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
        function ht(e, t, n, r, o) {
          return { blockedOn: e, domEventName: t, eventSystemFlags: 16 | n, nativeEvent: o, targetContainers: [r] };
        }
        function pt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              at = null;
              break;
            case "dragenter":
            case "dragleave":
              lt = null;
              break;
            case "mouseover":
            case "mouseout":
              ut = null;
              break;
            case "pointerover":
            case "pointerout":
              ct.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              st.delete(t.pointerId);
          }
        }
        function gt(e, t, n, r, o, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = ht(t, n, r, o, i)), null !== t && null !== (t = no(t)) && tt(t), e)
            : ((e.eventSystemFlags |= r), (t = e.targetContainers), null !== o && -1 === t.indexOf(o) && t.push(o), e);
        }
        function mt(e) {
          var t = to(e.target);
          if (null !== t) {
            var n = Xe(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Qe(n)))
                  return (
                    (e.blockedOn = t),
                    void rt(e.lanePriority, function() {
                      i.unstable_runWithPriority(e.priority, function() {
                        nt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function yt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) return null !== (t = no(n)) && tt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function vt(e, t, n) {
          yt(e) && n.delete(t);
        }
        function bt() {
          for (ot = !1; 0 < it.length; ) {
            var e = it[0];
            if (null !== e.blockedOn) {
              null !== (e = no(e.blockedOn)) && et(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && it.shift();
          }
          null !== at && yt(at) && (at = null),
            null !== lt && yt(lt) && (lt = null),
            null !== ut && yt(ut) && (ut = null),
            ct.forEach(vt),
            st.forEach(vt);
        }
        function wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null), ot || ((ot = !0), i.unstable_scheduleCallback(i.unstable_NormalPriority, bt)));
        }
        function _t(e) {
          function t(t) {
            return wt(t, e);
          }
          if (0 < it.length) {
            wt(it[0], e);
            for (var n = 1; n < it.length; n++) {
              var r = it[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== at && wt(at, e),
              null !== lt && wt(lt, e),
              null !== ut && wt(ut, e),
              ct.forEach(t),
              st.forEach(t),
              n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; ) mt(n), null === n.blockedOn && ft.shift();
        }
        function kt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n
          );
        }
        var xt = {
            animationend: kt("Animation", "AnimationEnd"),
            animationiteration: kt("Animation", "AnimationIteration"),
            animationstart: kt("Animation", "AnimationStart"),
            transitionend: kt("Transition", "TransitionEnd"),
          },
          St = {},
          Et = {};
        function Ot(e) {
          if (St[e]) return St[e];
          if (!xt[e]) return e;
          var t,
            n = xt[e];
          for (t in n) if (n.hasOwnProperty(t) && t in Et) return (St[e] = n[t]);
          return e;
        }
        f &&
          ((Et = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xt.animationend.animation,
            delete xt.animationiteration.animation,
            delete xt.animationstart.animation),
          "TransitionEvent" in window || delete xt.transitionend.transition);
        var Ct = Ot("animationend"),
          Pt = Ot("animationiteration"),
          Nt = Ot("animationstart"),
          Mt = Ot("transitionend"),
          Tt = new Map(),
          Lt = new Map(),
          jt = [
            "abort",
            "abort",
            Ct,
            "animationEnd",
            Pt,
            "animationIteration",
            Nt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            Mt,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function At(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              o = e[n + 1];
            (o = "on" + (o[0].toUpperCase() + o.slice(1))), Lt.set(r, t), Tt.set(r, o), c(o, [r]);
          }
        }
        (0, i.unstable_now)();
        var zt = 8;
        function Rt(e) {
          if (0 != (1 & e)) return (zt = 15), 1;
          if (0 != (2 & e)) return (zt = 14), 2;
          if (0 != (4 & e)) return (zt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((zt = 12), t)
            : 0 != (32 & e)
            ? ((zt = 11), 32)
            : 0 != (t = 192 & e)
            ? ((zt = 10), t)
            : 0 != (256 & e)
            ? ((zt = 9), 256)
            : 0 != (t = 3584 & e)
            ? ((zt = 8), t)
            : 0 != (4096 & e)
            ? ((zt = 7), 4096)
            : 0 != (t = 4186112 & e)
            ? ((zt = 6), t)
            : 0 != (t = 62914560 & e)
            ? ((zt = 5), t)
            : 67108864 & e
            ? ((zt = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((zt = 3), 134217728)
            : 0 != (t = 805306368 & e)
            ? ((zt = 2), t)
            : 0 != (1073741824 & e)
            ? ((zt = 1), 1073741824)
            : ((zt = 8), e);
        }
        function Dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (zt = 0);
          var r = 0,
            o = 0,
            i = e.expiredLanes,
            a = e.suspendedLanes,
            l = e.pingedLanes;
          if (0 !== i) (r = i), (o = zt = 15);
          else if (0 != (i = 134217727 & n)) {
            var u = i & ~a;
            0 !== u ? ((r = Rt(u)), (o = zt)) : 0 != (l &= i) && ((r = Rt(l)), (o = zt));
          } else 0 != (i = n & ~a) ? ((r = Rt(i)), (o = zt)) : 0 !== l && ((r = Rt(l)), (o = zt));
          if (0 === r) return 0;
          if (((r = n & (((0 > (r = 31 - Ht(r)) ? 0 : 1 << r) << 1) - 1)), 0 !== t && t !== r && 0 == (t & a))) {
            if ((Rt(t), o <= zt)) return t;
            zt = o;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; ) (o = 1 << (n = 31 - Ht(t))), (r |= e[n]), (t &= ~o);
          return r;
        }
        function It(e) {
          return 0 != (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function Ft(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? Ft(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? Ft(8, t) : e;
            case 8:
              return 0 === (e = Ut(3584 & ~t)) && 0 === (e = Ut(4186112 & ~t)) && (e = 512), e;
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(a(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function Bt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Wt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r), (e.pingedLanes &= r), ((e = e.eventTimes)[(t = 31 - Ht(t))] = n);
        }
        var Ht = Math.clz32
            ? Math.clz32
            : function(e) {
                return 0 === e ? 32 : (31 - ((Vt(e) / qt) | 0)) | 0;
              },
          Vt = Math.log,
          qt = Math.LN2,
          Gt = i.unstable_UserBlockingPriority,
          $t = i.unstable_runWithPriority,
          Yt = !0;
        function Xt(e, t, n, r) {
          Re || Ae();
          var o = Kt,
            i = Re;
          Re = !0;
          try {
            je(o, e, t, n, r);
          } finally {
            (Re = i) || Ie();
          }
        }
        function Qt(e, t, n, r) {
          $t(Gt, Kt.bind(null, e, t, n, r));
        }
        function Kt(e, t, n, r) {
          var o;
          if (Yt)
            if ((o = 0 == (4 & t)) && 0 < it.length && -1 < dt.indexOf(e)) (e = ht(null, e, t, n, r)), it.push(e);
            else {
              var i = Zt(e, t, n, r);
              if (null === i) o && pt(e, r);
              else {
                if (o) {
                  if (-1 < dt.indexOf(e)) return (e = ht(i, e, t, n, r)), void it.push(e);
                  if (
                    (function(e, t, n, r, o) {
                      switch (t) {
                        case "focusin":
                          return (at = gt(at, e, t, n, r, o)), !0;
                        case "dragenter":
                          return (lt = gt(lt, e, t, n, r, o)), !0;
                        case "mouseover":
                          return (ut = gt(ut, e, t, n, r, o)), !0;
                        case "pointerover":
                          var i = o.pointerId;
                          return ct.set(i, gt(ct.get(i) || null, e, t, n, r, o)), !0;
                        case "gotpointercapture":
                          return (i = o.pointerId), st.set(i, gt(st.get(i) || null, e, t, n, r, o)), !0;
                      }
                      return !1;
                    })(i, e, t, n, r)
                  )
                    return;
                  pt(e, r);
                }
                Ar(e, t, r, null, n);
              }
            }
        }
        function Zt(e, t, n, r) {
          var o = Ee(r);
          if (null !== (o = to(o))) {
            var i = Xe(o);
            if (null === i) o = null;
            else {
              var a = i.tag;
              if (13 === a) {
                if (null !== (o = Qe(i))) return o;
                o = null;
              } else if (3 === a) {
                if (i.stateNode.hydrate) return 3 === i.tag ? i.stateNode.containerInfo : null;
                o = null;
              } else i !== o && (o = null);
            }
          }
          return Ar(e, t, r, o, n), null;
        }
        var Jt = null,
          en = null,
          tn = null;
        function nn() {
          if (tn) return tn;
          var e,
            t,
            n = en,
            r = n.length,
            o = "value" in Jt ? Jt.value : Jt.textContent,
            i = o.length;
          for (e = 0; e < r && n[e] === o[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
          return (tn = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function rn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function on() {
          return !0;
        }
        function an() {
          return !1;
        }
        function ln(e) {
          function t(t, n, r, o, i) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]));
            return (
              (this.isDefaultPrevented = (null != o.defaultPrevented
              ? o.defaultPrevented
              : !1 === o.returnValue)
                ? on
                : an),
              (this.isPropagationStopped = an),
              this
            );
          }
          return (
            o(t.prototype, {
              preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = on));
              },
              stopPropagation: function() {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = on));
              },
              persist: function() {},
              isPersistent: on,
            }),
            t
          );
        }
        var un,
          cn,
          sn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          dn = ln(fn),
          hn = o({}, fn, { view: 0, detail: 0 }),
          pn = ln(hn),
          gn = o({}, hn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function(e) {
              return "movementX" in e
                ? e.movementX
                : (e !== sn &&
                    (sn && "mousemove" === e.type
                      ? ((un = e.screenX - sn.screenX), (cn = e.screenY - sn.screenY))
                      : (cn = un = 0),
                    (sn = e)),
                  un);
            },
            movementY: function(e) {
              return "movementY" in e ? e.movementY : cn;
            },
          }),
          mn = ln(gn),
          yn = ln(o({}, gn, { dataTransfer: 0 })),
          vn = ln(o({}, hn, { relatedTarget: 0 })),
          bn = ln(o({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          wn = o({}, fn, {
            clipboardData: function(e) {
              return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            },
          }),
          _n = ln(wn),
          kn = ln(o({}, fn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
        function On(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return On;
        }
        var Pn = o({}, hn, {
            key: function(e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = rn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function(e) {
              return "keypress" === e.type ? rn(e) : 0;
            },
            keyCode: function(e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function(e) {
              return "keypress" === e.type ? rn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
          }),
          Nn = ln(Pn),
          Mn = ln(
            o({}, gn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Tn = ln(
            o({}, hn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Ln = ln(o({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          jn = o({}, gn, {
            deltaX: function(e) {
              return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          An = ln(jn),
          zn = [9, 13, 27, 32],
          Rn = f && "CompositionEvent" in window,
          Dn = null;
        f && "documentMode" in document && (Dn = document.documentMode);
        var In = f && "TextEvent" in window && !Dn,
          Fn = f && (!Rn || (Dn && 8 < Dn && 11 >= Dn)),
          Un = String.fromCharCode(32),
          Bn = !1;
        function Wn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Hn(e) {
          return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
        }
        var Vn = !1,
          qn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Gn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!qn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Me(r),
            0 < (t = Rr(t, "onChange")).length &&
              ((n = new dn("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
        }
        var Yn = null,
          Xn = null;
        function Qn(e) {
          Pr(e, 0);
        }
        function Kn(e) {
          if (K(ro(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (f) {
          var er;
          if (f) {
            var tr = "oninput" in document;
            if (!tr) {
              var nr = document.createElement("div");
              nr.setAttribute("oninput", "return;"), (tr = "function" == typeof nr.oninput);
            }
            er = tr;
          } else er = !1;
          Jn = er && (!document.documentMode || 9 < document.documentMode);
        }
        function rr() {
          Yn && (Yn.detachEvent("onpropertychange", or), (Xn = Yn = null));
        }
        function or(e) {
          if ("value" === e.propertyName && Kn(Xn)) {
            var t = [];
            if (($n(t, Xn, e, Ee(e)), (e = Qn), Re)) e(t);
            else {
              Re = !0;
              try {
                Le(e, t);
              } finally {
                (Re = !1), Ie();
              }
            }
          }
        }
        function ir(e, t, n) {
          "focusin" === e ? (rr(), (Xn = n), (Yn = t).attachEvent("onpropertychange", or)) : "focusout" === e && rr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Kn(Xn);
        }
        function lr(e, t) {
          if ("click" === e) return Kn(t);
        }
        function ur(e, t) {
          if ("input" === e || "change" === e) return Kn(t);
        }
        var cr =
            "function" == typeof Object.is
              ? Object.is
              : function(e, t) {
                  return (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t);
                },
          sr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (cr(e, t)) return !0;
          if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) if (!sr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function dr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function hr(e, t) {
          var n,
            r = dr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t)) return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = dr(r);
          }
        }
        function pr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? pr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function gr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function mr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var yr = f && "documentMode" in document && 11 >= document.documentMode,
          vr = null,
          br = null,
          wr = null,
          _r = !1;
        function kr(e, t, n) {
          var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
          _r ||
            null == vr ||
            vr !== Z(r) ||
            ((r =
              "selectionStart" in (r = vr) && mr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection())
                      .anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (wr && fr(wr, r)) ||
              ((wr = r),
              0 < (r = Rr(br, "onSelect")).length &&
                ((t = new dn("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = vr))));
        }
        At(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          At(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          At(jt, 2);
        for (
          var xr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),
            Sr = 0;
          Sr < xr.length;
          Sr++
        )
          Lt.set(xr[Sr], 0);
        s("onMouseEnter", ["mouseout", "mouseover"]),
          s("onMouseLeave", ["mouseout", "mouseover"]),
          s("onPointerEnter", ["pointerout", "pointerover"]),
          s("onPointerLeave", ["pointerout", "pointerover"]),
          c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
          c(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")
          ),
          c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
          c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
          c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
          c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var Er = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
          Or = new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));
        function Cr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function(e, t, n, r, o, i, l, u, c) {
              if ((Ye.apply(this, arguments), He)) {
                if (!He) throw Error(a(198));
                var s = Ve;
                (He = !1), (Ve = null), qe || ((qe = !0), (Ge = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Pr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var l = r[a],
                    u = l.instance,
                    c = l.currentTarget;
                  if (((l = l.listener), u !== i && o.isPropagationStopped())) break e;
                  Cr(o, l, c), (i = u);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((u = (l = r[a]).instance),
                    (c = l.currentTarget),
                    (l = l.listener),
                    u !== i && o.isPropagationStopped())
                  )
                    break e;
                  Cr(o, l, c), (i = u);
                }
            }
          }
          if (qe) throw ((e = Ge), (qe = !1), (Ge = null), e);
        }
        function Nr(e, t) {
          var n = io(t),
            r = e + "__bubble";
          n.has(r) || (jr(t, e, 2, !1), n.add(r));
        }
        var Mr =
          "_reactListening" +
          Math.random()
            .toString(36)
            .slice(2);
        function Tr(e) {
          e[Mr] ||
            ((e[Mr] = !0),
            l.forEach(function(t) {
              Or.has(t) || Lr(t, !1, e, null), Lr(t, !0, e, null);
            }));
        }
        function Lr(e, t, n, r) {
          var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
            i = n;
          if (("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument), null !== r && !t && Or.has(e))) {
            if ("scroll" !== e) return;
            (o |= 2), (i = r);
          }
          var a = io(i),
            l = e + "__" + (t ? "capture" : "bubble");
          a.has(l) || (t && (o |= 4), jr(i, e, o, t), a.add(l));
        }
        function jr(e, t, n, r) {
          var o = Lt.get(t);
          switch (void 0 === o ? 2 : o) {
            case 0:
              o = Xt;
              break;
            case 1:
              o = Qt;
              break;
            default:
              o = Kt;
          }
          (n = o.bind(null, t, n, e)),
            (o = void 0),
            !Ue || ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) || (o = !0),
            r
              ? void 0 !== o
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
              : void 0 !== o
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
        }
        function Ar(e, t, n, r, o) {
          var i = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var l = r.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var u = a.tag;
                    if (
                      (3 === u || 4 === u) &&
                      ((u = a.stateNode.containerInfo) === o || (8 === u.nodeType && u.parentNode === o))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== l; ) {
                  if (null === (a = to(l))) return;
                  if (5 === (u = a.tag) || 6 === u) {
                    r = i = a;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              r = r.return;
            }
          !(function(e, t, n) {
            if (De) return e();
            De = !0;
            try {
              ze(e, t, n);
            } finally {
              (De = !1), Ie();
            }
          })(function() {
            var r = i,
              o = Ee(n),
              a = [];
            e: {
              var l = Tt.get(e);
              if (void 0 !== l) {
                var u = dn,
                  c = e;
                switch (e) {
                  case "keypress":
                    if (0 === rn(n)) break e;
                  case "keydown":
                  case "keyup":
                    u = Nn;
                    break;
                  case "focusin":
                    (c = "focus"), (u = vn);
                    break;
                  case "focusout":
                    (c = "blur"), (u = vn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    u = vn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    u = mn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    u = yn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    u = Tn;
                    break;
                  case Ct:
                  case Pt:
                  case Nt:
                    u = bn;
                    break;
                  case Mt:
                    u = Ln;
                    break;
                  case "scroll":
                    u = pn;
                    break;
                  case "wheel":
                    u = An;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    u = _n;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    u = Mn;
                }
                var s = 0 != (4 & t),
                  f = !s && "scroll" === e,
                  d = s ? (null !== l ? l + "Capture" : null) : l;
                s = [];
                for (var h, p = r; null !== p; ) {
                  var g = (h = p).stateNode;
                  if (
                    (5 === h.tag &&
                      null !== g &&
                      ((h = g), null !== d && null != (g = Fe(p, d)) && s.push(zr(p, g, h))),
                    f)
                  )
                    break;
                  p = p.return;
                }
                0 < s.length && ((l = new u(l, c, null, n, o)), a.push({ event: l, listeners: s }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((u = "mouseout" === e || "pointerout" === e),
                (!(l = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(c = n.relatedTarget || n.fromElement) ||
                  (!to(c) && !c[Jr])) &&
                  (u || l) &&
                  ((l = o.window === o ? o : (l = o.ownerDocument) ? l.defaultView || l.parentWindow : window),
                  u
                    ? ((u = r),
                      null !== (c = (c = n.relatedTarget || n.toElement) ? to(c) : null) &&
                        (c !== (f = Xe(c)) || (5 !== c.tag && 6 !== c.tag)) &&
                        (c = null))
                    : ((u = null), (c = r)),
                  u !== c))
              ) {
                if (
                  ((s = mn),
                  (g = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (p = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = Mn), (g = "onPointerLeave"), (d = "onPointerEnter"), (p = "pointer")),
                  (f = null == u ? l : ro(u)),
                  (h = null == c ? l : ro(c)),
                  ((l = new s(g, p + "leave", u, n, o)).target = f),
                  (l.relatedTarget = h),
                  (g = null),
                  to(o) === r && (((s = new s(d, p + "enter", c, n, o)).target = h), (s.relatedTarget = f), (g = s)),
                  (f = g),
                  u && c)
                )
                  e: {
                    for (d = c, p = 0, h = s = u; h; h = Dr(h)) p++;
                    for (h = 0, g = d; g; g = Dr(g)) h++;
                    for (; 0 < p - h; ) (s = Dr(s)), p--;
                    for (; 0 < h - p; ) (d = Dr(d)), h--;
                    for (; p--; ) {
                      if (s === d || (null !== d && s === d.alternate)) break e;
                      (s = Dr(s)), (d = Dr(d));
                    }
                    s = null;
                  }
                else s = null;
                null !== u && Ir(a, l, u, s, !1), null !== c && null !== f && Ir(a, f, c, s, !0);
              }
              if (
                "select" === (u = (l = r ? ro(r) : window).nodeName && l.nodeName.toLowerCase()) ||
                ("input" === u && "file" === l.type)
              )
                var m = Zn;
              else if (Gn(l))
                if (Jn) m = ur;
                else {
                  m = ar;
                  var y = ir;
                }
              else
                (u = l.nodeName) &&
                  "input" === u.toLowerCase() &&
                  ("checkbox" === l.type || "radio" === l.type) &&
                  (m = lr);
              switch (
                (m && (m = m(e, r))
                  ? $n(a, m, n, o)
                  : (y && y(e, l, r),
                    "focusout" === e &&
                      (y = l._wrapperState) &&
                      y.controlled &&
                      "number" === l.type &&
                      oe(l, "number", l.value)),
                (y = r ? ro(r) : window),
                e)
              ) {
                case "focusin":
                  (Gn(y) || "true" === y.contentEditable) && ((vr = y), (br = r), (wr = null));
                  break;
                case "focusout":
                  wr = br = vr = null;
                  break;
                case "mousedown":
                  _r = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (_r = !1), kr(a, n, o);
                  break;
                case "selectionchange":
                  if (yr) break;
                case "keydown":
                case "keyup":
                  kr(a, n, o);
              }
              var v;
              if (Rn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Vn
                  ? Wn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
              b &&
                (Fn &&
                  "ko" !== n.locale &&
                  (Vn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Vn && (v = nn())
                    : ((en = "value" in (Jt = o) ? Jt.value : Jt.textContent), (Vn = !0))),
                0 < (y = Rr(r, b)).length &&
                  ((b = new kn(b, e, null, n, o)),
                  a.push({ event: b, listeners: y }),
                  (v || null !== (v = Hn(n))) && (b.data = v))),
                (v = In
                  ? (function(e, t) {
                      switch (e) {
                        case "compositionend":
                          return Hn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Bn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Bn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function(e, t) {
                      if (Vn)
                        return "compositionend" === e || (!Rn && Wn(e, t))
                          ? ((e = nn()), (tn = en = Jt = null), (Vn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Fn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Rr(r, "onBeforeInput")).length &&
                  ((o = new kn("onBeforeInput", "beforeinput", null, n, o)),
                  a.push({ event: o, listeners: r }),
                  (o.data = v));
            }
            Pr(a, t);
          });
        }
        function zr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Rr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var o = e,
              i = o.stateNode;
            5 === o.tag &&
              null !== i &&
              ((o = i),
              null != (i = Fe(e, n)) && r.unshift(zr(e, i, o)),
              null != (i = Fe(e, t)) && r.push(zr(e, i, o))),
              (e = e.return);
          }
          return r;
        }
        function Dr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Ir(e, t, n, r, o) {
          for (var i = t._reactName, a = []; null !== n && n !== r; ) {
            var l = n,
              u = l.alternate,
              c = l.stateNode;
            if (null !== u && u === r) break;
            5 === l.tag &&
              null !== c &&
              ((l = c),
              o
                ? null != (u = Fe(n, i)) && a.unshift(zr(n, u, l))
                : o || (null != (u = Fe(n, i)) && a.push(zr(n, u, l)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        function Fr() {}
        var Ur = null,
          Br = null;
        function Wr(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Hr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Vr = "function" == typeof setTimeout ? setTimeout : void 0,
          qr = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Gr(e) {
          (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) && (e.textContent = "");
        }
        function $r(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Yr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Xr = 0,
          Qr = Math.random()
            .toString(36)
            .slice(2),
          Kr = "__reactFiber$" + Qr,
          Zr = "__reactProps$" + Qr,
          Jr = "__reactContainer$" + Qr,
          eo = "__reactEvents$" + Qr;
        function to(e) {
          var t = e[Kr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Jr] || n[Kr])) {
              if (((n = t.alternate), null !== t.child || (null !== n && null !== n.child)))
                for (e = Yr(e); null !== e; ) {
                  if ((n = e[Kr])) return n;
                  e = Yr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function no(e) {
          return !(e = e[Kr] || e[Jr]) || (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag) ? null : e;
        }
        function ro(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function oo(e) {
          return e[Zr] || null;
        }
        function io(e) {
          var t = e[eo];
          return void 0 === t && (t = e[eo] = new Set()), t;
        }
        var ao = [],
          lo = -1;
        function uo(e) {
          return { current: e };
        }
        function co(e) {
          0 > lo || ((e.current = ao[lo]), (ao[lo] = null), lo--);
        }
        function so(e, t) {
          lo++, (ao[lo] = e.current), (e.current = t);
        }
        var fo = {},
          ho = uo(fo),
          po = uo(!1),
          go = fo;
        function mo(e, t) {
          var n = e.type.contextTypes;
          if (!n) return fo;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var o,
            i = {};
          for (o in n) i[o] = t[o];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function yo(e) {
          return null != e.childContextTypes;
        }
        function vo() {
          co(po), co(ho);
        }
        function bo(e, t, n) {
          if (ho.current !== fo) throw Error(a(168));
          so(ho, t), so(po, n);
        }
        function wo(e, t, n) {
          var r = e.stateNode;
          if (((e = t.childContextTypes), "function" != typeof r.getChildContext)) return n;
          for (var i in (r = r.getChildContext())) if (!(i in e)) throw Error(a(108, $(t) || "Unknown", i));
          return o({}, n, r);
        }
        function _o(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || fo),
            (go = ho.current),
            so(ho, e),
            so(po, po.current),
            !0
          );
        }
        function ko(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = wo(e, t, go)), (r.__reactInternalMemoizedMergedChildContext = e), co(po), co(ho), so(ho, e))
            : co(po),
            so(po, n);
        }
        var xo = null,
          So = null,
          Eo = i.unstable_runWithPriority,
          Oo = i.unstable_scheduleCallback,
          Co = i.unstable_cancelCallback,
          Po = i.unstable_shouldYield,
          No = i.unstable_requestPaint,
          Mo = i.unstable_now,
          To = i.unstable_getCurrentPriorityLevel,
          Lo = i.unstable_ImmediatePriority,
          jo = i.unstable_UserBlockingPriority,
          Ao = i.unstable_NormalPriority,
          zo = i.unstable_LowPriority,
          Ro = i.unstable_IdlePriority,
          Do = {},
          Io = void 0 !== No ? No : function() {},
          Fo = null,
          Uo = null,
          Bo = !1,
          Wo = Mo(),
          Ho =
            1e4 > Wo
              ? Mo
              : function() {
                  return Mo() - Wo;
                };
        function Vo() {
          switch (To()) {
            case Lo:
              return 99;
            case jo:
              return 98;
            case Ao:
              return 97;
            case zo:
              return 96;
            case Ro:
              return 95;
            default:
              throw Error(a(332));
          }
        }
        function qo(e) {
          switch (e) {
            case 99:
              return Lo;
            case 98:
              return jo;
            case 97:
              return Ao;
            case 96:
              return zo;
            case 95:
              return Ro;
            default:
              throw Error(a(332));
          }
        }
        function Go(e, t) {
          return (e = qo(e)), Eo(e, t);
        }
        function $o(e, t, n) {
          return (e = qo(e)), Oo(e, t, n);
        }
        function Yo() {
          if (null !== Uo) {
            var e = Uo;
            (Uo = null), Co(e);
          }
          Xo();
        }
        function Xo() {
          if (!Bo && null !== Fo) {
            Bo = !0;
            var e = 0;
            try {
              var t = Fo;
              Go(99, function() {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                (Fo = null);
            } catch (t) {
              throw (null !== Fo && (Fo = Fo.slice(e + 1)), Oo(Lo, Yo), t);
            } finally {
              Bo = !1;
            }
          }
        }
        var Qo = _.ReactCurrentBatchConfig;
        function Ko(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = o({}, t)), (e = e.defaultProps))) void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Zo = uo(null),
          Jo = null,
          ei = null,
          ti = null;
        function ni() {
          ti = ei = Jo = null;
        }
        function ri(e) {
          var t = Zo.current;
          co(Zo), (e.type._context._currentValue = t);
        }
        function oi(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function ii(e, t) {
          (Jo = e),
            (ti = ei = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (Ra = !0), (e.firstContext = null));
        }
        function ai(e, t) {
          if (ti !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) || ((ti = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === ei)
            ) {
              if (null === Jo) throw Error(a(308));
              (ei = t), (Jo.dependencies = { lanes: 0, firstContext: t, responders: null });
            } else ei = ei.next = t;
          return e._currentValue;
        }
        var li = !1;
        function ui(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function ci(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function si(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function fi(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
          }
        }
        function di(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var o = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (o = i = a) : (i = i.next = a), (n = n.next);
              } while (null !== n);
              null === i ? (o = i = t) : (i = i.next = t);
            } else o = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
        }
        function hi(e, t, n, r) {
          var i = e.updateQueue;
          li = !1;
          var a = i.firstBaseUpdate,
            l = i.lastBaseUpdate,
            u = i.shared.pending;
          if (null !== u) {
            i.shared.pending = null;
            var c = u,
              s = c.next;
            (c.next = null), null === l ? (a = s) : (l.next = s), (l = c);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== l && (null === d ? (f.firstBaseUpdate = s) : (d.next = s), (f.lastBaseUpdate = c));
            }
          }
          if (null !== a) {
            for (d = i.baseState, l = 0, f = s = c = null; ; ) {
              u = a.lane;
              var h = a.eventTime;
              if ((r & u) === u) {
                null !== f &&
                  (f = f.next = {
                    eventTime: h,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null,
                  });
                e: {
                  var p = e,
                    g = a;
                  switch (((u = t), (h = n), g.tag)) {
                    case 1:
                      if ("function" == typeof (p = g.payload)) {
                        d = p.call(h, d, u);
                        break e;
                      }
                      d = p;
                      break e;
                    case 3:
                      p.flags = (-4097 & p.flags) | 64;
                    case 0:
                      if (null == (u = "function" == typeof (p = g.payload) ? p.call(h, d, u) : p)) break e;
                      d = o({}, d, u);
                      break e;
                    case 2:
                      li = !0;
                  }
                }
                null !== a.callback && ((e.flags |= 32), null === (u = i.effects) ? (i.effects = [a]) : u.push(a));
              } else
                (h = { eventTime: h, lane: u, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                  null === f ? ((s = f = h), (c = d)) : (f = f.next = h),
                  (l |= u);
              if (null === (a = a.next)) {
                if (null === (u = i.shared.pending)) break;
                (a = u.next), (u.next = null), (i.lastBaseUpdate = u), (i.shared.pending = null);
              }
            }
            null === f && (c = d),
              (i.baseState = c),
              (i.firstBaseUpdate = s),
              (i.lastBaseUpdate = f),
              (Il |= l),
              (e.lanes = l),
              (e.memoizedState = d);
          }
        }
        function pi(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                o = r.callback;
              if (null !== o) {
                if (((r.callback = null), (r = n), "function" != typeof o)) throw Error(a(191, o));
                o.call(r);
              }
            }
        }
        var gi = new r.Component().refs;
        function mi(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : o({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var yi = {
          isMounted: function(e) {
            return !!(e = e._reactInternals) && Xe(e) === e;
          },
          enqueueSetState: function(e, t, n) {
            e = e._reactInternals;
            var r = cu(),
              o = su(e),
              i = si(r, o);
            (i.payload = t), null != n && (i.callback = n), fi(e, i), fu(e, o, r);
          },
          enqueueReplaceState: function(e, t, n) {
            e = e._reactInternals;
            var r = cu(),
              o = su(e),
              i = si(r, o);
            (i.tag = 1), (i.payload = t), null != n && (i.callback = n), fi(e, i), fu(e, o, r);
          },
          enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var n = cu(),
              r = su(e),
              o = si(n, r);
            (o.tag = 2), null != t && (o.callback = t), fi(e, o), fu(e, r, n);
          },
        };
        function vi(e, t, n, r, o, i, a) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, a)
            : !(t.prototype && t.prototype.isPureReactComponent && fr(n, r) && fr(o, i));
        }
        function bi(e, t, n) {
          var r = !1,
            o = fo,
            i = t.contextType;
          return (
            "object" == typeof i && null !== i
              ? (i = ai(i))
              : ((o = yo(t) ? go : ho.current), (i = (r = null != (r = t.contextTypes)) ? mo(e, o) : fo)),
            (t = new t(n, i)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = yi),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function wi(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && yi.enqueueReplaceState(t, t.state, null);
        }
        function _i(e, t, n, r) {
          var o = e.stateNode;
          (o.props = n), (o.state = e.memoizedState), (o.refs = gi), ui(e);
          var i = t.contextType;
          "object" == typeof i && null !== i
            ? (o.context = ai(i))
            : ((i = yo(t) ? go : ho.current), (o.context = mo(e, i))),
            hi(e, n, o, r),
            (o.state = e.memoizedState),
            "function" == typeof (i = t.getDerivedStateFromProps) && (mi(e, t, i, n), (o.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof o.getSnapshotBeforeUpdate ||
              ("function" != typeof o.UNSAFE_componentWillMount && "function" != typeof o.componentWillMount) ||
              ((t = o.state),
              "function" == typeof o.componentWillMount && o.componentWillMount(),
              "function" == typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && yi.enqueueReplaceState(o, o.state, null),
              hi(e, n, o, r),
              (o.state = e.memoizedState)),
            "function" == typeof o.componentDidMount && (e.flags |= 4);
        }
        var ki = Array.isArray;
        function xi(e, t, n) {
          if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var o = "" + e;
              return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === o
                ? t.ref
                : ((t = function(e) {
                    var t = r.refs;
                    t === gi && (t = r.refs = {}), null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" != typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Si(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              a(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Ei(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r ? ((r.nextEffect = n), (t.lastEffect = n)) : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; ) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Hu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e ? (null !== (r = t.alternate) ? ((r = r.index) < n ? ((t.flags = 2), n) : r) : ((t.flags = 2), n)) : n
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function u(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = $u(n, e.mode, r)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = o(t, n.props)).ref = xi(e, t, n)), (r.return = e), r)
              : (((r = Vu(n.type, n.key, n.props, null, e.mode, r)).ref = xi(e, t, n)), (r.return = e), r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Yu(n, e.mode, r)).return = e), t)
              : (((t = o(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = qu(n, e.mode, r, i)).return = e), t)
              : (((t = o(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return ((t = $u("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return ((n = Vu(t.type, t.key, t.props, null, e.mode, n)).ref = xi(e, null, t)), (n.return = e), n;
                case x:
                  return ((t = Yu(t, e.mode, n)).return = e), t;
              }
              if (ki(t) || W(t)) return ((t = qu(t, e.mode, n, null)).return = e), t;
              Si(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var o = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== o ? null : u(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === o ? (n.type === S ? f(e, t, n.props.children, r, o) : c(e, t, n, r)) : null;
                case x:
                  return n.key === o ? s(e, t, n, r) : null;
              }
              if (ki(n) || W(n)) return null !== o ? null : f(e, t, n, r, null);
              Si(e, n);
            }
            return null;
          }
          function p(e, t, n, r, o) {
            if ("string" == typeof r || "number" == typeof r) return u(t, (e = e.get(n) || null), "" + r, o);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === S ? f(t, e, r.props.children, o, r.key) : c(t, e, r, o)
                  );
                case x:
                  return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o);
              }
              if (ki(r) || W(r)) return f(t, (e = e.get(n) || null), r, o, null);
              Si(t, r);
            }
            return null;
          }
          function g(o, a, l, u) {
            for (var c = null, s = null, f = a, g = (a = 0), m = null; null !== f && g < l.length; g++) {
              f.index > g ? ((m = f), (f = null)) : (m = f.sibling);
              var y = h(o, f, l[g], u);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(o, f),
                (a = i(y, a, g)),
                null === s ? (c = y) : (s.sibling = y),
                (s = y),
                (f = m);
            }
            if (g === l.length) return n(o, f), c;
            if (null === f) {
              for (; g < l.length; g++)
                null !== (f = d(o, l[g], u)) && ((a = i(f, a, g)), null === s ? (c = f) : (s.sibling = f), (s = f));
              return c;
            }
            for (f = r(o, f); g < l.length; g++)
              null !== (m = p(f, o, g, l[g], u)) &&
                (e && null !== m.alternate && f.delete(null === m.key ? g : m.key),
                (a = i(m, a, g)),
                null === s ? (c = m) : (s.sibling = m),
                (s = m));
            return (
              e &&
                f.forEach(function(e) {
                  return t(o, e);
                }),
              c
            );
          }
          function m(o, l, u, c) {
            var s = W(u);
            if ("function" != typeof s) throw Error(a(150));
            if (null == (u = s.call(u))) throw Error(a(151));
            for (
              var f = (s = null), g = l, m = (l = 0), y = null, v = u.next();
              null !== g && !v.done;
              m++, v = u.next()
            ) {
              g.index > m ? ((y = g), (g = null)) : (y = g.sibling);
              var b = h(o, g, v.value, c);
              if (null === b) {
                null === g && (g = y);
                break;
              }
              e && g && null === b.alternate && t(o, g),
                (l = i(b, l, m)),
                null === f ? (s = b) : (f.sibling = b),
                (f = b),
                (g = y);
            }
            if (v.done) return n(o, g), s;
            if (null === g) {
              for (; !v.done; m++, v = u.next())
                null !== (v = d(o, v.value, c)) && ((l = i(v, l, m)), null === f ? (s = v) : (f.sibling = v), (f = v));
              return s;
            }
            for (g = r(o, g); !v.done; m++, v = u.next())
              null !== (v = p(g, o, m, v.value, c)) &&
                (e && null !== v.alternate && g.delete(null === v.key ? m : v.key),
                (l = i(v, l, m)),
                null === f ? (s = v) : (f.sibling = v),
                (f = v));
            return (
              e &&
                g.forEach(function(e) {
                  return t(o, e);
                }),
              s
            );
          }
          return function(e, r, i, u) {
            var c = "object" == typeof i && null !== i && i.type === S && null === i.key;
            c && (i = i.props.children);
            var s = "object" == typeof i && null !== i;
            if (s)
              switch (i.$$typeof) {
                case k:
                  e: {
                    for (s = i.key, c = r; null !== c; ) {
                      if (c.key === s) {
                        if (7 === c.tag) {
                          if (i.type === S) {
                            n(e, c.sibling), ((r = o(c, i.props.children)).return = e), (e = r);
                            break e;
                          }
                        } else if (c.elementType === i.type) {
                          n(e, c.sibling), ((r = o(c, i.props)).ref = xi(e, c, i)), (r.return = e), (e = r);
                          break e;
                        }
                        n(e, c);
                        break;
                      }
                      t(e, c), (c = c.sibling);
                    }
                    i.type === S
                      ? (((r = qu(i.props.children, e.mode, u, i.key)).return = e), (e = r))
                      : (((u = Vu(i.type, i.key, i.props, null, e.mode, u)).ref = xi(e, r, i)),
                        (u.return = e),
                        (e = u));
                  }
                  return l(e);
                case x:
                  e: {
                    for (c = i.key; null !== r; ) {
                      if (r.key === c) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === i.containerInfo &&
                          r.stateNode.implementation === i.implementation
                        ) {
                          n(e, r.sibling), ((r = o(r, i.children || [])).return = e), (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Yu(i, e.mode, u)).return = e), (e = r);
                  }
                  return l(e);
              }
            if ("string" == typeof i || "number" == typeof i)
              return (
                (i = "" + i),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = o(r, i)).return = e), (e = r))
                  : (n(e, r), ((r = $u(i, e.mode, u)).return = e), (e = r)),
                l(e)
              );
            if (ki(i)) return g(e, r, i, u);
            if (W(i)) return m(e, r, i, u);
            if ((s && Si(e, i), void 0 === i && !c))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(a(152, $(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Oi = Ei(!0),
          Ci = Ei(!1),
          Pi = {},
          Ni = uo(Pi),
          Mi = uo(Pi),
          Ti = uo(Pi);
        function Li(e) {
          if (e === Pi) throw Error(a(174));
          return e;
        }
        function ji(e, t) {
          switch ((so(Ti, t), so(Mi, e), so(Ni, Pi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
              break;
            default:
              t = he((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          co(Ni), so(Ni, t);
        }
        function Ai() {
          co(Ni), co(Mi), co(Ti);
        }
        function zi(e) {
          Li(Ti.current);
          var t = Li(Ni.current),
            n = he(t, e.type);
          t !== n && (so(Mi, e), so(Ni, n));
        }
        function Ri(e) {
          Mi.current === e && (co(Ni), co(Mi));
        }
        var Di = uo(0);
        function Ii(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Fi = null,
          Ui = null,
          Bi = !1;
        function Wi(e, t) {
          var n = Bu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Hi(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), !0)
              );
            case 6:
              return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && ((e.stateNode = t), !0);
            default:
              return !1;
          }
        }
        function Vi(e) {
          if (Bi) {
            var t = Ui;
            if (t) {
              var n = t;
              if (!Hi(e, t)) {
                if (!(t = $r(n.nextSibling)) || !Hi(e, t))
                  return (e.flags = (-1025 & e.flags) | 2), (Bi = !1), void (Fi = e);
                Wi(Fi, n);
              }
              (Fi = e), (Ui = $r(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Bi = !1), (Fi = e);
          }
        }
        function qi(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; ) e = e.return;
          Fi = e;
        }
        function Gi(e) {
          if (e !== Fi) return !1;
          if (!Bi) return qi(e), (Bi = !0), !1;
          var t = e.type;
          if (5 !== e.tag || ("head" !== t && "body" !== t && !Hr(t, e.memoizedProps)))
            for (t = Ui; t; ) Wi(e, t), (t = $r(t.nextSibling));
          if ((qi(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Ui = $r(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Ui = null;
            }
          } else Ui = Fi ? $r(e.stateNode.nextSibling) : null;
          return !0;
        }
        function $i() {
          (Ui = Fi = null), (Bi = !1);
        }
        var Yi = [];
        function Xi() {
          for (var e = 0; e < Yi.length; e++) Yi[e]._workInProgressVersionPrimary = null;
          Yi.length = 0;
        }
        var Qi = _.ReactCurrentDispatcher,
          Ki = _.ReactCurrentBatchConfig,
          Zi = 0,
          Ji = null,
          ea = null,
          ta = null,
          na = !1,
          ra = !1;
        function oa() {
          throw Error(a(321));
        }
        function ia(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++) if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function aa(e, t, n, r, o, i) {
          if (
            ((Zi = i),
            (Ji = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Qi.current = null === e || null === e.memoizedState ? La : ja),
            (e = n(r, o)),
            ra)
          ) {
            i = 0;
            do {
              if (((ra = !1), !(25 > i))) throw Error(a(301));
              (i += 1), (ta = ea = null), (t.updateQueue = null), (Qi.current = Aa), (e = n(r, o));
            } while (ra);
          }
          if (((Qi.current = Ta), (t = null !== ea && null !== ea.next), (Zi = 0), (ta = ea = Ji = null), (na = !1), t))
            throw Error(a(300));
          return e;
        }
        function la() {
          var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
          return null === ta ? (Ji.memoizedState = ta = e) : (ta = ta.next = e), ta;
        }
        function ua() {
          if (null === ea) {
            var e = Ji.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ea.next;
          var t = null === ta ? Ji.memoizedState : ta.next;
          if (null !== t) (ta = t), (ea = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (ea = e).memoizedState,
              baseState: ea.baseState,
              baseQueue: ea.baseQueue,
              queue: ea.queue,
              next: null,
            }),
              null === ta ? (Ji.memoizedState = ta = e) : (ta = ta.next = e);
          }
          return ta;
        }
        function ca(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function sa(e) {
          var t = ua(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ea,
            o = r.baseQueue,
            i = n.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (r.baseQueue = o = i), (n.pending = null);
          }
          if (null !== o) {
            (o = o.next), (r = r.baseState);
            var u = (l = i = null),
              c = o;
            do {
              var s = c.lane;
              if ((Zi & s) === s)
                null !== u &&
                  (u = u.next = {
                    lane: 0,
                    action: c.action,
                    eagerReducer: c.eagerReducer,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                  (r = c.eagerReducer === e ? c.eagerState : e(r, c.action));
              else {
                var f = {
                  lane: s,
                  action: c.action,
                  eagerReducer: c.eagerReducer,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = f), (i = r)) : (u = u.next = f), (Ji.lanes |= s), (Il |= s);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (i = r) : (u.next = l),
              cr(r, t.memoizedState) || (Ra = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fa(e) {
          var t = ua(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            o = n.pending,
            i = t.memoizedState;
          if (null !== o) {
            n.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            cr(i, t.memoizedState) || (Ra = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i);
          }
          return [i, r];
        }
        function da(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var o = t._workInProgressVersionPrimary;
          if (
            (null !== o
              ? (e = o === r)
              : ((e = e.mutableReadLanes), (e = (Zi & e) === e) && ((t._workInProgressVersionPrimary = r), Yi.push(t))),
            e)
          )
            return n(t._source);
          throw (Yi.push(t), Error(a(350)));
        }
        function ha(e, t, n, r) {
          var o = Ml;
          if (null === o) throw Error(a(349));
          var i = t._getVersion,
            l = i(t._source),
            u = Qi.current,
            c = u.useState(function() {
              return da(o, t, n);
            }),
            s = c[1],
            f = c[0];
          c = ta;
          var d = e.memoizedState,
            h = d.refs,
            p = h.getSnapshot,
            g = d.source;
          d = d.subscribe;
          var m = Ji;
          return (
            (e.memoizedState = { refs: h, source: t, subscribe: r }),
            u.useEffect(
              function() {
                (h.getSnapshot = n), (h.setSnapshot = s);
                var e = i(t._source);
                if (!cr(l, e)) {
                  (e = n(t._source)),
                    cr(f, e) || (s(e), (e = su(m)), (o.mutableReadLanes |= e & o.pendingLanes)),
                    (e = o.mutableReadLanes),
                    (o.entangledLanes |= e);
                  for (var r = o.entanglements, a = e; 0 < a; ) {
                    var u = 31 - Ht(a),
                      c = 1 << u;
                    (r[u] |= e), (a &= ~c);
                  }
                }
              },
              [n, t, r]
            ),
            u.useEffect(
              function() {
                return r(t._source, function() {
                  var e = h.getSnapshot,
                    n = h.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = su(m);
                    o.mutableReadLanes |= r & o.pendingLanes;
                  } catch (e) {
                    n(function() {
                      throw e;
                    });
                  }
                });
              },
              [t, r]
            ),
            (cr(p, n) && cr(g, t) && cr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: ca,
                lastRenderedState: f,
              }).dispatch = s = Ma.bind(null, Ji, e)),
              (c.queue = e),
              (c.baseQueue = null),
              (f = da(o, t, n)),
              (c.memoizedState = c.baseState = f)),
            f
          );
        }
        function pa(e, t, n) {
          return ha(ua(), e, t, n);
        }
        function ga(e) {
          var t = la();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: ca,
              lastRenderedState: e,
            }).dispatch = Ma.bind(null, Ji, e)),
            [t.memoizedState, e]
          );
        }
        function ma(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Ji.updateQueue)
              ? ((t = { lastEffect: null }), (Ji.updateQueue = t), (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ya(e) {
          return (e = { current: e }), (la().memoizedState = e);
        }
        function va() {
          return ua().memoizedState;
        }
        function ba(e, t, n, r) {
          var o = la();
          (Ji.flags |= e), (o.memoizedState = ma(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function wa(e, t, n, r) {
          var o = ua();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== ea) {
            var a = ea.memoizedState;
            if (((i = a.destroy), null !== r && ia(r, a.deps))) return void ma(t, n, i, r);
          }
          (Ji.flags |= e), (o.memoizedState = ma(1 | t, n, i, r));
        }
        function _a(e, t) {
          return ba(516, 4, e, t);
        }
        function ka(e, t) {
          return wa(516, 4, e, t);
        }
        function xa(e, t) {
          return wa(4, 2, e, t);
        }
        function Sa(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function() {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function() {
                t.current = null;
              })
            : void 0;
        }
        function Ea(e, t, n) {
          return (n = null != n ? n.concat([e]) : null), wa(4, 2, Sa.bind(null, t, e), n);
        }
        function Oa() {}
        function Ca(e, t) {
          var n = ua();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ia(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
        }
        function Pa(e, t) {
          var n = ua();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && ia(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Na(e, t) {
          var n = Vo();
          Go(98 > n ? 98 : n, function() {
            e(!0);
          }),
            Go(97 < n ? 97 : n, function() {
              var n = Ki.transition;
              Ki.transition = 1;
              try {
                e(!1), t();
              } finally {
                Ki.transition = n;
              }
            });
        }
        function Ma(e, t, n) {
          var r = cu(),
            o = su(e),
            i = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null },
            a = t.pending;
          if (
            (null === a ? (i.next = i) : ((i.next = a.next), (a.next = i)),
            (t.pending = i),
            (a = e.alternate),
            e === Ji || (null !== a && a === Ji))
          )
            ra = na = !0;
          else {
            if (0 === e.lanes && (null === a || 0 === a.lanes) && null !== (a = t.lastRenderedReducer))
              try {
                var l = t.lastRenderedState,
                  u = a(l, n);
                if (((i.eagerReducer = a), (i.eagerState = u), cr(u, l))) return;
              } catch (e) {}
            fu(e, o, r);
          }
        }
        var Ta = {
            readContext: ai,
            useCallback: oa,
            useContext: oa,
            useEffect: oa,
            useImperativeHandle: oa,
            useLayoutEffect: oa,
            useMemo: oa,
            useReducer: oa,
            useRef: oa,
            useState: oa,
            useDebugValue: oa,
            useDeferredValue: oa,
            useTransition: oa,
            useMutableSource: oa,
            useOpaqueIdentifier: oa,
            unstable_isNewReconciler: !1,
          },
          La = {
            readContext: ai,
            useCallback: function(e, t) {
              return (la().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: ai,
            useEffect: _a,
            useImperativeHandle: function(e, t, n) {
              return (n = null != n ? n.concat([e]) : null), ba(4, 2, Sa.bind(null, t, e), n);
            },
            useLayoutEffect: function(e, t) {
              return ba(4, 2, e, t);
            },
            useMemo: function(e, t) {
              var n = la();
              return (t = void 0 === t ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
            },
            useReducer: function(e, t, n) {
              var r = la();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue = {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch = Ma.bind(null, Ji, e)),
                [r.memoizedState, e]
              );
            },
            useRef: ya,
            useState: ga,
            useDebugValue: Oa,
            useDeferredValue: function(e) {
              var t = ga(e),
                n = t[0],
                r = t[1];
              return (
                _a(
                  function() {
                    var t = Ki.transition;
                    Ki.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ki.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function() {
              var e = ga(!1),
                t = e[0];
              return ya((e = Na.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function(e, t, n) {
              var r = la();
              return (
                (r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }),
                ha(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function() {
              if (Bi) {
                var e = !1,
                  t = (function(e) {
                    return { $$typeof: z, toString: e, valueOf: e };
                  })(function() {
                    throw (e || ((e = !0), n("r:" + (Xr++).toString(36))), Error(a(355)));
                  }),
                  n = ga(t)[1];
                return (
                  0 == (2 & Ji.mode) &&
                    ((Ji.flags |= 516),
                    ma(
                      5,
                      function() {
                        n("r:" + (Xr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return ga((t = "r:" + (Xr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          ja = {
            readContext: ai,
            useCallback: Ca,
            useContext: ai,
            useEffect: ka,
            useImperativeHandle: Ea,
            useLayoutEffect: xa,
            useMemo: Pa,
            useReducer: sa,
            useRef: va,
            useState: function() {
              return sa(ca);
            },
            useDebugValue: Oa,
            useDeferredValue: function(e) {
              var t = sa(ca),
                n = t[0],
                r = t[1];
              return (
                ka(
                  function() {
                    var t = Ki.transition;
                    Ki.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ki.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function() {
              var e = sa(ca)[0];
              return [va().current, e];
            },
            useMutableSource: pa,
            useOpaqueIdentifier: function() {
              return sa(ca)[0];
            },
            unstable_isNewReconciler: !1,
          },
          Aa = {
            readContext: ai,
            useCallback: Ca,
            useContext: ai,
            useEffect: ka,
            useImperativeHandle: Ea,
            useLayoutEffect: xa,
            useMemo: Pa,
            useReducer: fa,
            useRef: va,
            useState: function() {
              return fa(ca);
            },
            useDebugValue: Oa,
            useDeferredValue: function(e) {
              var t = fa(ca),
                n = t[0],
                r = t[1];
              return (
                ka(
                  function() {
                    var t = Ki.transition;
                    Ki.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Ki.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function() {
              var e = fa(ca)[0];
              return [va().current, e];
            },
            useMutableSource: pa,
            useOpaqueIdentifier: function() {
              return fa(ca)[0];
            },
            unstable_isNewReconciler: !1,
          },
          za = _.ReactCurrentOwner,
          Ra = !1;
        function Da(e, t, n, r) {
          t.child = null === e ? Ci(t, null, n, r) : Oi(t, e.child, n, r);
        }
        function Ia(e, t, n, r, o) {
          n = n.render;
          var i = t.ref;
          return (
            ii(t, o),
            (r = aa(e, t, n, r, i, o)),
            null === e || Ra
              ? ((t.flags |= 1), Da(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), nl(e, t, o))
          );
        }
        function Fa(e, t, n, r, o, i) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              Wu(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Vu(n.type, null, r, t, t.mode, i)).ref = t.ref), (e.return = t), (t.child = e))
              : ((t.tag = 15), (t.type = a), Ua(e, t, a, r, o, i));
          }
          return (
            (a = e.child),
            0 == (o & i) && ((o = a.memoizedProps), (n = null !== (n = n.compare) ? n : fr)(o, r) && e.ref === t.ref)
              ? nl(e, t, i)
              : ((t.flags |= 1), ((e = Hu(a, r)).ref = t.ref), (e.return = t), (t.child = e))
          );
        }
        function Ua(e, t, n, r, o, i) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((Ra = !1), 0 == (i & o))) return (t.lanes = e.lanes), nl(e, t, i);
            0 != (16384 & e.flags) && (Ra = !0);
          }
          return Ha(e, t, n, r, i);
        }
        function Ba(e, t, n) {
          var r = t.pendingProps,
            o = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), bu(0, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  bu(0, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }), bu(0, null !== i ? i.baseLanes : n);
            }
          else null !== i ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), bu(0, r);
          return Da(e, t, o, n), t.child;
        }
        function Wa(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) && (t.flags |= 128);
        }
        function Ha(e, t, n, r, o) {
          var i = yo(n) ? go : ho.current;
          return (
            (i = mo(t, i)),
            ii(t, o),
            (n = aa(e, t, n, r, i, o)),
            null === e || Ra
              ? ((t.flags |= 1), Da(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -517), (e.lanes &= ~o), nl(e, t, o))
          );
        }
        function Va(e, t, n, r, o) {
          if (yo(n)) {
            var i = !0;
            _o(t);
          } else i = !1;
          if ((ii(t, o), null === t.stateNode))
            null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              bi(t, n, r),
              _i(t, n, r, o),
              (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              l = t.memoizedProps;
            a.props = l;
            var u = a.context,
              c = n.contextType;
            c = "object" == typeof c && null !== c ? ai(c) : mo(t, (c = yo(n) ? go : ho.current));
            var s = n.getDerivedStateFromProps,
              f = "function" == typeof s || "function" == typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((l !== r || u !== c) && wi(t, a, r, c)),
              (li = !1);
            var d = t.memoizedState;
            (a.state = d),
              hi(t, r, a, o),
              (u = t.memoizedState),
              l !== r || d !== u || po.current || li
                ? ("function" == typeof s && (mi(t, n, s, r), (u = t.memoizedState)),
                  (l = li || vi(t, n, l, r, d, u, c))
                    ? (f ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount && a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount && (t.flags |= 4))
                    : ("function" == typeof a.componentDidMount && (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (a.props = r),
                  (a.state = u),
                  (a.context = c),
                  (r = l))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4), (r = !1));
          } else {
            (a = t.stateNode),
              ci(e, t),
              (l = t.memoizedProps),
              (c = t.type === t.elementType ? l : Ko(t.type, l)),
              (a.props = c),
              (f = t.pendingProps),
              (d = a.context),
              (u = "object" == typeof (u = n.contextType) && null !== u ? ai(u) : mo(t, (u = yo(n) ? go : ho.current)));
            var h = n.getDerivedStateFromProps;
            (s = "function" == typeof h || "function" == typeof a.getSnapshotBeforeUpdate) ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((l !== f || d !== u) && wi(t, a, r, u)),
              (li = !1),
              (d = t.memoizedState),
              (a.state = d),
              hi(t, r, a, o);
            var p = t.memoizedState;
            l !== f || d !== p || po.current || li
              ? ("function" == typeof h && (mi(t, n, h, r), (p = t.memoizedState)),
                (c = li || vi(t, n, c, r, d, p, u))
                  ? (s ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, u),
                      "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, u)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate && (t.flags |= 256))
                  : ("function" != typeof a.componentDidUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = u),
                (r = c))
              : ("function" != typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return qa(e, t, n, r, i, o);
        }
        function qa(e, t, n, r, o, i) {
          Wa(e, t);
          var a = 0 != (64 & t.flags);
          if (!r && !a) return o && ko(t, n, !1), nl(e, t, i);
          (r = t.stateNode), (za.current = t);
          var l = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
          return (
            (t.flags |= 1),
            null !== e && a ? ((t.child = Oi(t, e.child, null, i)), (t.child = Oi(t, null, l, i))) : Da(e, t, l, i),
            (t.memoizedState = r.state),
            o && ko(t, n, !0),
            t.child
          );
        }
        function Ga(e) {
          var t = e.stateNode;
          t.pendingContext
            ? bo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && bo(0, t.context, !1),
            ji(e, t.containerInfo);
        }
        var $a,
          Ya,
          Xa,
          Qa = { dehydrated: null, retryLane: 0 };
        function Ka(e, t, n) {
          var r,
            o = t.pendingProps,
            i = Di.current,
            a = !1;
          return (
            (r = 0 != (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
            r
              ? ((a = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === o.fallback ||
                !0 === o.unstable_avoidThisFallback ||
                (i |= 1),
            so(Di, 1 & i),
            null === e
              ? (void 0 !== o.fallback && Vi(t),
                (e = o.children),
                (i = o.fallback),
                a
                  ? ((e = Za(t, e, i, n)), (t.child.memoizedState = { baseLanes: n }), (t.memoizedState = Qa), e)
                  : "number" == typeof o.unstable_expectedLoadTime
                  ? ((e = Za(t, e, i, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Qa),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Gu({ mode: "visible", children: e }, t.mode, n, null)).return = t), (t.child = n)))
              : (e.memoizedState,
                a
                  ? ((o = (function(e, t, n, r, o) {
                      var i = t.mode,
                        a = e.child;
                      e = a.sibling;
                      var l = { mode: "hidden", children: n };
                      return (
                        0 == (2 & i) && t.child !== a
                          ? (((n = t.child).childLanes = 0),
                            (n.pendingProps = l),
                            null !== (a = n.lastEffect)
                              ? ((t.firstEffect = n.firstEffect), (t.lastEffect = a), (a.nextEffect = null))
                              : (t.firstEffect = t.lastEffect = null))
                          : (n = Hu(a, l)),
                        null !== e ? (r = Hu(e, r)) : ((r = qu(r, i, o, null)).flags |= 2),
                        (r.return = t),
                        (n.return = t),
                        (n.sibling = r),
                        (t.child = n),
                        r
                      );
                    })(e, t, o.children, o.fallback, n)),
                    (a = t.child),
                    (i = e.child.memoizedState),
                    (a.memoizedState = null === i ? { baseLanes: n } : { baseLanes: i.baseLanes | n }),
                    (a.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Qa),
                    o)
                  : ((n = (function(e, t, n, r) {
                      var o = e.child;
                      return (
                        (e = o.sibling),
                        (n = Hu(o, { mode: "visible", children: n })),
                        0 == (2 & t.mode) && (n.lanes = r),
                        (n.return = t),
                        (n.sibling = null),
                        null !== e && ((e.nextEffect = null), (e.flags = 8), (t.firstEffect = t.lastEffect = e)),
                        (t.child = n)
                      );
                    })(e, t, o.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Za(e, t, n, r) {
          var o = e.mode,
            i = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & o) && null !== i ? ((i.childLanes = 0), (i.pendingProps = t)) : (i = Gu(t, o, 0, null)),
            (n = qu(n, o, r, null)),
            (i.return = e),
            (n.return = e),
            (i.sibling = n),
            (e.child = i),
            n
          );
        }
        function Ja(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), oi(e.return, t);
        }
        function el(e, t, n, r, o, i) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: o,
                lastEffect: i,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = o),
              (a.lastEffect = i));
        }
        function tl(e, t, n) {
          var r = t.pendingProps,
            o = r.revealOrder,
            i = r.tail;
          if ((Da(e, t, r.children, n), 0 != (2 & (r = Di.current)))) (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ja(e, n);
                else if (19 === e.tag) Ja(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((so(Di, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (n = t.child, o = null; null !== n; )
                  null !== (e = n.alternate) && null === Ii(e) && (o = n), (n = n.sibling);
                null === (n = o) ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                  el(t, !1, o, n, i, t.lastEffect);
                break;
              case "backwards":
                for (n = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === Ii(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                el(t, !0, n, null, i, t.lastEffect);
                break;
              case "together":
                el(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function nl(e, t, n) {
          if ((null !== e && (t.dependencies = e.dependencies), (Il |= t.lanes), 0 != (n & t.childLanes))) {
            if (null !== e && t.child !== e.child) throw Error(a(153));
            if (null !== t.child) {
              for (n = Hu((e = t.child), e.pendingProps), t.child = n, n.return = t; null !== e.sibling; )
                (e = e.sibling), ((n = n.sibling = Hu(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function rl(e, t) {
          if (!Bi)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; ) null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; ) null !== n.alternate && (r = n), (n = n.sibling);
                null === r ? (t || null === e.tail ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
            }
        }
        function ol(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return yo(t.type) && vo(), null;
            case 3:
              return (
                Ai(),
                co(po),
                co(ho),
                Xi(),
                (r = t.stateNode).pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) || (Gi(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                null
              );
            case 5:
              Ri(t);
              var i = Li(Ti.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ya(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return null;
                }
                if (((e = Li(Ni.current)), Gi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var l = t.memoizedProps;
                  switch (((r[Kr] = t), (r[Zr] = l), n)) {
                    case "dialog":
                      Nr("cancel", r), Nr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Nr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Er.length; e++) Nr(Er[e], r);
                      break;
                    case "source":
                      Nr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Nr("error", r), Nr("load", r);
                      break;
                    case "details":
                      Nr("toggle", r);
                      break;
                    case "input":
                      ee(r, l), Nr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!l.multiple }), Nr("invalid", r);
                      break;
                    case "textarea":
                      ue(r, l), Nr("invalid", r);
                  }
                  for (var c in (xe(n, l), (e = null), l))
                    l.hasOwnProperty(c) &&
                      ((i = l[c]),
                      "children" === c
                        ? "string" == typeof i
                          ? r.textContent !== i && (e = ["children", i])
                          : "number" == typeof i && r.textContent !== "" + i && (e = ["children", "" + i])
                        : u.hasOwnProperty(c) && null != i && "onScroll" === c && Nr("scroll", r));
                  switch (n) {
                    case "input":
                      Q(r), re(r, l, !0);
                      break;
                    case "textarea":
                      Q(r), se(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof l.onClick && (r.onclick = Fr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((c = 9 === i.nodeType ? i : i.ownerDocument),
                    e === fe && (e = de(n)),
                    e === fe
                      ? "script" === n
                        ? (((e = c.createElement("div")).innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = c.createElement(n, { is: r.is }))
                        : ((e = c.createElement(n)),
                          "select" === n && ((c = e), r.multiple ? (c.multiple = !0) : r.size && (c.size = r.size)))
                      : (e = c.createElementNS(e, n)),
                    (e[Kr] = t),
                    (e[Zr] = r),
                    $a(e, t),
                    (t.stateNode = e),
                    (c = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Nr("cancel", e), Nr("close", e), (i = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Nr("load", e), (i = r);
                      break;
                    case "video":
                    case "audio":
                      for (i = 0; i < Er.length; i++) Nr(Er[i], e);
                      i = r;
                      break;
                    case "source":
                      Nr("error", e), (i = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Nr("error", e), Nr("load", e), (i = r);
                      break;
                    case "details":
                      Nr("toggle", e), (i = r);
                      break;
                    case "input":
                      ee(e, r), (i = J(e, r)), Nr("invalid", e);
                      break;
                    case "option":
                      i = ie(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (i = o({}, r, { value: void 0 })),
                        Nr("invalid", e);
                      break;
                    case "textarea":
                      ue(e, r), (i = le(e, r)), Nr("invalid", e);
                      break;
                    default:
                      i = r;
                  }
                  xe(n, i);
                  var s = i;
                  for (l in s)
                    if (s.hasOwnProperty(l)) {
                      var f = s[l];
                      "style" === l
                        ? _e(e, f)
                        : "dangerouslySetInnerHTML" === l
                        ? null != (f = f ? f.__html : void 0) && me(e, f)
                        : "children" === l
                        ? "string" == typeof f
                          ? ("textarea" !== n || "" !== f) && ye(e, f)
                          : "number" == typeof f && ye(e, "" + f)
                        : "suppressContentEditableWarning" !== l &&
                          "suppressHydrationWarning" !== l &&
                          "autoFocus" !== l &&
                          (u.hasOwnProperty(l)
                            ? null != f && "onScroll" === l && Nr("scroll", e)
                            : null != f && w(e, l, f, c));
                    }
                  switch (n) {
                    case "input":
                      Q(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Q(e), se(e);
                      break;
                    case "option":
                      null != r.value && e.setAttribute("value", "" + Y(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (l = r.value)
                          ? ae(e, !!r.multiple, l, !1)
                          : null != r.defaultValue && ae(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof i.onClick && (e.onclick = Fr);
                  }
                  Wr(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Xa(0, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode) throw Error(a(166));
                (n = Li(Ti.current)),
                  Li(Ni.current),
                  Gi(t)
                    ? ((r = t.stateNode), (n = t.memoizedProps), (r[Kr] = t), r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Kr] = t), (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                co(Di),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e ? void 0 !== t.memoizedProps.fallback && Gi(t) : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback) || 0 != (1 & Di.current)
                        ? 0 === zl && (zl = 3)
                        : ((0 !== zl && 3 !== zl) || (zl = 4),
                          null === Ml || (0 == (134217727 & Il) && 0 == (134217727 & Fl)) || gu(Ml, Ll))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return Ai(), null === e && Tr(t.stateNode.containerInfo), null;
            case 10:
              return ri(t), null;
            case 19:
              if ((co(Di), null === (r = t.memoizedState))) return null;
              if (((l = 0 != (64 & t.flags)), null === (c = r.rendering)))
                if (l) rl(r, !1);
                else {
                  if (0 !== zl || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = Ii(e))) {
                        for (
                          t.flags |= 64,
                            rl(r, !1),
                            null !== (l = c.updateQueue) && ((t.updateQueue = l), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((l = n).flags &= 2),
                            (l.nextEffect = null),
                            (l.firstEffect = null),
                            (l.lastEffect = null),
                            null === (c = l.alternate)
                              ? ((l.childLanes = 0),
                                (l.lanes = e),
                                (l.child = null),
                                (l.memoizedProps = null),
                                (l.memoizedState = null),
                                (l.updateQueue = null),
                                (l.dependencies = null),
                                (l.stateNode = null))
                              : ((l.childLanes = c.childLanes),
                                (l.lanes = c.lanes),
                                (l.child = c.child),
                                (l.memoizedProps = c.memoizedProps),
                                (l.memoizedState = c.memoizedState),
                                (l.updateQueue = c.updateQueue),
                                (l.type = c.type),
                                (e = c.dependencies),
                                (l.dependencies =
                                  null === e ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                            (n = n.sibling);
                        return so(Di, (1 & Di.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail && Ho() > Hl && ((t.flags |= 64), (l = !0), rl(r, !1), (t.lanes = 33554432));
                }
              else {
                if (!l)
                  if (null !== (e = Ii(c))) {
                    if (
                      ((t.flags |= 64),
                      (l = !0),
                      null !== (n = e.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                      rl(r, !0),
                      null === r.tail && "hidden" === r.tailMode && !c.alternate && !Bi)
                    )
                      return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null;
                  } else
                    2 * Ho() - r.renderingStartTime > Hl &&
                      1073741824 !== n &&
                      ((t.flags |= 64), (l = !0), rl(r, !1), (t.lanes = 33554432));
                r.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (n = r.last) ? (n.sibling = c) : (t.child = c), (r.last = c));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Ho()),
                  (n.sibling = null),
                  (t = Di.current),
                  so(Di, l ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                wu(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(a(156, t.tag));
        }
        function il(e) {
          switch (e.tag) {
            case 1:
              yo(e.type) && vo();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Ai(), co(po), co(ho), Xi(), 0 != (64 & (t = e.flags)))) throw Error(a(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return Ri(e), null;
            case 13:
              return co(Di), 4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 19:
              return co(Di), null;
            case 4:
              return Ai(), null;
            case 10:
              return ri(e), null;
            case 23:
            case 24:
              return wu(), null;
            default:
              return null;
          }
        }
        function al(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += G(r)), (r = r.return);
            } while (r);
            var o = n;
          } catch (e) {
            o = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function ll(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function() {
              throw e;
            });
          }
        }
        ($a = function(e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Ya = function(e, t, n, r) {
            var i = e.memoizedProps;
            if (i !== r) {
              (e = t.stateNode), Li(Ni.current);
              var a,
                l = null;
              switch (n) {
                case "input":
                  (i = J(e, i)), (r = J(e, r)), (l = []);
                  break;
                case "option":
                  (i = ie(e, i)), (r = ie(e, r)), (l = []);
                  break;
                case "select":
                  (i = o({}, i, { value: void 0 })), (r = o({}, r, { value: void 0 })), (l = []);
                  break;
                case "textarea":
                  (i = le(e, i)), (r = le(e, r)), (l = []);
                  break;
                default:
                  "function" != typeof i.onClick && "function" == typeof r.onClick && (e.onclick = Fr);
              }
              for (f in (xe(n, r), (n = null), i))
                if (!r.hasOwnProperty(f) && i.hasOwnProperty(f) && null != i[f])
                  if ("style" === f) {
                    var c = i[f];
                    for (a in c) c.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (u.hasOwnProperty(f) ? l || (l = []) : (l = l || []).push(f, null));
              for (f in r) {
                var s = r[f];
                if (((c = null != i ? i[f] : void 0), r.hasOwnProperty(f) && s !== c && (null != s || null != c)))
                  if ("style" === f)
                    if (c) {
                      for (a in c) !c.hasOwnProperty(a) || (s && s.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ""));
                      for (a in s) s.hasOwnProperty(a) && c[a] !== s[a] && (n || (n = {}), (n[a] = s[a]));
                    } else n || (l || (l = []), l.push(f, n)), (n = s);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((s = s ? s.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != s && c !== s && (l = l || []).push(f, s))
                      : "children" === f
                      ? ("string" != typeof s && "number" != typeof s) || (l = l || []).push(f, "" + s)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (u.hasOwnProperty(f)
                          ? (null != s && "onScroll" === f && Nr("scroll", e), l || c === s || (l = []))
                          : "object" == typeof s && null !== s && s.$$typeof === z
                          ? s.toString()
                          : (l = l || []).push(f, s));
              }
              n && (l = l || []).push("style", n);
              var f = l;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Xa = function(e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var ul = "function" == typeof WeakMap ? WeakMap : Map;
        function cl(e, t, n) {
          ((n = si(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function() {
              $l || (($l = !0), (Yl = r)), ll(0, t);
            }),
            n
          );
        }
        function sl(e, t, n) {
          (n = si(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var o = t.value;
            n.payload = function() {
              return ll(0, t), r(o);
            };
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" == typeof i.componentDidCatch &&
              (n.callback = function() {
                "function" != typeof r && (null === Xl ? (Xl = new Set([this])) : Xl.add(this), ll(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : "" });
              }),
            n
          );
        }
        var fl = "function" == typeof WeakSet ? WeakSet : Set;
        function dl(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                Du(e, t);
              }
            else t.current = null;
        }
        function hl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ko(t.type, n), r)),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Gr(t.stateNode.containerInfo));
          }
          throw Error(a(163));
        }
        function pl(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                e = t = t.next;
                do {
                  var o = e;
                  (r = o.next), 0 != (4 & (o = o.tag)) && 0 != (1 & o) && (Au(n, e), ju(n, e)), (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r = n.elementType === n.type ? t.memoizedProps : Ko(n.type, t.memoizedProps)),
                      e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                void (null !== (t = n.updateQueue) && pi(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                pi(n, t, e);
              }
              return;
            case 5:
              return (e = n.stateNode), void (null === t && 4 & n.flags && Wr(n.type, n.memoizedProps) && e.focus());
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n && ((n = n.memoizedState), null !== n && ((n = n.dehydrated), null !== n && _t(n))))
              );
          }
          throw Error(a(163));
        }
        function gl(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" == typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var o = n.memoizedProps.style;
                (o = null != o && o.hasOwnProperty("display") ? o.display : null), (r.style.display = we("display", o));
              }
            } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (((23 !== n.tag && 24 !== n.tag) || null === n.memoizedState || n === e) && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function ml(e, t) {
          if (So && "function" == typeof So.onCommitFiberUnmount)
            try {
              So.onCommitFiberUnmount(xo, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    o = r.destroy;
                  if (((r = r.tag), void 0 !== o))
                    if (0 != (4 & r)) Au(t, n);
                    else {
                      r = t;
                      try {
                        o();
                      } catch (e) {
                        Du(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if ((dl(t), "function" == typeof (e = t.stateNode).componentWillUnmount))
                try {
                  (e.props = t.memoizedProps), (e.state = t.memoizedState), e.componentWillUnmount();
                } catch (e) {
                  Du(t, e);
                }
              break;
            case 5:
              dl(t);
              break;
            case 4:
              kl(e, t);
          }
        }
        function yl(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function vl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function bl(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (vl(t)) break e;
              t = t.return;
            }
            throw Error(a(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(a(161));
          }
          16 & n.flags && (ye(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || vl(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag; ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? wl(e, n, t) : _l(e, n, t);
        }
        function wl(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o)
            (e = o ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) || null !== t.onclick || (t.onclick = Fr));
          else if (4 !== r && null !== (e = e.child))
            for (wl(e, t, n), e = e.sibling; null !== e; ) wl(e, t, n), (e = e.sibling);
        }
        function _l(e, t, n) {
          var r = e.tag,
            o = 5 === r || 6 === r;
          if (o) (e = o ? e.stateNode : e.stateNode.instance), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (_l(e, t, n), e = e.sibling; null !== e; ) _l(e, t, n), (e = e.sibling);
        }
        function kl(e, t) {
          for (var n, r, o = t, i = !1; ; ) {
            if (!i) {
              i = o.return;
              e: for (;;) {
                if (null === i) throw Error(a(160));
                switch (((n = i.stateNode), i.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                i = i.return;
              }
              i = !0;
            }
            if (5 === o.tag || 6 === o.tag) {
              e: for (var l = e, u = o, c = u; ; )
                if ((ml(l, c), null !== c.child && 4 !== c.tag)) (c.child.return = c), (c = c.child);
                else {
                  if (c === u) break e;
                  for (; null === c.sibling; ) {
                    if (null === c.return || c.return === u) break e;
                    c = c.return;
                  }
                  (c.sibling.return = c.return), (c = c.sibling);
                }
              r
                ? ((l = n), (u = o.stateNode), 8 === l.nodeType ? l.parentNode.removeChild(u) : l.removeChild(u))
                : n.removeChild(o.stateNode);
            } else if (4 === o.tag) {
              if (null !== o.child) {
                (n = o.stateNode.containerInfo), (r = !0), (o.child.return = o), (o = o.child);
                continue;
              }
            } else if ((ml(e, o), null !== o.child)) {
              (o.child.return = o), (o = o.child);
              continue;
            }
            if (o === t) break;
            for (; null === o.sibling; ) {
              if (null === o.return || o.return === t) return;
              4 === (o = o.return).tag && (i = !1);
            }
            (o.sibling.return = o.return), (o = o.sibling);
          }
        }
        function xl(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) && ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()), (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var o = null !== e ? e.memoizedProps : r;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    n[Zr] = r,
                      "input" === e && "radio" === r.type && null != r.name && te(n, r),
                      Se(e, o),
                      t = Se(e, r),
                      o = 0;
                    o < i.length;
                    o += 2
                  ) {
                    var l = i[o],
                      u = i[o + 1];
                    "style" === l
                      ? _e(n, u)
                      : "dangerouslySetInnerHTML" === l
                      ? me(n, u)
                      : "children" === l
                      ? ye(n, u)
                      : w(n, l, u, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      ce(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (i = r.value)
                          ? ae(n, !!r.multiple, i, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ae(n, !!r.multiple, r.defaultValue, !0)
                              : ae(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void ((n = t.stateNode).hydrate && ((n.hydrate = !1), _t(n.containerInfo)));
            case 13:
              return null !== t.memoizedState && ((Wl = Ho()), gl(t.child, !0)), void Sl(t);
            case 19:
              return void Sl(t);
            case 23:
            case 24:
              return void gl(t, null !== t.memoizedState);
          }
          throw Error(a(163));
        }
        function Sl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new fl()),
              t.forEach(function(t) {
                var r = Fu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function El(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Ol = Math.ceil,
          Cl = _.ReactCurrentDispatcher,
          Pl = _.ReactCurrentOwner,
          Nl = 0,
          Ml = null,
          Tl = null,
          Ll = 0,
          jl = 0,
          Al = uo(0),
          zl = 0,
          Rl = null,
          Dl = 0,
          Il = 0,
          Fl = 0,
          Ul = 0,
          Bl = null,
          Wl = 0,
          Hl = 1 / 0;
        function Vl() {
          Hl = Ho() + 500;
        }
        var ql,
          Gl = null,
          $l = !1,
          Yl = null,
          Xl = null,
          Ql = !1,
          Kl = null,
          Zl = 90,
          Jl = [],
          eu = [],
          tu = null,
          nu = 0,
          ru = null,
          ou = -1,
          iu = 0,
          au = 0,
          lu = null,
          uu = !1;
        function cu() {
          return 0 != (48 & Nl) ? Ho() : -1 !== ou ? ou : (ou = Ho());
        }
        function su(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Vo() ? 1 : 2;
          if ((0 === iu && (iu = Dl), 0 !== Qo.transition)) {
            0 !== au && (au = null !== Bl ? Bl.pendingLanes : 0), (e = iu);
            var t = 4186112 & ~au;
            return 0 == (t &= -t) && 0 == (t = (e = 4186112 & ~e) & -e) && (t = 8192), t;
          }
          return (
            (e = Vo()),
            (e = Ft(
              0 != (4 & Nl) && 98 === e
                ? 12
                : (e = (function(e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
              iu
            ))
          );
        }
        function fu(e, t, n) {
          if (50 < nu) throw ((nu = 0), (ru = null), Error(a(185)));
          if (null === (e = du(e, t))) return null;
          Wt(e, t, n), e === Ml && ((Fl |= t), 4 === zl && gu(e, Ll));
          var r = Vo();
          1 === t
            ? 0 != (8 & Nl) && 0 == (48 & Nl)
              ? mu(e)
              : (hu(e, n), 0 === Nl && (Vl(), Yo()))
            : (0 == (4 & Nl) || (98 !== r && 99 !== r) || (null === tu ? (tu = new Set([e])) : tu.add(e)), hu(e, n)),
            (Bl = e);
        }
        function du(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t), null !== (n = e.alternate) && (n.childLanes |= t), (n = e), (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function hu(e, t) {
          for (
            var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes;
            0 < l;

          ) {
            var u = 31 - Ht(l),
              c = 1 << u,
              s = i[u];
            if (-1 === s) {
              if (0 == (c & r) || 0 != (c & o)) {
                (s = t), Rt(c);
                var f = zt;
                i[u] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1;
              }
            } else s <= t && (e.expiredLanes |= c);
            l &= ~c;
          }
          if (((r = Dt(e, e === Ml ? Ll : 0)), (t = zt), 0 === r))
            null !== n && (n !== Do && Co(n), (e.callbackNode = null), (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== Do && Co(n);
            }
            15 === t
              ? ((n = mu.bind(null, e)), null === Fo ? ((Fo = [n]), (Uo = Oo(Lo, Xo))) : Fo.push(n), (n = Do))
              : 14 === t
              ? (n = $o(99, mu.bind(null, e)))
              : ((n = (function(e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(a(358, e));
                  }
                })(t)),
                (n = $o(n, pu.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function pu(e) {
          if (((ou = -1), (au = iu = 0), 0 != (48 & Nl))) throw Error(a(327));
          var t = e.callbackNode;
          if (Lu() && e.callbackNode !== t) return null;
          var n = Dt(e, e === Ml ? Ll : 0);
          if (0 === n) return null;
          var r = n,
            o = Nl;
          Nl |= 16;
          var i = xu();
          for ((Ml === e && Ll === r) || (Vl(), _u(e, r)); ; )
            try {
              Ou();
              break;
            } catch (t) {
              ku(e, t);
            }
          if (
            (ni(),
            (Cl.current = i),
            (Nl = o),
            null !== Tl ? (r = 0) : ((Ml = null), (Ll = 0), (r = zl)),
            0 != (Dl & Fl))
          )
            _u(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Nl |= 64), e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)), 0 !== (n = It(e)) && (r = Su(e, n))),
              1 === r)
            )
              throw ((t = Rl), _u(e, 0), gu(e, n), hu(e, Ho()), t);
            switch (((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
              case 5:
                Nu(e);
                break;
              case 3:
                if ((gu(e, n), (62914560 & n) === n && 10 < (r = Wl + 500 - Ho()))) {
                  if (0 !== Dt(e, 0)) break;
                  if (((o = e.suspendedLanes) & n) !== n) {
                    cu(), (e.pingedLanes |= e.suspendedLanes & o);
                    break;
                  }
                  e.timeoutHandle = Vr(Nu.bind(null, e), r);
                  break;
                }
                Nu(e);
                break;
              case 4:
                if ((gu(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, o = -1; 0 < n; ) {
                  var l = 31 - Ht(n);
                  (i = 1 << l), (l = r[l]) > o && (o = l), (n &= ~i);
                }
                if (
                  ((n = o),
                  10 <
                    (n =
                      (120 > (n = Ho() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Ol(n / 1960)) - n))
                ) {
                  e.timeoutHandle = Vr(Nu.bind(null, e), n);
                  break;
                }
                Nu(e);
                break;
              default:
                throw Error(a(329));
            }
          }
          return hu(e, Ho()), e.callbackNode === t ? pu.bind(null, e) : null;
        }
        function gu(e, t) {
          for (t &= ~Ul, t &= ~Fl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
            var n = 31 - Ht(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function mu(e) {
          if (0 != (48 & Nl)) throw Error(a(327));
          if ((Lu(), e === Ml && 0 != (e.expiredLanes & Ll))) {
            var t = Ll,
              n = Su(e, t);
            0 != (Dl & Fl) && (n = Su(e, (t = Dt(e, t))));
          } else n = Su(e, (t = Dt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Nl |= 64), e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)), 0 !== (t = It(e)) && (n = Su(e, t))),
            1 === n)
          )
            throw ((n = Rl), _u(e, 0), gu(e, t), hu(e, Ho()), n);
          return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Nu(e), hu(e, Ho()), null;
        }
        function yu(e, t) {
          var n = Nl;
          Nl |= 1;
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && (Vl(), Yo());
          }
        }
        function vu(e, t) {
          var n = Nl;
          (Nl &= -2), (Nl |= 8);
          try {
            return e(t);
          } finally {
            0 === (Nl = n) && (Vl(), Yo());
          }
        }
        function bu(e, t) {
          so(Al, jl), (jl |= t), (Dl |= t);
        }
        function wu() {
          (jl = Al.current), co(Al);
        }
        function _u(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), qr(n)), null !== Tl))
            for (n = Tl.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && vo();
                  break;
                case 3:
                  Ai(), co(po), co(ho), Xi();
                  break;
                case 5:
                  Ri(r);
                  break;
                case 4:
                  Ai();
                  break;
                case 13:
                case 19:
                  co(Di);
                  break;
                case 10:
                  ri(r);
                  break;
                case 23:
                case 24:
                  wu();
              }
              n = n.return;
            }
          (Ml = e), (Tl = Hu(e.current, null)), (Ll = jl = Dl = t), (zl = 0), (Rl = null), (Ul = Fl = Il = 0);
        }
        function ku(e, t) {
          for (;;) {
            var n = Tl;
            try {
              if ((ni(), (Qi.current = Ta), na)) {
                for (var r = Ji.memoizedState; null !== r; ) {
                  var o = r.queue;
                  null !== o && (o.pending = null), (r = r.next);
                }
                na = !1;
              }
              if (((Zi = 0), (ta = ea = Ji = null), (ra = !1), (Pl.current = null), null === n || null === n.return)) {
                (zl = 1), (Rl = t), (Tl = null);
                break;
              }
              e: {
                var i = e,
                  a = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Ll),
                  (l.flags |= 2048),
                  (l.firstEffect = l.lastEffect = null),
                  null !== u && "object" == typeof u && "function" == typeof u.then)
                ) {
                  var c = u;
                  if (0 == (2 & l.mode)) {
                    var s = l.alternate;
                    s
                      ? ((l.updateQueue = s.updateQueue), (l.memoizedState = s.memoizedState), (l.lanes = s.lanes))
                      : ((l.updateQueue = null), (l.memoizedState = null));
                  }
                  var f = 0 != (1 & Di.current),
                    d = a;
                  do {
                    var h;
                    if ((h = 13 === d.tag)) {
                      var p = d.memoizedState;
                      if (null !== p) h = null !== p.dehydrated;
                      else {
                        var g = d.memoizedProps;
                        h = void 0 !== g.fallback && (!0 !== g.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (h) {
                      var m = d.updateQueue;
                      if (null === m) {
                        var y = new Set();
                        y.add(c), (d.updateQueue = y);
                      } else m.add(c);
                      if (0 == (2 & d.mode)) {
                        if (((d.flags |= 64), (l.flags |= 16384), (l.flags &= -2981), 1 === l.tag))
                          if (null === l.alternate) l.tag = 17;
                          else {
                            var v = si(-1, 1);
                            (v.tag = 2), fi(l, v);
                          }
                        l.lanes |= 1;
                        break e;
                      }
                      (u = void 0), (l = t);
                      var b = i.pingCache;
                      if (
                        (null === b
                          ? ((b = i.pingCache = new ul()), (u = new Set()), b.set(c, u))
                          : void 0 === (u = b.get(c)) && ((u = new Set()), b.set(c, u)),
                        !u.has(l))
                      ) {
                        u.add(l);
                        var w = Iu.bind(null, i, c, l);
                        c.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  u = Error(
                    ($(l.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== zl && (zl = 2), (u = al(u, l)), (d = a);
                do {
                  switch (d.tag) {
                    case 3:
                      (i = u), (d.flags |= 4096), (t &= -t), (d.lanes |= t), di(d, cl(0, i, t));
                      break e;
                    case 1:
                      i = u;
                      var _ = d.type,
                        k = d.stateNode;
                      if (
                        0 == (64 & d.flags) &&
                        ("function" == typeof _.getDerivedStateFromError ||
                          (null !== k && "function" == typeof k.componentDidCatch && (null === Xl || !Xl.has(k))))
                      ) {
                        (d.flags |= 4096), (t &= -t), (d.lanes |= t), di(d, sl(d, i, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Pu(n);
            } catch (e) {
              (t = e), Tl === n && null !== n && (Tl = n = n.return);
              continue;
            }
            break;
          }
        }
        function xu() {
          var e = Cl.current;
          return (Cl.current = Ta), null === e ? Ta : e;
        }
        function Su(e, t) {
          var n = Nl;
          Nl |= 16;
          var r = xu();
          for ((Ml === e && Ll === t) || _u(e, t); ; )
            try {
              Eu();
              break;
            } catch (t) {
              ku(e, t);
            }
          if ((ni(), (Nl = n), (Cl.current = r), null !== Tl)) throw Error(a(261));
          return (Ml = null), (Ll = 0), zl;
        }
        function Eu() {
          for (; null !== Tl; ) Cu(Tl);
        }
        function Ou() {
          for (; null !== Tl && !Po(); ) Cu(Tl);
        }
        function Cu(e) {
          var t = ql(e.alternate, e, jl);
          (e.memoizedProps = e.pendingProps), null === t ? Pu(e) : (Tl = t), (Pl.current = null);
        }
        function Pu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = ol(n, t, jl))) return void (Tl = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & jl) ||
                0 == (4 & n.mode)
              ) {
                for (var r = 0, o = n.child; null !== o; ) (r |= o.lanes | o.childLanes), (o = o.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect ? (e.lastEffect.nextEffect = t) : (e.firstEffect = t), (e.lastEffect = t)));
            } else {
              if (null !== (n = il(t))) return (n.flags &= 2047), void (Tl = n);
              null !== e && ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Tl = t);
            Tl = t = e;
          } while (null !== t);
          0 === zl && (zl = 5);
        }
        function Nu(e) {
          var t = Vo();
          return Go(99, Mu.bind(null, e, t)), null;
        }
        function Mu(e, t) {
          do {
            Lu();
          } while (null !== Kl);
          if (0 != (48 & Nl)) throw Error(a(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(a(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            o = r,
            i = e.pendingLanes & ~o;
          (e.pendingLanes = o),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= o),
            (e.mutableReadLanes &= o),
            (e.entangledLanes &= o),
            (o = e.entanglements);
          for (var l = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
            var c = 31 - Ht(i),
              s = 1 << c;
            (o[c] = 0), (l[c] = -1), (u[c] = -1), (i &= ~s);
          }
          if (
            (null !== tu && 0 == (24 & r) && tu.has(e) && tu.delete(e),
            e === Ml && ((Tl = Ml = null), (Ll = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (((o = Nl), (Nl |= 32), (Pl.current = null), (Ur = Yt), mr((l = gr())))) {
              if ("selectionStart" in l) u = { start: l.selectionStart, end: l.selectionEnd };
              else
                e: if (
                  ((u = ((u = l.ownerDocument) && u.defaultView) || window),
                  (s = u.getSelection && u.getSelection()) && 0 !== s.rangeCount)
                ) {
                  (u = s.anchorNode), (i = s.anchorOffset), (c = s.focusNode), (s = s.focusOffset);
                  try {
                    u.nodeType, c.nodeType;
                  } catch (e) {
                    u = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    h = -1,
                    p = 0,
                    g = 0,
                    m = l,
                    y = null;
                  t: for (;;) {
                    for (
                      var v;
                      m !== u || (0 !== i && 3 !== m.nodeType) || (d = f + i),
                        m !== c || (0 !== s && 3 !== m.nodeType) || (h = f + s),
                        3 === m.nodeType && (f += m.nodeValue.length),
                        null !== (v = m.firstChild);

                    )
                      (y = m), (m = v);
                    for (;;) {
                      if (m === l) break t;
                      if (
                        (y === u && ++p === i && (d = f), y === c && ++g === s && (h = f), null !== (v = m.nextSibling))
                      )
                        break;
                      y = (m = y).parentNode;
                    }
                    m = v;
                  }
                  u = -1 === d || -1 === h ? null : { start: d, end: h };
                } else u = null;
              u = u || { start: 0, end: 0 };
            } else u = null;
            (Br = { focusedElem: l, selectionRange: u }), (Yt = !1), (lu = null), (uu = !1), (Gl = r);
            do {
              try {
                Tu();
              } catch (e) {
                if (null === Gl) throw Error(a(330));
                Du(Gl, e), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (lu = null), (Gl = r);
            do {
              try {
                for (l = e; null !== Gl; ) {
                  var b = Gl.flags;
                  if ((16 & b && ye(Gl.stateNode, ""), 128 & b)) {
                    var w = Gl.alternate;
                    if (null !== w) {
                      var _ = w.ref;
                      null !== _ && ("function" == typeof _ ? _(null) : (_.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      bl(Gl), (Gl.flags &= -3);
                      break;
                    case 6:
                      bl(Gl), (Gl.flags &= -3), xl(Gl.alternate, Gl);
                      break;
                    case 1024:
                      Gl.flags &= -1025;
                      break;
                    case 1028:
                      (Gl.flags &= -1025), xl(Gl.alternate, Gl);
                      break;
                    case 4:
                      xl(Gl.alternate, Gl);
                      break;
                    case 8:
                      kl(l, (u = Gl));
                      var k = u.alternate;
                      yl(u), null !== k && yl(k);
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (e) {
                if (null === Gl) throw Error(a(330));
                Du(Gl, e), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            if (
              ((_ = Br),
              (w = gr()),
              (b = _.focusedElem),
              (l = _.selectionRange),
              w !== b && b && b.ownerDocument && pr(b.ownerDocument.documentElement, b))
            ) {
              null !== l &&
                mr(b) &&
                ((w = l.start),
                void 0 === (_ = l.end) && (_ = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w), (b.selectionEnd = Math.min(_, b.value.length)))
                  : (_ = ((w = b.ownerDocument || document) && w.defaultView) || window).getSelection &&
                    ((_ = _.getSelection()),
                    (u = b.textContent.length),
                    (k = Math.min(l.start, u)),
                    (l = void 0 === l.end ? k : Math.min(l.end, u)),
                    !_.extend && k > l && ((u = l), (l = k), (k = u)),
                    (u = hr(b, k)),
                    (i = hr(b, l)),
                    u &&
                      i &&
                      (1 !== _.rangeCount ||
                        _.anchorNode !== u.node ||
                        _.anchorOffset !== u.offset ||
                        _.focusNode !== i.node ||
                        _.focusOffset !== i.offset) &&
                      ((w = w.createRange()).setStart(u.node, u.offset),
                      _.removeAllRanges(),
                      k > l
                        ? (_.addRange(w), _.extend(i.node, i.offset))
                        : (w.setEnd(i.node, i.offset), _.addRange(w))))),
                (w = []);
              for (_ = b; (_ = _.parentNode); )
                1 === _.nodeType && w.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
              for ("function" == typeof b.focus && b.focus(), b = 0; b < w.length; b++)
                ((_ = w[b]).element.scrollLeft = _.left), (_.element.scrollTop = _.top);
            }
            (Yt = !!Ur), (Br = Ur = null), (e.current = n), (Gl = r);
            do {
              try {
                for (b = e; null !== Gl; ) {
                  var x = Gl.flags;
                  if ((36 & x && pl(b, Gl.alternate, Gl), 128 & x)) {
                    w = void 0;
                    var S = Gl.ref;
                    if (null !== S) {
                      var E = Gl.stateNode;
                      Gl.tag, (w = E), "function" == typeof S ? S(w) : (S.current = w);
                    }
                  }
                  Gl = Gl.nextEffect;
                }
              } catch (e) {
                if (null === Gl) throw Error(a(330));
                Du(Gl, e), (Gl = Gl.nextEffect);
              }
            } while (null !== Gl);
            (Gl = null), Io(), (Nl = o);
          } else e.current = n;
          if (Ql) (Ql = !1), (Kl = e), (Zl = t);
          else
            for (Gl = r; null !== Gl; )
              (t = Gl.nextEffect),
                (Gl.nextEffect = null),
                8 & Gl.flags && (((x = Gl).sibling = null), (x.stateNode = null)),
                (Gl = t);
          if (
            (0 === (r = e.pendingLanes) && (Xl = null),
            1 === r ? (e === ru ? nu++ : ((nu = 0), (ru = e))) : (nu = 0),
            (n = n.stateNode),
            So && "function" == typeof So.onCommitFiberRoot)
          )
            try {
              So.onCommitFiberRoot(xo, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((hu(e, Ho()), $l)) throw (($l = !1), (e = Yl), (Yl = null), e);
          return 0 != (8 & Nl) || Yo(), null;
        }
        function Tu() {
          for (; null !== Gl; ) {
            var e = Gl.alternate;
            uu ||
              null === lu ||
              (0 != (8 & Gl.flags) ? Je(Gl, lu) && (uu = !0) : 13 === Gl.tag && El(e, Gl) && Je(Gl, lu) && (uu = !0));
            var t = Gl.flags;
            0 != (256 & t) && hl(e, Gl),
              0 == (512 & t) ||
                Ql ||
                ((Ql = !0),
                $o(97, function() {
                  return Lu(), null;
                })),
              (Gl = Gl.nextEffect);
          }
        }
        function Lu() {
          if (90 !== Zl) {
            var e = 97 < Zl ? 97 : Zl;
            return (Zl = 90), Go(e, zu);
          }
          return !1;
        }
        function ju(e, t) {
          Jl.push(t, e),
            Ql ||
              ((Ql = !0),
              $o(97, function() {
                return Lu(), null;
              }));
        }
        function Au(e, t) {
          eu.push(t, e),
            Ql ||
              ((Ql = !0),
              $o(97, function() {
                return Lu(), null;
              }));
        }
        function zu() {
          if (null === Kl) return !1;
          var e = Kl;
          if (((Kl = null), 0 != (48 & Nl))) throw Error(a(331));
          var t = Nl;
          Nl |= 32;
          var n = eu;
          eu = [];
          for (var r = 0; r < n.length; r += 2) {
            var o = n[r],
              i = n[r + 1],
              l = o.destroy;
            if (((o.destroy = void 0), "function" == typeof l))
              try {
                l();
              } catch (e) {
                if (null === i) throw Error(a(330));
                Du(i, e);
              }
          }
          for (n = Jl, Jl = [], r = 0; r < n.length; r += 2) {
            (o = n[r]), (i = n[r + 1]);
            try {
              var u = o.create;
              o.destroy = u();
            } catch (e) {
              if (null === i) throw Error(a(330));
              Du(i, e);
            }
          }
          for (u = e.current.firstEffect; null !== u; )
            (e = u.nextEffect),
              (u.nextEffect = null),
              8 & u.flags && ((u.sibling = null), (u.stateNode = null)),
              (u = e);
          return (Nl = t), Yo(), !0;
        }
        function Ru(e, t, n) {
          fi(e, (t = cl(0, (t = al(n, t)), 1))), (t = cu()), null !== (e = du(e, 1)) && (Wt(e, 1, t), hu(e, t));
        }
        function Du(e, t) {
          if (3 === e.tag) Ru(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Ru(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch && (null === Xl || !Xl.has(r)))
                ) {
                  var o = sl(n, (e = al(t, e)), 1);
                  if ((fi(n, o), (o = cu()), null !== (n = du(n, 1)))) Wt(n, 1, o), hu(n, o);
                  else if ("function" == typeof r.componentDidCatch && (null === Xl || !Xl.has(r)))
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Iu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = cu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ml === e &&
              (Ll & n) === n &&
              (4 === zl || (3 === zl && (62914560 & Ll) === Ll && 500 > Ho() - Wl) ? _u(e, 0) : (Ul |= n)),
            hu(e, t);
        }
        function Fu(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 == (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Vo() ? 1 : 2)
                : (0 === iu && (iu = Dl), 0 === (t = Ut(62914560 & ~iu)) && (t = 4194304))),
            (n = cu()),
            null !== (e = du(e, t)) && (Wt(e, t, n), hu(e, n));
        }
        function Uu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Bu(e, t, n, r) {
          return new Uu(e, t, n, r);
        }
        function Wu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Hu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Bu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Vu(e, t, n, r, o, i) {
          var l = 2;
          if (((r = e), "function" == typeof e)) Wu(e) && (l = 1);
          else if ("string" == typeof e) l = 5;
          else
            e: switch (e) {
              case S:
                return qu(n.children, o, i, t);
              case R:
                (l = 8), (o |= 16);
                break;
              case E:
                (l = 8), (o |= 1);
                break;
              case O:
                return ((e = Bu(12, n, t, 8 | o)).elementType = O), (e.type = O), (e.lanes = i), e;
              case M:
                return ((e = Bu(13, n, t, o)).type = M), (e.elementType = M), (e.lanes = i), e;
              case T:
                return ((e = Bu(19, n, t, o)).elementType = T), (e.lanes = i), e;
              case D:
                return Gu(n, o, i, t);
              case I:
                return ((e = Bu(24, n, t, o)).elementType = I), (e.lanes = i), e;
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case P:
                      l = 9;
                      break e;
                    case N:
                      l = 11;
                      break e;
                    case L:
                      l = 14;
                      break e;
                    case j:
                      (l = 16), (r = null);
                      break e;
                    case A:
                      l = 22;
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return ((t = Bu(l, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t;
        }
        function qu(e, t, n, r) {
          return ((e = Bu(7, e, r, t)).lanes = n), e;
        }
        function Gu(e, t, n, r) {
          return ((e = Bu(23, e, r, t)).elementType = D), (e.lanes = n), e;
        }
        function $u(e, t, n) {
          return ((e = Bu(6, e, null, t)).lanes = n), e;
        }
        function Yu(e, t, n) {
          return (
            ((t = Bu(4, null !== e.children ? e.children : [], e.key, t)).lanes = n),
            (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
            t
          );
        }
        function Xu(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Bt(0)),
            (this.expirationTimes = Bt(-1)),
            (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
            (this.entanglements = Bt(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Qu(e, t, n) {
          var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
          return { $$typeof: x, key: null == r ? null : "" + r, children: e, containerInfo: t, implementation: n };
        }
        function Ku(e, t, n, r) {
          var o = t.current,
            i = cu(),
            l = su(o);
          e: if (n) {
            t: {
              if (Xe((n = n._reactInternals)) !== n || 1 !== n.tag) throw Error(a(170));
              var u = n;
              do {
                switch (u.tag) {
                  case 3:
                    u = u.stateNode.context;
                    break t;
                  case 1:
                    if (yo(u.type)) {
                      u = u.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                u = u.return;
              } while (null !== u);
              throw Error(a(171));
            }
            if (1 === n.tag) {
              var c = n.type;
              if (yo(c)) {
                n = wo(n, c, u);
                break e;
              }
            }
            n = u;
          } else n = fo;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = si(i, l)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            fi(o, t),
            fu(o, l, i),
            l
          );
        }
        function Zu(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function Ju(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function ec(e, t) {
          Ju(e, t), (e = e.alternate) && Ju(e, t);
        }
        function tc(e, t, n) {
          var r = (null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources) || null;
          if (
            ((n = new Xu(e, t, null != n && !0 === n.hydrate)),
            (t = Bu(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            ui(t),
            (e[Jr] = n.current),
            Tr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var o = (t = r[e])._getVersion;
              (o = o(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, o])
                  : n.mutableSourceEagerHydrationData.push(t, o);
            }
          this._internalRoot = n;
        }
        function nc(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function rc(e, t, n, r, o) {
          var i = n._reactRootContainer;
          if (i) {
            var a = i._internalRoot;
            if ("function" == typeof o) {
              var l = o;
              o = function() {
                var e = Zu(a);
                l.call(e);
              };
            }
            Ku(t, a, e, o);
          } else {
            if (
              ((i = n._reactRootContainer = (function(e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e ? (9 === e.nodeType ? e.documentElement : e.firstChild) : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new tc(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
              (a = i._internalRoot),
              "function" == typeof o)
            ) {
              var u = o;
              o = function() {
                var e = Zu(a);
                u.call(e);
              };
            }
            vu(function() {
              Ku(t, a, e, o);
            });
          }
          return Zu(a);
        }
        function oc(e, t) {
          var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
          if (!nc(t)) throw Error(a(200));
          return Qu(e, t, null, n);
        }
        (ql = function(e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || po.current) Ra = !0;
            else {
              if (0 == (n & r)) {
                switch (((Ra = !1), t.tag)) {
                  case 3:
                    Ga(t), $i();
                    break;
                  case 5:
                    zi(t);
                    break;
                  case 1:
                    yo(t.type) && _o(t);
                    break;
                  case 4:
                    ji(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var o = t.type._context;
                    so(Zo, o._currentValue), (o._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? Ka(e, t, n)
                        : (so(Di, 1 & Di.current), null !== (t = nl(e, t, n)) ? t.sibling : null);
                    so(Di, 1 & Di.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return tl(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (o = t.memoizedState) && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                      so(Di, Di.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Ba(e, t, n);
                }
                return nl(e, t, n);
              }
              Ra = 0 != (16384 & e.flags);
            }
          else Ra = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (o = mo(t, ho.current)),
                ii(t, n),
                (o = aa(null, t, r, e, o, n)),
                (t.flags |= 1),
                "object" == typeof o && null !== o && "function" == typeof o.render && void 0 === o.$$typeof)
              ) {
                if (((t.tag = 1), (t.memoizedState = null), (t.updateQueue = null), yo(r))) {
                  var i = !0;
                  _o(t);
                } else i = !1;
                (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null), ui(t);
                var l = r.getDerivedStateFromProps;
                "function" == typeof l && mi(t, r, l, e),
                  (o.updater = yi),
                  (t.stateNode = o),
                  (o._reactInternals = t),
                  _i(t, r, e, n),
                  (t = qa(null, t, r, !0, i, n));
              } else (t.tag = 0), Da(null, t, o, n), (t = t.child);
              return t;
            case 16:
              o = t.elementType;
              e: {
                switch (
                  (null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                  (e = t.pendingProps),
                  (o = (i = o._init)(o._payload)),
                  (t.type = o),
                  (i = t.tag = (function(e) {
                    if ("function" == typeof e) return Wu(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === N) return 11;
                      if (e === L) return 14;
                    }
                    return 2;
                  })(o)),
                  (e = Ko(o, e)),
                  i)
                ) {
                  case 0:
                    t = Ha(null, t, o, e, n);
                    break e;
                  case 1:
                    t = Va(null, t, o, e, n);
                    break e;
                  case 11:
                    t = Ia(null, t, o, e, n);
                    break e;
                  case 14:
                    t = Fa(null, t, o, Ko(o.type, e), r, n);
                    break e;
                }
                throw Error(a(306, o, ""));
              }
              return t;
            case 0:
              return (r = t.type), (o = t.pendingProps), Ha(e, t, r, (o = t.elementType === r ? o : Ko(r, o)), n);
            case 1:
              return (r = t.type), (o = t.pendingProps), Va(e, t, r, (o = t.elementType === r ? o : Ko(r, o)), n);
            case 3:
              if ((Ga(t), (r = t.updateQueue), null === e || null === r)) throw Error(a(282));
              if (
                ((r = t.pendingProps),
                (o = null !== (o = t.memoizedState) ? o.element : null),
                ci(e, t),
                hi(t, r, null, n),
                (r = t.memoizedState.element) === o)
              )
                $i(), (t = nl(e, t, n));
              else {
                if (
                  ((i = (o = t.stateNode).hydrate) &&
                    ((Ui = $r(t.stateNode.containerInfo.firstChild)), (Fi = t), (i = Bi = !0)),
                  i)
                ) {
                  if (null != (e = o.mutableSourceEagerHydrationData))
                    for (o = 0; o < e.length; o += 2) ((i = e[o])._workInProgressVersionPrimary = e[o + 1]), Yi.push(i);
                  for (n = Ci(t, null, r, n), t.child = n; n; ) (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Da(e, t, r, n), $i();
                t = t.child;
              }
              return t;
            case 5:
              return (
                zi(t),
                null === e && Vi(t),
                (r = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                Hr(r, o) ? (l = null) : null !== i && Hr(r, i) && (t.flags |= 16),
                Wa(e, t),
                Da(e, t, l, n),
                t.child
              );
            case 6:
              return null === e && Vi(t), null;
            case 13:
              return Ka(e, t, n);
            case 4:
              return (
                ji(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Oi(t, null, r, n)) : Da(e, t, r, n),
                t.child
              );
            case 11:
              return (r = t.type), (o = t.pendingProps), Ia(e, t, r, (o = t.elementType === r ? o : Ko(r, o)), n);
            case 7:
              return Da(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Da(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context), (o = t.pendingProps), (l = t.memoizedProps), (i = o.value);
                var u = t.type._context;
                if ((so(Zo, u._currentValue), (u._currentValue = i), null !== l))
                  if (
                    ((u = l.value),
                    0 ==
                      (i = cr(u, i)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(u, i) : 1073741823)))
                  ) {
                    if (l.children === o.children && !po.current) {
                      t = nl(e, t, n);
                      break e;
                    }
                  } else
                    for (null !== (u = t.child) && (u.return = t); null !== u; ) {
                      var c = u.dependencies;
                      if (null !== c) {
                        l = u.child;
                        for (var s = c.firstContext; null !== s; ) {
                          if (s.context === r && 0 != (s.observedBits & i)) {
                            1 === u.tag && (((s = si(-1, n & -n)).tag = 2), fi(u, s)),
                              (u.lanes |= n),
                              null !== (s = u.alternate) && (s.lanes |= n),
                              oi(u.return, n),
                              (c.lanes |= n);
                            break;
                          }
                          s = s.next;
                        }
                      } else l = 10 === u.tag && u.type === t.type ? null : u.child;
                      if (null !== l) l.return = u;
                      else
                        for (l = u; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (u = l.sibling)) {
                            (u.return = l.return), (l = u);
                            break;
                          }
                          l = l.return;
                        }
                      u = l;
                    }
                Da(e, t, o.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (r = (i = t.pendingProps).children),
                ii(t, n),
                (r = r((o = ai(o, i.unstable_observedBits)))),
                (t.flags |= 1),
                Da(e, t, r, n),
                t.child
              );
            case 14:
              return (i = Ko((o = t.type), t.pendingProps)), Fa(e, t, o, (i = Ko(o.type, i)), r, n);
            case 15:
              return Ua(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Ko(r, o)),
                null !== e && ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                yo(r) ? ((e = !0), _o(t)) : (e = !1),
                ii(t, n),
                bi(t, r, o),
                _i(t, r, o, n),
                qa(null, t, r, !0, e, n)
              );
            case 19:
              return tl(e, t, n);
            case 23:
            case 24:
              return Ba(e, t, n);
          }
          throw Error(a(156, t.tag));
        }),
          (tc.prototype.render = function(e) {
            Ku(e, this._internalRoot, null, null);
          }),
          (tc.prototype.unmount = function() {
            var e = this._internalRoot,
              t = e.containerInfo;
            Ku(null, e, null, function() {
              t[Jr] = null;
            });
          }),
          (et = function(e) {
            13 === e.tag && (fu(e, 4, cu()), ec(e, 4));
          }),
          (tt = function(e) {
            13 === e.tag && (fu(e, 67108864, cu()), ec(e, 67108864));
          }),
          (nt = function(e) {
            if (13 === e.tag) {
              var t = cu(),
                n = su(e);
              fu(e, n, t), ec(e, n);
            }
          }),
          (rt = function(e, t) {
            return t();
          }),
          (Oe = function(e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var o = oo(r);
                      if (!o) throw Error(a(90));
                      K(r), ne(r, o);
                    }
                  }
                }
                break;
              case "textarea":
                ce(e, n);
                break;
              case "select":
                null != (t = n.value) && ae(e, !!n.multiple, t, !1);
            }
          }),
          (Le = yu),
          (je = function(e, t, n, r, o) {
            var i = Nl;
            Nl |= 4;
            try {
              return Go(98, e.bind(null, t, n, r, o));
            } finally {
              0 === (Nl = i) && (Vl(), Yo());
            }
          }),
          (Ae = function() {
            0 == (49 & Nl) &&
              ((function() {
                if (null !== tu) {
                  var e = tu;
                  (tu = null),
                    e.forEach(function(e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), hu(e, Ho());
                    });
                }
                Yo();
              })(),
              Lu());
          }),
          (ze = function(e, t) {
            var n = Nl;
            Nl |= 2;
            try {
              return e(t);
            } finally {
              0 === (Nl = n) && (Vl(), Yo());
            }
          });
        var ic = { Events: [no, ro, oo, Me, Te, Lu, { current: !1 }] },
          ac = { findFiberByHostInstance: to, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" },
          lc = {
            bundleType: ac.bundleType,
            version: ac.version,
            rendererPackageName: ac.rendererPackageName,
            rendererConfig: ac.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: _.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
              return null === (e = Ze(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ac.findFiberByHostInstance ||
              function() {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var uc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!uc.isDisabled && uc.supportsFiber)
            try {
              (xo = uc.inject(lc)), (So = uc);
            } catch (ge) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ic),
          (t.createPortal = oc),
          (t.findDOMNode = function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(a(188));
              throw Error(a(268, Object.keys(e)));
            }
            return null === (e = Ze(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function(e, t) {
            var n = Nl;
            if (0 != (48 & n)) return e(t);
            Nl |= 1;
            try {
              if (e) return Go(99, e.bind(null, t));
            } finally {
              (Nl = n), Yo();
            }
          }),
          (t.hydrate = function(e, t, n) {
            if (!nc(t)) throw Error(a(200));
            return rc(null, e, t, !0, n);
          }),
          (t.render = function(e, t, n) {
            if (!nc(t)) throw Error(a(200));
            return rc(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function(e) {
            if (!nc(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (vu(function() {
                rc(null, null, e, !1, function() {
                  (e._reactRootContainer = null), (e[Jr] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = yu),
          (t.unstable_createPortal = function(e, t) {
            return oc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null);
          }),
          (t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
            if (!nc(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return rc(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      935: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(448));
      },
      203: (e, t) => {
        "use strict";
        var n, r, o, i;
        if ("object" == typeof performance && "function" == typeof performance.now) {
          var a = performance;
          t.unstable_now = function() {
            return a.now();
          };
        } else {
          var l = Date,
            u = l.now();
          t.unstable_now = function() {
            return l.now() - u;
          };
        }
        if ("undefined" == typeof window || "function" != typeof MessageChannel) {
          var c = null,
            s = null,
            f = function() {
              if (null !== c)
                try {
                  var e = t.unstable_now();
                  c(!0, e), (c = null);
                } catch (e) {
                  throw (setTimeout(f, 0), e);
                }
            };
          (n = function(e) {
            null !== c ? setTimeout(n, 0, e) : ((c = e), setTimeout(f, 0));
          }),
            (r = function(e, t) {
              s = setTimeout(e, t);
            }),
            (o = function() {
              clearTimeout(s);
            }),
            (t.unstable_shouldYield = function() {
              return !1;
            }),
            (i = t.unstable_forceFrameRate = function() {});
        } else {
          var d = window.setTimeout,
            h = window.clearTimeout;
          if ("undefined" != typeof console) {
            var p = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" != typeof p &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var g = !1,
            m = null,
            y = -1,
            v = 5,
            b = 0;
          (t.unstable_shouldYield = function() {
            return t.unstable_now() >= b;
          }),
            (i = function() {}),
            (t.unstable_forceFrameRate = function(e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (v = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            _ = w.port2;
          (w.port1.onmessage = function() {
            if (null !== m) {
              var e = t.unstable_now();
              b = e + v;
              try {
                m(!0, e) ? _.postMessage(null) : ((g = !1), (m = null));
              } catch (e) {
                throw (_.postMessage(null), e);
              }
            } else g = !1;
          }),
            (n = function(e) {
              (m = e), g || ((g = !0), _.postMessage(null));
            }),
            (r = function(e, n) {
              y = d(function() {
                e(t.unstable_now());
              }, n);
            }),
            (o = function() {
              h(y), (y = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              o = e[r];
            if (!(void 0 !== o && 0 < E(o, t))) break e;
            (e[r] = t), (e[n] = o), (n = r);
          }
        }
        function x(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function S(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, o = e.length; r < o; ) {
                var i = 2 * (r + 1) - 1,
                  a = e[i],
                  l = i + 1,
                  u = e[l];
                if (void 0 !== a && 0 > E(a, n))
                  void 0 !== u && 0 > E(u, a) ? ((e[r] = u), (e[l] = n), (r = l)) : ((e[r] = a), (e[i] = n), (r = i));
                else {
                  if (!(void 0 !== u && 0 > E(u, n))) break e;
                  (e[r] = u), (e[l] = n), (r = l);
                }
              }
            }
            return t;
          }
          return null;
        }
        function E(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var O = [],
          C = [],
          P = 1,
          N = null,
          M = 3,
          T = !1,
          L = !1,
          j = !1;
        function A(e) {
          for (var t = x(C); null !== t; ) {
            if (null === t.callback) S(C);
            else {
              if (!(t.startTime <= e)) break;
              S(C), (t.sortIndex = t.expirationTime), k(O, t);
            }
            t = x(C);
          }
        }
        function z(e) {
          if (((j = !1), A(e), !L))
            if (null !== x(O)) (L = !0), n(R);
            else {
              var t = x(C);
              null !== t && r(z, t.startTime - e);
            }
        }
        function R(e, n) {
          (L = !1), j && ((j = !1), o()), (T = !0);
          var i = M;
          try {
            for (A(n), N = x(O); null !== N && (!(N.expirationTime > n) || (e && !t.unstable_shouldYield())); ) {
              var a = N.callback;
              if ("function" == typeof a) {
                (N.callback = null), (M = N.priorityLevel);
                var l = a(N.expirationTime <= n);
                (n = t.unstable_now()), "function" == typeof l ? (N.callback = l) : N === x(O) && S(O), A(n);
              } else S(O);
              N = x(O);
            }
            if (null !== N) var u = !0;
            else {
              var c = x(C);
              null !== c && r(z, c.startTime - n), (u = !1);
            }
            return u;
          } finally {
            (N = null), (M = i), (T = !1);
          }
        }
        var D = i;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function(e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function() {
            L || T || ((L = !0), n(R));
          }),
          (t.unstable_getCurrentPriorityLevel = function() {
            return M;
          }),
          (t.unstable_getFirstCallbackNode = function() {
            return x(O);
          }),
          (t.unstable_next = function(e) {
            switch (M) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = M;
            }
            var n = M;
            M = t;
            try {
              return e();
            } finally {
              M = n;
            }
          }),
          (t.unstable_pauseExecution = function() {}),
          (t.unstable_requestPaint = D),
          (t.unstable_runWithPriority = function(e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = M;
            M = e;
            try {
              return t();
            } finally {
              M = n;
            }
          }),
          (t.unstable_scheduleCallback = function(e, i, a) {
            var l = t.unstable_now();
            switch (
              ((a = "object" == typeof a && null !== a && "number" == typeof (a = a.delay) && 0 < a ? l + a : l), e)
            ) {
              case 1:
                var u = -1;
                break;
              case 2:
                u = 250;
                break;
              case 5:
                u = 1073741823;
                break;
              case 4:
                u = 1e4;
                break;
              default:
                u = 5e3;
            }
            return (
              (e = {
                id: P++,
                callback: i,
                priorityLevel: e,
                startTime: a,
                expirationTime: (u = a + u),
                sortIndex: -1,
              }),
              a > l
                ? ((e.sortIndex = a), k(C, e), null === x(O) && e === x(C) && (j ? o() : (j = !0), r(z, a - l)))
                : ((e.sortIndex = u), k(O, e), L || T || ((L = !0), n(R))),
              e
            );
          }),
          (t.unstable_wrapCallback = function(e) {
            var t = M;
            return function() {
              var n = M;
              M = t;
              try {
                return e.apply(this, arguments);
              } finally {
                M = n;
              }
            };
          });
      },
      142: (e, t, n) => {
        "use strict";
        e.exports = n(203);
      },
      408: (e, t, n) => {
        "use strict";
        var r = n(418),
          o = 60103,
          i = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var a = 60109,
          l = 60110,
          u = 60112;
        t.Suspense = 60113;
        var c = 60115,
          s = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (o = f("react.element")),
            (i = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (a = f("react.provider")),
            (l = f("react.context")),
            (u = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (c = f("react.memo")),
            (s = f("react.lazy"));
        }
        var d = "function" == typeof Symbol && Symbol.iterator;
        function h(e) {
          for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var p = {
            isMounted: function() {
              return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {},
          },
          g = {};
        function m(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p);
        }
        function y() {}
        function v(e, t, n) {
          (this.props = e), (this.context = t), (this.refs = g), (this.updater = n || p);
        }
        (m.prototype.isReactComponent = {}),
          (m.prototype.setState = function(e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e) throw Error(h(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (m.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = m.prototype);
        var b = (v.prototype = new y());
        (b.constructor = v), r(b, m.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          _ = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, n) {
          var r,
            i = {},
            a = null,
            l = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t))
              _.call(t, r) && !k.hasOwnProperty(r) && (i[r] = t[r]);
          var u = arguments.length - 2;
          if (1 === u) i.children = n;
          else if (1 < u) {
            for (var c = Array(u), s = 0; s < u; s++) c[s] = arguments[s + 2];
            i.children = c;
          }
          if (e && e.defaultProps) for (r in (u = e.defaultProps)) void 0 === i[r] && (i[r] = u[r]);
          return { $$typeof: o, type: e, key: a, ref: l, props: i, _owner: w.current };
        }
        function S(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var E = /\/+/g;
        function O(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function(e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function(e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function C(e, t, n, r, a) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var u = !1;
          if (null === e) u = !0;
          else
            switch (l) {
              case "string":
              case "number":
                u = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case i:
                    u = !0;
                }
            }
          if (u)
            return (
              (a = a((u = e))),
              (e = "" === r ? "." + O(u, 0) : r),
              Array.isArray(a)
                ? ((n = ""),
                  null != e && (n = e.replace(E, "$&/") + "/"),
                  C(a, t, n, "", function(e) {
                    return e;
                  }))
                : null != a &&
                  (S(a) &&
                    (a = (function(e, t) {
                      return { $$typeof: o, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
                    })(a, n + (!a.key || (u && u.key === a.key) ? "" : ("" + a.key).replace(E, "$&/") + "/") + e)),
                  t.push(a)),
              1
            );
          if (((u = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var c = 0; c < e.length; c++) {
              var s = r + O((l = e[c]), c);
              u += C(l, t, n, s, a);
            }
          else if (
            ((s = (function(e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof s)
          )
            for (e = s.call(e), c = 0; !(l = e.next()).done; ) u += C((l = l.value), t, n, (s = r + O(l, c++)), a);
          else if ("object" === l)
            throw ((t = "" + e),
            Error(h(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
          return u;
        }
        function P(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            C(e, r, "", "", function(e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function(t) {
                  0 === e._status && ((t = t.default), (e._status = 1), (e._result = t));
                },
                function(t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var M = { current: null };
        function T() {
          var e = M.current;
          if (null === e) throw Error(h(321));
          return e;
        }
        var L = {
          ReactCurrentDispatcher: M,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: P,
          forEach: function(e, t, n) {
            P(
              e,
              function() {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function(e) {
            var t = 0;
            return (
              P(e, function() {
                t++;
              }),
              t
            );
          },
          toArray: function(e) {
            return (
              P(e, function(e) {
                return e;
              }) || []
            );
          },
          only: function(e) {
            if (!S(e)) throw Error(h(143));
            return e;
          },
        }),
          (t.Component = m),
          (t.PureComponent = v),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
          (t.cloneElement = function(e, t, n) {
            if (null == e) throw Error(h(267, e));
            var i = r({}, e.props),
              a = e.key,
              l = e.ref,
              u = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((l = t.ref), (u = w.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (s in t)
                _.call(t, s) && !k.hasOwnProperty(s) && (i[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s]);
            }
            var s = arguments.length - 2;
            if (1 === s) i.children = n;
            else if (1 < s) {
              c = Array(s);
              for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
              i.children = c;
            }
            return { $$typeof: o, type: e.type, key: a, ref: l, props: i, _owner: u };
          }),
          (t.createContext = function(e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: l,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function(e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function() {
            return { current: null };
          }),
          (t.forwardRef = function(e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function(e) {
            return { $$typeof: s, _payload: { _status: -1, _result: e }, _init: N };
          }),
          (t.memo = function(e, t) {
            return { $$typeof: c, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function(e, t) {
            return T().useCallback(e, t);
          }),
          (t.useContext = function(e, t) {
            return T().useContext(e, t);
          }),
          (t.useDebugValue = function() {}),
          (t.useEffect = function(e, t) {
            return T().useEffect(e, t);
          }),
          (t.useImperativeHandle = function(e, t, n) {
            return T().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function(e, t) {
            return T().useLayoutEffect(e, t);
          }),
          (t.useMemo = function(e, t) {
            return T().useMemo(e, t);
          }),
          (t.useReducer = function(e, t, n) {
            return T().useReducer(e, t, n);
          }),
          (t.useRef = function(e) {
            return T().useRef(e);
          }),
          (t.useState = function(e) {
            return T().useState(e);
          }),
          (t.version = "17.0.2");
      },
      294: (e, t, n) => {
        "use strict";
        e.exports = n(408);
      },
      500: e => {
        "use strict";
        e.exports = (e, t) => {
          if ("string" != typeof e || "string" != typeof t)
            throw new TypeError("Expected the arguments to be of type `string`");
          if ("" === t) return [e];
          const n = e.indexOf(t);
          return -1 === n ? [e] : [e.slice(0, n), e.slice(n + t.length)];
        };
      },
      610: e => {
        "use strict";
        e.exports = e =>
          encodeURIComponent(e).replace(
            /[!'()*]/g,
            e =>
              `%${e
                .charCodeAt(0)
                .toString(16)
                .toUpperCase()}`
          );
      },
      144: (e, t, n) => {
        var r = n(514);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(723)(r, { transform: void 0 }), r.locals && (e.exports = r.locals);
      },
      644: (e, t, n) => {
        var r = n(299);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(723)(r, { transform: void 0 }), r.locals && (e.exports = r.locals);
      },
      614: (e, t, n) => {
        var r = n(531);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(723)(r, { transform: void 0 }), r.locals && (e.exports = r.locals);
      },
      723: (e, t, n) => {
        var r,
          o,
          i = {},
          a =
            ((r = function() {
              return window && document && document.all && !window.atob;
            }),
            function() {
              return void 0 === o && (o = r.apply(this, arguments)), o;
            }),
          l = (function(e) {
            var t = {};
            return function(n) {
              return void 0 === t[n] && (t[n] = e.call(this, n)), t[n];
            };
          })(function(e) {
            return document.querySelector(e);
          }),
          u = null,
          c = 0,
          s = [],
          f = n(947);
        function d(e, t) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              o = i[r.id];
            if (o) {
              o.refs++;
              for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);
              for (; a < r.parts.length; a++) o.parts.push(v(r.parts[a], t));
            } else {
              var l = [];
              for (a = 0; a < r.parts.length; a++) l.push(v(r.parts[a], t));
              i[r.id] = { id: r.id, refs: 1, parts: l };
            }
          }
        }
        function h(e, t) {
          for (var n = [], r = {}, o = 0; o < e.length; o++) {
            var i = e[o],
              a = t.base ? i[0] + t.base : i[0],
              l = { css: i[1], media: i[2], sourceMap: i[3] };
            r[a] ? r[a].parts.push(l) : n.push((r[a] = { id: a, parts: [l] }));
          }
          return n;
        }
        function p(e, t) {
          var n = l(e.insertInto);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
            );
          var r = s[s.length - 1];
          if ("top" === e.insertAt)
            r ? (r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t)) : n.insertBefore(t, n.firstChild),
              s.push(t);
          else {
            if ("bottom" !== e.insertAt)
              throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            n.appendChild(t);
          }
        }
        function g(e) {
          if (null === e.parentNode) return !1;
          e.parentNode.removeChild(e);
          var t = s.indexOf(e);
          t >= 0 && s.splice(t, 1);
        }
        function m(e) {
          var t = document.createElement("style");
          return (e.attrs.type = "text/css"), y(t, e.attrs), p(e, t), t;
        }
        function y(e, t) {
          Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n]);
          });
        }
        function v(e, t) {
          var n, r, o, i;
          if (t.transform && e.css) {
            if (!(i = t.transform(e.css))) return function() {};
            e.css = i;
          }
          if (t.singleton) {
            var a = c++;
            (n = u || (u = m(t))), (r = _.bind(null, n, a, !1)), (o = _.bind(null, n, a, !0));
          } else
            e.sourceMap &&
            "function" == typeof URL &&
            "function" == typeof URL.createObjectURL &&
            "function" == typeof URL.revokeObjectURL &&
            "function" == typeof Blob &&
            "function" == typeof btoa
              ? ((n = (function(e) {
                  var t = document.createElement("link");
                  return (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), y(t, e.attrs), p(e, t), t;
                })(t)),
                (r = x.bind(null, n, t)),
                (o = function() {
                  g(n), n.href && URL.revokeObjectURL(n.href);
                }))
              : ((n = m(t)),
                (r = k.bind(null, n)),
                (o = function() {
                  g(n);
                }));
          return (
            r(e),
            function(t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function(e, t) {
          if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
            throw new Error("The style-loader cannot be used in a non-browser environment");
          ((t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}),
            t.singleton || (t.singleton = a()),
            t.insertInto || (t.insertInto = "head"),
            t.insertAt || (t.insertAt = "bottom");
          var n = h(e, t);
          return (
            d(n, t),
            function(e) {
              for (var r = [], o = 0; o < n.length; o++) {
                var a = n[o];
                (l = i[a.id]).refs--, r.push(l);
              }
              for (e && d(h(e, t), t), o = 0; o < r.length; o++) {
                var l;
                if (0 === (l = r[o]).refs) {
                  for (var u = 0; u < l.parts.length; u++) l.parts[u]();
                  delete i[l.id];
                }
              }
            }
          );
        };
        var b,
          w =
            ((b = []),
            function(e, t) {
              return (b[e] = t), b.filter(Boolean).join("\n");
            });
        function _(e, t, n, r) {
          var o = n ? "" : r.css;
          if (e.styleSheet) e.styleSheet.cssText = w(t, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
          }
        }
        function k(e, t) {
          var n = t.css,
            r = t.media;
          if ((r && e.setAttribute("media", r), e.styleSheet)) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
        function x(e, t, n) {
          var r = n.css,
            o = n.sourceMap,
            i = void 0 === t.convertToAbsoluteUrls && o;
          (t.convertToAbsoluteUrls || i) && (r = f(r)),
            o &&
              (r +=
                "\n/*# sourceMappingURL=data:application/json;base64," +
                btoa(unescape(encodeURIComponent(JSON.stringify(o)))) +
                " */");
          var a = new Blob([r], { type: "text/css" }),
            l = e.href;
          (e.href = URL.createObjectURL(a)), l && URL.revokeObjectURL(l);
        }
      },
      947: e => {
        e.exports = function(e) {
          var t = "undefined" != typeof window && window.location;
          if (!t) throw new Error("fixUrls requires window.location");
          if (!e || "string" != typeof e) return e;
          var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
          return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var o,
              i = t
                .trim()
                .replace(/^"(.*)"$/, function(e, t) {
                  return t;
                })
                .replace(/^'(.*)'$/, function(e, t) {
                  return t;
                });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(i)
              ? e
              : ((o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, "")),
                "url(" + JSON.stringify(o) + ")");
          });
        };
      },
      653: (e, t, n) => {
        var r = {
          "./custom-node/custom-node.config": 321,
          "./marvel/marvel.config": 163,
          "./relationship-node/relationship-node.config": 519,
          "./small/small.config": 664,
          "./static/static.config": 554,
        };
        function o(e) {
          var t = i(e);
          return n(t);
        }
        function i(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (o.keys = function() {
          return Object.keys(r);
        }),
          (o.resolve = i),
          (e.exports = o),
          (o.id = 653);
      },
      790: (e, t, n) => {
        var r = {
          "./custom-node/custom-node.data": 218,
          "./marvel/marvel.data": 977,
          "./relationship-node/relationship-node.data": 724,
          "./small/small.data": 281,
          "./static/static.data": 116,
        };
        function o(e) {
          var t = i(e);
          return n(t);
        }
        function i(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (o.keys = function() {
          return Object.keys(r);
        }),
          (o.resolve = i),
          (e.exports = o),
          (o.id = 790);
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return e[r](i, i.exports, n), i.exports;
  }
  (n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = e => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = n(294),
        t = n(935);
      const r = {
        automaticRearrangeAfterDropNode: !1,
        collapsible: !1,
        directed: !1,
        focusAnimationDuration: 0.75,
        focusZoom: 1,
        freezeAllDragEvents: !1,
        height: 400,
        highlightDegree: 1,
        highlightOpacity: 1,
        linkHighlightBehavior: !1,
        maxZoom: 8,
        minZoom: 0.1,
        initialZoom: null,
        nodeHighlightBehavior: !1,
        panAndZoom: !1,
        staticGraph: !1,
        staticGraphWithDragAndDrop: !1,
        bounded: !1,
        width: 800,
        d3: { alphaTarget: 0.05, gravity: -100, linkLength: 100, linkStrength: 1, disableLinkForce: !1 },
        node: {
          color: "#d3d3d3",
          fontColor: "black",
          fontSize: 8,
          fontWeight: "normal",
          highlightColor: "SAME",
          highlightFontSize: 8,
          highlightFontWeight: "normal",
          highlightStrokeColor: "SAME",
          highlightStrokeWidth: "SAME",
          labelProperty: "id",
          labelPosition: null,
          labelClass: "",
          mouseCursor: "pointer",
          opacity: 1,
          renderLabel: !0,
          size: 200,
          strokeColor: "none",
          strokeWidth: 1.5,
          svg: "",
          symbolType: "circle",
          viewGenerator: null,
        },
        link: {
          color: "#d3d3d3",
          fontColor: "black",
          fontSize: 8,
          fontWeight: "normal",
          highlightColor: "SAME",
          highlightFontSize: 8,
          highlightFontWeight: "normal",
          labelProperty: "label",
          mouseCursor: "pointer",
          opacity: 1,
          renderLabel: !1,
          semanticStrokeWidth: !1,
          strokeWidth: 1.5,
          markerHeight: 6,
          markerWidth: 6,
          type: "STRAIGHT",
          selfLinkDirection: "TOP_RIGHT",
          strokeDasharray: 0,
          strokeDashoffset: 0,
          strokeLinecap: "butt",
        },
      };
      var o = { value: function() {} };
      function i() {
        for (var e, t = 0, n = arguments.length, r = {}; t < n; ++t) {
          if (!(e = arguments[t] + "") || e in r || /[\s.]/.test(e)) throw new Error("illegal type: " + e);
          r[e] = [];
        }
        return new a(r);
      }
      function a(e) {
        this._ = e;
      }
      function l(e, t) {
        return e
          .trim()
          .split(/^|\s+/)
          .map(function(e) {
            var n = "",
              r = e.indexOf(".");
            if ((r >= 0 && ((n = e.slice(r + 1)), (e = e.slice(0, r))), e && !t.hasOwnProperty(e)))
              throw new Error("unknown type: " + e);
            return { type: e, name: n };
          });
      }
      function u(e, t) {
        for (var n, r = 0, o = e.length; r < o; ++r) if ((n = e[r]).name === t) return n.value;
      }
      function c(e, t, n) {
        for (var r = 0, i = e.length; r < i; ++r)
          if (e[r].name === t) {
            (e[r] = o), (e = e.slice(0, r).concat(e.slice(r + 1)));
            break;
          }
        return null != n && e.push({ name: t, value: n }), e;
      }
      a.prototype = i.prototype = {
        constructor: a,
        on: function(e, t) {
          var n,
            r = this._,
            o = l(e + "", r),
            i = -1,
            a = o.length;
          if (!(arguments.length < 2)) {
            if (null != t && "function" != typeof t) throw new Error("invalid callback: " + t);
            for (; ++i < a; )
              if ((n = (e = o[i]).type)) r[n] = c(r[n], e.name, t);
              else if (null == t) for (n in r) r[n] = c(r[n], e.name, null);
            return this;
          }
          for (; ++i < a; ) if ((n = (e = o[i]).type) && (n = u(r[n], e.name))) return n;
        },
        copy: function() {
          var e = {},
            t = this._;
          for (var n in t) e[n] = t[n].slice();
          return new a(e);
        },
        call: function(e, t) {
          if ((n = arguments.length - 2) > 0)
            for (var n, r, o = new Array(n), i = 0; i < n; ++i) o[i] = arguments[i + 2];
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (i = 0, n = (r = this._[e]).length; i < n; ++i) r[i].value.apply(t, o);
        },
        apply: function(e, t, n) {
          if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
          for (var r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
        },
      };
      const s = i;
      var f = {},
        d = null;
      function h(e, t, n) {
        return (
          (e = p(e, t, n)),
          function(t) {
            var n = t.relatedTarget;
            (n && (n === this || 8 & n.compareDocumentPosition(this))) || e.call(this, t);
          }
        );
      }
      function p(e, t, n) {
        return function(r) {
          var o = d;
          d = r;
          try {
            e.call(this, this.__data__, t, n);
          } finally {
            d = o;
          }
        };
      }
      function g(e) {
        return e
          .trim()
          .split(/^|\s+/)
          .map(function(e) {
            var t = "",
              n = e.indexOf(".");
            return n >= 0 && ((t = e.slice(n + 1)), (e = e.slice(0, n))), { type: e, name: t };
          });
      }
      function m(e) {
        return function() {
          var t = this.__on;
          if (t) {
            for (var n, r = 0, o = -1, i = t.length; r < i; ++r)
              (n = t[r]),
                (e.type && n.type !== e.type) || n.name !== e.name
                  ? (t[++o] = n)
                  : this.removeEventListener(n.type, n.listener, n.capture);
            ++o ? (t.length = o) : delete this.__on;
          }
        };
      }
      function y(e, t, n) {
        var r = f.hasOwnProperty(e.type) ? h : p;
        return function(o, i, a) {
          var l,
            u = this.__on,
            c = r(t, i, a);
          if (u)
            for (var s = 0, f = u.length; s < f; ++s)
              if ((l = u[s]).type === e.type && l.name === e.name)
                return (
                  this.removeEventListener(l.type, l.listener, l.capture),
                  this.addEventListener(l.type, (l.listener = c), (l.capture = n)),
                  void (l.value = t)
                );
          this.addEventListener(e.type, c, n),
            (l = { type: e.type, name: e.name, value: t, listener: c, capture: n }),
            u ? u.push(l) : (this.__on = [l]);
        };
      }
      function v(e, t, n, r) {
        var o = d;
        (e.sourceEvent = d), (d = e);
        try {
          return t.apply(n, r);
        } finally {
          d = o;
        }
      }
      function b() {
        for (var e, t = d; (e = t.sourceEvent); ) t = e;
        return t;
      }
      function w(e, t) {
        var n = e.ownerSVGElement || e;
        if (n.createSVGPoint) {
          var r = n.createSVGPoint();
          return (r.x = t.clientX), (r.y = t.clientY), [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y];
        }
        var o = e.getBoundingClientRect();
        return [t.clientX - o.left - e.clientLeft, t.clientY - o.top - e.clientTop];
      }
      function _(e) {
        var t = b();
        return t.changedTouches && (t = t.changedTouches[0]), w(e, t);
      }
      function k() {}
      function x(e) {
        return null == e
          ? k
          : function() {
              return this.querySelector(e);
            };
      }
      function S() {
        return [];
      }
      function E(e) {
        return null == e
          ? S
          : function() {
              return this.querySelectorAll(e);
            };
      }
      function O(e) {
        return function() {
          return this.matches(e);
        };
      }
      function C(e) {
        return new Array(e.length);
      }
      function P(e, t) {
        (this.ownerDocument = e.ownerDocument),
          (this.namespaceURI = e.namespaceURI),
          (this._next = null),
          (this._parent = e),
          (this.__data__ = t);
      }
      function N(e, t, n, r, o, i) {
        for (var a, l = 0, u = t.length, c = i.length; l < c; ++l)
          (a = t[l]) ? ((a.__data__ = i[l]), (r[l] = a)) : (n[l] = new P(e, i[l]));
        for (; l < u; ++l) (a = t[l]) && (o[l] = a);
      }
      function M(e, t, n, r, o, i, a) {
        var l,
          u,
          c,
          s = {},
          f = t.length,
          d = i.length,
          h = new Array(f);
        for (l = 0; l < f; ++l)
          (u = t[l]) && ((h[l] = c = "$" + a.call(u, u.__data__, l, t)), c in s ? (o[l] = u) : (s[c] = u));
        for (l = 0; l < d; ++l)
          (u = s[(c = "$" + a.call(e, i[l], l, i))])
            ? ((r[l] = u), (u.__data__ = i[l]), (s[c] = null))
            : (n[l] = new P(e, i[l]));
        for (l = 0; l < f; ++l) (u = t[l]) && s[h[l]] === u && (o[l] = u);
      }
      function T(e, t) {
        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
      }
      "undefined" != typeof document &&
        ("onmouseenter" in document.documentElement || (f = { mouseenter: "mouseover", mouseleave: "mouseout" })),
        (P.prototype = {
          constructor: P,
          appendChild: function(e) {
            return this._parent.insertBefore(e, this._next);
          },
          insertBefore: function(e, t) {
            return this._parent.insertBefore(e, t);
          },
          querySelector: function(e) {
            return this._parent.querySelector(e);
          },
          querySelectorAll: function(e) {
            return this._parent.querySelectorAll(e);
          },
        });
      var L = "http://www.w3.org/1999/xhtml";
      const j = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: L,
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      };
      function A(e) {
        var t = (e += ""),
          n = t.indexOf(":");
        return (
          n >= 0 && "xmlns" !== (t = e.slice(0, n)) && (e = e.slice(n + 1)),
          j.hasOwnProperty(t) ? { space: j[t], local: e } : e
        );
      }
      function z(e) {
        return function() {
          this.removeAttribute(e);
        };
      }
      function R(e) {
        return function() {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function D(e, t) {
        return function() {
          this.setAttribute(e, t);
        };
      }
      function I(e, t) {
        return function() {
          this.setAttributeNS(e.space, e.local, t);
        };
      }
      function F(e, t) {
        return function() {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttribute(e) : this.setAttribute(e, n);
        };
      }
      function U(e, t) {
        return function() {
          var n = t.apply(this, arguments);
          null == n ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
        };
      }
      function B(e) {
        return (e.ownerDocument && e.ownerDocument.defaultView) || (e.document && e) || e.defaultView;
      }
      function W(e) {
        return function() {
          this.style.removeProperty(e);
        };
      }
      function H(e, t, n) {
        return function() {
          this.style.setProperty(e, t, n);
        };
      }
      function V(e, t, n) {
        return function() {
          var r = t.apply(this, arguments);
          null == r ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
        };
      }
      function q(e, t) {
        return (
          e.style.getPropertyValue(t) ||
          B(e)
            .getComputedStyle(e, null)
            .getPropertyValue(t)
        );
      }
      function G(e) {
        return function() {
          delete this[e];
        };
      }
      function $(e, t) {
        return function() {
          this[e] = t;
        };
      }
      function Y(e, t) {
        return function() {
          var n = t.apply(this, arguments);
          null == n ? delete this[e] : (this[e] = n);
        };
      }
      function X(e) {
        return e.trim().split(/^|\s+/);
      }
      function Q(e) {
        return e.classList || new K(e);
      }
      function K(e) {
        (this._node = e), (this._names = X(e.getAttribute("class") || ""));
      }
      function Z(e, t) {
        for (var n = Q(e), r = -1, o = t.length; ++r < o; ) n.add(t[r]);
      }
      function J(e, t) {
        for (var n = Q(e), r = -1, o = t.length; ++r < o; ) n.remove(t[r]);
      }
      function ee(e) {
        return function() {
          Z(this, e);
        };
      }
      function te(e) {
        return function() {
          J(this, e);
        };
      }
      function ne(e, t) {
        return function() {
          (t.apply(this, arguments) ? Z : J)(this, e);
        };
      }
      function re() {
        this.textContent = "";
      }
      function oe(e) {
        return function() {
          this.textContent = e;
        };
      }
      function ie(e) {
        return function() {
          var t = e.apply(this, arguments);
          this.textContent = null == t ? "" : t;
        };
      }
      function ae() {
        this.innerHTML = "";
      }
      function le(e) {
        return function() {
          this.innerHTML = e;
        };
      }
      function ue(e) {
        return function() {
          var t = e.apply(this, arguments);
          this.innerHTML = null == t ? "" : t;
        };
      }
      function ce() {
        this.nextSibling && this.parentNode.appendChild(this);
      }
      function se() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
      }
      function fe(e) {
        return function() {
          var t = this.ownerDocument,
            n = this.namespaceURI;
          return n === L && t.documentElement.namespaceURI === L ? t.createElement(e) : t.createElementNS(n, e);
        };
      }
      function de(e) {
        return function() {
          return this.ownerDocument.createElementNS(e.space, e.local);
        };
      }
      function he(e) {
        var t = A(e);
        return (t.local ? de : fe)(t);
      }
      function pe() {
        return null;
      }
      function ge() {
        var e = this.parentNode;
        e && e.removeChild(this);
      }
      function me() {
        var e = this.cloneNode(!1),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function ye() {
        var e = this.cloneNode(!0),
          t = this.parentNode;
        return t ? t.insertBefore(e, this.nextSibling) : e;
      }
      function ve(e, t, n) {
        var r = B(e),
          o = r.CustomEvent;
        "function" == typeof o
          ? (o = new o(t, n))
          : ((o = r.document.createEvent("Event")),
            n ? (o.initEvent(t, n.bubbles, n.cancelable), (o.detail = n.detail)) : o.initEvent(t, !1, !1)),
          e.dispatchEvent(o);
      }
      function be(e, t) {
        return function() {
          return ve(this, e, t);
        };
      }
      function we(e, t) {
        return function() {
          return ve(this, e, t.apply(this, arguments));
        };
      }
      K.prototype = {
        add: function(e) {
          this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
        },
        remove: function(e) {
          var t = this._names.indexOf(e);
          t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
        },
        contains: function(e) {
          return this._names.indexOf(e) >= 0;
        },
      };
      var _e = [null];
      function ke(e, t) {
        (this._groups = e), (this._parents = t);
      }
      function xe() {
        return new ke([[document.documentElement]], _e);
      }
      ke.prototype = xe.prototype = {
        constructor: ke,
        select: function(e) {
          "function" != typeof e && (e = x(e));
          for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
            for (var i, a, l = t[o], u = l.length, c = (r[o] = new Array(u)), s = 0; s < u; ++s)
              (i = l[s]) &&
                (a = e.call(i, i.__data__, s, l)) &&
                ("__data__" in i && (a.__data__ = i.__data__), (c[s] = a));
          return new ke(r, this._parents);
        },
        selectAll: function(e) {
          "function" != typeof e && (e = E(e));
          for (var t = this._groups, n = t.length, r = [], o = [], i = 0; i < n; ++i)
            for (var a, l = t[i], u = l.length, c = 0; c < u; ++c)
              (a = l[c]) && (r.push(e.call(a, a.__data__, c, l)), o.push(a));
          return new ke(r, o);
        },
        filter: function(e) {
          "function" != typeof e && (e = O(e));
          for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
            for (var i, a = t[o], l = a.length, u = (r[o] = []), c = 0; c < l; ++c)
              (i = a[c]) && e.call(i, i.__data__, c, a) && u.push(i);
          return new ke(r, this._parents);
        },
        data: function(e, t) {
          if (!e)
            return (
              (p = new Array(this.size())),
              (s = -1),
              this.each(function(e) {
                p[++s] = e;
              }),
              p
            );
          var n,
            r = t ? M : N,
            o = this._parents,
            i = this._groups;
          "function" != typeof e &&
            ((n = e),
            (e = function() {
              return n;
            }));
          for (var a = i.length, l = new Array(a), u = new Array(a), c = new Array(a), s = 0; s < a; ++s) {
            var f = o[s],
              d = i[s],
              h = d.length,
              p = e.call(f, f && f.__data__, s, o),
              g = p.length,
              m = (u[s] = new Array(g)),
              y = (l[s] = new Array(g));
            r(f, d, m, y, (c[s] = new Array(h)), p, t);
            for (var v, b, w = 0, _ = 0; w < g; ++w)
              if ((v = m[w])) {
                for (w >= _ && (_ = w + 1); !(b = y[_]) && ++_ < g; );
                v._next = b || null;
              }
          }
          return ((l = new ke(l, o))._enter = u), (l._exit = c), l;
        },
        enter: function() {
          return new ke(this._enter || this._groups.map(C), this._parents);
        },
        exit: function() {
          return new ke(this._exit || this._groups.map(C), this._parents);
        },
        join: function(e, t, n) {
          var r = this.enter(),
            o = this,
            i = this.exit();
          return (
            (r = "function" == typeof e ? e(r) : r.append(e + "")),
            null != t && (o = t(o)),
            null == n ? i.remove() : n(i),
            r && o ? r.merge(o).order() : o
          );
        },
        merge: function(e) {
          for (
            var t = this._groups,
              n = e._groups,
              r = t.length,
              o = n.length,
              i = Math.min(r, o),
              a = new Array(r),
              l = 0;
            l < i;
            ++l
          )
            for (var u, c = t[l], s = n[l], f = c.length, d = (a[l] = new Array(f)), h = 0; h < f; ++h)
              (u = c[h] || s[h]) && (d[h] = u);
          for (; l < r; ++l) a[l] = t[l];
          return new ke(a, this._parents);
        },
        order: function() {
          for (var e = this._groups, t = -1, n = e.length; ++t < n; )
            for (var r, o = e[t], i = o.length - 1, a = o[i]; --i >= 0; )
              (r = o[i]) && (a && 4 ^ r.compareDocumentPosition(a) && a.parentNode.insertBefore(r, a), (a = r));
          return this;
        },
        sort: function(e) {
          function t(t, n) {
            return t && n ? e(t.__data__, n.__data__) : !t - !n;
          }
          e || (e = T);
          for (var n = this._groups, r = n.length, o = new Array(r), i = 0; i < r; ++i) {
            for (var a, l = n[i], u = l.length, c = (o[i] = new Array(u)), s = 0; s < u; ++s) (a = l[s]) && (c[s] = a);
            c.sort(t);
          }
          return new ke(o, this._parents).order();
        },
        call: function() {
          var e = arguments[0];
          return (arguments[0] = this), e.apply(null, arguments), this;
        },
        nodes: function() {
          var e = new Array(this.size()),
            t = -1;
          return (
            this.each(function() {
              e[++t] = this;
            }),
            e
          );
        },
        node: function() {
          for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
            for (var r = e[t], o = 0, i = r.length; o < i; ++o) {
              var a = r[o];
              if (a) return a;
            }
          return null;
        },
        size: function() {
          var e = 0;
          return (
            this.each(function() {
              ++e;
            }),
            e
          );
        },
        empty: function() {
          return !this.node();
        },
        each: function(e) {
          for (var t = this._groups, n = 0, r = t.length; n < r; ++n)
            for (var o, i = t[n], a = 0, l = i.length; a < l; ++a) (o = i[a]) && e.call(o, o.__data__, a, i);
          return this;
        },
        attr: function(e, t) {
          var n = A(e);
          if (arguments.length < 2) {
            var r = this.node();
            return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
          }
          return this.each(
            (null == t ? (n.local ? R : z) : "function" == typeof t ? (n.local ? U : F) : n.local ? I : D)(n, t)
          );
        },
        style: function(e, t, n) {
          return arguments.length > 1
            ? this.each((null == t ? W : "function" == typeof t ? V : H)(e, t, null == n ? "" : n))
            : q(this.node(), e);
        },
        property: function(e, t) {
          return arguments.length > 1
            ? this.each((null == t ? G : "function" == typeof t ? Y : $)(e, t))
            : this.node()[e];
        },
        classed: function(e, t) {
          var n = X(e + "");
          if (arguments.length < 2) {
            for (var r = Q(this.node()), o = -1, i = n.length; ++o < i; ) if (!r.contains(n[o])) return !1;
            return !0;
          }
          return this.each(("function" == typeof t ? ne : t ? ee : te)(n, t));
        },
        text: function(e) {
          return arguments.length
            ? this.each(null == e ? re : ("function" == typeof e ? ie : oe)(e))
            : this.node().textContent;
        },
        html: function(e) {
          return arguments.length
            ? this.each(null == e ? ae : ("function" == typeof e ? ue : le)(e))
            : this.node().innerHTML;
        },
        raise: function() {
          return this.each(ce);
        },
        lower: function() {
          return this.each(se);
        },
        append: function(e) {
          var t = "function" == typeof e ? e : he(e);
          return this.select(function() {
            return this.appendChild(t.apply(this, arguments));
          });
        },
        insert: function(e, t) {
          var n = "function" == typeof e ? e : he(e),
            r = null == t ? pe : "function" == typeof t ? t : x(t);
          return this.select(function() {
            return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
          });
        },
        remove: function() {
          return this.each(ge);
        },
        clone: function(e) {
          return this.select(e ? ye : me);
        },
        datum: function(e) {
          return arguments.length ? this.property("__data__", e) : this.node().__data__;
        },
        on: function(e, t, n) {
          var r,
            o,
            i = g(e + ""),
            a = i.length;
          if (!(arguments.length < 2)) {
            for (l = t ? y : m, null == n && (n = !1), r = 0; r < a; ++r) this.each(l(i[r], t, n));
            return this;
          }
          var l = this.node().__on;
          if (l)
            for (var u, c = 0, s = l.length; c < s; ++c)
              for (r = 0, u = l[c]; r < a; ++r) if ((o = i[r]).type === u.type && o.name === u.name) return u.value;
        },
        dispatch: function(e, t) {
          return this.each(("function" == typeof t ? we : be)(e, t));
        },
      };
      const Se = xe;
      function Ee(e) {
        return "string" == typeof e
          ? new ke([[document.querySelector(e)]], [document.documentElement])
          : new ke([[e]], _e);
      }
      function Oe(e, t, n) {
        arguments.length < 3 && ((n = t), (t = b().changedTouches));
        for (var r, o = 0, i = t ? t.length : 0; o < i; ++o) if ((r = t[o]).identifier === n) return w(e, r);
        return null;
      }
      function Ce() {
        d.stopImmediatePropagation();
      }
      function Pe() {
        d.preventDefault(), d.stopImmediatePropagation();
      }
      function Ne(e) {
        var t = e.document.documentElement,
          n = Ee(e).on("dragstart.drag", Pe, !0);
        "onselectstart" in t
          ? n.on("selectstart.drag", Pe, !0)
          : ((t.__noselect = t.style.MozUserSelect), (t.style.MozUserSelect = "none"));
      }
      function Me(e, t) {
        var n = e.document.documentElement,
          r = Ee(e).on("dragstart.drag", null);
        t &&
          (r.on("click.drag", Pe, !0),
          setTimeout(function() {
            r.on("click.drag", null);
          }, 0)),
          "onselectstart" in n
            ? r.on("selectstart.drag", null)
            : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
      }
      function Te(e) {
        return function() {
          return e;
        };
      }
      function Le(e, t, n, r, o, i, a, l, u, c) {
        (this.target = e),
          (this.type = t),
          (this.subject = n),
          (this.identifier = r),
          (this.active = o),
          (this.x = i),
          (this.y = a),
          (this.dx = l),
          (this.dy = u),
          (this._ = c);
      }
      function je() {
        return !d.ctrlKey && !d.button;
      }
      function Ae() {
        return this.parentNode;
      }
      function ze(e) {
        return null == e ? { x: d.x, y: d.y } : e;
      }
      function Re() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function De(e) {
        return function() {
          return e;
        };
      }
      function Ie() {
        return 1e-6 * (Math.random() - 0.5);
      }
      Le.prototype.on = function() {
        var e = this._.on.apply(this._, arguments);
        return e === this._ ? this : e;
      };
      var Fe = "$";
      function Ue() {}
      function Be(e, t) {
        var n = new Ue();
        if (e instanceof Ue)
          e.each(function(e, t) {
            n.set(t, e);
          });
        else if (Array.isArray(e)) {
          var r,
            o = -1,
            i = e.length;
          if (null == t) for (; ++o < i; ) n.set(o, e[o]);
          else for (; ++o < i; ) n.set(t((r = e[o]), o, e), r);
        } else if (e) for (var a in e) n.set(a, e[a]);
        return n;
      }
      Ue.prototype = Be.prototype = {
        constructor: Ue,
        has: function(e) {
          return Fe + e in this;
        },
        get: function(e) {
          return this[Fe + e];
        },
        set: function(e, t) {
          return (this[Fe + e] = t), this;
        },
        remove: function(e) {
          var t = Fe + e;
          return t in this && delete this[t];
        },
        clear: function() {
          for (var e in this) e[0] === Fe && delete this[e];
        },
        keys: function() {
          var e = [];
          for (var t in this) t[0] === Fe && e.push(t.slice(1));
          return e;
        },
        values: function() {
          var e = [];
          for (var t in this) t[0] === Fe && e.push(this[t]);
          return e;
        },
        entries: function() {
          var e = [];
          for (var t in this) t[0] === Fe && e.push({ key: t.slice(1), value: this[t] });
          return e;
        },
        size: function() {
          var e = 0;
          for (var t in this) t[0] === Fe && ++e;
          return e;
        },
        empty: function() {
          for (var e in this) if (e[0] === Fe) return !1;
          return !0;
        },
        each: function(e) {
          for (var t in this) t[0] === Fe && e(this[t], t.slice(1), this);
        },
      };
      const We = Be;
      function He() {}
      var Ve = We.prototype;
      function qe(e) {
        return e.index;
      }
      function Ge(e, t) {
        var n = e.get(t);
        if (!n) throw new Error("missing: " + t);
        return n;
      }
      function $e(e, t, n, r) {
        if (isNaN(t) || isNaN(n)) return e;
        var o,
          i,
          a,
          l,
          u,
          c,
          s,
          f,
          d,
          h = e._root,
          p = { data: r },
          g = e._x0,
          m = e._y0,
          y = e._x1,
          v = e._y1;
        if (!h) return (e._root = p), e;
        for (; h.length; )
          if (
            ((c = t >= (i = (g + y) / 2)) ? (g = i) : (y = i),
            (s = n >= (a = (m + v) / 2)) ? (m = a) : (v = a),
            (o = h),
            !(h = h[(f = (s << 1) | c)]))
          )
            return (o[f] = p), e;
        if (((l = +e._x.call(null, h.data)), (u = +e._y.call(null, h.data)), t === l && n === u))
          return (p.next = h), o ? (o[f] = p) : (e._root = p), e;
        do {
          (o = o ? (o[f] = new Array(4)) : (e._root = new Array(4))),
            (c = t >= (i = (g + y) / 2)) ? (g = i) : (y = i),
            (s = n >= (a = (m + v) / 2)) ? (m = a) : (v = a);
        } while ((f = (s << 1) | c) == (d = ((u >= a) << 1) | (l >= i)));
        return (o[d] = h), (o[f] = p), e;
      }
      function Ye(e, t, n, r, o) {
        (this.node = e), (this.x0 = t), (this.y0 = n), (this.x1 = r), (this.y1 = o);
      }
      function Xe(e) {
        return e[0];
      }
      function Qe(e) {
        return e[1];
      }
      function Ke(e, t, n) {
        var r = new Ze(null == t ? Xe : t, null == n ? Qe : n, NaN, NaN, NaN, NaN);
        return null == e ? r : r.addAll(e);
      }
      function Ze(e, t, n, r, o, i) {
        (this._x = e),
          (this._y = t),
          (this._x0 = n),
          (this._y0 = r),
          (this._x1 = o),
          (this._y1 = i),
          (this._root = void 0);
      }
      function Je(e) {
        for (var t = { data: e.data }, n = t; (e = e.next); ) n = n.next = { data: e.data };
        return t;
      }
      He.prototype = function(e, t) {
        var n = new He();
        if (e instanceof He)
          e.each(function(e) {
            n.add(e);
          });
        else if (e) {
          var r = -1,
            o = e.length;
          if (null == t) for (; ++r < o; ) n.add(e[r]);
          else for (; ++r < o; ) n.add(t(e[r], r, e));
        }
        return n;
      }.prototype = {
        constructor: He,
        has: Ve.has,
        add: function(e) {
          return (this[Fe + (e += "")] = e), this;
        },
        remove: Ve.remove,
        clear: Ve.clear,
        values: Ve.keys,
        size: Ve.size,
        empty: Ve.empty,
        each: Ve.each,
      };
      var et = (Ke.prototype = Ze.prototype);
      (et.copy = function() {
        var e,
          t,
          n = new Ze(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
          r = this._root;
        if (!r) return n;
        if (!r.length) return (n._root = Je(r)), n;
        for (e = [{ source: r, target: (n._root = new Array(4)) }]; (r = e.pop()); )
          for (var o = 0; o < 4; ++o)
            (t = r.source[o]) &&
              (t.length ? e.push({ source: t, target: (r.target[o] = new Array(4)) }) : (r.target[o] = Je(t)));
        return n;
      }),
        (et.add = function(e) {
          var t = +this._x.call(null, e),
            n = +this._y.call(null, e);
          return $e(this.cover(t, n), t, n, e);
        }),
        (et.addAll = function(e) {
          var t,
            n,
            r,
            o,
            i = e.length,
            a = new Array(i),
            l = new Array(i),
            u = 1 / 0,
            c = 1 / 0,
            s = -1 / 0,
            f = -1 / 0;
          for (n = 0; n < i; ++n)
            isNaN((r = +this._x.call(null, (t = e[n])))) ||
              isNaN((o = +this._y.call(null, t))) ||
              ((a[n] = r), (l[n] = o), r < u && (u = r), r > s && (s = r), o < c && (c = o), o > f && (f = o));
          if (u > s || c > f) return this;
          for (this.cover(u, c).cover(s, f), n = 0; n < i; ++n) $e(this, a[n], l[n], e[n]);
          return this;
        }),
        (et.cover = function(e, t) {
          if (isNaN((e = +e)) || isNaN((t = +t))) return this;
          var n = this._x0,
            r = this._y0,
            o = this._x1,
            i = this._y1;
          if (isNaN(n)) (o = (n = Math.floor(e)) + 1), (i = (r = Math.floor(t)) + 1);
          else {
            for (var a, l, u = o - n, c = this._root; n > e || e >= o || r > t || t >= i; )
              switch (((l = ((t < r) << 1) | (e < n)), ((a = new Array(4))[l] = c), (c = a), (u *= 2), l)) {
                case 0:
                  (o = n + u), (i = r + u);
                  break;
                case 1:
                  (n = o - u), (i = r + u);
                  break;
                case 2:
                  (o = n + u), (r = i - u);
                  break;
                case 3:
                  (n = o - u), (r = i - u);
              }
            this._root && this._root.length && (this._root = c);
          }
          return (this._x0 = n), (this._y0 = r), (this._x1 = o), (this._y1 = i), this;
        }),
        (et.data = function() {
          var e = [];
          return (
            this.visit(function(t) {
              if (!t.length)
                do {
                  e.push(t.data);
                } while ((t = t.next));
            }),
            e
          );
        }),
        (et.extent = function(e) {
          return arguments.length
            ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1])
            : isNaN(this._x0)
            ? void 0
            : [
                [this._x0, this._y0],
                [this._x1, this._y1],
              ];
        }),
        (et.find = function(e, t, n) {
          var r,
            o,
            i,
            a,
            l,
            u,
            c,
            s = this._x0,
            f = this._y0,
            d = this._x1,
            h = this._y1,
            p = [],
            g = this._root;
          for (
            g && p.push(new Ye(g, s, f, d, h)),
              null == n ? (n = 1 / 0) : ((s = e - n), (f = t - n), (d = e + n), (h = t + n), (n *= n));
            (u = p.pop());

          )
            if (!(!(g = u.node) || (o = u.x0) > d || (i = u.y0) > h || (a = u.x1) < s || (l = u.y1) < f))
              if (g.length) {
                var m = (o + a) / 2,
                  y = (i + l) / 2;
                p.push(
                  new Ye(g[3], m, y, a, l),
                  new Ye(g[2], o, y, m, l),
                  new Ye(g[1], m, i, a, y),
                  new Ye(g[0], o, i, m, y)
                ),
                  (c = ((t >= y) << 1) | (e >= m)) &&
                    ((u = p[p.length - 1]), (p[p.length - 1] = p[p.length - 1 - c]), (p[p.length - 1 - c] = u));
              } else {
                var v = e - +this._x.call(null, g.data),
                  b = t - +this._y.call(null, g.data),
                  w = v * v + b * b;
                if (w < n) {
                  var _ = Math.sqrt((n = w));
                  (s = e - _), (f = t - _), (d = e + _), (h = t + _), (r = g.data);
                }
              }
          return r;
        }),
        (et.remove = function(e) {
          if (isNaN((i = +this._x.call(null, e))) || isNaN((a = +this._y.call(null, e)))) return this;
          var t,
            n,
            r,
            o,
            i,
            a,
            l,
            u,
            c,
            s,
            f,
            d,
            h = this._root,
            p = this._x0,
            g = this._y0,
            m = this._x1,
            y = this._y1;
          if (!h) return this;
          if (h.length)
            for (;;) {
              if (
                ((c = i >= (l = (p + m) / 2)) ? (p = l) : (m = l),
                (s = a >= (u = (g + y) / 2)) ? (g = u) : (y = u),
                (t = h),
                !(h = h[(f = (s << 1) | c)]))
              )
                return this;
              if (!h.length) break;
              (t[(f + 1) & 3] || t[(f + 2) & 3] || t[(f + 3) & 3]) && ((n = t), (d = f));
            }
          for (; h.data !== e; ) if (((r = h), !(h = h.next))) return this;
          return (
            (o = h.next) && delete h.next,
            r
              ? (o ? (r.next = o) : delete r.next, this)
              : t
              ? (o ? (t[f] = o) : delete t[f],
                (h = t[0] || t[1] || t[2] || t[3]) &&
                  h === (t[3] || t[2] || t[1] || t[0]) &&
                  !h.length &&
                  (n ? (n[d] = h) : (this._root = h)),
                this)
              : ((this._root = o), this)
          );
        }),
        (et.removeAll = function(e) {
          for (var t = 0, n = e.length; t < n; ++t) this.remove(e[t]);
          return this;
        }),
        (et.root = function() {
          return this._root;
        }),
        (et.size = function() {
          var e = 0;
          return (
            this.visit(function(t) {
              if (!t.length)
                do {
                  ++e;
                } while ((t = t.next));
            }),
            e
          );
        }),
        (et.visit = function(e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            l = [],
            u = this._root;
          for (u && l.push(new Ye(u, this._x0, this._y0, this._x1, this._y1)); (t = l.pop()); )
            if (!e((u = t.node), (r = t.x0), (o = t.y0), (i = t.x1), (a = t.y1)) && u.length) {
              var c = (r + i) / 2,
                s = (o + a) / 2;
              (n = u[3]) && l.push(new Ye(n, c, s, i, a)),
                (n = u[2]) && l.push(new Ye(n, r, s, c, a)),
                (n = u[1]) && l.push(new Ye(n, c, o, i, s)),
                (n = u[0]) && l.push(new Ye(n, r, o, c, s));
            }
          return this;
        }),
        (et.visitAfter = function(e) {
          var t,
            n = [],
            r = [];
          for (this._root && n.push(new Ye(this._root, this._x0, this._y0, this._x1, this._y1)); (t = n.pop()); ) {
            var o = t.node;
            if (o.length) {
              var i,
                a = t.x0,
                l = t.y0,
                u = t.x1,
                c = t.y1,
                s = (a + u) / 2,
                f = (l + c) / 2;
              (i = o[0]) && n.push(new Ye(i, a, l, s, f)),
                (i = o[1]) && n.push(new Ye(i, s, l, u, f)),
                (i = o[2]) && n.push(new Ye(i, a, f, s, c)),
                (i = o[3]) && n.push(new Ye(i, s, f, u, c));
            }
            r.push(t);
          }
          for (; (t = r.pop()); ) e(t.node, t.x0, t.y0, t.x1, t.y1);
          return this;
        }),
        (et.x = function(e) {
          return arguments.length ? ((this._x = e), this) : this._x;
        }),
        (et.y = function(e) {
          return arguments.length ? ((this._y = e), this) : this._y;
        });
      var tt,
        nt,
        rt = 0,
        ot = 0,
        it = 0,
        at = 0,
        lt = 0,
        ut = 0,
        ct = "object" == typeof performance && performance.now ? performance : Date,
        st =
          "object" == typeof window && window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : function(e) {
                setTimeout(e, 17);
              };
      function ft() {
        return lt || (st(dt), (lt = ct.now() + ut));
      }
      function dt() {
        lt = 0;
      }
      function ht() {
        this._call = this._time = this._next = null;
      }
      function pt(e, t, n) {
        var r = new ht();
        return r.restart(e, t, n), r;
      }
      function gt() {
        (lt = (at = ct.now()) + ut), (rt = ot = 0);
        try {
          !(function() {
            ft(), ++rt;
            for (var e, t = tt; t; ) (e = lt - t._time) >= 0 && t._call.call(null, e), (t = t._next);
            --rt;
          })();
        } finally {
          (rt = 0),
            (function() {
              for (var e, t, n = tt, r = 1 / 0; n; )
                n._call
                  ? (r > n._time && (r = n._time), (e = n), (n = n._next))
                  : ((t = n._next), (n._next = null), (n = e ? (e._next = t) : (tt = t)));
              (nt = e), yt(r);
            })(),
            (lt = 0);
        }
      }
      function mt() {
        var e = ct.now(),
          t = e - at;
        t > 1e3 && ((ut -= t), (at = e));
      }
      function yt(e) {
        rt ||
          (ot && (ot = clearTimeout(ot)),
          e - lt > 24
            ? (e < 1 / 0 && (ot = setTimeout(gt, e - ct.now() - ut)), it && (it = clearInterval(it)))
            : (it || ((at = ct.now()), (it = setInterval(mt, 1e3))), (rt = 1), st(gt)));
      }
      function vt(e) {
        return e.x;
      }
      function bt(e) {
        return e.y;
      }
      ht.prototype = pt.prototype = {
        constructor: ht,
        restart: function(e, t, n) {
          if ("function" != typeof e) throw new TypeError("callback is not a function");
          (n = (null == n ? ft() : +n) + (null == t ? 0 : +t)),
            this._next || nt === this || (nt ? (nt._next = this) : (tt = this), (nt = this)),
            (this._call = e),
            (this._time = n),
            yt();
        },
        stop: function() {
          this._call && ((this._call = null), (this._time = 1 / 0), yt());
        },
      };
      var wt = Math.PI * (3 - Math.sqrt(5));
      var _t = Math.SQRT2;
      function kt(e) {
        return ((e = Math.exp(e)) + 1 / e) / 2;
      }
      function xt(e, t) {
        var n,
          r,
          o = e[0],
          i = e[1],
          a = e[2],
          l = t[0],
          u = t[1],
          c = t[2],
          s = l - o,
          f = u - i,
          d = s * s + f * f;
        if (d < 1e-12)
          (r = Math.log(c / a) / _t),
            (n = function(e) {
              return [o + e * s, i + e * f, a * Math.exp(_t * e * r)];
            });
        else {
          var h = Math.sqrt(d),
            p = (c * c - a * a + 4 * d) / (2 * a * 2 * h),
            g = (c * c - a * a - 4 * d) / (2 * c * 2 * h),
            m = Math.log(Math.sqrt(p * p + 1) - p),
            y = Math.log(Math.sqrt(g * g + 1) - g);
          (r = (y - m) / _t),
            (n = function(e) {
              var t,
                n = e * r,
                l = kt(m),
                u =
                  (a / (2 * h)) *
                  (l * ((t = _t * n + m), ((t = Math.exp(2 * t)) - 1) / (t + 1)) -
                    (function(e) {
                      return ((e = Math.exp(e)) - 1 / e) / 2;
                    })(m));
              return [o + u * s, i + u * f, (a * l) / kt(_t * n + m)];
            });
        }
        return (n.duration = 1e3 * r), n;
      }
      function St(e, t, n) {
        var r = new ht();
        return (
          (t = null == t ? 0 : +t),
          r.restart(
            function(n) {
              r.stop(), e(n + t);
            },
            t,
            n
          ),
          r
        );
      }
      var Et = s("start", "end", "cancel", "interrupt"),
        Ot = [];
      function Ct(e, t, n, r, o, i) {
        var a = e.__transition;
        if (a) {
          if (n in a) return;
        } else e.__transition = {};
        !(function(e, t, n) {
          var r,
            o = e.__transition;
          function i(u) {
            var c, s, f, d;
            if (1 !== n.state) return l();
            for (c in o)
              if ((d = o[c]).name === n.name) {
                if (3 === d.state) return St(i);
                4 === d.state
                  ? ((d.state = 6),
                    d.timer.stop(),
                    d.on.call("interrupt", e, e.__data__, d.index, d.group),
                    delete o[c])
                  : +c < t &&
                    ((d.state = 6), d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete o[c]);
              }
            if (
              (St(function() {
                3 === n.state && ((n.state = 4), n.timer.restart(a, n.delay, n.time), a(u));
              }),
              (n.state = 2),
              n.on.call("start", e, e.__data__, n.index, n.group),
              2 === n.state)
            ) {
              for (n.state = 3, r = new Array((f = n.tween.length)), c = 0, s = -1; c < f; ++c)
                (d = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (r[++s] = d);
              r.length = s + 1;
            }
          }
          function a(t) {
            for (
              var o = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(l), (n.state = 5), 1),
                i = -1,
                a = r.length;
              ++i < a;

            )
              r[i].call(e, o);
            5 === n.state && (n.on.call("end", e, e.__data__, n.index, n.group), l());
          }
          function l() {
            for (var r in ((n.state = 6), n.timer.stop(), delete o[t], o)) return;
            delete e.__transition;
          }
          (o[t] = n),
            (n.timer = pt(
              function(e) {
                (n.state = 1), n.timer.restart(i, n.delay, n.time), n.delay <= e && i(e - n.delay);
              },
              0,
              n.time
            ));
        })(e, n, {
          name: t,
          index: r,
          group: o,
          on: Et,
          tween: Ot,
          time: i.time,
          delay: i.delay,
          duration: i.duration,
          ease: i.ease,
          timer: null,
          state: 0,
        });
      }
      function Pt(e, t) {
        var n = Mt(e, t);
        if (n.state > 0) throw new Error("too late; already scheduled");
        return n;
      }
      function Nt(e, t) {
        var n = Mt(e, t);
        if (n.state > 3) throw new Error("too late; already running");
        return n;
      }
      function Mt(e, t) {
        var n = e.__transition;
        if (!n || !(n = n[t])) throw new Error("transition not found");
        return n;
      }
      function Tt(e, t) {
        var n,
          r,
          o,
          i = e.__transition,
          a = !0;
        if (i) {
          for (o in ((t = null == t ? null : t + ""), i))
            (n = i[o]).name === t
              ? ((r = n.state > 2 && n.state < 5),
                (n.state = 6),
                n.timer.stop(),
                n.on.call(r ? "interrupt" : "cancel", e, e.__data__, n.index, n.group),
                delete i[o])
              : (a = !1);
          a && delete e.__transition;
        }
      }
      function Lt(e, t) {
        return (
          (e = +e),
          (t = +t),
          function(n) {
            return e * (1 - n) + t * n;
          }
        );
      }
      var jt,
        At,
        zt,
        Rt,
        Dt = 180 / Math.PI,
        It = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
      function Ft(e, t, n, r, o, i) {
        var a, l, u;
        return (
          (a = Math.sqrt(e * e + t * t)) && ((e /= a), (t /= a)),
          (u = e * n + t * r) && ((n -= e * u), (r -= t * u)),
          (l = Math.sqrt(n * n + r * r)) && ((n /= l), (r /= l), (u /= l)),
          e * r < t * n && ((e = -e), (t = -t), (u = -u), (a = -a)),
          {
            translateX: o,
            translateY: i,
            rotate: Math.atan2(t, e) * Dt,
            skewX: Math.atan(u) * Dt,
            scaleX: a,
            scaleY: l,
          }
        );
      }
      function Ut(e, t, n, r) {
        function o(e) {
          return e.length ? e.pop() + " " : "";
        }
        return function(i, a) {
          var l = [],
            u = [];
          return (
            (i = e(i)),
            (a = e(a)),
            (function(e, r, o, i, a, l) {
              if (e !== o || r !== i) {
                var u = a.push("translate(", null, t, null, n);
                l.push({ i: u - 4, x: Lt(e, o) }, { i: u - 2, x: Lt(r, i) });
              } else (o || i) && a.push("translate(" + o + t + i + n);
            })(i.translateX, i.translateY, a.translateX, a.translateY, l, u),
            (function(e, t, n, i) {
              e !== t
                ? (e - t > 180 ? (t += 360) : t - e > 180 && (e += 360),
                  i.push({ i: n.push(o(n) + "rotate(", null, r) - 2, x: Lt(e, t) }))
                : t && n.push(o(n) + "rotate(" + t + r);
            })(i.rotate, a.rotate, l, u),
            (function(e, t, n, i) {
              e !== t
                ? i.push({ i: n.push(o(n) + "skewX(", null, r) - 2, x: Lt(e, t) })
                : t && n.push(o(n) + "skewX(" + t + r);
            })(i.skewX, a.skewX, l, u),
            (function(e, t, n, r, i, a) {
              if (e !== n || t !== r) {
                var l = i.push(o(i) + "scale(", null, ",", null, ")");
                a.push({ i: l - 4, x: Lt(e, n) }, { i: l - 2, x: Lt(t, r) });
              } else (1 === n && 1 === r) || i.push(o(i) + "scale(" + n + "," + r + ")");
            })(i.scaleX, i.scaleY, a.scaleX, a.scaleY, l, u),
            (i = a = null),
            function(e) {
              for (var t, n = -1, r = u.length; ++n < r; ) l[(t = u[n]).i] = t.x(e);
              return l.join("");
            }
          );
        };
      }
      var Bt = Ut(
          function(e) {
            return "none" === e
              ? It
              : (jt ||
                  ((jt = document.createElement("DIV")), (At = document.documentElement), (zt = document.defaultView)),
                (jt.style.transform = e),
                (e = zt.getComputedStyle(At.appendChild(jt), null).getPropertyValue("transform")),
                At.removeChild(jt),
                Ft(+(e = e.slice(7, -1).split(","))[0], +e[1], +e[2], +e[3], +e[4], +e[5]));
          },
          "px, ",
          "px)",
          "deg)"
        ),
        Wt = Ut(
          function(e) {
            return null == e
              ? It
              : (Rt || (Rt = document.createElementNS("http://www.w3.org/2000/svg", "g")),
                Rt.setAttribute("transform", e),
                (e = Rt.transform.baseVal.consolidate()) ? Ft((e = e.matrix).a, e.b, e.c, e.d, e.e, e.f) : It);
          },
          ", ",
          ")",
          ")"
        );
      function Ht(e, t) {
        var n, r;
        return function() {
          var o = Nt(this, e),
            i = o.tween;
          if (i !== n)
            for (var a = 0, l = (r = n = i).length; a < l; ++a)
              if (r[a].name === t) {
                (r = r.slice()).splice(a, 1);
                break;
              }
          o.tween = r;
        };
      }
      function Vt(e, t, n) {
        var r, o;
        if ("function" != typeof n) throw new Error();
        return function() {
          var i = Nt(this, e),
            a = i.tween;
          if (a !== r) {
            o = (r = a).slice();
            for (var l = { name: t, value: n }, u = 0, c = o.length; u < c; ++u)
              if (o[u].name === t) {
                o[u] = l;
                break;
              }
            u === c && o.push(l);
          }
          i.tween = o;
        };
      }
      function qt(e, t, n) {
        var r = e._id;
        return (
          e.each(function() {
            var e = Nt(this, r);
            (e.value || (e.value = {}))[t] = n.apply(this, arguments);
          }),
          function(e) {
            return Mt(e, r).value[t];
          }
        );
      }
      function Gt(e, t, n) {
        (e.prototype = t.prototype = n), (n.constructor = e);
      }
      function $t(e, t) {
        var n = Object.create(e.prototype);
        for (var r in t) n[r] = t[r];
        return n;
      }
      function Yt() {}
      var Xt = 0.7,
        Qt = 1 / Xt,
        Kt = "\\s*([+-]?\\d+)\\s*",
        Zt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        Jt = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        en = /^#([0-9a-f]{3,8})$/,
        tn = new RegExp("^rgb\\(" + [Kt, Kt, Kt] + "\\)$"),
        nn = new RegExp("^rgb\\(" + [Jt, Jt, Jt] + "\\)$"),
        rn = new RegExp("^rgba\\(" + [Kt, Kt, Kt, Zt] + "\\)$"),
        on = new RegExp("^rgba\\(" + [Jt, Jt, Jt, Zt] + "\\)$"),
        an = new RegExp("^hsl\\(" + [Zt, Jt, Jt] + "\\)$"),
        ln = new RegExp("^hsla\\(" + [Zt, Jt, Jt, Zt] + "\\)$"),
        un = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074,
        };
      function cn() {
        return this.rgb().formatHex();
      }
      function sn() {
        return this.rgb().formatRgb();
      }
      function fn(e) {
        var t, n;
        return (
          (e = (e + "").trim().toLowerCase()),
          (t = en.exec(e))
            ? ((n = t[1].length),
              (t = parseInt(t[1], 16)),
              6 === n
                ? dn(t)
                : 3 === n
                ? new mn(((t >> 8) & 15) | ((t >> 4) & 240), ((t >> 4) & 15) | (240 & t), ((15 & t) << 4) | (15 & t), 1)
                : 8 === n
                ? hn((t >> 24) & 255, (t >> 16) & 255, (t >> 8) & 255, (255 & t) / 255)
                : 4 === n
                ? hn(
                    ((t >> 12) & 15) | ((t >> 8) & 240),
                    ((t >> 8) & 15) | ((t >> 4) & 240),
                    ((t >> 4) & 15) | (240 & t),
                    (((15 & t) << 4) | (15 & t)) / 255
                  )
                : null)
            : (t = tn.exec(e))
            ? new mn(t[1], t[2], t[3], 1)
            : (t = nn.exec(e))
            ? new mn((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, 1)
            : (t = rn.exec(e))
            ? hn(t[1], t[2], t[3], t[4])
            : (t = on.exec(e))
            ? hn((255 * t[1]) / 100, (255 * t[2]) / 100, (255 * t[3]) / 100, t[4])
            : (t = an.exec(e))
            ? wn(t[1], t[2] / 100, t[3] / 100, 1)
            : (t = ln.exec(e))
            ? wn(t[1], t[2] / 100, t[3] / 100, t[4])
            : un.hasOwnProperty(e)
            ? dn(un[e])
            : "transparent" === e
            ? new mn(NaN, NaN, NaN, 0)
            : null
        );
      }
      function dn(e) {
        return new mn((e >> 16) & 255, (e >> 8) & 255, 255 & e, 1);
      }
      function hn(e, t, n, r) {
        return r <= 0 && (e = t = n = NaN), new mn(e, t, n, r);
      }
      function pn(e) {
        return e instanceof Yt || (e = fn(e)), e ? new mn((e = e.rgb()).r, e.g, e.b, e.opacity) : new mn();
      }
      function gn(e, t, n, r) {
        return 1 === arguments.length ? pn(e) : new mn(e, t, n, null == r ? 1 : r);
      }
      function mn(e, t, n, r) {
        (this.r = +e), (this.g = +t), (this.b = +n), (this.opacity = +r);
      }
      function yn() {
        return "#" + bn(this.r) + bn(this.g) + bn(this.b);
      }
      function vn() {
        var e = this.opacity;
        return (
          (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "rgb(" : "rgba(") +
          Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
          ", " +
          Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
          (1 === e ? ")" : ", " + e + ")")
        );
      }
      function bn(e) {
        return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16);
      }
      function wn(e, t, n, r) {
        return r <= 0 ? (e = t = n = NaN) : n <= 0 || n >= 1 ? (e = t = NaN) : t <= 0 && (e = NaN), new kn(e, t, n, r);
      }
      function _n(e) {
        if (e instanceof kn) return new kn(e.h, e.s, e.l, e.opacity);
        if ((e instanceof Yt || (e = fn(e)), !e)) return new kn();
        if (e instanceof kn) return e;
        var t = (e = e.rgb()).r / 255,
          n = e.g / 255,
          r = e.b / 255,
          o = Math.min(t, n, r),
          i = Math.max(t, n, r),
          a = NaN,
          l = i - o,
          u = (i + o) / 2;
        return (
          l
            ? ((a = t === i ? (n - r) / l + 6 * (n < r) : n === i ? (r - t) / l + 2 : (t - n) / l + 4),
              (l /= u < 0.5 ? i + o : 2 - i - o),
              (a *= 60))
            : (l = u > 0 && u < 1 ? 0 : a),
          new kn(a, l, u, e.opacity)
        );
      }
      function kn(e, t, n, r) {
        (this.h = +e), (this.s = +t), (this.l = +n), (this.opacity = +r);
      }
      function xn(e, t, n) {
        return 255 * (e < 60 ? t + ((n - t) * e) / 60 : e < 180 ? n : e < 240 ? t + ((n - t) * (240 - e)) / 60 : t);
      }
      function Sn(e, t, n, r, o) {
        var i = e * e,
          a = i * e;
        return ((1 - 3 * e + 3 * i - a) * t + (4 - 6 * i + 3 * a) * n + (1 + 3 * e + 3 * i - 3 * a) * r + a * o) / 6;
      }
      function En(e) {
        return function() {
          return e;
        };
      }
      function On(e, t) {
        var n = t - e;
        return n
          ? (function(e, t) {
              return function(n) {
                return e + n * t;
              };
            })(e, n)
          : En(isNaN(e) ? t : e);
      }
      Gt(Yt, fn, {
        copy: function(e) {
          return Object.assign(new this.constructor(), this, e);
        },
        displayable: function() {
          return this.rgb().displayable();
        },
        hex: cn,
        formatHex: cn,
        formatHsl: function() {
          return _n(this).formatHsl();
        },
        formatRgb: sn,
        toString: sn,
      }),
        Gt(
          mn,
          gn,
          $t(Yt, {
            brighter: function(e) {
              return (e = null == e ? Qt : Math.pow(Qt, e)), new mn(this.r * e, this.g * e, this.b * e, this.opacity);
            },
            darker: function(e) {
              return (e = null == e ? Xt : Math.pow(Xt, e)), new mn(this.r * e, this.g * e, this.b * e, this.opacity);
            },
            rgb: function() {
              return this;
            },
            displayable: function() {
              return (
                -0.5 <= this.r &&
                this.r < 255.5 &&
                -0.5 <= this.g &&
                this.g < 255.5 &&
                -0.5 <= this.b &&
                this.b < 255.5 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            hex: yn,
            formatHex: yn,
            formatRgb: vn,
            toString: vn,
          })
        ),
        Gt(
          kn,
          function(e, t, n, r) {
            return 1 === arguments.length ? _n(e) : new kn(e, t, n, null == r ? 1 : r);
          },
          $t(Yt, {
            brighter: function(e) {
              return (e = null == e ? Qt : Math.pow(Qt, e)), new kn(this.h, this.s, this.l * e, this.opacity);
            },
            darker: function(e) {
              return (e = null == e ? Xt : Math.pow(Xt, e)), new kn(this.h, this.s, this.l * e, this.opacity);
            },
            rgb: function() {
              var e = (this.h % 360) + 360 * (this.h < 0),
                t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
                n = this.l,
                r = n + (n < 0.5 ? n : 1 - n) * t,
                o = 2 * n - r;
              return new mn(
                xn(e >= 240 ? e - 240 : e + 120, o, r),
                xn(e, o, r),
                xn(e < 120 ? e + 240 : e - 120, o, r),
                this.opacity
              );
            },
            displayable: function() {
              return (
                ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                0 <= this.l &&
                this.l <= 1 &&
                0 <= this.opacity &&
                this.opacity <= 1
              );
            },
            formatHsl: function() {
              var e = this.opacity;
              return (
                (1 === (e = isNaN(e) ? 1 : Math.max(0, Math.min(1, e))) ? "hsl(" : "hsla(") +
                (this.h || 0) +
                ", " +
                100 * (this.s || 0) +
                "%, " +
                100 * (this.l || 0) +
                "%" +
                (1 === e ? ")" : ", " + e + ")")
              );
            },
          })
        );
      const Cn = (function e(t) {
        var n = (function(e) {
          return 1 == (e = +e)
            ? On
            : function(t, n) {
                return n - t
                  ? (function(e, t, n) {
                      return (
                        (e = Math.pow(e, n)),
                        (t = Math.pow(t, n) - e),
                        (n = 1 / n),
                        function(r) {
                          return Math.pow(e + r * t, n);
                        }
                      );
                    })(t, n, e)
                  : En(isNaN(t) ? n : t);
              };
        })(t);
        function r(e, t) {
          var r = n((e = gn(e)).r, (t = gn(t)).r),
            o = n(e.g, t.g),
            i = n(e.b, t.b),
            a = On(e.opacity, t.opacity);
          return function(t) {
            return (e.r = r(t)), (e.g = o(t)), (e.b = i(t)), (e.opacity = a(t)), e + "";
          };
        }
        return (r.gamma = e), r;
      })(1);
      function Pn(e) {
        return function(t) {
          var n,
            r,
            o = t.length,
            i = new Array(o),
            a = new Array(o),
            l = new Array(o);
          for (n = 0; n < o; ++n) (r = gn(t[n])), (i[n] = r.r || 0), (a[n] = r.g || 0), (l[n] = r.b || 0);
          return (
            (i = e(i)),
            (a = e(a)),
            (l = e(l)),
            (r.opacity = 1),
            function(e) {
              return (r.r = i(e)), (r.g = a(e)), (r.b = l(e)), r + "";
            }
          );
        };
      }
      Pn(function(e) {
        var t = e.length - 1;
        return function(n) {
          var r = n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), t - 1) : Math.floor(n * t),
            o = e[r],
            i = e[r + 1],
            a = r > 0 ? e[r - 1] : 2 * o - i,
            l = r < t - 1 ? e[r + 2] : 2 * i - o;
          return Sn((n - r / t) * t, a, o, i, l);
        };
      }),
        Pn(function(e) {
          var t = e.length;
          return function(n) {
            var r = Math.floor(((n %= 1) < 0 ? ++n : n) * t),
              o = e[(r + t - 1) % t],
              i = e[r % t],
              a = e[(r + 1) % t],
              l = e[(r + 2) % t];
            return Sn((n - r / t) * t, o, i, a, l);
          };
        });
      var Nn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        Mn = new RegExp(Nn.source, "g");
      function Tn(e, t) {
        var n,
          r,
          o,
          i = (Nn.lastIndex = Mn.lastIndex = 0),
          a = -1,
          l = [],
          u = [];
        for (e += "", t += ""; (n = Nn.exec(e)) && (r = Mn.exec(t)); )
          (o = r.index) > i && ((o = t.slice(i, o)), l[a] ? (l[a] += o) : (l[++a] = o)),
            (n = n[0]) === (r = r[0])
              ? l[a]
                ? (l[a] += r)
                : (l[++a] = r)
              : ((l[++a] = null), u.push({ i: a, x: Lt(n, r) })),
            (i = Mn.lastIndex);
        return (
          i < t.length && ((o = t.slice(i)), l[a] ? (l[a] += o) : (l[++a] = o)),
          l.length < 2
            ? u[0]
              ? (function(e) {
                  return function(t) {
                    return e(t) + "";
                  };
                })(u[0].x)
              : (function(e) {
                  return function() {
                    return e;
                  };
                })(t)
            : ((t = u.length),
              function(e) {
                for (var n, r = 0; r < t; ++r) l[(n = u[r]).i] = n.x(e);
                return l.join("");
              })
        );
      }
      function Ln(e, t) {
        var n;
        return ("number" == typeof t ? Lt : t instanceof fn ? Cn : (n = fn(t)) ? ((t = n), Cn) : Tn)(e, t);
      }
      function jn(e) {
        return function() {
          this.removeAttribute(e);
        };
      }
      function An(e) {
        return function() {
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function zn(e, t, n) {
        var r,
          o,
          i = n + "";
        return function() {
          var a = this.getAttribute(e);
          return a === i ? null : a === r ? o : (o = t((r = a), n));
        };
      }
      function Rn(e, t, n) {
        var r,
          o,
          i = n + "";
        return function() {
          var a = this.getAttributeNS(e.space, e.local);
          return a === i ? null : a === r ? o : (o = t((r = a), n));
        };
      }
      function Dn(e, t, n) {
        var r, o, i;
        return function() {
          var a,
            l,
            u = n(this);
          if (null != u)
            return (a = this.getAttribute(e)) === (l = u + "")
              ? null
              : a === r && l === o
              ? i
              : ((o = l), (i = t((r = a), u)));
          this.removeAttribute(e);
        };
      }
      function In(e, t, n) {
        var r, o, i;
        return function() {
          var a,
            l,
            u = n(this);
          if (null != u)
            return (a = this.getAttributeNS(e.space, e.local)) === (l = u + "")
              ? null
              : a === r && l === o
              ? i
              : ((o = l), (i = t((r = a), u)));
          this.removeAttributeNS(e.space, e.local);
        };
      }
      function Fn(e, t) {
        return function(n) {
          this.setAttribute(e, t.call(this, n));
        };
      }
      function Un(e, t) {
        return function(n) {
          this.setAttributeNS(e.space, e.local, t.call(this, n));
        };
      }
      function Bn(e, t) {
        var n, r;
        function o() {
          var o = t.apply(this, arguments);
          return o !== r && (n = (r = o) && Un(e, o)), n;
        }
        return (o._value = t), o;
      }
      function Wn(e, t) {
        var n, r;
        function o() {
          var o = t.apply(this, arguments);
          return o !== r && (n = (r = o) && Fn(e, o)), n;
        }
        return (o._value = t), o;
      }
      function Hn(e, t) {
        return function() {
          Pt(this, e).delay = +t.apply(this, arguments);
        };
      }
      function Vn(e, t) {
        return (
          (t = +t),
          function() {
            Pt(this, e).delay = t;
          }
        );
      }
      function qn(e, t) {
        return function() {
          Nt(this, e).duration = +t.apply(this, arguments);
        };
      }
      function Gn(e, t) {
        return (
          (t = +t),
          function() {
            Nt(this, e).duration = t;
          }
        );
      }
      function $n(e, t) {
        if ("function" != typeof t) throw new Error();
        return function() {
          Nt(this, e).ease = t;
        };
      }
      function Yn(e, t, n) {
        var r,
          o,
          i = (function(e) {
            return (e + "")
              .trim()
              .split(/^|\s+/)
              .every(function(e) {
                var t = e.indexOf(".");
                return t >= 0 && (e = e.slice(0, t)), !e || "start" === e;
              });
          })(t)
            ? Pt
            : Nt;
        return function() {
          var a = i(this, e),
            l = a.on;
          l !== r && (o = (r = l).copy()).on(t, n), (a.on = o);
        };
      }
      var Xn = Se.prototype.constructor;
      function Qn(e) {
        return function() {
          this.style.removeProperty(e);
        };
      }
      function Kn(e, t, n) {
        return function(r) {
          this.style.setProperty(e, t.call(this, r), n);
        };
      }
      function Zn(e, t, n) {
        var r, o;
        function i() {
          var i = t.apply(this, arguments);
          return i !== o && (r = (o = i) && Kn(e, i, n)), r;
        }
        return (i._value = t), i;
      }
      function Jn(e) {
        return function(t) {
          this.textContent = e.call(this, t);
        };
      }
      function er(e) {
        var t, n;
        function r() {
          var r = e.apply(this, arguments);
          return r !== n && (t = (n = r) && Jn(r)), t;
        }
        return (r._value = e), r;
      }
      var tr = 0;
      function nr(e, t, n, r) {
        (this._groups = e), (this._parents = t), (this._name = n), (this._id = r);
      }
      function rr() {
        return ++tr;
      }
      var or = Se.prototype;
      nr.prototype = function(e) {
        return Se().transition(e);
      }.prototype = {
        constructor: nr,
        select: function(e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = x(e));
          for (var r = this._groups, o = r.length, i = new Array(o), a = 0; a < o; ++a)
            for (var l, u, c = r[a], s = c.length, f = (i[a] = new Array(s)), d = 0; d < s; ++d)
              (l = c[d]) &&
                (u = e.call(l, l.__data__, d, c)) &&
                ("__data__" in l && (u.__data__ = l.__data__), (f[d] = u), Ct(f[d], t, n, d, f, Mt(l, n)));
          return new nr(i, this._parents, t, n);
        },
        selectAll: function(e) {
          var t = this._name,
            n = this._id;
          "function" != typeof e && (e = E(e));
          for (var r = this._groups, o = r.length, i = [], a = [], l = 0; l < o; ++l)
            for (var u, c = r[l], s = c.length, f = 0; f < s; ++f)
              if ((u = c[f])) {
                for (var d, h = e.call(u, u.__data__, f, c), p = Mt(u, n), g = 0, m = h.length; g < m; ++g)
                  (d = h[g]) && Ct(d, t, n, g, h, p);
                i.push(h), a.push(u);
              }
          return new nr(i, a, t, n);
        },
        filter: function(e) {
          "function" != typeof e && (e = O(e));
          for (var t = this._groups, n = t.length, r = new Array(n), o = 0; o < n; ++o)
            for (var i, a = t[o], l = a.length, u = (r[o] = []), c = 0; c < l; ++c)
              (i = a[c]) && e.call(i, i.__data__, c, a) && u.push(i);
          return new nr(r, this._parents, this._name, this._id);
        },
        merge: function(e) {
          if (e._id !== this._id) throw new Error();
          for (
            var t = this._groups,
              n = e._groups,
              r = t.length,
              o = n.length,
              i = Math.min(r, o),
              a = new Array(r),
              l = 0;
            l < i;
            ++l
          )
            for (var u, c = t[l], s = n[l], f = c.length, d = (a[l] = new Array(f)), h = 0; h < f; ++h)
              (u = c[h] || s[h]) && (d[h] = u);
          for (; l < r; ++l) a[l] = t[l];
          return new nr(a, this._parents, this._name, this._id);
        },
        selection: function() {
          return new Xn(this._groups, this._parents);
        },
        transition: function() {
          for (var e = this._name, t = this._id, n = rr(), r = this._groups, o = r.length, i = 0; i < o; ++i)
            for (var a, l = r[i], u = l.length, c = 0; c < u; ++c)
              if ((a = l[c])) {
                var s = Mt(a, t);
                Ct(a, e, n, c, l, {
                  time: s.time + s.delay + s.duration,
                  delay: 0,
                  duration: s.duration,
                  ease: s.ease,
                });
              }
          return new nr(r, this._parents, e, n);
        },
        call: or.call,
        nodes: or.nodes,
        node: or.node,
        size: or.size,
        empty: or.empty,
        each: or.each,
        on: function(e, t) {
          var n = this._id;
          return arguments.length < 2 ? Mt(this.node(), n).on.on(e) : this.each(Yn(n, e, t));
        },
        attr: function(e, t) {
          var n = A(e),
            r = "transform" === n ? Wt : Ln;
          return this.attrTween(
            e,
            "function" == typeof t
              ? (n.local ? In : Dn)(n, r, qt(this, "attr." + e, t))
              : null == t
              ? (n.local ? An : jn)(n)
              : (n.local ? Rn : zn)(n, r, t)
          );
        },
        attrTween: function(e, t) {
          var n = "attr." + e;
          if (arguments.length < 2) return (n = this.tween(n)) && n._value;
          if (null == t) return this.tween(n, null);
          if ("function" != typeof t) throw new Error();
          var r = A(e);
          return this.tween(n, (r.local ? Bn : Wn)(r, t));
        },
        style: function(e, t, n) {
          var r = "transform" == (e += "") ? Bt : Ln;
          return null == t
            ? this.styleTween(
                e,
                (function(e, t) {
                  var n, r, o;
                  return function() {
                    var i = q(this, e),
                      a = (this.style.removeProperty(e), q(this, e));
                    return i === a ? null : i === n && a === r ? o : (o = t((n = i), (r = a)));
                  };
                })(e, r)
              ).on("end.style." + e, Qn(e))
            : "function" == typeof t
            ? this.styleTween(
                e,
                (function(e, t, n) {
                  var r, o, i;
                  return function() {
                    var a = q(this, e),
                      l = n(this),
                      u = l + "";
                    return (
                      null == l && (this.style.removeProperty(e), (u = l = q(this, e))),
                      a === u ? null : a === r && u === o ? i : ((o = u), (i = t((r = a), l)))
                    );
                  };
                })(e, r, qt(this, "style." + e, t))
              ).each(
                (function(e, t) {
                  var n,
                    r,
                    o,
                    i,
                    a = "style." + t,
                    l = "end." + a;
                  return function() {
                    var u = Nt(this, e),
                      c = u.on,
                      s = null == u.value[a] ? i || (i = Qn(t)) : void 0;
                    (c === n && o === s) || (r = (n = c).copy()).on(l, (o = s)), (u.on = r);
                  };
                })(this._id, e)
              )
            : this.styleTween(
                e,
                (function(e, t, n) {
                  var r,
                    o,
                    i = n + "";
                  return function() {
                    var a = q(this, e);
                    return a === i ? null : a === r ? o : (o = t((r = a), n));
                  };
                })(e, r, t),
                n
              ).on("end.style." + e, null);
        },
        styleTween: function(e, t, n) {
          var r = "style." + (e += "");
          if (arguments.length < 2) return (r = this.tween(r)) && r._value;
          if (null == t) return this.tween(r, null);
          if ("function" != typeof t) throw new Error();
          return this.tween(r, Zn(e, t, null == n ? "" : n));
        },
        text: function(e) {
          return this.tween(
            "text",
            "function" == typeof e
              ? (function(e) {
                  return function() {
                    var t = e(this);
                    this.textContent = null == t ? "" : t;
                  };
                })(qt(this, "text", e))
              : (function(e) {
                  return function() {
                    this.textContent = e;
                  };
                })(null == e ? "" : e + "")
          );
        },
        textTween: function(e) {
          var t = "text";
          if (arguments.length < 1) return (t = this.tween(t)) && t._value;
          if (null == e) return this.tween(t, null);
          if ("function" != typeof e) throw new Error();
          return this.tween(t, er(e));
        },
        remove: function() {
          return this.on(
            "end.remove",
            (function(e) {
              return function() {
                var t = this.parentNode;
                for (var n in this.__transition) if (+n !== e) return;
                t && t.removeChild(this);
              };
            })(this._id)
          );
        },
        tween: function(e, t) {
          var n = this._id;
          if (((e += ""), arguments.length < 2)) {
            for (var r, o = Mt(this.node(), n).tween, i = 0, a = o.length; i < a; ++i)
              if ((r = o[i]).name === e) return r.value;
            return null;
          }
          return this.each((null == t ? Ht : Vt)(n, e, t));
        },
        delay: function(e) {
          var t = this._id;
          return arguments.length ? this.each(("function" == typeof e ? Hn : Vn)(t, e)) : Mt(this.node(), t).delay;
        },
        duration: function(e) {
          var t = this._id;
          return arguments.length ? this.each(("function" == typeof e ? qn : Gn)(t, e)) : Mt(this.node(), t).duration;
        },
        ease: function(e) {
          var t = this._id;
          return arguments.length ? this.each($n(t, e)) : Mt(this.node(), t).ease;
        },
        end: function() {
          var e,
            t,
            n = this,
            r = n._id,
            o = n.size();
          return new Promise(function(i, a) {
            var l = { value: a },
              u = {
                value: function() {
                  0 == --o && i();
                },
              };
            n.each(function() {
              var n = Nt(this, r),
                o = n.on;
              o !== e && ((t = (e = o).copy())._.cancel.push(l), t._.interrupt.push(l), t._.end.push(u)), (n.on = t);
            });
          });
        },
      };
      var ir = {
        time: null,
        delay: 0,
        duration: 250,
        ease: function(e) {
          return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
        },
      };
      function ar(e, t) {
        for (var n; !(n = e.__transition) || !(n = n[t]); ) if (!(e = e.parentNode)) return (ir.time = ft()), ir;
        return n;
      }
      function lr(e) {
        return function() {
          return e;
        };
      }
      function ur(e, t, n) {
        (this.target = e), (this.type = t), (this.transform = n);
      }
      function cr(e, t, n) {
        (this.k = e), (this.x = t), (this.y = n);
      }
      (Se.prototype.interrupt = function(e) {
        return this.each(function() {
          Tt(this, e);
        });
      }),
        (Se.prototype.transition = function(e) {
          var t, n;
          e instanceof nr
            ? ((t = e._id), (e = e._name))
            : ((t = rr()), ((n = ir).time = ft()), (e = null == e ? null : e + ""));
          for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
            for (var a, l = r[i], u = l.length, c = 0; c < u; ++c) (a = l[c]) && Ct(a, e, t, c, l, n || ar(a, t));
          return new nr(r, this._parents, e, t);
        }),
        (cr.prototype = {
          constructor: cr,
          scale: function(e) {
            return 1 === e ? this : new cr(this.k * e, this.x, this.y);
          },
          translate: function(e, t) {
            return (0 === e) & (0 === t) ? this : new cr(this.k, this.x + this.k * e, this.y + this.k * t);
          },
          apply: function(e) {
            return [e[0] * this.k + this.x, e[1] * this.k + this.y];
          },
          applyX: function(e) {
            return e * this.k + this.x;
          },
          applyY: function(e) {
            return e * this.k + this.y;
          },
          invert: function(e) {
            return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
          },
          invertX: function(e) {
            return (e - this.x) / this.k;
          },
          invertY: function(e) {
            return (e - this.y) / this.k;
          },
          rescaleX: function(e) {
            return e.copy().domain(
              e
                .range()
                .map(this.invertX, this)
                .map(e.invert, e)
            );
          },
          rescaleY: function(e) {
            return e.copy().domain(
              e
                .range()
                .map(this.invertY, this)
                .map(e.invert, e)
            );
          },
          toString: function() {
            return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
          },
        });
      var sr = new cr(1, 0, 0);
      function fr() {
        d.stopImmediatePropagation();
      }
      function dr() {
        d.preventDefault(), d.stopImmediatePropagation();
      }
      function hr() {
        return !d.ctrlKey && !d.button;
      }
      function pr() {
        var e = this;
        return e instanceof SVGElement
          ? (e = e.ownerSVGElement || e).hasAttribute("viewBox")
            ? [
                [(e = e.viewBox.baseVal).x, e.y],
                [e.x + e.width, e.y + e.height],
              ]
            : [
                [0, 0],
                [e.width.baseVal.value, e.height.baseVal.value],
              ]
          : [
              [0, 0],
              [e.clientWidth, e.clientHeight],
            ];
      }
      function gr() {
        return this.__zoom || sr;
      }
      function mr() {
        return -d.deltaY * (1 === d.deltaMode ? 0.05 : d.deltaMode ? 1 : 0.002);
      }
      function yr() {
        return navigator.maxTouchPoints || "ontouchstart" in this;
      }
      function vr(e, t, n) {
        var r = e.invertX(t[0][0]) - n[0][0],
          o = e.invertX(t[1][0]) - n[1][0],
          i = e.invertY(t[0][1]) - n[0][1],
          a = e.invertY(t[1][1]) - n[1][1];
        return e.translate(
          o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
          a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a)
        );
      }
      function br() {
        var e,
          t,
          n = hr,
          r = pr,
          o = vr,
          i = mr,
          a = yr,
          l = [0, 1 / 0],
          u = [
            [-1 / 0, -1 / 0],
            [1 / 0, 1 / 0],
          ],
          c = 250,
          f = xt,
          h = s("start", "zoom", "end"),
          p = 500,
          g = 0;
        function m(e) {
          e.property("__zoom", gr)
            .on("wheel.zoom", E)
            .on("mousedown.zoom", O)
            .on("dblclick.zoom", C)
            .filter(a)
            .on("touchstart.zoom", P)
            .on("touchmove.zoom", N)
            .on("touchend.zoom touchcancel.zoom", M)
            .style("touch-action", "none")
            .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
        }
        function y(e, t) {
          return (t = Math.max(l[0], Math.min(l[1], t))) === e.k ? e : new cr(t, e.x, e.y);
        }
        function b(e, t, n) {
          var r = t[0] - n[0] * e.k,
            o = t[1] - n[1] * e.k;
          return r === e.x && o === e.y ? e : new cr(e.k, r, o);
        }
        function w(e) {
          return [(+e[0][0] + +e[1][0]) / 2, (+e[0][1] + +e[1][1]) / 2];
        }
        function k(e, t, n) {
          e.on("start.zoom", function() {
            x(this, arguments).start();
          })
            .on("interrupt.zoom end.zoom", function() {
              x(this, arguments).end();
            })
            .tween("zoom", function() {
              var e = this,
                o = arguments,
                i = x(e, o),
                a = r.apply(e, o),
                l = null == n ? w(a) : "function" == typeof n ? n.apply(e, o) : n,
                u = Math.max(a[1][0] - a[0][0], a[1][1] - a[0][1]),
                c = e.__zoom,
                s = "function" == typeof t ? t.apply(e, o) : t,
                d = f(c.invert(l).concat(u / c.k), s.invert(l).concat(u / s.k));
              return function(e) {
                if (1 === e) e = s;
                else {
                  var t = d(e),
                    n = u / t[2];
                  e = new cr(n, l[0] - t[0] * n, l[1] - t[1] * n);
                }
                i.zoom(null, e);
              };
            });
        }
        function x(e, t, n) {
          return (!n && e.__zooming) || new S(e, t);
        }
        function S(e, t) {
          (this.that = e), (this.args = t), (this.active = 0), (this.extent = r.apply(e, t)), (this.taps = 0);
        }
        function E() {
          if (n.apply(this, arguments)) {
            var e = x(this, arguments),
              t = this.__zoom,
              r = Math.max(l[0], Math.min(l[1], t.k * Math.pow(2, i.apply(this, arguments)))),
              a = _(this);
            if (e.wheel)
              (e.mouse[0][0] === a[0] && e.mouse[0][1] === a[1]) || (e.mouse[1] = t.invert((e.mouse[0] = a))),
                clearTimeout(e.wheel);
            else {
              if (t.k === r) return;
              (e.mouse = [a, t.invert(a)]), Tt(this), e.start();
            }
            dr(), (e.wheel = setTimeout(c, 150)), e.zoom("mouse", o(b(y(t, r), e.mouse[0], e.mouse[1]), e.extent, u));
          }
          function c() {
            (e.wheel = null), e.end();
          }
        }
        function O() {
          if (!t && n.apply(this, arguments)) {
            var e = x(this, arguments, !0),
              r = Ee(d.view)
                .on("mousemove.zoom", c, !0)
                .on("mouseup.zoom", s, !0),
              i = _(this),
              a = d.clientX,
              l = d.clientY;
            Ne(d.view), fr(), (e.mouse = [i, this.__zoom.invert(i)]), Tt(this), e.start();
          }
          function c() {
            if ((dr(), !e.moved)) {
              var t = d.clientX - a,
                n = d.clientY - l;
              e.moved = t * t + n * n > g;
            }
            e.zoom("mouse", o(b(e.that.__zoom, (e.mouse[0] = _(e.that)), e.mouse[1]), e.extent, u));
          }
          function s() {
            r.on("mousemove.zoom mouseup.zoom", null), Me(d.view, e.moved), dr(), e.end();
          }
        }
        function C() {
          if (n.apply(this, arguments)) {
            var e = this.__zoom,
              t = _(this),
              i = e.invert(t),
              a = e.k * (d.shiftKey ? 0.5 : 2),
              l = o(b(y(e, a), t, i), r.apply(this, arguments), u);
            dr(),
              c > 0
                ? Ee(this)
                    .transition()
                    .duration(c)
                    .call(k, l, t)
                : Ee(this).call(m.transform, l);
          }
        }
        function P() {
          if (n.apply(this, arguments)) {
            var t,
              r,
              o,
              i,
              a = d.touches,
              l = a.length,
              u = x(this, arguments, d.changedTouches.length === l);
            for (fr(), r = 0; r < l; ++r)
              (i = [(i = Oe(this, a, (o = a[r]).identifier)), this.__zoom.invert(i), o.identifier]),
                u.touch0
                  ? u.touch1 || u.touch0[2] === i[2] || ((u.touch1 = i), (u.taps = 0))
                  : ((u.touch0 = i), (t = !0), (u.taps = 1 + !!e));
            e && (e = clearTimeout(e)),
              t &&
                (u.taps < 2 &&
                  (e = setTimeout(function() {
                    e = null;
                  }, p)),
                Tt(this),
                u.start());
          }
        }
        function N() {
          if (this.__zooming) {
            var t,
              n,
              r,
              i,
              a = x(this, arguments),
              l = d.changedTouches,
              c = l.length;
            for (dr(), e && (e = clearTimeout(e)), a.taps = 0, t = 0; t < c; ++t)
              (r = Oe(this, l, (n = l[t]).identifier)),
                a.touch0 && a.touch0[2] === n.identifier
                  ? (a.touch0[0] = r)
                  : a.touch1 && a.touch1[2] === n.identifier && (a.touch1[0] = r);
            if (((n = a.that.__zoom), a.touch1)) {
              var s = a.touch0[0],
                f = a.touch0[1],
                h = a.touch1[0],
                p = a.touch1[1],
                g = (g = h[0] - s[0]) * g + (g = h[1] - s[1]) * g,
                m = (m = p[0] - f[0]) * m + (m = p[1] - f[1]) * m;
              (n = y(n, Math.sqrt(g / m))),
                (r = [(s[0] + h[0]) / 2, (s[1] + h[1]) / 2]),
                (i = [(f[0] + p[0]) / 2, (f[1] + p[1]) / 2]);
            } else {
              if (!a.touch0) return;
              (r = a.touch0[0]), (i = a.touch0[1]);
            }
            a.zoom("touch", o(b(n, r, i), a.extent, u));
          }
        }
        function M() {
          if (this.__zooming) {
            var e,
              n,
              r = x(this, arguments),
              o = d.changedTouches,
              i = o.length;
            for (
              fr(),
                t && clearTimeout(t),
                t = setTimeout(function() {
                  t = null;
                }, p),
                e = 0;
              e < i;
              ++e
            )
              (n = o[e]),
                r.touch0 && r.touch0[2] === n.identifier
                  ? delete r.touch0
                  : r.touch1 && r.touch1[2] === n.identifier && delete r.touch1;
            if ((r.touch1 && !r.touch0 && ((r.touch0 = r.touch1), delete r.touch1), r.touch0))
              r.touch0[1] = this.__zoom.invert(r.touch0[0]);
            else if ((r.end(), 2 === r.taps)) {
              var a = Ee(this).on("dblclick.zoom");
              a && a.apply(this, arguments);
            }
          }
        }
        return (
          (m.transform = function(e, t, n) {
            var r = e.selection ? e.selection() : e;
            r.property("__zoom", gr),
              e !== r
                ? k(e, t, n)
                : r.interrupt().each(function() {
                    x(this, arguments)
                      .start()
                      .zoom(null, "function" == typeof t ? t.apply(this, arguments) : t)
                      .end();
                  });
          }),
          (m.scaleBy = function(e, t, n) {
            m.scaleTo(
              e,
              function() {
                var e = this.__zoom.k,
                  n = "function" == typeof t ? t.apply(this, arguments) : t;
                return e * n;
              },
              n
            );
          }),
          (m.scaleTo = function(e, t, n) {
            m.transform(
              e,
              function() {
                var e = r.apply(this, arguments),
                  i = this.__zoom,
                  a = null == n ? w(e) : "function" == typeof n ? n.apply(this, arguments) : n,
                  l = i.invert(a),
                  c = "function" == typeof t ? t.apply(this, arguments) : t;
                return o(b(y(i, c), a, l), e, u);
              },
              n
            );
          }),
          (m.translateBy = function(e, t, n) {
            m.transform(e, function() {
              return o(
                this.__zoom.translate(
                  "function" == typeof t ? t.apply(this, arguments) : t,
                  "function" == typeof n ? n.apply(this, arguments) : n
                ),
                r.apply(this, arguments),
                u
              );
            });
          }),
          (m.translateTo = function(e, t, n, i) {
            m.transform(
              e,
              function() {
                var e = r.apply(this, arguments),
                  a = this.__zoom,
                  l = null == i ? w(e) : "function" == typeof i ? i.apply(this, arguments) : i;
                return o(
                  sr
                    .translate(l[0], l[1])
                    .scale(a.k)
                    .translate(
                      "function" == typeof t ? -t.apply(this, arguments) : -t,
                      "function" == typeof n ? -n.apply(this, arguments) : -n
                    ),
                  e,
                  u
                );
              },
              i
            );
          }),
          (S.prototype = {
            start: function() {
              return 1 == ++this.active && ((this.that.__zooming = this), this.emit("start")), this;
            },
            zoom: function(e, t) {
              return (
                this.mouse && "mouse" !== e && (this.mouse[1] = t.invert(this.mouse[0])),
                this.touch0 && "touch" !== e && (this.touch0[1] = t.invert(this.touch0[0])),
                this.touch1 && "touch" !== e && (this.touch1[1] = t.invert(this.touch1[0])),
                (this.that.__zoom = t),
                this.emit("zoom"),
                this
              );
            },
            end: function() {
              return 0 == --this.active && (delete this.that.__zooming, this.emit("end")), this;
            },
            emit: function(e) {
              v(new ur(m, e, this.that.__zoom), h.apply, h, [e, this.that, this.args]);
            },
          }),
          (m.wheelDelta = function(e) {
            return arguments.length ? ((i = "function" == typeof e ? e : lr(+e)), m) : i;
          }),
          (m.filter = function(e) {
            return arguments.length ? ((n = "function" == typeof e ? e : lr(!!e)), m) : n;
          }),
          (m.touchable = function(e) {
            return arguments.length ? ((a = "function" == typeof e ? e : lr(!!e)), m) : a;
          }),
          (m.extent = function(e) {
            return arguments.length
              ? ((r =
                  "function" == typeof e
                    ? e
                    : lr([
                        [+e[0][0], +e[0][1]],
                        [+e[1][0], +e[1][1]],
                      ])),
                m)
              : r;
          }),
          (m.scaleExtent = function(e) {
            return arguments.length ? ((l[0] = +e[0]), (l[1] = +e[1]), m) : [l[0], l[1]];
          }),
          (m.translateExtent = function(e) {
            return arguments.length
              ? ((u[0][0] = +e[0][0]), (u[1][0] = +e[1][0]), (u[0][1] = +e[0][1]), (u[1][1] = +e[1][1]), m)
              : [
                  [u[0][0], u[0][1]],
                  [u[1][0], u[1][1]],
                ];
          }),
          (m.constrain = function(e) {
            return arguments.length ? ((o = e), m) : o;
          }),
          (m.duration = function(e) {
            return arguments.length ? ((c = +e), m) : c;
          }),
          (m.interpolate = function(e) {
            return arguments.length ? ((f = e), m) : f;
          }),
          (m.on = function() {
            var e = h.on.apply(h, arguments);
            return e === h ? m : e;
          }),
          (m.clickDistance = function(e) {
            return arguments.length ? ((g = (e = +e) * e), m) : Math.sqrt(g);
          }),
          m
        );
      }
      cr.prototype;
      const wr = {
        SYMBOLS: {
          CIRCLE: "circle",
          CROSS: "cross",
          DIAMOND: "diamond",
          SQUARE: "square",
          STAR: "star",
          TRIANGLE: "triangle",
          WYE: "wye",
        },
      };
      function _r(e) {
        return (
          (_r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          _r(e)
        );
      }
      function kr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xr(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== _r(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== _r(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === _r(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      const Sr = (function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? kr(Object(n), !0).forEach(function(t) {
                  xr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : kr(Object(n)).forEach(function(t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })(
          {
            COORDS_SEPARATOR: ",",
            FORCE_X: 0.06,
            FORCE_Y: 0.06,
            GRAPH_CONTAINER_ID: "graph-container-zoomable",
            GRAPH_WRAPPER_ID: "graph-wrapper",
            KEYWORDS: { SAME: "SAME" },
            LINK_CLASS_NAME: "link",
            NODE_CLASS_NAME: "node",
            TTL_DOUBLE_CLICK_IN_MS: 280,
            SYMBOLS_WITH_OPTIMIZED_POSITIONING: new Set([wr.SYMBOLS.CIRCLE, wr.SYMBOLS.SQUARE]),
            FOCUS_ANIMATION_DURATION: 1e3,
          },
          wr
        ),
        Er =
          "you provided a invalid links data structure. Links source and target attributes must point to an existent node";
      function Or(e) {
        return (
          (Or =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Or(e)
        );
      }
      function Cr(e) {
        return !!e && "object" === Or(e) && !Object.keys(e).length;
      }
      function Pr(e) {
        return null == e;
      }
      function Nr() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          r = {};
        if (0 === Object.keys(e || {}).length) return t && !Cr(t) ? t : {};
        for (var o = 0, i = Object.keys(e); o < i.length; o++) {
          var a = i[o],
            l = !!(t[a] && "object" === Or(t[a]) && "object" === Or(e[a]) && n < 20);
          l
            ? (function() {
                var o = Nr(e[a], t[a], n + 1);
                r[a] =
                  Object.prototype.hasOwnProperty.call(e[a], "length") &&
                  Object.prototype.hasOwnProperty.call(t[a], "length")
                    ? Object.keys(o).map(function(e) {
                        return o[e];
                      })
                    : o;
              })()
            : (r[a] = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : e[a]);
        }
        return r;
      }
      function Mr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return t.reduce(function(t, n) {
          return Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]), t;
        }, {});
      }
      function Tr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = Object.keys(e).filter(function(e) {
            return !t.includes(e);
          });
        return Mr(e, n);
      }
      function Lr(e, t) {
        throw Error(
          (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "N/A",
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "N/A";
            return "react-d3-graph :: ".concat(e, " :: ").concat(t);
          })(e, t)
        );
      }
      function jr(e, t) {
        var n = "react-d3-graph :: ".concat(e, " :: ").concat(t);
        console.warn(n);
      }
      function Ar(e) {
        return (
          (Ar =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ar(e)
        );
      }
      function zr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Rr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? zr(Object(n), !0).forEach(function(t) {
                Dr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : zr(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Dr(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== Ar(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== Ar(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === Ar(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      var Ir = ["id", "highlighted", "x", "y", "index", "vy", "vx"],
        Fr = ["index", "source", "target", "isHidden"];
      function Ur(e) {
        return void 0 !== e.id && null !== e.id ? e.id : e;
      }
      function Br(e, t) {
        var n,
          o = e.data,
          i = e.id,
          a = e.config;
        !(function(e) {
          (e.nodes && e.nodes.length) ||
            (jr(
              "Graph",
              "you have not provided enough data for react-d3-graph to render something. You need to provide at least one node"
            ),
            (e.nodes = [])),
            e.links ||
              (jr(
                "Graph",
                "you are passing invalid data to react-d3-graph. You must include a links array, even if empty, in the data object you're passing down to the <Graph> component."
              ),
              (e.links = []));
          for (
            var t = e.links.length,
              n = function(t) {
                var n = e.links[t];
                e.nodes.find(function(e) {
                  return e.id === n.source;
                }) || Lr("Graph", "".concat(Er, ' - "').concat(n.source, '" is not a valid source node id')),
                  e.nodes.find(function(e) {
                    return e.id === n.target;
                  }) || Lr("Graph", "".concat(Er, ' - "').concat(n.target, '" is not a valid target node id')),
                  n &&
                    void 0 !== n.value &&
                    "number" != typeof n.value &&
                    Lr(
                      "Graph",
                      ""
                        .concat("links 'value' attribute must be of type number", ' - found in link with source "')
                        .concat(n.source, '" and target "')
                        .concat(n.target, '"')
                    );
              },
              r = 0;
            r < t;
            r++
          )
            n(r);
        })(o),
          (n =
            t && t.nodes
              ? {
                  nodes: o.nodes.map(function(e) {
                    return t.nodes[e.id] ? Rr(Rr({}, e), Mr(t.nodes[e.id], Ir)) : Rr({}, e);
                  }),
                  links: o.links.map(function(e, n) {
                    return (function(e, t) {
                      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                        i = n.find(function(t) {
                          return t.source.id === e.source && t.target.id === e.target;
                        }),
                        a = i && Mr(i, Fr),
                        l = Tr(e, ["source", "target"]);
                      if (a) {
                        var u =
                            o.config &&
                            Object.prototype.hasOwnProperty.call(o.config, "directed") &&
                            r.directed !== o.config.directed,
                          c = Rr(Rr({ index: t }, a), l);
                        return u
                          ? Rr(Rr({}, c), {}, { isHidden: !1 })
                          : r.collapsible
                          ? c
                          : Rr(Rr({}, c), {}, { isHidden: !1 });
                      }
                      var s = !1,
                        f = { id: e.source, highlighted: s },
                        d = { id: e.target, highlighted: s };
                      return Rr({ index: t, source: f, target: d }, l);
                    })(e, n, t && t.d3Links, a, t);
                  }),
                }
              : {
                  nodes: o.nodes.map(function(e) {
                    return Rr({}, e);
                  }),
                  links: o.links.map(function(e) {
                    return Rr({}, e);
                  }),
                });
        var l,
          u,
          c,
          f,
          d,
          h,
          p = Rr({}, Nr(r, a || {})),
          g = (function(e, t) {
            return e.reduce(function(e, n) {
              var r = Ur(n.source),
                o = Ur(n.target);
              e[r] || (e[r] = {}), e[o] || (e[o] = {});
              var i = t.collapsible && n.isHidden ? 0 : n.value || 1;
              return (e[r][o] = i), t.directed || (e[o][r] = i), e;
            }, {});
          })(n.links, p),
          m = (function(e, t) {
            return Object.keys(e).reduce(function(n, r) {
              var o = Xr(r, t),
                i = o.inDegree,
                a = o.outDegree,
                l = e[r],
                u = 0 === i && 0 === a ? Rr(Rr({}, l), {}, { _orphan: !0 }) : l;
              return (n[r] = u), n;
            }, {});
          })(
            (function(e) {
              for (var t = {}, n = e.length, r = 0; r < n; r++) {
                var o = e[r];
                (o.highlighted = !1),
                  Object.prototype.hasOwnProperty.call(o, "fx")
                    ? (o.x = o.fx)
                    : Object.prototype.hasOwnProperty.call(o, "x") || (o.x = 0),
                  Object.prototype.hasOwnProperty.call(o, "fy")
                    ? (o.y = o.fy)
                    : Object.prototype.hasOwnProperty.call(o, "y") || (o.y = 0),
                  (t[o.id.toString()] = o);
              }
              return t;
            })(n.nodes),
            g
          ),
          y = n.nodes,
          v = n.links,
          b = i.replace(/ /g, "_"),
          w =
            ((l = p.width),
            (u = p.height),
            (c = p.d3 && p.d3.gravity),
            (f = (function(e) {
              var t,
                n,
                r,
                o = De(0.1);
              function i(e) {
                for (var o, i = 0, a = t.length; i < a; ++i) (o = t[i]).vx += (r[i] - o.x) * n[i] * e;
              }
              function a() {
                if (t) {
                  var i,
                    a = t.length;
                  for (n = new Array(a), r = new Array(a), i = 0; i < a; ++i)
                    n[i] = isNaN((r[i] = +e(t[i], i, t))) ? 0 : +o(t[i], i, t);
                }
              }
              return (
                "function" != typeof e && (e = De(null == e ? 0 : +e)),
                (i.initialize = function(e) {
                  (t = e), a();
                }),
                (i.strength = function(e) {
                  return arguments.length ? ((o = "function" == typeof e ? e : De(+e)), a(), i) : o;
                }),
                (i.x = function(t) {
                  return arguments.length ? ((e = "function" == typeof t ? t : De(+t)), a(), i) : e;
                }),
                i
              );
            })(l / 2).strength(Sr.FORCE_X)),
            (d = (function(e) {
              var t,
                n,
                r,
                o = De(0.1);
              function i(e) {
                for (var o, i = 0, a = t.length; i < a; ++i) (o = t[i]).vy += (r[i] - o.y) * n[i] * e;
              }
              function a() {
                if (t) {
                  var i,
                    a = t.length;
                  for (n = new Array(a), r = new Array(a), i = 0; i < a; ++i)
                    n[i] = isNaN((r[i] = +e(t[i], i, t))) ? 0 : +o(t[i], i, t);
                }
              }
              return (
                "function" != typeof e && (e = De(null == e ? 0 : +e)),
                (i.initialize = function(e) {
                  (t = e), a();
                }),
                (i.strength = function(e) {
                  return arguments.length ? ((o = "function" == typeof e ? e : De(+e)), a(), i) : o;
                }),
                (i.y = function(t) {
                  return arguments.length ? ((e = "function" == typeof t ? t : De(+t)), a(), i) : e;
                }),
                i
              );
            })(u / 2).strength(Sr.FORCE_Y)),
            (h = c),
            (function(e) {
              var t,
                n = 1,
                r = 0.001,
                o = 1 - Math.pow(r, 1 / 300),
                i = 0,
                a = 0.6,
                l = We(),
                u = pt(f),
                c = s("tick", "end");
              function f() {
                d(), c.call("tick", t), n < r && (u.stop(), c.call("end", t));
              }
              function d(r) {
                var u,
                  c,
                  s = e.length;
                void 0 === r && (r = 1);
                for (var f = 0; f < r; ++f)
                  for (
                    n += (i - n) * o,
                      l.each(function(e) {
                        e(n);
                      }),
                      u = 0;
                    u < s;
                    ++u
                  )
                    null == (c = e[u]).fx ? (c.x += c.vx *= a) : ((c.x = c.fx), (c.vx = 0)),
                      null == c.fy ? (c.y += c.vy *= a) : ((c.y = c.fy), (c.vy = 0));
                return t;
              }
              function h() {
                for (var t, n = 0, r = e.length; n < r; ++n) {
                  if (
                    (((t = e[n]).index = n),
                    null != t.fx && (t.x = t.fx),
                    null != t.fy && (t.y = t.fy),
                    isNaN(t.x) || isNaN(t.y))
                  ) {
                    var o = 10 * Math.sqrt(n),
                      i = n * wt;
                    (t.x = o * Math.cos(i)), (t.y = o * Math.sin(i));
                  }
                  (isNaN(t.vx) || isNaN(t.vy)) && (t.vx = t.vy = 0);
                }
              }
              function p(t) {
                return t.initialize && t.initialize(e), t;
              }
              return (
                null == e && (e = []),
                h(),
                (t = {
                  tick: d,
                  restart: function() {
                    return u.restart(f), t;
                  },
                  stop: function() {
                    return u.stop(), t;
                  },
                  nodes: function(n) {
                    return arguments.length ? ((e = n), h(), l.each(p), t) : e;
                  },
                  alpha: function(e) {
                    return arguments.length ? ((n = +e), t) : n;
                  },
                  alphaMin: function(e) {
                    return arguments.length ? ((r = +e), t) : r;
                  },
                  alphaDecay: function(e) {
                    return arguments.length ? ((o = +e), t) : +o;
                  },
                  alphaTarget: function(e) {
                    return arguments.length ? ((i = +e), t) : i;
                  },
                  velocityDecay: function(e) {
                    return arguments.length ? ((a = 1 - e), t) : 1 - a;
                  },
                  force: function(e, n) {
                    return arguments.length > 1 ? (null == n ? l.remove(e) : l.set(e, p(n)), t) : l.get(e);
                  },
                  find: function(t, n, r) {
                    var o,
                      i,
                      a,
                      l,
                      u,
                      c = 0,
                      s = e.length;
                    for (null == r ? (r = 1 / 0) : (r *= r), c = 0; c < s; ++c)
                      (a = (o = t - (l = e[c]).x) * o + (i = n - l.y) * i) < r && ((u = l), (r = a));
                    return u;
                  },
                  on: function(e, n) {
                    return arguments.length > 1 ? (c.on(e, n), t) : c.on(e);
                  },
                })
              );
            })()
              .force(
                "charge",
                (function() {
                  var e,
                    t,
                    n,
                    r,
                    o = De(-30),
                    i = 1,
                    a = 1 / 0,
                    l = 0.81;
                  function u(r) {
                    var o,
                      i = e.length,
                      a = Ke(e, vt, bt).visitAfter(s);
                    for (n = r, o = 0; o < i; ++o) (t = e[o]), a.visit(f);
                  }
                  function c() {
                    if (e) {
                      var t,
                        n,
                        i = e.length;
                      for (r = new Array(i), t = 0; t < i; ++t) (n = e[t]), (r[n.index] = +o(n, t, e));
                    }
                  }
                  function s(e) {
                    var t,
                      n,
                      o,
                      i,
                      a,
                      l = 0,
                      u = 0;
                    if (e.length) {
                      for (o = i = a = 0; a < 4; ++a)
                        (t = e[a]) &&
                          (n = Math.abs(t.value)) &&
                          ((l += t.value), (u += n), (o += n * t.x), (i += n * t.y));
                      (e.x = o / u), (e.y = i / u);
                    } else {
                      ((t = e).x = t.data.x), (t.y = t.data.y);
                      do {
                        l += r[t.data.index];
                      } while ((t = t.next));
                    }
                    e.value = l;
                  }
                  function f(e, o, u, c) {
                    if (!e.value) return !0;
                    var s = e.x - t.x,
                      f = e.y - t.y,
                      d = c - o,
                      h = s * s + f * f;
                    if ((d * d) / l < h)
                      return (
                        h < a &&
                          (0 === s && (h += (s = Ie()) * s),
                          0 === f && (h += (f = Ie()) * f),
                          h < i && (h = Math.sqrt(i * h)),
                          (t.vx += (s * e.value * n) / h),
                          (t.vy += (f * e.value * n) / h)),
                        !0
                      );
                    if (!(e.length || h >= a)) {
                      (e.data !== t || e.next) &&
                        (0 === s && (h += (s = Ie()) * s),
                        0 === f && (h += (f = Ie()) * f),
                        h < i && (h = Math.sqrt(i * h)));
                      do {
                        e.data !== t && ((d = (r[e.data.index] * n) / h), (t.vx += s * d), (t.vy += f * d));
                      } while ((e = e.next));
                    }
                  }
                  return (
                    (u.initialize = function(t) {
                      (e = t), c();
                    }),
                    (u.strength = function(e) {
                      return arguments.length ? ((o = "function" == typeof e ? e : De(+e)), c(), u) : o;
                    }),
                    (u.distanceMin = function(e) {
                      return arguments.length ? ((i = e * e), u) : Math.sqrt(i);
                    }),
                    (u.distanceMax = function(e) {
                      return arguments.length ? ((a = e * e), u) : Math.sqrt(a);
                    }),
                    (u.theta = function(e) {
                      return arguments.length ? ((l = e * e), u) : Math.sqrt(l);
                    }),
                    u
                  );
                })().strength(h)
              )
              .force("x", f)
              .force("y", d)
              .force(
                "center",
                (function(e, t) {
                  var n;
                  function r() {
                    var r,
                      o,
                      i = n.length,
                      a = 0,
                      l = 0;
                    for (r = 0; r < i; ++r) (a += (o = n[r]).x), (l += o.y);
                    for (a = a / i - e, l = l / i - t, r = 0; r < i; ++r) ((o = n[r]).x -= a), (o.y -= l);
                  }
                  return (
                    null == e && (e = 0),
                    null == t && (t = 0),
                    (r.initialize = function(e) {
                      n = e;
                    }),
                    (r.x = function(t) {
                      return arguments.length ? ((e = +t), r) : e;
                    }),
                    (r.y = function(e) {
                      return arguments.length ? ((t = +e), r) : t;
                    }),
                    r
                  );
                })(l / 2, u / 2)
              )),
          _ = p.minZoom,
          k = p.maxZoom,
          x = p.focusZoom;
        return (
          x > k ? (p.focusZoom = k) : x < _ && (p.focusZoom = _),
          {
            id: b,
            config: p,
            links: g,
            d3Links: v,
            nodes: m,
            d3Nodes: y,
            highlightedNode: "",
            simulation: w,
            newGraphElements: !1,
            configUpdated: !1,
            transform: { x: 0, y: 0, k: 1 },
            draggedNode: null,
          }
        );
      }
      function Wr(e) {
        return (
          (Wr =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Wr(e)
        );
      }
      function Hr(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Vr(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Hr(Object(n), !0).forEach(function(t) {
                qr(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Hr(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function qr(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== Wr(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== Wr(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === Wr(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function Gr(e, t) {
        return e <= 1 && t < 1;
      }
      function $r(e, t) {
        return e <= 1 && t <= 1;
      }
      function Yr(e, t, n) {
        var r = Xr(e, t);
        return (n ? Gr : $r)(r.inDegree, r.outDegree);
      }
      function Xr(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return Object.keys(t).reduce(
          function(n, r) {
            return t[r]
              ? Object.keys(t[r]).reduce(function(n, o) {
                  return e === r && (n.outDegree += t[e][o]), e === o && (n.inDegree += t[r][e]), n;
                }, n)
              : n;
          },
          { inDegree: 0, outDegree: 0 }
        );
      }
      var Qr = {
        MARKER_S: "marker-small",
        MARKER_SH: "marker-small-highlighted",
        MARKER_M: "marker-medium",
        MARKER_MH: "marker-medium-highlighted",
        MARKER_L: "marker-large",
        MARKER_LH: "marker-large-highlighted",
      };
      function Kr() {
        return (
          (Kr = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Kr.apply(this, arguments)
        );
      }
      const Zr = function(t) {
        var n = t.onClickLink,
          r = t.onRightClickLink,
          o = t.onMouseOverLink,
          i = t.onMouseOutLink,
          a = t.source,
          l = t.target,
          u = t.strokeWidth,
          c = t.stroke,
          s = t.opacity,
          f = t.mouseCursor,
          d = t.strokeDasharray,
          h = t.strokeLinecap,
          p = t.className,
          g = t.markerId,
          m = t.d,
          y = t.label,
          v = t.id,
          b = t.fontColor,
          w = t.fontSize,
          _ = t.fontWeight,
          k = {
            className: p,
            d: m,
            onClick: function() {
              null == n || n(a, l);
            },
            onContextMenu: function() {
              null == r || r(a, l);
            },
            onMouseOut: function() {
              null == i || i(a, l);
            },
            onMouseOver: function() {
              null == o || o(a, l);
            },
            style: {
              strokeWidth: u,
              stroke: c,
              opacity: s,
              fill: "none",
              cursor: f,
              strokeDasharray: d,
              strokeDashoffset: d,
              strokeLinecap: h,
            },
            markerEnd: "",
          };
        g && (k.markerEnd = "url(#".concat(g, ")"));
        var x = { dy: -1, style: { fill: b, fontSize: w, fontWeight: _, textAnchor: "middle" } };
        return k.d.includes("NaN")
          ? null
          : e.createElement(
              "g",
              null,
              e.createElement("path", Kr({}, k, { id: v })),
              y &&
                e.createElement(
                  "text",
                  x,
                  e.createElement("textPath", { href: "#".concat(v), startOffset: "50%", style: { opacity: s } }, y)
                )
            );
      };
      Math.abs, Math.atan2, Math.cos, Math.max, Math.min, Math.sin, Math.sqrt;
      var Jr = Math.PI,
        eo = 2 * Jr;
      const to = {
          draw: function(e, t) {
            var n = Math.sqrt(t / Jr);
            e.moveTo(n, 0), e.arc(0, 0, n, 0, eo);
          },
        },
        no = {
          draw: function(e, t) {
            var n = Math.sqrt(t / 5) / 2;
            e.moveTo(-3 * n, -n),
              e.lineTo(-n, -n),
              e.lineTo(-n, -3 * n),
              e.lineTo(n, -3 * n),
              e.lineTo(n, -n),
              e.lineTo(3 * n, -n),
              e.lineTo(3 * n, n),
              e.lineTo(n, n),
              e.lineTo(n, 3 * n),
              e.lineTo(-n, 3 * n),
              e.lineTo(-n, n),
              e.lineTo(-3 * n, n),
              e.closePath();
          },
        };
      var ro = Math.sqrt(1 / 3),
        oo = 2 * ro;
      const io = {
          draw: function(e, t) {
            var n = Math.sqrt(t / oo),
              r = n * ro;
            e.moveTo(0, -n), e.lineTo(r, 0), e.lineTo(0, n), e.lineTo(-r, 0), e.closePath();
          },
        },
        ao = {
          draw: function(e, t) {
            var n = Math.sqrt(t),
              r = -n / 2;
            e.rect(r, r, n, n);
          },
        };
      var lo = Math.sin(Jr / 10) / Math.sin((7 * Jr) / 10),
        uo = Math.sin(eo / 10) * lo,
        co = -Math.cos(eo / 10) * lo;
      const so = {
        draw: function(e, t) {
          var n = Math.sqrt(0.8908130915292852 * t),
            r = uo * n,
            o = co * n;
          e.moveTo(0, -n), e.lineTo(r, o);
          for (var i = 1; i < 5; ++i) {
            var a = (eo * i) / 5,
              l = Math.cos(a),
              u = Math.sin(a);
            e.lineTo(u * n, -l * n), e.lineTo(l * r - u * o, u * r + l * o);
          }
          e.closePath();
        },
      };
      var fo = Math.sqrt(3);
      const ho = {
        draw: function(e, t) {
          var n = -Math.sqrt(t / (3 * fo));
          e.moveTo(0, 2 * n), e.lineTo(-fo * n, -n), e.lineTo(fo * n, -n), e.closePath();
        },
      };
      var po = -0.5,
        go = Math.sqrt(3) / 2,
        mo = 1 / Math.sqrt(12),
        yo = 3 * (mo / 2 + 1);
      const vo = {
        draw: function(e, t) {
          var n = Math.sqrt(t / yo),
            r = n / 2,
            o = n * mo,
            i = r,
            a = n * mo + n,
            l = -i,
            u = a;
          e.moveTo(r, o),
            e.lineTo(i, a),
            e.lineTo(l, u),
            e.lineTo(po * r - go * o, go * r + po * o),
            e.lineTo(po * i - go * a, go * i + po * a),
            e.lineTo(po * l - go * u, go * l + po * u),
            e.lineTo(po * r + go * o, po * o - go * r),
            e.lineTo(po * i + go * a, po * a - go * i),
            e.lineTo(po * l + go * u, po * u - go * l),
            e.closePath();
        },
      };
      var bo = Math.PI,
        wo = 2 * bo,
        _o = 1e-6,
        ko = wo - _o;
      function xo() {
        (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
      }
      function So() {
        return new xo();
      }
      xo.prototype = So.prototype = {
        constructor: xo,
        moveTo: function(e, t) {
          this._ += "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t);
        },
        closePath: function() {
          null !== this._x1 && ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function(e, t) {
          this._ += "L" + (this._x1 = +e) + "," + (this._y1 = +t);
        },
        quadraticCurveTo: function(e, t, n, r) {
          this._ += "Q" + +e + "," + +t + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function(e, t, n, r, o, i) {
          this._ += "C" + +e + "," + +t + "," + +n + "," + +r + "," + (this._x1 = +o) + "," + (this._y1 = +i);
        },
        arcTo: function(e, t, n, r, o) {
          (e = +e), (t = +t), (n = +n), (r = +r), (o = +o);
          var i = this._x1,
            a = this._y1,
            l = n - e,
            u = r - t,
            c = i - e,
            s = a - t,
            f = c * c + s * s;
          if (o < 0) throw new Error("negative radius: " + o);
          if (null === this._x1) this._ += "M" + (this._x1 = e) + "," + (this._y1 = t);
          else if (f > _o)
            if (Math.abs(s * l - u * c) > _o && o) {
              var d = n - i,
                h = r - a,
                p = l * l + u * u,
                g = d * d + h * h,
                m = Math.sqrt(p),
                y = Math.sqrt(f),
                v = o * Math.tan((bo - Math.acos((p + f - g) / (2 * m * y))) / 2),
                b = v / y,
                w = v / m;
              Math.abs(b - 1) > _o && (this._ += "L" + (e + b * c) + "," + (t + b * s)),
                (this._ +=
                  "A" +
                  o +
                  "," +
                  o +
                  ",0,0," +
                  +(s * d > c * h) +
                  "," +
                  (this._x1 = e + w * l) +
                  "," +
                  (this._y1 = t + w * u));
            } else this._ += "L" + (this._x1 = e) + "," + (this._y1 = t);
        },
        arc: function(e, t, n, r, o, i) {
          (e = +e), (t = +t), (i = !!i);
          var a = (n = +n) * Math.cos(r),
            l = n * Math.sin(r),
            u = e + a,
            c = t + l,
            s = 1 ^ i,
            f = i ? r - o : o - r;
          if (n < 0) throw new Error("negative radius: " + n);
          null === this._x1
            ? (this._ += "M" + u + "," + c)
            : (Math.abs(this._x1 - u) > _o || Math.abs(this._y1 - c) > _o) && (this._ += "L" + u + "," + c),
            n &&
              (f < 0 && (f = (f % wo) + wo),
              f > ko
                ? (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    s +
                    "," +
                    (e - a) +
                    "," +
                    (t - l) +
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    s +
                    "," +
                    (this._x1 = u) +
                    "," +
                    (this._y1 = c))
                : f > _o &&
                  (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0," +
                    +(f >= bo) +
                    "," +
                    s +
                    "," +
                    (this._x1 = e + n * Math.cos(o)) +
                    "," +
                    (this._y1 = t + n * Math.sin(o))));
        },
        rect: function(e, t, n, r) {
          this._ +=
            "M" + (this._x0 = this._x1 = +e) + "," + (this._y0 = this._y1 = +t) + "h" + +n + "v" + +r + "h" + -n + "Z";
        },
        toString: function() {
          return this._;
        },
      };
      const Eo = So;
      function Oo(e) {
        return function() {
          return e;
        };
      }
      function Co() {
        var e = Oo(to),
          t = Oo(64),
          n = null;
        function r() {
          var r;
          if ((n || (n = r = Eo()), e.apply(this, arguments).draw(n, +t.apply(this, arguments)), r))
            return (n = null), r + "" || null;
        }
        return (
          (r.type = function(t) {
            return arguments.length ? ((e = "function" == typeof t ? t : Oo(t)), r) : e;
          }),
          (r.size = function(e) {
            return arguments.length ? ((t = "function" == typeof e ? e : Oo(+e)), r) : t;
          }),
          (r.context = function(e) {
            return arguments.length ? ((n = null == e ? null : e), r) : n;
          }),
          r
        );
      }
      function Po(e) {
        return (
          (Po =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Po(e)
        );
      }
      function No(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Mo(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== Po(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== Po(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === Po(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      const To = (function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? No(Object(n), !0).forEach(function(t) {
                Mo(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : No(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      })(
        {
          ARC: { START_ANGLE: 0, END_ANGLE: 2 * Math.PI },
          DEFAULT_NODE_SIZE: r.node.size,
          NODE_LABEL_DX: ".90em",
          NODE_LABEL_DY: ".35em",
        },
        wr
      );
      function Lo(e) {
        switch (e) {
          case To.SYMBOLS.CIRCLE:
            return to;
          case To.SYMBOLS.CROSS:
            return no;
          case To.SYMBOLS.DIAMOND:
            return io;
          case To.SYMBOLS.SQUARE:
            return ao;
          case To.SYMBOLS.STAR:
            return so;
          case To.SYMBOLS.TRIANGLE:
            return ho;
          case To.SYMBOLS.WYE:
            return vo;
          default:
            return to;
        }
      }
      const jo = function() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : To.DEFAULT_NODE_SIZE,
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : To.SYMBOLS.CIRCLE;
          return Co()
            .size(function() {
              return e;
            })
            .type(function() {
              return Lo(t);
            })();
        },
        Ao = function(e, t) {
          switch (t) {
            case "right":
              return {
                dx: e ? "".concat(e) : To.NODE_LABEL_DX,
                dy: "0",
                dominantBaseline: "middle",
                textAnchor: "start",
              };
            case "left":
              return {
                dx: e ? "".concat(-e) : "-".concat(To.NODE_LABEL_DX),
                dy: "0",
                dominantBaseline: "middle",
                textAnchor: "end",
              };
            case "top":
              return {
                dx: "0",
                dy: e ? "".concat(-e) : "-".concat(To.NODE_LABEL_DX),
                dominantBaseline: "baseline",
                textAnchor: "middle",
              };
            case "bottom":
              return {
                dx: "0",
                dy: e ? "".concat(e) : To.NODE_LABEL_DX,
                dominantBaseline: "hanging",
                textAnchor: "middle",
              };
            case "center":
              return { dx: "0", dy: "0", dominantBaseline: "middle", textAnchor: "middle" };
            default:
              return { dx: e ? "".concat(e) : To.NODE_LABEL_DX, dy: To.NODE_LABEL_DY };
          }
        };
      function zo() {
        return (
          (zo = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          zo.apply(this, arguments)
        );
      }
      function Ro(e) {
        return (
          (Ro =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ro(e)
        );
      }
      function Do(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Io(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Do(Object(n), !0).forEach(function(t) {
                Fo(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Do(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Fo(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== Ro(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== Ro(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === Ro(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      const Uo = function(t) {
        var n = t.id,
          r = t.onClickNode,
          o = t.onRightClickNode,
          i = t.onMouseOverNode,
          a = t.onMouseOut,
          l = t.cursor,
          u = t.opacity,
          c = t.renderLabel,
          s = t.labelPosition,
          f = t.dx,
          d = t.cx,
          h = t.cy,
          p = t.fontColor,
          g = t.fontSize,
          m = t.fontWeight,
          y = t.labelClass,
          v = t.size,
          b = t.svg,
          w = t.viewGenerator,
          _ = t.label,
          k = t.overrideGlobalViewGenerator,
          x = t.fill,
          S = t.type,
          E = t.stroke,
          O = t.strokeWidth,
          C = t.className,
          P = {
            cursor: l,
            onClick: function() {
              return null == r ? void 0 : r(n);
            },
            onContextMenu: function(e) {
              return null == o ? void 0 : o(e, n);
            },
            onMouseOut: function() {
              return null == a ? void 0 : a(n);
            },
            onMouseOver: function() {
              return null == i ? void 0 : i(n);
            },
            opacity: u,
          },
          N = Io(Io({}, Ao(f, s)), {}, { fill: p, fontSize: g, fontWeight: m, opacity: u }, y && { className: y }),
          M = "object" !== Ro(v),
          T = d,
          L = h,
          j = null,
          A = null;
        if (b || w) {
          var z = M ? v / 10 : v.height / 10,
            R = M ? v / 10 : v.width / 10,
            D = R / 2,
            I = z / 2,
            F = "translate(".concat(D, ",").concat(I, ")");
          (j = e.createElement("text", zo({}, N, { transform: F }), _)),
            (A =
              w && !k
                ? e.createElement(
                    "svg",
                    zo({}, P, { width: R, height: z }),
                    e.createElement(
                      "foreignObject",
                      { x: "0", y: "0", width: "100%", height: "100%" },
                      e.createElement(
                        "section",
                        { style: { height: z, width: R, backgroundColor: "transparent" } },
                        w(t)
                      )
                    )
                  )
                : e.createElement("image", zo({}, P, { href: b, width: R, height: z }))),
            (T -= D),
            (L -= I);
        } else
          M ||
            (jr("node.size should be a number when not using custom nodes."),
            To.DEFAULT_NODE_SIZE,
            (function(e) {
              throw new TypeError('"size" is read-only');
            })()),
            (P.d = jo(v, S)),
            (P.fill = x),
            (P.stroke = E),
            (P.strokeWidth = O),
            (j = e.createElement("text", N, _)),
            (A = e.createElement("path", P));
        var U = { className: C, cx: d, cy: h, id: n, transform: "translate(".concat(T, ",").concat(L, ")") };
        return e.createElement("g", U, A, c && j);
      };
      function Bo(e) {
        return (
          (Bo =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Bo(e)
        );
      }
      function Wo(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      function Ho(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(
              e,
              (void 0,
              (o = (function(e, t) {
                if ("object" !== Bo(e) || null === e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(e, "string");
                  if ("object" !== Bo(r)) return r;
                  throw new TypeError("@@toPrimitive must return a primitive value.");
                }
                return String(e);
              })(r.key)),
              "symbol" === Bo(o) ? o : String(o)),
              r
            );
        }
        var o;
      }
      function Vo(e, t) {
        return (
          (Vo = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function(e, t) {
                return (e.__proto__ = t), e;
              }),
          Vo(e, t)
        );
      }
      function qo(e, t) {
        if (t && ("object" === Bo(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return (function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e);
      }
      function Go(e) {
        return (
          (Go = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          Go(e)
        );
      }
      var $o,
        Yo = (function(t) {
          !(function(e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              t && Vo(e, t);
          })(l, t);
          var n,
            r,
            o,
            i,
            a =
              ((o = l),
              (i = (function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
                } catch (e) {
                  return !1;
                }
              })()),
              function() {
                var e,
                  t = Go(o);
                if (i) {
                  var n = Go(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return qo(this, e);
              });
          function l() {
            return Wo(this, l), a.apply(this, arguments);
          }
          return (
            (n = l),
            (r = [
              {
                key: "render",
                value: function() {
                  return e.createElement(
                    "marker",
                    {
                      className: "marker",
                      id: this.props.id,
                      viewBox: "0 -5 10 10",
                      refX: this.props.refX,
                      refY: "0",
                      markerWidth: this.props.markerWidth,
                      markerHeight: this.props.markerHeight,
                      orient: "auto",
                      fill: this.props.fill,
                    },
                    e.createElement("path", { d: "M0,-5L10,0L0,5" })
                  );
                },
              },
            ]) && Ho(n.prototype, r),
            Object.defineProperty(n, "prototype", { writable: !1 }),
            l
          );
        })(e.Component),
        Xo = { STRAIGHT: "STRAIGHT", CURVE_SMOOTH: "CURVE_SMOOTH", CURVE_FULL: "CURVE_FULL" },
        Qo = "TOP_LEFT",
        Ko = "TOP_RIGHT",
        Zo = "BOTTOM_LEFT",
        Jo = "BOTTOM_RIGHT";
      function ei(e) {
        return (
          (ei =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ei(e)
        );
      }
      function ti(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) return ni(e);
          })(e) ||
          (function(e) {
            if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
              return Array.from(e);
          })(e) ||
          (function(e, t) {
            if (e) {
              if ("string" == typeof e) return ni(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? ni(e, t)
                  : void 0
              );
            }
          })(e) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ni(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function ri(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== ei(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== ei(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === ei(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      var oi =
        (ri(($o = {}), Xo.STRAIGHT, function() {
          return 0;
        }),
        ri($o, Xo.CURVE_SMOOTH, function(e, t, n, r) {
          var o = n - e,
            i = r - t;
          return Math.sqrt(o * o + i * i);
        }),
        ri($o, Xo.CURVE_FULL, function() {
          return 1;
        }),
        $o);
      function ii(e) {
        return oi[e] || oi[Xo.STRAIGHT];
      }
      var ai,
        li =
          ((ai = {}),
          function(e, t, n) {
            var r = n.maxZoom,
              o = ""
                .concat(e, ";")
                .concat(t, ";")
                .concat(r);
            if (ai[o]) return ai[o];
            var i = (function(e, t, n) {
              var r = n.maxZoom,
                o = (function(e, t, n) {
                  return e < t ? "S" : e >= t && e < n ? "M" : "L";
                })(t, r / 4, r / 2),
                i = (function(e, t) {
                  return "MARKER_".concat(e).concat(t);
                })(o, e ? "H" : "");
              return Qr[i];
            })(e, t, { maxZoom: r });
            return (ai[o] = i), i;
          });
      function ui(e) {
        return (
          (ui =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          ui(e)
        );
      }
      function ci(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function si(e) {
        var t = Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2));
        return 0 === t ? e : { x: e.x / t, y: e.y / t };
      }
      function fi(e, t, n) {
        var r = e.x1,
          o = e.y1,
          i = e.x2,
          a = e.y2,
          l = t.px,
          u = t.py,
          c = Math.atan(n.y / n.x),
          s = Math.cos(c),
          f = Math.sin(c);
        if (0 === s) return i - r;
        if (0 === f) return a - o;
        var d,
          h = (r - l) / s,
          p = (i - l) / s,
          g = (o - u) / f,
          m = (a - u) / f;
        return Math.min.apply(
          Math,
          (function(e) {
            if (Array.isArray(e)) return ci(e);
          })(
            (d = [h, p, g, m].filter(function(e) {
              return e > 0;
            }))
          ) ||
            (function(e) {
              if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"])
                return Array.from(e);
            })(d) ||
            (function(e, t) {
              if (e) {
                if ("string" == typeof e) return ci(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? ci(e, t)
                    : void 0
                );
              }
            })(d) ||
            (function() {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
        );
      }
      function di(e, t, n, r, o) {
        var i = n.x,
          a = n.y;
        if ("object" === ui(t) && null != t && t.width && null != t && t.height)
          return (function(e, t, n) {
            var r = t.x,
              o = t.y,
              i = e.width / 10,
              a = e.height / 10,
              l = r - i / 2,
              u = o - a / 2;
            return fi({ x1: l, y1: u, x2: l + i, y2: u + a }, { px: r, py: o }, n);
          })(t, { x: i, y: a }, r);
        switch (e) {
          case Sr.SYMBOLS.CIRCLE:
            if ("number" != typeof t) {
              jr("When specifiying 'circle' as node symbol, the size of the node must be a number.");
              break;
            }
            return (function(e, t) {
              return t ? e / 10 / 2 : Math.sqrt(e / Math.PI);
            })(t, o);
          case Sr.SYMBOLS.SQUARE:
            if ("number" != typeof t) {
              jr("When specifiying 'square' as node symbol, the size of the node must be a number.");
              break;
            }
            return (function(e, t, n, r) {
              var o,
                i = t.x,
                a = t.y,
                l = i - (o = r ? e / 10 : Math.sqrt(e)) / 2,
                u = a - o / 2;
              return fi({ x1: l, y1: u, x2: l + o, y2: u + o }, { px: i, py: a }, n);
            })(t, { x: i, y: a }, r, o);
        }
        return 1;
      }
      function hi(e, t, n, r) {
        var o = Math.abs(t - e),
          i = -1 * n;
        return o > Math.abs(r * i) ? r * i : (o - 1) * i;
      }
      function pi(e, t, n, r, o, i, a) {
        var l = e.x,
          u = e.y,
          c = t.x,
          s = t.y;
        if (a && "object" === ui(i) && null != i && i.width && null != i && i.height) {
          var f = i.width / 10,
            d = i.height / 10,
            h = o.x - f / 2,
            p = h < c && c < h + f,
            g = o.y - d / 2;
          if (p && g < s && s < g + d) return o;
        }
        return { x: l + hi(c, l, n.x, r), y: u + hi(s, u, n.y, r) };
      }
      function gi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function mi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? gi(Object(n), !0).forEach(function(t) {
                yi(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : gi(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function yi(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== vi(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== vi(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === vi(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function vi(e) {
        return (
          (vi =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          vi(e)
        );
      }
      function bi(e, t, n, r) {
        var o = e.highlighted || e.id === (n && n.source) || e.id === (n && n.target),
          i = n && n.source && n.target,
          a = !(!t && !i);
        return (a && 0 === r.highlightDegree) || a
          ? o
            ? r.node.opacity
            : r.highlightOpacity
          : e.opacity || r.node.opacity;
      }
      function wi(e) {
        return (
          (wi =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          wi(e)
        );
      }
      function _i() {
        return (
          (_i = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _i.apply(this, arguments)
        );
      }
      function ki(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function xi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ki(Object(n), !0).forEach(function(t) {
                Si(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : ki(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Si(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== wi(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== wi(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === wi(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function Ei(t, n, r, o, i, a, l, u) {
        var c = n;
        return (
          o.collapsible &&
            (c = c.filter(function(e) {
              return !e.isHidden;
            })),
          c.map(function(n) {
            var c = n.source,
              s = n.target,
              f = Ur(c),
              d = Ur(s),
              h = ""
                .concat(f)
                .concat(Sr.COORDS_SEPARATOR)
                .concat(d),
              p = (function(e, t, n, r, o, i, a, l) {
                var u,
                  c,
                  s,
                  f,
                  d = e.source,
                  h = e.target,
                  p = (null == t || null === (u = t[d]) || void 0 === u ? void 0 : u.x) || 0,
                  g = (null == t || null === (c = t[d]) || void 0 === c ? void 0 : c.y) || 0,
                  m = (null == t || null === (s = t[h]) || void 0 === s ? void 0 : s.x) || 0,
                  y = (null == t || null === (f = t[h]) || void 0 === f ? void 0 : f.y) || 0,
                  v = e.type || r.link.type,
                  b = e.selfLinkDirection || r.link.selfLinkDirection,
                  w = !1;
                switch (r.highlightDegree) {
                  case 0:
                    break;
                  case 2:
                    w = !0;
                    break;
                  default:
                    w = d === i || h === i;
                }
                var _ = w && t[d].highlighted && t[h].highlighted,
                  k = d === (a && a.source) && h === (a && a.target),
                  x = _ || k,
                  S = e.opacity || r.link.opacity;
                (i || (a && a.source)) && (S = x ? r.link.opacity : r.highlightOpacity);
                var E = e.color || r.link.color;
                x && (E = r.link.highlightColor === Sr.KEYWORDS.SAME ? r.link.color : r.link.highlightColor);
                var O = e.strokeDasharray || r.link.strokeDasharray,
                  C = e.strokeDashoffset || r.link.strokeDashoffset,
                  P = e.strokeLinecap || r.link.strokeLinecap,
                  N = (e.strokeWidth || r.link.strokeWidth) * (1 / l);
                r.link.semanticStrokeWidth && (N += ((n[d][h] || n[h][d] || 1) * N) / 10);
                var M = r.directed ? li(x, l, r) : null,
                  T = 1 / l,
                  L = null,
                  j = null,
                  A = null,
                  z = null;
                r.link.renderLabel &&
                  ((z = "function" == typeof r.link.labelProperty ? r.link.labelProperty(e) : e[r.link.labelProperty]),
                  (L = e.fontSize || r.link.fontSize),
                  (j = e.fontColor || r.link.fontColor),
                  (A = x ? r.link.highlightFontWeight : r.link.fontWeight));
                var R = (function(e, t, n, r) {
                    var o,
                      i,
                      a,
                      l,
                      u,
                      c,
                      s,
                      f,
                      d,
                      h,
                      p,
                      g,
                      m = e.sourceId,
                      y = e.targetId,
                      v = e.sourceCoords,
                      b = void 0 === v ? {} : v,
                      w = e.targetCoords,
                      _ = void 0 === w ? {} : w,
                      k = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [],
                      x = null == t ? void 0 : t[m],
                      S = null == t ? void 0 : t[y];
                    if (!x || !S) return { sourceCoords: b, targetCoords: _ };
                    var E = x.symbolType || (null === (o = n.node) || void 0 === o ? void 0 : o.symbolType),
                      O = S.symbolType || (null === (i = n.node) || void 0 === i ? void 0 : i.symbolType),
                      C = Sr.SYMBOLS_WITH_OPTIMIZED_POSITIONING.has(E),
                      P = !(
                        !(
                          (null != x && x.viewGenerator) ||
                          (null !== (a = n.node) && void 0 !== a && a.viewGenerator)
                        ) ||
                        "object" !==
                          ui((null == x ? void 0 : x.size) || (null === (l = n.node) || void 0 === l ? void 0 : l.size))
                      ),
                      N = Sr.SYMBOLS_WITH_OPTIMIZED_POSITIONING.has(O),
                      M = !(
                        !(
                          (null != S && S.viewGenerator) ||
                          (null !== (u = n.node) && void 0 !== u && u.viewGenerator)
                        ) ||
                        "object" !==
                          ui((null == x ? void 0 : x.size) || (null === (c = n.node) || void 0 === c ? void 0 : c.size))
                      );
                    if (!(C || P || N || M)) return { sourceCoords: b, targetCoords: _ };
                    var T = b.x,
                      L = b.y,
                      j = _.x,
                      A = _.y,
                      z = k.length > 0 ? k[0] : _,
                      R = si({ x: z.x - T, y: z.y - L }),
                      D =
                        (null == x ? void 0 : x.viewGenerator) ||
                        (null === (s = n.node) || void 0 === s ? void 0 : s.viewGenerator),
                      I =
                        0.95 *
                        di(
                          E,
                          (null == x ? void 0 : x.size) || (null === (f = n.node) || void 0 === f ? void 0 : f.size),
                          { x: T, y: L },
                          R,
                          D
                        );
                    (T += I * R.x), (L += I * R.y);
                    var F = k.length > 0 ? k[k.length - 1] : { x: T, y: L },
                      U = F.x,
                      B = F.y,
                      W = si({ x: j - U, y: A - B }),
                      H =
                        r *
                        Math.min(
                          (null === (d = n.link) || void 0 === d ? void 0 : d.markerWidth) || 5,
                          (null === (h = n.link) || void 0 === h ? void 0 : h.markerHeight) || 5
                        ),
                      V =
                        (null == S ? void 0 : S.viewGenerator) ||
                        (null === (p = n.node) || void 0 === p ? void 0 : p.viewGenerator),
                      q = (null == S ? void 0 : S.size) || (null === (g = n.node) || void 0 === g ? void 0 : g.size),
                      G = 0.95 * di(O, q, { x: j, y: A }, W, V),
                      $ = n.directed ? H : 0,
                      Y = pi({ x: (j -= G * W.x), y: (A -= G * W.y) }, { x: U, y: B }, W, $, _, q, V);
                    return { sourceCoords: { x: T, y: L }, targetCoords: { x: (j = Y.x), y: (A = Y.y) } };
                  })(
                    { sourceId: d, targetId: h, sourceCoords: { x: p, y: g }, targetCoords: { x: m, y } },
                    t,
                    r,
                    N,
                    e.breakPoints
                  ),
                  D = (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Xo.STRAIGHT,
                      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                      o = arguments.length > 4 ? arguments[4] : void 0,
                      i = arguments.length > 5 ? arguments[5] : void 0,
                      a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Ko,
                      l = e.x,
                      u = e.y,
                      c = t.x,
                      s = t.y;
                    if (o === i && l === c && u === s)
                      switch (a) {
                        case Qo:
                          return "M"
                            .concat(l, ",")
                            .concat(u, " A40,30 45 1,1 ")
                            .concat(c + 1, ",")
                            .concat(s - 1);
                        case Zo:
                          return "M"
                            .concat(l, ",")
                            .concat(u, " A40,30 -45 1,1 ")
                            .concat(c - 1, ",")
                            .concat(s - 1);
                        case Jo:
                          return "M"
                            .concat(l, ",")
                            .concat(u, " A40,30 45 1,1 ")
                            .concat(c - 1, ",")
                            .concat(s + 1);
                        default:
                          return "M"
                            .concat(l, ",")
                            .concat(u, " A40,30 -45 1,1 ")
                            .concat(c + 1, ",")
                            .concat(s + 1);
                      }
                    var f = ii(Xo[n] || Xo.STRAIGHT),
                      d = [].concat(ti(r), [t]),
                      h = d
                        .map(function(t, n) {
                          var r = t.x,
                            o = t.y,
                            i = n > 0 ? d[n - 1] : e,
                            a = i.x,
                            l = i.y,
                            u = f(a, l, r, o);
                          return " A"
                            .concat(u, ",")
                            .concat(u, " 0 0,1 ")
                            .concat(r, ",")
                            .concat(o);
                        })
                        .join("");
                    return "M"
                      .concat(l, ",")
                      .concat(u)
                      .concat(h);
                  })(R.sourceCoords, R.targetCoords, v, e.breakPoints, e.source, e.target, b);
                return {
                  className: Sr.LINK_CLASS_NAME,
                  d: D,
                  fontColor: j,
                  fontSize: L * T,
                  fontWeight: A,
                  label: z,
                  markerId: M,
                  mouseCursor: r.link.mouseCursor,
                  opacity: S,
                  source: d,
                  stroke: E,
                  strokeWidth: N,
                  strokeDasharray: O,
                  strokeDashoffset: C,
                  strokeLinecap: P,
                  target: h,
                  onClickLink: o.onClickLink,
                  onMouseOutLink: o.onMouseOutLink,
                  onMouseOverLink: o.onMouseOverLink,
                  onRightClickLink: o.onRightClickLink,
                };
              })(xi(xi({}, n), {}, { source: "".concat(f), target: "".concat(d) }), t, r, o, i, "".concat(a), l, u);
            return e.createElement(Zr, _i({ key: h, id: h }, p));
          })
        );
      }
      function Oi(t, n, r, o, i, a, l) {
        var u = Object.keys(t);
        return (
          r.collapsible &&
            (u = u.filter(function(e) {
              return (function(e, t, n) {
                if (!t[e]) return !1;
                if (t[e]._orphan) return !0;
                var r = Xr(e, n),
                  o = r.inDegree,
                  i = r.outDegree;
                return o > 0 || i > 0;
              })(e, t, l);
            })),
          u.map(function(l) {
            var u = (function(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                r = arguments.length > 3 ? arguments[3] : void 0,
                o = arguments.length > 4 ? arguments[4] : void 0,
                i = arguments.length > 5 ? arguments[5] : void 0,
                a = e.highlighted || e.id === (o && o.source) || e.id === (o && o.target),
                l = bi(e, r, o, t),
                u = e.color || t.node.color;
              a && t.node.highlightColor !== Sr.KEYWORDS.SAME && (u = t.node.highlightColor);
              var c = e.strokeColor || t.node.strokeColor;
              a && t.node.highlightStrokeColor !== Sr.KEYWORDS.SAME && (c = t.node.highlightStrokeColor);
              var s = e[t.node.labelProperty] || e.id;
              "function" == typeof t.node.labelProperty && (s = t.node.labelProperty(e));
              var f = e.labelPosition || t.node.labelPosition,
                d = e.strokeWidth || t.node.strokeWidth;
              a && t.node.highlightStrokeWidth !== Sr.KEYWORDS.SAME && (d = t.node.highlightStrokeWidth);
              var h = 1 / i,
                p = e.size || t.node.size,
                g = "object" !== vi(p),
                m = 0;
              g
                ? (m = p)
                : "top" === f || "bottom" === f
                ? (m = p.height)
                : ("right" !== f && "left" !== f) || (m = p.width);
              var y = e.fontSize || t.node.fontSize,
                v = e.highlightFontSize || t.node.highlightFontSize,
                b = a ? v : y,
                w = b * h + m / 100 + 1.5,
                _ = e.svg || t.node.svg,
                k = e.fontColor || t.node.fontColor,
                x = t.node.renderLabel;
              Pr(e.renderLabel) || "boolean" != typeof e.renderLabel || (x = e.renderLabel);
              var S = t.node.labelClass;
              return (
                Pr(e.labelClass) || "string" != typeof e.labelClass || (S = e.labelClass),
                mi(
                  mi({}, e),
                  {},
                  {
                    className: Sr.NODE_CLASS_NAME,
                    cursor: t.node.mouseCursor,
                    cx: (null == e ? void 0 : e.x) || "0",
                    cy: (null == e ? void 0 : e.y) || "0",
                    dx: w,
                    fill: u,
                    fontColor: k,
                    fontSize: b * h,
                    fontWeight: a ? t.node.highlightFontWeight : t.node.fontWeight,
                    id: e.id,
                    label: s,
                    labelPosition: f,
                    opacity: l,
                    overrideGlobalViewGenerator: !e.viewGenerator && e.svg,
                    renderLabel: x,
                    labelClass: S,
                    size: g ? p * h : { height: p.height * h, width: p.width * h },
                    stroke: c,
                    strokeWidth: d * h,
                    svg: _,
                    type: e.symbolType || t.node.symbolType,
                    viewGenerator: e.viewGenerator || t.node.viewGenerator,
                    onClickNode: n.onClickNode,
                    onMouseOut: n.onMouseOut,
                    onMouseOverNode: n.onMouseOverNode,
                    onRightClickNode: n.onRightClickNode,
                  }
                )
              );
            })(xi(xi({}, t[l]), {}, { id: "".concat(l) }), r, n, o, i, a);
            return e.createElement(Uo, _i({ key: l }, u));
          })
        );
      }
      var Ci,
        Pi =
          ((Ci = {}),
          function(t) {
            var n = t.link.highlightColor && "SAME" !== t.link.highlightColor ? t.link.highlightColor : t.link.color,
              r = t.link.color,
              o = "".concat(r, "___").concat(n);
            if (!Ci[o]) {
              var i = (function(e) {
                  var t,
                    n,
                    r = 16,
                    o = r + (2 * e.maxZoom) / 3,
                    i = r + (4 * e.maxZoom) / 3;
                  return (
                    ((null !== (t = e.node) && void 0 !== t && t.viewGenerator) ||
                      Sr.SYMBOLS_WITH_OPTIMIZED_POSITIONING.has(
                        null === (n = e.node) || void 0 === n ? void 0 : n.symbolType
                      )) &&
                      ((r = 0), (o = 0), (i = 0)),
                    { small: r, medium: o, large: i }
                  );
                })(t),
                a = i.small,
                l = i.medium,
                u = i.large,
                c = { markerWidth: t.link.markerWidth, markerHeight: t.link.markerHeight };
              Ci[o] = e.createElement(
                "defs",
                null,
                e.createElement(Yo, _i({ id: Qr.MARKER_S, refX: a, fill: r }, c)),
                e.createElement(Yo, _i({ id: Qr.MARKER_SH, refX: a, fill: n }, c)),
                e.createElement(Yo, _i({ id: Qr.MARKER_M, refX: l, fill: r }, c)),
                e.createElement(Yo, _i({ id: Qr.MARKER_MH, refX: l, fill: n }, c)),
                e.createElement(Yo, _i({ id: Qr.MARKER_L, refX: u, fill: r }, c)),
                e.createElement(Yo, _i({ id: Qr.MARKER_LH, refX: u, fill: n }, c))
              );
            }
            return Ci[o];
          });
      function Ni(e, t, n, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          i = o ? r : "";
        return (
          (e[r].highlighted = o),
          t[r] &&
            0 !== n.highlightDegree &&
            Object.keys(t[r]).forEach(function(t) {
              e[t].highlighted = o;
            }),
          { nodes: e, highlightedNode: i }
        );
      }
      function Mi(e) {
        return (
          (Mi =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Mi(e)
        );
      }
      function Ti() {
        return (
          (Ti = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ti.apply(this, arguments)
        );
      }
      function Li(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ji(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Li(Object(n), !0).forEach(function(t) {
                Ai(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Li(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function Ai(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== Mi(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== Mi(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === Mi(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      function zi(e, t) {
        if (e) {
          if ("string" == typeof e) return Ri(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ri(e, t)
              : void 0
          );
        }
      }
      function Ri(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      e.Component;
      var Di = null;
      const Ii = function(t) {
        var n,
          r,
          o = t.config,
          i = (t.data, t.id),
          a = (t.onZoomChange, t.onNodePositionChange),
          l = t.onDoubleClickNode,
          u = t.onClickNode,
          c =
            ((n = (0, e.useState)(function() {
              return Br(t, {});
            })),
            (r = 2),
            (function(e) {
              if (Array.isArray(e)) return e;
            })(n) ||
              (function(e, t) {
                var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                if (null != n) {
                  var r,
                    o,
                    i,
                    a,
                    l = [],
                    u = !0,
                    c = !1;
                  try {
                    if (((i = (n = n.call(e)).next), 0 === t)) {
                      if (Object(n) !== n) return;
                      u = !1;
                    } else for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
                  } catch (e) {
                    (c = !0), (o = e);
                  } finally {
                    try {
                      if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return l;
                }
              })(n, r) ||
              zi(n, r) ||
              (function() {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()),
          f = c[0],
          h = c[1],
          p = (0, e.useRef)(null),
          g = (0, e.useRef)(!1),
          m = function() {
            var e = d.transform;
            (function(e) {
              return "string" == typeof e
                ? new ke([document.querySelectorAll(e)], [document.documentElement])
                : new ke([null == e ? [] : e], _e);
            })("#".concat(i, "-").concat(Sr.GRAPH_CONTAINER_ID)).attr("transform", e),
              o.panAndZoom &&
                h(function(t) {
                  return ji(ji({}, t), {}, { transform: e });
                });
          },
          y = function() {
            var e;
            (g.current = !0),
              null == f || null === (e = f.simulation) || void 0 === e || e.stop(),
              f.enableFocusAnimation &&
                h(function(e) {
                  return ji(ji({}, e), {}, { enableFocusAnimation: !1 });
                });
          },
          b = function(e, t, n) {
            var r = n[t].id;
            if (!f.config.staticGraph) {
              var o = f.nodes[r];
              (o.oldX = o.x), (o.oldY = o.y);
              var i = o.x + d.dx,
                a = o.y + d.dy;
              (!f.config.bounded ||
                (function(e, t) {
                  var n = t.transform,
                    r = t.config,
                    o = 1 / n.k;
                  return e.x > -n.x * o && e.x < (r.width - n.x) * o && e.y > -n.y * o && e.y < (r.height - n.y) * o;
                })({ x: i, y: a }, f)) &&
                ((o.x = i),
                (o.y = a),
                (o.fx = o.x),
                (o.fy = o.y),
                h(function(e) {
                  return ji(ji({}, e), {}, { draggedNode: o });
                }));
            }
          },
          w = function() {
            var e, n, r;
            (g.current = !1),
              f.draggedNode &&
                ((function(e) {
                  if (t.onNodePositionChange) {
                    var n = e.id,
                      r = e.x,
                      o = e.y;
                    null == a || a(n, r, o);
                  }
                })(f.draggedNode),
                h(function(e) {
                  return ji(ji({}, e), {}, { draggedNode: void 0 });
                })),
              !f.config.staticGraph &&
                f.config.automaticRearrangeAfterDropNode &&
                (null == f ||
                  null === (e = f.simulation) ||
                  void 0 === e ||
                  e
                    .alphaTarget(
                      null == f || null === (n = f.config) || void 0 === n || null === (r = n.d3) || void 0 === r
                        ? void 0
                        : r.alphaTarget
                    )
                    .restart());
          },
          k = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = f.nodes,
              r = f.links,
              o = f.config,
              i = Ni(n, r, o, e, t),
              a = i.nodes,
              l = i.highlightedNode;
            h(ji(ji({}, f), {}, { nodes: a, highlightedNode: l }));
          },
          x = function() {
            var e = (function() {
              var e,
                t,
                n,
                r,
                o = je,
                i = Ae,
                a = ze,
                l = Re,
                u = {},
                c = s("start", "drag", "end"),
                f = 0,
                h = 0;
              function p(e) {
                e.on("mousedown.drag", g)
                  .filter(l)
                  .on("touchstart.drag", b)
                  .on("touchmove.drag", w)
                  .on("touchend.drag touchcancel.drag", k)
                  .style("touch-action", "none")
                  .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
              }
              function g() {
                if (!r && o.apply(this, arguments)) {
                  var a = x("mouse", i.apply(this, arguments), _, this, arguments);
                  a &&
                    (Ee(d.view)
                      .on("mousemove.drag", m, !0)
                      .on("mouseup.drag", y, !0),
                    Ne(d.view),
                    Ce(),
                    (n = !1),
                    (e = d.clientX),
                    (t = d.clientY),
                    a("start"));
                }
              }
              function m() {
                if ((Pe(), !n)) {
                  var r = d.clientX - e,
                    o = d.clientY - t;
                  n = r * r + o * o > h;
                }
                u.mouse("drag");
              }
              function y() {
                Ee(d.view).on("mousemove.drag mouseup.drag", null), Me(d.view, n), Pe(), u.mouse("end");
              }
              function b() {
                if (o.apply(this, arguments)) {
                  var e,
                    t,
                    n = d.changedTouches,
                    r = i.apply(this, arguments),
                    a = n.length;
                  for (e = 0; e < a; ++e) (t = x(n[e].identifier, r, Oe, this, arguments)) && (Ce(), t("start"));
                }
              }
              function w() {
                var e,
                  t,
                  n = d.changedTouches,
                  r = n.length;
                for (e = 0; e < r; ++e) (t = u[n[e].identifier]) && (Pe(), t("drag"));
              }
              function k() {
                var e,
                  t,
                  n = d.changedTouches,
                  o = n.length;
                for (
                  r && clearTimeout(r),
                    r = setTimeout(function() {
                      r = null;
                    }, 500),
                    e = 0;
                  e < o;
                  ++e
                )
                  (t = u[n[e].identifier]) && (Ce(), t("end"));
              }
              function x(e, t, n, r, o) {
                var i,
                  l,
                  s,
                  h = n(t, e),
                  g = c.copy();
                if (
                  v(new Le(p, "beforestart", i, e, f, h[0], h[1], 0, 0, g), function() {
                    return (
                      null != (d.subject = i = a.apply(r, o)) && ((l = i.x - h[0] || 0), (s = i.y - h[1] || 0), !0)
                    );
                  })
                )
                  return function a(c) {
                    var d,
                      m = h;
                    switch (c) {
                      case "start":
                        (u[e] = a), (d = f++);
                        break;
                      case "end":
                        delete u[e], --f;
                      case "drag":
                        (h = n(t, e)), (d = f);
                    }
                    v(new Le(p, c, i, e, d, h[0] + l, h[1] + s, h[0] - m[0], h[1] - m[1], g), g.apply, g, [c, r, o]);
                  };
              }
              return (
                (p.filter = function(e) {
                  return arguments.length ? ((o = "function" == typeof e ? e : Te(!!e)), p) : o;
                }),
                (p.container = function(e) {
                  return arguments.length ? ((i = "function" == typeof e ? e : Te(e)), p) : i;
                }),
                (p.subject = function(e) {
                  return arguments.length ? ((a = "function" == typeof e ? e : Te(e)), p) : a;
                }),
                (p.touchable = function(e) {
                  return arguments.length ? ((l = "function" == typeof e ? e : Te(!!e)), p) : l;
                }),
                (p.on = function() {
                  var e = c.on.apply(c, arguments);
                  return e === c ? p : e;
                }),
                (p.clickDistance = function(e) {
                  return arguments.length ? ((h = (e = +e) * e), p) : Math.sqrt(h);
                }),
                p
              );
            })()
              .on("start", y)
              .on("drag", b)
              .on("end", w);
            Ee("#".concat(i, "-").concat(Sr.GRAPH_WRAPPER_ID))
              .selectAll(".node")
              .call(e);
          },
          S = function() {
            var e, t, n, r, o, i, a, l, u;
            f &&
              ((null != f &&
                null !== (e = f.config) &&
                void 0 !== e &&
                null !== (t = e.d3) &&
                void 0 !== t &&
                t.disableLinkForce) ||
                (null == f ||
                  null === (n = f.simulation) ||
                  void 0 === n ||
                  n.nodes(f.d3Nodes).on("tick", function() {
                    var e,
                      t = {},
                      n = (function(e, t) {
                        var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (!n) {
                          if (Array.isArray(e) || (n = zi(e))) {
                            n && (e = n);
                            var r = 0,
                              o = function() {};
                            return {
                              s: o,
                              n: function() {
                                return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                              },
                              e: function(e) {
                                throw e;
                              },
                              f: o,
                            };
                          }
                          throw new TypeError(
                            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        }
                        var i,
                          a = !0,
                          l = !1;
                        return {
                          s: function() {
                            n = n.call(e);
                          },
                          n: function() {
                            var e = n.next();
                            return (a = e.done), e;
                          },
                          e: function(e) {
                            (l = !0), (i = e);
                          },
                          f: function() {
                            try {
                              a || null == n.return || n.return();
                            } finally {
                              if (l) throw i;
                            }
                          },
                        };
                      })(f.d3Nodes);
                    try {
                      for (n.s(); !(e = n.n()).done; ) {
                        var r = e.value;
                        t[r.id] = r;
                      }
                    } catch (e) {
                      n.e(e);
                    } finally {
                      n.f();
                    }
                    h(function(e) {
                      return ji(ji({}, e), {}, { d3Nodes: f.d3Nodes, nodes: t });
                    });
                  }),
                (u = (function(e) {
                  var t,
                    n,
                    r,
                    o,
                    i,
                    a = qe,
                    l = function(e) {
                      return 1 / Math.min(o[e.source.index], o[e.target.index]);
                    },
                    u = De(30),
                    c = 1;
                  function s(r) {
                    for (var o = 0, a = e.length; o < c; ++o)
                      for (var l, u, s, f, d, h, p, g = 0; g < a; ++g)
                        (u = (l = e[g]).source),
                          (f = (s = l.target).x + s.vx - u.x - u.vx || Ie()),
                          (d = s.y + s.vy - u.y - u.vy || Ie()),
                          (f *= h = (((h = Math.sqrt(f * f + d * d)) - n[g]) / h) * r * t[g]),
                          (d *= h),
                          (s.vx -= f * (p = i[g])),
                          (s.vy -= d * p),
                          (u.vx += f * (p = 1 - p)),
                          (u.vy += d * p);
                  }
                  function f() {
                    if (r) {
                      var l,
                        u,
                        c = r.length,
                        s = e.length,
                        f = We(r, a);
                      for (l = 0, o = new Array(c); l < s; ++l)
                        ((u = e[l]).index = l),
                          "object" != typeof u.source && (u.source = Ge(f, u.source)),
                          "object" != typeof u.target && (u.target = Ge(f, u.target)),
                          (o[u.source.index] = (o[u.source.index] || 0) + 1),
                          (o[u.target.index] = (o[u.target.index] || 0) + 1);
                      for (l = 0, i = new Array(s); l < s; ++l)
                        (u = e[l]), (i[l] = o[u.source.index] / (o[u.source.index] + o[u.target.index]));
                      (t = new Array(s)), d(), (n = new Array(s)), h();
                    }
                  }
                  function d() {
                    if (r) for (var n = 0, o = e.length; n < o; ++n) t[n] = +l(e[n], n, e);
                  }
                  function h() {
                    if (r) for (var t = 0, o = e.length; t < o; ++t) n[t] = +u(e[t], t, e);
                  }
                  return (
                    null == e && (e = []),
                    (s.initialize = function(e) {
                      (r = e), f();
                    }),
                    (s.links = function(t) {
                      return arguments.length ? ((e = t), f(), s) : e;
                    }),
                    (s.id = function(e) {
                      return arguments.length ? ((a = e), s) : a;
                    }),
                    (s.iterations = function(e) {
                      return arguments.length ? ((c = +e), s) : c;
                    }),
                    (s.strength = function(e) {
                      return arguments.length ? ((l = "function" == typeof e ? e : De(+e)), d(), s) : l;
                    }),
                    (s.distance = function(e) {
                      return arguments.length ? ((u = "function" == typeof e ? e : De(+e)), h(), s) : u;
                    }),
                    s
                  );
                })(f.d3Links)
                  .id(function(e) {
                    return e.id;
                  })
                  .distance(
                    null == f || null === (r = f.config) || void 0 === r || null === (o = r.d3) || void 0 === o
                      ? void 0
                      : o.linkLength
                  )
                  .strength(
                    null == f || null === (i = f.config) || void 0 === i || null === (a = i.d3) || void 0 === a
                      ? void 0
                      : a.linkStrength
                  )),
                null == f || null === (l = f.simulation) || void 0 === l || l.force(Sr.LINK_CLASS_NAME, u)),
              f.config.freezeAllDragEvents || x());
          };
        (0, e.useEffect)(function() {
          S(),
            (function() {
              var e = Ee("#".concat(i, "-").concat(Sr.GRAPH_WRAPPER_ID)),
                t = br().scaleExtent([o.minZoom, o.maxZoom]);
              o.freezeAllDragEvents || t.on("zoom", m), e.call(t).on("dblclick.zoom", null);
            })();
        }, []),
          (0, e.useEffect)(function() {}, []);
        var E = (function(e, t, n, r, o, i, a, l, u) {
            return { nodes: Oi(e, t, i, a, l, u, r), links: Ei(e, n, r, i, o, a, l, u), defs: Pi(i) };
          })(
            f.nodes,
            {
              onClickNode: function(e) {
                var t = f.nodes[e];
                if (Di) null == l || l(e, t), (Di = clearTimeout(Di));
                else {
                  var n = l ? Sr.TTL_DOUBLE_CLICK_IN_MS : 0;
                  Di = setTimeout(function() {
                    if (f.config.collapsible) {
                      var n = (function(e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 ? arguments[2] : void 0,
                            r = n.directed;
                          return (t[e] ? Object.keys(t[e]) : []).reduce(function(n, o) {
                            return Yr(o, t, r) && n.push({ source: e, target: o }), n;
                          }, []);
                        })(e, f.links, f.config),
                        r =
                          ((l = f.links),
                          (c = n),
                          (s = f.config),
                          (d = s.directed),
                          c.reduce(function(e, t) {
                            e[t.source] || (e[t.source] = {}), e[t.source][t.target] || (e[t.source][t.target] = 0);
                            var n = 0 === e[t.source][t.target] ? 1 : 0;
                            return (e[t.source][t.target] = n), d || (e[t.target][t.source] = n), e;
                          }, Vr({}, l))),
                        o = (function(e, t) {
                          return e.map(function(e) {
                            var n = e.source,
                              r = e.target,
                              o = Ur(n),
                              i = Ur(r),
                              a = !(t && t[o] && t[o][i]);
                            return Vr(Vr({}, e), {}, { isHidden: a });
                          });
                        })(f.d3Links, r),
                        i = null == n ? void 0 : n[0],
                        a = !1;
                      i && (a = 1 === r[i.source][i.target]),
                        h(function(e) {
                          return ji(ji({}, e), {}, { links: r, d3Links: o });
                        }),
                        a && x();
                    }
                    var l, c, s, d;
                    null == u || u(e, t), (Di = null);
                  }, n);
                }
              },
              onDoubleClickNode: function() {},
              onRightClickNode: function() {},
              onMouseOverNode: function(e) {
                g.current || (f.nodes[e], f.config.nodeHighlightBehavior && k(e, !0));
              },
              onMouseOut: function(e) {
                g.current || (f.nodes[e], f.config.nodeHighlightBehavior && k(e, !1));
              },
            },
            f.d3Links,
            f.links,
            {
              onClickLink: function() {},
              onRightClickLink: function() {},
              onMouseOverLink: function() {},
              onMouseOutLink: function() {},
            },
            f.config,
            f.highlightedNode,
            null,
            f.transform.k
          ),
          O = E.nodes,
          C = E.links,
          P = (E.defs, { height: o.height, width: o.width }),
          N = (function() {
            var e;
            f.enableFocusAnimation &&
              (p.current && clearTimeout(p.current),
              (p.current = setTimeout(function() {
                return h(function(e) {
                  return ji(ji({}, e), {}, { enableFocusAnimation: !1 });
                });
              }, (null == f || null === (e = f.config) || void 0 === e ? void 0 : e.focusAnimationDuration) *
                Sr.FOCUS_ANIMATION_DURATION)));
            var t = f.enableFocusAnimation ? f.config.focusAnimationDuration : 0;
            return { style: { transitionDuration: "".concat(t, "s") }, transform: f.focusTransformation };
          })();
        return e.createElement(
          "div",
          { id: "".concat(i, "-").concat(Sr.GRAPH_WRAPPER_ID) },
          e.createElement(
            "svg",
            { name: "svg-container-".concat(i), style: P },
            e.createElement("g", Ti({ id: "".concat(i, "-").concat(Sr.GRAPH_CONTAINER_ID) }, N), C, O)
          )
        );
      };
      var Fi = n(563);
      function Ui(e) {
        return (
          (Ui =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function(e) {
                  return typeof e;
                }
              : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          Ui(e)
        );
      }
      function Bi() {
        Bi = function() {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function(e, t, n) {
              e[t] = n.value;
            },
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          a = o.asyncIterator || "@@asyncIterator",
          l = o.toStringTag || "@@toStringTag";
        function u(e, t, n) {
          return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
        }
        try {
          u({}, "");
        } catch (e) {
          u = function(e, t, n) {
            return (e[t] = n);
          };
        }
        function c(e, t, n, o) {
          var i = t && t.prototype instanceof d ? t : d,
            a = Object.create(i.prototype),
            l = new E(o || []);
          return r(a, "_invoke", { value: _(e, n, l) }), a;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        e.wrap = c;
        var f = {};
        function d() {}
        function h() {}
        function p() {}
        var g = {};
        u(g, i, function() {
          return this;
        });
        var m = Object.getPrototypeOf,
          y = m && m(m(O([])));
        y && y !== t && n.call(y, i) && (g = y);
        var v = (p.prototype = d.prototype = Object.create(g));
        function b(e) {
          ["next", "throw", "return"].forEach(function(t) {
            u(e, t, function(e) {
              return this._invoke(t, e);
            });
          });
        }
        function w(e, t) {
          function o(r, i, a, l) {
            var u = s(e[r], e, i);
            if ("throw" !== u.type) {
              var c = u.arg,
                f = c.value;
              return f && "object" == Ui(f) && n.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function(e) {
                      o("next", e, a, l);
                    },
                    function(e) {
                      o("throw", e, a, l);
                    }
                  )
                : t.resolve(f).then(
                    function(e) {
                      (c.value = e), a(c);
                    },
                    function(e) {
                      return o("throw", e, a, l);
                    }
                  );
            }
            l(u.arg);
          }
          var i;
          r(this, "_invoke", {
            value: function(e, n) {
              function r() {
                return new t(function(t, r) {
                  o(e, n, t, r);
                });
              }
              return (i = i ? i.then(r, r) : r());
            },
          });
        }
        function _(e, t, n) {
          var r = "suspendedStart";
          return function(o, i) {
            if ("executing" === r) throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return { value: void 0, done: !0 };
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var l = k(a, n);
                if (l) {
                  if (l === f) continue;
                  return l;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var u = s(e, t, n);
              if ("normal" === u.type) {
                if (((r = n.done ? "completed" : "suspendedYield"), u.arg === f)) continue;
                return { value: u.arg, done: n.done };
              }
              "throw" === u.type && ((r = "completed"), (n.method = "throw"), (n.arg = u.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"), (t.arg = void 0), k(e, t), "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
              f
            );
          var o = s(r, e.iterator, t.arg);
          if ("throw" === o.type) return (t.method = "throw"), (t.arg = o.arg), (t.delegate = null), f;
          var i = o.arg;
          return i
            ? i.done
              ? ((t[e.resultName] = i.value),
                (t.next = e.nextLoc),
                "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                f)
              : i
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              f);
        }
        function x(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function S(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function E(e) {
          (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(x, this), this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[i];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                o = function t() {
                  for (; ++r < e.length; ) if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (o.next = o);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: void 0, done: !0 };
        }
        return (
          (h.prototype = p),
          r(v, "constructor", { value: p, configurable: !0 }),
          r(p, "constructor", { value: h, configurable: !0 }),
          (h.displayName = u(p, l, "GeneratorFunction")),
          (e.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === h || "GeneratorFunction" === (t.displayName || t.name));
          }),
          (e.mark = function(e) {
            return (
              Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : ((e.__proto__ = p), u(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(v)),
              e
            );
          }),
          (e.awrap = function(e) {
            return { __await: e };
          }),
          b(w.prototype),
          u(w.prototype, a, function() {
            return this;
          }),
          (e.AsyncIterator = w),
          (e.async = function(t, n, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(c(t, n, r, o), i);
            return e.isGeneratorFunction(n)
              ? a
              : a.next().then(function(e) {
                  return e.done ? e.value : a.next();
                });
          }),
          b(v),
          u(v, l, "Generator"),
          u(v, i, function() {
            return this;
          }),
          u(v, "toString", function() {
            return "[object Generator]";
          }),
          (e.keys = function(e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (E.prototype = {
            constructor: E,
            reset: function(e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(S),
                !e)
              )
                for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
            },
            stop: function() {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function(e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (a.type = "throw"), (a.arg = e), (t.next = n), r && ((t.method = "next"), (t.arg = void 0)), !!r;
              }
              for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                var i = this.tryEntries[o],
                  a = i.completion;
                if ("root" === i.tryLoc) return r("end");
                if (i.tryLoc <= this.prev) {
                  var l = n.call(i, "catchLoc"),
                    u = n.call(i, "finallyLoc");
                  if (l && u) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  } else if (l) {
                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error("try statement without catch or finally");
                    if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function(e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                  var i = o;
                  break;
                }
              }
              i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
              var a = i ? i.completion : {};
              return (
                (a.type = e),
                (a.arg = t),
                i ? ((this.method = "next"), (this.next = i.finallyLoc), f) : this.complete(a)
              );
            },
            complete: function(e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                f
              );
            },
            finish: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), f;
              }
            },
            catch: function(e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    S(n);
                  }
                  return o;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function(e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                f
              );
            },
          }),
          e
        );
      }
      function Wi(e, t, n, r, o, i, a) {
        try {
          var l = e[i](a),
            u = l.value;
        } catch (e) {
          return void n(e);
        }
        l.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      function Hi(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e, t) {
            var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != n) {
              var r,
                o,
                i,
                a,
                l = [],
                u = !0,
                c = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0);
              } catch (e) {
                (c = !0), (o = e);
              } finally {
                try {
                  if (!u && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                } finally {
                  if (c) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          (function(e, t) {
            if (e) {
              if ("string" == typeof e) return Vi(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(e)
                  : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? Vi(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Vi(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function qi(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function(t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Gi(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? qi(Object(n), !0).forEach(function(t) {
                $i(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : qi(Object(n)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function $i(e, t, n) {
        return (
          (t = (function(e) {
            var t = (function(e, t) {
              if ("object" !== Ui(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== Ui(r)) return r;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e);
            })(e);
            return "symbol" === Ui(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      }
      n(614);
      var Yi = (function() {
          var e = Fi.parse(location.search),
            t = !1;
          if ((e && e.fullscreen && (t = new Boolean(e.fullscreen)), e && e.data)) {
            var o = e.data.toLowerCase();
            try {
              var i = n(790)("./".concat(o, "/").concat(o, ".data")),
                a = n(653)("./".concat(o, "/").concat(o, ".config")),
                l = Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
              return { data: i, config: Nr(r, l), fullscreen: t };
            } catch (e) {
              console.warn(
                "dataset with name ".concat(o, " not found, falling back to default, make sure it is a valid dataset")
              );
            }
          }
          return { config: {}, data: n(691), fullscreen: t };
        })(),
        Xi = Yi.config,
        Qi = Yi.data,
        Ki = (Yi.fullscreen, Object.assign(r, Xi)),
        Zi = {
          nodes: Qi.nodes.map(function(e, t) {
            return Gi(Gi({}, e), {}, { properties: Gi(Gi({}, e.properties), {}, { root: 0 === t }) });
          }),
          links: Qi.links,
          focusedNodeId: Qi.rootId,
        };
      const Ji = function() {
        var t = Hi((0, e.useState)(0), 2),
          n = t[0],
          r = (t[1], Hi((0, e.useState)(!1), 2)),
          o = (r[0], r[1]),
          i = Hi((0, e.useState)(!1), 2),
          a = (i[0], i[1]),
          l = Hi((0, e.useState)(null), 2),
          u = l[0],
          c = l[1],
          s = Hi((0, e.useState)(0), 2),
          f =
            (s[0],
            s[1],
            (function() {
              var e,
                t =
                  ((e = Bi().mark(function e() {
                    var t;
                    return Bi().wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              o(!0),
                              (e.next = 3),
                              new Promise(function(e, t) {
                                setTimeout(function() {
                                  e(Zi);
                                }, 1e3);
                              })
                            );
                          case 3:
                            (t = e.sent),
                              c({
                                id: "graph",
                                data: t,
                                config: Gi(Gi({}, Ki), {}, { width: window.innerWidth, height: window.innerHeight }),
                              }),
                              a(!0);
                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function() {
                    var t = this,
                      n = arguments;
                    return new Promise(function(r, o) {
                      var i = e.apply(t, n);
                      function a(e) {
                        Wi(i, r, o, a, l, "next", e);
                      }
                      function l(e) {
                        Wi(i, r, o, a, l, "throw", e);
                      }
                      a(void 0);
                    });
                  });
              return function() {
                return t.apply(this, arguments);
              };
            })());
        return (
          (0, e.useEffect)(function() {
            f();
          }, []),
          e.createElement(
            e.Fragment,
            null,
            e.createElement("div", { className: "zoom-container" }, n),
            u && e.createElement(Ii, u)
          )
        );
      };
      var ea = document.getElementById("app");
      t.render(e.createElement(Ji, null), ea);
    })();
})();
//# sourceMappingURL=rd3g.sandbox.bundle.js.map
