var websiteName = 'OSS';

var file_formats = {
    application: ["app", "exe"],
    archive: ["gz", "zip", "7z", "7zip", "arj", "rar", "gzip", "bz2", "bzip2", "tar", "x-gzip"],
    cd: ["dmg", "iso", "bin", "cd", "cdr", "cue", "disc", "disk", "dsk", "dvd", "dvdr", "hdd", "hdi", "hds", "hfs", "hfv", "ima", "image", "imd", "img", "mdf", "mdx", "nrg", "omg", "toast", "cso", "mds"],
    code: ["cpp", "php", "x-php", "js", "css", "xml", "json", "html", "htm", "py", "jsx", "scss", "clj", "less", "rb", "sql", "ts", "yml"],
    excel: ["xls", "xlt", "xlm", "xlsx", "xlsm", "xltx", "xltm", "xlsb", "xla", "xlam", "xll", "xlw", "csv"],
    font: ["ttf", "otf", "woff", "woff2", "eot", "ttc"],
    open_in_new: ["url"],
    image: ["wbmp", "tiff", "webp", "psd", "ai", "eps", "jpg", "jpeg", "webp", "png", "gif", "bmp"],
    pdf: ["pdf"],
    powerpoint: ["ppt", "pot", "pps", "pptx", "pptm", "potx", "potm", "ppam", "ppsx", "ppsm", "sldx", "sldm"],
    text: ["epub", "rtf"],
    word: ["doc", "dot", "docx", "docm", "dotx", "dotm", "docb", "odt", "wbk"]
}

var svg_icons = {
    application: '<path d="M35 14C36.11 14 37 14.9 37 16V28A2 2 0 0 1 35 30H21C19.89 30 19 29.1 19 28V16A2 2 0 0 1 21 14H35M35 28V18H21V28H35z"/>',
    archive: '<path d="M28.5,24v-2h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h2V8h-2V6h-2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2 h-4v5c0,2.757,2.243,5,5,5s5-2.243,5-5v-5H28.5z M30.5,29c0,1.654-1.346,3-3,3s-3-1.346-3-3v-3h6V29z"/><path d="M26.5,30h2c0.552,0,1-0.447,1-1s-0.448-1-1-1h-2c-0.552,0-1,0.447-1,1S25.948,30,26.5,30z"/></g>',
    audio: '<path d="M35.67,14.986c-0.567-0.796-1.3-1.543-2.308-2.351c-3.914-3.131-4.757-6.277-4.862-6.738V5 c0-0.553-0.447-1-1-1s-1,0.447-1,1v1v8.359v9.053h-3.706c-3.882,0-6.294,1.961-6.294,5.117c0,3.466,2.24,5.706,5.706,5.706 c3.471,0,6.294-2.823,6.294-6.294V16.468l0.298,0.243c0.34,0.336,0.861,0.72,1.521,1.205c2.318,1.709,6.2,4.567,5.224,7.793 C35.514,25.807,35.5,25.904,35.5,26c0,0.43,0.278,0.826,0.71,0.957C36.307,26.986,36.404,27,36.5,27c0.43,0,0.826-0.278,0.957-0.71 C39.084,20.915,37.035,16.9,35.67,14.986z M26.5,27.941c0,2.368-1.926,4.294-4.294,4.294c-2.355,0-3.706-1.351-3.706-3.706 c0-2.576,2.335-3.117,4.294-3.117H26.5V27.941z M31.505,16.308c-0.571-0.422-1.065-0.785-1.371-1.081l-1.634-1.34v-3.473 c0.827,1.174,1.987,2.483,3.612,3.783c0.858,0.688,1.472,1.308,1.929,1.95c0.716,1.003,1.431,2.339,1.788,3.978 C34.502,18.515,32.745,17.221,31.505,16.308z"/>',
    cd: '<circle cx="27.5" cy="21" r="12"/><circle style="fill:#e9e9e0" cx="27.5" cy="21" r="3"/><path style="fill:#d3ccc9" d="M25.379,18.879c0.132-0.132,0.276-0.245,0.425-0.347l-2.361-8.813 c-1.615,0.579-3.134,1.503-4.427,2.796c-1.294,1.293-2.217,2.812-2.796,4.427l8.813,2.361 C25.134,19.155,25.247,19.011,25.379,18.879z"/><path style="fill:#d3ccc9" d="M30.071,23.486l2.273,8.483c1.32-0.582,2.56-1.402,3.641-2.484c1.253-1.253,2.16-2.717,2.743-4.275 l-8.188-2.194C30.255,22.939,29.994,23.2,30.071,23.486z"/>',
    code: '<path d="M15.5,24c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6-6 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6,6C16.012,23.902,15.756,24,15.5,24z"/><path d="M21.5,30c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0l6,6c0.391,0.391,0.391,1.023,0,1.414C22.012,29.902,21.756,30,21.5,30z"/><path d="M33.5,30c-0.256,0-0.512-0.098-0.707-0.293c-0.391-0.391-0.391-1.023,0-1.414l6-6 c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-6,6C34.012,29.902,33.756,30,33.5,30z"/><path d="M39.5,24c-0.256,0-0.512-0.098-0.707-0.293l-6-6c-0.391-0.391-0.391-1.023,0-1.414 s1.023-0.391,1.414,0l6,6c0.391,0.391,0.391,1.023,0,1.414C40.012,23.902,39.756,24,39.5,24z"/><path d="M24.5,32c-0.11,0-0.223-0.019-0.333-0.058c-0.521-0.184-0.794-0.755-0.61-1.276l6-17 c0.185-0.521,0.753-0.795,1.276-0.61c0.521,0.184,0.794,0.755,0.61,1.276l-6,17C25.298,31.744,24.912,32,24.5,32z"/>',
    open_in_new: '<path style="transform: translate(16px, 10px)" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />',
    font: '<path d="M33 18H36V30H37V31H33V30H34V27H30L28.5 30H30V31H26V30H27L33 18M34 19L30.5 26H34V19M21 13H26C27.11 13 28 13.89 28 15V26H25V21H22V26H19V15C19 13.89 19.89 13 21 13M22 15V19H25V15H22z"/>',
    excel: '<path style="fill:#c8bdb8" d="M23.5,16v-4h-12v4v2v2v2v2v2v2v2v4h10h2h21v-4v-2v-2v-2v-2v-2v-4H23.5z M13.5,14h8v2h-8V14z M13.5,18h8v2h-8V18z M13.5,22h8v2h-8V22z M13.5,26h8v2h-8V26z M21.5,32h-8v-2h8V32z M42.5,32h-19v-2h19V32z M42.5,28h-19v-2h19V28 z M42.5,24h-19v-2h19V24z M23.5,20v-2h19v2H23.5z"/>',
    image: '<circle style="fill:#f3d55b" cx="18.931" cy="14.431" r="4.569"/><polygon style="fill:#88c057" points="6.5,39 17.5,39 49.5,39 49.5,28 39.5,18.5 29,30 23.517,24.517"/>',
    pdf: '<path d="M19.514,33.324L19.514,33.324c-0.348,0-0.682-0.113-0.967-0.326 c-1.041-0.781-1.181-1.65-1.115-2.242c0.182-1.628,2.195-3.332,5.985-5.068c1.504-3.296,2.935-7.357,3.788-10.75 c-0.998-2.172-1.968-4.99-1.261-6.643c0.248-0.579,0.557-1.023,1.134-1.215c0.228-0.076,0.804-0.172,1.016-0.172 c0.504,0,0.947,0.649,1.261,1.049c0.295,0.376,0.964,1.173-0.373,6.802c1.348,2.784,3.258,5.62,5.088,7.562 c1.311-0.237,2.439-0.358,3.358-0.358c1.566,0,2.515,0.365,2.902,1.117c0.32,0.622,0.189,1.349-0.39,2.16 c-0.557,0.779-1.325,1.191-2.22,1.191c-1.216,0-2.632-0.768-4.211-2.285c-2.837,0.593-6.15,1.651-8.828,2.822 c-0.836,1.774-1.637,3.203-2.383,4.251C21.273,32.654,20.389,33.324,19.514,33.324z M22.176,28.198 c-2.137,1.201-3.008,2.188-3.071,2.744c-0.01,0.092-0.037,0.334,0.431,0.692C19.685,31.587,20.555,31.19,22.176,28.198z M35.813,23.756c0.815,0.627,1.014,0.944,1.547,0.944c0.234,0,0.901-0.01,1.21-0.441c0.149-0.209,0.207-0.343,0.23-0.415 c-0.123-0.065-0.286-0.197-1.175-0.197C37.12,23.648,36.485,23.67,35.813,23.756z M28.343,17.174 c-0.715,2.474-1.659,5.145-2.674,7.564c2.09-0.811,4.362-1.519,6.496-2.02C30.815,21.15,29.466,19.192,28.343,17.174z M27.736,8.712c-0.098,0.033-1.33,1.757,0.096,3.216C28.781,9.813,27.779,8.698,27.736,8.712z"/>',
    powerpoint: '<path style="fill:#c8bdb8" d="M39.5,30h-24V14h24V30z M17.5,28h20V16h-20V28z"/><path style="fill:#c8bdb8" d="M20.499,35c-0.175,0-0.353-0.046-0.514-0.143c-0.474-0.284-0.627-0.898-0.343-1.372l3-5 c0.284-0.474,0.898-0.627,1.372-0.343c0.474,0.284,0.627,0.898,0.343,1.372l-3,5C21.17,34.827,20.839,35,20.499,35z"/><path style="fill:#c8bdb8" d="M34.501,35c-0.34,0-0.671-0.173-0.858-0.485l-3-5c-0.284-0.474-0.131-1.088,0.343-1.372 c0.474-0.283,1.088-0.131,1.372,0.343l3,5c0.284,0.474,0.131,1.088-0.343,1.372C34.854,34.954,34.676,35,34.501,35z"/><path style="fill:#c8bdb8" d="M27.5,16c-0.552,0-1-0.447-1-1v-3c0-0.553,0.448-1,1-1s1,0.447,1,1v3C28.5,15.553,28.052,16,27.5,16 z"/><rect x="17.5" y="16" style="fill:#d3ccc9" width="20" height="12"/>',
    text: '<path d="M12.5,13h6c0.553,0,1-0.448,1-1s-0.447-1-1-1h-6c-0.553,0-1,0.448-1,1S11.947,13,12.5,13z"/><path d="M12.5,18h9c0.553,0,1-0.448,1-1s-0.447-1-1-1h-9c-0.553,0-1,0.448-1,1S11.947,18,12.5,18z"/><path d="M25.5,18c0.26,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71c0-0.26-0.11-0.52-0.29-0.71 c-0.38-0.37-1.04-0.37-1.42,0c-0.181,0.19-0.29,0.44-0.29,0.71s0.109,0.52,0.29,0.71C24.979,17.89,25.24,18,25.5,18z"/><path d="M29.5,18h8c0.553,0,1-0.448,1-1s-0.447-1-1-1h-8c-0.553,0-1,0.448-1,1S28.947,18,29.5,18z"/><path d="M11.79,31.29c-0.181,0.19-0.29,0.44-0.29,0.71s0.109,0.52,0.29,0.71 C11.979,32.89,12.229,33,12.5,33c0.27,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71c0-0.26-0.11-0.52-0.29-0.71 C12.84,30.92,12.16,30.92,11.79,31.29z"/><path d="M24.5,31h-8c-0.553,0-1,0.448-1,1s0.447,1,1,1h8c0.553,0,1-0.448,1-1S25.053,31,24.5,31z"/><path d="M41.5,18h2c0.553,0,1-0.448,1-1s-0.447-1-1-1h-2c-0.553,0-1,0.448-1,1S40.947,18,41.5,18z"/><path d="M12.5,23h22c0.553,0,1-0.448,1-1s-0.447-1-1-1h-22c-0.553,0-1,0.448-1,1S11.947,23,12.5,23z"/><path d="M43.5,21h-6c-0.553,0-1,0.448-1,1s0.447,1,1,1h6c0.553,0,1-0.448,1-1S44.053,21,43.5,21z"/><path d="M12.5,28h4c0.553,0,1-0.448,1-1s-0.447-1-1-1h-4c-0.553,0-1,0.448-1,1S11.947,28,12.5,28z"/><path d="M30.5,26h-10c-0.553,0-1,0.448-1,1s0.447,1,1,1h10c0.553,0,1-0.448,1-1S31.053,26,30.5,26z"/><path d="M43.5,26h-9c-0.553,0-1,0.448-1,1s0.447,1,1,1h9c0.553,0,1-0.448,1-1S44.053,26,43.5,26z"/>',
    video: '<path d="M24.5,28c-0.166,0-0.331-0.041-0.481-0.123C23.699,27.701,23.5,27.365,23.5,27V13 c0-0.365,0.199-0.701,0.519-0.877c0.321-0.175,0.71-0.162,1.019,0.033l11,7C36.325,19.34,36.5,19.658,36.5,20 s-0.175,0.66-0.463,0.844l-11,7C24.874,27.947,24.687,28,24.5,28z M25.5,14.821v10.357L33.637,20L25.5,14.821z"/><path d="M28.5,35c-8.271,0-15-6.729-15-15s6.729-15,15-15s15,6.729,15,15S36.771,35,28.5,35z M28.5,7 c-7.168,0-13,5.832-13,13s5.832,13,13,13s13-5.832,13-13S35.668,7,28.5,7z"/>'
}

var allowed_codemodes = {
  apl: [ 'dyalog', 'apl' ],
  asciiarmor: [ 'asc', 'pgp', 'sig' ],
  'asn.1': [ 'asn', 'asn1' ],
  brainfuck: [ 'b', 'bf' ],
  clike: ['c', 'h', 'ino', 'cpp',  'c++',   'cc', 'cxx',  'hpp',   'h++', 'hh',   'hxx',   'cs', 'java', 'kt',    'm', 'mm',   'scala', 'nut'],
  cobol: [ 'cob', 'cpy', 'cbl' ],
  clojure: [ 'clj', 'cljc', 'cljx', 'cljs', 'edn' ],
  css: [ 'gss', 'css', 'less', 'scss' ],
  cmake: [ 'cmake', 'cmake.in', 'make', 'makefile' ],
  coffeescript: [ 'coffee' ],
  commonlisp: [ 'cl', 'lisp', 'el' ],
  cypher: [ 'cyp', 'cypher' ],
  python: ['pyx', 'pxd','pxi', 'BUILD','bzl', 'py','pyw'],
  crystal: [ 'cr' ],
  sql: ['cql', 'sql'],
  d: [ 'd' ],
  dart: [ 'dart' ],
  diff: [ 'diff', 'patch' ],
  dtd: [ 'dtd' ],
  dylan: [ 'dylan', 'dyl', 'intr' ],
  ecl: [ 'ecl' ],
  eiffel: [ 'e' ],
  elm: [ 'elm' ],
  htmlembedded: [ 'ejs', 'erb', 'aspx', 'jsp' ],
  erlang: [ 'erl' ],
  factor: [ 'factor' ],
  forth: [ 'forth', 'fth', '4th' ],
  fortran: [ 'f', 'for', 'f77', 'f90', 'f95' ],
  mllike: ['fs', 'ml', 'mli', 'mll', 'mly', 'sml', 'sig', 'fun','smackspec'],
  gas: [ 's' ],
  gherkin: [ 'feature' ],
  go: [ 'go' ],
  groovy: [ 'groovy', 'gradle' ],
  haml: [ 'haml' ],
  haskell: [ 'hs' ],
  'haskell-literate': [ 'lhs' ],
  haxe: [ 'hx', 'hxml' ],
  htmlmixed: [ 'html', 'htm', 'handlebars', 'hbs' ],
  idl: [ 'pro' ],
  pug: [ 'jade', 'pug' ],
  javascript: [ 'js', 'json', 'map', 'jsonld', 'ts' ],
  jsx: [ 'jsx', 'tsx' ],
  jinja2: [ 'j2', 'jinja', 'jinja2' ],
  julia: [ 'jl' ],
  livescript: [ 'ls' ],
  lua: [ 'lua' ],
  markdown: [ 'markdown', 'md', 'mkd' ],
  mathematica: [ 'm', 'nb', 'wl', 'wls' ],
  modelica: [ 'mo' ],
  mumps: [ 'mps' ],
  mbox: [ 'mbox' ],
  nsis: [ 'nsh', 'nsi' ],
  ntriples: [ 'nt', 'nq' ],
  octave: [ 'm' ],
  oz: [ 'oz' ],
  pascal: [ 'p', 'pas' ],
  pegjs: [ 'jsonld' ],
  perl: [ 'pl', 'pm' ],
  php: [ 'php', 'php3', 'php4', 'php5', 'php7', 'phtml' ],
  pig: [ 'pig' ],
  powershell: [ 'ps1', 'psd1', 'psm1' ],
  properties: [ 'properties', 'ini', 'in' ],
  protobuf: [ 'proto' ],
  puppet: [ 'pp' ],
  q: [ 'q' ],
  r: [ 'r', 'R' ],
  rst: [ 'rst' ],
  rpm: [ 'spec' ],
  ruby: [ 'rb' ],
  rust: [ 'rs' ],
  sas: [ 'sas' ],
  sass: [ 'sass' ],
  scheme: [ 'scm', 'ss', 'txt', 'text', 'conf', 'def', 'list', 'log' ],
  shell: [ 'sh', 'ksh', 'bash' ],
  sieve: [ 'siv', 'sieve' ],
  slim: [ 'slim' ],
  smalltalk: [ 'st' ],
  smarty: [ 'tpl' ],
  soy: [ 'soy' ],
  sparql: [ 'rq', 'sparql' ],
  stylus: [ 'styl' ],
  swift: [ 'swift' ],
  stex: [ 'text', 'ltx', 'tex' ],
  verilog: [ 'v', 'sv', 'svh', 'v' ],
  tcl: [ 'tcl' ],
  textile: [ 'textile' ],
  toml: [ 'toml' ],
  ttcn: [ 'ttcn', 'ttcn3', 'ttcnpp' ],
  'ttcn-cfg': [ 'cfg' ],
  turtle: [ 'ttl' ],
  webidl: [ 'webidl' ],
  vb: [ 'vb' ],
  vbscript: [ 'vbs' ],
  velocity: [ 'vtl' ],
  vhdl: [ 'vhd', 'vhdl' ],
  vue: [ 'vue' ],
  xml: [ 'xml', 'xsl', 'xsd', 'svg' ],
  xquery: [ 'xy', 'xquery' ],
  yacas: [ 'ys' ],
  yaml: [ 'yaml', 'yml' ],
  z80: [ 'z80' ],
  mscgen: [ 'mscgen', 'mscin', 'msc', 'xu', 'msgenny' ],
  wast: [ 'wat', 'wast' ]
}

function M(e, t) {
    for (var i = e.length, a = 0; a < i; a++)
        t(e[a], a);
}

file_format_icons = {};
M(Object.keys(file_formats), (function(e) {
    M(file_formats[e], (function(t) {
        file_format_icons[t] = e;
    }));
}));

codemodes = {};
M(Object.keys(allowed_codemodes), (function(e) {
    M(allowed_codemodes[e], (function(t) {
        codemodes[t] = e;
    }));
}));

$(document).ready(function(){
    var text = $("h1").text();
    var array = text.split('/');
    var last = array[array.length-2];
    var dirStructure = $("a").text();
    var dirStructure = document.getElementsByTagName('a')[0].href;
    var dir = text.substring(10);
    var currentDir = last.charAt(0).toUpperCase() + last.slice(1);
    var dirTrun;

    if (currentDir.length > 19){
        var currentDir = currentDir.substring(0, 18) + '...';
    }

    array.shift();
    document.title = websiteName + ": /" + array.join('/');

    $("h1").html('<p><svg height="35" viewBox="0 0 409.14 161.17" fill="none"><title>Uzinfocom Open Source</title><path fill="currentColor" d="M290.4 72.68l-1.86 0 0 -12.1 -3.45 9.11c-0.76,1.81 -3.21,1.53 -3.73,0l-3.5 -8.53 0.01 3.26 0 4.86 0 0.1 0 0.1 0 0.1 0 0.03 0 1.61c-0.01,0.96 -0.51,1.42 -1.46,1.46l-1.57 0 0 -2.53 0 -10.94 0 -0.04 0 -0.03 0 0 0 -0.04 0.01 -0.03 0 -0.03 0.01 -0.04 0 -0.03 0.01 -0.04 0.01 -0.03 0.01 -0.03 0 0 0.01 -0.04 0.01 -0.03 0.01 -0.03 0.02 -0.03 0.01 -0.04 0.02 -0.03 0.01 -0.03 0.02 -0.03 0.01 -0.04 0.02 -0.03 0.02 -0.03 0.02 -0.03 0.02 -0.03 0.02 -0.03 0 0 0.02 -0.03 0.02 -0.03 0.03 -0.02 0.02 -0.03 0.02 -0.03 0.03 -0.03 0.02 -0.02 0.03 -0.03 0.02 -0.02 0.03 -0.03 0.03 -0.02 0.02 -0.03 0.03 -0.02 0.03 -0.02 0.03 -0.02 0.03 -0.03 0.03 -0.02 0.03 -0.02 0.03 -0.02 0.03 -0.01 0.03 -0.02 0.03 -0.02 0.03 -0.02 0.04 -0.01 0.03 -0.01 0.03 -0.02 0.03 -0.01 0 0 0.04 -0.01 0.03 -0.01 0 0 0.03 -0.01 0.04 -0.01 0.03 -0.01 0.03 -0.01 0 0 0.04 -0.01 0 0 0.03 0 0.04 -0.01 0.03 0 0.03 0 0.04 -0.01 0.03 0 0.36 0 3.11 0 3.56 9.53 3.45 -8.72c0.27,-0.54 0.7,-0.81 1.31,-0.81l2.32 0 1.45 0 0 13.48c0,1 -0.4,1.46 -1.46,1.46zm-25.42 0.26c-2.14,0 -3.89,-0.7 -5.23,-2.09 -1.35,-1.39 -2.02,-3.2 -2.02,-5.44 0,-2.36 0.68,-4.27 2.05,-5.73 1.37,-1.46 3.18,-2.19 5.43,-2.19 2.14,0 3.86,0.7 5.18,2.1 1.31,1.39 1.97,3.23 1.97,5.52 0,2.34 -0.68,4.24 -2.05,5.68 -1.36,1.43 -3.14,2.15 -5.33,2.15zm0.14 -12.55c-1.18,0 -2.12,0.44 -2.81,1.33 -0.69,0.88 -1.04,2.05 -1.04,3.51 0,1.48 0.35,2.65 1.04,3.52 0.69,0.86 1.6,1.29 2.73,1.29 1.16,0 2.08,-0.42 2.76,-1.26 0.68,-0.84 1.02,-2 1.02,-3.48 0,-1.55 -0.33,-2.76 -0.99,-3.62 -0.66,-0.86 -1.56,-1.29 -2.71,-1.29zm-9.61 12.07c-0.99,0.33 -2.04,0.48 -3.46,0.48 -2.29,0 -4.09,-0.67 -5.41,-2.02 -1.31,-1.35 -1.97,-3.14 -1.97,-5.39 0,-2.38 0.74,-4.32 2.22,-5.81 1.47,-1.49 3.39,-2.23 5.74,-2.23 0.89,0 1.5,0.06 2.14,0.17 0.88,0.15 1.53,0.45 1.55,1.52l0 0.87c-0.09,0.9 -0.84,0.81 -1.25,0.69 -0.68,-0.21 -1.39,-0.35 -2.17,-0.35 -1.4,0 -2.53,0.44 -3.39,1.32 -0.86,0.88 -1.29,2.08 -1.29,3.59 0,1.44 0.4,2.59 1.21,3.45 0.82,0.86 1.91,1.29 3.29,1.29 0.93,0 1.53,-0.24 2.39,-0.43 0.5,-0.12 1.21,0.11 1.21,0.66l0 0.78c-0.03,0.88 -0.3,1.24 -0.81,1.41zm-19.76 0.48c-2.14,0 -3.89,-0.7 -5.23,-2.09 -1.35,-1.39 -2.02,-3.2 -2.02,-5.44 0,-2.36 0.68,-4.27 2.05,-5.73 1.37,-1.46 3.18,-2.19 5.43,-2.19 2.14,0 3.86,0.7 5.18,2.1 1.31,1.39 1.97,3.23 1.97,5.52 0,2.34 -0.68,4.24 -2.05,5.68 -1.36,1.43 -3.14,2.15 -5.33,2.15zm0.14 -12.55c-1.18,0 -2.12,0.44 -2.81,1.33 -0.69,0.88 -1.04,2.05 -1.04,3.51 0,1.48 0.35,2.65 1.04,3.52 0.69,0.86 1.6,1.29 2.73,1.29 1.16,0 2.08,-0.42 2.76,-1.26 0.68,-0.84 1.02,-2 1.02,-3.48 0,-1.55 -0.33,-2.76 -0.99,-3.62 -0.66,-0.86 -1.56,-1.29 -2.71,-1.29zm-8.92 0.09l-5.27 0 0 3.67 3.38 0c0.74,0 1.47,0.73 1.47,1.46l0 1.27 -4.85 0 0 5.8 -1.9 0c-0.73,0 -1.46,-0.73 -1.46,-1.46l0 -13.48 7.17 0c0.73,0 1.46,0.74 1.46,1.47l0 1.27zm-13.86 12.21c-0.55,-0.01 -1.31,0.12 -2.16,-0.88l-5.58 -8.52c-0.36,-0.54 -0.61,-0.96 -0.75,-1.23l-0.04 0c0.05,0.52 0.08,1.33 0.08,2.41l0 7.07c0,0.52 -0.36,1.14 -0.85,1.14l-0.86 0 -1.47 0 0 -1.46 0 -0.88 0 -11.13c0.15,-1.12 1.27,-1.49 2.01,-1.47 0.81,-0.02 1.5,0.08 2.19,0.87l5.36 8.23c0.27,0.41 0.52,0.81 0.75,1.22l0.04 0c-0.06,-0.35 -0.08,-1.04 -0.08,-2.06l0 -6.8c0,-0.72 0.73,-1.46 1.46,-1.46l1.71 0 0 1.47 0 9.27 0 2.74c-0.04,1.09 -1.12,1.48 -1.81,1.47zm-16.48 -0.01l-1.91 0c0,-4.49 0,-8.98 0,-13.47 0,-0.73 0.74,-1.47 1.47,-1.47l1.9 0 0 13.48c0,0.73 -0.73,1.46 -1.46,1.46zm-5.55 0l-9.12 0c-1.31,0 -1.86,-1.51 -0.99,-2.57l7.18 -9.63 -7.1 0 0 -1.27c0,-0.73 0.73,-1.47 1.47,-1.47l8.31 0 1.68 0c0.05,1.13 -0.18,2.12 -0.76,2.93l-6.73 9.28 7.51 0 0 1.27c0,0.73 -0.73,1.46 -1.45,1.46zm-12.55 -6.47c0,4.49 -2.09,6.73 -6.27,6.73 -4.06,0 -6.09,-2.19 -6.09,-6.57l0.01 -7.16c0,-0.73 0.41,-1.47 1.46,-1.47l1.91 0 0 8.67c0,2.42 0.94,3.63 2.83,3.63 1.85,0 2.78,-1.17 2.78,-3.51l0 -7.32c0,-0.73 0.75,-1.47 1.46,-1.47l1.91 0 0 8.47z"></path><path fill="currentColor" d="M76.73 18.06c23.65,0 44.54,11.78 57.14,29.79 6.53,-9.09 11.21,-16.89 13.19,-22.39 1.85,-3.72 6.37,-5.24 10.09,-3.39 3.72,1.85 5.24,6.36 3.39,10.08 -17.41,32.96 -45.71,59.76 -74.3,83.56 -13.73,11.43 -55.62,43.9 -76.35,45.41 -3.56,0.26 -6.09,-0.5 -7.68,-2.06 -1.8,-1.77 -2.47,-4.57 -2.12,-8.16 0.64,-6.71 5.04,-15.73 12.21,-25.16 0.86,-1.14 1.79,-1.12 2.06,0.04 0.28,1.17 -0.2,3.04 -1.07,4.18 -5.94,7.82 -9.53,14.71 -9.96,19.2 -0.17,1.82 0.25,3.32 1.33,4.39 1.3,1.27 3.47,1.88 6.6,1.65 6.72,-0.49 15.4,-4.4 25.13,-10.62 -18.35,-13.05 -29.35,-34.34 -29.35,-56.83l0 -0.01c9.48,14.22 20.85,27.68 32.6,40 -6.94,-9.26 -39.67,-54.19 -24.73,-68.82 7.43,-7.27 24.9,-3.77 47.35,7.81 -8.82,6.75 -18.05,14.66 -27.35,23.53 9.54,-7.15 54.27,-39.58 68.81,-24.73 3.16,3.23 4.29,8.34 3.61,14.93 7.05,-7.88 13.58,-15.66 19.26,-22.92 0.64,-5.99 -0.41,-10.61 -3.38,-13.46 -8.64,-8.3 -31.38,0.55 -58.36,20.69 -14.62,-10.61 -28.38,-18.68 -40,-23.56 12.76,-14.21 31.28,-23.15 51.88,-23.15zm8.5 85.64c0.61,-0.61 1.22,-1.22 1.83,-1.83 -4.53,-5.37 -9.43,-10.84 -14.67,-16.34 2.6,3.48 7.7,10.17 12.84,18.17zm58.81 -34.06c1.55,5.77 2.38,11.84 2.38,18.11 0,3.21 -0.22,6.37 -0.64,9.46l-0.01 0.06 -0.03 0.25 -0.03 0.22 0 0.02 -0.04 0.25 -0.11 0.73 -0.01 0.04 -0.03 0.21 -0.04 0.24 -0.01 0.07 -0.03 0.17 -0.04 0.25 -0.02 0.1 -0.03 0.14 -0.04 0.24 -0.13 0.73 -0.05 0.24c-1.75,8.95 -5.22,17.28 -10.06,24.63l0.05 0c-4.97,7.62 -11.4,14.2 -18.88,19.36 -3.98,-8.6 -10.03,-18.44 -17.82,-28.95 14.95,-13.25 31.33,-29.6 45.62,-46.57zm-49.71 50.14c2.93,6.14 5.15,12.33 5.86,17.95 2.78,22.2 -31.09,23.39 -50.07,15.14 16.01,-10.23 31.56,-22.48 38.96,-28.63 1.72,-1.43 3.47,-2.92 5.25,-4.46z"></path><polygon fill="currentColor" points="162.18,0 165.03,2.72 168.96,2.81 169.06,6.75 171.77,9.6 169.06,12.45 168.96,16.38 165.03,16.48 162.18,19.19 159.33,16.48 155.39,16.38 155.3,12.45 152.58,9.6 155.3,6.75 155.39,2.81 159.33,2.72 "></polygon><path fill="currentColor" d="M186.66 95.4l0 -4.34c0,-7.87 -4.1,-12.57 -10.9,-12.57 -6.78,0 -10.88,4.7 -10.88,12.57l0 4.34c0,7.87 4.1,12.56 10.88,12.56 6.8,0 10.9,-4.69 10.9,-12.56zm-10.9 7.61c-3.41,0 -5.22,-2.57 -5.22,-7.67l0 -4.22c0,-5.1 1.81,-7.67 5.22,-7.67 3.42,0 5.23,2.57 5.23,7.67l0 4.22c0,5.1 -1.81,7.67 -5.23,7.67zm27.27 -17.6c-3.16,0 -5.3,1.45 -6.06,4.06l-0.42 0 0 -3.73 -5.51 0 0 28.85 5.59 0 0 -10.87 0.39 0c0.73,2.59 2.89,4.04 6.01,4.04 4.96,0 7.89,-3.41 7.89,-9.32l0 -3.73c0,-5.89 -2.93,-9.3 -7.89,-9.3zm-2.07 4.67c2.77,0 4.48,1.82 4.48,4.79l0 3.59c0,2.96 -1.71,4.79 -4.48,4.79 -2.78,0 -4.47,-1.81 -4.47,-4.79l0 -3.59c0,-2.98 1.69,-4.79 4.47,-4.79zm29.19 11.22c-0.39,1.42 -2.1,2.4 -4.26,2.4 -2.81,0 -4.63,-1.85 -4.63,-4.67l0 -1.18 13.96 0 0 -2.98c0,-5.81 -3.67,-9.58 -9.41,-9.58 -5.89,0 -9.81,3.75 -9.81,9.42l0 3.47c0,6.15 3.61,9.68 9.91,9.68 5.03,0 8.85,-2.73 9.31,-6.56l-5.07 0zm-4.43 -11.85c2.7,0 4.31,1.87 4.31,4.96l-8.77 0c0,-3.09 1.67,-4.96 4.46,-4.96zm14.95 17.94l5.36 0 0 -12.5c0,-3 1.78,-4.91 4.53,-4.91 2.73,0 4,1.51 4,4.69l0 12.72 5.38 0 0 -14c0,-5.28 -2.51,-8.1 -7.22,-8.1 -3.12,0 -5.46,1.47 -6.52,4.08l-0.33 0 0 -3.63 -5.2 0 0 21.65zm23.92 -7.93c0.2,5.29 4.22,8.5 10.64,8.5 6.62,0 10.62,-3.38 10.62,-8.97 0,-4.34 -2.39,-6.8 -7.87,-8.01l-2.9 -0.67c-3.07,-0.66 -4.33,-1.77 -4.33,-3.76 0,-2.13 1.75,-3.44 4.56,-3.44 2.77,0 4.55,1.43 4.77,3.77l5.26 0c-0.18,-5.06 -4.16,-8.39 -10.09,-8.39 -6.12,0 -10.03,3.36 -10.03,8.65 0,4.2 2.51,6.9 7.64,8.06l2.94 0.69c3.27,0.73 4.53,1.74 4.53,3.67 0,2.29 -1.94,3.77 -5,3.77 -3.22,0 -5.22,-1.42 -5.48,-3.87l-5.26 0zm35.41 8.4c6.1,0 9.95,-3.71 9.95,-9.62l0 -3.33c0,-5.91 -3.85,-9.62 -9.95,-9.62 -6.11,0 -9.95,3.71 -9.95,9.62l0 3.33c0,5.91 3.84,9.62 9.95,9.62zm0 -18.18c2.88,0 4.67,2.09 4.67,5.44l0 2.91c0,3.33 -1.79,5.43 -4.67,5.43 -2.89,0 -4.67,-2.1 -4.67,-5.43l0 -2.91c0,-3.35 1.78,-5.44 4.67,-5.44zm34.48 -3.94l-5.36 0 0 12.52c0,2.98 -1.78,4.89 -4.53,4.89 -2.73,0 -4,-1.51 -4,-4.69l0 -12.72 -5.38 0 0 14.01c0,5.28 2.51,8.11 7.22,8.11 3.12,0 5.46,-1.49 6.52,-4.1l0.33 0 0 3.63 5.2 0 0 -21.65zm14.8 12.05c0,-4.65 2.49,-6.97 7.6,-6.97 1.21,0 2.62,0.26 3.61,0.63l0 -5.83c-0.77,-0.29 -1.87,-0.45 -3.08,-0.45 -4.09,0 -6.31,1.83 -7.25,6.13l-0.84 0 0 -5.56 -9.69 0 0 3.96 4.5 0 0 13.74 -4.12 0 0 3.95 15.55 0 0 -3.95 -6.28 0 0 -5.65zm35.05 -4.5c-0.51,-5.3 -3.77,-8.08 -9.36,-8.08 -6.38,0 -9.91,3.61 -9.91,10.19l0 2.27c0,6.58 3.53,10.19 9.91,10.19 5.59,0 8.89,-2.75 9.36,-7.91l-5.26 0c-0.37,2.31 -1.78,3.43 -4.14,3.43 -2.89,0 -4.48,-2.16 -4.48,-6.12l0 -1.46c0,-3.95 1.59,-6.12 4.48,-6.12 2.34,0 3.79,1.18 4.14,3.61l5.26 0zm19.75 8.01c-0.4,1.42 -2.11,2.4 -4.26,2.4 -2.81,0 -4.63,-1.85 -4.63,-4.67l0 -1.18 13.95 0 0 -2.98c0,-5.81 -3.67,-9.58 -9.4,-9.58 -5.89,0 -9.82,3.75 -9.82,9.42l0 3.47c0,6.15 3.61,9.68 9.92,9.68 5.02,0 8.85,-2.73 9.3,-6.56l-5.06 0zm-4.44 -11.85c2.71,0 4.32,1.87 4.32,4.96l-8.77 0c0,-3.09 1.67,-4.96 4.45,-4.96z"></path></svg></p>');
    if (dir.length > 90) {
        dirTrun = dir.replace(/(.{90})/g, "$1\n")
    }else if( dir.length == 0 ){
        dirTrun = '/';
    }else {
        dirTrun = dir.substring(0, dir.length - 1);
    }

    $("h1").append('<h4><a href="' + dirStructure + '"></a><b>Joriy katalog: </b>' + dirTrun.slice(0) + '</h4>');

    $("h1").prepend('<form id="custom-search-form" class="form-inline pull-right"><div class="btn-group"><button id="darkmode" type="button"><span class="glyphicon glyphicon-eye-open""></span></button> <input id="searchBox" placeholder="Sahifadan izlash" type="search" class="form-control"> <span id="searchclear" class="glyphicon glyphicon-remove-circle"></span></div></form>');

    $("pre").prepend('<div class="header">Nomi                                                So\'ngi o\'zgartirish             Oʻlcham</div>');

    var list = new Array();
    
    $('#custom-search-form').on('input',function(e){
        e.preventDefault();
        var target = $('#searchBox').val();
        filter(target);
    });

    if ( localStorage.hasOwnProperty("darkmode") ) {
        if ( localStorage.getItem("darkmode") == 'enabled' ){
            $('head').append('<link rel="stylesheet" href="/.html/css/darkmode.css" />');
        }
    }

    $(document).on("click","#darkmode",function(e) {
        var mode;

        if ( localStorage.hasOwnProperty("darkmode") ) {
            mode = ( localStorage.getItem("darkmode") == 'enabled' ) ? false : true;
        }else{
            mode = true;
        }

        if ( mode ) {
            localStorage.setItem("darkmode", "enabled");
            $('head').append('<link rel="stylesheet" href="/.html/css/darkmode.css" />');
        }else{
            localStorage.setItem("darkmode", "disabled");
            $('link[href="/.html/css/darkmode.css"]').remove();
        }

        e.preventDefault();
    });

    

    function filter(target){
        var parent_directory = '..';
        $('pre a').each(function(){
            var arraySearch = $(this).attr('href');
            var arraySearch = decodeURIComponent( arraySearch )
            if (arraySearch.toLowerCase().indexOf(target.toLowerCase()) > -1 || (($(this).text() == '..') && (parent_directory.indexOf(target.toLowerCase()) > -1))){
                $(this).show();
                $($(this)[0].nextSibling).css('display', 'inline');
            }else {
                $(this).hide();
                if($($(this)[0].nextSibling).hasClass('hideMe')) {
                    $($(this)[0].nextSibling).css('display', 'none');
                } else {
                    $($(this)[0].nextSibling).wrap('<span class="hideMe" style="display:none"></style>');
                }
            }
        });
    }

    $("#searchclear").click(function(){
        $("#searchBox").val('');
        filter('');
    });

    $(document).on("click","[codemirror]",function(e) {
        var file = $(this).attr('codemirror');
        var arraySplit = file.split(".");
        var fileExt = arraySplit[arraySplit.length - 1].toLowerCase();
        
        var codemode = codemodes.hasOwnProperty( fileExt ) ? codemodes[fileExt] : 'scheme';
        
        $("#codemode").remove();
        $('<script id="codemode" src="/.html/js/mode/'+codemode+'/'+codemode+'.js?v=1.1"></script>').appendTo(document.head);

        fetch(file)
            .then(response => response.text())
            .then((data) => {
                $('#codeModal .modal-body').html('');
                var editor = CodeMirror($('#codeModal .modal-body')[0], {
                    value: data,
                    lineWrapping: true,
                    autoRefresh:true,
                    lineNumbers: true,
                    indentWithTabs: true,
                    readOnly: true,
                    mode: codemode
                });

                setTimeout(function() {
                    editor.refresh();
                    const field = document.querySelector('div.CodeMirror.CodeMirror-wrap');

                    field.addEventListener('click', event => {
                      event.preventDefault();
                    });

                    field.addEventListener('textarearesize', event => {
                      const { contentRect } = event.detail;
                      const { width, height } = contentRect;

                      if ( ( Math.floor(width) + Math.floor(height) ) > 0 ) {
                        localStorage.setItem('codeModal', JSON.stringify({
                            width: Math.floor(width),
                            height: Math.floor(height)
                        }));
                      }
                      
                    });

                    const onResizeCallback = (() => {
                      let initial = true;
                      let timeout;
                      return entries => {
                        if (initial) {
                          initial = false;
                          return;
                        }
                        clearTimeout(timeout)
                        timeout = setTimeout(() => {
                          for (const entry of entries) {
                            const event = new CustomEvent('textarearesize', {
                              detail: entry
                            });
                            entry.target.dispatchEvent(event);
                          }
                        }, 200);
                      }
                    })()

                    const observer = new ResizeObserver(onResizeCallback);

                    observer.observe(field);

                },10);

                $('#codeModalLabel').text(file);

                if (localStorage.hasOwnProperty("codeModal")) {
                    let opt = JSON.parse( localStorage.getItem("codeModal") );
                    $('div.CodeMirror.CodeMirror-wrap').height( opt.height );
                    $('div.CodeMirror.CodeMirror-wrap').width( opt.width );
                }

                $('#codeModal').modal('show');
            });
        e.preventDefault();
    });
    $('pre a').each(function(){
        var found = 0;
        var url = $(this).attr('href');
        
        var arraySplit = url.split(".");
        var fileExt = arraySplit[arraySplit.length - 1].toLowerCase();
        
        if (url.toLowerCase() == 'readme') {
            fileExt = 'txt';
        }
        
        var edit_attr = "";
        if ( codemodes.hasOwnProperty( fileExt ) ) {
            edit_attr = ' codemirror="'+url+'"'
        }

        if ( file_format_icons.hasOwnProperty( fileExt ) ) {
            found = 1;
            var oldText = $(this).text();
            let f_icon = file_format_icons[fileExt];

            $(this).html('<svg height="16px" viewBox="0 0 56 56" class="svg-file svg-'+f_icon+' modal-svg"><path class="svg-file-bg" d="M36.985,0H7.963C7.155,0,6.5,0.655,6.5,1.926V55c0,0.345,0.655,1,1.463,1h40.074 c0.808,0,1.463-0.655,1.463-1V12.978c0-0.696-0.093-0.92-0.257-1.085L37.607,0.257C37.442,0.093,37.218,0,36.985,0z"></path><polygon class="svg-file-flip" points="37.5,0.151 37.5,12 49.349,12"></polygon><g class="svg-file-icon">'+svg_icons[f_icon]+'<path d="M26.5,30h2c0.552,0,1-0.447,1-1s-0.448-1-1-1h-2c-0.552,0-1,0.447-1,1S25.948,30,26.5,30z"></path></g><path class="svg-file-text-bg" d="M48.037,56H7.963C7.155,56,6.5,55.345,6.5,54.537V39h43v15.537C49.5,55.345,48.845,56,48.037,56z"></path><text class="svg-file-ext" x="28" y="51.5">'+fileExt.toLowerCase()+'</text></svg> </a>' + '<span'+edit_attr+'>'+oldText+'</span>');
        }

        if ($(this).text().indexOf("Yuqori katalog") >= 0) {
            var found = 1;
            var oldText = $(this).text();
            $(this).html('<svg height="16px" viewBox="0 0 24 24" class="svg-icon svg-file_default"><path class="svg-path-file_default" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg>' + '<span>'+oldText+'</span>');
            return;
        }

        if ($(this).attr('href').substr($(this).attr('href').length - 1) == '/') {
            var found = 1;
            var oldText = $(this).text();
            $(this).html('<svg height="16px" viewBox="0 0 48 48" class="svg-folder files-svg"><path class="svg-folder-bg" d="M40 12H22l-4-4H8c-2.2 0-4 1.8-4 4v8h40v-4c0-2.2-1.8-4-4-4z"></path><path class="svg-folder-fg" d="M40 12H8c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4z"></path></svg>' + '<span>'+oldText.substring(0, oldText.length - 1)+'</span>');

            var string = ' ' + $($(this)[0].nextSibling).text();

            $($(this)[0].nextSibling).remove();
            $(this).after(string);
            return;
        }

        if (found == 0){
            var oldText = $(this).text();
            $(this).html('<svg height="16px" viewBox="0 0 24 24" class="svg-icon svg-file_default"><path class="svg-path-file_default" d="M14,10H19.5L14,4.5V10M5,3H15L21,9V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,5V19H19V12H12V5H5Z" /></svg> ' + '<span'+edit_attr+'>'+oldText+'</span>');
            return;
        }
    });
});