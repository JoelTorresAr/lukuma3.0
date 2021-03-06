(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: true,
      showJoins: false,
      actionButton: "",
      switchNavegator: false,
      buttonKeys: [{
        accion: "JUNTAR",
        icon: "fas fa-circle-notch"
      }, {
        accion: "COBRAR",
        icon: "fas fa-circle-notch"
      }, {
        accion: "ELIMINAR",
        icon: "fas fa-circle-notch"
      }, {
        accion: "SEPARAR",
        icon: "fas fa-circle-notch"
      }, {
        accion: "MOVER",
        icon: "fas fa-circle-notch"
      }],
      ip: "",
      user: "",
      pisos: "",
      pisoActual: "0",
      mesas: "",
      mesaId: "",
      mesaActual: "",
      arrayMesas: [],
      pin: "",
      dialog: false,
      numcomen: 1
    };
  },
  watch: {
    pisos: function pisos(val) {
      if (Object.keys(val).length > 0) {
        var index = Object.keys(val)[0];

        if (this.pisoActual == "0") {
          this.getMesas(index);
        } else {
          this.getMesas(this.pisoActual);
        }
      }
    }
  },
  created: function created() {
    this.pisos = JSON.parse(this.$store.getters.getPISOS);
    this.pin = this.$store.getters.getPIN;
    this.ip = this.$store.getters.getIP;
    this.user = this.$store.getters.getUSERNAME;
    this.pisoActual = this.$store.getters.getPISO_ACTUAL;
  },
  methods: {
    getMesas: function getMesas(piso) {
      var _this = this;

      this.mesas = [];
      this.loading = true;
      this.pisoActual = piso;
      axios.get("".concat(this.ip, "/?nomFun=tb_mesas&parm_pin=").concat(this.pin, "&parm_piso=").concat(piso, "&parm_tipo=M$")).then(function (_ref) {
        var data = _ref.data;
        _this.loading = false;
        _this.mesas = data.mesas;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getIcon: function getIcon(item) {
      var st_cmd = item.st_cmd;
      var icon = "";

      switch (st_cmd) {
        case "1":
          //Pidio precuenta
          break;

        case "3":
          //Pidio precuenta
          icon = "fas fa-coins";
          break;

        case "4":
          //Esta en preparción
          icon = "mdi mdi-pot-steam";
          break;

        default:
          break;
      }

      return icon;
    },
    actionButtons: function actionButtons(key) {
      switch (key) {
        case "JUNTAR":
          if (this.showJoins) {
            this.actionButton = "";
            this.showJoins = !this.showJoins;
            this.unirMesas();
          } else {
            this.actionButton = "JUNTAR";
            this.arrayMesas = [];
            this.showJoins = !this.showJoins;
          }

          break;

        case "SEPARAR":
          if (this.showJoins) {
            this.showJoins = !this.showJoins;
            this.separarMesas();
          } else {
            this.actionButton = "SEPARAR";
            this.arrayMesas = [];
            this.showJoins = !this.showJoins;
          }

          break;

        case "MOVER":
          if (this.showJoins) {
            this.showJoins = !this.showJoins;
            this.moverMesas();
          } else {
            console.log("mover");
            this.actionButton = "MOVER";
            this.arrayMesas = [];
            this.showJoins = !this.showJoins;
          }

          break;

        default:
          break;
      }
    },
    actionMesa: function actionMesa(item, index) {
      var st_cmd = item.st_cmd;

      switch (this.actionButton) {
        case "JUNTAR":
          if (st_cmd != "3" & st_cmd != "4") {
            var existe = false;
            var ix;
            this.arrayMesas.forEach(function (e) {
              if (e.id == index) {
                existe = true;
                ix = e;
              }
            });

            if (existe) {
              var i = this.arrayMesas.indexOf(ix);
              this.arrayMesas.splice(i, 1);
            } else {
              var mesa = {
                id: index,
                id_cmd: item.id_cmd,
                st_cmd: item.st_cmd,
                st_join: 1
              };
              this.arrayMesas.push(mesa);
            }
          }

          break;

        case "SEPARAR":
          if (item.juntada === 1) {
            var existe = false;
            var ix;
            this.arrayMesas.forEach(function (e) {
              if (e.id == index) {
                existe = true;
                ix = e;
              }
            });

            if (existe) {
              this.arrayMesas = [];
            } else {
              var mesa = {
                id: index,
                id_cmd: item.id_cmd,
                st_cmd: item.st_cmd,
                st_join: 1
              };
              this.arrayMesas = [];
              this.arrayMesas.push(mesa);
            }
          }

          break;

        case "MOVER":
          if (st_cmd != "3" & st_cmd != "4") {
            var existe = false;
            var ix;
            this.arrayMesas.forEach(function (e) {
              if (e.id == index) {
                existe = true;
                ix = e;
              }
            });

            if (existe) {
              var i = this.arrayMesas.indexOf(ix);
              this.arrayMesas.splice(i, 1);
            } else {
              if (this.arrayMesas.length < 2) {
                var mesa = {
                  id: index,
                  id_cmd: item.id_cmd,
                  st_cmd: item.st_cmd,
                  st_join: 1
                };
                this.arrayMesas.push(mesa);
              }
            }
          }

          break;

        default:
          this.newComanda(item, index);
          break;
      }
    },
    checkJoin: function checkJoin(index) {
      var std = "";

      switch (this.actionButton) {
        case "JUNTAR":
          std = "mdi mdi-checkbox-blank-outline";
          this.arrayMesas.forEach(function (e) {
            if (e.id == index) {
              std = "mdi mdi-checkbox-marked-outline";
            }
          });
          break;

        case "SEPARAR":
          std = "mdi mdi-checkbox-blank-outline";
          this.arrayMesas.forEach(function (e) {
            if (e.id == index) {
              std = "mdi mdi-checkbox-marked-outline";
            }
          });
          break;

        case "MOVER":
          std = "mdi mdi-checkbox-blank-outline";
          this.arrayMesas.forEach(function (e) {
            if (e.id == index) {
              std = "mdi mdi-checkbox-marked-outline";
            }
          });
          break;

        default:
          break;
      }

      return std;
    },
    showChecksinMesa: function showChecksinMesa(item) {
      var st_cmd = item.st_cmd;
      var std = false;

      switch (this.actionButton) {
        case "JUNTAR":
          if (this.showJoins & st_cmd != "3" & st_cmd != "4") {
            std = true;
          }

          break;

        case "SEPARAR":
          if (this.showJoins & item.juntada === 1) {
            std = true;
          }

          break;

        case "MOVER":
          if (this.showJoins & st_cmd != "3" & st_cmd != "4") {
            std = true;
          }
          /*           var existewithCmd = false;
          var existewithoutCmd = false;
          var ixwith;
          var ixwithout;
          this.arrayMesas.forEach(e => {
            if ((e.id == index) & (e.id_cmd === "")) {
              existewithoutCmd = true;
              ixwithout = e;
            }
            if ((e.id == index) & (e.id_cmd !== "")) {
              existewithCmd = true;
              ixwith = e;
            }
          });
          if (
            this.showJoins &
            (st_cmd != "3") &
            (st_cmd != "4") &
            !existewithCmd
          ) {
            console.log("mesa sin comanda");
            std = true;
          }
          if (
            this.showJoins &
            (st_cmd != "3") &
            (st_cmd != "4") &
            !existewithoutCmd
          ) {
            console.log("mesa con comanda");
            std = true;
          } */


          break;

        default:
          break;
      }

      return std;
    },
    newComanda: function newComanda(item, index) {
      var _this2 = this;

      this.mesaId = index;
      this.mesaActual = item;
      this.$store.commit("SET_MESA_ACTUAL", JSON.stringify(item));
      this.$store.commit("SET_ID_MESA_ACTUAL", index);
      var id = this.$store.getters.getUSERID;

      if (item.st_cmd == "") {
        this.saveComanda();
      } else {
        var url = "".concat(this.ip, "/?nomFun=tb_revisar_cmd&parm_pin=").concat(this.pin, "&parm_piso=").concat(this.pisoActual, "&parm_id_cmd=").concat(item.id_cmd, "&parm_tipocmd=1&parm_id_mesero=").concat(id, "&parm_tipo=M$");
        axios.get(url).then(function (_ref2) {
          var data = _ref2.data;

          if (data.status !== 0) {
            _this2.$router.push({
              name: "Store"
            });

            _this2.$store.commit("SET_PISO_ACTUAL", _this2.pisoActual);
          } else {
            if (data.msg == "Comanda no existe") {
              Swal.fire({
                title: "Advertencia!",
                text: data.msg,
                icon: "warning",
                confirmButtonText: "OK"
              });

              _this2.getMesas(_this2.pisoActual);
            } else {
              var name = _this2.$store.getters.getUSERNAME;
              var msg = "Comanda esta siendo Editada por mesero: ".concat(name);

              if (data.msg != msg) {
                Swal.fire({
                  title: "Advertencia!",
                  text: data.msg,
                  icon: "warning",
                  confirmButtonText: "OK"
                });
              } else {
                _this2.$router.push({
                  name: "Store"
                });

                _this2.$store.commit("SET_PISO_ACTUAL", _this2.pisoActual);
              }
            }
          }
        })["catch"](function (error) {
          console.log(error);
        });
      }
    },
    saveComanda: function saveComanda() {
      var _this3 = this;

      var id = this.$store.getters.getUSERID;
      var url = "".concat(this.ip, "/?nomFun=tb_new_cmd&parm_pin=").concat(this.pin, "&parm_piso=").concat(this.pisoActual, "&parm_id_mesas=").concat(this.mesaId, "&parm_num=").concat(this.numcomen, "&parm_tipocmd=1&parm_id_mesero=").concat(id, "&parm_tipo=M$");
      axios.get(url).then(function (_ref3) {
        var data = _ref3.data;

        if (data.msg == "Ok") {
          //this.getMesas(this.pisoActual);
          _this3.mesaActual.id_cmd = data.idcmd;

          _this3.$store.commit("SET_MESA_ACTUAL", JSON.stringify(_this3.mesaActual));

          _this3.$router.push({
            name: "Store"
          });

          _this3.$store.commit("SET_PISO_ACTUAL", _this3.pisoActual);

          _this3.dialog = false;
        } else {
          Swal.fire({
            title: "Advertencia!",
            text: data.msg,
            icon: "warning",
            confirmButtonText: "OK"
          });

          _this3.getMesas(_this3.pisoActual); // this.dialog = false;

        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    unirMesas: function unirMesas() {
      var _this4 = this;

      var id = this.$store.getters.getUSERID;
      var id_cmd = "";
      var id_mesas = "";
      this.arrayMesas.forEach(function (e) {
        if (e.id_cmd != 0) {
          id_cmd = e.id_cmd;
        }

        id_mesas = id_mesas + "," + String(e.id);
      });
      var url = "".concat(this.ip, "/?nomFun=tb_juntar_mesa&parm_id_cmd=").concat(id_cmd, "&parm_id_mesas=").concat(id_mesas, "&parm_tipo=M$");
      axios.get(url).then(function (_ref4) {
        var data = _ref4.data;

        if (data.msg == "Ok") {
          _this4.arrayMesas = [];

          _this4.getMesas(_this4.pisoActual);
        } else {
          Swal.fire({
            title: "Advertencia!",
            text: data.msg,
            icon: "warning",
            confirmButtonText: "OK"
          });

          _this4.getMesas(_this4.pisoActual);

          _this4.arrayMesas = [];
        }
      })["catch"](function (error) {
        _this4.arrayMesas = [];
        console.log(error);
      });
    },
    separarMesas: function separarMesas() {
      var _this5 = this;

      var id_cmd = "";
      var id_mesa = "";
      this.arrayMesas.forEach(function (e) {
        if (e.id_cmd != 0) {
          id_cmd = e.id_cmd;
        }

        id_mesa = String(e.id);
      });
      var url = "".concat(this.ip, "/?nomFun=tb_separar_mesa&parm_id_cmd=").concat(id_cmd, "&parm_id_mesa=").concat(id_mesa, "&parm_tipo=M$");
      axios.get(url).then(function (_ref5) {
        var data = _ref5.data;

        if (data.msg == "OK") {
          _this5.arrayMesas = [];

          _this5.getMesas(_this5.pisoActual);
        } else {
          Swal.fire({
            title: "Advertencia!",
            text: data.msg,
            icon: "warning",
            confirmButtonText: "OK"
          });

          _this5.getMesas(_this5.pisoActual);

          _this5.arrayMesas = [];
        }
      })["catch"](function (error) {
        _this5.arrayMesas = [];
        console.log(error);
      });
    },
    moverMesas: function moverMesas() {
      var _this6 = this;

      var id_cmd = "";
      var id_mesa = "";
      this.arrayMesas.forEach(function (e) {
        if (e.id_cmd != 0) {
          id_cmd = e.id_cmd;
        } else {
          id_mesa = e.id;
        }
      });
      var url = "".concat(this.ip, "/?nomFun=tb_mover_mesa&parm_id_cmd=").concat(id_cmd, "&parm_id_mesa=").concat(id_mesa, "&parm_tipo=M$");
      axios.get(url).then(function (_ref6) {
        var data = _ref6.data;

        if (data.msg == "OK") {
          _this6.arrayMesas = [];

          _this6.getMesas(_this6.pisoActual);
        } else {
          Swal.fire({
            title: "Advertencia!",
            text: data.msg,
            icon: "warning",
            confirmButtonText: "OK"
          });

          _this6.getMesas(_this6.pisoActual);

          _this6.arrayMesas = [];
        }
      })["catch"](function (error) {
        _this6.arrayMesas = [];
        console.log(error);
      });
    },
    logout: function logout() {
      this.$store.commit("SET_PIN", null);
      this.$router.push({
        name: "Login"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.centered-input input {\r\n  text-align: center;\n}\n#inspireme--body--index {\r\n  height: 70vh;\n}\n.__vuescroll .hasVBar {\r\n  height: 60vh !important;\n}\n.mesa__header {\r\n  display: flex;\r\n  width: 95%;\r\n  justify-content: space-between;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=template&id=494d9643&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index.vue?vue&type=template&id=494d9643& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c(
        "v-app-bar",
        {
          staticStyle: { height: "3rem" },
          attrs: { app: "", "clipped-right": "" }
        },
        [
          _c(
            "v-slide-group",
            { attrs: { multiple: "", "show-arrows": "" } },
            _vm._l(_vm.pisos, function(item, index) {
              return _c("v-slide-item", {
                key: index,
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var active = ref.active
                        return [
                          _c(
                            "v-btn",
                            {
                              staticClass: "ma-2 white--text card card-block",
                              attrs: {
                                tile: "",
                                "input-value": active,
                                color:
                                  index == _vm.pisoActual
                                    ? "black"
                                    : "light-green darken-4"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.getMesas(index)
                                }
                              }
                            },
                            [_vm._v(_vm._s(item))]
                          )
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            }),
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-switch", {
            attrs: { label: "Opciones de mesa" },
            model: {
              value: _vm.switchNavegator,
              callback: function($$v) {
                _vm.switchNavegator = $$v
              },
              expression: "switchNavegator"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        { attrs: { app: "" } },
        [
          _c(
            "perfect-scrollbar",
            [
              _c(
                "v-col",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loading,
                      expression: "loading"
                    }
                  ],
                  attrs: { cols: "12" }
                },
                [_c("app-spinner")],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card",
                {
                  staticClass: "d-flex flex-wrap",
                  attrs: { flat: "", tile: "" }
                },
                _vm._l(_vm.mesas, function(item, index) {
                  return _c(
                    "v-card",
                    {
                      key: index,
                      staticClass: "pa-2 mt-4 ml-4 mr-3",
                      attrs: {
                        color: item.st_mesa == "L" ? "success" : "error",
                        dark: "",
                        height: "6rem",
                        width: "8rem"
                      },
                      on: {
                        click: function($event) {
                          return _vm.actionMesa(item, index)
                        }
                      }
                    },
                    [
                      _c("v-card-title", { staticClass: "p-0" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.nombre) +
                            "\n            "
                        ),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showChecksinMesa(item),
                              expression: "showChecksinMesa(item)"
                            }
                          ],
                          class: _vm.checkJoin(index)
                        })
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "pb-0" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(item.mesero) +
                            "\n            "
                        ),
                        _c("i", { class: _vm.getIcon(item) })
                      ]),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "p-0" }, [
                        _c("div", { staticClass: "mesa__header" }, [
                          _c("i", {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: item.juntada == 1,
                                expression: "item.juntada == 1"
                              }
                            ],
                            staticClass: "fas fa-link black--text"
                          })
                        ])
                      ])
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.switchNavegator
        ? _c(
            "v-navigation-drawer",
            {
              attrs: {
                app: "",
                permanent: "",
                right: "",
                clipped: "",
                width: "12rem",
                height: "70vh"
              }
            },
            [
              _c(
                "v-list",
                { attrs: { dense: "" } },
                [
                  _c(
                    "v-list-item",
                    {
                      on: {
                        click: function($event) {
                          return _vm.actionButtons("JUNTAR")
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("fas fa-circle-notch")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _vm._v(
                              _vm._s(
                                _vm.showJoins == true &&
                                  _vm.actionButton === "JUNTAR"
                                  ? "OK"
                                  : "JUNTAR"
                              )
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      on: {
                        click: function($event) {
                          return _vm.actionButtons("SEPARAR")
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("fas fa-circle-notch")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _vm._v(
                              _vm._s(
                                _vm.showJoins == true &&
                                  _vm.actionButton === "SEPARAR"
                                  ? "OK"
                                  : "SEPARAR"
                              )
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      on: {
                        click: function($event) {
                          return _vm.actionButtons("MOVER")
                        }
                      }
                    },
                    [
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("fas fa-circle-notch")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _vm._v(
                              _vm._s(
                                _vm.showJoins == true &&
                                  _vm.actionButton === "MOVER"
                                  ? "OK"
                                  : "MOVER"
                              )
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "v-footer",
        {
          staticClass: "text--accent-3",
          staticStyle: { height: "3rem" },
          attrs: { app: "" }
        },
        [
          _c("span", [_vm._v(_vm._s(_vm.user))]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "ma-2 white--text mt-0",
              attrs: {
                tile: "",
                "min-width": "8rem",
                color: "purple accent-4"
              },
              on: { click: _vm.logout }
            },
            [_vm._v("BLOQUEAR")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "600px", height: "100rem" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-card-text",
                { staticClass: "p-0" },
                [
                  _c(
                    "v-container",
                    { staticClass: "pt-0 pb-0" },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            { staticClass: "pt-0 pb-0", attrs: { cols: "12" } },
                            [
                              _c("v-text-field", {
                                staticClass: "centered-input display-1",
                                attrs: {
                                  type: "number",
                                  min: "1",
                                  maxlength: "2",
                                  counter: 2,
                                  rules: [
                                    function(v) {
                                      return !!v || "Ingrese una cantidad"
                                    }
                                  ],
                                  required: ""
                                },
                                model: {
                                  value: _vm.numcomen,
                                  callback: function($$v) {
                                    _vm.numcomen = $$v
                                  },
                                  expression: "numcomen"
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "pt-0 pb-0" },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "error", text: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: { click: _vm.saveComanda }
                    },
                    [_vm._v("Save")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Index.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=494d9643& */ "./resources/js/views/Index.vue?vue&type=template&id=494d9643&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Index.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Index.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Index.vue?vue&type=template&id=494d9643&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Index.vue?vue&type=template&id=494d9643& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=494d9643& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index.vue?vue&type=template&id=494d9643&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494d9643___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);