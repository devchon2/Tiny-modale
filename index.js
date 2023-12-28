"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TinyModale;
var _react = _interopRequireWildcard(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//Bump Animation
const BumpAnimation = () => (0, _styledComponents.keyframes)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n", "\n0% {\n  transform: scale(0);\n}\n\n57% {\n  transform: scale(0.95);\n}\n64% {\n  transform: scale(1.02);\n}\n71% {\n  transform: scale(0.98);\n}\n\n\n100% {\n  transform: scale(1);\n}"])), console.log("bump"));

//Fade Animation
const FadeAnimation = opacity => (0, _styledComponents.keyframes)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n0 {\n  opacity: 0;\n}\n80% {\n  opacity: 0;\n}\n100% {\n  opacity : ", ";\n}\n"])), opacity);

//Full Container Styles
const StyledFullContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nz-index: 1;\nwidth: 100%;\nheight: 100%;\nbackground-color: ", ";\nopacity: ", ";\nposition: absolute;\nscale: 1;\nanimation: ", ";\n\n"])), props => props.$bgcontainercolor, props => props.$bgcontaineropacity, props => props.$bganimation === "fade" ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n         ", " 0.4s ease-in-out \n      "])), FadeAnimation(props.$bgcontaineropacity)) : props.$bganimation === "bump" ? (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n         ", " 0.4s ease-in-out \n      "])), BumpAnimation(props.$bgscale)) : null);

//Modale Container Styles
const StyledModaleContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  \n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  position: absolute;\n  opacity: ", ";\n  z-index: 2;\n  animation: ", ";\n  border-radius: ", ";\n"])), props => props.$modalesize === "small" ? "30vw" : props.$modalesize === "medium" ? "50vw" : props.$modalesize === "large" ? "70vw" : props.$modalesize === "full" ? "100vw" : props.$modalecontainerwidth, props => props.$modalesize === "small" ? "30vh" : props.$modalesize === "medium" ? "50vh" : props.$modalesize === "large" ? "70vh" : props.$modalesize === "full" ? "100vh" : props.$modalecontainerheight, props => props.$modaleboxcolor, props => props.$modaleOpacity, props => props.$modaleanimation === "fade" ? (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n          ", " 0.4s ease-out\n        "])), FadeAnimation(props.$modaleOpacity)) : props.$modaleanimation === "bump" ? (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n          ", " 0.4s ease-out\n        "])), BumpAnimation()) : null, props => props.$modaleRadius);

//Modale Content Styles
const StyledModaleContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-family: ", ";\n  font-size: ", ";\n"])), props => props.$modalecolor, props => props.$textfamily, props => props.$textsize);

//CloseItem Styles
const StyledModaleCloseButton = _styledComponents.default.button(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 5px;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  position: absolute;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  border-radius: ", ";\n  padding: 15px;\n  outline: none;\n  cursor: pointer;\n  top: -10px;\n  right: -10px;\n  color: ", ";\n  &:hover {\n    transition: 0.5s;\n    transform: scale(1.1);\n  }\n"])), props => props.$closeitembuttonsize, props => props.$closeitembuttonsize, props => props.$closeitembgColor, props => props.$closeItembtncolor, props => props.$closeItembuttonradius, props => props.$itembtncolor);

//CloseItem Content Styles
const StyledModaleClosebuttonTextContent = _styledComponents.default.p(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  color: ", ";\n  font-size: ", ";\n  font-family: ", ";\n"])), props => props.$closeitembgColor, props => props.$closeitembuttonsize, props => props.$textfamily);

//Message Styles
const StyledModaleMessage = _styledComponents.default.p(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  color: ", ";\n  font-size: ", ";\n"])), props => props.$closeItemTextcolor, props => props.$textsize);

//Supplemental Button Styles
const StyledModaleBtn = _styledComponents.default.button(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: ", ";\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  height: ", ";\n  color: ", ";\n  font-size: ", ";\n  border-radius: ", ";\n  border: ", ";\n  margin: ", ";\n  padding: ", ";\n  background-color: ", ";\n  cursor: ", ";  \n  box-sizing: content-box;\n\n  &:hover {\n    transition: 0.5s;\n    transform: scale(1.1);\n  }\n"])), props => props.$btn ? "flex" : "none", props => props.$btnwidth, props => props.$btnheight, props => props.$btncontentcolor, props => props.$btntextsize, props => props.$btnradius, props => props.$btnborder, props => props.$btnmargin, props => props.$btnpadding, props => props.$btnbgcolor, props => props.$cursor);

//Background Styles
const StyledBGContainer = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  opacity: ", ";\n  position: absolute;\n  scale: 1;\n  animation: ", ";\n  border-radius: ", ";\n"])), props => props.$bgcontainercolor, props => props.$bgcontaineropacity, props => props.$bganimation === "fade" ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n           ", " 0.4s ease-in-out \n        "])), FadeAnimation(props.$bgcontaineropacity)) : props.$bganimation === "bump" ? (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n           ", " 0.4s ease-in-out \n        "])), BumpAnimation(props.$bgscale)) : null, props => props.$modaleRadius);

/**
 * TinyModale component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {boolean} [props.showButton=false] - Determines whether to show the button.
 * @param {string} [props.message="Employee Created !"] - The message to be displayed in the modal.
 * @param {Function} [props.onClose=() => console.log("onClose ok")] - Function to be called when the modal is closed.
 * @param {Function} [props.btnOnClick=() => console.log("onClick ok")] - Function to be called when the button is clicked.
 * @param {Function} [props.setActiveModale=() => true] - Function to set the active state of the modal.
 * @param {string} [props.bgcontainercolor="black"] - The background color of the modal container.
 * @param {number} [props.bgcontaineropacity=0.5] - The opacity of the modal container.
 * @param {string} [props.bgAnimation="fade"] - The animation type for the modal background.
 * @param {string} [props.textFamily="arial"] - The font family for the modal text.
 * @param {string} [props.textSize="20px"] - The font size for the modal text.
 * @param {string} [props.modaleSize="medium"] - The size of the modal.
 * @param {string} [props.modaleBoxColor="white"] - The background color of the modal box.
 * @param {string} [props.modaleRadius="15px"] - The border radius of the modal box.
 * @param {string} [props.modaleAnimation="bump"] - The animation type for the modal box.
 * @param {string} [props.modaleOpacity="1"] - The opacity of the modal box.
 * @param {string} [props.closeitembgColor="white"] - The background color of the close item.
 * @param {string} [props.closeItemFontColor="black"] - The font color of the close item.
 * @param {string} [props.closeitemButtonsize="20px"] - The size of the close item button.
 * @param {string} [props.closeItemTextColor="black"] - The text color of the close item.
 * @param {string} [props.closeItemButtonRadius="25px"] - The border radius of the close item button.
 * @param {string} [props.buttonTextContent="ok"] - The content of the button.
 * @param {string} [props.buttonColor="black"] - The background color of the button.
 * @param {string} [props.buttonWidth="100px"] - The width of the button.
 * @param {string} [props.buttonHeight="50px"] - The height of the button.
 * @param {string} [props.buttonTextContentColor="black"] - The text color of the button content.
 * @param {string} [props.buttonTextSize="20px"] - The font size of the button text.
 * @param {string} [props.buttonBorder="1px solid black"] - The border of the button.
 * @param {string} [props.buttonmodaleRadius="25px"] - The border radius of the button.
 * @param {string} [props.buttonMargin="20px"] - The margin of the button.
 * @param {string} [props.buttonPadding="10px"] - The padding of the button.
 * @param {string} [props.buttonBgColor="transparent"] - The background color of the button.
 * @param {string} [props.buttonCursor="pointer"] - The cursor style of the button.
 * @returns {JSX.Element} The TinyModale component.
 */
function TinyModale(_ref) {
  let {
    //state props
    showButton = false,
    isValidateForm,
    message = "Employee Created !",
    //Actions Props
    onClose = () => {
      console.log("onClose ok");
      return false;
    },
    btnOnClick = () => {
      console.log("onClick ok");
      return false;
    },
    setActiveModale = () => true,
    //BgModale Styles
    bgcontainercolor = "black",
    bgcontaineropacity = 0.5,
    bgAnimation = "fade",
    textFamily = "arial",
    textSize = "20px",
    //Modale Styles
    modaleSize = "medium",
    modaleBoxColor = "white",
    modaleRadius = "15px",
    modaleAnimation = "bump",
    modaleOpacity = "1",
    //CloseItem Styles
    closeitembgColor = "white",
    closeItemFontColor = "black",
    closeitemButtonsize = "20px",
    closeItemTextColor = "black",
    closeItemButtonRadius = "25px",
    //button Styles
    buttonTextContent = "ok",
    buttonColor = "black",
    buttonWidth = "100px",
    buttonHeight = "50px",
    buttonTextContentColor = "black",
    buttonTextSize = "20px",
    buttonBorder = "1px solid black",
    buttonRadius = "25px",
    buttonMargin = "20px",
    buttonPadding = "10px",
    buttonBgColor = "transparent",
    buttonCursor = "pointer"
  } = _ref;
  //supplemental button
  const [btn, setBtn] = (0, _react.useState)(showButton);

  //Message Styles
  const [txtSize, setTxtSize] = (0, _react.useState)(textSize);
  const [txtFamily, setTxtFamily] = (0, _react.useState)(textFamily);
  const [msg, setMsg] = (0, _react.useState)(message);

  //BgModale Styles
  const [bgColor, setBgColor] = (0, _react.useState)(bgcontainercolor);
  const [opa, setOpa] = (0, _react.useState)(bgcontaineropacity);
  const [bgAnim, setBgAnim] = (0, _react.useState)(bgAnimation);

  //Modale Styles
  const [mdlSize, setMdlSize] = (0, _react.useState)(modaleSize);
  const [mdlBoxColor, setMdlBoxColor] = (0, _react.useState)(modaleBoxColor);
  const [mdlAnim, setMdlAnim] = (0, _react.useState)(modaleAnimation);
  const [mdlOpacity, setMdlOpacity] = (0, _react.useState)(modaleOpacity);
  const [rad, setRad] = (0, _react.useState)(modaleRadius);

  //CloseItem Styles
  const [itmBtnColor, setItmBtnColor] = (0, _react.useState)(closeitembgColor);
  const [itmBtnSize, setItmBtnSize] = (0, _react.useState)(closeitemButtonsize);
  const [txtColor, setTxtColor] = (0, _react.useState)(closeItemTextColor);
  const [itmColor, setItmColor] = (0, _react.useState)(closeItemFontColor);
  const [CloseItemRadius, setCloseItemRadius] = (0, _react.useState)(closeItemButtonRadius);

  //button Styles
  const [btnColor, setBtnColor] = (0, _react.useState)(buttonColor);
  const [btnWidth, setBtnWidth] = (0, _react.useState)(buttonWidth);
  const [btnHeight, setBtnHeight] = (0, _react.useState)(buttonHeight);
  const [btnContentColor, setBtnContentColor] = (0, _react.useState)(buttonTextContentColor);
  const [btnTextSize, setBtnTextSize] = (0, _react.useState)(buttonTextSize);
  const [btnBorder, setBtnBorder] = (0, _react.useState)(buttonBorder);
  const [btnmodaleRadius, setBtnmodaleRadius] = (0, _react.useState)(buttonRadius);
  const [btnMargin, setBtnMargin] = (0, _react.useState)(buttonMargin);
  const [btnPadding, setBtnPadding] = (0, _react.useState)(buttonPadding);
  const [btnBgColor, setBtnBgColor] = (0, _react.useState)(buttonBgColor);
  const [btnCursor, setBtnCursor] = (0, _react.useState)(buttonCursor);
  const [btnContent, setBtnContent] = (0, _react.useState)(buttonTextContent);
  (0, _react.useEffect)(() => {
    setMdlSize(modaleSize);
    setMdlBoxColor(modaleBoxColor);
    setBgAnim(bgAnimation);
    setBtnColor(buttonColor);
    setItmBtnColor(closeitembgColor);
    setItmBtnSize(closeitemButtonsize);
    setTxtColor(closeItemTextColor);
    setTxtSize(textSize);
    setTxtFamily(textFamily);
    setMsg(message);
    setBgColor(bgcontainercolor);
    setOpa(bgcontaineropacity);
    setRad(modaleRadius);
    setBtnContent(buttonTextContent);
    setBtnColor(buttonColor);
    setBtnWidth(buttonWidth);
    setBtnHeight(buttonHeight);
    setBtnContentColor(buttonTextContentColor);
    setBtnTextSize(buttonTextSize);
    setBtnBorder(buttonBorder);
    setBtnmodaleRadius(buttonRadius);
    setBtnMargin(buttonMargin);
    setBtnPadding(buttonPadding);
    setBtnBgColor(buttonBgColor);
    setBtnCursor(buttonCursor);
    setBgAnim(bgAnimation);
    setMdlAnim(modaleAnimation);
    setItmColor(closeItemFontColor);
    setBtn(showButton);
    setMdlOpacity(modaleOpacity);
    setCloseItemRadius(closeItemButtonRadius);
  }, [showButton, buttonTextContent, buttonColor, buttonWidth, buttonHeight, buttonTextContentColor, buttonTextSize, buttonBorder, buttonRadius, buttonMargin, buttonPadding, buttonBgColor, buttonCursor, modaleSize, modaleBoxColor, bgAnimation, modaleAnimation, closeitembgColor, closeitemButtonsize, closeItemTextColor, textSize, textFamily, message, bgcontainercolor, bgcontaineropacity, modaleRadius, setActiveModale, closeItemFontColor, modaleOpacity, closeItemButtonRadius]);

  //close the modale
  function handleClose(e) {
    e.preventDefault();
    setActiveModale(false); //set the activeModale state to false
    onClose(true); //call the onClose function
  }
  if (!isValidateForm) {
    //not show the modale if view is inactive
    return null;
  }
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(StyledFullContainer, {
    id: "FullContainer"
  }, /*#__PURE__*/_react.default.createElement(StyledBGContainer, {
    id: "bgContainer",
    $bgcontainercolor: bgColor,
    $bgcontaineropacity: opa,
    $bganimation: bgAnim,
    onClick: handleClose
  }), /*#__PURE__*/_react.default.createElement(StyledModaleContainer, {
    id: "modaleContainer",
    $modalecontainerwidth: mdlSize,
    $modalecontainerheight: mdlSize,
    $modaleRadius: rad,
    $modalesize: mdlSize,
    $modaleboxcolor: mdlBoxColor,
    $modaleanimation: mdlAnim,
    $modaleOpacity: mdlOpacity
  }, /*#__PURE__*/_react.default.createElement(StyledModaleContent, {
    id: "modaleContent"
  }, /*#__PURE__*/_react.default.createElement(StyledModaleCloseButton, {
    id: "closeItem",
    onClick: handleClose,
    $closeitembgColor: itmBtnColor,
    $closeItembtncolor: itmColor,
    $closeitembuttonsize: itmBtnSize,
    $closeItembuttonradius: CloseItemRadius
  }, /*#__PURE__*/_react.default.createElement(StyledModaleClosebuttonTextContent, {
    id: "closeItemTextContent",
    $closeitembgColor: btnColor,
    $closeitembuttonsize: itmBtnSize,
    $closeItemFontColor: itmColor
  }, "\u2716")), /*#__PURE__*/_react.default.createElement(StyledModaleMessage, {
    id: "message",
    $closeItemTextcolor: txtColor,
    $textsize: txtSize,
    $textfamily: txtFamily
  }, msg), /*#__PURE__*/_react.default.createElement(StyledModaleBtn, {
    id: "button",
    onClick: btnOnClick ? btnOnClick && handleClose : handleClose //if btnOnClick is true then call btnOnClick and handleClose functions
    ,
    $btn: btn,
    $btnwidth: btnWidth,
    $btnheight: btnHeight,
    $btncontentcolor: btnContentColor,
    $btntextsize: btnTextSize,
    $btnborder: btnBorder,
    $btnradius: btnmodaleRadius,
    $btnmargin: btnMargin,
    $padding: btnPadding,
    $btnbgcolor: btnBgColor,
    $cursor: btnCursor
  }, btnContent, " ")))));
}
