var jsxProcess = (function() {
  var hashConstr = s => s.replace(/(^|[^0-9a-zA-Z_$])#([a-zA-Z_$][0-9a-zA-Z_$]*)(?=[^"]*(?:"[^"]*"[^"]*)*$)/g, "$1$2.constructor");
  var hashProto = s => s.replace(/([A-Za-z_$][0-9A-Za-z_$]*)#(?=[a-zA-Z_$][0-9a-zA-Z_$]*[^"]*(?:"[^"]*"[^"]*)*$)/g, "$1.prototype.");
  var atThisProp = s => s.replace(/@(?=[a-zA-Z_$][0-9a-zA-Z_$]*[^"]*(?:"[^"]*"[^"]*)*$)/g, "this.");
  var atThis = s => s.replace(/@(?=[^"]*(?:"[^"]*"[^"]*)*$)/g, "this");
  var dColonBind = s => s.replace(/([\w$(){}[\]'"]+)::([\w$(){}[\]'"]+)(?=[^"]*(?:"[^"]*"[^"]*)*$)/g, "$1.bind($2)");
  var dotEquals = s => s.replace(, "$1 = $1.$2");
  return s => dotEquals(dColonbind(atThis(atThisProp(hashProto(hashConstr(s))))));
})();
plugins.add({
  header: "jsx",
  function: s => `<script src="data:text/javascript;base64,${btoa(jsxProcess(s))}"></script>`
});
