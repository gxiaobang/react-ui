webpackJsonp([15],{603:function(e,t,n){"use strict";function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),o=n(1),c=function(e){return e&&e.__esModule?e:{default:e}}(o),f=n(9),i=f.Form.FormItem,m=f.Form.FormItemGroup,d=f.Select.Option,p=function(e){function t(){return l(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return c.default.createElement("div",{className:"page"},c.default.createElement("h3",null,this.props.data.title,"组件"),c.default.createElement(f.Form,{onSubmit:function(e){console.log("表单参数：",e),f.Message.warn("保存成功")},layout:"inline"},c.default.createElement(i,{label:"用户名"},c.default.createElement(f.Input,{placeholder:"请输入用户名",name:"user",rules:"required"})),c.default.createElement(i,null,c.default.createElement(f.Select,null,c.default.createElement(d,null,"请选择"))),c.default.createElement(i,null,c.default.createElement(f.Select,{http:{mock:!0,url:"/select"},keys:["code","name"],name:"item2"},c.default.createElement(d,null,"请选择"))),c.default.createElement(i,null,c.default.createElement(f.Checkbox,{name:"checkbox"},"多选框")),c.default.createElement(i,null,c.default.createElement(f.Radio,{name:"radio"},"单选框")),c.default.createElement(m,null,c.default.createElement(i,null,c.default.createElement(f.ImgUpload,null))),c.default.createElement(m,null,c.default.createElement(i,null,c.default.createElement(f.Button,{submit:!0,type:"primary"},"保存")))))}}]),t}(c.default.Component);t.default=p}});