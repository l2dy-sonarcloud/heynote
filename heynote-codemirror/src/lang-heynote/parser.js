// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser} from "@lezer/lr"
import {noteContent} from "./external-tokens.js"
export const parser = LRParser.deserialize({
  version: 14,
  states: "!^QQOPOOOVOPO'#C`O[OQO'#C_OOOO'#Cb'#CbQQOPOOOaOPO,58zOOOO,58y,58yOOOO-E6`-E6`OfOPO1G.fOOOQ7+$Q7+$Q",
  stateData: "k~OWPO~OXTO~OPUO~OTWO~OWXO~O",
  goto: "fVPPPW[P`TROSTQOSQSORVS",
  nodeNames: "⚠ NoteContent Document Note NoteDelimiter NoteLanguage",
  maxTerm: 9,
  skippedNodes: [0],
  repeatNodeCount: 1,
  tokenData: "&e~RXYZn#[#]s#^#_![#`#a#u#a#b$_#d#e%T#g#h%p#h#i%v%&x%&y&S~sOW~~vP#h#iy~|P#a#b!P~!SP#`#a!V~![OT~~!_Q#T#U!e#g#h#i~!hP#j#k!k~!nP#T#U!q~!vPT~#g#h!y~!|P#V#W#P~#SP#f#g#V~#YP#]#^#]~#`P#d#e#c~#fP#h#i!V~#lP#c#d#o~#rP#b#c!V~#xP#X#Y#{~$OP#n#o$R~$UP#X#Y$X~$[P#f#g!V~$bP#T#U$e~$hP#f#g$k~$nP#_#`$q~$tP#W#X$w~$zP#c#d$}~%QP#k#l#o~%WQ#[#]%^#m#n%d~%aP#d#e!V~%gP#h#i%j~%mP#[#]#i~%sP#e#f!P~%yP#X#Y%|~&PP#l#m#c~&VP%&x%&y&Y~&]P%&x%&y&`~&eOX~",
  tokenizers: [0, noteContent],
  topRules: {"Document":[0,2]},
  tokenPrec: 0
})
