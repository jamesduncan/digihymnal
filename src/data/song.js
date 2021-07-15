import DB from "./DB";

import SAMPLE_1 from "../../js/1.ཀྱེ། དཀོན་མཆོག.js";
import SAMPLE_2 from "../../js/2.ཀྱེ། མི་རིགས་ཀུན། .js";
import SAMPLE_3 from "../../js/3.དཀོན་མཆོག་བཀའ་དྲིན་ཆེན་པོ།.js";
import SAMPLE_4 from "../../js/4.དཀོན་མཆོག་གི་དྲུང་དུ་ལོག.js";
import SAMPLE_5 from "../../js/4.མིག་རྒྱང་རིང་མོས།.js";
import SAMPLE_6 from "../../js/5.དཀོན་མཆོག་གིས་ཉིད་ཀྱི་སྲས་གནང་།.js";
import SAMPLE_7 from "../../js/6.དཀོན་མཆོག་ལ་དགའ་བར་ཤོག.js";
import SAMPLE_8 from "../../js/7.དཀོན་མཆོག་ཡ་དཀོན་མཆོག.js";
import SAMPLE_9 from "../../js/8.སྐྱབས་མགོན་གཙོ་བོ་ཡེ་ཤུ། ༡.js";
import SAMPLE_10 from "../../js/9.སྐྱབས་མགོན་གཙོ་བོ་ཡེ་ཤུ། ༢.js";
import SAMPLE_11 from "../../js/10.སྐྱིད་གླུ་ལོངས་ཤིག.js";
import SAMPLE_12 from "../../js/11.ཁོང་གཙོ་བོ་ལགས།.js";
import SAMPLE_13 from "../../js/12.ཁྱེད་ཀྱིས་གནང་བའི་ཉིན་བཟང་འདི་ལ།.js";
import SAMPLE_14 from "../../js/13.ཁྱེད་ནི་རྒུན་ཤིང་བདེན་པ།.js";
import SAMPLE_15 from "../../js/14.ཁྱེད་རང་ལ་ཞི་བདེ་ཡོང་བར་ཤོག.js";
import SAMPLE_16 from "../../js/15.ཁྱོད་ཀྱིས་ཡེ་ཤུ་ལ་དད་པ་བྱེད་དམ།.js";
import SAMPLE_17 from "../../js/16.ཁྱོད་རང་སྡིག་པའི་ཁལ་ནས། (དབང་ཡོད་དབང་།).js";
import SAMPLE_18 from "../../js/17.གངས་རི་དང་གནམ་ལ་བལྟས་ནས།.js";
import SAMPLE_19 from "../../js/18.གྲོགས་པོ་ཁྱེད་ལ།.js";
import SAMPLE_20 from "../../js/19.དགའ་བ་ལ་དང་། དགའ་བ་ལ།.js";
import SAMPLE_21 from "../../js/20.རྒྱལ་པོ་དང་གཙོ་བོའི་གཙོ་བོ་གཟི་བརྗིད།.js";
import SAMPLE_22 from "../../js/21.སྒོ་གཅིག་རང་ཡོད།.js";
import SAMPLE_23 from "../../js/22.ངའི་མཉམ་དུ་གཙོ་བོ་ཡ་ཝཱེ་ལ་བསྟོད་པ་འབུལ།.js";
import SAMPLE_24 from "../../js/23.ང་ཚོ་འདི་རུ་འཛོམས་འཛོམས།.js";
import SAMPLE_25 from "../../js/24.ང་ཚོ་ཡི་སྐྱབས་མགོན་ཡེ་ཤུ་རེད།.js";
import SAMPLE_26 from "../../js/25.ང་ཚོའི་སྐྱབས་མགོན་ཡེ་ཤུ།.js";
import SAMPLE_27 from "../../js/26.ང་ཚོའི་སྐྱབས་མགོན་ཡེ་ཤུ་རེད།.js";
import SAMPLE_28 from "../../js/27.ང་ཚོའི་སྙིང་ནས་བརྩེ་བའི།.js";
import SAMPLE_29 from "../../js/28.ང་ཚོའི་མི་རིགས་སྤུན་ཟླ་རྣམ་པ་ཚོ།.js";
import SAMPLE_30 from "../../js/29.ང་ཚོའི་གཙོ་བོ་ཡེ་ཤུ།.js";
import SAMPLE_31 from "../../js/30.ང་ཚོའི་ཡབ་ཆེན་དཀོན་མཆོག.js";
import SAMPLE_32 from "../../js/31.ང་ཚོས་དགའ་བའི་ལོན་ཞིག་ཐོས།.js";
import SAMPLE_33 from "../../js/32.ངས་ཡེ་ཤུ་ལ་དད་པ་བྱེད་བཞིན་ཡོད།.js";
import SAMPLE_34 from "../../js/33.ངའི་སེམས་ལ་བསྟོད་པ་ཡོད།.js";
import SAMPLE_35 from "../../js/34.རྗེས་ལ་རྗེས་ལ་གཙོ་བོ་ཡེ་ཤུའི་རྗེས་ལ།.js";
import SAMPLE_36 from "../../js/35.ཉིན་གཅིག་མི་གཅིག་སོང་ནས།.js";
import SAMPLE_37 from "../../js/36.སྙིང་རྗེ་དང་བྱམས་ལྡན།.js";
import SAMPLE_38 from "../../js/37.སྟོད་གངས་རི་སྟེང་ནས་ཉི་མ་ཤར།.js";
import SAMPLE_39 from "../../js/38.སྟོབས་དང་གཟི་བརྗིད་ལྡན་པའི། .js";
import SAMPLE_40 from "../../js/39.བསྟོད་དབྱངས་ཕུལ་ཞིག.js";
import SAMPLE_41 from "../../js/40.ཐར་བའི་ཉི་མ་ཤར་བྱུང་།.js";
import SAMPLE_42 from "../../js/41.ཐུགས་རྗེ་ཆེ་ཡེ་ཤུ།.js";
import SAMPLE_43 from "../../js/42.དང་པོར་དཀོན་མཆོག་གི་རྒྱལ་སྲིད། ༡.js";
import SAMPLE_44 from "../../js/43.དང་པོར་དཀོན་མཆོག་གི་རྒྱལ་སྲིད། ༢.js";
import SAMPLE_45 from "../../js/44.ཐོག་མར་འཇིག་རྟེན་འདི་ལ་བསླེབས་དུས།.js";
import SAMPLE_46 from "../../js/45.དམ་པ་དམ་པ་དམ་པ། ༡.js";
import SAMPLE_47 from "../../js/46.དམ་པ་དམ་པ་དམ་པ། ༢ (ཧོ་ཟན་ནཱ།).js";
import SAMPLE_48 from "../../js/47.དམ་པའི་དམ་པ་མཁའ་ཁྱབ་འཇིག་རྟེན་མགོན།.js";
import SAMPLE_49 from "../../js/48.དུས་ཆེན་གྱི་མཆོག.js";
import SAMPLE_50 from "../../js/49.དེ་རིང་སྐྱབས་མགོན་འཁྲུངས་སོང་།.js";
import SAMPLE_51 from "../../js/50.དེ་རིང་ང་ཚོ་འཛོམས་འཛོམས།.js";
import SAMPLE_52 from "../../js/51.དེ་རིང་ཉི་མ་འདི། .js";
import SAMPLE_53 from "../../js/52.དེ་རིང་ནི་ཁྱེད་ཀྱི་འཁྲུངས་སྐར་རེད། .js";
import SAMPLE_54 from "../../js/53.སྡིག་པ་ནས་ཐར་བའི་ལམ་གཅིག་ཡོད།.js";
import SAMPLE_55 from "../../js/54.སྡིག་སེལ་ཞུ་བར།.js";
import SAMPLE_56 from "../../js/55.ནམ་མཁའི་ཞིང་ཁམས་སུ་བཞུགས་པའི།.js";
import SAMPLE_57 from "../../js/56.དཔལ་ལྡན་རྒྱལ་སྲས་གྲོངས་པའི་ཤིང་རྒྱ་གྲམ།.js";
import SAMPLE_58 from "../../js/57.སྤྲིན་དཀར་པོའི་གཙོ་བོ་མ་ཤི་ཀ .js";
import SAMPLE_59 from "../../js/58.ཕེབས་ཤོག.js";
import SAMPLE_60 from "../../js/59.ཕོ་ཉ་རྣམས་སྐྱིད་གླུ་ལེན་གྱིས།.js";
import SAMPLE_61 from "../../js/60.བེད་ཐན་ཡ་དང་ཉེ་བར་ཕེབས་པའི་ཚེ།.js";
import SAMPLE_62 from "../../js/61.བྱིན་རླབས་ཀྱི་དཀོན་མཆོག་ལ་བསྟོད་པ།.js";
import SAMPLE_63 from "../../js/62.བླ་མེད་དཀོན་མཆོག.js";
import SAMPLE_64 from "../../js/63.མ་འོངས་པའི་གཞོན་ནུ་རྣམ་པ།.js";
import SAMPLE_65 from "../../js/65.གཙོ་བོ་ང་ཡི་རྫི་བོ་ལགས།.js";
import SAMPLE_66 from "../../js/66.གཙོ་བོ་ཕེབས་བྱུང་འཇིག་རྟེན་དགའ་བར་གྱིས། .js";
import SAMPLE_67 from "../../js/67.གཙོ་བོ་ཡེ་ཤུ་མ་ཤི་ཀ་ལ།.js";
import SAMPLE_68 from "../../js/68.གཙོ་བོ་ཡེ་ཤུ་ལ་ཐུགས་རྗེ་ཆེ།.js";
import SAMPLE_69 from "../../js/69.གཙོ་བོ་ཡེ་ཤུའི་མཚན།.js";
import SAMPLE_70 from "../../js/70.གཙོ་བོ་ཡེ་ཤུའི་མཚན་ནས།.js";
import SAMPLE_71 from "../../js/71.གཙོ་བོ་ཡེ་ཤུར་ཐུགས་རྗེ་ཆེ་ཞུ།.js";
import SAMPLE_72 from "../../js/72.གཙོ་བོས་ཇི་ལྟར་གསུངས་པ།.js";
import SAMPLE_73 from "../../js/73.འཛམ་བུ་གླིང་གི་ཕྲུ་གུ་ཀུན་ལ།.js";
import SAMPLE_74 from "../../js/74.ཡ་ཧོ་ཝཱ་ལ་བསྟོད་པར་ཤོག .js";
import SAMPLE_75 from "../../js/75.ཡེ་ཤུ་ངས་ཁྱེད་ལ་ཚང་མ་འབུལ་རྒྱུ་ཡིན།.js";
import SAMPLE_76 from "../../js/76.ཡེ་ཤུ་ང་རྒྱ་གྲམ་རྩར་འདྲེན་རོགས།.js";
import SAMPLE_77 from "../../js/77.ཡེ་ཤུས་སྡིག་ཅན་རྣམས་འདྲེན་ཡོང་།.js";
import SAMPLE_78 from "../../js/78.ཡེ་ཤུ་མ་ཤི་ཀ་ནི།.js";
import SAMPLE_79 from "../../js/79.ཡེ་ཤུ་ཇི་འདྲའི་མཛའ་བརྩེ་ལྡན།.js";
import SAMPLE_80 from "../../js/80.ཡེ་ཤུས་ཇི་ལྟར་གསུངས་པ་རེད། .js";
import SAMPLE_81 from "../../js/81.ཡེ་ཤུས་ང་ལ་བྱམས་པ་གནང་།.js";
import SAMPLE_82 from "../../js/82.ཡོང་གིན་ཡོང་གིན་ཡོང་གིན་འདུག.js";
import SAMPLE_83 from "../../js/83.རང་སྲོག་སྐྱོབ་མཁན་དེས།.js";
import SAMPLE_84 from "../../js/84.རི་དེར་ཡར་ལ་འགོས་ནས།.js";
import SAMPLE_85 from "../../js/85.ལོངས་ཤིག་ལོངས་ཤིག་དམག་མི་རྣམས།.js";
import SAMPLE_86 from "../../js/86.ཤར་ཡེ་ཤུ་ཤར།.js";
import SAMPLE_87 from "../../js/87.ས་གཞི་འདི་ཐམས་ཅད།.js";
import SAMPLE_88 from "../../js/88.སུ་ནམ་མཁའ་ནས་ཕེབས་པ་ཡིན།.js";
import SAMPLE_89 from "../../js/89.སོའོ། གཙོ་བོ་སྐྱབས་མགོན་ཡེ་ཤུ་ལ།.js";
import SAMPLE_90 from "../../js/90.ཧོ་ཟན་ནཱ།  ཧོ་ཟན་ནཱ། .js";
import SAMPLE_91 from "../../js/91.ཨ་ཧ་ནམ་མཁའི་བཞུགས་ཁྲི་སྟེང་ལ།.js";
import SAMPLE_92 from "../../js/92.ཨ་ཧ་ལ་ནི་ཡེ་ཤུ་ངའི་སེམས་ལ་ཡོད།.js";
import SAMPLE_93 from "../../js/93.ཨ་ཧ་ཨ་ཧ་ཨ་ཧ་ལགས་ནི།.js";
import SAMPLE_94 from "../../js/94.ཨིམ་མ་ནུ་ཨེལ།.js";
import SAMPLE_95 from "../../js/95.ནམ་མཁར་བཞུགས་པའི་ཡབ། .js";
import SAMPLE_96 from "../../js/96.དཀོན་མཆོག་ཉིད་ཀྱི་བཀའ། .js";
import SAMPLE_97 from "../../js/97.དཀོན་མཆོག་ཡབ་ལ་བསྟོད་པ། .js";
import SAMPLE_98 from "../../js/98.གཙོ་བོ་ལ་བསྟོད་དབྱངས།། .js";
import SAMPLE_99 from "../../js/99.དཀོན་མཆོག་སྲས་ལ་བསྟོད་པ། .js";
import SAMPLE_100 from "../../js/100.གཙོ་བོས་ཐོག་མར་ས་གཞི་བཀོད། .js";
import SAMPLE_101 from "../../js/101.ཀྱེ། དད་ལྡན་ཚང་མ་ཤོག་ཅིག.js";
import SAMPLE_102 from "../../js/102.དཀོན་མཆོག་ཁྱེད་དང་མཇལ་ན། .js";
import SAMPLE_103 from "../../js/103.དཀོན་མཆོག་གི་ཐུགས་རྗེ་བཀའ་དྲིན་དེ།.js";
import SAMPLE_104 from "../../js/104.དཀོན་མཆོག་གི་བྱམས་སེམས།.js";
import SAMPLE_105 from "../../js/105.དཀོན་མཆོག་མཉམ་དུ་འབྲེལ་བ་མེད་ན།.js";
import SAMPLE_106 from "../../js/106.དཀོན་མཆོག་ཉིད་ཀྱི་སྲས་ཡེ་ཤུ། .js";
import SAMPLE_107 from "../../js/107.དཀོན་མཆོག་ནི་ཁྱེད་ཀྱི་སྲུང་སྐྱོབ་གནང་མཁན།.js";
import SAMPLE_108 from "../../js/108.དཀོན་མཆོག་ཡེ་ཤུ་བཞུད་སོང་། .js";
import SAMPLE_109 from "../../js/109.བཀའ་དྲིན་གྱི་ཡིད་སེམས་ཡར་ལ་འབུལ། .js";
import SAMPLE_110 from "../../js/110.བཀྲ་ཤིས་འཇའ་ཚོན་རི་མོ།.js";
import SAMPLE_111 from "../../js/111.བཀྲ་ཤིས་ཤོག .js";
import SAMPLE_112 from "../../js/112.སྐལ་བཟང་ལ། བདག་གི་སེམས་ཀྱི་གཏིང་ནས།.js";
import SAMPLE_113 from "../../js/113.སྐྱབས་མགོན་ཁྱེད་ཀྱི་བཀའ་དྲིན་གྱིས། .js";
import SAMPLE_114 from "../../js/114.སྐྱབས་མགོན་གཙོ་བོ་ང་ཡི་སྐྱབས་མགོན།.js";
import SAMPLE_115 from "../../js/115.སྐྱབས་མགོན་གཙོ་བོ་ཡེ་ཤུ།.js";
import SAMPLE_116 from "../../js/116.སྐྱབས་མགོན་གཙོ་བོ་ཡེ་ཤུ་ལགས། .js";
import SAMPLE_117 from "../../js/117.སྐྱབས་མགོན་གཙོ་བོ་ཡེ་ཤུ་ལགས།.js";
import SAMPLE_118 from "../../js/118.སྐྱབས་མགོན་ཡེ་ཤུ། .js";
import SAMPLE_119 from "../../js/119.སྐྱབས་མགོན་ཡེ་ཤུ་ནི་འཇིག་རྟེན་གྱི་འོད་ཟེར་ཡིན།།.js";
import SAMPLE_120 from "../../js/120.སྐྱབས་མགོན་ཡེ་ཤུ་མིན་ནས།.js";
import SAMPLE_121 from "../../js/121.སྐྱབས་མགོན་སེམས་ཅན་ཡོངས་ཀྱི་སྐྱབས་མགོན། .js";
import SAMPLE_122 from "../../js/122.སྐྱིད་སྡུག་གཉིས་ཀྱི་མི་ཚེ་ལ།.js";
import SAMPLE_123 from "../../js/123.སྐྱེས་ས་སྐྱེས་ཡུལ་བཞག་ནས། .js";
import SAMPLE_124 from "../../js/124.ཁྱོད་ཀྱི་ཁང་བ་བྱེ་ཐང་ནས་ལས་མི་ཉན།.js";
import SAMPLE_125 from "../../js/125.ཁྱེད་ཀྱིས་སྡིག་པ་མ་བྱས་ཟེར་ན།.js";
import SAMPLE_126 from "../../js/126.ཁྱེད་ནི་ང་ཡི་དཀོན་མཆོག.js";
import SAMPLE_127 from "../../js/127.ཁྱེད་ནི་ང་ཡི་སྦས་ས་ཡིན།.js";
import SAMPLE_128 from "../../js/128.ཁྱོད་ནི་གཙོ་བོའི་བྱམས་པ་ཐོབ་པའི་ཕྱིར། .js";
import SAMPLE_129 from "../../js/129.ཁྱེད་ལ་སེམས་ཁྲལ་ཡོད་ན།.js";
import SAMPLE_130 from "../../js/130.གང་ཡང་། གང་ཡང་།.js";
import SAMPLE_131 from "../../js/131.གངས་རིའི་རྩེ་མོའི་ཡུལ་དུ། .js";
import SAMPLE_132 from "../../js/132.གལ་ཏེ་བདག་གི་མི་ཡིས་ཁེངས་སྐྱུང་སྒོ་ནས། .js";
import SAMPLE_133 from "../../js/133.དགའ་སྤྲོ་ངང་ནས་སྐྱིད་གླུ་གཙོ་བོ་ཡེ་ཤུ་ལ། .js";
import SAMPLE_134 from "../../js/134.དགའ་བ་ལ་གཙོ་བོ་ཁྱེད་ཀྱི་འཕྲིན་བཟང་ཐོས། .js";
import SAMPLE_135 from "../../js/135.དགའ་བསུ་ཞུ་བཞིན་ཡོད།.js";
import SAMPLE_136 from "../../js/136.འགྲོ། འགྲོ། འགྲོ། གསུང་རབ་བཤད་དུ་འགྲོ།.js";
import SAMPLE_137 from "../../js/137.ང་ཅི་ལྟར་ཡོད་བཞིན་ཡོང་གི་ཡོད།.js";
import SAMPLE_138 from "../../js/138.ང་ནི་ཁྱོད་ཀྱི་དཀོན་མཆོག་ཡིན། .js";
import SAMPLE_139 from "../../js/139.ང་ནི་ཁྱོད་ཀྱི་ཨ་ཕ་ཡིན།.js";
import SAMPLE_140 from "../../js/140.ང་ནི་ཁྱོད་ཚོའི་དཀོན་མཆོག .js";
import SAMPLE_141 from "../../js/141.ང་ནི་ཡ་མཚན་སྒོ་ནས་མཛད་ཅིང་།.js";
import SAMPLE_142 from "../../js/142.ང་ཚོ་དཀོན་མཆོག་གིས་བྱམས་པའི་བུ་དང་བུ་མོ།.js";
import SAMPLE_143 from "../../js/143.ང་ཚོ་འདི་ལ་འཛོམས་འཛོམས།  .js";
import SAMPLE_144 from "../../js/144.ང་ཚོ་ཚང་མ་འདི་རུ་འཛོམས་འཛོམས་ནས།.js";
import SAMPLE_145 from "../../js/145.ང་ཚོ་ཨ་མའི་ཁོག་ནས་ཡོད་དུས་སུ། .js";
import SAMPLE_146 from "../../js/146.ང་ཚོའི་དཀོན་མཆོག་ཡ་ཧོ་ཝཱ། .js";
import SAMPLE_147 from "../../js/147.ང་ཚོའི་ཐར་ལམ་གང་ཡིན་ནམ།.js";
import SAMPLE_148 from "../../js/148.ང་ཚོ་རྒྱལ་ཁྲིའི་དྲུང་དུ།.js";
import SAMPLE_149 from "../../js/149.ང་ཚོས་འདི་ནས་ཁྱེད་ལ་བསྟོད་དབྱངས་འབུལ།.js";
import SAMPLE_150 from "../../js/150.ང་ཡི་དཀོན་མཆོག་ངས་ཁྱེད་ལ་བསྟོད།.js";
import SAMPLE_151 from "../../js/151.ང་ཡི་སྐྱབས་མགོན་ཡེ་ཤུ།.js";
import SAMPLE_152 from "../../js/152.ང་ཡི་ཕ་ཡུལ།.js";
import SAMPLE_153 from "../../js/153.ང་ཡི་མི་ཚེ་འདི་ནི།.js";
import SAMPLE_154 from "../../js/154.ང་ཡི་གཙོ་བོ་དཀོན་མཆོག.js";
import SAMPLE_155 from "../../js/155.ང་ཡི་སེམས་གཏིང་ནས་ཐུགས་རྗེ་ཆེ་ཞུ།.js";
import SAMPLE_156 from "../../js/156.ང་ཡི་སེམས་ཀྱི་བརྟེན་ས།.js";
import SAMPLE_157 from "../../js/157.ང་ཡི་སེམས་ཡབ་དཀོན་མཆོག་ལ།.js";
import SAMPLE_158 from "../../js/158.ང་ཡི་བརྩེ་བའི་བུ་དང་བུ་མོ།.js";
import SAMPLE_159 from "../../js/159.ང་ཡེ་ཤུའི་རྗེས་སུ་འབྲང་བར་ཐག་བཅད།.js";
import SAMPLE_160 from "../../js/160.ང་རང་ཁྱེད་ཀྱི་གམ་དུ་བསྡད་ན་འདོད།  .js";
import SAMPLE_161 from "../../js/161.ངའི་སེམས་ཉིད། .js";
import SAMPLE_162 from "../../js/162.ངའི་བརྩེ་བའི་ཡབ་ཆེན་ལགས།.js";
import SAMPLE_163 from "../../js/163.ངའི་སྙིང་གི་སྐྱབས་མགོན་ཡེ་ཤུ་ལགས།.js";
import SAMPLE_164 from "../../js/164.ངའི་ཞི་བདེ་ཁྱོད་ལ་གནང་རྒྱུ་ཡིན།.js";
import SAMPLE_165 from "../../js/165.ངས་ད་ལྟ་ཡབ་དཀོན་མཆོག་ངོ་ཤེས་བྱུང་། .js";
import SAMPLE_166 from "../../js/166.ངས་རིན་ཐང་ཆེ་བའི་སྤོས་ཆུ། .js";
import SAMPLE_167 from "../../js/167.ངས་ལག་པ་ཡར་བརྐྱངས་ནས།.js";
import SAMPLE_168 from "../../js/168.ང་ཚོའི་དཀོན་མཆོག་ལ་བསྟོད་དབྱངས་ཕུལ།.js";
import SAMPLE_169 from "../../js/169.ང་ཡི་གཙོ་བོ་ལུག་རྫི།.js";
import SAMPLE_170 from "../../js/170.སྔ་དུས་པེད་ལེ་ཧེམ་ལ། .js";
import SAMPLE_171 from "../../js/171.འཇིག་རྟེན་གྱི་རྒྱལ་སྲིད་རྣམས།.js";
import SAMPLE_172 from "../../js/172.འཇིག་རྟེན་འདི་བཞིན་མ་བཀོད་སྔོན། ༡ .js";
import SAMPLE_173 from "../../js/173.འཇིག་རྟེན་འདི་བཞིན་མ་བཀོད་སྔོན། ༢ .js";
import SAMPLE_174 from "../../js/174.ཤར་ཕྱོགས་རི་བོའི་རྩེ་དེ་ནས། .js";
import SAMPLE_175 from "../../js/175.ཉིན་བཟང་སྐར་བཟང་གི་དུས་ཚོད་འདི་ལ། .js";
import SAMPLE_176 from "../../js/176.གཉེན་སྒྲིག་བྱིན་རླབས་ཀྱི་གླུ་གཞས།.js";
import SAMPLE_177 from "../../js/177.སྙིང་རྗེའི་བྱིན་རླབས་གནང་ནས། .js";
import SAMPLE_178 from "../../js/178.ཐག་རིང་རི་བོའི་རྩེ་མོ་ནས། .js";
import SAMPLE_179 from "../../js/179.ཐུགས་རྗེ་ཆེ་ཡེ་ཤུ།.js";
import SAMPLE_180 from "../../js/180. ཐུགས་རྗེ་གནང་བའི་དུས་ཚོད།.js";
import SAMPLE_181 from "../../js/181.ཐུགས་ཉིད་ཡིན་པའི་དཀོན་མཆོག.js";
import SAMPLE_182 from "../../js/182.ཐོག་མར་ཐུགས་སུ་བཅངས་ནས། .js";
import SAMPLE_183 from "../../js/183.དད་པ་ཡེ་ཤུ་ལ་བྱེད་ན།.js";
import SAMPLE_184 from "../../js/184.དད་པའི་སྨོན་ལམ།.js";
import SAMPLE_185 from "../../js/185.དམ་པ། དམ་པ། དམ་པའི་དཀོན་མཆོག.js";
import SAMPLE_186 from "../../js/186.དམ་པའི་ཐུགས་ཉིད་ཀྱི་འབྲས་བུ། .js";
import SAMPLE_187 from "../../js/187.དམ་པའི་ཐུགས་ཉིད་ང་འདི་ལ་བསྡད་ཡོད། .js";
import SAMPLE_188 from "../../js/188.དམ་པའི་ཐུགས་ཉིད་ཕེབས་ཤོག.js";
import SAMPLE_189 from "../../js/189.དམ་པའི་ས་ཆ་འདིར།.js";
import SAMPLE_190 from "../../js/190.དམ་པའི་ས་ཆ་ལ། .js";
import SAMPLE_191 from "../../js/191.དེ་རིང་ཉི་མ་འདི་གཙོ་བོས་གནང་བ་རེད། .js";
import SAMPLE_192 from "../../js/192.དེ་རིང་འདི་རུ་འཛོམས་པའི་སྐུ་མགྲོན་རྣམ་པ། .js";
import SAMPLE_193 from "../../js/193.དྲིན་དྲིན་ང་ཡི་དཀོན་མཆོག་ཡེ་ཤུའི་དྲིན། .js";
import SAMPLE_194 from "../../js/194.གདོད་མ་ཉིད་ནས་ཇི་སྲིད་འཚོ་བའི་བར། .js";
import SAMPLE_195 from "../../js/195.ངའི་ཞི་བདེ།.js";
import SAMPLE_196 from "../../js/196.བདུད་ཀྱི་དོན་རྣམས་རྩ་ནས་མེད་པར་བཟོས། .js";
import SAMPLE_197 from "../../js/197.འདས་པའི་ཤི་བོ་དེ་དག་སྙིང་རེ་རྗེ།། .js";
import SAMPLE_198 from "../../js/198.ནམ་མཁའི་དམག་མི། .js";
import SAMPLE_199 from "../../js/199.ནམ་མཁའི་ཨ་ཕ། .js";
import SAMPLE_200 from "../../js/200.གནམ་ས་གཉིས་ཀྱི་བདག་པོ། .js";
import SAMPLE_201 from "../../js/201.མནའ་མ་གསར་བ་མག་པ་གསར་བ།.js";
import SAMPLE_202 from "../../js/202.ཕེབས་ཤོག་ཕེབས་ཤོག.js";
import SAMPLE_203 from "../../js/203.ལོ་རྒྱུས་བཤད་མཁན་དེས་ཁྲིད་པའི། .js";
import SAMPLE_204 from "../../js/204.བུ་ངའི་འཇིག་རྟེན་འཁོར་བ་འདི་ནང་ལ། .js";
import SAMPLE_205 from "../../js/205.བུ་ཆུང་ང་རང་སྤྲོ། .js";
import SAMPLE_206 from "../../js/206.བུ་དང་བུ་མོ་འདི་རུ་ཕེབས། .js";
import SAMPLE_207 from "../../js/207.བོད་པའི་བུ་དང་བུ་མོ།.js";
import SAMPLE_208 from "../../js/208.བྱམས་དང་སྙིང་རྗེ་ལྡན་པའི།.js";
import SAMPLE_209 from "../../js/209.བླ་ན་མེད་པའི་དཀོན་མཆོག་གི་ཞབས་དྲུང་དུ།.js";
import SAMPLE_210 from "../../js/210.བླ་ན་མེད་པའི་རྒྱལ་པོ།.js";
import SAMPLE_211 from "../../js/211.སྤོབས་པ་བསྐྱེད།  སྟོབས་ཤུགས་འཛོམས། .js";
import SAMPLE_212 from "../../js/212.མད་ཐཱ་དང་། མཱར་ཀུ། ལོ་ཀུ། .js";
import SAMPLE_213 from "../../js/213.མིར་ཡམ་ནང་བཞིན། .js";
import SAMPLE_214 from "../../js/214.མུན་པས་གཡོགས་པའི་འཇིག་རྟེན་ཧྲིལ་པོ་ལ།.js";
import SAMPLE_215 from "../../js/215.མེ་ཏོག་དཀར་པོ། ༡ .js";
import SAMPLE_216 from "../../js/216.མེ་ཏོག་དཀར་པོ། ༢ .js";
import SAMPLE_217 from "../../js/217.མོ་ཤེ་ཨི་ཅིབ་ན་ཡོད་དུས།.js";
import SAMPLE_218 from "../../js/218.གཙོ་བོ། .js";
import SAMPLE_219 from "../../js/219.གཙོ་བོ་དཀོན་མཆོག་དམ་པ་དང་རྣམ་པར་དག་པ།.js";
import SAMPLE_220 from "../../js/220.གཙོ་བོ་དཀོན་མཆོག་བཞིན་དུ།.js";
import SAMPLE_221 from "../../js/221.གཙོ་བོ་ནི་ཞི་བདེ། .js";
import SAMPLE_222 from "../../js/222.གཙོ་བོ་རྣམས་ཀྱི་གཙོ་བོ།.js";
import SAMPLE_223 from "../../js/223.གཙོ་བོ་ཡ་ཝཱེས་བཀོད་གནང་བའི། .js";
import SAMPLE_224 from "../../js/224.གཙོ་བོ་ཡེ་ཤུ་ཁྱེད་ཀྱི་སེམས་ནང་དུ་བཞུགས་ཡོད།.js";
import SAMPLE_225 from "../../js/225.གཙོ་བོ་ཡེ་ཤུ་ཤིང་རྒྱ་གྲམ་སྟེང་གྲོངས་སོང་།.js";
import SAMPLE_226 from "../../js/226.གཙོ་བོ་ཡེ་ཤུ་ང་ཚོའི་རྒྱལ་པོ།.js";
import SAMPLE_227 from "../../js/227.གཙོ་བོ་ཡེ་ཤུ་ངའི་སེམས་ནང་ལ་ཡོད།.js";
import SAMPLE_229 from "../../js/229.གཙོ་བོ་ཡེ་ཤུ་མ་ཤི་ཀ.js";
import SAMPLE_230 from "../../js/230.གཙོ་བོ་ཡེ་ཤུ་ཞོགས་པ་སྔ་མོ།.js";
import SAMPLE_231 from "../../js/231.གཙོ་བོ་ཡེ་ཤུ་ལ་བསྟོད། .js";
import SAMPLE_232 from "../../js/232.གཙོ་བོ་ཡེ་ཤུའི་མཚན་ལ་དབང་ཤུགས་ཡོད།.js";
import SAMPLE_233 from "../../js/233.གཙོ་བོ་ཡེ་ཤུས་ང་ལ་ཞལ་འབོད་གནང་།.js";
import SAMPLE_234 from "../../js/234.གཙོ་བོའི་གཟི་བརྗིད། .js";
import SAMPLE_235 from "../../js/235.བརྩེ་ལྡན་གངས་ཕྲུག་གཞོན་ནུ་ཚོ། .js";
import SAMPLE_236 from "../../js/236.མཚམས་མཚམས་དཀའ་ངལ་འཕྲད་འདུག.js";
import SAMPLE_237 from "../../js/237.འཚོ་བ་སྐྱིད་པོ་མིན་ན། .js";
import SAMPLE_238 from "../../js/238.མཛེས་པའི་རི་སྒང་དུ། .js";
import SAMPLE_239 from "../../js/239.ཡ་ཝཱེ་ང་ཡི་ལུག་རྫི་བཟང་པོ། .js";
import SAMPLE_240 from "../../js/240.ཡ་ཧོ་ཝཱས་འཛམ་གླིང་བཀོད་པར་མཛད།.js";
import SAMPLE_241 from "../../js/241.ཡ་ཧོ་ཝཱ་ཡི་བྱམས་པ་མཐའ་མེད་པ་ཡིན།.js";
import SAMPLE_242 from "../../js/242.ཡབ་དཀོན་མཆོག་གི་རྒྱལ་སྲིད།.js";
import SAMPLE_243 from "../../js/243.ཡབ་དཀོན་མཆོག་ལ་གཟི་བརྗིད་ཡོང་བར་ཤོག.js";
import SAMPLE_244 from "../../js/244.ཡབ་ཆེན་དཀོན་མཆོག་གི་བྱམས་པ།.js";
import SAMPLE_245 from "../../js/245.ཡབ་ལགས། .js";
import SAMPLE_246 from "../../js/246.ཡེ་ཤུ་ང་ཁྱེད་ལ་དགའ། .js";
import SAMPLE_247 from "../../js/247.ཡེ་ཤུ་ངའི་སེམས་ནང་ཕེབས་ཤོག.js";
import SAMPLE_248 from "../../js/248.ཡེ་ཤུ་དང་ང་།.js";
import SAMPLE_249 from "../../js/249.ཡེ་ཤུ།  ཡེ་ཤུ། .js";
import SAMPLE_250 from "../../js/250.ཡེ་ཤུ། ཡེ་ཤུ། ཡེ་ཤུ།.js";
import SAMPLE_251 from "../../js/251.ཡེ་ཤུ་ཡི་ཕེབས་ལམ།.js";
import SAMPLE_252 from "../../js/252.ཡེ་ཤུ་ལ་ཕྱག་ཅིག་ཕུལ་དང་། .js";
import SAMPLE_253 from "../../js/253.ཡེ་ཤུ་ལགས།  དཀོན་མཆོག་མཁྱེན།.js";
import SAMPLE_254 from "../../js/254.ཡེ་ཤུའི་བྱམས་པའི་སྒོ་ནས།.js";
import SAMPLE_255 from "../../js/255.ཡེ་ཤུའི་མཚན་ལ་བསྟོད་པར་ཤོག.js";
import SAMPLE_256 from "../../js/256.ལག་པ་མཐོན་པོར་བཀྱགས་ནས།.js";
import SAMPLE_257 from "../../js/257.ལུག་རྫི་བཟང་པོ་ཡེ་ཤུ།.js";
import SAMPLE_258 from "../../js/258.ཤོག ངའི་མཉམ་དུ་ངའི་ཡབ་གྱི་ཡུལ་ལ་འགྲོ།.js";
import SAMPLE_259 from "../../js/259.ཤོག  ངའི་མཉམ་དུ་འགྲོ།.js";
import SAMPLE_260 from "../../js/260.ཤོག་ང་ཡི་བྱམས་པ། .js";
import SAMPLE_261 from "../../js/261.ཤོག་ཤོག་ངའི་རྩ་ལ་ཤོག .js";
import SAMPLE_262 from "../../js/262.ས་གཞི་ཆེན་པོའི་ཡང་སྟེང་ནས།.js";
import SAMPLE_263 from "../../js/263.སེམས་ལ་ཞི་བདེ་མེད་ན། .js";
import SAMPLE_264 from "../../js/264.སོའོ་ང་ཚོ་ཚང་མའི་ངན་པ། .js";
import SAMPLE_265 from "../../js/265.ཧ་ལེ་ལོའུ་ཡཱ་གཙོ་བོ་ལ་བསྟོད། .js";
import SAMPLE_266 from "../../js/266.ལྷོ་འཛམ་གླིང་ཉི་མ་རི་ལ་བརྒལ། .js";
import SAMPLE_267 from "../../js/267.ཨིམ་མ་ནུ་ཨེལ། ༡ .js";
import SAMPLE_268 from "../../js/268.ཨིམ་མ་ནུ་ཨེལ། ༢ .js";
import SAMPLE_269 from "../../js/269.ས་བསྐལ་བ་མ་ཆགས་ཡར་སྔོན་ན།.js";
import SAMPLE_270 from "../../js/270.གསུང་མགུར51།.js";
import SAMPLE_271 from "../../js/271.གསུང་མགུར67། .js";
import SAMPLE_272 from "../../js/272.གསུང་མགུར95།.js";
import SAMPLE_273 from "../../js/273.གསུང་མགུར103།.js";
import SAMPLE_274 from "../../js/274.གསུང་མགུར113།.js";
import SAMPLE_A1 from "../../js/A1.  །།དཀོན་མཆོག་གི་བཀའ་ཁྲིམས་བཅུ།། ༼ཨེ་ཅིབ་ཡུལ་ནས་ཐོན་པ།༽.js";
import SAMPLE_A2 from "../../js/A2. (this one is messed up) །།དཀོན་མཆོག་གི་བཀའ་ཁྲིམས་བཅུ།། ༼སྨོན་ལམ།༽.js";
import SAMPLE_A3 from "../../js/A3.  །།བཀའ་ཁྲིམས་རྣམས་ལས་གཙོ་ཤོས།།.js";
import SAMPLE_A4 from "../../js/A4.  །།སྐུ་ཚབ་རྣམས་ཀྱི་དམ་ཚིག།.js";
import SAMPLE_A5 from "../../js/A5.  །།དམ་པའི་བསྟོད་དབྱངས།།.js";
import SAMPLE_A6 from "../../js/A6. །།མིར་ཡམ་གྱི་བསྟོད་དབྱངས།།.js";
import SAMPLE_A7 from "../../js/A7.  །།ཡེ་ཤུས་མངག་པའི་དོན་ཆེན།།.js";
import SAMPLE_S8 from "../../js/S8.   གསུང་མགུར་བརྒྱད་པ།.js";
import SAMPLE_S23 from "../../js/S23.  གསུང་མགུར་ཉེར་གསུམ་པ།.js";
import SAMPLE_S32 from "../../js/S32.  གསུང་མགུར་སོ་གཉིས་པ།.js";
import SAMPLE_S40 from "../../js/S40.  གསུང་མགུར་བཞི་བཅུ་པ།.js";
import SAMPLE_S49 from "../../js/S49.  གསུང་མགུར་ཞེ་དགུ་པ།.js";
import SAMPLE_S51 from "../../js/S51.  གསུང་མགུར་ང་གཅིག་པ།.js";
import SAMPLE_S67 from "../../js/S67.  གསུང་མགུར་རེ་བདུན་པ།.js";
import SAMPLE_S84 from "../../js/S84.  གསུང་མགུར་གྱ་བཞི་པ།.js";
import SAMPLE_S91 from "../../js/S91.  གསུང་མགུར་གོ་གཅིག་པ།.js";
import SAMPLE_S95 from "../../js/S95.  གསུང་མགུར་གོ་ལྔ་པ།.js";
import SAMPLE_S96 from "../../js/S96.  གསུང་མགུར་གོ་དྲུག་པ།.js";
import SAMPLE_S113 from "../../js/S113. གསུང་མགུར་བརྒྱ་དང་བཅུ་གསུམ་པ།.js";
import SAMPLE_S133 from "../../js/S133. གསུང་མགུར་བརྒྱ་དང་སོ་གསུམ་པ།.js";
import SAMPLE_S143 from "../../js/S143. གསུང་མགུར་བརྒྱ་དང་ཞེ་གསུམ་པ།.js";
import SAMPLE_S145 from "../../js/S145. གསུང་མགུར་བརྒྱ་དང་ཞེ་ལྔ་པ།.js";
import SAMPLE_0014 from "../../js/001གཙོ་བོ་ཡེ་ཤུའི་སྨོན་ལམ།.js";
import SAMPLE_A from "../../js/བརྐུ་བྱེད་རྒྱུ་མིན།.js";
import SAMPLE_B from "../../js/མི་གཞན་ལ་རྫུན་གྱི་དཔང་པོ་བྱེད་རྒྱུ་མིན།.js";
import SAMPLE_C from "../../js/མི་གསོད་རྒྱུ་མིན།.js";
import SAMPLE_D from "../../js/ལོག་གཡེམ་བྱེད་རྒྱུ་མིན།.js";

const SAMPLE_SONGS = [SAMPLE_1,SAMPLE_2,SAMPLE_3,SAMPLE_4,SAMPLE_5,SAMPLE_6,SAMPLE_7,SAMPLE_8,SAMPLE_9,SAMPLE_10,SAMPLE_11,SAMPLE_12,SAMPLE_13,SAMPLE_14,SAMPLE_15,SAMPLE_16,SAMPLE_17,SAMPLE_18,SAMPLE_19,SAMPLE_20,SAMPLE_21,SAMPLE_22,SAMPLE_23,SAMPLE_24,SAMPLE_25,SAMPLE_26,SAMPLE_27,SAMPLE_28,SAMPLE_29,SAMPLE_30,SAMPLE_31,SAMPLE_32,SAMPLE_33,SAMPLE_34,SAMPLE_35,SAMPLE_36,SAMPLE_37,SAMPLE_38,SAMPLE_39,SAMPLE_40,SAMPLE_41,SAMPLE_42,SAMPLE_43,SAMPLE_44,SAMPLE_45,SAMPLE_46,SAMPLE_47,SAMPLE_48,SAMPLE_49,SAMPLE_50,SAMPLE_51,SAMPLE_52,SAMPLE_53,SAMPLE_54,SAMPLE_55,SAMPLE_56,SAMPLE_57,SAMPLE_58,SAMPLE_59,SAMPLE_60,SAMPLE_61,SAMPLE_62,SAMPLE_63,SAMPLE_64,SAMPLE_65,SAMPLE_66,SAMPLE_67,SAMPLE_68,SAMPLE_69,SAMPLE_70,SAMPLE_71,SAMPLE_72,SAMPLE_73,SAMPLE_74,SAMPLE_75,SAMPLE_76,SAMPLE_77,SAMPLE_78,SAMPLE_79,SAMPLE_80,SAMPLE_81,SAMPLE_82,SAMPLE_83,SAMPLE_84,SAMPLE_85,SAMPLE_86,SAMPLE_87,SAMPLE_88,SAMPLE_89,SAMPLE_90,SAMPLE_91,SAMPLE_92,SAMPLE_93,SAMPLE_94,SAMPLE_95,SAMPLE_96,SAMPLE_97,SAMPLE_98,SAMPLE_99,SAMPLE_100,SAMPLE_101,SAMPLE_102,SAMPLE_103,SAMPLE_104,SAMPLE_105,SAMPLE_106,SAMPLE_107,SAMPLE_108,SAMPLE_109,SAMPLE_110,SAMPLE_111,SAMPLE_112,SAMPLE_113,SAMPLE_114,SAMPLE_115,SAMPLE_116,SAMPLE_117,SAMPLE_118,SAMPLE_119,SAMPLE_120,SAMPLE_121,SAMPLE_122,SAMPLE_123,SAMPLE_124,SAMPLE_125,SAMPLE_126,SAMPLE_127,SAMPLE_128,SAMPLE_129,SAMPLE_130,SAMPLE_131,SAMPLE_132,SAMPLE_133,SAMPLE_134,SAMPLE_135,SAMPLE_136,SAMPLE_137,SAMPLE_138,SAMPLE_139,SAMPLE_140,SAMPLE_141,SAMPLE_142,SAMPLE_143,SAMPLE_144,SAMPLE_145,SAMPLE_146,SAMPLE_147,SAMPLE_148,SAMPLE_149,SAMPLE_150,SAMPLE_151,SAMPLE_152,SAMPLE_153,SAMPLE_154,SAMPLE_155,SAMPLE_156,SAMPLE_157,SAMPLE_158,SAMPLE_159,SAMPLE_160,SAMPLE_161,SAMPLE_162,SAMPLE_163,SAMPLE_164,SAMPLE_165,SAMPLE_166,SAMPLE_167,SAMPLE_168,SAMPLE_169,SAMPLE_170,SAMPLE_171,SAMPLE_172,SAMPLE_173,SAMPLE_174,SAMPLE_175,SAMPLE_176,SAMPLE_177,SAMPLE_178,SAMPLE_179,SAMPLE_180,SAMPLE_181,SAMPLE_182,SAMPLE_183,SAMPLE_184,SAMPLE_185,SAMPLE_186,SAMPLE_187,SAMPLE_188,SAMPLE_189,SAMPLE_190,SAMPLE_191,SAMPLE_192,SAMPLE_193,SAMPLE_194,SAMPLE_195,SAMPLE_196,SAMPLE_197,SAMPLE_198,SAMPLE_199,SAMPLE_200,SAMPLE_201,SAMPLE_202,SAMPLE_203,SAMPLE_204,SAMPLE_205,SAMPLE_206,SAMPLE_207,SAMPLE_208,SAMPLE_209,SAMPLE_210,SAMPLE_211,SAMPLE_212,SAMPLE_213,SAMPLE_214,SAMPLE_215,SAMPLE_216,SAMPLE_217,SAMPLE_218,SAMPLE_219,SAMPLE_220,SAMPLE_221,SAMPLE_222,SAMPLE_223,SAMPLE_224,SAMPLE_225,SAMPLE_226,SAMPLE_227,SAMPLE_229,SAMPLE_230,SAMPLE_231,SAMPLE_232,SAMPLE_233,SAMPLE_234,SAMPLE_235,SAMPLE_236,SAMPLE_237,SAMPLE_238,SAMPLE_239,SAMPLE_240,SAMPLE_241,SAMPLE_242,SAMPLE_243,SAMPLE_244,SAMPLE_245,SAMPLE_246,SAMPLE_247,SAMPLE_248,SAMPLE_249,SAMPLE_250,SAMPLE_251,SAMPLE_252,SAMPLE_253,SAMPLE_254,SAMPLE_255,SAMPLE_256,SAMPLE_257,SAMPLE_258,SAMPLE_259,SAMPLE_260,SAMPLE_261,SAMPLE_262,SAMPLE_263,SAMPLE_264,SAMPLE_265,SAMPLE_266,SAMPLE_267,SAMPLE_268,SAMPLE_269,SAMPLE_270,SAMPLE_271,SAMPLE_272,SAMPLE_273,SAMPLE_274,SAMPLE_A1,SAMPLE_A2,SAMPLE_A3,SAMPLE_A4,SAMPLE_A5,SAMPLE_A6,SAMPLE_A7,SAMPLE_S8,SAMPLE_S23,SAMPLE_S32,SAMPLE_S40,SAMPLE_S49,SAMPLE_S51,SAMPLE_S67,SAMPLE_S84,SAMPLE_S91,SAMPLE_S95,SAMPLE_S96,SAMPLE_S113,SAMPLE_S133,SAMPLE_S143,SAMPLE_S145,SAMPLE_0014,SAMPLE_A,SAMPLE_B,SAMPLE_C,SAMPLE_D];

const DB_NAME = "DIGIHYMNAL_SONG";

export default class SongCollection {
    constructor() {
        this.db = DB.getInstance(DB_NAME);
    }

    async initSample() {
        let tasks = [];

        SAMPLE_SONGS.forEach(async (song) => {
            tasks.push(await this.db.setItem(song.id, song));
        })

        return Promise.all(tasks);
    }

    async list({ start, limit, languageCode }) {

        // TODO
        // Update to pull using AJAX request

        let tasks = [];
        let result = [];
        let ids = await this.db.keys();
        ids = ids.slice(start || 0, limit || 10);

        // load and push songs to an array consequently
        (ids || []).forEach((id) => {
            tasks.push(() => new Promise(async (next, bad) => {
                result.push(await this.get(id));
                next();
            }));
        });

        // Return data
        tasks.push(() => {

            // Convert title to current language
            if (languageCode) {
                (result || []).forEach((item) => {
                    if (!item.title) return;

                    var found = false;
                    Object.keys(item.title).forEach((prop) => {
                        //console.log(prop, languageCode);
                        if (prop == languageCode) {
                          item.title = item.title[prop];
                          found = true;
                        }
                    });
                    if (!found) {
                      delete item.title;
                    }
                });
            }

            return Promise.resolve(result);
        });

        return tasks.reduce((promiseChain, currTask) => {
            return promiseChain.then(currTask);
        }, Promise.resolve([]));
    }

    async get(id) {
        return await this.db.getItem(id);
    }
    
    async set(id, data) {
        console.log({"id":id, "data":data})
        return await this.db.setItem(id, data, function() {
            console.log({"it worked!":id})
          });
    }

    async languages(id) {
        let song = await this.get(id);
        if (!song) return Promise.resolve([]);

        return Promise.resolve(Object.keys(song.title));
    }
};
